"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("상담 신청이 완료되었습니다. 곧 연락드리겠습니다.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section className="relative bg-black pt-32 pb-20">
      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-6 text-5xl font-bold text-white md:text-6xl">
            상담 신청
          </h1>
          <p className="text-lg text-gray-300">
            글로벌 프랜차이즈 사업에 관심 있으신가요?
            <br />
            지금 바로 상담을 신청하세요.
          </p>
        </div>

        {/* Contact Form */}
        <div className="rounded-lg border border-yellow-600/30 bg-gradient-to-br from-yellow-900/10 to-black p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label className="mb-2 block text-sm font-medium text-white">
                이름
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-yellow-600/30 bg-black px-4 py-3 text-white placeholder-gray-500 focus:border-yellow-500 focus:outline-none"
                placeholder="이름을 입력하세요"
              />
            </div>

            {/* Email */}
            <div>
              <label className="mb-2 block text-sm font-medium text-white">
                이메일
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-yellow-600/30 bg-black px-4 py-3 text-white placeholder-gray-500 focus:border-yellow-500 focus:outline-none"
                placeholder="이메일을 입력하세요"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="mb-2 block text-sm font-medium text-white">
                연락처
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-yellow-600/30 bg-black px-4 py-3 text-white placeholder-gray-500 focus:border-yellow-500 focus:outline-none"
                placeholder="010-0000-0000"
              />
            </div>

            {/* Message */}
            <div>
              <label className="mb-2 block text-sm font-medium text-white">
                메시지
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full rounded-lg border border-yellow-600/30 bg-black px-4 py-3 text-white placeholder-gray-500 focus:border-yellow-500 focus:outline-none"
                placeholder="관심 있는 분야나 질문을 입력하세요"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full rounded-lg bg-gradient-to-r from-yellow-600 to-yellow-500 px-6 py-3 font-semibold text-black shadow-lg hover:shadow-xl transition"
            >
              상담 신청하기
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {[
            {
              icon: "📞",
              title: "전화",
              info: "02-1234-5678",
            },
            {
              icon: "📧",
              title: "이메일",
              info: "info@globalfranchise.co.kr",
            },
            {
              icon: "📍",
              title: "주소",
              info: "서울시 강남구 테헤란로 123",
            },
          ].map((contact, idx) => (
            <div key={idx} className="text-center">
              <div className="mb-3 text-4xl">{contact.icon}</div>
              <h3 className="mb-2 font-bold text-white">{contact.title}</h3>
              <p className="text-gray-400">{contact.info}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
