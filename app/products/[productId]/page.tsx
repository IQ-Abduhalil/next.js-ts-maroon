"use client";
import Pagination from "@/app/components/Pagination";
import axios from "axios";
import Image from "next/image";

async function getProducts(id: number) {
  try {
    const res = await axios.get(`http://localhost:3000/api/products/${id}`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
}

const ProductDetails = async ({ params: { productId } }: any) => {
  const product = await getProducts(productId);

  return (
    <div className="border-t-2">
      <div className="container mx-auto flex items-center gap-96 pb-36 pt-10">
        <div key={product.id} className="relative">
          <div>
            <Image
              alt={product.name}
              src={product.img}
              width={630}
              height={647}
            />
          </div>
        </div>
        <div>
          <p className="text-6xl font-bold mb-5">{product.name}</p>
          <p className="text-lg font-medium mb-3">{product.price}</p>
          <p className="text-xl font-semibold mb-10 border-b-2">
            {product.use}
          </p>
          <div className="flex gap-5 items-center">
            <p className="text-2xl font-semibold">{product.quantity}</p>
            <button className="py-3 px-5 border">Добавить в корзину</button>
          </div>
        </div>
      </div>
      <div className="pb-32">
        <Pagination />
      </div>
    </div>
  );
};

export default ProductDetails;
