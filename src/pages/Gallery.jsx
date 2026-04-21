import { useState, useMemo } from 'react'
import galleryData from '../data/gallery.json'

const CATEGORIES = [
  { key: 'all', label: '전체' },
  { key: 'lab', label: '연구실' },
  { key: 'conference', label: '학회' },
  { key: 'seminar', label: '세미나' },
  { key: 'event', label: '행사' },
]

function PlaceholderImage({ title }) {
  return (
    <div className="w-full h-full bg-gradient-to-br from-indigo-100 to-slate-100 flex flex-col items-center justify-center gap-2 text-slate-400">
      <svg className="w-10 h-10 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1}
          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
      <span className="text-xs text-center px-4 leading-tight">{title}</span>
    </div>
  )
}

function GalleryCard({ item, onClick }) {
  const [imgError, setImgError] = useState(false)

  return (
    <div
      className="card overflow-hidden cursor-pointer group"
      onClick={() => onClick(item)}
    >
      <div className="aspect-[4/3] overflow-hidden bg-slate-100">
        {imgError ? (
          <PlaceholderImage title={item.title} />
        ) : (
          <img
            src={item.imageUrl}
            alt={item.title}
            onError={() => setImgError(true)}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        )}
      </div>
      <div className="p-4">
        <p className="font-semibold text-slate-900 text-sm leading-snug mb-1">{item.title}</p>
        <p className="text-xs text-slate-500 line-clamp-2">{item.description}</p>
        <p className="text-xs text-indigo-500 font-medium mt-2">{item.year}</p>
      </div>
    </div>
  )
}

function Lightbox({ item, onClose, onPrev, onNext }) {
  const [imgError, setImgError] = useState(false)

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
        aria-label="닫기"
      >
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Prev */}
      <button
        onClick={(e) => { e.stopPropagation(); onPrev() }}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors bg-black/30 rounded-full p-2"
        aria-label="이전"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Next */}
      <button
        onClick={(e) => { e.stopPropagation(); onNext() }}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors bg-black/30 rounded-full p-2"
        aria-label="다음"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Image + caption */}
      <div
        className="max-w-3xl w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="rounded-xl overflow-hidden bg-slate-900 aspect-[4/3] flex items-center justify-center">
          {imgError ? (
            <PlaceholderImage title={item.title} />
          ) : (
            <img
              src={item.imageUrl}
              alt={item.title}
              onError={() => setImgError(true)}
              className="w-full h-full object-contain"
            />
          )}
        </div>
        <div className="mt-4 text-center">
          <p className="text-white font-semibold">{item.title}</p>
          <p className="text-white/60 text-sm mt-1">{item.description}</p>
          <p className="text-indigo-400 text-xs mt-1">{item.year}</p>
        </div>
      </div>
    </div>
  )
}

export default function Gallery() {
  const [activeTab, setActiveTab] = useState('all')
  const [lightboxItem, setLightboxItem] = useState(null)

  const filtered = useMemo(() =>
    activeTab === 'all'
      ? galleryData
      : galleryData.filter((item) => item.category === activeTab),
    [activeTab]
  )

  const openLightbox = (item) => setLightboxItem(item)

  const closeLightbox = () => setLightboxItem(null)

  const moveLightbox = (dir) => {
    if (!lightboxItem) return
    const idx = filtered.findIndex((i) => i.id === lightboxItem.id)
    const next = (idx + dir + filtered.length) % filtered.length
    setLightboxItem(filtered[next])
  }

  return (
    <main className="py-16">
      <div className="section-container">
        {/* Header */}
        <div className="mb-10">
          <h1 className="section-title">Gallery</h1>
          <div className="section-divider" />
          <p className="text-slate-600 max-w-xl leading-relaxed">
            QUAS Lab의 연구 활동, 학회 참가, 세미나, 행사 사진을 모아두었습니다.
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap gap-2 mb-10 border-b border-slate-100 pb-4">
          {CATEGORIES.map((cat) => {
            const count = cat.key === 'all'
              ? galleryData.length
              : galleryData.filter((i) => i.category === cat.key).length
            return (
              <button
                key={cat.key}
                onClick={() => setActiveTab(cat.key)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors duration-150 ${
                  activeTab === cat.key
                    ? 'bg-indigo-600 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat.label}
                <span className={`ml-1.5 text-xs ${activeTab === cat.key ? 'opacity-75' : 'text-slate-400'}`}>
                  {count}
                </span>
              </button>
            )
          })}
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-slate-400 text-sm">사진이 없습니다.</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((item) => (
              <GalleryCard key={item.id} item={item} onClick={openLightbox} />
            ))}
          </div>
        )}

        {/* Upload guide */}
        <div className="mt-16 rounded-2xl bg-slate-50 border border-slate-200 p-8 text-center">
          <svg className="w-8 h-8 text-slate-300 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
          </svg>
          <p className="text-sm font-semibold text-slate-700 mb-1">사진 추가 방법</p>
          <p className="text-xs text-slate-500 leading-relaxed">
            이미지를 <code className="bg-slate-200 px-1 rounded text-slate-700">public/assets/gallery/</code>에 넣고,{' '}
            <code className="bg-slate-200 px-1 rounded text-slate-700">src/data/gallery.json</code>에 항목을 추가하세요.
          </p>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxItem && (
        <Lightbox
          item={lightboxItem}
          onClose={closeLightbox}
          onPrev={() => moveLightbox(-1)}
          onNext={() => moveLightbox(1)}
        />
      )}
    </main>
  )
}
