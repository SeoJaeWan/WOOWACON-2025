import {Product} from "@/lib/products";

const DATA_DELAY_MS = 3000;
const API_BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3321";

async function fetchProducts(delayMs: number) {
    const url = new URL("/api/products", API_BASE_URL);
    url.searchParams.set("delay", String(delayMs));

    const res = await fetch(url, {cache: "no-store"});
    if (!res.ok) {
        throw new Error("Failed to load products");
    }
    return (await res.json()) as Product[];
}

const Products = async () => {
    const data = await fetchProducts(DATA_DELAY_MS);

    return (
        <>
            <h1>Products (SSR Blocking)</h1>
            {data.map((product: Product) => (
                <div
                    key={product.id}
                    style={{
                        marginBottom: "20px",
                        padding: "20px",
                        background: "white",
                        borderRadius: "8px",
                        boxShadow: "0 1px 3px rgba(0,0,0,0.1)"
                    }}
                >
                    <h2 style={{margin: "0 0 12px 0", color: "#333"}}>{product.title}</h2>
                    <p style={{margin: "8px 0", color: "#666"}}>{product.description}</p>
                    <p
                        style={{
                            fontWeight: "bold",
                            color: "#2563eb",
                            fontSize: "1.2em"
                        }}
                    >
                        ${product.price}
                    </p>
                </div>
            ))}
        </>
    );
};

export default Products;
