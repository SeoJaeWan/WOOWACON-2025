import {loadProducts, Product} from "@/lib/products";

const DATA_DELAY_MS = 3000;

const Products = async () => {
    const data = await loadProducts(DATA_DELAY_MS);

    return (
        <>
            <h1>Products (SSG)</h1>
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
