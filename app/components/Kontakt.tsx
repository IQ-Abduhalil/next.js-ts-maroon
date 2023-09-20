import Link from "next/link";
import Image from "next/image";
import React from "react";
import Faceb from "../../public/assets/icons/facebook.svg";
import Instag from "../../public/assets/icons/instagram.svg";
import Twitt from "../../public/assets/icons/twitter.svg";
import Map from "../../public/assets/images/map.png";

function Kontakt() {
  return (
    <section>
      <div className="container mx-auto flex items-center justify-between relative pb-36">
        <div className="bg-stone-100 py-24 ps-24 pr-96 ">
          <h4 className="mb-10 text-xl font-semibold">Контакты</h4>
          <h6 className="mb-5 font-medium text-lg">Адрес</h6>
          <p className="mb-9">Санкт-Петербург, ул. Большая Конюшенная, 19</p>
          <h6 className="mb-5 font-medium text-lg">Телефон</h6>
          <p className="mb-9">+7 (923) 888-90-60</p>
          <h6 className="mb-5 font-medium text-lg">E-mail</h6>
          <p className="mb-9">info@maroon.ru</p>
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
        <div className="absolute top-auto bottom-auto left-auto right-12">
          <Image src={Map} width={670}></Image>
        </div>
      </div>
    </section>
  );
}

export default Kontakt;
