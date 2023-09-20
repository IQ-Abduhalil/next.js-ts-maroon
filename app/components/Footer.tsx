import Link from "next/link";
import React from "react";
import Logo from "../../public/assets/icons/MAROON.svg";
import Faceb from "../../public/assets/icons/facebook.svg";
import Instag from "../../public/assets/icons/instagram.svg";
import Twitt from "../../public/assets/icons/twitter.svg";
import Image from "next/image";

function Footer() {
  return (
    <footer className="bg-stone-100">
      <div className="border-b-2 border-cyan-100">
        <div className="container mx-auto flex justify-between items-center py-16">
          <div className="flex gap-12 items-center">
            <Link className="mr-12" href="/">
              <Image src={Logo} alt="img" />
            </Link>
            <Link href="/">Каталог</Link>
            <Link href="/about">О нас</Link>
            <Link href="/contact">Контакты</Link>
          </div>
          <div className="flex items-center gap-8">
            <Link href="/">
              <Image src={Faceb} alt="img" />
            </Link>
            <Link href="/">
              <Image src={Instag} alt="img" />
            </Link>
            <Link href="/">
              <Image src={Twitt} alt="img" />
            </Link>
          </div>
        </div>
      </div>
      <div className="container mx-auto flex justify-between items-center py-5 text-color-third">
        <p>Maroon 2020 Все права защищены</p>
        <p>Политика конфиденциальности</p>
      </div>
    </footer>
  );
}

export default Footer;
