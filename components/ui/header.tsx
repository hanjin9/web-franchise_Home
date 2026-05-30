"use client";

import Link from "next/link";
import Logo from "./logo";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { href: "/", label: "홈" },
    { href: "/business-process", label: "사업 프로세스" },
    { href: "/business-model", label: "사업 모델" },
    { href: "/global-expansion", label: "글로벌 확장" },
    { href: "/roadmap", label: "중장기 계획" },
    { href: "/contact", label: "상담 신청" },
  ];

  return (
    <header className="fixed top-0 z-30 w-full border-b border-yellow-600/20 bg-black/80 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-16 items-center justify-between">
          {/* Site branding */}
          <div className="flex flex-1 items-center">
            <Link href="/" className="flex items-center gap-2">
              <div className="text-2xl font-bold text-yellow-500">🌍</div>
              <span className="hidden text-lg font-bold text-white sm:inline">
                Global Franchise
              </span>
            </Link>
          </div>

          {/* Desktop menu */}
          <nav className="hidden flex-1 items-center justify-center gap-8 md:flex">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-gray-300 transition hover:text-yellow-500"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA button */}
          <div className="hidden flex-1 items-center justify-end gap-3 md:flex">
            <Link
              href="/login"
              className="text-sm font-medium text-yellow-500 transition hover:text-yellow-400"
            >
              로그인
            </Link>
            <Link
              href="/signup"
              className="btn-sm bg-gradient-to-r from-yellow-600 to-yellow-500 text-black font-semibold shadow-lg hover:shadow-xl"
            >
              회원가입
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden"
          >
            <svg
              className="h-6 w-6 text-yellow-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <nav className="border-t border-yellow-600/20 py-4 md:hidden">
            <div className="flex flex-col gap-4">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-gray-300 transition hover:text-yellow-500"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/login"
                className="text-sm font-medium text-yellow-500 transition hover:text-yellow-400"
                onClick={() => setMobileMenuOpen(false)}
              >
                로그인
              </Link>
              <Link
                href="/signup"
                className="btn-sm bg-gradient-to-r from-yellow-600 to-yellow-500 text-black font-semibold text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                회원가입
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
