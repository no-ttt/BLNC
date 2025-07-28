import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Calendar, FileText, ShoppingCart, Shield, CreditCard, Clock, Check } from 'lucide-react';

const NutritionCenter = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginData, setLoginData] = useState({
    idSuffix: '',
    birthday: ''
  });
  const [currentStep, setCurrentStep] = useState('login'); // login, report, recommendation, order
  const [selectedPlan, setSelectedPlan] = useState('3months');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginData.idSuffix && loginData.birthday) {
      setIsLoggedIn(true);
      setCurrentStep('report');
    }
  };

  const reportCategories = [
    {
      title: '神經與認知健康',
      status: '需要改善',
      score: 72,
      description: '部分神經營養素不足，建議加強維生素B6和維生素B12的補充。',
      color: 'from-blue-400 to-cyan-400',
      items: [
        { name: '維生素B1', status: 'good', result: '正常' },
        { name: '維生素B2', status: 'good', result: '正常' },
        { name: '維生素B6', status: 'warning', result: '偏低' },
        { name: '葉酸', status: 'good', result: '正常' },
        { name: '維生素B12', status: 'warning', result: '不足' },
        { name: '穀胱甘肽', status: 'good', result: '正常' }
      ],
      recommendations: ['維生素B6', '維生素B12', '葉酸複合物']
    },
    {
      title: '骨骼與結締組織健康',
      status: '需要關注',
      score: 68,
      description: '鈣質攝取不足，建議增加鈣質和維生素D的補充。',
      color: 'from-green-400 to-emerald-400',
      items: [
        { name: '鈣', status: 'good', result: '正常' },
        { name: '磷', status: 'warning', result: '偏低' },
        { name: '維生素D', status: 'good', result: '正常' },
        { name: '維生素K', status: 'good', result: '正常' },
        { name: '維生素C', status: 'good', result: '正常' }
      ],
      recommendations: ['鈣質補充劑', '維生素D3', '磷', '維生素K2']
    },
    {
      title: '免疫與抗氧化防護',
      status: '需要改善',
      score: 75,
      description: '部分抗氧化指標偏低，建議加強鋅和硒的補充。',
      color: 'from-purple-400 to-violet-400',
      items: [
        { name: '維生素C', status: 'warning', result: '偏低' },
        { name: '維生素E', status: 'good', result: '正常' },
        { name: '硒', status: 'good', result: '正常' },
        { name: '鋅', status: 'warning', result: '偏低' },
        { name: '穀胱甘肽', status: 'warning', result: '偏低' },
        { name: '類胡蘿蔔素', status: 'good', result: '正常' },
        { name: '抗氧化酵素', status: 'warning', result: '偏低' }
      ],
      recommendations: ['維生素C', '鋅', '硒', '穀胱甘肽']
    },
    {
      title: '心血管健康',
      status: '良好',
      score: 85,
      description: '心血管相關營養素狀況良好，建議維持現有水準。',
      color: 'from-pink-400 to-rose-400',
      items: [
        { name: '脂質', status: 'good', result: '正常' },
        { name: '葉酸', status: 'good', result: '正常' },
        { name: '維生素B12', status: 'good', result: '正常' },
        { name: '鎂', status: 'good', result: '正常' },
        { name: '鐵', status: 'good', result: '正常' }
      ],
      recommendations: ['Omega-3', '輔酶Q10', '葉酸']
    }
  ];

  const geneticRiskFactors = [
    {
      category: '基因與環境交互影響的疾病',
      items: [
        { name: '癌症相關', status: 'good', result: '低風險' },
        { name: '心血管相關', status: 'good', result: '低風險' },
        { name: '神經退化相關', status: 'good', result: '低風險' }
      ]
    }
  ];

  const customProduct = {
    name: '您的專屬營養配方',
    description: '根據您的檢測報告，我們為您量身打造的個人化營養補充品',
    ingredients: [
      { name: '維生素B6', amount: '25mg', purpose: '改善神經功能，支持認知健康' },
      { name: '維生素B12', amount: '500mcg', purpose: '提升神經傳導，改善記憶力' },
      { name: '鈣質', amount: '800mg', purpose: '強化骨骼密度' },
      { name: '磷', amount: '400mg', purpose: '協助骨骼與牙齒健康' },
      { name: '維生素C', amount: '1000mg', purpose: '增強免疫力，抗氧化防護' },
      { name: '鋅', amount: '15mg', purpose: '提升免疫功能，促進傷口癒合' },
      { name: '硒', amount: '200mcg', purpose: '強化抗氧化防護' },
      { name: 'Omega-3', amount: '1200mg', purpose: '支持心血管健康' }
    ],
    monthlyPrice: 3280,
    features: [
      '根據個人檢測報告調配',
      '每月新鮮製作配送',
      '專業營養師持續追蹤',
      '可隨時調整配方',
      '通過國際品質認證',
      '30天滿意保證'
    ]
  };

  const pricingPlans = [
    {
      id: '3months',
      duration: '3個月',
      monthlyPrice: 3280,
      totalPrice: 9840,
      discount: 0,
      isMinimum: true,
      features: ['最低訂購量', '每月自動配送', '專業諮詢服務']
    },
    {
      id: '12months',
      duration: '12個月',
      monthlyPrice: 2950,
      totalPrice: 35400,
      discount: 12,
      isMinimum: false,
      features: ['年度優惠 12% OFF', '每月自動配送', '專業諮詢服務', '免費健康追蹤', '季度配方調整']
    }
  ];

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen py-16">
        <div className="max-w-md mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
          >
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-purple-600 bg-clip-text text-transparent">
                營養中心登入
              </h1>
              <p className="text-gray-600 mt-2">請輸入您的身分證後五碼及生日</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  身分證後五碼
                </label>
                <input
                  type="text"
                  maxLength={5}
                  value={loginData.idSuffix}
                  onChange={(e) => setLoginData({...loginData, idSuffix: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  placeholder="請輸入後五碼"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  生日
                </label>
                <input
                  type="date"
                  value={loginData.birthday}
                  onChange={(e) => setLoginData({...loginData, birthday: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-4 bg-gradient-to-r from-pink-400 to-purple-500 text-white font-semibold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                登入查看報告
              </button>
            </form>

            <div className="mt-8 p-4 bg-blue-50 rounded-xl">
              <p className="text-sm text-blue-800">
                <Shield className="h-4 w-4 inline mr-2" />
                您的個人資料受到完整保護，我們遵循嚴格的隱私政策。
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Progress Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-12"
        >
          <div className="flex items-center space-x-8">
            {[
              { id: 'report', name: '檢測報告', icon: FileText },
              { id: 'recommendation', name: '產品建議', icon: Shield },
              { id: 'order', name: '訂購方案', icon: ShoppingCart }
            ].map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div className={`flex items-center justify-center w-12 h-12 rounded-full ${
                  currentStep === step.id ? 'bg-gradient-to-r from-pink-400 to-purple-500 text-white' :
                  ['report', 'recommendation'].includes(step.id) && currentStep === 'order' ? 'bg-green-500 text-white' :
                  'bg-gray-200 text-gray-600'
                }`}>
                  {(['report', 'recommendation'].includes(step.id) && currentStep === 'order') ? 
                    <Check className="h-6 w-6" /> : <step.icon className="h-6 w-6" />
                  }
                </div>
                <span className="ml-3 font-medium text-gray-700">{step.name}</span>
                {index < 2 && <div className="w-16 h-0.5 bg-gray-300 ml-4"></div>}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Report View */}
        {currentStep === 'report' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">您的營養檢測報告</h1>
              <p className="text-xl text-gray-600">基於科學檢測為您提供個人化營養建議</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {reportCategories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100"
                >
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-gray-800">{category.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      category.status === '優秀' ? 'bg-green-100 text-green-800' :
                      category.status === '良好' ? 'bg-blue-100 text-blue-800' :
                      category.status === '需要改善' ? 'bg-orange-100 text-orange-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {category.status}
                    </span>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-600">健康評分</span>
                      <span className="text-lg font-bold text-gray-800">{category.score}/100</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className={`h-3 rounded-full bg-gradient-to-r ${category.color}`}
                        style={{ width: `${category.score}%` }}
                      ></div>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">{category.description}</p>

                  {/* 詳細檢測項目 */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3 text-sm">檢測項目詳情</h4>
                    <div className="space-y-2">
                      {category.items.map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <span className="text-sm text-gray-700">{item.name}</span>
                          <div className="flex items-center">
                            <span className="text-xs text-gray-600 mr-2">{item.result}</span>
                            <div className={`w-3 h-3 rounded-full ${
                              item.status === 'good' ? 'bg-green-400' :
                              item.status === 'warning' ? 'bg-orange-400' :
                              'bg-red-400'
                            }`}></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3 text-sm">建議補充營養素</h4>
                    <div className="space-y-2">
                      {category.recommendations.map((item, idx) => (
                        <div key={idx} className="flex items-center">
                          <Check className="h-4 w-4 text-green-500 mr-2" />
                          <span className="text-xs text-gray-600">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* 基因風險評估 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">基因風險評估</h2>
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                {geneticRiskFactors.map((factor, index) => (
                  <div key={index}>
                    <h3 className="text-lg font-bold text-gray-800 mb-4">{factor.category}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {factor.items.map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between p-4 bg-green-50 rounded-lg border border-green-200">
                          <span className="text-sm font-medium text-gray-700">{item.name}</span>
                          <div className="flex items-center">
                            <span className="text-xs text-green-700 mr-2">{item.result}</span>
                            <div className="w-3 h-3 rounded-full bg-green-400"></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="text-center">
              <button
                onClick={() => setCurrentStep('recommendation')}
                className="px-8 py-4 bg-gradient-to-r from-pink-400 to-purple-500 text-white font-semibold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                查看個人化產品建議
              </button>
            </div>
          </motion.div>
        )}

        {/* Recommendation View */}
        {currentStep === 'recommendation' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">專屬客製化產品</h1>
              <p className="text-xl text-gray-600">根據您的檢測報告量身打造</p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-10 w-10 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-2">{customProduct.name}</h2>
                  <p className="text-gray-600">{customProduct.description}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-6">配方成分</h3>
                    <div className="space-y-4">
                      {customProduct.ingredients.map((ingredient, index) => (
                        <div key={index} className="p-4 bg-gray-50 rounded-xl">
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="font-semibold text-gray-800">{ingredient.name}</h4>
                            <span className="text-sm bg-pink-100 text-pink-800 px-2 py-1 rounded-full">
                              {ingredient.amount}
                            </span>
                          </div>
                          <p className="text-sm text-gray-600">{ingredient.purpose}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-6">服務特色</h3>
                    <div className="space-y-4">
                      {customProduct.features.map((feature, index) => (
                        <div key={index} className="flex items-center p-4 bg-blue-50 rounded-xl">
                          <Check className="h-5 w-5 text-blue-500 mr-3" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 p-6 bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl text-center">
                      <div className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-purple-600 bg-clip-text text-transparent mb-2">
                        NT$ {customProduct.monthlyPrice.toLocaleString()}
                      </div>
                      <div className="text-gray-600">每月價格</div>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <button
                    onClick={() => setCurrentStep('order')}
                    className="px-8 py-4 bg-gradient-to-r from-pink-400 to-purple-500 text-white font-semibold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                  >
                    立即訂購
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Order View */}
        {currentStep === 'order' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">選擇訂購方案</h1>
              <p className="text-xl text-gray-600">選擇最適合您的訂購計劃</p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {pricingPlans.map((plan) => (
                  <motion.div
                    key={plan.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className={`relative p-8 rounded-2xl border-2 cursor-pointer transition-all duration-200 ${
                      selectedPlan === plan.id
                        ? 'border-pink-400 bg-pink-50 shadow-lg'
                        : 'border-gray-200 bg-white hover:border-pink-200'
                    }`}
                    onClick={() => setSelectedPlan(plan.id)}
                  >
                    {plan.discount > 0 && (
                      <div className="absolute -top-3 left-8 bg-gradient-to-r from-pink-400 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                        省 {plan.discount}%
                      </div>
                    )}
                    {plan.isMinimum && (
                      <div className="absolute -top-3 right-8 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                        最低訂購量
                      </div>
                    )}

                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.duration}</h3>
                      <div className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-purple-600 bg-clip-text text-transparent mb-2">
                        NT$ {plan.monthlyPrice.toLocaleString()}
                      </div>
                      <div className="text-gray-600">每月</div>
                      <div className="text-lg text-gray-700 mt-2">
                        總計: NT$ {plan.totalPrice.toLocaleString()}
                      </div>
                    </div>

                    <div className="space-y-3">
                      {plan.features.map((feature, index) => (
                        <div key={index} className="flex items-center">
                          <Check className="h-5 w-5 text-green-500 mr-3" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Order Summary */}
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">訂購摘要</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">產品</span>
                    <span className="font-medium">專屬營養配方</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">訂購期間</span>
                    <span className="font-medium">
                      {pricingPlans.find(p => p.id === selectedPlan)?.duration}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">每月價格</span>
                    <span className="font-medium">
                      NT$ {pricingPlans.find(p => p.id === selectedPlan)?.monthlyPrice.toLocaleString()}
                    </span>
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex justify-between text-xl font-bold">
                      <span>總計金額</span>
                      <span className="bg-gradient-to-r from-pink-400 to-purple-600 bg-clip-text text-transparent">
                        NT$ {pricingPlans.find(p => p.id === selectedPlan)?.totalPrice.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Payment Options */}
                <div className="mb-8">
                  <h4 className="font-semibold text-gray-800 mb-4">付款方式</h4>
                  <div className="space-y-3">
                    <label className="flex items-center p-4 border border-gray-200 rounded-xl cursor-pointer hover:bg-gray-50">
                      <input type="radio" name="payment" className="mr-3" defaultChecked />
                      <CreditCard className="h-5 w-5 mr-3 text-gray-600" />
                      <span>信用卡自動扣款</span>
                    </label>
                    <label className="flex items-center p-4 border border-gray-200 rounded-xl cursor-pointer hover:bg-gray-50">
                      <input type="radio" name="payment" className="mr-3" />
                      <Clock className="h-5 w-5 mr-3 text-gray-600" />
                      <span>銀行轉帳</span>
                    </label>
                  </div>
                </div>

                {/* Terms */}
                <div className="mb-8 p-4 bg-blue-50 rounded-xl">
                  <h4 className="font-semibold text-blue-800 mb-2">重要說明</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• 每月自動配送，可隨時暫停或取消</li>
                    <li>• 產品配方可根據健康狀況調整</li>
                    <li>• 享有30天滿意保證</li>
                    <li>• 專業營養師持續追蹤服務</li>
                  </ul>
                </div>

                <div className="text-center">
                  <button className="w-full px-8 py-4 bg-gradient-to-r from-pink-400 to-purple-500 text-white font-semibold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                    確認訂購並付款
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default NutritionCenter;