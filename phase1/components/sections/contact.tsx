"use client";

import { useI18n } from "@/hooks/useI18n";
import { intersectionAnimation } from "@/lib/animations/fadeInUp";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  MessageSquare,
} from "lucide-react";
import { title } from "node:process";
import { useEffect } from "react";

const Contact = () => {
  const { locale } = useI18n();
  const isJapanese = locale === "ja";

  const contactMethods = isJapanese
    ? [
        {
          icon: <Mail className="w-6 h-6 text-blue-400" />,
          title: "Email",
          value: "nszk.yuta@gmail.com",
          href: "mailto:nszk.yuta@gmail.com",
          description: "プロジェクトの詳細なディスカッションに最適",
        },
        {
          icon: <MessageSquare className="w-6 h-6 text-green-400" />,
          title: "WhatsApp",
          value: "+31 617766418",
          href: "https://wa.me/31617766418",
          description: "迅速な質問と即時の連絡に最適",
        },
        {
          icon: <Linkedin className="w-6 h-6 text-blue-500" />,
          title: "LinkedIn",
          value: "yuta-nishizaki",
          href: "https://nl.linkedin.com/in/yuta-nishizaki-1310021a2",
          description: "プロフェッショナルなネットワーキングと機会",
        },
        {
          icon: <Github className="w-6 h-6 text-gray-400" />,
          title: "GitHub",
          value: "View Portfolio",
          href: "https://github.com/yuta-nishizaki",
          description: "コードサンプルとプロジェクトリポジトリ",
        },
      ]
    : [
        {
          icon: <Mail className="w-6 h-6 text-blue-400" />,
          title: "Email",
          value: "nszk.yuta@gmail.com",
          href: "mailto:nszk.yuta@gmail.com",
          description: "Best for detailed project discussions",
        },
        {
          icon: <MessageSquare className="w-6 h-6 text-green-400" />,
          title: "WhatsApp",
          value: "+31 617766418",
          href: "https://wa.me/31617766418",
          description: "Quick questions and immediate contact",
        },
        {
          icon: <Linkedin className="w-6 h-6 text-blue-500" />,
          title: "LinkedIn",
          value: "yuta-nishizaki",
          href: "https://nl.linkedin.com/in/yuta-nishizaki-1310021a2",
          description: "Professional networking and opportunities",
        },
        {
          icon: <Github className="w-6 h-6 text-gray-400" />,
          title: "GitHub",
          value: "View Portfolio",
          href: "https://github.com/yuta-nishizaki",
          description: "Code samples and project repositories",
        },
      ];

  const availability = isJapanese
    ? [
        "WordPress開発プロジェクト",
        "React/Next.jsアプリケーション（フロントエンド）",
        "ウェブサイトのメンテナンスとサポート",
        "技術コンサルティング",
        "リモートコラボレーション",
      ]
    : [
        "WordPress Development Projects",
        "React/Next.js Applications (Frontend)",
        "Website Maintenance & Support",
        "Technical Consulting",
        "Remote Collaboration",
      ];
  
  useEffect(() => intersectionAnimation(), []);
  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 js_fadeInUp">
            Let&#39;s Work{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Together
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto js_fadeInUp">
            {isJapanese ? (
              <>
                あなたのアイデアやご要望を形にしませんか？
                <br />
                新しいプロジェクトやコラボレーションのご相談をお待ちしています。
              </>
            ) : (
              <>
                Ready to bring your vision to life?
                <br />
                I&#39;m available for new projects and collaborations.
              </>
            )}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-8">
              {isJapanese ? "お問い合わせ" : "Get In Touch"}
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="js_fadeInUp group bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-3 bg-gray-800 rounded-lg group-hover:bg-gray-700 transition-colors duration-300">
                      {method.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-white mb-1">
                        {method.title}
                      </h4>
                      <p className="text-gray-300 mb-2">{method.value}</p>
                      <p className="text-sm text-gray-400">
                        {method.description}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-8 js_fadeInUp">
              {isJapanese
                ? "現在の対応可能なプロジェクト"
                : "Currently Available For"}
            </h3>
            <div className="space-y-4 mb-8">
              {availability.map((item, index) => (
                <div key={index} className="flex items-start gap-3 js_fadeInUp">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 js_fadeInUp">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span className="text-lg font-semibold text-white">
                  {isJapanese ? "所在地" : "Location"}
                </span>
              </div>
              <p className="text-gray-300 mb-2">
                {isJapanese ? "オランダ、ハーグ" : "The Hague, Netherlands"}
              </p>
              <p className="text-sm text-gray-400">
                {isJapanese
                  ? "中央ヨーロッパ時間 (CET)"
                  : "Central European Time (CET)"}
              </p>
              <p className="text-sm text-gray-400 mt-2">
                {isJapanese
                  ? "リモートワークでの対応"
                  : "Available for remote work"}
              </p>
            </div>

            <div className="mt-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg js_fadeInUp">
              <p className="text-green-400 font-medium">
                {isJapanese ? "⚡ 迅速な対応" : "⚡ Quick Response"}
              </p>
              <p className="text-sm text-gray-400 mt-1">
                {isJapanese
                  ? "通常、24時間以内に返信します"
                  : "I usually respond within 24 hours"}
              </p>
            </div>
          </div>
        </div>
        <div className="mt-16 text-center js_fadeInUp">
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-white mb-4">
              {isJapanese
                ? "プロジェクトを始めませんか？"
                : "Ready to Start Your Project?"}
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              {isJapanese ? (
                <>
                  プレミアムなWordPressサイトやReactアプリ、技術コンサルティングなど、
                  <br />
                  ご要望に合わせて高品質なサービスをご提供します。
                  <br />
                  まずはお気軽にご相談ください。
                </>
              ) : (
                <>
                  Whether you need a premium WordPress site, a React
                  application, or technical consulting, I&#39;m here to help
                  bring your vision to life with exceptional quality and
                  attention to detail.
                </>
              )}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:nszk.yuta@gmail.com"
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                {isJapanese ? "メールで相談" : "Send Email"}
              </a>
              <a
                href="https://wa.me/31617766418"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border border-gray-600 text-gray-300 rounded-lg font-medium hover:bg-gray-800 hover:text-white transition-all duration-300"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
