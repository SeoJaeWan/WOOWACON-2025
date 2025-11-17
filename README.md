# CSR vs SSG vs SSR Performance Comparison

WOOWACON 2025를 위한 렌더링 전략 비교 데모입니다.

## 📁 프로젝트 구조

```
WOOWACON-2025/
├── csr/                    # Client-Side Rendering (Vite + React)
├── ssg/                    # Static Site Generation (Next.js static export)
├── ssr/                    # SSR Blocking (Next.js force-dynamic)
├── ssr-streaming/          # SSR Streaming (Next.js with Suspense)
└── index.html             # 비교 대시보드
```

## 🚀 실행 방법

### 1. CSR (Client-Side Rendering)
```bash
cd csr
npm install
npm run dev
# http://localhost:5173
```

### 2. SSG (Static Site Generation)
```bash
cd ssg
pnpm install
pnpm run build      # 빌드 타임에 페이지 생성
pnpm run start
# http://localhost:3001
```

### 3. SSR Blocking (Traditional SSR)
```bash
cd ssr
npm install --legacy-peer-deps
npm run dev
# http://localhost:3000
```

### 4. SSR Streaming (Streaming SSR)
```bash
cd ssr-streaming
npm install
npm run dev
# http://localhost:3002
```

### 5. 비교 대시보드 열기
루트 디렉토리의 `index.html`을 브라우저에서 열거나:
```bash
# Python HTTP 서버 사용
python -m http.server 8000
# http://localhost:8000
```

## 📊 성능 측정 방법

1. **모든 서버를 동시에 실행**하세요 (위의 1-4번 단계)
2. 비교 대시보드(`index.html`)를 엽니다
3. Chrome DevTools (F12)를 열고 **Network 탭**으로 이동
4. **"Disable cache"**를 체크
5. 각 데모 링크를 클릭하고 페이지를 새로고침
6. 오른쪽 하단의 **Web Vitals** 패널에서 지표를 확인

## 📈 예상 결과

| 렌더링 방식 | FCP | LCP | TTFB | 특징 |
|------------|-----|-----|------|------|
| **CSR** | ~0.2s ⚡ | ~3.2s 🐌 | ~0.05s | HTML 스켈레톤으로 빠른 FCP |
| **SSG** | ~0.1s ⚡⚡ | ~0.1s ⚡⚡ | ~0.02s | 사전 렌더링으로 가장 빠름 |
| **SSR Blocking** | ~3.2s 🐌 | ~3.2s 🐌 | ~3.1s | 데이터 대기로 느린 FCP |
| **SSR Streaming** | ~0.3s ⚡ | ~1.5s 🚀 | ~0.05s | 점진적 렌더링의 균형 |

## 🎯 핵심 인사이트

### CSR (Client-Side Rendering)
- ✅ HTML 스켈레톤으로 **FCP 빠름**
- ❌ JS 로딩 + 실행 + API 호출로 **LCP 느림**
- 📱 웹뷰에서 네이티브 데이터 주입 시 유리

### SSG (Static Site Generation)
- ✅ 모든 지표에서 **최고 성능**
- ❌ 데이터 변경 시 **재배포 필요**
- 📝 블로그, 문서 사이트에 적합

### SSR Blocking
- ✅ **완성된 HTML** 전송 (SEO 유리)
- ❌ 데이터 대기로 **FCP/LCP 느림**
- 🔒 인증/개인화 필수 페이지에 적합

### SSR Streaming
- ✅ **FCP와 LCP의 균형** (Best of both worlds)
- ✅ Suspense로 **점진적 렌더링**
- 🚀 현대적인 웹 앱에 권장

## 🛠 기술 스택

- **CSR**: Vite + React 19 + web-vitals
- **SSG/SSR**: Next.js 16 (App Router) + web-vitals
- **Fake API**: 3초 지연 + fakestoreapi.com

## 📚 참고 자료

- [Next.js Web Vitals](https://nextjs.org/docs/pages/building-your-application/optimizing/analytics)
- [web-vitals Library](https://github.com/GoogleChrome/web-vitals)
- [우아콘 2025 발표 자료](../SSR에서%20CSR%20왜%20바꿨을까%2029fc97bafd8980b6afd3e7698634f6b7.md)

## 📝 노트

- 모든 프로젝트는 **3초 API 지연**을 시뮬레이션합니다
- FCP = First Contentful Paint (첫 콘텐츠 표시)
- LCP = Largest Contentful Paint (최대 콘텐츠 표시)
- TTFB = Time To First Byte (첫 바이트 수신)
- INP = Interaction to Next Paint (상호작용 응답)

---

Made for WOOWACON 2025 🚀
