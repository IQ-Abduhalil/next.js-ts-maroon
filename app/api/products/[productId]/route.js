import { NextResponse } from "next/server";
import products from "../../data.json";

export async function GET(request) {
  const productId = request.url.slice(-5);
  const product = products.find((p) => p.id === productId);
  return new NextResponse(JSON.stringify(product));
}
