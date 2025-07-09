"use client";

import { ExternalLink, Globe } from "lucide-react";
import { featuredProjects } from "@/data/projects";
import { useI18n } from "@/hooks/useI18n";
import Image from "next/image";

const Projects = () => {
  const { locale } = useI18n();
  const t = locale === "ja" ? featuredProjects.ja : featuredProjects.en;
  const isJapanese = locale === "ja";

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
};

export default Projects;
