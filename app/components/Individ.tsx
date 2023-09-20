import Image from "next/image";
import IndividImg from "../../public/assets/images/individ.png";

function Individ() {
  return (
    <section>
      <div className="container mx-auto flex items-center justify-between relative py-36">
        <div className="bg-stone-100 py-24 ps-24 pr-96 ">
          <p className="text-3xl mb-10">Индивидуальный уход</p>
          <p className="w-96 mb-14">
            Не всегда очевидно, какие элементы и минералы необходимы коже, а
            многочисленные эксперименты с разными средствами только ухудшают ее
            качество. Заполните анкету, и мы подберем уход, подходящий именно
            вам, учитывая ваш образ жизни, место жительства и другие факторы.{" "}
          </p>
          <button className="px-7 py-4 border rounded-sm border-color-second">
            Подробнее
          </button>
        </div>
        <div className="absolute top-auto bottom-auto left-auto right-12">
          <Image src={IndividImg} width={670}></Image>
        </div>
      </div>
    </section>
  );
}

export default Individ;
