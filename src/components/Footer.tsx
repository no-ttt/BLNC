import React from 'react';
import { Heart, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-primary-100 to-accent-100 border-t border-primary-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full flex items-center justify-center">
                <Heart className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">
                BLNC
              </span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              為您提供最專業的客製化營養補充品，讓健康成為生活的一部分。
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 mb-4">快速連結</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="/about" className="hover:text-primary-500 transition-colors">關於我們</a></li>
              <li><a href="/health-column" className="hover:text-primary-500 transition-colors">健康專欄</a></li>
              <li><a href="/reviews" className="hover:text-primary-500 transition-colors">消費者好評</a></li>
              <li><a href="/nutrition-center" className="hover:text-primary-500 transition-colors">營養中心</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 mb-4">服務項目</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>營養檢測分析</li>
              <li>客製化保健品</li>
              <li>健康諮詢服務</li>
              <li>定期配送服務</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 mb-4">聯絡資訊</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>02-1234-5678</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@blnc.com.tw</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>台北市信義區健康路123號</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-200 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-500">
            © 2025 BLNC. All rights reserved. | 客製化營養品專家
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;