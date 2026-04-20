import { useState, useMemo } from 'react'
import archiveData from '../data/archive.json'

const CATEGORIES = [
  { key: 'all', label: '전체' },
  { key: 'papers', label: '논문', labelEn: 'Papers' },
  { key: 'books', label: '저서', labelEn: 'Books' },
  { key: 'awards', label: '수상', labelEn: 'Awards' },
  { key: 'patents', label: '특허', labelEn: 'Patents' },
]

/* ── icon components ── */
function PaperIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  )
}
function BookIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  )
}
function AwardIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  )
}
function PatentIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  )
}
function ExternalLinkIcon() {
  return (
    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  )
}
function DownloadIcon() {
  return (
    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
  )
}

const categoryConfig = {
  papers: { icon: <PaperIcon />, color: 'indigo', label: '논문' },
  books: { icon: <BookIcon />, color: 'emerald', label: '저서' },
  awards: { icon: <AwardIcon />, color: 'amber', label: '수상' },
  patents: { icon: <PatentIcon />, color: 'violet', label: '특허' },
}

const colorMap = {
  indigo: { bg: 'bg-indigo-50', text: 'text-indigo-600', border: 'border-indigo-100', badge: 'bg-indigo-100 text-indigo-700' },
  emerald: { bg: 'bg-emerald-50', text: 'text-emerald-600', border: 'border-emerald-100', badge: 'bg-emerald-100 text-emerald-700' },
  amber: { bg: 'bg-amber-50', text: 'text-amber-600', border: 'border-amber-100', badge: 'bg-amber-100 text-amber-700' },
  violet: { bg: 'bg-violet-50', text: 'text-violet-600', border: 'border-violet-100', badge: 'bg-violet-100 text-violet-700' },
}

/* ── individual card renderers ── */
function PaperCard({ item }) {
  const c = colorMap.indigo
  return (
    <div className="card p-5 sm:p-6">
      <div className="flex flex-col sm:flex-row sm:items-start gap-4">
        <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${c.bg} ${c.text}`}>
          <PaperIcon />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-slate-900 text-sm leading-snug mb-1">{item.title}</h3>
          <p className="text-xs text-slate-500 mb-0.5">{item.authors}</p>
          <p className="text-xs font-medium text-indigo-600 mb-3">
            {item.venue}, {item.year}
            {item.doi && <span className="text-slate-400 font-normal"> · {item.doi}</span>}
          </p>
          {item.abstract && (
            <p className="text-xs text-slate-600 leading-relaxed mb-3 line-clamp-2">{item.abstract}</p>
          )}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {item.tags?.map((t) => <span key={t} className="tag">{t}</span>)}
          </div>
          <ActionButtons fileUrl={item.fileUrl} />
        </div>
      </div>
    </div>
  )
}

function BookCard({ item }) {
  const c = colorMap.emerald
  return (
    <div className="card p-5 sm:p-6">
      <div className="flex flex-col sm:flex-row sm:items-start gap-4">
        <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${c.bg} ${c.text}`}>
          <BookIcon />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-slate-900 text-sm leading-snug mb-1">{item.title}</h3>
          <p className="text-xs text-slate-500 mb-0.5">{item.authors}</p>
          <p className="text-xs font-medium text-emerald-600 mb-3">
            {item.publisher}, {item.year}
            {item.isbn && <span className="text-slate-400 font-normal"> · ISBN {item.isbn}</span>}
          </p>
          {item.description && (
            <p className="text-xs text-slate-600 leading-relaxed mb-3">{item.description}</p>
          )}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {item.tags?.map((t) => <span key={t} className={`inline-block px-2.5 py-0.5 text-xs font-medium rounded-full ${c.badge}`}>{t}</span>)}
          </div>
          <ActionButtons fileUrl={item.fileUrl} />
        </div>
      </div>
    </div>
  )
}

function AwardCard({ item }) {
  const c = colorMap.amber
  return (
    <div className="card p-5 sm:p-6">
      <div className="flex flex-col sm:flex-row sm:items-start gap-4">
        <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${c.bg} ${c.text}`}>
          <AwardIcon />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-slate-900 text-sm leading-snug mb-1">{item.title}</h3>
          <p className="text-xs font-medium text-amber-600 mb-3">
            {item.organization}, {item.year}
          </p>
          {item.description && (
            <p className="text-xs text-slate-600 leading-relaxed mb-3">{item.description}</p>
          )}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {item.tags?.map((t) => <span key={t} className={`inline-block px-2.5 py-0.5 text-xs font-medium rounded-full ${c.badge}`}>{t}</span>)}
          </div>
          <ActionButtons fileUrl={item.fileUrl} />
        </div>
      </div>
    </div>
  )
}

function PatentCard({ item }) {
  const c = colorMap.violet
  return (
    <div className="card p-5 sm:p-6">
      <div className="flex flex-col sm:flex-row sm:items-start gap-4">
        <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${c.bg} ${c.text}`}>
          <PatentIcon />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-slate-900 text-sm leading-snug mb-1">{item.title}</h3>
          <p className="text-xs text-slate-500 mb-0.5">발명자: {item.inventors}</p>
          <div className="flex flex-wrap gap-x-4 gap-y-0.5 mb-3">
            <p className="text-xs font-medium text-violet-600">
              등록번호: {item.registrationNumber}
            </p>
            <span className={`inline-flex items-center text-xs font-semibold px-2 py-0.5 rounded-full ${item.status === '등록' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}`}>
              {item.status}
            </span>
          </div>
          {item.abstract && (
            <p className="text-xs text-slate-600 leading-relaxed mb-3 line-clamp-2">{item.abstract}</p>
          )}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {item.tags?.map((t) => <span key={t} className={`inline-block px-2.5 py-0.5 text-xs font-medium rounded-full ${c.badge}`}>{t}</span>)}
          </div>
          <ActionButtons fileUrl={item.fileUrl} />
        </div>
      </div>
    </div>
  )
}

function ActionButtons({ fileUrl }) {
  const hasFile = fileUrl && !fileUrl.includes('placeholder')
  return (
    <div className="flex gap-2">
      <a
        href={fileUrl || '#'}
        target="_blank"
        rel="noopener noreferrer"
        className={`btn-secondary text-xs ${!hasFile ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''}`}
        title={hasFile ? '새 탭에서 보기' : '파일 준비 중'}
      >
        <ExternalLinkIcon />
        View
      </a>
      <a
        href={fileUrl || '#'}
        download
        className={`btn-primary text-xs ${!hasFile ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''}`}
        title={hasFile ? '파일 다운로드' : '파일 준비 중'}
      >
        <DownloadIcon />
        Download
      </a>
    </div>
  )
}

function CategorySection({ catKey, items }) {
  const cfg = categoryConfig[catKey]
  const c = colorMap[cfg.color]
  if (!items || items.length === 0) return null

  const CardComponent = {
    papers: PaperCard,
    books: BookCard,
    awards: AwardCard,
    patents: PatentCard,
  }[catKey]

  return (
    <section>
      <div className="flex items-center gap-3 mb-5">
        <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${c.bg} ${c.text}`}>
          {cfg.icon}
        </div>
        <h2 className="text-lg font-bold text-slate-900">{cfg.label}</h2>
        <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${c.badge}`}>
          {items.length}
        </span>
      </div>
      <div className="space-y-4">
        {items.map((item) => (
          <CardComponent key={item.id} item={item} />
        ))}
      </div>
    </section>
  )
}

export default function Archive() {
  const [activeTab, setActiveTab] = useState('all')
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    const q = query.toLowerCase()
    const filterItems = (arr) =>
      arr.filter((item) => {
        const searchable = [
          item.title,
          item.authors,
          item.inventors,
          item.venue,
          item.publisher,
          item.organization,
          ...(item.tags ?? []),
        ]
          .filter(Boolean)
          .join(' ')
          .toLowerCase()
        return q === '' || searchable.includes(q)
      })

    return {
      papers: filterItems(archiveData.papers),
      books: filterItems(archiveData.books),
      awards: filterItems(archiveData.awards),
      patents: filterItems(archiveData.patents),
    }
  }, [query])

  const totalCount = Object.values(filtered).reduce((acc, arr) => acc + arr.length, 0)

  const categoriesToShow =
    activeTab === 'all'
      ? ['papers', 'books', 'awards', 'patents']
      : [activeTab]

  return (
    <main className="py-16">
      <div className="section-container">
        {/* Header */}
        <div className="mb-10">
          <h1 className="section-title">Archive</h1>
          <div className="section-divider" />
          <p className="text-slate-600 max-w-xl leading-relaxed">
            QUAS Lab의 논문, 저서, 수상, 특허를 조회하고 원문 파일을 다운로드할 수 있습니다.
          </p>
        </div>

        {/* Search */}
        <div className="relative mb-8 max-w-lg">
          <svg
            className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400"
            fill="none" viewBox="0 0 24 24" stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder="제목, 저자, 키워드로 검색..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-slate-200 bg-white text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400 transition"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-10 border-b border-slate-100 pb-4">
          {CATEGORIES.map((cat) => {
            const count = cat.key === 'all'
              ? totalCount
              : (filtered[cat.key]?.length ?? 0)
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
                <span className={`ml-1.5 text-xs ${activeTab === cat.key ? 'opacity-80' : 'text-slate-400'}`}>
                  {count}
                </span>
              </button>
            )
          })}
        </div>

        {/* Content */}
        {totalCount === 0 ? (
          <div className="text-center py-20 text-slate-400">
            <svg className="w-10 h-10 mx-auto mb-3 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <p className="text-sm">검색 결과가 없습니다.</p>
          </div>
        ) : (
          <div className="space-y-14">
            {categoriesToShow.map((catKey) => (
              <CategorySection key={catKey} catKey={catKey} items={filtered[catKey]} />
            ))}
          </div>
        )}
      </div>
    </main>
  )
}
