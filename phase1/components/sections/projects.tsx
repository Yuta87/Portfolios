"use client";

import { ExternalLink, Eye, EyeOff, Globe, Lock } from "lucide-react";
import { featuredProjects } from "@/data/projects";
import { useI18n } from "@/hooks/useI18n";
import Image from "next/image";
import { useEffect, useState } from "react";

const Projects = () => {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  // 正しいパスワード（環境変数から取得）
  const correctPassword = process.env.NEXT_PUBLIC_PORTFOLIO_PASSWORD;

  useEffect(() => {
    // セッションストレージで認証状態を保持
    const authStatus = sessionStorage.getItem("portfolio_auth");
    if (authStatus === "authenticated") {
      setIsAuthenticated(true);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === correctPassword) {
      setIsAuthenticated(true);
      sessionStorage.setItem("portfolio_auth", "authenticated");
      setError("");
    } else {
      setError("パスワードが間違っています / Incorrect password");
      setPassword("");
    }
  };

  const { locale } = useI18n();
  const t = locale === "ja" ? featuredProjects.ja : featuredProjects.en;
  const isJapanese = locale === "ja";

  if (isAuthenticated) {
    return (
      <section id="projects" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Featured{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              {locale === "ja"
                ? "国際的なクライアント向けに構築されたプレミアムウェブサイトとアプリケーションのショーケース。"
                : "A showcase of premium websites and applications built for international clients."}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {t.map((project, index) => (
              <div
                key={project.id}
                className="group bg-gray-900 rounded-lg overflow-hidden border border-gray-800 hover:border-gray-700 transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-600/20 group-hover:from-blue-500/30 group-hover:to-purple-600/30 transition-all duration-300"></div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-black/60 text-white text-sm font-medium rounded-full backdrop-blur-sm">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-white">
                      {project.title}
                    </h3>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-300">
                    <Globe size={16} />
                    <span className="text-sm font-medium">{project.url}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* <div className="mt-16 text-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="p-6 bg-gray-900 rounded-lg border border-gray-800">
                {isJapanese ? (
                  <>
                    <div className="text-2xl font-bold text-white mb-2">18+</div>
                    <div className="text-gray-400">納品済みウェブサイト</div>
                  </>
                ) : (
                  <>
                    <div className="text-2xl font-bold text-white mb-2">18+</div>
                    <div className="text-gray-400">Websites Delivered</div>
                  </>
                )}
              </div>
              <div className="p-6 bg-gray-900 rounded-lg border border-gray-800">
                {isJapanese ? (
                  <>
                    <div className="text-2xl font-bold text-white mb-2">100%</div>
                    <div className="text-gray-400">クライアント満足度</div>
                  </>
                ) : (
                  <>
                    <div className="text-2xl font-bold text-white mb-2">100%</div>
                    <div className="text-gray-400">Client Satisfaction</div>
                  </>
                )}
              </div>
              <div className="p-6 bg-gray-900 rounded-lg border border-gray-800">
                {isJapanese ? (
                  <>
                    <div className="text-2xl font-bold text-white mb-2">3+</div>
                    <div className="text-gray-400">年の経験</div>
                  </>
                ) : (
                  <>
                    <div className="text-2xl font-bold text-white mb-2">3+</div>
                    <div className="text-gray-400">Years Experience</div>
                  </>
                )}
              </div>
              <div className="p-6 bg-gray-900 rounded-lg border border-gray-800">
                {isJapanese ? (
                  <>
                    <div className="text-2xl font-bold text-white mb-2">5+</div>
                    <div className="text-gray-400">使用技術</div>
                  </>
                ) : (
                  <>
                    <div className="text-2xl font-bold text-white mb-2">5+</div>
                    <div className="text-gray-400">Technologies</div>
                  </>
                )}
              </div>
            </div>
          </div> */}
        </div>
      </section>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center">
      <div className="max-w-md w-full mx-4">
        <div className="bg-gray-800/50 backdrop-blur-lg border border-gray-700 rounded-lg p-8">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-blue-500/20 rounded-full">
                <Lock className="w-8 h-8 text-blue-400" />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">
              {isJapanese ? "ポートフォリオアクセス" : "Portfolio Access"}
            </h2>
            <p className="text-gray-400">
              {isJapanese
                ? "このポートフォリオはプライバシー保護のため、パスワードが必要です。"
                : "This portfolio is password protected for privacy reasons."}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder={
                    isJapanese ? "パスワードを入力..." : "Enter password..."
                  }
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {error && (
              <div className="p-3 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400 text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="w-full px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              {isJapanese ? "ポートフォリオにアクセス" : "Access Portfolio"}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-xs text-gray-500">
              {isJapanese
                ? "アクセスに関するお問い合わせは、以下のメールアドレスまでご連絡ください: "
                : "For access inquiries, please contact the email below: "}
              <br />
              <a
                className="inline text-blue-500 hover:text-blue-700 hover:underline transition-colors duration-200"
                href="mailto:nszk.yuta@gmail.com"
              >
                nszk.yuta@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
