# 환경 구성

---

# 목차

- [ESLint](#eslint)
- [Prettier](#prettier)
- [live-server](#live-server)
- [npm,npx 와 npm -g](/javascript/1.basic/npm-npx.md)

---

## ESLint

- EcmaScript + <U>Lint</U>*  
<span style="font-size:80%">*Lint: 보푸라기. 에러가 있는 곳에 표시 달아놓는 도구</span>
- 확장성 다양한 플러그인 사용 가능
- 설치
  ```bash
  # 개발용. 빌드 후 배포시 포함되지 않음
  npm i -D eslint
  # ESLint 환경구성 파일 대화형으로 생성
  npm init @eslint/config
  ```
- _.eslint<U>rc</U>_  
<span style="font-size:80%">\*rc: run commdend. 주로 환경 설정 파일명에 이용</span>
  ```JavaScript
  module.exports = {
      "env": {
          "browser": true,
          "es2021": true,
          "node": true
      },
      "extends": "eslint:recommended",
      "overrides": [
          {
              "env": {
                  "node": true
              },
              "files": [
                  ".eslintrc.{js,cjs}"
              ],
              "parserOptions": {
                  "sourceType": "script"
              }
          }
      ],
      "parserOptions": {
          "ecmaVersion": "latest",
          "sourceType": "module"
      },
      "rules": {
          "no-unused-vars": 'warn'
      }
  }
  ```
  - **env**: 프로젝트 사용 환경
  - **extends**: 추가한 플러그인에서 사용할 규칙 - 확장 설정
  - **overrides**: 일부 파일에 조금 다른 설정을 적용할 경우 이용
  - **parserOptions**: 자바스크립트 언어 옵션 지정 - ECMAScript 버전, parser의 export 형태 등
  - **rules**: 사용할 규칙 수정
    - "off" 또는 0 : 사용하지 않음
    - "warn" 또는 1 : 경고
    - "error" 또는 2 : 오류
    - 배열 리터럴 구문 : 추가 옵션 지정
  - 참고자료: [Configuration Files](https://eslint.org/docs/latest/use/configure/configuration-files), [Rules Reference](https://eslint.org/docs/latest/rules/)

---

## Prettier

- 설치

  ```bash
  # 개발용. 빌드 후 배포시 포함되지 않음
  npm i -D prettier
  ```

- 참고자료: [prettier](https://github.com/prettier/prettier)

---

## live-server

```JavaScript
live-server client --host=localhost --port=5500 --no-browser
```

- `--host`: 바인드할 호스트 주소 선택.
  <span style="font-size:80%">localhost와 주소는 보여지는 방식이 다를뿐 차이가 없다.</span>
- `--port`: 사용할 포트 선택.
  <span style="font-size:80%">네트워크 상 프로토콜 기본 포트 목록 외 사용</span>
- `--no-browser`: 자동 웹 브라우저 실행 억제.
- 참고자료: [live-server](https://www.npmjs.com/package/live-server#user-content-usage-from-node)
