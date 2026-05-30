export const metadata = {
  title: "홈 - 글로벌 프랜차이즈 사업",
  description: "무점포 1인 무자본창업 웹사이트 분양 글로벌 프랜차이즈 사업",
};

import Hero from "@/components/hero-home";
// import BusinessCategories from "@/components/business-categories";
import FeaturesPlanet from "@/components/features-planet";
import LargeTestimonial from "@/components/large-testimonial";
import Cta from "@/components/cta";

export default function Home() {
  return (
    <>
      <Hero />
      {/* <BusinessCategories /> */}
      <FeaturesPlanet />
      <LargeTestimonial />
      <Cta />
    </>
  );
}
