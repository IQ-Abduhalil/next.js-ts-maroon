import Hero from "./components/Hero";
import HomePagination from "./components/HomePagination";
import Individ from "./components/Individ";
import Kontakt from "./components/Kontakt";
import Middle from "./components/Middle";
import Middle2 from "./components/Middle2";
import Vesna from "./components/Vesna";

export default function Home() {
  return (
    <div>
      <Hero />
      <HomePagination />
      <Vesna />
      <Individ />
      <Middle2 />
      <Middle />
      <Kontakt />
    </div>
  );
}
