export interface Project {
  id: string;
  title: string;
  company: string;
  description: string;
  longDescription: string;
  technologies: string[];
  category: "corporate" | "landing" | "media" | "recruitment";
  url: string;
  image: string;
  featured: boolean;
  year: string;
  challenges: string[];
  solutions: string[];
}

export const featuredProjects: Record<"en" | "ja", Project[]> = {
  en: [
    {
      id: "asahi-metalfine",
      title: "ASAHI METALFINE",
      company: "ASAHI METALFINE Inc.",
      description:
        "Corporate website expressing luxury and speed for precious metals business",
      longDescription:
        "Created a premium corporate website for ASAHI METALFINE Inc., a subsidiary of the large overseas corporation ASAHI HD Inc. The site needed to convey luxury and speed while maintaining professional credibility.",
      technologies: [
        "PHP",
        "SCSS",
        "JavaScript",
        "WordPress",
        "Docker",
        "Vite",
      ],
      category: "corporate",
      url: "https://www.asahimetalfine.com/",
      image: "/asahi-metalfine.jpg",
      featured: true,
      year: "2022",
      challenges: [
        "Conveying luxury and speed in design",
        "Professional credibility for new subsidiary",
        "Integration with parent company branding",
      ],
      solutions: [
        "Premium visual design with smooth animations",
        "Professional color scheme and typography",
        "Seamless user experience with fast loading times",
      ],
    },
    {
      id: "aniseka",
      title: "ANISEKA",
      company: "ANISEKA",
      description: "Creative animation platform with engaging user experience",
      longDescription:
        "Developed a creative animation platform focusing on user engagement and interactive experiences. The project required advanced animation techniques and smooth user interactions.",
      technologies: ["JavaScript", "SCSS", "HTML"],
      category: "media",
      url: "https://www.aniseka.com/",
      image: "/aniseka.jpg",
      featured: true,
      year: "2023",
      challenges: [
        "Complex animation implementations",
        "Performance optimization for animations",
        "Cross-browser compatibility",
      ],
      solutions: [
        "Custom animation library integration",
        "Optimized loading strategies",
        "Progressive enhancement approach",
      ],
    },
    {
      id: "xaos-innovation",
      title: "XAOS Innovation",
      company: "XAOS Innovation",
      description: "Media platform with advanced content management system",
      longDescription:
        "Built a comprehensive media platform with advanced content management capabilities. The project required scalable architecture and seamless content delivery.",
      technologies: ["PHP", "WordPress", "JavaScript", "SCSS", "GLSL"],
      category: "media",
      url: "https://xaosinnovation.com/",
      image: "/xaos-innovation.jpg",
      featured: true,
      year: "2023",
      challenges: [
        "Scalable content management",
        "Advanced media handling",
        "Performance optimization",
      ],
      solutions: [
        "Custom WordPress architecture",
        "Optimized media delivery",
        "Caching and performance strategies",
      ],
    },
    {
      id: "iris-inc",
      title: "IRIS Inc.",
      company: "IRIS Inc.",
      description:
        "Corporate website for IRIS Inc. built with PHP and WordPress, focusing on modern design and performance.",
      longDescription:
        "Developed a corporate website for IRIS Inc. using PHP, HTML, SCSS, and WordPress. The project emphasized a modern, professional look and high performance, similar to the ASAHI METALFINE site.",
      technologies: [
        "PHP",
        "SCSS",
        "JavaScript",
        "WordPress",
        "Docker",
        "Vite",
      ],
      category: "corporate",
      url: "https://www.iris.inc/",
      image: "/iris-inc.jpg",
      featured: true,
      year: "2024",
      challenges: [
        "Modern and professional design implementation",
        "Performance optimization",
        "Consistent branding with group companies",
      ],
      solutions: [
        "Adopted premium visual design and smooth animations",
        "Optimized build and deployment process",
        "Unified color scheme and typography for brand consistency",
      ],
    },
  ],
  ja: [
    {
      id: "asahi-metalfine",
      title: "ASAHI METALFINE",
      company: "ASAHI METALFINE Inc.",
      description:
        "貴金属事業のための高級感とスピード感を表現したコーポレートサイト",
      longDescription:
        "ASAHI METALFINE Inc.（大手海外企業ASAHI HD Inc.の子会社）のために、プレミアムなコーポレートサイトを制作しました。高級感とスピード感を伝えつつ、プロフェッショナルな信頼性も維持する必要がありました。",
      technologies: [
        "PHP",
        "SCSS",
        "JavaScript",
        "WordPress",
        "Docker",
        "Vite",
      ],
      category: "corporate",
      url: "https://www.asahimetalfine.com/",
      image: "/asahi-metalfine.jpg",
      featured: true,
      year: "2022",
      challenges: [
        "デザインで高級感とスピード感を表現すること",
        "新設子会社としての信頼性の確立",
        "親会社ブランドとの統一感の実現",
      ],
      solutions: [
        "滑らかなアニメーションを用いたプレミアムなビジュアルデザイン",
        "プロフェッショナルな配色とタイポグラフィの採用",
        "高速な読み込みによるシームレスなユーザー体験",
      ],
    },
    {
      id: "aniseka",
      title: "ANISEKA",
      company: "ANISEKA",
      description:
        "ユーザー体験を重視したクリエイティブなアニメーションプラットフォーム",
      longDescription:
        "ユーザーのエンゲージメントとインタラクティブな体験に焦点を当てたクリエイティブなアニメーションプラットフォームを開発しました。高度なアニメーション技術と滑らかなユーザーインタラクションが求められました。",
      technologies: ["JavaScript", "SCSS", "HTML"],
      category: "media",
      url: "https://www.aniseka.com/",
      image: "/aniseka.jpg",
      featured: true,
      year: "2023",
      challenges: [
        "複雑なアニメーションの実装",
        "アニメーションのパフォーマンス最適化",
        "クロスブラウザ対応",
      ],
      solutions: [
        "カスタムアニメーションライブラリの統合",
        "最適化されたローディング戦略の導入",
        "プログレッシブエンハンスメントのアプローチ",
      ],
    },
    {
      id: "xaos-innovation",
      title: "XAOS Innovation",
      company: "XAOS Innovation",
      description:
        "高度なコンテンツ管理システムを備えたメディアプラットフォーム",
      longDescription:
        "高度なコンテンツ管理機能を持つ包括的なメディアプラットフォームを構築しました。スケーラブルなアーキテクチャとシームレスなコンテンツ配信が求められました。",
      technologies: ["PHP", "WordPress", "JavaScript", "SCSS", "GLSL"],
      category: "media",
      url: "https://xaosinnovation.com/",
      image: "/xaos-innovation.jpg",
      featured: true,
      year: "2023",
      challenges: [
        "スケーラブルなコンテンツ管理の実現",
        "高度なメディア処理",
        "パフォーマンス最適化",
      ],
      solutions: [
        "カスタムWordPressアーキテクチャの構築",
        "最適化されたメディア配信",
        "キャッシュやパフォーマンス戦略の導入",
      ],
    },
    {
      id: "iris-inc",
      title: "IRIS Inc.",
      company: "IRIS Inc.",
      description:
        "PHPとWordPressで構築したIRIS Inc.のコーポレートサイト。モダンなデザインとパフォーマンスを重視。",
      longDescription:
        "IRIS Inc.のためにPHP、HTML、SCSS、WordPressを用いてコーポレートサイトを開発しました。ASAHI METALFINEと同様、モダンでプロフェッショナルな外観と高いパフォーマンスを追求しています。",
      technologies: [
        "PHP",
        "SCSS",
        "JavaScript",
        "WordPress",
        "Docker",
        "Vite",
      ],
      category: "corporate",
      url: "https://www.iris.inc/",
      image: "/iris-inc.jpg",
      featured: true,
      year: "2024",
      challenges: [
        "モダンかつプロフェッショナルなデザインの実現",
        "パフォーマンス最適化",
        "グループ企業とのブランド統一",
      ],
      solutions: [
        "プレミアムなビジュアルデザインと滑らかなアニメーションを採用",
        "最適化されたビルド・デプロイプロセスの導入",
        "ブランド統一のための配色・タイポグラフィの統一",
      ],
    },
  ],
};

export const allProjects: Record<"en" | "ja", Project[]> = {
  en: [
    ...featuredProjects.en,
    {
      id: "enjin-47",
      title: "ENJIN 47 Project",
      company: "ENJIN 47 Project",
      description: "Recruiting landing page for creative talent across Japan",
      longDescription:
        "Created a recruiting landing page for ENJIN 47 Project, a challenging initiative to recruit talented directors from all over Japan to work remotely and conquer 47 prefectures.",
      technologies: [
        "JavaScript",
        "SCSS",
        "PHP",
        "WordPress",
        "Webpack",
        "Pug",
      ],
      category: "landing",
      url: "https://recruit.ape-man.jp/47project/",
      image: "/enjin-47.jpg",
      featured: false,
      year: "2022",
      challenges: ["Creative talent recruitment", "Remote work positioning"],
      solutions: ["Engaging visual design", "Clear value proposition"],
    },
    {
      id: "citrus-brown-sugar",
      title: "Ashikita Citrus Brown Sugar",
      company: "Ashikita",
      description:
        "Landing page for Japanese specialty product with recipe integration",
      longDescription:
        "Developed a landing page for Citrus Brown Sugar, a Japanese local specialty product from Ashikita in Kumamoto Prefecture. The product became a great success and is currently out of stock.",
      technologies: ["JavaScript", "SCSS", "PHP", "WordPress", "Modal Systems"],
      category: "landing",
      url: "https://citrus-brown-sugar.com/",
      image: "/citrus-brown-sugar.jpg",
      featured: false,
      year: "2022",
      challenges: [
        "Product showcase",
        "Recipe integration",
        "Success handling",
      ],
      solutions: ["Modal recipe system", "Engaging product presentation"],
    },
    {
      id: "martec-recruit",
      title: "MARTEC Recruitment",
      company: "MARTEC Inc.",
      description:
        "Professional recruitment site for shipbuilding inspection company",
      longDescription:
        "Created a recruitment website for MARTEC Inc., a company engaged in inspection and supervision of new shipbuilding. The site emphasizes safety, labor-saving, and convenience.",
      technologies: [
        "JavaScript",
        "SCSS",
        "PHP",
        "WordPress",
        "Webpack",
        "Pug",
      ],
      category: "recruitment",
      url: "https://recruit.martec.co.jp/",
      image: "/martec-recruit.jpg",
      featured: false,
      year: "2022",
      challenges: ["Professional credibility", "Safety emphasis"],
      solutions: ["Minimal animation approach", "Trust-building design"],
    },
    {
      id: "caravan-recruit",
      title: "CARAVAN Recruitment",
      company: "CARAVAN Inc.",
      description:
        "Fun and engaging recruitment site for character goods manufacturer",
      longDescription:
        'Developed a recruitment website for CARAVAN Inc., a company involved in manufacturing character goods. Their mission "Fun for all Fan" was reflected through creative animations and glitch effects.',
      technologies: [
        "JavaScript",
        "SCSS",
        "PHP",
        "WordPress",
        "Webpack",
        "Pug",
      ],
      category: "recruitment",
      url: "https://recruit.caravan-inc.co.jp/",
      image: "/caravan-recruit.jpg",
      featured: false,
      year: "2022",
      challenges: ["Fun brand expression", "Character goods positioning"],
      solutions: ["Glitch animations", "Playful interaction design"],
    },
  ],
  ja: [
    ...featuredProjects.ja,
    {
      id: "enjin-47",
      title: "ENJIN 47プロジェクト",
      company: "ENJIN 47プロジェクト",
      description: "全国のクリエイティブ人材を集める採用ランディングページ",
      longDescription:
        "ENJIN 47プロジェクトのために、全国47都道府県の優秀なディレクターをリモートで採用し、各地で活躍してもらうことを目指した挑戦的な採用ランディングページを制作しました。",
      technologies: [
        "JavaScript",
        "SCSS",
        "PHP",
        "WordPress",
        "Webpack",
        "Pug",
      ],
      category: "landing",
      url: "https://recruit.ape-man.jp/47project/",
      image: "/enjin-47.jpg",
      featured: false,
      year: "2022",
      challenges: ["クリエイティブ人材の採用", "リモートワークの訴求"],
      solutions: ["魅力的なビジュアルデザイン", "明確なバリュープロポジション"],
    },
    {
      id: "citrus-brown-sugar",
      title: "芦北シトラス黒糖",
      company: "芦北町",
      description: "レシピ連携付きの特産品ランディングページ",
      longDescription:
        "熊本県芦北町の特産品「シトラス黒糖」のためのランディングページを開発しました。商品は大ヒットし、現在は品切れとなっています。",
      technologies: [
        "JavaScript",
        "SCSS",
        "PHP",
        "WordPress",
        "モーダルシステム",
      ],
      category: "landing",
      url: "https://citrus-brown-sugar.com/",
      image: "/citrus-brown-sugar.jpg",
      featured: false,
      year: "2022",
      challenges: ["商品の魅力的な見せ方", "レシピ連携", "ヒット商品の対応"],
      solutions: [
        "モーダルによるレシピ表示システム",
        "印象的な商品プレゼンテーション",
      ],
    },
    {
      id: "martec-recruit",
      title: "MARTEC 採用サイト",
      company: "MARTEC株式会社",
      description: "造船検査会社のためのプロフェッショナルな採用サイト",
      longDescription:
        "新造船の検査・監督を行うMARTEC株式会社のために、安心・省力化・利便性を重視した採用サイトを制作しました。",
      technologies: [
        "JavaScript",
        "SCSS",
        "PHP",
        "WordPress",
        "Webpack",
        "Pug",
      ],
      category: "recruitment",
      url: "https://recruit.martec.co.jp/",
      image: "/martec-recruit.jpg",
      featured: false,
      year: "2022",
      challenges: ["信頼性の訴求", "安全性の強調"],
      solutions: [
        "最小限のアニメーションによる落ち着いたデザイン",
        "信頼感を与えるUI",
      ],
    },
    {
      id: "caravan-recruit",
      title: "CARAVAN 採用サイト",
      company: "CARAVAN株式会社",
      description: "キャラクターグッズメーカーの楽しい採用サイト",
      longDescription:
        "キャラクターグッズを製造するCARAVAN株式会社のために、「Fun for all Fan」というミッションをクリエイティブなアニメーションやグリッチエフェクトで表現した採用サイトを開発しました。",
      technologies: [
        "JavaScript",
        "SCSS",
        "PHP",
        "WordPress",
        "Webpack",
        "Pug",
      ],
      category: "recruitment",
      url: "https://recruit.caravan-inc.co.jp/",
      image: "/caravan-recruit.jpg",
      featured: false,
      year: "2022",
      challenges: ["楽しいブランド表現", "キャラクターグッズの魅力訴求"],
      solutions: [
        "グリッチアニメーションの活用",
        "遊び心のあるインタラクションデザイン",
      ],
    },
  ],
};
