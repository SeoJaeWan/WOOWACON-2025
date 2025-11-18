import { NextResponse } from "next/server";
import { loadProducts } from "@/lib/products";

const DEFAULT_DELAY = 3000;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const delayParam = Number(searchParams.get("delay"));
  const delayMs = Number.isFinite(delayParam) ? delayParam : DEFAULT_DELAY;
  const products = await loadProducts(delayMs);
  return NextResponse.json(products);
}
