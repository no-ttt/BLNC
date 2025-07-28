import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Shield, Users, Award, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const features = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: '個人化營養配方',
      description: '根據您的身體檢測報告，量身打造專屬的營養補充方案',
      color: 'from-pink-400 to-rose-400'
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: '科學檢測分析',
      description: '運用先進的檢測技術，全面了解您的健康狀況',
      color: 'from-blue-400 to-cyan-400'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: '專業團隊服務',
      description: '由營養師與醫療專家組成的專業團隊為您服務',
      color: 'from-green-400 to-emerald-400'
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: '品質保證',
      description: '嚴選高品質原料，通過多項國際認證標準',
      color: 'from-purple-400 to-violet-400'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-pink-400 to-purple-600 bg-clip-text text-transparent">
                BLNC
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              為每個人量身打造的營養補充品解決方案<br />
              讓健康成為您生活中最美好的習慣
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/nutrition-center"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-pink-400 to-purple-500 text-white font-semibold rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                開始您的健康之旅
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center px-8 py-4 bg-white text-gray-700 font-semibold rounded-full border-2 border-pink-200 hover:bg-pink-50 transition-all duration-200"
              >
                了解更多
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">為什麼選擇 BLNC？</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              我們結合科學檢測與個人化服務，為您提供最適合的營養補充方案
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-8 rounded-2xl bg-gradient-to-br from-white to-gray-50 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${feature.color} text-white mb-6`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              準備開始您的健康旅程了嗎？
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              立即體驗我們的精準營養中心，獲得專屬於您的健康建議
            </p>
            <Link
              to="/nutrition-center"
              className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-pink-400 to-purple-500 text-white font-semibold rounded-full text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              立即開始檢測
              <ArrowRight className="ml-3 h-6 w-6" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;