# React @vite 환경

---

# 목차

- [새로운 React @vite 환경 프로젝트 시작하기](#새로운-react-vite-환경-프로젝트-시작하기)
  - [폴더구성](#폴더-구성)
- [실습](https://github.com/uniS2/review-React/tree/724d2f4aeff37e39151ffec055f0016058878f49)

---

## 새로운 React @vite 환경 프로젝트 시작하기
```bash
// 프로젝트 생성
pnpm create vite [폴더명]

// 선택
React
JavaScript  // or TypeScript

// 이동
code [폴더명]

// 종속성, 의존성 - 개발 과 배포
pnpm i

```
<img src="/React/assets/pnpm-i.png" width="600" height="300" alt="pnpm-i" />

1. plugin-react (자동 scaffolding)
2. eslint 에 a11y 없으므로 추가할 것

### 폴더 구성
<img src="/React/assets/파일구성.png" width="200" height="300" alt="파일구성" />

1. `node_modules` : 종속성 패키지
2. `public` : 정적 폴더 <-> assets (*절대경로, import)
3. `src` : JSX
4. `vite.config.js` : 자동 scaffolding

#### 참고자료
[Scaffolding Your First Vite Project](https://vitejs.dev/guide/#scaffolding-your-first-vite-project)

[⬆️ 목차로 이동](#목차)

---