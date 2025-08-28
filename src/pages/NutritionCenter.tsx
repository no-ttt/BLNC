import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Calendar, FileText, ShoppingCart, Shield, CreditCard, Clock, Check, Mail, Lock, UserPlus } from 'lucide-react';

const NutritionCenter = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [loginData, setLoginData] = useState({
    idNumber: '',
    birthday: ''
  });
  const [registerData, setRegisterData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    birthday: '',
    idNumber: ''
  });
  const [currentStep, setCurrentStep] = useState('login'); // login, report, order
  const [selectedPlan, setSelectedPlan] = useState('30days');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginData.idNumber && loginData.birthday) {
      setIsLoggedIn(true);
      setCurrentStep('report');
    }
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (registerData.password !== registerData.confirmPassword) {
      alert('密碼確認不符！');
      return;
    }
    if (registerData.name && registerData.email && registerData.password && registerData.idNumber) {
      alert('註冊成功！請登入您的帳號。');
      setShowRegister(false);
      setRegisterData({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        phone: '',
        birthday: '',
        idNumber: ''
      });
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
      id: '30days',
      duration: '30天',
      monthlyPrice: 3280,
      totalPrice: 3280,
      discount: 0,
      isMinimum: false,
      features: ['體驗方案', '每月自動配送', '專業諮詢服務', '可隨時取消']
    },
    {
      id: '90days',
      duration: '90天',
      monthlyPrice: 2950,
      totalPrice: 8850,
      discount: 10,
      isMinimum: false,
      features: ['季度優惠 10% OFF', '每月自動配送', '專業諮詢服務', '免費健康追蹤', '配方調整服務']
    }
  ];

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen py-16">
        <div className="max-w-md mx-auto px-4">
          {!showRegister ? (
            // 登入頁面
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
            >
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-primary-400 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="h-8 w-8 text-white" />
                </div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-primary-400 to-accent-600 bg-clip-text text-transparent">
                  會員登入
                </h1>
                <p className="text-gray-600 mt-2">登入您的 BLNC 會員帳號</p>
              </div>

              <form onSubmit={handleLogin} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    身分證後五碼
                  </label>
                  <input
                    type="text"
                    value={loginData.idNumber}
                    onChange={(e) => setLoginData({...loginData, idNumber: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="請輸入身分證後五碼"
                    maxLength={5}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    生日
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="date"
                      value={loginData.birthday}
                      onChange={(e) => setLoginData({...loginData, birthday: e.target.value})}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="請選擇您的生日"
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-gradient-to-r from-primary-400 to-accent-500 text-white font-semibold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                >
                  登入
                </button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-gray-600">
                  還沒有帳號？
                  <button
                    onClick={() => setShowRegister(true)}
                    className="text-primary-600 hover:text-primary-700 font-medium ml-1"
                  >
                    立即註冊
                  </button>
                </p>
              </div>

              <div className="mt-8 p-4 bg-blue-50 rounded-xl">
                <p className="text-sm text-blue-800">
                  <Shield className="h-4 w-4 inline mr-2" />
                  您的個人資料受到完整保護，我們遵循嚴格的隱私政策。
                </p>
              </div>
            </motion.div>
          ) : (
            // 註冊頁面
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
            >
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-primary-400 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <UserPlus className="h-8 w-8 text-white" />
                </div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-primary-400 to-accent-600 bg-clip-text text-transparent">
                  會員註冊
                </h1>
                <p className="text-gray-600 mt-2">加入 BLNC 開始您的健康之旅</p>
              </div>

              <form onSubmit={handleRegister} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    姓名 *
                  </label>
                  <input
                    type="text"
                    value={registerData.name}
                    onChange={(e) => setRegisterData({...registerData, name: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="請輸入您的姓名"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    電子郵件 *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="email"
                      value={registerData.email}
                      onChange={(e) => setRegisterData({...registerData, email: e.target.value})}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="請輸入您的電子郵件"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      密碼 *
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="password"
                        value={registerData.password}
                        onChange={(e) => setRegisterData({...registerData, password: e.target.value})}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="請輸入密碼"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      確認密碼 *
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="password"
                        value={registerData.confirmPassword}
                        onChange={(e) => setRegisterData({...registerData, confirmPassword: e.target.value})}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="請再次輸入密碼"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    手機號碼
                  </label>
                  <input
                    type="tel"
                    value={registerData.phone}
                    onChange={(e) => setRegisterData({...registerData, phone: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="請輸入您的手機號碼"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    生日
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="date"
                      value={registerData.birthday}
                      onChange={(e) => setRegisterData({...registerData, birthday: e.target.value})}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    身分證後五碼 *
                  </label>
                  <input
                    type="text"
                    value={registerData.idNumber}
                    onChange={(e) => setRegisterData({...registerData, idNumber: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="請輸入身分證後五碼"
                    maxLength={5}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-gradient-to-r from-blue-400 via-purple-400 to-yellow-400 text-white font-semibold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                >
                  註冊帳號
                </button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-gray-600">
                  已經有帳號了？
                  <button
                    onClick={() => setShowRegister(false)}
                    className="text-primary-600 hover:text-primary-700 font-medium ml-1"
                  >
                    立即登入
                  </button>
                </p>
              </div>

              <div className="mt-8 p-4 bg-blue-50 rounded-xl">
                <p className="text-sm text-blue-800">
                  <Shield className="h-4 w-4 inline mr-2" />
                  註冊即表示您同意我們的服務條款和隱私政策。
                </p>
              </div>
            </motion.div>
          )}
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
              { id: 'order', name: '訂購方案', icon: ShoppingCart }
            ].map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div className={`flex items-center justify-center w-12 h-12 rounded-full ${
                  currentStep === step.id ? 'bg-gradient-to-r from-pink-400 to-purple-500 text-white' :
                  step.id === 'report' && currentStep === 'order' ? 'bg-green-500 text-white' :
                  'bg-gray-200 text-gray-600'
                }`}>
                  {(step.id === 'report' && currentStep === 'order') ? 
                    <Check className="h-6 w-6" /> : <step.icon className="h-6 w-6" />
                  }
                </div>
                <span className="ml-3 font-medium text-gray-700">{step.name}</span>
                {index < 1 && <div className="w-16 h-0.5 bg-gray-300 ml-4"></div>}
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

            {/* 保健食品配對結果 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-12 p-8 bg-white rounded-2xl shadow-lg border-2 border-primary-200"
            >
              <div className="text-center">
                <h3 className="text-2xl font-bold text-primary-600 mb-4">
                  根據報告結果為您配對的保健食品:
                </h3>
                <div className="text-xl text-primary-500 mb-4 leading-relaxed">
                  海洋鎂、海洋鈣、天然綜合維生素、藻油膠囊、UC-II 膠囊
                </div>
                <div className="text-lg text-green-600 font-medium">
                  (您將於 3 個工作天左右收到保健品)
                </div>
              </div>
            </motion.div>

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
                onClick={() => setCurrentStep('order')}
                className="w-full px-6 py-4 bg-gradient-to-r from-blue-400 via-purple-400 to-yellow-400 text-white font-semibold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                選擇訂購方案
              </button>
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
                        ? 'border-primary-400 bg-primary-50 shadow-lg'
                        : 'border-gray-200 bg-white hover:border-primary-200'
                    }`}
                    onClick={() => setSelectedPlan(plan.id)}
                  >
                    {plan.discount > 0 && (
                      <div className="absolute -top-3 left-8 bg-gradient-to-r from-primary-400 to-accent-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                        省 {plan.discount}%
                      </div>
                    )}

                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.duration}</h3>
                      <div className="text-4xl font-bold bg-gradient-to-r from-primary-400 to-accent-600 bg-clip-text text-transparent mb-2">
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
                      <span className="bg-gradient-to-r from-primary-400 to-accent-600 bg-clip-text text-transparent">
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
                  <button className="w-full px-8 py-4 bg-gradient-to-r from-blue-400 via-purple-400 to-yellow-400 text-white font-semibold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-200">
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