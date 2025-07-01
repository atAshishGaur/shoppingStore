import {
  Phone, Mail, MapPin, Instagram, Facebook, Twitter, Youtube, 
} from 'lucide-react';
const Footer=()=>{
     return (
    <footer className="bg-gray-900 text-white py-10 px-6 md:px-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

        {/* Company */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Company</h2>
          <ul className="space-y-2 text-sm">
            <li>Help / Support & FAQ</li>
            <li>Dealership/Franchise Query</li>
            <li>Corporate Website</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Sitemap</li>
            <li>B2B Buyer Login</li>
          </ul>
        </div>

        {/* Policy & Terms */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Policy & Terms</h2>
          <ul className="space-y-2 text-sm">
            <li>Privacy Policy</li>
            <li>Shipping Policy</li>
            <li>Returns Policy</li>
            <li>Terms & Conditions</li>
            <li>Disclosure Policy</li>
            <li>Cancellation Policy</li>
          </ul>
        </div>

        {/* Customer Care */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Customer Care</h2>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-yellow-400" /> +91 9311421554
            </li>
            <li className="text-xs text-gray-400 ml-6">
              Helpline: Mon - Sat, 08:00 AM to 05:00 PM
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-green-400" /> +91 9311421553
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-blue-400" /> support@v2kart.com
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-red-400 mt-1" />
              <span className="text-sm">
                V2 Retail Ltd,<br />
                Khasra No - 928, Extended Lal Dora Abadi Village,<br />
                Kapashera Border, Tehsil Vasant Vihar,<br />
                New Delhi - 110037
              </span>
            </li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Follow Us</h2>
          <div className="flex gap-4">
            <Instagram className="w-5 h-5 hover:text-pink-500 cursor-pointer" />
            <Facebook className="w-5 h-5 hover:text-blue-500 cursor-pointer" />
            <Twitter className="w-5 h-5 hover:text-sky-400 cursor-pointer" />
            <Youtube className="w-5 h-5 hover:text-red-600 cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer