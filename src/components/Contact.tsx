import { Mail, Phone, MapPin, Instagram, Facebook, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-white to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-emerald-900 mb-4">Get in Touch</h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto rounded-full mb-6" />
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-emerald-900 mb-6">Contact Information</h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-emerald-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-emerald-900 mb-1">Email</h4>
                    <a href="mailto:hello@southafricassoul.co.za" className="text-stone-600 hover:text-emerald-700 transition-colors">
                      hello@southafricassoul.co.za
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-emerald-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-emerald-900 mb-1">Phone / WhatsApp</h4>
                    <a href="tel:+27123456789" className="text-stone-600 hover:text-emerald-700 transition-colors">
                      +27 12 345 6789
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-emerald-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-emerald-900 mb-1">Location</h4>
                    <p className="text-stone-600">
                      123 Heritage Lane<br />
                      Cape Town, 8001<br />
                      South Africa
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-emerald-900 mb-6">Follow Us</h3>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-br from-pink-500 to-amber-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform"
                >
                  <Facebook className="w-6 h-6" />
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-700 to-teal-700 rounded-xl p-8 text-white">
              <h3 className="text-xl font-bold mb-3">Newsletter</h3>
              <p className="mb-4 text-emerald-50">
                Stay updated on new products, workshops, and herbal wisdom
              </p>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 rounded-lg text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
                <button
                  type="submit"
                  className="bg-amber-600 hover:bg-amber-700 px-4 py-2 rounded-lg transition-colors"
                >
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8 border border-emerald-100">
              <h3 className="text-2xl font-bold text-emerald-900 mb-6">Send us a Message</h3>

              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-stone-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-stone-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-stone-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={6}
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-emerald-700 hover:bg-emerald-800 text-white py-4 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
