# .eslintrc.cjs

---

# 목차

- [키워드](#소제목)
- [키워드](#소제목)
- [키워드](#소제목)

---

## 소제목

```js
module.exports = {
  root: true,
  env: { browser: true, es2020: true, node: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", "pocketbase", ".eslintrc.cjs"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: ["react-refresh"],
  rules: {
    "react/prop-types": "error",
    "react-refresh/only-export-components": [
      "off",
      { allowConstantExport: true },
    ],
  },
};
```

#### 참고자료

[참고자료](링크)

[⬆️ 목차로 이동](#목차)

---
