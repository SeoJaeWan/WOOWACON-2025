'use client';

import { useEffect, useState } from 'react';
import { onCLS, onFCP, onLCP, onTTFB, onINP } from 'web-vitals';

type Metrics = {
  FCP?: number;
  LCP?: number;
  CLS?: number;
  TTFB?: number;
  INP?: number;
};

export function WebVitals() {
  const [metrics, setMetrics] = useState<Metrics>({});

  useEffect(() => {
    onFCP((metric) => {
      setMetrics(m => ({ ...m, FCP: metric.value }));
      console.log('FCP:', metric.value);
    });
    
    onLCP((metric) => {
      setMetrics(m => ({ ...m, LCP: metric.value }));
      console.log('LCP:', metric.value);
    });
    
    onCLS((metric) => {
      setMetrics(m => ({ ...m, CLS: metric.value }));
      console.log('CLS:', metric.value);
    });
    
    onTTFB((metric) => {
      setMetrics(m => ({ ...m, TTFB: metric.value }));
      console.log('TTFB:', metric.value);
    });
    
    onINP((metric) => {
      setMetrics(m => ({ ...m, INP: metric.value }));
      console.log('INP:', metric.value);
    });
  }, []);

  return (
    <div style={{
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      background: 'rgba(0, 0, 0, 0.9)',
      color: 'white',
      padding: '16px 20px',
      borderRadius: '8px',
      fontSize: '14px',
      fontFamily: 'monospace',
      zIndex: 9999,
      minWidth: '220px'
    }}>
      <h3 style={{ margin: '0 0 12px 0', fontSize: '16px' }}>Web Vitals</h3>
      {Object.entries(metrics).map(([key, value]) => (
        <div key={key} style={{ marginBottom: '8px' }}>
          <strong>{key}:</strong> {value ? `${(value / 1000).toFixed(3)}s` : 'measuring...'}
        </div>
      ))}
    </div>
  );
}
