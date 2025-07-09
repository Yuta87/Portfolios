export type Locale = "en" | "ja";

export interface Translations {
  nav: {
    home: string;
    about: string;
    experience: string;
    skills: string;
    works: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    description: string;
    cta: string;
  };
  about: {
    title: string;
    subtitle: string;
    myJourney: string;
    languages: string;
    whatSetsApart: string;
  };
  experience: {
    title: string;
    subtitle: string;
    present: string;
    years: string;
  };
  skills: {
    title: string;
    subtitle: string;
    yearsExp: string;
  };
  works: {
    title: string;
    subtitle: string;
    viewProject: string;
    technologies: string;
    websitesDelivered: string;
    clientSatisfaction: string;
    yearsExperience: string;
  };
  contact: {
    title: string;
    subtitle: string;
    getInTouch: string;
    currentlyAvailable: string;
    location: string;
    quickResponse: string;
    readyToStart: string;
    email: string;
    whatsapp: string;
  };
  footer: {
    rights: string;
    crafted: string;
  };
}

export const translations: Record<Locale, Translations> = {
  en: {
    nav: {
      home: "Home",
      about: "About Me",
      experience: "Experience",
      skills: "Skills",
      works: "Projects",
      contact: "Contact",
    },
    hero: {
      title: "Yuta Nishizaki",
      subtitle: "Frontend & WordPress Developer",
      description:
        "Crafting premium web experiences with expertise in WordPress, React, and Next.js. Bringing international perspective and technical excellence to every project.",
      cta: "Learn More About Me",
    },
    about: {
      title: "About Me",
      subtitle:
        "Passionate developer with international experience and commitment to excellence",
      myJourney: "My Journey",
      languages: "Languages",
      whatSetsApart: "What Sets Me Apart",
    },
    experience: {
      title: "Professional Experience",
      subtitle:
        "A journey of growth, learning, and delivering exceptional results across diverse roles",
      present: "Present",
      years: "years",
    },
    skills: {
      title: "Technical Skills",
      subtitle:
        "Comprehensive expertise across modern web technologies and development practices",
      yearsExp: "years experience",
    },
    works: {
      title: "Featured Projects",
      subtitle:
        "A showcase of premium websites and applications built for international clients",
      viewProject: "View Project",
      technologies: "Technologies",
      websitesDelivered: "Websites Delivered",
      clientSatisfaction: "Client Satisfaction",
      yearsExperience: "Years Experience",
    },
    contact: {
      title: "Let's Work Together",
      subtitle:
        "Ready to bring your vision to life? I'm available for new projects and collaborations.",
      getInTouch: "Get In Touch",
      currentlyAvailable: "Currently Available For",
      location: "Location",
      quickResponse: "Quick Response",
      readyToStart: "Ready to Start Your Project?",
      email: "Send Email",
      whatsapp: "WhatsApp",
    },
    footer: {
      rights: "All rights reserved.",
      crafted: "Crafted with passion using Next.js and Tailwind CSS",
    },
  },
  ja: {
    nav: {
      home: "Home",
      about: "About Me",
      experience: "Experience",
      skills: "Skills",
      works: "Projects",
      contact: "Contact",
    },
    hero: {
      title: "西崎 雄太",
      subtitle: "フロントエンド・WordPress開発者",
      description:
        "WordPress、React、Next.jsの専門知識で、プレミアムなウェブ体験を創造。国際的な視点と技術的卓越性をすべてのプロジェクトに。",
      cta: "詳しく見る",
    },
    about: {
      title: "自己紹介",
      subtitle: "国際的な経験と卓越性へのコミットメントを持つ情熱的な開発者",
      myJourney: "私の歩み",
      languages: "言語",
      whatSetsApart: "私の特徴",
    },
    experience: {
      title: "職歴",
      subtitle: "多様な役割での成長、学習、優れた結果の提供の歩み",
      present: "現在",
      years: "年",
    },
    skills: {
      title: "技術スキル",
      subtitle: "モダンなウェブ技術と開発実践における包括的な専門知識",
      yearsExp: "年の経験",
    },
    works: {
      title: "主要プロジェクト",
      subtitle:
        "国際的なクライアント向けのプレミアムウェブサイトとアプリケーション",
      viewProject: "プロジェクトを見る",
      technologies: "技術",
      websitesDelivered: "ウェブサイト提供数",
      clientSatisfaction: "クライアント満足度",
      yearsExperience: "経験年数",
    },
    contact: {
      title: "一緒に働きましょう",
      subtitle:
        "あなたのビジョンを実現する準備はできていますか？新しいプロジェクトとコラボレーションが可能です。",
      getInTouch: "お問い合わせ",
      currentlyAvailable: "現在対応可能",
      location: "所在地",
      quickResponse: "迅速な対応",
      readyToStart: "プロジェクトを始める準備はできていますか？",
      email: "メールを送る",
      whatsapp: "WhatsApp",
    },
    footer: {
      rights: "すべての権利を保有。",
      crafted: "Next.jsとTailwind CSSで情熱を込めて作成",
    },
  },
};
