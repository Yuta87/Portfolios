/**
 * ポートフォリオ関連の型定義
 *
 * このファイルには以下が含まれる:
 * - プロジェクト情報
 * - スキル情報
 * - 経歴情報
 * - ゲーム内での表示データ
 */

// プロジェクト情報
export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  imageUrl?: string;
  category: "web" | "mobile" | "game" | "other";
}

// スキル情報
export interface Skill {
  id: string;
  name: string;
  category: "frontend" | "backend" | "database" | "devops" | "other";
  level: number; // 1-5
  description: string;
}

// 経歴情報
export interface Experience {
  id: string;
  company: string;
  position: string;
  period: {
    start: string;
    end?: string;
  };
  description: string;
  technologies: string[];
}

// ゲーム内での表示用データ
export interface GamePortfolioData {
  projects: Project[];
  skills: Skill[];
  experiences: Experience[];
  // TODO: ゲーム内での表示位置情報
  // TODO: 対話データ
}

// TODO: ポートフォリオデータの詳細型定義
// TODO: ゲーム内での表示ロジック型定義
