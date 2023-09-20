import Image from "next/image";
import React from "react";
import Hero1 from "../../public/assets/images/hero1.png";
import Hero2 from "../../public/assets/images/hero2.png";
import Next from "../../public/assets/images/hero-next.png";
import Logo from "../../public/assets/icons/MAROON.svg";
import Link from "next/link";

function Hero() {
  return (
    <section className="hero bg-bg-hero pt-8 pb-16">
      <div className="container mx-auto flex justify-between px-16 ">
        <div className="">
          <Image src={Hero1} alt="img" />
          <div className="flex justify-between items-center pt-4">
            <p className="text-color-first">Уход для лица</p>
            <Link href="/products">
              <Image src={Next} alt="img" />
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center px-12">
          <Image src={Logo} alt="logo" width={260} height={40} />
          <p className="mb-10 mt-8 w-72 text-center text-lg">
            Натуральная косметика для бережного ухода за кожей
          </p>
          <button className="px-7 py-4 border rounded-sm border-color-second">
            Подробнее
          </button>
        </div>
        <div className="">
          <Image src={Hero2} alt="img" />
          <div className="flex justify-between items-center pt-4">
            <p className="text-color-first">Уход для лица</p>
            <Link href="/products">
              <Image src={Next} alt="img" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
