import Link from "next/link";
import Logo from "./logo";

export default function Footer({ border = false }: { border?: boolean }) {
  return (
    <footer className="border-t border-yellow-600/20 bg-black">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Top area: Blocks */}
        <div className="grid gap-10 py-12 sm:grid-cols-12">
          {/* 1st block */}
          <div className="space-y-2 sm:col-span-12 lg:col-span-4">
            <div>
              <Link href="/" className="flex items-center gap-2">
                <div className="text-2xl font-bold text-yellow-500">🌍</div>
                <span className="text-lg font-bold text-white">
                  Global Franchise
                </span>
              </Link>
            </div>
            <div className="text-sm text-gray-400">
              무점포 1인 무자본창업으로 글로벌 사업을 시작하세요.
            </div>
          </div>

          {/* 2nd block - 메뉴 */}
          <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className="text-sm font-bold text-yellow-500">사업</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  className="text-gray-400 transition hover:text-yellow-500"
                  href="/business-process"
                >
                  사업 프로세스
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-400 transition hover:text-yellow-500"
                  href="/business-model"
                >
                  사업 모델
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-400 transition hover:text-yellow-500"
                  href="/global-expansion"
                >
                  글로벌 확장
                </Link>
              </li>
            </ul>
          </div>

          {/* 3rd block - 회사 */}
          <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className="text-sm font-bold text-yellow-500">회사</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  className="text-gray-400 transition hover:text-yellow-500"
                  href="/roadmap"
                >
                  중장기 계획
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-400 transition hover:text-yellow-500"
                  href="/contact"
                >
                  상담 신청
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-400 transition hover:text-yellow-500"
                  href="#0"
                >
                  뉴스레터
                </Link>
              </li>
            </ul>
          </div>

          {/* 4th block - 연락처 */}
          <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className="text-sm font-bold text-yellow-500">연락처</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  className="text-gray-400 transition hover:text-yellow-500"
                  href="tel:02-1234-5678"
                >
                  02-1234-5678
                </a>
              </li>
              <li>
                <a
                  className="text-gray-400 transition hover:text-yellow-500"
                  href="mailto:info@globalfranchise.co.kr"
                >
                  info@globalfranchise.co.kr
                </a>
              </li>
              <li className="text-gray-400">
                서울시 강남구 테헤란로 123
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom area */}
        <div className="border-t border-yellow-600/20 py-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="text-sm text-gray-400">
              &copy; 2026 Global Franchise. All rights reserved.
            </div>
            <div className="flex gap-4">
              <a
                href="#0"
                className="text-gray-400 transition hover:text-yellow-500"
              >
                개인정보처리방침
              </a>
              <a
                href="#0"
                className="text-gray-400 transition hover:text-yellow-500"
              >
                이용약관
              </a>
              <a
                href="#0"
                className="text-gray-400 transition hover:text-yellow-500"
              >
                문의하기
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
