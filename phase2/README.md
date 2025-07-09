# Portfolio Quest

_A gamified portfolio built with Next.js, Three.js, and more._

---

## 1. Project Overview / プロジェクト概要

Portfolio Quest is an interactive, game-inspired portfolio site. Explore, interact, and discover the creator's skills and works in a pixel-art RPG world.

Portfolio Quest は、ピクセルアート RPG の世界で作者のスキルや作品を探索・体験できるインタラクティブなポートフォリオサイトです。

---

## 2. Tech Stack / 技術スタック

- **Next.js 14 (App Router)**
- **TypeScript 5.x**
- **Tailwind CSS**
- **Three.js / React Three Fiber (R3F)**
- **Zustand (State Management)**
- **Framer Motion (Animation)**
- **Vercel Hosting**
- **GitHub API**

---

## 3. Directory Structure / ディレクトリ構成

```
phase2/
  src/
    app/           # Next.js app directory / Next.jsアプリ本体
    assets/        # Images, audio, shaders, sprites / 画像・音声・シェーダ・スプライト
    components/    # React components (game, UI, webgl) / Reactコンポーネント
    data/          # Static data (maps, npcs, portfolio, etc.) / 静的データ
    hooks/         # Custom React hooks / カスタムフック
    styles/        # Global styles / グローバルスタイル
    types/         # TypeScript types / 型定義
    utils/         # Utility functions / ユーティリティ関数
```

---

## 4. Getting Started / セットアップ手順

### Prerequisites / 前提条件

- Node.js 18+
- npm (or yarn)

### Install dependencies / 依存関係のインストール

```bash
cd phase2
npm install
# or
# yarn install
```

### Run development server / 開発サーバーの起動

```bash
npm run dev
# or
# yarn dev
```

App will be available at [http://localhost:3000](http://localhost:3000)

アプリは [http://localhost:3000](http://localhost:3000) で確認できます。

---

## 5. Development, Build & Deployment / 開発・ビルド・デプロイ方法

### Build for production / 本番ビルド

```bash
npm run build
```

### Start production server / 本番サーバー起動

```bash
npm start
```

### Deploy / デプロイ

- Deploy to [Vercel](https://vercel.com/) for best compatibility.
- Vercel へのデプロイを推奨します。

---

## 6. Contribution / コントリビュート方法

1. Fork this repository / このリポジトリをフォーク
2. Create a new branch / 新しいブランチを作成
3. Make your changes / 変更を加える
4. Submit a Pull Request / プルリクエストを送信

Please follow the coding conventions described in `.cursorrules`.
`.cursorrules`に記載されたコーディング規約に従ってください。

---

## 7. License / ライセンス

This project is licensed under the MIT License.
本プロジェクトは MIT ライセンスで公開されています。
