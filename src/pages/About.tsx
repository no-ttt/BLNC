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
        <div className="absolute inset-0 bg-gradient-to-br from-primary-100 via-accent-50 to-secondary-100">
          {/* Floating Product Images */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              initial={{ opacity: 0, y: 20, rotate: -10 }}
              animate={{ opacity: 0.8, y: 0, rotate: -5 }}
              transition={{ duration: 2, delay: 0.5 }}
              className="absolute top-20 left-10 w-32 h-32 md:w-48 md:h-48"
            >
              <img
                src="https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="海洋鎂"
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: -20, rotate: 10 }}
              animate={{ opacity: 0.8, y: 0, rotate: 5 }}
              transition={{ duration: 2, delay: 0.8 }}
              className="absolute top-32 right-16 w-28 h-28 md:w-40 md:h-40"
            >
              <img
                src="https://images.pexels.com/photos/3683056/pexels-photo-3683056.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="海洋鈣"
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -30, rotate: -15 }}
              animate={{ opacity: 0.7, x: 0, rotate: -8 }}
              transition={{ duration: 2, delay: 1.1 }}
              className="absolute bottom-32 left-20 w-24 h-24 md:w-36 md:h-36"
            >
              <img
                src="https://images.pexels.com/photos/3683089/pexels-photo-3683089.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="綜合維生素"
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30, rotate: 12 }}
              animate={{ opacity: 0.7, x: 0, rotate: 8 }}
              transition={{ duration: 2, delay: 1.4 }}
              className="absolute bottom-20 right-12 w-30 h-30 md:w-44 md:h-44"
            >
              <img
                src="https://images.pexels.com/photos/3683098/pexels-photo-3683098.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="藻油膠囊"
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30, rotate: -8 }}
              animate={{ opacity: 0.6, y: 0, rotate: -3 }}
              transition={{ duration: 2, delay: 1.7 }}
              className="absolute top-1/2 left-1/4 w-20 h-20 md:w-32 md:h-32"
            >
              <img
                src="https://images.pexels.com/photos/3683051/pexels-photo-3683051.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="UC-II膠囊"
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-primary-500 to-accent-600 bg-clip-text text-transparent">
                BLNC
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              為每個人量身打造的營養補充品解決方案<br />
              讓健康成為您生活中最美好的習慣
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/nutrition-center"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                開始您的健康之旅
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center px-8 py-4 bg-white text-gray-700 font-semibold rounded-full border-2 border-primary-200 hover:bg-primary-50 transition-all duration-200"
              >
                了解更多
              </Link>
            </motion.div>
            
            {/* Product Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
            >
              <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg">
                <div className="text-2xl font-bold bg-gradient-to-r from-secondary-500 to-secondary-400 bg-clip-text text-transparent mb-2">
                  1000+
                </div>
                <div className="text-sm text-gray-600">滿意客戶</div>
              </div>
              <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg">
                <div className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent mb-2">
                  98%
                </div>
                <div className="text-sm text-gray-600">好評率</div>
              </div>
              <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg">
                <div className="text-2xl font-bold bg-gradient-to-r from-accent-500 to-accent-600 bg-clip-text text-transparent mb-2">
                  50+
                </div>
                <div className="text-sm text-gray-600">專業配方</div>
              </div>
              <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg">
                <div className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent mb-2">
                  24/7
                </div>
                <div className="text-sm text-gray-600">專業服務</div>
              </div>
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
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${getFeatureColor(index)} text-white mb-6`}>
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
      <section className="py-20 bg-gradient-to-r from-primary-50 to-accent-50">
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
              className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold rounded-full text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              立即開始檢測
              <ArrowRight className="ml-3 h-6 w-6" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Product Showcase Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">精選保健產品</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              根據科學檢測結果，為您推薦最適合的營養補充品
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 海洋鎂 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="海洋鎂"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-gradient-to-r from-secondary-400 to-secondary-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  熱銷
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">海洋鎂</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  來自深海的天然鎂離子，有助於維持正常的肌肉與神經功能，改善睡眠品質，舒緩壓力與疲勞。
                </p>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-2xl font-bold bg-gradient-to-r from-secondary-400 to-secondary-500 bg-clip-text text-transparent">
                    NT$ 1,280
                  </div>
                  <div className="text-sm text-gray-500">60粒/瓶</div>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-secondary-400 rounded-full mr-2"></div>
                    改善睡眠品質
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-secondary-400 rounded-full mr-2"></div>
                    舒緩肌肉緊張
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-secondary-400 rounded-full mr-2"></div>
                    維持神經健康
                  </div>
                </div>
                <button className="w-full px-4 py-3 bg-gradient-to-r from-secondary-400 to-secondary-500 text-white font-semibold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                  <Link to="/product/ocean-magnesium" className="block">
                    了解更多
                  </Link>
                </button>
              </div>
            </motion.div>

            {/* 海洋鈣 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3683056/pexels-photo-3683056.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="海洋鈣"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-gradient-to-r from-primary-400 to-primary-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  推薦
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">海洋鈣</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  萃取自純淨海洋的天然鈣質，搭配維生素D3，提升鈣質吸收率，強化骨骼與牙齒健康。
                </p>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-primary-500 bg-clip-text text-transparent">
                    NT$ 1,480
                  </div>
                  <div className="text-sm text-gray-500">90粒/瓶</div>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-primary-400 rounded-full mr-2"></div>
                    強化骨骼密度
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-primary-400 rounded-full mr-2"></div>
                    促進鈣質吸收
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-primary-400 rounded-full mr-2"></div>
                    維護牙齒健康
                  </div>
                </div>
                <button className="w-full px-4 py-3 bg-gradient-to-r from-primary-400 to-primary-500 text-white font-semibold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                  了解更多
                </button>
              </div>
            </motion.div>

            {/* 天然綜合維生素 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3683089/pexels-photo-3683089.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="天然綜合維生素"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-gradient-to-r from-accent-400 to-accent-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  全方位
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">天然綜合維生素</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  精選多種天然維生素與礦物質，全方位補充日常所需營養素，提升整體健康與活力。
                </p>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-2xl font-bold bg-gradient-to-r from-accent-400 to-accent-500 bg-clip-text text-transparent">
                    NT$ 1,680
                  </div>
                  <div className="text-sm text-gray-500">120粒/瓶</div>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-accent-400 rounded-full mr-2"></div>
                    全方位營養補充
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-accent-400 rounded-full mr-2"></div>
                    提升免疫力
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-accent-400 rounded-full mr-2"></div>
                    增強體力活力
                  </div>
                </div>
                <button className="w-full px-4 py-3 bg-gradient-to-r from-accent-400 to-accent-500 text-white font-semibold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                  了解更多
                </button>
              </div>
            </motion.div>

            {/* 藻油膠囊 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3683098/pexels-photo-3683098.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="藻油膠囊"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-gradient-to-r from-secondary-500 to-secondary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  植物性
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">藻油膠囊</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  植物性Omega-3來源，富含DHA與EPA，支持心血管健康，促進大腦功能與視力保健。
                </p>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-2xl font-bold bg-gradient-to-r from-secondary-500 to-secondary-600 bg-clip-text text-transparent">
                    NT$ 1,880
                  </div>
                  <div className="text-sm text-gray-500">60粒/瓶</div>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-secondary-500 rounded-full mr-2"></div>
                    支持心血管健康
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-secondary-500 rounded-full mr-2"></div>
                    促進大腦功能
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-secondary-500 rounded-full mr-2"></div>
                    維護視力健康
                  </div>
                </div>
                <button className="w-full px-4 py-3 bg-gradient-to-r from-secondary-500 to-secondary-600 text-white font-semibold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                  了解更多
                </button>
              </div>
            </motion.div>

            {/* UC-II 膠囊 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3683051/pexels-photo-3683051.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="UC-II 膠囊"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-gradient-to-r from-primary-600 to-accent-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  專利
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">UC-II 膠囊</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  專利非變性二型膠原蛋白，有效維護關節健康，改善關節靈活度，適合關節保養需求者。
                </p>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                    NT$ 2,280
                  </div>
                  <div className="text-sm text-gray-500">30粒/瓶</div>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mr-2"></div>
                    維護關節健康
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mr-2"></div>
                    改善關節靈活度
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mr-2"></div>
                    專利成分保證
                  </div>
                </div>
                <button className="w-full px-4 py-3 bg-gradient-to-r from-primary-600 to-accent-600 text-white font-semibold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                  了解更多
                </button>
              </div>
            </motion.div>

            {/* 個人化營養配方 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl shadow-lg border-2 border-primary-200 overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3683040/pexels-photo-3683040.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="個人化營養配方"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  客製化
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">個人化營養配方</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  根據您的檢測報告量身打造的專屬營養配方，精準補充您所需的營養素，達到最佳健康狀態。
                </p>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
                    NT$ 3,280
                  </div>
                  <div className="text-sm text-gray-500">月配方案</div>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-primary-400 rounded-full mr-2"></div>
                    專屬檢測報告
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-primary-400 rounded-full mr-2"></div>
                    客製化配方
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-primary-400 rounded-full mr-2"></div>
                    專業營養師追蹤
                  </div>
                </div>
                <Link
                  to="/nutrition-center"
                  className="block w-full px-4 py-3 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-200 text-center"
                >
                  立即檢測
                </Link>
              </div>
            </motion.div>
          </div>

          {/* View All Products Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mt-12"
          >
            <button className="inline-flex items-center px-8 py-4 bg-white text-gray-700 font-semibold rounded-full border-2 border-primary-200 hover:bg-primary-50 hover:border-primary-300 transition-all duration-200">
              查看所有產品
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

// Helper function for feature colors
const getFeatureColor = (index: number) => {
  const colors = [
    'from-primary-400 to-accent-400',
    'from-secondary-400 to-secondary-500',
    'from-primary-500 to-primary-600',
    'from-accent-400 to-accent-500'
  ];
  return colors[index] || colors[0];
};

export default Home;