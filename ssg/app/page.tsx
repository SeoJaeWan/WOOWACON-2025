import Projects from "../components";
import { WebVitals } from "../components/WebVitals";

export default function Home() {
    return (
        <div style={{
            fontFamily: 'system-ui, -apple-system, sans-serif',
            padding: '20px',
            background: '#f5f5f5',
            minHeight: '100vh'
        }}>
            <div style={{maxWidth: '1200px', margin: '0 auto'}}>
                <Projects />
            </div>
            <WebVitals />
        </div>
    );
}
