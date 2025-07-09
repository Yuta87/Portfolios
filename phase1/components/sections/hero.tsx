"use client";

import { useState, useEffect } from "react";
import { ChevronDown, MapPin, Mail, Phone } from "lucide-react";
import { useI18n } from "@/hooks/useI18n";

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const { locale } = useI18n();
  const isJapanese = locale === "ja";
  const roles = isJapanese
    ? [
        "フロントエンド開発者",
        "WordPress開発者",
        "システムエンジニア",
        "クリエイティブ開発者",
      ]
    : [
        "Frontend Developer",
        "WordPress Developer",
        "System Engineer",
        "Creative Developer",
      ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] [background-size:20px_20px]"></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Yuta Nishizaki / 西崎雄太
            </span>
          </h1>

          <div className="h-16 flex items-center justify-center">
            <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 font-light">
              <span className="inline-block min-w-[300px] text-left">
                {roles[currentRole]}
              </span>
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 text-gray-400">
          <div className="flex items-center gap-2">
            <MapPin size={16} />
            <span>
              {isJapanese ? "オランダ・ハーグ" : "The Hague, Netherlands"}
            </span>
          </div>
          <div className="hidden sm:block w-1 h-1 bg-gray-400 rounded-full"></div>
          <div className="flex items-center gap-2">
            <span>{isJapanese ? "3年以上の経験" : "3+ Years Experience"}</span>
          </div>
          <div className="hidden sm:block w-1 h-1 bg-gray-400 rounded-full"></div>
          <div className="flex items-center gap-2">
            <span>
              {isJapanese
                ? "18以上のウェブサイトを提供"
                : "18+ Websites Delivered"}
            </span>
          </div>
        </div>

        <p className="text-lg sm:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          {isJapanese
            ? "プレミアムウェブ体験をWordPress、React、Next.jsで構築。国際的な視点と技術的な卓越性をすべてのプロジェクトに提供します。"
            : "Crafting premium web experiences with expertise in WordPress, React, and Next.js. Bringing international perspective and technical excellence to every project."}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={scrollToAbout}
            className="px-8 py-3 rounded-lg font-medium text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
          >
            Learn More About Me
          </button>
          <a
            href="mailto:nszk.yuta@gmail.com"
            className="px-8 py-3 rounded-lg font-medium border border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white transition-all duration-300"
          >
            {isJapanese ? "お問い合わせ" : "Get In Touch"}
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <button
          onClick={scrollToAbout}
          className="text-gray-400 hover:text-white transition-colors duration-300"
        >
          <ChevronDown size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
