"use client";

import { Calendar, MapPin, ExternalLink } from "lucide-react";
import { experiences } from "@/data/experience";
import { useI18n } from "@/hooks/useI18n";

const Experience = () => {
  const { locale } = useI18n();
  const t = locale === "ja" ? experiences.ja : experiences.en;
  const isJapanese = locale === "ja";

  return (
    <section id="experience" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Professional{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Experience and Achievements
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {isJapanese
              ? "多様な役割と業界での成長、学び、卓越した結果を提供する旅。"
              : "A journey of growth, learning, and delivering exceptional results across diverse roles and industries."}
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-purple-500 hidden md:block"></div>
          <div className="space-y-12">
            {t.map((exp, index) => (
              <div key={exp.id} className="relative">
                <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full hidden md:block"></div>
                <div className="md:ml-16">
                  <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-gray-700 transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">
                          {exp.title}
                        </h3>
                        <p className="text-lg text-blue-400 mb-2">
                          {exp.company}
                        </p>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                          <div className="flex items-center gap-1">
                            <Calendar size={14} />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin size={14} />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2 mt-2 sm:mt-0">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            exp.current
                              ? "bg-green-500/20 text-green-400"
                              : "bg-gray-500/20 text-gray-400"
                          }`}
                        >
                          {exp.current ? "Current" : "Past"}
                        </span>
                        <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs font-medium">
                          {exp.type}
                        </span>
                      </div>
                    </div>
                    <ul className="space-y-2 text-gray-300">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
