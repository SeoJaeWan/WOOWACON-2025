import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import App from "./App.tsx";
import {WebVitals} from "./WebVitals.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <App />
        <WebVitals />
    </StrictMode>
);
