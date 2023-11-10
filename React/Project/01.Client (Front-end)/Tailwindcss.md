# tailwindcss

---

# 목차

- [tailwind](#tailwindconfigjs)
- [postcss](#postcssconfigjs)

---

## tailwind.config.js

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      fontFamily: {},
    },
  },
  plugins: [],
};
```

#### 참고자료

[참고자료](링크)

[⬆️ 목차로 이동](#목차)

---

## postcss.config.js

```js
/** @type {import('postcss-load-config').Config} */
export default {
  plugins: {
    "postcss-import": {},
    "tailwindcss/nesting": {}, // 중첩 규칙. node_modules/nesting
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

#### 참고자료

[참고자료](링크)

[⬆️ 목차로 이동](#목차)

---
