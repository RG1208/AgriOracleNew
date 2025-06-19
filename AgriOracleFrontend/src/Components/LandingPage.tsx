import React from 'react';
import { Star, User, Zap, Leaf, TrendingUp, Shield, Sun, Sprout } from 'lucide-react';

const LandingPage: React.FC = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "AI-Powered Insights",
      description: "Advanced machine learning algorithms analyze your crops with precision",
      gradient: "from-blue-400 to-indigo-500"
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Easy-to-Use Platform",
      description: "Intuitive interface designed specifically for farmers",
      gradient: "from-green-400 to-emerald-500"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Real-time Analysis",
      description: "Get instant results and recommendations for immediate action",
      gradient: "from-purple-400 to-pink-500"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Sustainable Solutions",
      description: "Eco-friendly approaches that protect your land for future generations",
      gradient: "from-teal-400 to-cyan-500"
    },
    {
      icon: <Sun className="w-8 h-8" />,
      title: "Reliable Results",
      description: "Proven accuracy with thousands of successful crop predictions",
      gradient: "from-amber-400 to-orange-500"
    },
    {
      icon: <Sprout className="w-8 h-8" />,
      title: "Farmer-Centric",
      description: "Built by farmers, for farmers - understanding your unique challenges",
      gradient: "from-lime-400 to-green-500"
    }
  ];

  const reviews = [
    {
      name: "Rachit",
      rating: 5,
      review: "AgriOracle has completely changed the way I analyze market trends. The insights are precise and very useful!",
      location: "Punjab"
    },
    {
      name: "Paramjeet",
      rating: 4,
      review: "The platform is user-friendly and provides accurate predictions. Highly recommended for farmers looking to maximize their yield!",
      location: "Haryana"
    },
    {
      name: "Rishab",
      rating: 5,
      review: "The AI-powered insights are a game changer. Now, I make informed decisions backed by real data.",
      location: "Uttar Pradesh"
    },
  ];

  return (
    <div className="font-sans bg-gradient-to-br from-lime-50 via-emerald-50 to-teal-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-40 h-40 bg-green-200 rounded-full opacity-20 animate-bounce" style={{animationDelay: '0s', animationDuration: '4s'}}></div>
        <div className="absolute top-40 right-32 w-32 h-32 bg-lime-300 rounded-full opacity-15 animate-bounce" style={{animationDelay: '2s', animationDuration: '5s'}}></div>
        <div className="absolute bottom-32 left-1/3 w-24 h-24 bg-emerald-200 rounded-full opacity-25 animate-bounce" style={{animationDelay: '1s', animationDuration: '3s'}}></div>
        <div className="absolute bottom-20 right-1/4 w-20 h-20 bg-teal-200 rounded-full opacity-20 animate-bounce" style={{animationDelay: '3s', animationDuration: '4.5s'}}></div>
      </div>

      {/* Hero Section */}
      <div className="relative min-h-[700px] bg-gradient-to-br from-green-600 via-emerald-600 to-teal-700 overflow-hidden">
        {/* Hero Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-white rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-white rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="relative z-10 flex items-center justify-center min-h-[700px] px-6">
          <div className="text-center text-white max-w-5xl">
            <h1 className="text-7xl font-bold mb-6 tracking-tight leading-tight">
              Harvesting the Power of 
              <span className="block bg-gradient-to-r from-lime-200 to-emerald-200 bg-clip-text text-transparent">
                Artificial Intelligence
              </span>
            </h1>
            <p className="text-2xl font-medium mb-8 text-green-100 leading-relaxed">
              🌾 Smart insights for a greener tomorrow - Empowering farmers with edge-cutting technology
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-green-700 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 hover:bg-green-50">
                Get Started Today
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white hover:text-green-700 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <section className="relative py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent mb-6">
              Why Choose AgriOracle?
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Discover the revolutionary features that make AgriOracle the trusted choice for modern farmers
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-green-100 hover:border-green-300 transform hover:-translate-y-3 relative overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-xl mb-6 text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-green-800 mb-4 group-hover:text-green-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="relative py-24 px-6 bg-gradient-to-r from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent mb-6">
              What Farmers Say
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Real stories from farmers who transformed their agriculture with AgriOracle
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((user, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-green-100 hover:border-green-300 transform hover:-translate-y-2 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-emerald-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                <div className="flex items-center mb-6">
                  <div className="p-4 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full shadow-lg">
                    <User className="w-8 h-8 text-white" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-green-900 text-lg">{user.name}</h4>
                    <p className="text-sm text-gray-600">{user.location}</p>
                    <div className="flex mt-2">
                      {[...Array(user.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 italic leading-relaxed text-lg">
                  "{user.review}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-24 px-6 bg-gradient-to-br from-green-600 via-emerald-600 to-teal-700">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-40 h-40 bg-white rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-32 h-32 bg-white rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Agriculture?</h2>
          <p className="text-xl mb-8 text-green-100 leading-relaxed">
            Join thousands of farmers who are already using AgriOracle to boost their productivity and sustainability
          </p>
          <button className="px-10 py-4 bg-white text-green-700 rounded-full font-bold text-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 hover:bg-green-50">
            Start Your Journey Today
          </button>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;