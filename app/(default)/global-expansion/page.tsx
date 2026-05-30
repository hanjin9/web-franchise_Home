export const metadata = {
  title: "글로벌 확장 - 글로벌 프랜차이즈 사업",
  description: "글로벌 진출 전략 및 국가별 로드맵",
};

export default function GlobalExpansion() {
  const phases = [
    {
      phase: "Phase 1",
      period: "3개월",
      title: "국내 기반 구축",
      countries: ["한국"],
      target: "지사 5개, 회원 45명",
    },
    {
      phase: "Phase 2",
      period: "6개월",
      title: "국내 확장",
      countries: ["한국"],
      target: "지사 20개, 지점 100개",
    },
    {
      phase: "Phase 3",
      period: "1년",
      title: "아시아 진출",
      countries: ["일본", "중국", "싱가포르"],
      target: "회원 9,000명",
    },
    {
      phase: "Phase 4",
      period: "2년",
      title: "북미 진출",
      countries: ["미국", "캐나다", "멕시코"],
      target: "회원 26,000명",
    },
    {
      phase: "Phase 5",
      period: "3년",
      title: "유럽 진출",
      countries: ["독일", "프랑스", "영국"],
      target: "회원 38,000명",
    },
    {
      phase: "Phase 6",
      period: "5년",
      title: "글로벌 유니콘",
      countries: ["50개국 이상"],
      target: "회원 500,000명",
    },
  ];

  return (
    <section className="relative bg-black pt-32 pb-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Header */}
        <div className="mb-20 text-center">
          <h1 className="mb-6 text-5xl font-bold text-white md:text-6xl">
            글로벌 확장
          </h1>
          <p className="text-lg text-gray-300">
            5년 글로벌 확장 로드맵
          </p>
        </div>

        {/* 6단계 로드맵 */}
        <div className="space-y-6">
          {phases.map((phase, idx) => (
            <div
              key={idx}
              className="rounded-lg border border-yellow-600/30 bg-gradient-to-r from-yellow-900/10 to-black p-6 hover:border-yellow-600/60 transition"
            >
              <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
                <div>
                  <p className="text-sm text-gray-400">단계</p>
                  <p className="text-2xl font-bold text-yellow-500">
                    {phase.phase}
                  </p>
                  <p className="text-sm text-gray-400">{phase.period}</p>
                </div>
                <div className="md:col-span-1">
                  <p className="text-sm text-gray-400">목표</p>
                  <p className="text-lg font-bold text-white">{phase.title}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">진출국</p>
                  <div className="flex flex-wrap gap-2">
                    {phase.countries.map((country, cidx) => (
                      <span
                        key={cidx}
                        className="inline-block rounded-full bg-yellow-600/20 px-3 py-1 text-sm text-yellow-400"
                      >
                        {country}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-400">목표 달성</p>
                  <p className="text-sm font-bold text-white">{phase.target}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 글로벌 네트워크 */}
        <div className="mt-20">
          <h2 className="mb-12 text-center text-3xl font-bold text-white">
            5년 글로벌 네트워크
          </h2>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {[
              { label: "총 회원", value: "500,000명" },
              { label: "총 지사", value: "150개 이상" },
              { label: "총 지점", value: "1,500개 이상" },
              { label: "진출국", value: "50개국 이상" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="rounded-lg border border-yellow-600/50 bg-black p-6 text-center"
              >
                <p className="mb-2 text-sm text-gray-400">{item.label}</p>
                <p className="text-2xl font-bold text-yellow-500">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <a
            href="/contact"
            className="btn inline-block bg-gradient-to-r from-yellow-600 to-yellow-500 text-black font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition"
          >
            글로벌 파트너 신청 →
          </a>
        </div>
      </div>
    </section>
  );
}
