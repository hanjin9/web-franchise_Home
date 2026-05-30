export const metadata = {
  title: "중장기 계획 - 글로벌 프랜차이즈 사업",
  description: "5년 비전 및 성장 전략",
};

export default function Roadmap() {
  const milestones = [
    {
      year: "1년",
      members: "45명",
      revenue: "17.2억원",
      goals: ["국내 기반 구축", "지사 5개 선정", "온라인 교육 시스템 완성"],
    },
    {
      year: "2년",
      members: "130명",
      revenue: "46.8억원",
      goals: ["국내 확장", "지사 20개 운영", "아시아 진출 준비"],
    },
    {
      year: "3년",
      members: "190명",
      revenue: "70.6억원",
      goals: ["아시아 3국 진출", "글로벌 네트워크 구축", "브랜드 강화"],
    },
    {
      year: "5년",
      members: "500명",
      revenue: "90억원",
      goals: ["50개국 이상 진출", "글로벌 유니콘 지위", "IPO 추진"],
    },
  ];

  const strategies = [
    {
      title: "기술 전략",
      items: ["AI 다국어 시스템", "블록체인 자격증", "모바일 앱 확대"],
    },
    {
      title: "마케팅 전략",
      items: ["SNS 마케팅", "유튜브 채널", "인플루언서 협력"],
    },
    {
      title: "파트너십",
      items: ["국가별 마스터 선정", "정부 기관 연계", "기업 협력"],
    },
    {
      title: "인력 전략",
      items: ["지사장 리더십 교육", "글로벌 팀 구축", "현지화 전문가"],
    },
  ];

  return (
    <section className="relative bg-black pt-32 pb-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Header */}
        <div className="mb-20 text-center">
          <h1 className="mb-6 text-5xl font-bold text-white md:text-6xl">
            중장기 계획 & 비전
          </h1>
          <p className="text-lg text-gray-300">
            5년 글로벌 유니콘 기업 도전
          </p>
        </div>

        {/* 마일스톤 */}
        <div className="mb-20">
          <h2 className="mb-12 text-center text-3xl font-bold text-white">
            성장 마일스톤
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {milestones.map((milestone, idx) => (
              <div
                key={idx}
                className="rounded-lg border border-yellow-600/50 bg-gradient-to-br from-yellow-900/20 to-black p-6"
              >
                <p className="mb-4 text-3xl font-bold text-yellow-500">
                  {milestone.year}
                </p>
                <div className="mb-4 space-y-2">
                  <p className="text-sm text-gray-400">회원</p>
                  <p className="text-xl font-bold text-white">
                    {milestone.members}
                  </p>
                  <p className="text-sm text-gray-400">매출</p>
                  <p className="text-xl font-bold text-yellow-400">
                    {milestone.revenue}
                  </p>
                </div>
                <div className="border-t border-yellow-600/20 pt-4">
                  <p className="mb-2 text-sm font-bold text-yellow-500">목표</p>
                  <ul className="space-y-1">
                    {milestone.goals.map((goal, gidx) => (
                      <li key={gidx} className="text-xs text-gray-400">
                        • {goal}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 핵심 전략 */}
        <div className="mb-20">
          <h2 className="mb-12 text-center text-3xl font-bold text-white">
            핵심 성공 전략
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {strategies.map((strategy, idx) => (
              <div
                key={idx}
                className="rounded-lg border border-yellow-600/30 bg-gradient-to-br from-yellow-900/10 to-black p-6"
              >
                <h3 className="mb-4 text-lg font-bold text-yellow-500">
                  {strategy.title}
                </h3>
                <ul className="space-y-2">
                  {strategy.items.map((item, iidx) => (
                    <li key={iidx} className="flex items-center gap-2 text-gray-300">
                      <span className="text-yellow-500">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* 비전 */}
        <div className="mb-20">
          <div className="rounded-lg border border-yellow-600/50 bg-gradient-to-br from-yellow-900/20 to-black p-12 text-center">
            <h2 className="mb-6 text-3xl font-bold text-white">
              5년 후 예상 지위
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {[
                "글로벌 웰니스 산업 TOP 3",
                "50개국 이상 진출",
                "유니콘 기업 지위 (기업 가치 1조원+)",
              ].map((vision, idx) => (
                <div key={idx} className="text-lg font-bold text-yellow-400">
                  ✓ {vision}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="/contact"
            className="btn inline-block bg-gradient-to-r from-yellow-600 to-yellow-500 text-black font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition"
          >
            비전 함께 만들기 →
          </a>
        </div>
      </div>
    </section>
  );
}
