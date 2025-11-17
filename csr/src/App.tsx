import {useEffect, useState} from "react";
import {WebVitals} from "./WebVitals";

type Product = {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
};

const fake = async (): Promise<Product[]> => {
    return new Promise(resolve => {
        setTimeout(async () => {
            const response = await fetch("https://fakestoreapi.com/products");
            const data = await response.json();
            resolve(data);
        }, 1000); // 1 second delay
    });
};

function App() {
    const [data, setData] = useState<Product[] | null>(null);

    useEffect(() => {
        fake().then(products => setData(products));
    }, []);

    return (
        <>
            <div className="product-container">
                <h1>Products (CSR)</h1>
                {!data ? (
                    <div>Loading products...</div>
                ) : (
                    data.map(product => (
                        <div key={product.id} className="product-item">
                            <h2>{product.title}</h2>
                            <p>{product.description}</p>
                            <p className="price">${product.price}</p>
                        </div>
                    ))
                )}
            </div>
            <WebVitals />
        </>
    );
}

export default App;
