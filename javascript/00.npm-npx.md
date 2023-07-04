# npm, npx

---

# 목차

- [package.json](#packagejson)
- [package-lock.json](#package-lockjson)
- [npm,npx 와 npm -g](#npm-npx-와-npm--g-차이)  

---

## package.json

- Node.js 프로젝트에서 사용되는 설정 파일로 구성 요소와 의존성 관리에 사용한다.
- 일반적으로 루트 디렉토리에 위치하며 npm (Node Package Manager)을 사용하여 관리한다.
  
- 주요 속성
  - "scripts" : 프로젝트가 의존하는 패키지를 정의. npm으로 간편하게 실행할 수 있는 스크립트 파일들의 정보가 담겨있다. 프로젝트 실행 또는 개발시에 필요한 외부 모듈.
  - "<U>dev</U>Dependencies": <U>개발에 필요한</U> 의존성 패키지를 정의한다.

- 참고자료: [package.json | npm Docs](https://docs.npmjs.com/cli/v9/configuring-npm/package-json)  
  
---

## package-lock.json
- npm 패키지 설치시 자동으로 생성되며 프로젝트를 빌드하거나 배포할 때 사용한다.
- 프로젝트의 종속성 트리의 정확한 버전 및 의존성 관계를 포함하며, 동일한 버전의 패키지를 설치할 수 있도록 한다.
- 포함 정보
  - 패키지 이름과 버전
  - 종속성 관계
  - package.json은 버전정보를 저장할 때 version range를 사용하는 경우가 발생하며 이를 정확한 버전 정보로 제공
  - 패키지의 고유 식별 해시 값 포함  
    
- 참고자료: [package-lock.json | npm Docs](https://docs.npmjs.com/cli/v9/configuring-npm/package-lock-json)
  
---

## npm, npx 와 npm -g 차이  
- package.json을 도서관에 비유하면 package-lock.json은 도서관에서 책을 빌릴 때 쓰이는 대출 이력이라 생각할 수 있다.
- 책을 대여를 할 때 ```npm i``` 명령을 내리게 되는데 이 책을 보기 위해서 추가로 ```npx``` 명령을 내려주어야 한다.
이때, 자동으로 package-lock.json 파일이 생기게 된다.
- ```npx``` 은 ```npm i``` 명령 없이도 일회성 명령을 내릴 수 있으나, package-lock.json에 쓰이는 이력 참고를 위해 이런 방식을 사용하지 않는다.
- ```npm -g``` 명령을 사용할 경우 전역 설치가 되고 다른 명령을 내려줄 필요가 없기 때문에 편리하게 느껴지나, 다른 사용자가 전역 설치가 되어 있지 않을 경우 package-lock.json 파일의 이력이 없어 열어볼 수 없다.
- 따라서, ```npm -> npx``` 과정을 거친다.
