import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { getCookie } from "cookies-next";
import ScrollUp from "../../../components/Common/ScrollUp";
import Hero from "../../../components/Hero";
import Features from "../../../components/Features";
import Video from "../../../components/Video";
import Brands from "../../../components/Brands";
import AboutSectionOne from "../../../components/About/AboutSectionOne";
import AboutSectionTwo from "../../../components/About/AboutSectionTwo";
import Testimonials from "../../../components/Testimonials";
import Pricing from "../../../components/Pricing";
import Blog from "../../../components/Blog";
import Contact from "../../../components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Next.js Template for Startup and SaaS",
  description: "This is Home for Startup Nextjs Template",
  // other metadata
};

export default function Home() {
  async function login() {
    const cookie = getCookie("jwt");
    console.log("jwt:", cookie);
    const response = await axios.get("http://localhost:3000/api/auth/login", {
      headers: {
        Authorization: `Bearer ${cookie}`,
      },
    });
    console.log(response);
  }

  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      {/* <Video /> */}
      {/* <Brands /> */}
      <AboutSectionOne />
      <AboutSectionTwo />
      <Testimonials />
      <Pricing />
      <Blog />
      <Contact />
    </>
  );
}
