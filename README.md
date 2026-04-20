# QUAS Lab Website

**Quality, Understanding, Assurance & Software Lab**  
홍익대학교 소프트웨어융합학과 · [quaslab.com](https://quaslab.com)

## 기술 스택

- **React 19** + **Vite 8**
- **Tailwind CSS v4** (`@tailwindcss/vite` 플러그인)
- **react-router-dom v7**
- **gh-pages** (GitHub Pages 배포)

---

## 로컬 개발

```bash
cd quaslab-site
npm install
npm run dev
```

---

## 폴더 구조

```
quaslab-site/
├── public/
│   └── assets/
│       ├── papers/      ← PDF 논문 파일 업로드
│       ├── books/       ← PDF 저서 파일 업로드
│       ├── awards/      ← PDF 상장 파일 업로드
│       └── patents/     ← PDF 특허 파일 업로드
├── src/
│   ├── components/layout/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   └── archive.json    ← 아카이브 데이터 관리
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── PI.jsx
│   │   ├── Research.jsx
│   │   └── Archive.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── vite.config.js
└── package.json
```

---

## 데이터 관리 (archive.json)

`src/data/archive.json`에서 논문·저서·수상·특허를 직접 편집합니다.

### 파일 업로드 방법
1. PDF 파일을 `public/assets/{papers|books|awards|patents}/` 폴더에 복사
2. `archive.json`의 해당 항목 `fileUrl` 값을 `/assets/papers/파일명.pdf` 형태로 입력
3. `npm run build` 후 배포

### 논문 항목 예시

```json
{
  "id": "paper-004",
  "title": "논문 제목",
  "authors": "김장환, 홍길동",
  "venue": "IEEE Transactions on Software Engineering",
  "year": 2025,
  "doi": "10.1109/TSE.2025.XXXXXX",
  "abstract": "초록 내용",
  "tags": ["키워드1", "키워드2"],
  "fileUrl": "/assets/papers/paper-004.pdf"
}
```

### 특허 항목 예시

```json
{
  "id": "patent-003",
  "title": "발명의 명칭",
  "inventors": "김장환, 홍길동",
  "registrationNumber": "10-XXXX-XXXXXXX",
  "applicationDate": "2025-01-10",
  "registrationDate": null,
  "status": "출원",
  "abstract": "발명의 요약",
  "tags": ["태그"],
  "fileUrl": "/assets/patents/patent-003.pdf"
}
```

---

## GitHub Pages 배포

### 1단계 — vite.config.js `base` 설정

```js
// 저장소 이름이 'quaslab-site'인 경우 (기본값)
base: '/quaslab-site/'

// 커스텀 도메인(quaslab.com) 사용 시
base: '/'
```

### 2단계 — package.json `homepage` 설정

```json
// GitHub Pages 기본 URL 사용 시
"homepage": "https://<github-username>.github.io/quaslab-site"

// 커스텀 도메인 사용 시
"homepage": "https://quaslab.com"
```

### 3단계 — 저장소 연결 및 배포

```bash
git init
git remote add origin https://github.com/<username>/quaslab-site.git
git add .
git commit -m "initial commit"
git push -u origin main

# GitHub Pages로 배포 (build → gh-pages 브랜치 push)
npm run deploy
```

### 4단계 — GitHub 저장소 Pages 설정

GitHub 저장소 → **Settings** → **Pages** → Source를 `gh-pages` 브랜치로 설정

### 5단계 — 커스텀 도메인 설정 (선택)

```bash
# public/CNAME 파일 생성
echo "quaslab.com" > public/CNAME
```

DNS A 레코드 4개 추가:
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```
CNAME: `www` → `<username>.github.io`

---

## 페이지 구성

| 경로 | 파일 | 설명 |
|------|------|------|
| `/` | `Home.jsx` | 연구실 비전 · 연구 분야 요약 · PI 소개 |
| `/pi` | `PI.jsx` | 김장환 교수 약력 · 학력 · 경력 |
| `/research` | `Research.jsx` | 3대 연구 분야 상세 소개 |
| `/archive` | `Archive.jsx` | 논문·저서·수상·특허 조회 및 다운로드 |
