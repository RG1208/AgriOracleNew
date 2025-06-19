import { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log(formData);
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="bg-gray-100 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-green-900 mb-10">Contact Us</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-md hover:-translate-y-1 transition-transform">
            <h2 className="text-2xl font-semibold text-green-900 mb-6">Have Questions?</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 font-medium mb-1">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">Message</label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700 resize-vertical"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-green-800 hover:bg-green-900 text-white px-6 py-3 rounded-lg font-semibold transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="bg-green-900 text-white p-8 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <span className="text-2xl">📞</span>
                <div>
                  <h3 className="font-semibold text-lg">Phone</h3>
                  <p>+91 XXXXXXXXXX</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-2xl">📧</span>
                <div>
                  <h3 className="font-semibold text-lg">Email</h3>
                  <p>agrioracle@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-2xl">📍</span>
                <div>
                  <h3 className="font-semibold text-lg">Address</h3>
                  <p>VIPS-TC, Pitampura</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
