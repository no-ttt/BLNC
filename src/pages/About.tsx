import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Heart, Target } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: '以人為本',
      description: '我們相信每個人的健康需求都是獨特的，因此提供個人化的營養解決方案。',
      color: 'from-pink-400 to-rose-400'
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: '科學專業',
      description: '基於最新的營養科學研究，確保每項建議都有堅實的科學基礎。',
      color: 'from-blue-400 to-cyan-400'
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: '精準服務',
      description: '透過精密的檢測技術，為您提供最精準的健康評估與建議。',
      color: 'from-green-400 to-emerald-400'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: '長期陪伴',
      description: '我們不只是提供產品，更是您健康路上的長期夥伴。',
      color: 'from-purple-400 to-violet-400'
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold bg-gradient-to-r from-pink-400 to-purple-600 bg-clip-text text-transparent mb-6">
            關於 BLNC
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            BLNC 致力於為每個人提供最適合的營養補充品，讓健康成為生活中最自然的一部分
          </p>
        </motion.div>

        {/* Story Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <div className="bg-white rounded-3xl p-12 shadow-xl border border-pink-100">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">我們的故事</h2>
            <div className="prose prose-lg mx-auto text-gray-600 leading-relaxed">
              <p className="mb-6">
                BLNC 的創立源於一個簡單而深刻的信念：每個人的身體都是獨一無二的，因此營養需求也應該是個人化的。我們的創辦團隊由營養學專家、醫療專業人員和科技工程師組成，致力於將最新的科學研究轉化為實用的健康解決方案。
              </p>
              <p className="mb-6">
                透過先進的檢測技術和深度的數據分析，我們能夠精確了解每個人的營養狀況，並據此調配最適合的補充品組合。我們相信，真正的健康不是標準化的配方，而是根據個人需求量身打造的解決方案。
              </p>
              <p>
                在 BLNC，我們不只是營養品的提供者，更是您健康旅程中的專業夥伴。我們持續關注您的健康變化，適時調整建議，確保您始終獲得最佳的營養支持。
              </p>
            </div>
          </div>
        </motion.section>

        {/* Values Section */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">我們的核心價值</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              這些價值觀指引著我們的每一個決策，確保我們始終為客戶提供最好的服務
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="p-8 rounded-2xl bg-gradient-to-br from-white to-gray-50 shadow-lg border border-gray-100"
              >
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${value.color} text-white mb-6`}>
                  {value.icon}
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Mission Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center bg-gradient-to-r from-pink-50 to-purple-50 rounded-3xl p-12"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-6">我們的使命</h2>
          <p className="text-2xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
            讓每個人都能享受到科學化、個人化的營養補充服務，<br />
            在忙碌的現代生活中，輕鬆維持最佳的健康狀態。
          </p>
        </motion.section>
      </div>
    </div>
  );
};

export default About;