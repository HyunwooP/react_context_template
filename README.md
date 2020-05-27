## React + Context API Template
```
2020.05.28
Author: 박현우
```

```
[노트]

Context API 2.0을 써보고 템플릿으로 남겨본다.
```

```
[프로젝트 구조]
----- tsconfig.json - typescript 설정
--------- src
------------- index.tsx - start
------------- App.tsx - entry point
------------- component - 공통적으로 쓸 수 있는 컴포넌트 집합
------------------ component/ContextWrapper.tsx - context wrapper
------------- context - context 및 관련 함수 집합
------------------ context/reducer.tsx - store에 접근할 reducer 정의
------------------ context/model - context 및 store의 model 객체
------------------ context/types - context 및 action / reducer type 정의
------------- pages - 화면 별로 컴포넌트 집합
------------------ pages/Login - Login Component (TEST)
------------- routes - route 정의 및 router 컴포넌트 집합
```