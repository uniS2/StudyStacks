# Supabase

240108 [생활코딩 Supabase 입문수업](https://youtu.be/FbLzqoENTsg?si=WlNDtz0bZNK-m2VH)을 기반으로 학습하였습니다.

## ✅ 목표

1. Supabase의 기본 사용법을 알 수 있다.
2. Table을 생성할 수 있다.
3. Supabase API를 이용한 데이터 `CRUD` 작업과 `select`, `filter` 를 사용할 수 있다.

## 🤔 Why? 백엔드 왜 필요한가요?

| Supabase 핵심기능 |                               설명                               |
| :---------------: | :--------------------------------------------------------------: |
|    `Database`     |                           데이터 보관                            |
|     `Storage`     |                      업로드 파일 보관 서버                       |
|      `Auth`       |          회원가입, 로그인, 로그아웃 구현 위한 인증 기능          |
|  `Edge Function`  | 다양한 프로그래밍 처리 <br/> ex) PHP, Django, Spring, Express.js |

이처럼 Pocketbase는 **애플리케이션의 필요한 백엔드 기능만 담은 클라우드 서비스** 로, Firebase의 강력한 경쟁자로 비교되고 있습니다.

> 클라우드 서비스: 인터넷을 통해 컴퓨팅 자원, 데이터 저장, 소프트웨어, 플랫폼 및 기타 IT 관련 서비스를 원격으로 제공

> AWS 등 많은 기능을 포함했던 기존의 복잡한 클라우드 서비스와 차이

<br />

## Firebase와 차이점?

Supabase는 객체 관계형 데이터베이스인 **PostgreSQL** <br />
Firebase처럼 JavaScript를 사용해서 백엔드 서버, 즉 SQL 없이 서버리스로 관계형 데이터 베이스를 만들 수 있다.

> 서버리스: 개발자가 서버를 관리할 필요 없이 애플리케이션을 빌드하고 실행할 수 있도록 하는 클라우드 네이티브 개발 모델

- [관계형 데이터베이스의 **JOIN** 기능](https://supabase.com/docs/guides/database/joins-and-nesting)

  ```js
  const { data, error } = await supabase.from("countries").select(`
    id, 
    name, 
    cities ( id, name )
  `);
  ```

- 테이블 스키마 정의: 소프트웨어 복잡성 저하

![Firebase와 Supabase의 차이점](/TIL/Supabase/assets/firebase_supabase.png)

- 참고자료: [오픈소스 Firebase, Supabase는 뭐니?](https://psvm.kr/posts/tutorials/supabase/what-is-supabase)

<br />

## 구조

- Account > Organizations > Project > Database, Storage, Auth, Edge functions > Table > Row

<br />

## 실습

### 프로젝트 생성

![Supabase](/TIL/Supabase/assets/create-project.png)

1. **계정 생성:** GitHub 연동
2. **프로젝트 생성:** password 사용할 일 거의 없으므로 'Generate a password' 클릭
3. **Region:** 사용 고객과 가까운 지역 선택

### Table 생성

**Table 생성:** RLS off 시 production 환경에서 절대 사용 금지 <br/> Table Editor, SQL Editor 모두 이용

1. Table Editor

![기본 Columns](/TIL/Supabase/assets/columns-default.png)

2. SQL Editor

![SQL 에디터 동작](/TIL/Supabase/assets/SQL-editor.png)

### 구현

- [JavaScript Client Library](https://supabase.com/docs/reference/javascript/introduction) 이용
- JavaScript는 `supabase` 객체를 지원합니다.
- React `queryClient`를 지원합니다.
