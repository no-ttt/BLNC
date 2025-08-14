import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Shield, Award, Truck, RefreshCw, Check } from 'lucide-react';

import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeTab, setActiveTab] = useState('description');

  // 產品資料庫
  const productDatabase = {
    'ocean-magnesium': {
      name: '海洋鎂膠囊',
      subtitle: '深海純淨鎂離子，舒緩身心的天然選擇',
      price: 1280,
      originalPrice: 1580,
      rating: 4.8,
      reviewCount: 156,
      images: [
        'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3683056/pexels-photo-3683056.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3683089/pexels-photo-3683089.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3683098/pexels-photo-3683098.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      keyFeatures: [
        '來自深海的天然鎂離子',
        '高生物利用率，易於吸收',
        '無添加人工色素與防腐劑',
        '通過國際品質認證',
        '素食膠囊，適合素食者'
      ],
      benefits: [
        { icon: '😴', title: '改善睡眠品質', description: '鎂有助於放鬆神經系統，促進深度睡眠' },
        { icon: '💪', title: '舒緩肌肉緊張', description: '維持正常肌肉功能，減少抽筋與緊繃' },
        { icon: '🧠', title: '支持神經健康', description: '維護神經傳導功能，提升專注力' },
        { icon: '❤️', title: '維護心血管', description: '支持心臟正常節律，維持血壓穩定' }
      ],
      specifications: {
        '主要成分': '海洋鎂 400mg',
        '膠囊數量': '60粒',
        '服用方式': '每日1-2粒，餐後服用',
        '保存期限': '3年',
        '製造地': '台灣',
        '認證': 'ISO22000、HACCP'
      }
    },
    'ocean-calcium': {
      name: '海洋鈣膠囊',
      subtitle: '純淨海洋鈣質，強化骨骼健康',
      price: 1480,
      originalPrice: 1780,
      rating: 4.7,
      reviewCount: 142,
      images: [
        'https://images.pexels.com/photos/3683056/pexels-photo-3683056.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3683089/pexels-photo-3683089.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3683098/pexels-photo-3683098.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      keyFeatures: [
        '萃取自純淨海洋的天然鈣質',
        '添加維生素D3提升吸收率',
        '無重金屬污染',
        '通過國際品質認證',
        '適合全家人使用'
      ],
      benefits: [
        { icon: '🦴', title: '強化骨骼密度', description: '提供充足鈣質，維護骨骼健康' },
        { icon: '🦷', title: '維護牙齒健康', description: '強化牙齒結構，預防蛀牙' },
        { icon: '💪', title: '促進肌肉收縮', description: '維持正常肌肉功能' },
        { icon: '🧠', title: '支持神經傳導', description: '協助神經訊號傳遞' }
      ],
      specifications: {
        '主要成分': '海洋鈣 800mg, 維生素D3 400IU',
        '膠囊數量': '90粒',
        '服用方式': '每日2-3粒，餐後服用',
        '保存期限': '3年',
        '製造地': '台灣',
        '認證': 'ISO22000、HACCP'
      }
    },
    'natural-vitamins': {
      name: '天然綜合維生素',
      subtitle: '全方位營養補充，提升整體健康',
      price: 1680,
      originalPrice: 1980,
      rating: 4.9,
      reviewCount: 203,
      images: [
        'https://images.pexels.com/photos/3683089/pexels-photo-3683089.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3683056/pexels-photo-3683056.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3683098/pexels-photo-3683098.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      keyFeatures: [
        '精選多種天然維生素與礦物質',
        '全方位營養補充配方',
        '高生物利用率',
        '無人工添加物',
        '適合素食者'
      ],
      benefits: [
        { icon: '⚡', title: '提升能量代謝', description: 'B群維生素協助能量轉換' },
        { icon: '🛡️', title: '增強免疫力', description: '維生素C、E提供抗氧化保護' },
        { icon: '🧠', title: '支持認知功能', description: '維護大腦健康與記憶力' },
        { icon: '💪', title: '增強體力活力', description: '全方位營養支持身體機能' }
      ],
      specifications: {
        '主要成分': '綜合維生素A-K、礦物質',
        '膠囊數量': '120粒',
        '服用方式': '每日2粒，餐後服用',
        '保存期限': '3年',
        '製造地': '台灣',
        '認證': 'ISO22000、HACCP'
      }
    },
    'algae-oil': {
      name: '藻油膠囊',
      subtitle: '植物性Omega-3，心腦血管的守護者',
      price: 1880,
      originalPrice: 2180,
      rating: 4.6,
      reviewCount: 128,
      images: [
        'https://images.pexels.com/photos/3683098/pexels-photo-3683098.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3683056/pexels-photo-3683056.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3683089/pexels-photo-3683089.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      keyFeatures: [
        '植物性Omega-3來源',
        '富含DHA與EPA',
        '無魚腥味',
        '適合素食者',
        '高純度萃取'
      ],
      benefits: [
        { icon: '❤️', title: '支持心血管健康', description: '維護心臟與血管功能' },
        { icon: '🧠', title: '促進大腦功能', description: 'DHA支持大腦發育與認知' },
        { icon: '👁️', title: '維護視力健康', description: '保護視網膜健康' },
        { icon: '🔥', title: '抗發炎作用', description: '減少體內發炎反應' }
      ],
      specifications: {
        '主要成分': '藻油DHA 300mg, EPA 150mg',
        '膠囊數量': '60粒',
        '服用方式': '每日1-2粒，餐後服用',
        '保存期限': '2年',
        '製造地': '台灣',
        '認證': 'ISO22000、HACCP'
      }
    },
    'uc2-capsules': {
      name: 'UC-II 膠囊',
      subtitle: '專利膠原蛋白，關節健康的專家',
      price: 2280,
      originalPrice: 2680,
      rating: 4.8,
      reviewCount: 95,
      images: [
        'https://images.pexels.com/photos/3683051/pexels-photo-3683051.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3683056/pexels-photo-3683056.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3683089/pexels-photo-3683089.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      keyFeatures: [
        '專利非變性二型膠原蛋白',
        '臨床實證有效',
        '高生物活性',
        '無副作用',
        '適合長期使用'
      ],
      benefits: [
        { icon: '🦴', title: '維護關節健康', description: '保護關節軟骨組織' },
        { icon: '🤸', title: '改善關節靈活度', description: '增加關節活動範圍' },
        { icon: '💪', title: '減少關節不適', description: '緩解關節疼痛與僵硬' },
        { icon: '🏃', title: '支持運動表現', description: '維護運動時的關節功能' }
      ],
      specifications: {
        '主要成分': 'UC-II膠原蛋白 40mg',
        '膠囊數量': '30粒',
        '服用方式': '每日1粒，空腹服用',
        '保存期限': '3年',
        '製造地': '美國',
        '認證': 'FDA、ISO22000'
      }
    },
    'probiotics': {
      name: '益生菌膠囊',
      subtitle: '腸道健康守護者，提升消化機能',
      price: 1580,
      originalPrice: 1880,
      rating: 4.7,
      reviewCount: 167,
      images: [
        'https://images.pexels.com/photos/3683062/pexels-photo-3683062.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3683056/pexels-photo-3683056.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3683089/pexels-photo-3683089.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      keyFeatures: [
        '多株益生菌複合配方',
        '100億CFU高濃度',
        '耐胃酸包埋技術',
        '添加益生元',
        '冷藏保存'
      ],
      benefits: [
        { icon: '🦠', title: '改善腸道健康', description: '平衡腸道菌群生態' },
        { icon: '🍽️', title: '提升消化機能', description: '促進營養素吸收' },
        { icon: '🛡️', title: '增強免疫力', description: '70%免疫細胞在腸道' },
        { icon: '😊', title: '改善腸胃不適', description: '減少脹氣、便秘問題' }
      ],
      specifications: {
        '主要成分': '10株益生菌 100億CFU',
        '膠囊數量': '60粒',
        '服用方式': '每日1-2粒，餐前服用',
        '保存期限': '2年',
        '製造地': '台灣',
        '認證': 'ISO22000、HACCP'
      }
    },
    'coq10': {
      name: '輔酶Q10',
      subtitle: '細胞能量工廠，心臟健康的關鍵',
      price: 2180,
      originalPrice: 2580,
      rating: 4.5,
      reviewCount: 89,
      images: [
        'https://images.pexels.com/photos/3683045/pexels-photo-3683045.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3683056/pexels-photo-3683056.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3683089/pexels-photo-3683089.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      keyFeatures: [
        '高純度輔酶Q10',
        '軟膠囊易吸收',
        '添加維生素E',
        '無人工色素',
        '品質穩定'
      ],
      benefits: [
        { icon: '❤️', title: '支持心臟健康', description: '維護心肌細胞功能' },
        { icon: '⚡', title: '提升能量代謝', description: '促進細胞ATP生成' },
        { icon: '🛡️', title: '抗氧化保護', description: '清除自由基傷害' },
        { icon: '💪', title: '延緩老化', description: '維護細胞健康活力' }
      ],
      specifications: {
        '主要成分': '輔酶Q10 100mg',
        '膠囊數量': '60粒',
        '服用方式': '每日1粒，餐後服用',
        '保存期限': '3年',
        '製造地': '日本',
        '認證': 'GMP、ISO22000'
      }
    },
    'vitamin-d3': {
      name: '維生素D3',
      subtitle: '陽光維生素，骨骼與免疫的雙重守護',
      price: 980,
      originalPrice: 1280,
      rating: 4.8,
      reviewCount: 234,
      images: [
        'https://images.pexels.com/photos/3683067/pexels-photo-3683067.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3683056/pexels-photo-3683056.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3683089/pexels-photo-3683089.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      keyFeatures: [
        '高濃度維生素D3',
        '天然羊毛脂來源',
        '小顆粒易吞服',
        '無添加防腐劑',
        '適合全家使用'
      ],
      benefits: [
        { icon: '🦴', title: '促進鈣質吸收', description: '提升骨骼鈣質利用率' },
        { icon: '💪', title: '維護骨骼健康', description: '預防骨質疏鬆症' },
        { icon: '🛡️', title: '增強免疫功能', description: '調節免疫系統平衡' },
        { icon: '😊', title: '改善情緒', description: '維護心理健康' }
      ],
      specifications: {
        '主要成分': '維生素D3 2000IU',
        '膠囊數量': '120粒',
        '服用方式': '每日1粒，餐後服用',
        '保存期限': '3年',
        '製造地': '台灣',
        '認證': 'ISO22000、HACCP'
      }
    },
    'b-complex': {
      name: 'B群維生素',
      subtitle: '能量維生素群，提升精神活力',
      price: 1180,
      originalPrice: 1480,
      rating: 4.6,
      reviewCount: 189,
      images: [
        'https://images.pexels.com/photos/3683078/pexels-photo-3683078.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3683056/pexels-photo-3683056.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3683089/pexels-photo-3683089.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      keyFeatures: [
        '完整B群維生素配方',
        '高生物利用率',
        '緩釋型配方',
        '無人工色素',
        '素食膠囊'
      ],
      benefits: [
        { icon: '⚡', title: '提升精神活力', description: '協助能量代謝轉換' },
        { icon: '🧠', title: '支持神經健康', description: '維護神經系統功能' },
        { icon: '💪', title: '改善新陳代謝', description: '促進蛋白質合成' },
        { icon: '😊', title: '穩定情緒', description: '支持神經傳導物質合成' }
      ],
      specifications: {
        '主要成分': 'B1,B2,B6,B12,葉酸,菸鹼酸',
        '膠囊數量': '90粒',
        '服用方式': '每日1-2粒，餐後服用',
        '保存期限': '3年',
        '製造地': '台灣',
        '認證': 'ISO22000、HACCP'
      }
    },
    'iron-supplement': {
      name: '鐵質補充劑',
      subtitle: '溫和鐵質配方，改善貧血症狀',
      price: 1380,
      originalPrice: 1680,
      rating: 4.4,
      reviewCount: 156,
      images: [
        'https://images.pexels.com/photos/3683083/pexels-photo-3683083.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3683056/pexels-photo-3683056.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3683089/pexels-photo-3683089.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      keyFeatures: [
        '溫和鐵質配方',
        '添加維生素C促進吸收',
        '不易造成腸胃不適',
        '螯合鐵高吸收率',
        '適合孕婦使用'
      ],
      benefits: [
        { icon: '🩸', title: '改善貧血症狀', description: '提升血紅素濃度' },
        { icon: '💪', title: '增加體力', description: '改善疲勞與虛弱' },
        { icon: '🧠', title: '提升專注力', description: '改善大腦供氧狀況' },
        { icon: '❄️', title: '改善手腳冰冷', description: '促進血液循環' }
      ],
      specifications: {
        '主要成分': '螯合鐵 18mg, 維生素C 60mg',
        '膠囊數量': '60粒',
        '服用方式': '每日1粒，餐後服用',
        '保存期限': '3年',
        '製造地': '台灣',
        '認證': 'ISO22000、HACCP'
      }
    },
    'zinc-supplement': {
      name: '鋅補充劑',
      subtitle: '免疫礦物質，傷口癒合的加速器',
      price: 880,
      originalPrice: 1180,
      rating: 4.5,
      reviewCount: 134,
      images: [
        'https://images.pexels.com/photos/3683092/pexels-photo-3683092.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3683056/pexels-photo-3683056.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3683089/pexels-photo-3683089.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      keyFeatures: [
        '高生物利用率鋅配方',
        '螯合鋅易吸收',
        '無金屬味',
        '小顆粒設計',
        '適合長期補充'
      ],
      benefits: [
        { icon: '🛡️', title: '支持免疫系統', description: '增強身體抵抗力' },
        { icon: '🩹', title: '促進傷口癒合', description: '加速組織修復' },
        { icon: '✨', title: '維護皮膚健康', description: '改善皮膚問題' },
        { icon: '👁️', title: '保護視力', description: '維護視網膜健康' }
      ],
      specifications: {
        '主要成分': '螯合鋅 15mg',
        '膠囊數量': '90粒',
        '服用方式': '每日1粒，餐後服用',
        '保存期限': '3年',
        '製造地': '台灣',
        '認證': 'ISO22000、HACCP'
      }
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
            className="px-8 py-4 bg-gradient-to-r from-pink-400 to-purple-500 text-white font-semibold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            返回上一頁
          </button>
        </div>
      </div>
    );
  }

  const tabs = [
    { id: 'description', name: '產品介紹' },
    { id: 'ingredients', name: '成分說明' },
    { id: 'usage', name: '使用方法' },
    { id: 'reviews', name: '顧客評價' }
  ];

  const reviews = [
    {
      name: '林小姐',
      rating: 5,
      date: '2024-12-10',
      comment: '使用一個月後，睡眠品質明顯改善，不再半夜醒來，推薦給有睡眠困擾的朋友！'
    },
    {
      name: '陳先生',
      rating: 5,
      date: '2024-12-08',
      comment: '工作壓力大經常肌肉緊繃，服用後感覺放鬆很多，而且沒有副作用。'
    },
    {
      name: '王媽媽',
      rating: 4,
      date: '2024-12-05',
      comment: '膠囊好吞服，沒有奇怪的味道，持續使用中，感覺精神狀態有改善。'
    }
  ];

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gray-100">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square rounded-xl overflow-hidden border-2 transition-all duration-200 ${
                      selectedImage === index
                        ? 'border-pink-400 ring-2 ring-pink-200'
                        : 'border-gray-200 hover:border-pink-200'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

        </div>

        {/* Product Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-4">{product.name}</h1>
          <p className="text-xl text-gray-600 mb-6">{product.subtitle}</p>
          
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="flex items-center">
              {renderStars(product.rating)}
              <span className="ml-2 text-sm text-gray-600">
                {product.rating} ({product.reviewCount} 則評價)
              </span>
            </div>
          </div>

          <div className="flex items-center justify-center space-x-4">
            <div className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-purple-600 bg-clip-text text-transparent">
              NT$ {product.price.toLocaleString()}
            </div>
            <div className="text-lg text-gray-400 line-through">
              NT$ {product.originalPrice.toLocaleString()}
            </div>
            <div className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-medium">
              省 NT$ {product.originalPrice - product.price}
            </div>
          </div>
        </motion.div>

        {/* Key Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="bg-blue-50 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">產品特色</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {product.keyFeatures.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <Check className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
              <Shield className="h-10 w-10 text-green-500 mx-auto mb-3" />
              <div className="font-medium text-gray-800 mb-1">品質保證</div>
              <div className="text-sm text-gray-600">國際認證標準</div>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
              <Truck className="h-10 w-10 text-blue-500 mx-auto mb-3" />
              <div className="font-medium text-gray-800 mb-1">免運配送</div>
              <div className="text-sm text-gray-600">全台免費配送</div>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
              <RefreshCw className="h-10 w-10 text-purple-500 mx-auto mb-3" />
              <div className="font-medium text-gray-800 mb-1">30天退換</div>
              <div className="text-sm text-gray-600">不滿意全額退款</div>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
              <Award className="h-10 w-10 text-orange-500 mx-auto mb-3" />
              <div className="font-medium text-gray-800 mb-1">國際認證</div>
              <div className="text-sm text-gray-600">多項品質認證</div>
            </div>
          </div>
        </motion.div>
        {/* Benefits Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">為什麼選擇{product.name}？</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {product.benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Detailed Information Tabs */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
        >
          <div className="border-b border-gray-200">
            <div className="flex space-x-8 px-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors duration-200 ${
                    activeTab === tab.id
                      ? 'border-pink-500 text-pink-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab.name}
                </button>
              ))}
            </div>
          </div>

          <div className="p-8">
            {activeTab === 'description' && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-800">產品介紹</h3>
                <p className="text-gray-600 leading-relaxed">
                  BLNC {product.name}採用最高品質的原料，經過嚴格的品質控制流程製造。{product.subtitle}，為您的健康提供最佳的營養支持。
                </p>
                <p className="text-gray-600 leading-relaxed">
                  現代人由於生活忙碌、飲食不均衡，容易出現營養不足的問題。我們的{product.name}能有效補充身體所需的營養素，幫助您維持最佳的健康狀態。
                </p>
                <p className="text-gray-600 leading-relaxed">
                  本產品經過嚴格的第三方檢測，確保品質安全無虞。我們承諾提供最純淨、最有效的營養補充品，讓您安心使用。
                </p>
                <div className="bg-blue-50 rounded-xl p-6">
                  <h4 className="font-semibold text-gray-800 mb-3">產品規格</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between">
                        <span className="text-gray-600">{key}：</span>
                        <span className="font-medium text-gray-800">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-green-50 rounded-xl p-6">
                  <h4 className="font-semibold text-gray-800 mb-3">品質保證</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
                    <div>✓ 通過國際品質認證</div>
                    <div>✓ 第三方檢測驗證</div>
                    <div>✓ 無重金屬污染</div>
                    <div>✓ 無農藥殘留</div>
                    <div>✓ 符合食品安全標準</div>
                    <div>✓ 30天滿意保證</div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'ingredients' && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-800">成分說明</h3>
                <p className="text-gray-600 leading-relaxed">
                  我們精心挑選每一種成分，確保其純度、效力和安全性。所有成分都經過嚴格的品質檢測，符合國際標準。
                </p>
                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-semibold text-gray-800 mb-4">主要成分</h4>
                  <div className="space-y-4">
                    <div className="border-l-4 border-blue-400 pl-4">
                      <h5 className="font-medium text-gray-800">{Object.values(product.specifications)[0]}</h5>
                      <p className="text-sm text-gray-600 mt-1">
                        主要活性成分，經過特殊工藝處理，確保最佳的生物利用率和吸收效果。
                      </p>
                    </div>
                    <div className="border-l-4 border-green-400 pl-4">
                      <h5 className="font-medium text-gray-800">植物性膠囊殼</h5>
                      <p className="text-sm text-gray-600 mt-1">
                        採用天然植物纖維製成，適合素食者，無動物成分。
                      </p>
                    </div>
                    <div className="border-l-4 border-purple-400 pl-4">
                      <h5 className="font-medium text-gray-800">天然抗氧化劑</h5>
                      <p className="text-sm text-gray-600 mt-1">
                        添加天然維生素E，防止成分氧化，確保產品穩定性。
                      </p>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-500">
                  * 本產品不含人工色素、防腐劑、麩質、基因改造成分，通過重金屬及農藥殘留檢測。
                </p>
              </div>
            )}

            {activeTab === 'usage' && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-800">使用方法</h3>
                <p className="text-gray-600 leading-relaxed">
                  為了達到最佳效果，請按照以下建議使用本產品。如有特殊健康狀況，建議諮詢專業醫療人員。
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-6 bg-pink-50 rounded-xl">
                    <div className="w-12 h-12 bg-pink-400 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                      1
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-2">建議用量</h4>
                    <p className="text-sm text-gray-600">{product.specifications['服用方式']}</p>
                  </div>
                  <div className="text-center p-6 bg-blue-50 rounded-xl">
                    <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                      2
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-2">服用方式</h4>
                    <p className="text-sm text-gray-600">配合溫開水吞服，避免空腹服用</p>
                  </div>
                  <div className="text-center p-6 bg-green-50 rounded-xl">
                    <div className="w-12 h-12 bg-green-400 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                      3
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-2">持續服用</h4>
                    <p className="text-sm text-gray-600">建議持續服用4-6週以達最佳效果</p>
                  </div>
                </div>
                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                  <h4 className="font-semibold text-yellow-800 mb-3">注意事項</h4>
                  <ul className="text-sm text-yellow-700 space-y-2">
                    <li>• 孕婦、哺乳期婦女及兒童請諮詢醫師後使用</li>
                    <li>• 如有服用其他藥物，請間隔2小時以上</li>
                    <li>• 請存放於陰涼乾燥處，避免陽光直射</li>
                    <li>• 如有不適症狀請立即停止使用並諮詢醫師</li>
                    <li>• 本產品為營養補充品，不可取代正常飲食</li>
                    <li>• 開封後請盡快食用完畢，確保品質</li>
                  </ul>
                </div>
                <div className="bg-blue-50 rounded-xl p-6">
                  <h4 className="font-semibold text-blue-800 mb-3">最佳使用時機</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-blue-700">
                    <div>🌅 早晨：提升一天活力</div>
                    <div>🍽️ 餐後：促進營養吸收</div>
                    <div>🌙 睡前：支持夜間修復</div>
                    <div>💪 運動前後：補充消耗營養</div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-gray-800">顾客評價</h3>
                  <div className="flex items-center space-x-2">
                    <div className="flex">{renderStars(product.rating)}</div>
                    <span className="text-lg font-semibold text-gray-800">{product.rating}</span>
                    <span className="text-gray-600">({product.reviewCount} 則評價)</span>
                  </div>
                </div>
                <div className="space-y-6">
                  {reviews.map((review, index) => (
                    <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                            {review.name.charAt(0)}
                          </div>
                          <div>
                            <div className="font-medium text-gray-800">{review.name}</div>
                            <div className="text-sm text-gray-500">{review.date}</div>
                          </div>
                        </div>
                        <div className="flex">{renderStars(review.rating)}</div>
                      </div>
                      <p className="text-gray-600 leading-relaxed">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default ProductDetail;