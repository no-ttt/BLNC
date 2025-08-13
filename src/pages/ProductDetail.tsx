import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Heart, ShoppingCart, Shield, Award, Truck, RefreshCw, Check, Plus, Minus } from 'lucide-react';

const ProductDetail = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');

  const product = {
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
      {
        icon: '😴',
        title: '改善睡眠品質',
        description: '鎂有助於放鬆神經系統，促進深度睡眠'
      },
      {
        icon: '💪',
        title: '舒緩肌肉緊張',
        description: '維持正常肌肉功能，減少抽筋與緊繃'
      },
      {
        icon: '🧠',
        title: '支持神經健康',
        description: '維護神經傳導功能，提升專注力'
      },
      {
        icon: '❤️',
        title: '維護心血管',
        description: '支持心臟正常節律，維持血壓穩定'
      }
    ],
    specifications: {
      '主要成分': '海洋鎂 400mg',
      '膠囊數量': '60粒',
      '服用方式': '每日1-2粒，餐後服用',
      '保存期限': '3年',
      '製造地': '台灣',
      '認證': 'ISO22000、HACCP'
    }
  };

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

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h1 className="text-4xl font-bold text-gray-800 mb-2">{product.name}</h1>
              <p className="text-xl text-gray-600 mb-4">{product.subtitle}</p>
              
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center">
                  {renderStars(product.rating)}
                  <span className="ml-2 text-sm text-gray-600">
                    {product.rating} ({product.reviewCount} 則評價)
                  </span>
                </div>
              </div>

              <div className="flex items-center space-x-4 mb-8">
                <div className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-purple-600 bg-clip-text text-transparent">
                  NT$ {product.price.toLocaleString()}
                </div>
                <div className="text-xl text-gray-400 line-through">
                  NT$ {product.originalPrice.toLocaleString()}
                </div>
                <div className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-medium">
                  省 NT$ {product.originalPrice - product.price}
                </div>
              </div>
            </div>

            {/* Key Features */}
            <div className="bg-blue-50 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">產品特色</h3>
              <div className="space-y-3">
                {product.keyFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <Check className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <span className="text-gray-700 font-medium">數量：</span>
                <div className="flex items-center border border-gray-300 rounded-xl">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 hover:bg-gray-50 transition-colors"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="px-6 py-3 font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 hover:bg-gray-50 transition-colors"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button className="flex items-center justify-center px-8 py-4 bg-gradient-to-r from-pink-400 to-purple-500 text-white font-semibold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  加入購物車
                </button>
                <button className="flex items-center justify-center px-8 py-4 border-2 border-pink-400 text-pink-600 font-semibold rounded-xl hover:bg-pink-50 transition-all duration-200">
                  <Heart className="mr-2 h-5 w-5" />
                  加入收藏
                </button>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-gray-200">
              <div className="text-center">
                <Shield className="h-8 w-8 text-green-500 mx-auto mb-2" />
                <div className="text-sm text-gray-600">品質保證</div>
              </div>
              <div className="text-center">
                <Truck className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                <div className="text-sm text-gray-600">免運配送</div>
              </div>
              <div className="text-center">
                <RefreshCw className="h-8 w-8 text-purple-500 mx-auto mb-2" />
                <div className="text-sm text-gray-600">30天退換</div>
              </div>
              <div className="text-center">
                <Award className="h-8 w-8 text-orange-500 mx-auto mb-2" />
                <div className="text-sm text-gray-600">國際認證</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Benefits Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">為什麼選擇海洋鎂？</h2>
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
          transition={{ duration: 0.8, delay: 0.6 }}
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
                  BLNC 海洋鎂膠囊採用來自深海的純淨鎂離子，經過特殊萃取工藝，保留了鎂的天然活性。鎂是人體必需的礦物質之一，參與超過300種酶反應，對維持正常的生理機能至關重要。
                </p>
                <p className="text-gray-600 leading-relaxed">
                  現代人由於生活壓力大、飲食不均衡，容易出現鎂缺乏的問題。我們的海洋鎂膠囊能有效補充身體所需的鎂離子，幫助您維持最佳的健康狀態。
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
              </div>
            )}

            {activeTab === 'ingredients' && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-800">成分說明</h3>
                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-semibold text-gray-800 mb-4">主要成分</h4>
                  <div className="space-y-4">
                    <div className="border-l-4 border-blue-400 pl-4">
                      <h5 className="font-medium text-gray-800">海洋鎂 (400mg)</h5>
                      <p className="text-sm text-gray-600 mt-1">
                        來自深海的天然鎂離子，生物利用率高，易於人體吸收利用。
                      </p>
                    </div>
                    <div className="border-l-4 border-green-400 pl-4">
                      <h5 className="font-medium text-gray-800">植物性膠囊殼</h5>
                      <p className="text-sm text-gray-600 mt-1">
                        採用天然植物纖維製成，適合素食者，無動物成分。
                      </p>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-500">
                  * 本產品不含人工色素、防腐劑、麩質，通過重金屬檢測。
                </p>
              </div>
            )}

            {activeTab === 'usage' && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-800">使用方法</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-6 bg-pink-50 rounded-xl">
                    <div className="w-12 h-12 bg-pink-400 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                      1
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-2">建議用量</h4>
                    <p className="text-sm text-gray-600">每日1-2粒，建議晚餐後服用</p>
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
                  </ul>
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