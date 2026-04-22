import { Link } from 'react-router-dom'
import { useVisitorCount } from '../hooks/useVisitorCount'

const researchAreas = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'AI-Native SDLC',
    desc: 'LLM과 생성형 AI를 소프트웨어 개발 전 주기에 내재화하는 방법론 연구. 요구사항 분석부터 배포·운영까지 AI가 협력하는 차세대 개발 프로세스를 설계합니다.',
    tags: ['LLM', 'Code Generation', 'DevOps'],
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'AI-Embedded Software V&V',
    desc: 'AI 오라클과 트랜스포머 기반 모델을 활용한 자동화 검증·검사(V&V) 체계를 연구합니다. 명세 적합성, 회귀 테스팅, 결함 예측에 AI를 접목합니다.',
    tags: ['Software Testing', 'AI Oracle', 'Verification'],
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Reinforcement Learning for SE',
    desc: '강화학습 에이전트를 소프트웨어 공학 문제에 적용합니다. 테스트 케이스 우선순위화, CI/CD 최적화, 자율 디버깅 등 RL 기반 SE 자동화를 탐구합니다.',
    tags: ['Reinforcement Learning', 'CI/CD', 'Test Automation'],
  },
]

const stats = [
  { value: '30+', label: '논문 게재' },
  { value: '5+', label: '특허 등록·출원' },
  { value: '10+', label: '산학협력 프로젝트' },
  { value: '2016', label: '연구실 설립' },
]

export default function Home() {
  const visitorCount = useVisitorCount()

  return (
    <main>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(99,102,241,0.15),_transparent_60%)]" />
        <div className="section-container relative py-28 sm:py-36">
          <div className="max-w-3xl">
            <span className="tag bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 mb-6 inline-block">
              Hongik University · Seoul, Korea
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-6">
              Quality, Understanding,<br />
              <span className="text-indigo-400">Assurance &amp; Software</span>
            </h1>
            <p className="text-slate-300 text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl">
              QUAS Lab은 AI-Native 소프트웨어 공학을 연구합니다. 인공지능을 개발 전 주기에 내재화하여
              소프트웨어 품질과 생산성을 동시에 혁신하는 것을 목표로 합니다.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/research" className="btn-primary text-sm px-5 py-2.5">
                연구 분야 보기
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link to="/pi" className="btn-secondary text-sm px-5 py-2.5 bg-white/10 border-white/20 text-white hover:bg-white/20">
                PI 소개
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-slate-100 bg-slate-50">
        <div className="section-container py-10">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-0 sm:divide-x sm:divide-slate-200">
            {stats.map((s) => (
              <div key={s.label} className="text-center px-4">
                <p className="text-3xl font-extrabold text-indigo-600">{s.value}</p>
                <p className="text-sm text-slate-500 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
          {visitorCount !== null && (
            <div className="flex items-center justify-end gap-1.5 mt-6 text-sm text-slate-400">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              오늘 방문자 <span className="font-semibold text-indigo-500">{visitorCount.toLocaleString()}명</span>
            </div>
          )}
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-20">
        <div className="section-container">
          <h2 className="section-title">핵심 연구 분야</h2>
          <div className="section-divider" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {researchAreas.map((area) => (
              <div key={area.title} className="card p-7 flex flex-col gap-4">
                <div className="w-11 h-11 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center flex-shrink-0">
                  {area.icon}
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">{area.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{area.desc}</p>
                </div>
                <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
                  {area.tags.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/research" className="btn-secondary text-sm px-5 py-2.5">
              연구 상세 보기
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* PI Teaser */}
      <section className="py-20 bg-indigo-600 text-white">
        <div className="section-container">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="w-24 h-24 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 text-4xl font-bold">
              金
            </div>
            <div className="text-center md:text-left">
              <p className="text-indigo-200 text-sm font-medium mb-1">Principal Investigator</p>
              <h2 className="text-2xl font-bold text-white mb-2">김장환 교수 (Prof. Janghwan Kim)</h2>
              <p className="text-indigo-100 text-sm leading-relaxed max-w-2xl">
                홍익대학교 소프트웨어융합학과 교수. AI-Native 소프트웨어 공학, 자동화 테스팅,
                강화학습 기반 SE 분야를 연구합니다.
              </p>
              <div className="mt-5">
                <Link
                  to="/pi"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-indigo-700 text-sm font-semibold rounded-lg hover:bg-indigo-50 transition-colors"
                >
                  약력 보기
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Archive CTA */}
      <section className="py-20">
        <div className="section-container text-center">
          <h2 className="section-title">연구 아카이브</h2>
          <div className="section-divider mx-auto" />
          <p className="text-slate-600 max-w-xl mx-auto mb-8 leading-relaxed">
            QUAS Lab의 논문, 저서, 특허, 수상 기록을 카테고리별로 조회하고
            원문 파일을 다운로드할 수 있습니다.
          </p>
          <Link to="/archive" className="btn-primary text-sm px-6 py-3">
            아카이브 바로가기
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </main>
  )
}
