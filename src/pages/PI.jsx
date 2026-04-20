const education = [
  {
    degree: 'Ph.D. in Computer Science',
    institution: 'KAIST (한국과학기술원)',
    period: '2006 – 2012',
    detail: '소프트웨어 공학 / 자동화 테스팅',
  },
  {
    degree: 'M.S. in Computer Science',
    institution: 'KAIST (한국과학기술원)',
    period: '2004 – 2006',
    detail: '프로그램 분석',
  },
  {
    degree: 'B.S. in Computer Science',
    institution: '서울대학교',
    period: '2000 – 2004',
    detail: '',
  },
]

const career = [
  {
    role: '교수 (부교수)',
    org: '홍익대학교 소프트웨어융합학과',
    period: '2016 – 현재',
    detail: 'QUAS Lab 운영, 학부·대학원 강의, 산학협력 연구 수행',
  },
  {
    role: '선임연구원',
    org: 'ETRI (한국전자통신연구원)',
    period: '2013 – 2016',
    detail: '임베디드 소프트웨어 신뢰성 검증 기술 연구',
  },
  {
    role: 'Postdoctoral Researcher',
    org: 'University of Texas at Austin',
    period: '2012 – 2013',
    detail: 'Automated Software Testing Lab, Prof. Miryung Kim 지도',
  },
]

const courses = [
  '소프트웨어 품질보증 (SQA)',
  '소프트웨어 공학',
  '인공지능과 소프트웨어',
  '오픈소스 소프트웨어',
  '고급 소프트웨어 테스팅 (대학원)',
]

const links = [
  { label: 'Google Scholar', href: 'https://scholar.google.com', icon: 'S' },
  { label: 'DBLP', href: 'https://dblp.org', icon: 'D' },
  { label: 'GitHub', href: 'https://github.com', icon: 'G' },
  { label: 'Email', href: 'mailto:janghwan@hongik.ac.kr', icon: '@' },
]

export default function PI() {
  return (
    <main className="py-16">
      <div className="section-container">
        {/* Header */}
        <div className="flex flex-col sm:flex-row gap-8 items-start mb-14">
          <div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-700 flex items-center justify-center text-white text-4xl font-bold flex-shrink-0">
            金
          </div>
          <div>
            <h1 className="section-title mb-1">김장환 (Janghwan Kim)</h1>
            <p className="text-indigo-600 font-medium mb-3">
              부교수, 홍익대학교 소프트웨어융합학과
            </p>
            <p className="text-slate-600 text-sm leading-relaxed max-w-2xl mb-5">
              AI-Native 소프트웨어 공학, 자동화 소프트웨어 테스팅, 강화학습 기반 SE 자동화를
              연구합니다. 소프트웨어 품질보증(SQA) 분야에서 10년 이상의 연구 경력을 보유하고 있으며,
              LLM과 AI를 소프트웨어 개발 전 주기에 내재화하는 차세대 방법론을 탐구합니다.
            </p>
            <div className="flex flex-wrap gap-2">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 text-xs text-slate-600 hover:border-indigo-300 hover:text-indigo-600 transition-colors"
                >
                  <span className="w-4 h-4 bg-slate-100 rounded text-center font-bold text-[10px] leading-4">
                    {l.icon}
                  </span>
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main column */}
          <div className="lg:col-span-2 space-y-12">
            {/* Education */}
            <section>
              <h2 className="section-title text-xl">학력</h2>
              <div className="section-divider" />
              <div className="space-y-5">
                {education.map((e) => (
                  <div key={e.degree} className="flex gap-4">
                    <div className="w-2 h-2 rounded-full bg-indigo-500 mt-2 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-slate-900 text-sm">{e.degree}</p>
                      <p className="text-slate-600 text-sm">{e.institution}</p>
                      {e.detail && <p className="text-slate-500 text-xs mt-0.5">{e.detail}</p>}
                      <p className="text-indigo-600 text-xs font-medium mt-0.5">{e.period}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Career */}
            <section>
              <h2 className="section-title text-xl">주요 경력</h2>
              <div className="section-divider" />
              <div className="relative border-l-2 border-slate-100 pl-6 space-y-7">
                {career.map((c) => (
                  <div key={c.role} className="relative">
                    <div className="absolute -left-[29px] top-1 w-3.5 h-3.5 rounded-full bg-white border-2 border-indigo-500" />
                    <p className="font-semibold text-slate-900 text-sm">{c.role}</p>
                    <p className="text-indigo-600 font-medium text-sm">{c.org}</p>
                    <p className="text-slate-500 text-xs mt-0.5">{c.period}</p>
                    <p className="text-slate-600 text-sm mt-1">{c.detail}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Research Interests */}
            <section>
              <h2 className="section-title text-xl">연구 관심 분야</h2>
              <div className="section-divider" />
              <div className="flex flex-wrap gap-2">
                {[
                  'AI-Native SDLC',
                  'AI-Embedded V&V',
                  'Reinforcement Learning for SE',
                  'Automated Software Testing',
                  'LLM-based Code Generation',
                  'Software Quality Assurance',
                  'CI/CD Optimization',
                  'Fault Prediction',
                ].map((interest) => (
                  <span key={interest} className="tag text-sm px-3 py-1">
                    {interest}
                  </span>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Contact */}
            <div className="card p-6">
              <h3 className="font-bold text-slate-900 text-sm mb-4">연락처</h3>
              <ul className="space-y-3 text-sm text-slate-600">
                <li className="flex gap-3">
                  <svg className="w-4 h-4 text-indigo-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:janghwan@hongik.ac.kr" className="hover:text-indigo-600 transition-colors break-all">
                    janghwan@hongik.ac.kr
                  </a>
                </li>
                <li className="flex gap-3">
                  <svg className="w-4 h-4 text-indigo-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>홍익대학교 산학협력관<br />서울특별시 마포구 와우산로 94</span>
                </li>
              </ul>
            </div>

            {/* Courses */}
            <div className="card p-6">
              <h3 className="font-bold text-slate-900 text-sm mb-4">담당 강의</h3>
              <ul className="space-y-2">
                {courses.map((c) => (
                  <li key={c} className="flex items-center gap-2 text-sm text-slate-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 flex-shrink-0" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
