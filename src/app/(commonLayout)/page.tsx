"use client";
import HeroSection from "@/components/modules/Home/Hero";

export default function Home() {
  return (
    <>
        <HeroSection onSearch={(q) => console.log("Search:", q)} />
    </>
  );
}
