const areas = [
  {
    id: 'ai-sdlc',
    badge: '01',
    title: 'AI-Native SDLC',
    subtitle: 'AI-Native Software Development Lifecycle',
    summary:
      'LLM과 생성형 AI를 소프트웨어 개발 전 주기에 내재화하여, 요구사항 분석·설계·구현·테스팅·배포·운영 모든 단계를 AI와 함께 수행하는 차세대 개발 방법론을 연구합니다.',
    details: [
      'LLM 기반 자동 코드 생성 및 리팩토링',
      'AI-assisted 요구사항 분석 및 명세 생성',
      'Agentic 소프트웨어 개발 프레임워크 설계',
      '개발자-AI 협업(Human-in-the-loop) 워크플로우',
      'AI 생성 코드의 품질 및 보안 자동 검증',
    ],
    tags: ['LLM', 'Code Generation', 'Agentic SE', 'Requirements Engineering'],
    color: 'indigo',
  },
  {
    id: 'vv',
    badge: '02',
    title: 'AI-Embedded Software V&V',
    subtitle: 'AI-Embedded Software Verification & Validation',
    summary:
      'AI 오라클과 트랜스포머 기반 모델을 소프트웨어 검증·검사(V&V) 프로세스에 내재화합니다. 전통적 V&V 방법론의 한계를 AI로 극복하고, 자동화된 명세 적합성 검사 및 회귀 테스팅 체계를 구축합니다.',
    details: [
      'LLM 기반 소프트웨어 오라클(AI Oracle) 자동 생성',
      '명세 적합성 자동 검증 시스템',
      'AI 기반 결함 예측(Fault Prediction) 모델',
      '변이 테스팅(Mutation Testing)의 AI 기반 확장',
      '회귀 테스트 자동 선택 및 최소화',
    ],
    tags: ['AI Oracle', 'Verification', 'Mutation Testing', 'Fault Prediction'],
    color: 'violet',
  },
  {
    id: 'rl',
    badge: '03',
    title: 'Reinforcement Learning for SE',
    subtitle: 'RL-based Software Engineering Automation',
    summary:
      '강화학습(RL) 에이전트를 소프트웨어 공학 자동화 문제에 적용합니다. 테스트 케이스 우선순위화, CI/CD 파이프라인 최적화, 자율 디버깅 등 RL이 효과적인 SE 문제를 탐구합니다.',
    details: [
      'RL 기반 테스트 케이스 우선순위화 및 자동 생성',
      'CI/CD 파이프라인 최적화 (피드백 시간 단축)',
      '자율 디버깅 에이전트 (Autonomous Debugging)',
      '멀티 에이전트 협력 기반 대규모 코드베이스 관리',
      '소프트웨어 구성 최적화(Configuration Tuning)',
    ],
    tags: ['Reinforcement Learning', 'Test Automation', 'CI/CD', 'Autonomous Debugging'],
    color: 'sky',
  },
]

const colorMap = {
  indigo: {
    badge: 'bg-indigo-100 text-indigo-700',
    icon: 'bg-indigo-50 text-indigo-600',
    border: 'border-indigo-200',
    dot: 'bg-indigo-500',
  },
  violet: {
    badge: 'bg-violet-100 text-violet-700',
    icon: 'bg-violet-50 text-violet-600',
    border: 'border-violet-200',
    dot: 'bg-violet-500',
  },
  sky: {
    badge: 'bg-sky-100 text-sky-700',
    icon: 'bg-sky-50 text-sky-600',
    border: 'border-sky-200',
    dot: 'bg-sky-500',
  },
}

export default function Research() {
  return (
    <main className="py-16">
      <div className="section-container">
        {/* Header */}
        <div className="mb-14">
          <h1 className="section-title">Research</h1>
          <div className="section-divider" />
          <p className="text-slate-600 max-w-2xl leading-relaxed">
            QUAS Lab은 AI-Native 소프트웨어 공학 분야의 3개 핵심 연구 축을 중심으로
            이론과 실용이 결합된 연구를 수행합니다.
          </p>
        </div>

        {/* Research areas */}
        <div className="space-y-10">
          {areas.map((area) => {
            const c = colorMap[area.color]
            return (
              <div
                key={area.id}
                className={`card p-8 border-l-4 ${c.border}`}
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                  {/* Badge */}
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-lg font-bold flex-shrink-0 ${c.badge}`}>
                    {area.badge}
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl font-bold text-slate-900 mb-0.5">{area.title}</h2>
                    <p className="text-sm text-slate-400 mb-4">{area.subtitle}</p>
                    <p className="text-slate-600 leading-relaxed mb-6">{area.summary}</p>

                    {/* Detail list */}
                    <div className="bg-slate-50 rounded-xl p-5 mb-5">
                      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">세부 연구 주제</p>
                      <ul className="space-y-2">
                        {area.details.map((d) => (
                          <li key={d} className="flex items-start gap-2.5 text-sm text-slate-700">
                            <span className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${c.dot}`} />
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {area.tags.map((t) => (
                        <span key={t} className="tag">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Collaboration CTA */}
        <div className="mt-16 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white p-10 text-center">
          <h2 className="text-2xl font-bold mb-3">공동 연구 및 산학협력 문의</h2>
          <p className="text-indigo-100 mb-6 max-w-lg mx-auto">
            연구 협력, 대학원 진학, 인턴십에 관심 있으신 분은 언제든지 연락해 주세요.
          </p>
          <a
            href="mailto:janghwan@hongik.ac.kr"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-indigo-700 font-semibold text-sm rounded-xl hover:bg-indigo-50 transition-colors"
          >
            이메일 문의
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
        </div>
      </div>
    </main>
  )
}
