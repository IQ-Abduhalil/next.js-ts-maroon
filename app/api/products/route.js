import { NextResponse } from "next/server";
import products from "../data.json";

//http://localhost:3000/api/products
export async function GET(request) {
  return new NextResponse(JSON.stringify(products));
}
