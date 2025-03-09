import { Instagram, MapPin, Phone} from 'lucide-react'
import React from 'react'

function Footer() {
  return (
    <>
 <footer className="bg-gray-100 text-gray-800">
      <div className="container mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          {/* Logo & Info Perusahaan */}
          <div className="w-1/3 flex flex-col space-y-4">
            <img
              src="/images/logo-reva-baju-anak.png"
              alt="Reva Logo"
              className="w-32"
            />
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <MapPin className="text-gray-600 size-15" />
                <p className="text-sm"> Jl. Prof. Moch Yamin, Sayang, Kec. Cianjur, Kabupaten Cianjur, Jawa Barat 43213</p>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="text-gray-600 pl-2 size-8" />
                <p className="text-sm">+62 857-0256-0885</p>
              </div>
            </div>
          </div>

          {/* Navigasi */}
          <div className="w-1/3 ml-50">
            <h3 className="text-lg font-semibold mb-3">Navigasi</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-sm hover:text-jambu transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-sm hover:text-jambu transition">
                  About
                </a>
              </li>
              <li>
                <a href="/product" className="text-sm hover:text-jambu transition">
                  Product
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="w-1/3 ml-10">
            <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-jambu transition">
                <Instagram size={24} />
              </a>
              <a href="#" className="hover:text-jambu transition">
                <img src="/icon/tiktok.svg" alt="TikTok" className="w-6 hover:text-jambu" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Garis Pemisah */}
      <div className="border-t border-gray-300 py-4 text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Reva Baju Anak. All rights reserved.</p>
      </div>
    </footer>
    </>
  )
}

export default Footer