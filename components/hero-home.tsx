export default function HeroHome() {
  return (
    <section className="relative bg-black">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-16">
            <div
              className="mb-6 border-y border-yellow-600"
              data-aos="zoom-y-out"
            >
              <div className="py-3">
                <span className="inline-block bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-sm font-semibold text-transparent">
                  글로벌 프랜차이즈 사업 | 무점포 1인 무자본창업
                </span>
              </div>
            </div>
            <h1
              className="mb-6 text-5xl font-bold text-white md:text-6xl"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              웹사이트 분양으로 <br className="max-lg:hidden" />
              글로벌 사업을 시작하세요
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-lg text-gray-300"
                data-aos="zoom-y-out"
                data-aos-delay={300}
              >
                최소 자본으로 시작하는 글로벌 프랜차이즈 사업. 
                24시간 온라인 교육, 자격증 발급, 웹사이트 분양까지 
                원스톱으로 지원합니다.
              </p>
              <div className="relative">
                <div
                  className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center"
                  data-aos="zoom-y-out"
                  data-aos-delay={450}
                >
                  <a
                    className="btn group mb-4 w-full bg-gradient-to-t from-yellow-600 to-yellow-500 bg-[length:100%_100%] bg-[bottom] text-black shadow-lg hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                    href="#0"
                  >
                    <span className="relative inline-flex items-center font-semibold">
                      상담 신청하기
                      <span className="ml-1 tracking-normal transition-transform group-hover:translate-x-0.5">
                        →
                      </span>
                    </span>
                  </a>
                  <a
                    className="btn w-full border border-yellow-600 text-yellow-500 shadow-sm hover:bg-yellow-600/10 sm:ml-4 sm:w-auto"
                    href="#0"
                  >
                    자세히 보기
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Hero image */}
          <div
            className="mx-auto max-w-3xl"
            data-aos="zoom-y-out"
            data-aos-delay={600}
          >
            <div className="relative aspect-video rounded-2xl border border-yellow-600/30 bg-gradient-to-br from-yellow-900/10 to-black px-5 py-3 shadow-2xl">
              <div className="relative mb-8 flex items-center justify-between">
                <span className="text-[13px] font-medium text-yellow-500">
                  Global Franchise Business
                </span>
              </div>
              <div className="space-y-2 font-mono text-gray-400">
                <div className="text-yellow-500">
                  $ 글로벌 프랜차이즈 사업 시작
                </div>
                <div className="text-gray-500">
                  &gt; 온라인 교육 수료 ✓
                </div>
                <div className="text-gray-500">
                  &gt; 자격증 취득 ✓
                </div>
                <div className="text-gray-500">
                  &gt; 웹사이트 분양 ✓
                </div>
                <div className="text-yellow-500">
                  $ 글로벌 사업 시작 완료
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
