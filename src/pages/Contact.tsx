import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('感謝您的來信！我們會盡快回覆您。');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: '電話聯絡',
      details: ['02-1234-5678', '週一至週五 09:00-18:00'],
      color: 'from-pink-400 to-rose-400'
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: '電子郵件',
      details: ['info@blnc.com.tw', '24小時內回覆'],
      color: 'from-blue-400 to-cyan-400'
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: '營業地址',
      details: ['台北市信義區健康路123號', '7樓營養諮詢中心'],
      color: 'from-green-400 to-emerald-400'
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: '營業時間',
      details: ['週一至週五 09:00-18:00', '週六 10:00-16:00'],
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
          <h1 className="text-5xl font-bold bg-gradient-to-r from-primary-400 to-accent-600 bg-clip-text text-transparent mb-6">
            聯絡我們
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            有任何問題或需要專業諮詢嗎？我們的專業團隊隨時為您服務
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-8">聯絡資訊</h2>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="flex items-start p-6 bg-white rounded-2xl shadow-lg border border-gray-100"
                >
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${getContactColor(index)} text-white mr-4 flex-shrink-0`}>
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{info.title}</h3>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600">{detail}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* FAQ Section */}
            <div className="mt-12 p-8 bg-gradient-to-r from-blue-50 via-purple-25 to-pink-50 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">常見問題</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">如何開始使用 BLNC 的服務？</h4>
                  <p className="text-gray-600">請先到「您的精準營養中心」進行登入，我們會根據您的檢測報告提供個人化建議。</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">產品多久配送一次？</h4>
                  <p className="text-gray-600">我們提供每月自動配送服務，您也可以選擇其他配送頻率。</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">如何修改訂單或暫停配送？</h4>
                  <p className="text-gray-600">請聯絡我們的客服團隊，我們會協助您調整服務內容。</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-8">發送訊息</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    姓名 *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                    placeholder="請輸入您的姓名"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    電話
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                    placeholder="請輸入您的電話"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  電子郵件 *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                  placeholder="請輸入您的電子郵件"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  主旨 *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                >
                  <option value="">請選擇諮詢主旨</option>
                  <option value="product">產品諮詢</option>
                  <option value="service">服務諮詢</option>
                  <option value="order">訂單問題</option>
                  <option value="nutrition">營養諮詢</option>
                  <option value="other">其他問題</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  訊息內容 *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="請詳細描述您的問題或需求..."
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary-400 to-accent-500 text-white font-semibold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                <Send className="mr-2 h-5 w-5" />
                發送訊息
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

// Helper function for contact info colors
const getContactColor = (index: number) => {
  const colors = [
    'from-primary-400 to-accent-400',
    'from-secondary-400 to-secondary-500',
    'from-primary-500 to-primary-600',
    'from-accent-400 to-accent-500'
  ];
  return colors[index] || colors[0];
};

export default Contact;