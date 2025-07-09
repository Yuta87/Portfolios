export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
  technologies?: string[];
  type: "work" | "internship" | "freelance";
  current: boolean;
}

export const experiences: Record<"en" | "ja", Experience[]> = {
  en: [
    {
      id: "freelance-wordpress",
      title: "Freelance WordPress Developer",
      company: "Self-employed",
      location: "Remote (Japan & Netherlands)",
      period: "Aug 2022 - Present",
      description:
        "Delivering premium WordPress websites with focus on performance, SEO, and user experience",
      achievements: [
        "Delivered 18+ websites from scratch using PHP, SCSS, and Vanilla JS",
        "Specialized in responsive design, SEO optimization, and performance tuning",
        "Collaborated with international clients and designers",
        "Implemented modern development workflows with Vite and Docker",
      ],
      technologies: [
        "PHP",
        "WordPress",
        "SCSS",
        "JavaScript",
        "Vite",
        "Docker",
      ],
      type: "freelance",
      current: true,
    },
    {
      id: "social-media-marketer",
      title: "Social Media Marketer",
      company: "Next Web Enterprise B.V.",
      location: "The Hague, Netherlands",
      period: "Oct 2024 - Present",
      description:
        "Creating engaging content for social media growth and brand awareness",
      achievements: [
        "Created Instagram Reels for engagement and audience growth",
        "Combined storytelling with analytics for effective targeting",
        "Developed content strategies for B2B audience",
      ],
      technologies: [
        "Adobe Premiere Pro",
        "Instagram Analytics",
        "Content Strategy",
      ],
      type: "work",
      current: true,
    },
    {
      id: "system-engineer",
      title: "System Engineer",
      company: "Remote Work Cloud Co., Ltd.",
      location: "Remote (Japan)",
      period: "Jun 2023 - Present",
      description:
        "Developing QA tools and improving client satisfaction for SaaS products",
      achievements: [
        "Developed test cases and internal tools for SaaS products",
        "Contributed to QA workflows and process improvements",
        "Enhanced client satisfaction through systematic testing",
      ],
      technologies: ["Testing Frameworks", "SaaS Tools", "QA Processes"],
      type: "work",
      current: true,
    },
    {
      id: "funtech-intern",
      title: "WordPress Developer Intern",
      company: "FunTech Inc.",
      location: "Tokyo, Japan",
      period: "Feb 2022 - Aug 2022",
      description:
        "Learning foundational web development skills and building internal websites",
      achievements: [
        "Mastered core web development technologies (HTML, CSS, JavaScript)",
        "Built internal websites as development practice",
        "Established foundation for freelance career",
      ],
      technologies: ["HTML", "CSS", "JavaScript", "WordPress"],
      type: "internship",
      current: false,
    },
  ],
  ja: [
    {
      id: "freelance-wordpress",
      title: "フリーランスWordPress開発者",
      company: "個人事業主",
      location: "リモート（日本、オランダ）",
      period: "2022年8月 - 現在",
      description:
        "パフォーマンス、SEO、ユーザー体験に注力した高品質なWordPressサイトを提供",
      achievements: [
        "PHP、SCSS、Vanilla JSを用いて18件以上のWebサイトをゼロから構築",
        "レスポンシブデザイン、SEO最適化、パフォーマンスチューニングに特化",
        "海外クライアントやデザイナーと協業",
        "ViteやDockerを活用した最新の開発ワークフローを導入",
      ],
      technologies: [
        "PHP",
        "WordPress",
        "SCSS",
        "JavaScript",
        "Vite",
        "Docker",
      ],
      type: "freelance",
      current: true,
    },
    {
      id: "social-media-marketer",
      title: "ソーシャルメディアマーケター",
      company: "Next Web Enterprise B.V.",
      location: "オランダ・ハーグ",
      period: "2024年10月 - 現在",
      description:
        "ソーシャルメディアの成長とブランド認知向上のための魅力的なコンテンツ制作",
      achievements: [
        "Instagramリールを活用したエンゲージメントとオーディエンス拡大",
        "ストーリーテリングと分析を組み合わせた効果的なターゲティング",
        "B2B向けのコンテンツ戦略を策定",
      ],
      technologies: [
        "Adobe Premiere Pro",
        "Instagram Analytics",
        "Content Strategy",
      ],
      type: "work",
      current: true,
    },
    {
      id: "system-engineer",
      title: "システムエンジニア",
      company: "Remote Work Cloud株式会社",
      location: "リモート（日本）",
      period: "2023年6月 - 現在",
      description: "SaaS製品向けのQAツール開発と顧客満足度向上に従事",
      achievements: [
        "SaaS製品のテストケースや社内ツールを開発",
        "QAワークフローやプロセス改善に貢献",
        "体系的なテストによる顧客満足度の向上",
      ],
      technologies: ["Testing Frameworks", "SaaS Tools", "QA Processes"],
      type: "work",
      current: true,
    },
    {
      id: "funtech-intern",
      title: "WordPress開発インターン",
      company: "FunTech株式会社",
      location: "日本・東京",
      period: "2022年2月 - 2022年8月",
      description: "Web開発の基礎スキルを学び、社内Webサイトを構築",
      achievements: [
        "HTML、CSS、JavaScriptなどの基礎技術を習得",
        "社内Webサイトを開発実践として構築",
        "フリーランスキャリアの基礎を確立",
      ],
      technologies: ["HTML", "CSS", "JavaScript", "WordPress"],
      type: "internship",
      current: false,
    },
  ],
};
