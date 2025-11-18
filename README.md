# CSR vs SSG vs SSR Performance Comparison

렌더링 전략 비교 데모입니다.

## 📁 프로젝트 구조

```
WOOWACON-2025/
├── csr/                    # Client-Side Rendering (Vite, no skeleton)
├── csr-skeleton/           # Client-Side Rendering with skeleton UI
├── ssg/                    # Static Site Generation (Next.js static export)
├── ssr/                    # SSR Blocking (Next.js force-dynamic)
└── ssr-streaming/          # SSR Streaming (Next.js with Suspense)
```

## 🚀 실행 방법

### 1. CSR (Client-Side Rendering, Skeleton 없음)

```bash
cd csr
npm install
npm run dev
# http://localhost:2998
```

### 2. CSR + Skeleton UI (FCP 개선 버전)

```bash
cd csr-skeleton
npm install
npm run dev
# http://localhost:2999
```

### 3. SSG (Static Site Generation)

```bash
cd ssg
pnpm install
pnpm run build      # 빌드 타임에 페이지 생성
pnpm run start
# http://localhost:3001
```

### 4. SSR Blocking (Traditional SSR)

```bash
cd ssr
npm install
pnpm run build      # 빌드 타임에 페이지 생성
pnpm run start
# http://localhost:3002
```

### 5. SSR Streaming (Streaming SSR)

```bash
cd ssr-streaming
npm install
pnpm run build      # 빌드 타임에 페이지 생성
pnpm run start
# http://localhost:3003
```

## 🛠 기술 스택

-   **CSR**: Vite + React 19 + web-vitals
-   **SSG/SSR**: Next.js 16 (App Router) + web-vitals
