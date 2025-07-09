export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  whatsapp: string;
  linkedin: string;
  github: string;
  summary: string;
  languages: Language[];
}

export interface Language {
  name: string;
  level: string;
  proficiency: "native" | "fluent" | "conversational" | "basic";
}

export const personalInfo: Record<"en" | "ja", PersonalInfo> = {
  en: {
    name: "Yuta Nishizaki",
    title: "Frontend & WordPress Developer",
    location: "The Hague, Netherlands",
    email: "nszk.yuta@gmail.com",
    phone: "+31 617766418",
    whatsapp: "+31617766418",
    linkedin: "https://nl.linkedin.com/in/yuta-nishizaki-1310021a2",
    github: "https://github.com/Yuta87",
    summary:
      "Developer with 3+ years of experience in WordPress development, frontend engineering, and content creation. Skilled in delivering fast, SEO-optimized, and accessible websites. International background brings discipline and collaboration to technical teams.",
    languages: [
      { name: "Japanese", level: "C2", proficiency: "native" },
      { name: "English", level: "C1", proficiency: "fluent" },
      { name: "Swedish", level: "A2", proficiency: "conversational" },
      { name: "Danish", level: "A2", proficiency: "conversational" },
      { name: "Dutch", level: "A1", proficiency: "basic" },
    ],
  },
  ja: {
    name: "西崎 雄太",
    title: "フロントエンド・WordPress開発者",
    location: "オランダ・ハーグ",
    email: "nszk.yuta@gmail.com",
    phone: "+31 617766418",
    whatsapp: "+31617766418",
    linkedin: "https://nl.linkedin.com/in/yuta-nishizaki-1310021a2",
    github: "https://github.com/Yuta87",
    summary:
      "WordPress開発、フロントエンドエンジニアリング、コンテンツ制作で3年以上の経験を持つ開発者。高速・SEO最適化・アクセシブルなWebサイトの提供に長ける。国際的なバックグラウンドで規律と協調性を技術チームにもたらします。",
    languages: [
      { name: "日本語", level: "C2", proficiency: "native" },
      { name: "英語", level: "C1", proficiency: "fluent" },
      { name: "スウェーデン語", level: "A2", proficiency: "conversational" },
      { name: "デンマーク語", level: "A2", proficiency: "conversational" },
      { name: "オランダ語", level: "A1", proficiency: "basic" },
    ],
  },
};
