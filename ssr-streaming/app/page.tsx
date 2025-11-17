import {Suspense} from "react";
import Projects from "../components";
import {WebVitals} from "../components/WebVitals";

// Enable streaming (default in App Router, but being explicit)
export const dynamic = "force-dynamic";

function ProductsSkeleton() {
    return (
        <div style={{maxWidth: "1200px", margin: "0 auto"}}>
            <h1>Products (SSR Streaming)</h1>
            {[1, 2, 3, 4].map(i => (
                <div
                    key={i}
                    style={{
                        marginBottom: "20px",
                        padding: "20px",
                        background: "white",
                        borderRadius: "8px",
                        boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                        animation: "pulse 1.5s ease-in-out infinite"
                    }}
                >
                    <div
                        style={{
                            height: "24px",
                            width: "60%",
                            background: "#e0e0e0",
                            borderRadius: "4px",
                            marginBottom: "12px"
                        }}
                    ></div>
                    <div
                        style={{
                            height: "16px",
                            width: "80%",
                            background: "#f0f0f0",
                            borderRadius: "4px",
                            marginBottom: "8px"
                        }}
                    ></div>
                    <div
                        style={{
                            height: "20px",
                            width: "100px",
                            background: "#e0e0e0",
                            borderRadius: "4px",
                            marginTop: "12px"
                        }}
                    ></div>
                </div>
            ))}
        </div>
    );
}

export default function Home() {
    return (
        <div
            style={{
                fontFamily: "system-ui, -apple-system, sans-serif",
                padding: "20px",
                background: "#f5f5f5",
                minHeight: "100vh"
            }}
        >
            <div style={{maxWidth: "1200px", margin: "0 auto"}}>
                <Suspense fallback={<ProductsSkeleton />}>
                    <Projects />
                </Suspense>
            </div>
            <WebVitals />
        </div>
    );
}
