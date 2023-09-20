"use client";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import Kontakt from "../components/Kontakt";
import Middle from "../components/Middle";
import Pagination from "../components/Pagination";
import Next from "../../public/assets/images/hero-next.png";
import Prev from "../../public/assets/images/prev.png";
import Link from "next/link";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [searchedProduct, setSearchedProduct] = useState([]);

  function getProducts(): void {
    const response = axios
      .get("http://localhost:3000/api/products")
      .then((item: any) => {
        setProducts(item.data);
      });
  }
  // const products = await getProducts();
  useEffect(() => {
    setProducts(getProducts());
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const lastPage = 12;
  const lastIndex = lastPage * currentPage;
  const firstIndex = lastIndex - lastPage;
  const records = products?.slice(firstIndex, lastIndex);
  const npage = Math.ceil(products?.length / lastPage);

  function prePage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function nextPage() {
    if (currentPage !== npage) {
      setCurrentPage(currentPage + 1);
    }
  }
  function changesPage(id) {
    setCurrentPage(id);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.get(
      `http://localhost:3000/api/products/search?query=${search}`
    );
    setSearchedProduct(response.data);
  };
  return (
    <section className="border border-t-2">
      <div className="container mx-auto">
        <div className="pb-36">
          <div className="flex justify-between items-center py-10">
            <p className="text-4xl">Каталог</p>
            <button className="px-4 py-2 border rounded-sm border-color-second">
              Фильтр
            </button>
          </div>
          <div className="cards grid grid-rows-3 grid-flow-col gap-8 justify-center mb-20">
            {records?.map((product) => (
              <Link
                href={`/products/${product.id}`}
                className="relative"
                key={product.id}
              >
                <div>
                  <img src={product.img} alt="image"></img>
                </div>
                <div className="absolute bottom-0 left-0 px-5 pb-5 w-full">
                  <div className="flex justify-between mb-2.5">
                    <p>{product.name}</p>
                    <p>{product.price}</p>
                  </div>
                  <div className="flex justify-between text-color-third">
                    <p>{product.use}</p>
                    <p>{product.quantity}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <ul className="flex gap-5 items-center justify-center  ">
            <li>
              <button
                className="px-4 py-2 border rounded-sm border-color-second"
                onClick={prePage}
              >
                <Image src={Prev} alt="btn"></Image>
              </button>
            </li>
            <li>
              <button
                className="px-4 py-2 border rounded-sm border-color-second"
                onClick={nextPage}
              >
                <Image src={Next} alt="nextbtn"></Image>
              </button>
            </li>
          </ul>
        </div>
        <Pagination />
        <Middle />
        <Kontakt />
      </div>
    </section>
  );
};

export default Products;
