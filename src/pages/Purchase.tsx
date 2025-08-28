import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Check, Star, Heart, Shield, Truck, Award, Clock, ArrowRight, Users, TestTube, Package } from 'lucide-react';

const Purchase = () => {
  const [selectedPlan, setSelectedPlan] = useState('first-30');

  const products = [
    {
      id: 'ocean-magnesium',
      name: '海洋鎂',
      image: 'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: '來自深海的天然鎂離子，改善睡眠品質，舒緩肌肉緊張',
      benefits: ['改善睡眠品質', '舒緩肌肉緊張', '維持神經健康'],
      color: 'from-blue-400 to-cyan-400'
    },
    {
      id: 'ocean-calcium',
      name: '海洋鈣',
      image: 'https://images.pexels.com/photos/3683056/pexels-photo-3683056.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: '萃取自純淨海洋的天然鈣質，強化骨骼與牙齒健康',
      benefits: ['強化骨骼密度', '促進鈣質吸收', '維護牙齒健康'],
      color: 'from-green-400 to-emerald-400'
    },
    {
      id: 'natural-vitamins',
      name: '天然綜合維生素',
      image: 'https://images.pexels.com/photos/3683089/pexels-photo-3683089.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: '精選多種天然維生素與礦物質，全方位補充日常所需營養素',
      benefits: ['全方位營養補充', '提升免疫力', '增強體力活力'],
      color: 'from-purple-400 to-violet-400'
    },
    {
      id: 'algae-oil',
      name: '藻油膠囊',
      image: 'https://images.pexels.com/photos/3683098/pexels-photo-3683098.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: '植物性Omega-3來源，支持心血管健康，促進大腦功能',
      benefits: ['支持心血管健康', '促進大腦功能', '維護視力健康'],
      color: 'from-teal-400 to-cyan-400'
    },
    {
      id: 'uc2-capsules',
      name: 'UC-II 膠囊',
      image: 'https://images.pexels.com/photos/3683051/pexels-photo-3683051.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: '專利非變性二型膠原蛋白，有效維護關節健康',
      benefits: ['維護關節健康', '改善關節靈活度', '專利成分保證'],
      color: 'from-orange-400 to-red-400'
    },
    {
      id: 'probiotics',
      name: '益生菌膠囊',
      image: 'https://images.pexels.com/photos/3683062/pexels-photo-3683062.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: '多株益生菌複合配方，維護腸道健康，提升消化機能',
      benefits: ['改善腸道健康', '提升消化機能', '增強免疫力'],
      color: 'from-yellow-400 to-orange-400'
    },
    {
      id: 'coq10',
      name: '輔酶Q10',
      image: 'https://images.pexels.com/photos/3683045/pexels-photo-3683045.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: '高純度輔酶Q10，支持心臟健康，提升細胞能量代謝',
      benefits: ['支持心臟健康', '提升能量代謝', '抗氧化保護'],
      color: 'from-red-400 to-pink-400'
    },
    {
      id: 'vitamin-d3',
      name: '維生素D3',
      image: 'https://images.pexels.com/photos/3683067/pexels-photo-3683067.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: '高濃度維生素D3，促進鈣質吸收，維護骨骼與免疫健康',
      benefits: ['促進鈣質吸收', '維護骨骼健康', '增強免疫功能'],
      color: 'from-indigo-400 to-purple-400'
    },
    {
      id: 'b-complex',
      name: 'B群維生素',
      image: 'https://images.pexels.com/photos/3683078/pexels-photo-3683078.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: '完整B群維生素配方，提升精神活力，支持神經系統健康',
      benefits: ['提升精神活力', '支持神經健康', '改善新陳代謝'],
      color: 'from-lime-400 to-green-400'
    },
    {
      id: 'iron-supplement',
      name: '鐵質補充劑',
      image: 'https://images.pexels.com/photos/3683083/pexels-photo-3683083.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: '溫和鐵質配方，改善貧血症狀，提升血紅素濃度',
      benefits: ['改善貧血症狀', '提升血紅素', '增加體力'],
      color: 'from-rose-400 to-red-400'
    },
    {
      id: 'zinc-supplement',
      name: '鋅補充劑',
      image: 'https://images.pexels.com/photos/3683092/pexels-photo-3683092.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: '高生物利用率鋅配方，支持免疫系統，促進傷口癒合',
      benefits: ['支持免疫系統', '促進傷口癒合', '維護皮膚健康'],
      color: 'from-gray-400 to-slate-400'
    }
  ];

  const purchasePlans = [
    {
      id: 'first-30',
      type: '首購',
      duration: '30天',
      title: '檢測 + 保健品 (30天)',
      price: 3280,
      originalPrice: 4000,
      discount: '18% OFF',
      features: [
        '完整營養檢測分析',
        '個人化保健品配方',
        '專業營養師諮詢',
        '30天保健品供應',
        '健康追蹤報告',
        '24/7 客服支援'
      ],
      popular: false,
      icon: <TestTube className="h-8 w-8" />,
      color: 'from-blue-400 to-cyan-400'
    },
    {
      id: 'first-90',
      type: '首購',
      duration: '90天',
      title: '檢測 + 保健品 (90天)',
      price: 8850,
      originalPrice: 12000,
      discount: '26% OFF',
      features: [
        '完整營養檢測分析',
        '個人化保健品配方',
        '專業營養師諮詢',
        '90天保健品供應',
        '健康追蹤報告',
        '免費配方調整',
        '24/7 客服支援',
        '季度健康評估'
      ],
      popular: true,
      icon: <TestTube className="h-8 w-8" />,
      color: 'from-pink-400 to-purple-500'
    },
    {
      id: 'repurchase-30',
      type: '回購',
      duration: '30天',
      title: '保健品 (30天)',
      price: 2480,
      originalPrice: 3000,
      discount: '17% OFF',
      features: [
        '個人化保健品配方',
        '30天保健品供應',
        '配方微調服務',
        '健康狀況追蹤',
        '24/7 客服支援'
      ],
      popular: false,
      icon: <Package className="h-8 w-8" />,
      color: 'from-green-400 to-emerald-400'
    },
    {
      id: 'repurchase-90',
      type: '回購',
      duration: '90天',
      title: '保健品 (90天)',
      price: 6900,
      originalPrice: 9000,
      discount: '23% OFF',
      features: [
        '個人化保健品配方',
        '90天保健品供應',
        '配方微調服務',
        '健康狀況追蹤',
        '免費配送服務',
        '24/7 客服支援',
        '季度健康評估'
      ],
      popular: false,
      icon: <Package className="h-8 w-8" />,
      color: 'from-purple-400 to-violet-400'
    }
  ];

  const trustBadges = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: '品質保證',
      description: '國際認證標準'
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: '免費配送',
      description: '全台免運服務'
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: '專業團隊',
      description: '營養師專業服務'
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: '30天保證',
      description: '不滿意全額退款'
    }
  ];

  const selectedPlanData = purchasePlans.find(plan => plan.id === selectedPlan);

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
          <h1 className="text-5xl font-bold bg-gradient-to-r from-primary-400 to-accent-600 bg-clip-text text-transparent mb-6">
            BLNC 產品購買
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            選擇最適合您的健康方案，開始您的個人化營養之旅
          </p>
        </motion.div>

        {/* Company Products Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">我們的產品</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              精選高品質營養補充品，根據您的檢測結果量身配製
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => window.location.href = `#/product/${product.id}`}
              >
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-white text-sm font-medium bg-gradient-to-r ${product.color}`}>
                    {product.name}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{product.name}</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{product.description}</p>
                  <div className="space-y-2">
                    {product.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <Check className="h-4 w-4 text-green-500 mr-2" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <button className="w-full py-2 px-4 rounded-xl text-white font-medium bg-gradient-to-r from-blue-400 via-purple-400 to-yellow-400 hover:shadow-lg transition-all duration-200">
                      查看詳情
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Custom Formula Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl shadow-lg border-2 border-pink-200 overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/3683040/pexels-photo-3683040.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="個人化配方"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-white text-sm font-medium bg-gradient-to-r from-pink-400 to-purple-500">
                  客製化配方
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">個人化營養配方</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  根據您的檢測報告量身打造的專屬營養配方，精準補充您所需的營養素
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <Check className="h-4 w-4 text-pink-500 mr-2" />
                    專屬檢測報告
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Check className="h-4 w-4 text-pink-500 mr-2" />
                    客製化配方
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Check className="h-4 w-4 text-pink-500 mr-2" />
                    專業營養師追蹤
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Purchase Plans Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">購買方案</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              選擇最適合您的購買方案，享受個人化營養服務
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {purchasePlans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative p-6 rounded-2xl border-2 cursor-pointer transition-all duration-200 ${
                  selectedPlan === plan.id
                    ? 'border-primary-400 bg-primary-50 shadow-lg transform scale-105'
                    : 'border-gray-200 bg-white hover:border-primary-200 hover:shadow-md'
                } ${plan.popular ? 'ring-2 ring-pink-300' : ''}`}
                onClick={() => setSelectedPlan(plan.id)}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-primary-400 to-accent-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    最受歡迎
                  </div>
                )}

                <div className="text-center mb-6">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${plan.color} text-white mb-4`}>
                    {plan.icon}
                  </div>
                  <div className="text-sm font-medium text-gray-600 mb-1">{plan.type}</div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{plan.title}</h3>
                  
                  <div className="mb-2">
                    <div className="text-3xl font-bold bg-gradient-to-r from-primary-400 to-accent-600 bg-clip-text text-transparent">
                      NT$ {plan.price.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-400 line-through">
                      NT$ {plan.originalPrice.toLocaleString()}
                    </div>
                    <div className="text-sm font-medium text-green-600">{plan.discount}</div>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-600">
                      <Check className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <button
                  className={`w-full py-3 px-4 rounded-xl font-semibold transition-all duration-200 ${
                    selectedPlan === plan.id
                      ? 'bg-gradient-to-r from-blue-400 via-purple-400 to-yellow-400 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {selectedPlan === plan.id ? '已選擇' : '選擇方案'}
                </button>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Order Summary */}
        {selectedPlanData && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-20"
          >
            <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">訂購摘要</h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">選擇方案</span>
                  <span className="font-medium">{selectedPlanData.title}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">方案類型</span>
                  <span className="font-medium">{selectedPlanData.type}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">服務期間</span>
                  <span className="font-medium">{selectedPlanData.duration}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">原價</span>
                  <span className="text-gray-400 line-through">NT$ {selectedPlanData.originalPrice.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">優惠折扣</span>
                  <span className="text-green-600 font-medium">{selectedPlanData.discount}</span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between items-center text-xl font-bold">
                    <span>總計金額</span>
                    <span className="bg-gradient-to-r from-primary-400 to-accent-600 bg-clip-text text-transparent">
                      NT$ {selectedPlanData.price.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>

              <button className="w-full px-8 py-4 bg-gradient-to-r from-blue-400 via-purple-400 to-yellow-400 text-white font-semibold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center">
                <ShoppingCart className="mr-2 h-5 w-5" />
                立即購買
              </button>
            </div>
          </motion.section>
        )}

        {/* Trust Badges */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trustBadges.map((badge, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
                <div className="inline-flex p-4 rounded-2xl bg-gradient-to-r from-blue-400 to-cyan-400 text-white mb-4">
                  {badge.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{badge.title}</h3>
                <p className="text-gray-600 text-sm">{badge.description}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-center bg-gradient-to-r from-blue-50 via-purple-25 to-pink-50 rounded-3xl p-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            還有疑問嗎？
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            我們的專業團隊隨時為您提供諮詢服務，幫助您選擇最適合的健康方案
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-400 to-accent-500 text-white font-semibold rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-200">
              <Users className="mr-2 h-5 w-5" />
              聯絡專業顧問
            </button>
            <button className="inline-flex items-center px-8 py-4 bg-white text-gray-700 font-semibold rounded-full border-2 border-blue-200 hover:bg-blue-50 transition-all duration-200">
              查看常見問題
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Purchase;