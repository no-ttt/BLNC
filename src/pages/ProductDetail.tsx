import React from 'react';
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();

  // 產品資料庫
  const productDatabase = {
    'ocean-magnesium': {
      name: '海洋鎂膠囊',
      subtitle: '深海純淨鎂離子，舒緩身心的天然選擇',
      image: 'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=1200'
    },
    'ocean-calcium': {
      name: '海洋鈣膠囊',
      subtitle: '純淨海洋鈣質，強化骨骼健康',
      image: 'https://images.pexels.com/photos/3683056/pexels-photo-3683056.jpeg?auto=compress&cs=tinysrgb&w=1200'
    },
    'natural-vitamins': {
      name: '天然綜合維生素',
      subtitle: '全方位營養補充，提升整體健康',
      image: 'https://images.pexels.com/photos/3683089/pexels-photo-3683089.jpeg?auto=compress&cs=tinysrgb&w=1200'
    },
    'algae-oil': {
      name: '藻油膠囊',
      subtitle: '植物性Omega-3，心腦血管的守護者',
      image: 'https://images.pexels.com/photos/3683098/pexels-photo-3683098.jpeg?auto=compress&cs=tinysrgb&w=1200'
    },
    'uc2-capsules': {
      name: 'UC-II 膠囊',
      subtitle: '專利膠原蛋白，關節健康的專家',
      image: 'https://images.pexels.com/photos/3683051/pexels-photo-3683051.jpeg?auto=compress&cs=tinysrgb&w=1200'
    },
    'probiotics': {
      name: '益生菌膠囊',
      subtitle: '腸道健康守護者，提升消化機能',
      image: 'https://images.pexels.com/photos/3683062/pexels-photo-3683062.jpeg?auto=compress&cs=tinysrgb&w=1200'
    },
    'coq10': {
      name: '輔酶Q10',
      subtitle: '細胞能量工廠，心臟健康的關鍵',
      image: 'https://images.pexels.com/photos/3683045/pexels-photo-3683045.jpeg?auto=compress&cs=tinysrgb&w=1200'
    },
    'vitamin-d3': {
      name: '維生素D3',
      subtitle: '陽光維生素，骨骼與免疫的雙重守護',
      image: 'https://images.pexels.com/photos/3683067/pexels-photo-3683067.jpeg?auto=compress&cs=tinysrgb&w=1200'
    },
    'b-complex': {
      name: 'B群維生素',
      subtitle: '能量維生素群，提升精神活力',
      image: 'https://images.pexels.com/photos/3683078/pexels-photo-3683078.jpeg?auto=compress&cs=tinysrgb&w=1200'
    },
    'iron-supplement': {
      name: '鐵質補充劑',
      subtitle: '溫和鐵質配方，改善貧血症狀',
      image: 'https://images.pexels.com/photos/3683083/pexels-photo-3683083.jpeg?auto=compress&cs=tinysrgb&w=1200'
    },
    'zinc-supplement': {
      name: '鋅補充劑',
      subtitle: '免疫礦物質，傷口癒合的加速器',
      image: 'https://images.pexels.com/photos/3683092/pexels-photo-3683092.jpeg?auto=compress&cs=tinysrgb&w=1200'
    }
  };

  // 根據 URL 參數獲取產品資料
  const product = productDatabase[id as keyof typeof productDatabase];

  // 如果找不到產品，顯示錯誤訊息
  if (!product) {
    return (
      <div className="min-h-screen py-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">產品不存在</h1>
          <p className="text-gray-600 mb-8">抱歉，找不到您要查看的產品。</p>
          <button 
            onClick={() => window.history.back()}
            className="px-8 py-4 bg-gradient-to-r from-primary-400 to-accent-500 text-white font-semibold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            返回上一頁
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Product Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary-400 to-accent-600 bg-clip-text text-transparent mb-4">
            {product.name}
          </h1>
          <p className="text-xl text-gray-600">{product.subtitle}</p>
        </motion.div>

        {/* Product Introduction Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          <img
            src={product.image}
            alt={`${product.name} 商品介紹`}
            className="w-full h-auto object-cover"
          />
          
          {/* 預留商品介紹長圖區域 */}
          <div className="p-8 text-center">
            <div className="bg-gray-100 rounded-xl p-12 border-2 border-dashed border-gray-300">
              <h3 className="text-2xl font-bold text-gray-600 mb-4">商品介紹長圖區域</h3>
              <p className="text-gray-500 mb-4">
                此區域預留給 {product.name} 的詳細介紹長圖
              </p>
              <p className="text-sm text-gray-400">
                圖片尺寸建議：寬度 800-1200px，高度不限<br />
                格式：JPG、PNG 或 WebP
              </p>
            </div>
          </div>
        </motion.div>

        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <button 
            onClick={() => window.history.back()}
            className="px-8 py-4 bg-gradient-to-r from-primary-400 to-accent-500 text-white font-semibold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            返回商品列表
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductDetail;