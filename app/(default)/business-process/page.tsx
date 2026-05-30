export const metadata = {
  title: "사업 프로세스 - 글로벌 프랜차이즈 사업",
  description: "4가지 혁신과 디지털 자동화 프로세스",
};

export default function BusinessProcess() {
  const processes = [
    {
      title: "온라인 창업",
      description: "수료 즉시 웹/앱 분양",
      icon: "🌐",
    },
    {
      title: "글로벌 권한",
      description: "국가별 지사 자격 부여",
      icon: "🌍",
    },
    {
      title: "원스톱 지원",
      description: "정부 자금 지원 연계",
      icon: "🤝",
    },
    {
      title: "국제 세미나",
      description: "정기적 글로벌 교류",
      icon: "📚",
    },
  ];

  const steps = [
    { step: "1단계", title: "온라인 교육", desc: "24시간 자유로운 학습" },
    { step: "2단계", title: "시험 응시", desc: "언제든 응시 가능" },
    { step: "3단계", title: "자격증 취득", desc: "즉시 발급" },
    { step: "4단계", title: "웹 분양", desc: "글로벌 사업 시작" },
  ];

  return (
    <section className="relative bg-black pt-32 pb-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Header */}
        <div className="mb-20 text-center">
          <h1 className="mb-6 text-5xl font-bold text-white md:text-6xl">
            사업 프로세스
          </h1>
          <p className="text-lg text-gray-300">
            4가지 혁신으로 글로벌 사업을 시작하세요
          </p>
        </div>

        {/* 4가지 혁신 */}
        <div className="mb-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {processes.map((process, idx) => (
            <div
              key={idx}
              className="rounded-lg border border-yellow-600/30 bg-gradient-to-br from-yellow-900/10 to-black p-8 text-center hover:border-yellow-600/60 transition"
            >
              <div className="mb-4 text-5xl">{process.icon}</div>
              <h3 className="mb-2 text-xl font-bold text-yellow-500">
                {process.title}
              </h3>
              <p className="text-gray-400">{process.description}</p>
            </div>
          ))}
        </div>

        {/* 디지털 자동화 프로세스 */}
        <div className="mb-20">
          <h2 className="mb-12 text-center text-3xl font-bold text-white">
            디지털 자동화 프로세스
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            {steps.map((step, idx) => (
              <div key={idx} className="relative">
                <div className="rounded-lg border border-yellow-600/50 bg-black p-6 text-center">
                  <div className="mb-3 text-3xl font-bold text-yellow-500">
                    {step.step}
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-white">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-400">{step.desc}</p>
                </div>
                {idx < steps.length - 1 && (
                  <div className="absolute -right-4 top-1/2 hidden -translate-y-1/2 md:block">
                    <span className="text-3xl text-yellow-500">→</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="/contact"
            className="btn inline-block bg-gradient-to-r from-yellow-600 to-yellow-500 text-black font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition"
          >
            지금 시작하기 →
          </a>
        </div>
      </div>
    </section>
  );
}
