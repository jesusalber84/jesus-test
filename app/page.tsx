import Image from "next/image";
import logoImage from "./assets/logo.png";

import { Rubik } from "next/font/google";
const rubik = Rubik({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <div className="relative w-screen min-h-screen bg-[#2B2D42]">
        <div className="absolute bg-[#0083FE] opacity-50 blur-[150px] w-[500px] h-[500px] top-[-300px] left-[10vw]" />
        <div className="container mx-auto pt-40 px-5 flex justify-center">
          <div className="max-w-[1200px]">
            <div className="relative flex lg:flex-row flex-col justify-center items-center lg:items-stretch gap-16">
              <div className="lg:absolute text-[36px] lg:text-[56px] xl:text-[68px] text-white font-[700] lg:w-[850px] xl:w-[1000px] top-[30px] right-0">
                Turn Your Website Into Your Best Sales Person
              </div>
              <Image src={logoImage} alt="logo" />
              <div className="flex flex-col justify-end pb-[160px]">
                <div
                  className={`${rubik.className} text-[22px] text-[#F7F7FF] font-[300]`}
                >
                  <p className="text-[#F7F7FF]">
                    Triple your sales with a pixel-perfect website.
                  </p>
                  <p className="text-[#F7F7FF]">
                    At SmartSite Studio, we don&apos;t just design and write
                    code, we build a revenue-driving machine for your business.
                  </p>
                </div>
                <div className="flex gap-3 mt-[40px] text-white">
                  <button className="rounded-[30px] bg-[#FF632C] w-[200px] h-[60px] flex justify-center items-center text-[16px]">
                    Talk to Us
                  </button>
                  <button className="rounded-[30px] border border-[#0083FE] w-[200px] h-[60px] flex justify-center items-center text-[16px]">
                    See Portfolio
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
