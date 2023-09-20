"use client";
import React from "react";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import Next from "../../public/assets/images/hero-next.png";
import Prev from "../../public/assets/images/prev.png";
import Link from "next/link";

function HomePagination() {
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    const response = axios
      .get("http://localhost:3000/api/products")
      .then((item: any) => {
        setProducts(item.data);
      });
  };
  // const produc = await getProducts();
  useEffect(() => {
    setProducts(getProducts());
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const lastPage = 4;
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
  return (
    <section>
      <div className="container mx-auto flex justify-between items-center py-36">
        <div className="">
          <p className="text-2xl font-semibold mb-7">Бестселлеры</p>
          <p className="w-56 mb-10">
            Легендарные продукты, завоевавшие любовь наших клиентов
          </p>
          <button className="px-7 py-4 border rounded-sm border-color-second">
            <Link href="/products">Смотреть все</Link>
          </button>
        </div>
        <div className="">
          <div className="">
            <div className="cards flex gap-8 justify-center mb-10">
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

            <ul className="flex gap-5 items-center justify-end  ">
              <li>
                <button
                  className="px-4 py-2 border rounded-sm border-color-second"
                  onClick={prePage}
                >
                  <Image src={Prev} alt="nextbtn"></Image>
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
        </div>
      </div>
    </section>
  );
}

export default HomePagination;
