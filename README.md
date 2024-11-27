# TypeScript Playground

이 프로젝트는 TypeScript로 작성된 Node.js 애플리케이션입니다. 이 프로젝트는 nodemon을 사용하여 코드 변경을 자동으로 감지하고, ESLint와 Prettier를 사용하여 코드 품질을 유지하며, 엄격한 TypeScript 설정을 통해 안전한 코드를 작성하는 것을 목표로 합니다.

## 프로젝트 설정

### 1. 프로젝트 클론

먼저, 이 저장소를 클론합니다.

```bash
git clone https://github.com/your-username/typescript-playground.git
cd typescript-playground
```

### 2. 패키지 설치

프로젝트의 의존성을 설치합니다.

```bash
npm install
```

## 사용법

### 코드 변경 감지 및 자동 재실행

`nodemon`을 사용하여 코드 변경을 감지하고 자동으로 애플리케이션을 재실행합니다.

```bash
npm run dev
```

### 코드 빌드

TypeScript 코드를 JavaScript로 컴파일합니다. 컴파일된 코드는 `dist` 디렉터리에 저장됩니다.

```bash
npm run build
```

### 코드 실행

`npm run build` 명령어로 컴파일한 JavaScript 코드를 실행합니다.

```bash
npm run start
```

### 코드 린트

ESLint를 사용하여 코드를 린트합니다. 이 명령어는 `.ts` 확장자를 가진 모든 파일을 검사합니다.

```bash
npm run lint
```

### 코드 포맷팅

Prettier를 사용하여 코드를 포맷팅합니다.

```bash
npm run format
```

## 프로젝트 구조

```plaintext
typescript-playground/
├── dist/               # 컴파일된 JavaScript 파일
├── node_modules/       # 프로젝트 의존성
├── src/                # TypeScript 소스 파일
│   └── index.ts        # 애플리케이션 진입점
├── .vscode/            # VSCode 설정 파일
│   └── settings.json   # VSCode 설정 파일
├── .github/            # GitHub Actions 설정 파일
│   └── workflows/
│       └── ci.yml      # CI 설정 파일
├── .eslintrc.json      # ESLint 설정 파일
├── .prettierrc         # Prettier 설정 파일
├── .gitignore          # Git 무시 파일
├── Dockerfile          # Docker 설정 파일
├── LICENSE             # 라이선스 파일
├── nodemon.json        # nodemon 설정 파일
├── package.json        # npm 설정 파일
├── tsconfig.json       # TypeScript 설정 파일
└── README.md           # 프로젝트 설명 파일
```

## 기여 방법

1. 이 저장소를 포크합니다.
2. 새로운 브랜치를 만듭니다. (`git checkout -b feature-branch`)
3. 변경 사항을 커밋합니다. (`git commit -am 'Add new feature'`)
4. 브랜치에 푸시합니다. (`git push origin feature-branch`)
5. 풀 리퀘스트를 생성합니다.

## 라이선스

이 프로젝트는 MIT 라이선스에 따라 라이선스가 부여됩니다. 자세한 내용은 LICENSE 파일을 참조하세요.

## 작성자

- **hyeonbungi** - <kimhyeonbung@gmail.com>
