import Image from "next/image";
import React from "react";
import Middle1 from "../../public/assets/images/middle1.png";
import Middle2 from "../../public/assets/images/middle2.png";
import Middle3 from "../../public/assets/images/middle3.png";
import Middle4 from "../../public/assets/images/middle4.png";
import Middle5 from "../../public/assets/images/middle5.png";
import Middle6 from "../../public/assets/images/middle6.png";

function Middle() {
  return (
    <section>
      <div className="container mx-auto flex items-center gap-56 py-36">
        <div className="">
          <div className="flex">
            <Image src={Middle1} alt="img"></Image>
            <Image src={Middle2} alt="img"></Image>
            <Image src={Middle3} alt="img"></Image>
          </div>
          <div className="flex">
            <Image src={Middle4} alt="img"></Image>
            <Image src={Middle5} alt="img"></Image>
            <Image src={Middle6} alt="img"></Image>
          </div>
        </div>
        <div className="">
          <p className="text-4xl mb-7">Присоединяйтесь к нам</p>
          <p className="w-96 mb-10">
            Подпишитесь на наш аккаунт @marooncare и узнавайте о новиках и
            акциях первыми
          </p>
          <button className="px-7 py-4 border rounded-sm border-color-second">
            Подписаться
          </button>
        </div>
      </div>
    </section>
  );
}

export default Middle;
