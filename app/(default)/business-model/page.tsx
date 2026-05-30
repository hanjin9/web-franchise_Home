export const metadata = {
  title: "사업 모델 - 글로벌 프랜차이즈 사업",
  description: "수익 모델 및 가격 정책",
};

export default function BusinessModel() {
  const revenues = [
    { title: "웹사이트 분양비", amount: "500만원~5,000만원", desc: "일회성" },
    { title: "월간 관리비", amount: "50만원~500만원", desc: "월간 정기" },
    { title: "온라인 교육비", amount: "100만원~500만원", desc: "과정별" },
    { title: "자격증 발급비", amount: "40만원~180만원", desc: "응시별" },
    { title: "연회비", amount: "50만원~500만원", desc: "연간 정기" },
    { title: "프리미엄 서비스", amount: "월 50만원~", desc: "선택사항" },
  ];

  const tiers = [
    {
      name: "개인 지점",
      price: "500만원",
      features: ["웹사이트 + 앱", "기본 교육", "기술 지원"],
    },
    {
      name: "지역 지사",
      price: "2,000만원",
      features: ["전체 시스템", "고급 교육", "마케팅 지원", "지역 권한"],
    },
    {
      name: "국가 지회",
      price: "5,000만원",
      features: ["마스터 권한", "글로벌 네트워크", "1:1 코칭", "국제 세미나"],
    },
  ];

  return (
    <section className="relative bg-black pt-32 pb-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Header */}
        <div className="mb-20 text-center">
          <h1 className="mb-6 text-5xl font-bold text-white md:text-6xl">
            사업 모델
          </h1>
          <p className="text-lg text-gray-300">
            다층화된 수익 구조로 지속 가능한 성장을 보장합니다
          </p>
        </div>

        {/* 6가지 수익원 */}
        <div className="mb-20">
          <h2 className="mb-12 text-center text-3xl font-bold text-white">
            6가지 수익원
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {revenues.map((rev, idx) => (
              <div
                key={idx}
                className="rounded-lg border border-yellow-600/30 bg-gradient-to-br from-yellow-900/10 to-black p-6 hover:border-yellow-600/60 transition"
              >
                <h3 className="mb-2 text-lg font-bold text-yellow-500">
                  {rev.title}
                </h3>
                <p className="mb-2 text-2xl font-bold text-white">
                  {rev.amount}
                </p>
                <p className="text-sm text-gray-400">{rev.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 가격 정책 */}
        <div className="mb-20">
          <h2 className="mb-12 text-center text-3xl font-bold text-white">
            분양 가격 정책
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {tiers.map((tier, idx) => (
              <div
                key={idx}
                className="rounded-lg border border-yellow-600/50 bg-gradient-to-br from-yellow-900/20 to-black p-8"
              >
                <h3 className="mb-2 text-2xl font-bold text-white">
                  {tier.name}
                </h3>
                <p className="mb-6 text-3xl font-bold text-yellow-500">
                  {tier.price}
                </p>
                <ul className="space-y-3">
                  {tier.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-center gap-2 text-gray-300">
                      <span className="text-yellow-500">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* 재무 전망 */}
        <div className="mb-20">
          <h2 className="mb-12 text-center text-3xl font-bold text-white">
            5년 재무 전망
          </h2>
          <div className="rounded-lg border border-yellow-600/30 bg-gradient-to-br from-yellow-900/10 to-black p-8">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-5">
              {[
                { year: "1년", revenue: "17.2억", profit: "6.5억" },
                { year: "2년", revenue: "46.8억", profit: "17.8억" },
                { year: "3년", revenue: "70.6억", profit: "26.8억" },
                { year: "5년", revenue: "90억", profit: "34.2억" },
              ].map((item, idx) => (
                <div key={idx} className="text-center">
                  <p className="mb-2 text-lg font-bold text-yellow-500">
                    {item.year}
                  </p>
                  <p className="text-sm text-gray-400">매출</p>
                  <p className="mb-3 text-xl font-bold text-white">
                    {item.revenue}
                  </p>
                  <p className="text-sm text-gray-400">순이익</p>
                  <p className="text-xl font-bold text-yellow-400">
                    {item.profit}
                  </p>
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
            상담 신청하기 →
          </a>
        </div>
      </div>
    </section>
  );
}
