import { NextResponse } from "next/server";
import products from "../../data.json";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("query");
  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().include(query.toLowerCase()) ||
      product.use.toLowerCase().include(query.toLowerCase())
  );

  return new NextResponse(JSON.stringify(filteredProducts));
}
