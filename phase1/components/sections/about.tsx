"use client";

import { Globe, Users, Code, Briefcase } from "lucide-react";
import { personalInfo } from "@/data/personal";
import { useI18n } from "@/hooks/useI18n";

const About = () => {
  const { locale } = useI18n();
  const t = locale === "ja" ? personalInfo.ja : personalInfo.en;
  const isJapanese = locale === "ja";

  const highlights = isJapanese
    ? [
        {
          icon: <Globe className="w-6 h-6 text-blue-400" />,
          title: "国際経験",
          description:
            "日本、オランダ、グローバル市場での多様なチームとクライアントとの協働。",
        },
        {
          icon: <Code className="w-6 h-6 text-purple-400" />,
          title: "技術的卓越性",
          description:
            "WordPressからNext.js、Reactまでの最新のウェブ技術に精通。",
        },
        {
          icon: <Users className="w-6 h-6 text-green-400" />,
          title: "クライアント重視",
          description:
            "国際クライアント向けに18以上のプレミアムウェブサイトを提供し、卓越した結果を達成。",
        },
        {
          icon: <Briefcase className="w-6 h-6 text-yellow-400" />,
          title: "プロフェッショナルな成長",
          description:
            "インターンからシニア開発者へと進化し、成功の実績を持つ。",
        },
      ]
    : [
        {
          icon: <Globe className="w-6 h-6 text-blue-400" />,
          title: "International Experience",
          description:
            "Working across Japan, Netherlands, and global markets with diverse teams and clients.",
        },
        {
          icon: <Code className="w-6 h-6 text-purple-400" />,
          title: "Technical Excellence",
          description:
            "Expertise in modern web technologies from WordPress to Next.js and React.",
        },
        {
          icon: <Users className="w-6 h-6 text-green-400" />,
          title: "Client-Focused",
          description:
            "Delivered 18+ premium websites for international clients with exceptional results.",
        },
        {
          icon: <Briefcase className="w-6 h-6 text-yellow-400" />,
          title: "Professional Growth",
          description:
            "Evolved from intern to senior developer with proven track record of success.",
        },
      ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            About{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">{t.summary}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">
              {isJapanese ? "経歴" : "My Journey"}
            </h3>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                {isJapanese
                  ? "オランダ・ハーグを拠点に、国際的な視点を持つウェブ開発者として活動しています。インターンからシニア開発者へと成長し、多様なチームと協力して、世界中のクライアントにプレミアムソリューションを提供してきました。"
                  : "As a web developer based in The Hague, Netherlands, I bring an international perspective to my work. My journey from intern to senior developer has been shaped by collaborating with diverse teams and delivering premium solutions for clients worldwide."}
              </p>
              <p>
                {isJapanese
                  ? "3年以上の経験を持ち、WordPress開発を専門としながら、ReactやNext.jsなどの最新のフレームワークにも取り組んでいます。私のバックグラウンドは、規律、チームワーク、プレッシャー下でのパフォーマンス能力を育んできました。これらの特性は、開発の卓越性に直接結びついています。"
                  : `
                    With 3+ years of experience, I&apos;ve specialized in WordPress
                    development while expanding into modern frameworks like React
                    and Next.js. My background has instilled discipline, teamwork,
                    and the ability to perform under pressure—qualities that
                    translate directly to development excellence.
                  `}
              </p>
              <p>
                {isJapanese
                  ? `
                私は、機能的なウェブサイトだけでなく、結果を生む魅力的なデジタル体験の創造に情熱を注いでいます。コーポレートラグジュアリーサイトやクリエイティブプラットフォームなど、各プロジェクトに細心の注意を払い、期待を超えることを目指しています。
                `
                  : `  
                I&apos;m passionate about creating not just functional websites,
                but engaging digital experiences that drive results. Whether
                it&apos;s a corporate luxury site or a creative platform, I
                approach each project with meticulous attention to detail and a
                commitment to exceeding expectations.
                `}
              </p>
            </div>
            <div className="mt-8">
              <h4 className="text-xl font-semibold text-white mb-4">
                {isJapanese ? "言語" : "Languages"}
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {t.languages.map((lang, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center p-3 bg-gray-800 rounded-lg"
                  >
                    <span className="text-gray-300">{lang.name}</span>
                    <span className="text-sm px-2 py-1 bg-blue-500/20 text-blue-400 rounded">
                      {lang.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">
              {isJapanese ? "私の強み" : "What Sets Me Apart"}
            </h3>
            <div className="space-y-6">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-gray-600 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-2 bg-gray-800 rounded-lg">
                      {highlight.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">
                        {highlight.title}
                      </h4>
                      <p className="text-gray-400">{highlight.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
