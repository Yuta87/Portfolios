export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  level: "beginner" | "intermediate" | "advanced" | "expert";
  years: number;
  percentage: number;
}

export const skillCategories: Record<"en" | "ja", SkillCategory[]> = {
  en: [
    {
      category: "Frontend Development",
      skills: [
        { name: "HTML/CSS", level: "expert", years: 3, percentage: 95 },
        { name: "JavaScript", level: "advanced", years: 3, percentage: 90 },
        { name: "TypeScript", level: "advanced", years: 2, percentage: 85 },
        { name: "React", level: "advanced", years: 2, percentage: 88 },
        { name: "Next.js", level: "intermediate", years: 1, percentage: 85 },
        { name: "Tailwind CSS", level: "advanced", years: 1, percentage: 92 },
      ],
    },
    {
      category: "Backend & CMS",
      skills: [
        { name: "PHP", level: "advanced", years: 3, percentage: 85 },
        { name: "WordPress", level: "expert", years: 3, percentage: 95 },
        { name: "REST API", level: "intermediate", years: 2, percentage: 80 },
        { name: "MySQL", level: "intermediate", years: 2, percentage: 75 },
        { name: "Node.js", level: "beginner", years: 1, percentage: 70 },
      ],
    },
    {
      category: "Tools & Workflow",
      skills: [
        { name: "Git", level: "advanced", years: 3, percentage: 90 },
        { name: "Docker", level: "intermediate", years: 2, percentage: 75 },
        { name: "Vite", level: "advanced", years: 2, percentage: 85 },
        { name: "Webpack", level: "intermediate", years: 2, percentage: 80 },
        { name: "NPM/Yarn", level: "advanced", years: 3, percentage: 88 },
      ],
    },
    {
      category: "Design & Media",
      skills: [
        { name: "Figma", level: "intermediate", years: 2, percentage: 85 },
        {
          name: "Adobe Creative Suite",
          level: "intermediate",
          years: 2,
          percentage: 80,
        },
        {
          name: "Video Editing",
          level: "intermediate",
          years: 2,
          percentage: 75,
        },
        {
          name: "Content Creation",
          level: "advanced",
          years: 2,
          percentage: 85,
        },
      ],
    },
  ],
  ja: [
    {
      category: "フロントエンド開発",
      skills: [
        { name: "HTML/CSS", level: "expert", years: 3, percentage: 95 },
        { name: "JavaScript", level: "advanced", years: 3, percentage: 90 },
        { name: "TypeScript", level: "advanced", years: 2, percentage: 85 },
        { name: "React", level: "advanced", years: 2, percentage: 88 },
        { name: "Next.js", level: "intermediate", years: 1, percentage: 85 },
        { name: "Tailwind CSS", level: "advanced", years: 1, percentage: 92 },
      ],
    },
    {
      category: "バックエンド & CMS",
      skills: [
        { name: "PHP", level: "advanced", years: 3, percentage: 85 },
        { name: "WordPress", level: "expert", years: 3, percentage: 95 },
        { name: "REST API", level: "intermediate", years: 2, percentage: 80 },
        { name: "MySQL", level: "intermediate", years: 2, percentage: 75 },
        { name: "Node.js", level: "beginner", years: 1, percentage: 70 },
      ],
    },
    {
      category: "ツール & ワークフロー",
      skills: [
        { name: "Git", level: "advanced", years: 3, percentage: 90 },
        { name: "Docker", level: "intermediate", years: 2, percentage: 75 },
        { name: "Vite", level: "advanced", years: 2, percentage: 85 },
        { name: "Webpack", level: "intermediate", years: 2, percentage: 80 },
        { name: "NPM/Yarn", level: "advanced", years: 3, percentage: 88 },
      ],
    },
    {
      category: "デザイン & メディア",
      skills: [
        { name: "Figma", level: "intermediate", years: 2, percentage: 85 },
        {
          name: "Adobe Creative Suite",
          level: "intermediate",
          years: 2,
          percentage: 80,
        },
        {
          name: "動画編集",
          level: "intermediate",
          years: 2,
          percentage: 75,
        },
        {
          name: "コンテンツクリエーション",
          level: "advanced",
          years: 2,
          percentage: 85,
        },
      ],
    },
  ],
};
