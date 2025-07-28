import React from 'react';
import { motion } from 'framer-motion';
import { Clock, User, Tag, ArrowRight } from 'lucide-react';

const HealthColumn = () => {
  const articles = [
    {
      id: 1,
      title: '維生素D缺乏：現代人的隱形健康危機',
      excerpt: '研究顯示，超過80%的台灣人都有維生素D不足的問題。了解維生素D對免疫系統、骨骼健康的重要性，以及如何有效補充。',
      category: '營養知識',
      author: '林營養師',
      readTime: '5 分鐘',
      date: '2024-12-15',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['維生素D', '免疫力', '骨骼健康']
    },
    {
      id: 2,
      title: '壓力與營養：如何透過飲食調節身心平衡',
      excerpt: '長期壓力會消耗身體的營養素，特別是B群維生素和鎂。學習如何透過正確的營養補充來對抗壓力，維持身心健康。',
      category: '壓力管理',
      author: '陳醫師',
      readTime: '7 分鐘',
      date: '2024-12-12',
      image: 'https://images.pexels.com/photos/1153369/pexels-photo-1153369.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['壓力管理', 'B群維生素', '鎂']
    },
    {
      id: 3,
      title: '腸道健康：第二個大腦的營養密碼',
      excerpt: '腸道健康直接影響免疫力、情緒和整體健康。探索益生菌、膳食纖維等營養素如何維護腸道微生態平衡。',
      category: '腸道健康',
      author: '王營養師',
      readTime: '6 分鐘',
      date: '2024-12-10',
      image: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['腸道健康', '益生菌', '膳食纖維']
    },
    {
      id: 4,
      title: '抗氧化劑的力量：延緩老化的營養科學',
      excerpt: '自由基是導致老化和疾病的主要原因之一。了解各種抗氧化劑的作用機制，以及如何透過飲食和補充品來增強抗氧化能力。',
      category: '抗老化',
      author: '張醫師',
      readTime: '8 分鐘',
      date: '2024-12-08',
      image: 'https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['抗氧化劑', '抗老化', '自由基']
    },
    {
      id: 5,
      title: '睡眠品質與營養：夜晚修復的營養支持',
      excerpt: '良好的睡眠是健康的基石。探索鎂、色氨酸、褪黑激素等營養素如何改善睡眠品質，讓身體在夜間得到充分修復。',
      category: '睡眠健康',
      author: '李營養師',
      readTime: '6 分鐘',
      date: '2024-12-05',
      image: 'https://images.pexels.com/photos/935777/pexels-photo-935777.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['睡眠品質', '褪黑激素', '色氨酸']
    },
    {
      id: 6,
      title: '運動營養：如何為活躍生活提供最佳燃料',
      excerpt: '運動前後的營養補充對運動表現和恢復至關重要。了解蛋白質、碳水化合物、電解質的最佳攝取時機和份量。',
      category: '運動營養',
      author: '劉教練',
      readTime: '7 分鐘',
      date: '2024-12-03',
      image: 'https://images.pexels.com/photos/1640775/pexels-photo-1640775.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['運動營養', '蛋白質', '電解質']
    }
  ];

  const categories = ['全部', '營養知識', '壓力管理', '腸道健康', '抗老化', '睡眠健康', '運動營養'];
  const [selectedCategory, setSelectedCategory] = React.useState('全部');

  const filteredArticles = selectedCategory === '全部' 
    ? articles 
    : articles.filter(article => article.category === selectedCategory);

  const categoryColors: { [key: string]: string } = {
    '營養知識': 'from-pink-400 to-rose-400',
    '壓力管理': 'from-blue-400 to-cyan-400',
    '腸道健康': 'from-green-400 to-emerald-400',
    '抗老化': 'from-purple-400 to-violet-400',
    '睡眠健康': 'from-indigo-400 to-blue-400',
    '運動營養': 'from-orange-400 to-red-400'
  };

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
            健康專欄
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            由專業營養師和醫療團隊撰寫的健康知識文章，幫助您建立正確的營養觀念
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-pink-400 to-purple-500 text-white shadow-lg'
                  : 'bg-white text-gray-600 border border-gray-200 hover:bg-pink-50 hover:border-pink-200'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-sm text-white bg-gradient-to-r ${categoryColors[article.category]}`}>
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-pink-600 transition-colors duration-200">
                  {article.title}
                </h2>
                
                <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="inline-flex items-center px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                    >
                      <Tag className="h-3 w-3 mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-100">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {article.author}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {article.readTime}
                    </div>
                  </div>
                  <span>{article.date}</span>
                </div>

                {/* Read More Button */}
                <div className="mt-4">
                  <button className="flex items-center text-pink-600 hover:text-pink-700 font-medium group">
                    閱讀更多
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 p-12 bg-gradient-to-r from-pink-50 to-purple-50 rounded-3xl text-center"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            訂閱健康電子報
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            第一時間獲得最新的健康資訊、營養知識和專家建議，讓健康生活更簡單
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="請輸入您的電子郵件"
              className="flex-1 px-6 py-4 rounded-full border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:border-transparent"
            />
            <button className="px-8 py-4 bg-gradient-to-r from-pink-400 to-purple-500 text-white font-semibold rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-200">
              立即訂閱
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HealthColumn;