"use client";

import { Code, Database, Wrench, Palette, Globe, Zap } from "lucide-react";
import { skillCategories } from "@/data/skills";
import { useI18n } from "@/hooks/useI18n";
import { useEffect } from "react";
import { intersectionAnimation } from "@/lib/animations/fadeInUp";

const Skills = () => {
  const { locale } = useI18n();
  const t = locale === "ja" ? skillCategories.ja : skillCategories.en;
  const isJapanese = locale === "ja";

  const iconMap: Record<string, JSX.Element> = {
    "Frontend Development": <Code className="w-6 h-6 text-blue-400" />,
    "Backend & CMS": <Database className="w-6 h-6 text-purple-400" />,
    "Tools & Workflow": <Wrench className="w-6 h-6 text-green-400" />,
    "Design & Media": <Palette className="w-6 h-6 text-yellow-400" />,
  };

  const specialties = isJapanese
    ? [
        {
          icon: <Globe className="w-8 h-8 text-blue-400" />,
          title: "WordPressエキスパート",
          description:
            "18以上のプレミアムウェブサイトをカスタムテーマと高度な機能で提供",
        },
        {
          icon: <Zap className="w-8 h-8 text-purple-400" />,
          title: "パフォーマンス最適化",
          description:
            "高速読み込み、SEO最適化された優れたユーザーエクスペリエンスのウェブサイトを専門としています",
        },
        {
          icon: <Code className="w-8 h-8 text-green-400" />,
          title: "モダンフレームワーク",
          description:
            "React、Next.js、モダンJavaScriptエコシステムに精通しています",
        },
      ]
    : [
        {
          icon: <Globe className="w-8 h-8 text-blue-400" />,
          title: "WordPress Expert",
          description:
            "18+ premium websites delivered with custom themes and advanced functionality",
        },
        {
          icon: <Zap className="w-8 h-8 text-purple-400" />,
          title: "Performance Optimization",
          description:
            "Specializing in fast-loading, SEO-optimized websites with excellent user experience",
        },
        {
          icon: <Code className="w-8 h-8 text-green-400" />,
          title: "Modern Frameworks",
          description:
            "Experienced with React, Next.js, and modern JavaScript ecosystem",
        },
      ];

  useEffect(() => intersectionAnimation(), []);
  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 js_fadeInUp">
            Technical{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto js_fadeInUp">
            {isJapanese
              ? "最新のウェブ技術と開発プラクティスにおける包括的な専門知識。"
              : "Comprehensive expertise across modern web technologies and development practices."}
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {t.map((category, index) => (
            <div
              key={index}
              className="js_fadeInUp bg-gray-800/50 p-6 rounded-lg border border-gray-700"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-gray-800 rounded-lg">
                  {iconMap[category.category]}
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {category.category}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-sm text-gray-400">
                        {skill.percentage}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {specialties.map((specialty, index) => (
            <div
              key={index}
              className="js_fadeInUp text-center p-6 bg-gray-800/30 rounded-lg border border-gray-700 hover:border-gray-600 transition-all duration-300"
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-gray-800 rounded-full">
                  {specialty.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {specialty.title}
              </h3>
              <p className="text-gray-400">{specialty.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
