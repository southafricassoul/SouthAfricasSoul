import { Leaf, Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-emerald-900 via-emerald-800 to-stone-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="w-8 h-8 text-amber-400" />
              <div>
                <h3 className="text-xl font-bold">SouthAfrica's Soul</h3>
                <p className="text-xs text-emerald-200 italic">Reconnect. Heal. Root Yourself.</p>
              </div>
            </div>
            <p className="text-emerald-100 leading-relaxed">
              Celebrating the power of our land through indigenous remedies and natural wellness.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-amber-400">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-emerald-100 hover:text-amber-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-emerald-100 hover:text-amber-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#products" className="text-emerald-100 hover:text-amber-400 transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="#workshops" className="text-emerald-100 hover:text-amber-400 transition-colors">
                  Workshops
                </a>
              </li>
              <li>
                <a href="#blog" className="text-emerald-100 hover:text-amber-400 transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-amber-400">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Mail className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <a href="mailto:hello@southafricassoul.co.za" className="text-emerald-100 hover:text-amber-400 transition-colors">
                  hello@southafricassoul.co.za
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <a href="tel:+27123456789" className="text-emerald-100 hover:text-amber-400 transition-colors">
                  +27 12 345 6789
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <span className="text-emerald-100">
                  123 Heritage Lane<br />Cape Town, 8001
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-amber-400">Follow Us</h4>
            <div className="flex gap-3 mb-6">
              <a
                href="https://www.instagram.com/southafricassoul/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-br from-pink-500 to-amber-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
            <p className="text-emerald-100 text-sm">
              Join our community for daily inspiration and herbal wisdom
            </p>
          </div>
        </div>

        <div className="border-t border-emerald-700 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-emerald-200 text-sm">
            &copy; 1992 SouthAfrica's Soul. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-emerald-200 hover:text-amber-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-emerald-200 hover:text-amber-400 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-emerald-200 hover:text-amber-400 transition-colors">
              Sustainability
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
