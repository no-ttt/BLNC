import React from 'react';
import { motion } from 'framer-motion';
import { Star, Heart, User, Calendar } from 'lucide-react';

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: '林小姐',
      age: 35,
      rating: 5,
      date: '2024-12-15',
      title: '改善了我的睡眠品質',
      content: '使用 BLNC 的個人化營養品已經三個月了，最明顯的改變就是睡眠品質大幅提升。以前經常失眠，現在每晚都能深度睡眠，白天精神也變得更好。營養師的建議非常專業，產品品質也很棒！',
      category: '睡眠改善',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 2,
      name: '陳先生',
      age: 42,
      rating: 5,
      date: '2024-12-10',
      title: '工作壓力減輕了',
      content: '身為上班族，長期工作壓力大，經常感到疲憊。透過 BLNC 的營養檢測，發現我缺乏多種維生素。按照建議服用客製化補充品後，明顯感覺體力變好，工作效率也提升了。',
      category: '壓力管理',
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 3,
      name: '王媽媽',
      age: 58,
      rating: 5,
      date: '2024-12-05',
      title: '骨質密度改善顯著',
      content: '年紀漸長，很擔心骨質疏鬆的問題。BLNC 的檢測報告非常詳細，針對我的骨骼健康提供了專門的營養配方。半年後的檢查結果讓醫生都很驚喜，骨質密度有明顯改善。',
      category: '骨骼健康',
      image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 4,
      name: '張小姐',
      age: 28,
      rating: 5,
      date: '2024-11-28',
      title: '皮膚狀況明顯改善',
      content: '從小就有過敏體質，皮膚經常出問題。透過 BLNC 的免疫系統檢測，發現了一些我從未注意到的營養缺乏。使用個人化營養品三個月後，皮膚狀況穩定很多，過敏症狀也減輕了。',
      category: '免疫系統',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 5,
      name: '李先生',
      age: 45,
      rating: 4,
      date: '2024-11-20',
      title: '心血管指標改善',
      content: '健檢發現膽固醇偏高，醫生建議除了飲食調整外，也要補充相關營養素。BLNC 的心血管健康配方很有針對性，三個月後回診，指標都有改善。醫生說繼續保持就很好。',
      category: '心血管健康',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 6,
      name: '黃小姐',
      age: 31,
      rating: 5,
      date: '2024-11-15',
      title: '記憶力和專注力提升',
      content: '工作需要長時間專注，但最近發現記憶力下降，經常忘東忘西。BLNC 的神經認知檢測很專業，針對大腦健康的營養配方效果很好。現在思緒更清晰，工作效率也提高了。',
      category: '認知健康',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const categoryColors = {
    '睡眠改善': 'from-purple-400 to-violet-400',
    '壓力管理': 'from-blue-400 to-cyan-400',
    '骨骼健康': 'from-green-400 to-emerald-400',
    '免疫系統': 'from-pink-400 to-rose-400',
    '心血管健康': 'from-red-400 to-orange-400',
    '認知健康': 'from-indigo-400 to-purple-400'
  };

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
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
            消費者好評心情
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            來自真實用戶的使用心得分享，看看 BLNC 如何改善他們的健康生活
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          <div className="text-center p-8 bg-white rounded-2xl shadow-lg border border-pink-100">
            <div className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent mb-2">
              98%
            </div>
            <p className="text-gray-600">客戶滿意度</p>
          </div>
          <div className="text-center p-8 bg-white rounded-2xl shadow-lg border border-pink-100">
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent mb-2">
              1000+
            </div>
            <p className="text-gray-600">成功案例</p>
          </div>
          <div className="text-center p-8 bg-white rounded-2xl shadow-lg border border-pink-100">
            <div className="text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent mb-2">
              4.9
            </div>
            <p className="text-gray-600">平均評分</p>
          </div>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="p-6">
                {/* Header */}
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img
                      src={review.image}
                      alt={review.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800">{review.name}</h3>
                    <p className="text-sm text-gray-500">{review.age} 歲</p>
                  </div>
                  <div className="text-right">
                    <div className="flex">{renderStars(review.rating)}</div>
                    <p className="text-xs text-gray-500 mt-1 flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {review.date}
                    </p>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="mb-4">
                  <span className={`inline-block px-3 py-1 rounded-full text-sm text-white bg-gradient-to-r ${categoryColors[review.category as keyof typeof categoryColors]}`}>
                    {review.category}
                  </span>
                </div>

                {/* Content */}
                <h4 className="font-semibold text-gray-800 mb-3 text-lg">{review.title}</h4>
                <p className="text-gray-600 leading-relaxed line-clamp-4">{review.content}</p>

                {/* Footer */}
                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                  <div className="flex items-center text-pink-500">
                    <Heart className="h-5 w-5 mr-2" />
                    <span className="text-sm">有幫助</span>
                  </div>
                  <div className="flex items-center text-gray-400">
                    <User className="h-4 w-4 mr-1" />
                    <span className="text-xs">已驗證購買</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16 p-12 bg-gradient-to-r from-pink-50 to-purple-50 rounded-3xl"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            您也想分享使用心得嗎？
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            成為 BLNC 大家庭的一員，體驗個人化營養帶來的改變
          </p>
          <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-pink-400 to-purple-500 text-white font-semibold rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-200">
            開始我的健康之旅
            <Heart className="ml-2 h-5 w-5" />
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Reviews;