
import { Leaf, Sprout, Sun, CloudRain, TrendingUp, Shield, Zap, Users } from 'lucide-react';

const AboutUs = () => {
  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lightning Fast Predictions",
      description: "Real-time disease detection and crop recommendation based on soil and weather conditions"
    },
    {
      icon: <Leaf className="w-6 h-6" />,
      title: "Made for Indian Farmers",
      description: "Our AI is trained specifically for regional crops, soil conditions, and local agricultural challenges"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Preventive Agriculture",
      description: "We don't just detect diseases—we help prevent outbreaks before they devastate your crops"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Technology for Everyone",
      description: "Bringing cutting-edge AI solutions to farmers who need them most, regardless of tech experience"
    }
  ];

  const services = [
    {
      icon: <Sprout className="w-8 h-8" />,
      title: "AI-Powered Disease Detection",
      description: "Upload an image of your crop and our AI instantly diagnoses the issue with confidence scores and detailed treatment plans.",
      gradient: "from-emerald-400 to-teal-500"
    },
    {
      icon: <Sun className="w-8 h-8" />,
      title: "Smart Crop Recommendations", 
      description: "Our AI suggests the best crops based on soil type, climate, and regional conditions to ensure maximum yields.",
      gradient: "from-amber-400 to-orange-500"
    },
    {
      icon: <CloudRain className="w-8 h-8" />,
      title: "Early Warning System",
      description: "Stay ahead with predictive alerts about potential crop disease outbreaks and weather patterns in your area.",
      gradient: "from-blue-400 to-indigo-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-lime-50 via-emerald-50 to-teal-50 font-sans overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-green-200 rounded-full opacity-20 animate-bounce" style={{animationDelay: '0s', animationDuration: '3s'}}></div>
        <div className="absolute top-32 right-20 w-24 h-24 bg-lime-300 rounded-full opacity-15 animate-bounce" style={{animationDelay: '1s', animationDuration: '4s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-emerald-200 rounded-full opacity-25 animate-bounce" style={{animationDelay: '2s', animationDuration: '5s'}}></div>
        <div className="absolute bottom-40 right-1/3 w-16 h-16 bg-teal-200 rounded-full opacity-20 animate-bounce" style={{animationDelay: '0.5s', animationDuration: '3.5s'}}></div>
      </div>

      <div className="relative z-10 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Hero Header */}
          <div className="text-center mb-20">
            <h1 className="text-6xl font-bold bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent mb-6 tracking-tight">
              About Agri Oracle
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto font-medium">
              🌾 Revolutionizing agriculture with cutting-edge AI technology. 
              Empowering farmers with instant crop disease detection, intelligent recommendations, 
              and data-driven insights for maximum yield and sustainability.
            </p>
          </div>

          {/* Services Grid */}
          <div className="mb-24">
            <h2 className="text-4xl font-bold text-center text-green-800 mb-16">What We Do</h2>
            <div className="grid gap-8 md:grid-cols-3">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="group bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-300 border border-green-100 hover:border-green-300 relative overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl mb-6 text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-green-800 mb-4 group-hover:text-green-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="mb-24">
            <h2 className="text-4xl font-bold text-center text-green-800 mb-16">Why Choose Agri Oracle?</h2>
            <div className="bg-white rounded-3xl shadow-2xl p-12 border border-green-100">
              <div className="grid gap-8 md:grid-cols-2">
                {features.map((feature, index) => (
                  <div 
                    key={index}
                    className="flex items-start space-x-4 p-6 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 transition-all duration-300 transform hover:scale-105 border border-green-200"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white shadow-lg">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-green-800 mb-2">{feature.title}</h3>
                      <p className="text-gray-700 text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Vision Section */}
          <div className="text-center">
            <h2 className="text-4xl font-bold text-green-800 mb-12">Our Vision</h2>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 rounded-3xl opacity-10 transform rotate-1"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl p-12 mx-auto max-w-4xl border-2 border-green-200">
                <div className="flex items-center justify-center mb-8">
                  <Users className="w-12 h-12 text-green-600 mr-4" />
                  <Sprout className="w-16 h-16 text-emerald-500" />
                  <TrendingUp className="w-12 h-12 text-teal-600 ml-4" />
                </div>
                <p className="text-xl text-gray-700 leading-relaxed font-medium">
                  We envision a world where every farmer has access to intelligent tools that boost
                  productivity and sustainability. <span className="text-green-600 font-bold">Agri Oracle</span> blends 
                  cutting-edge innovation with traditional farming wisdom, enabling farmers to thrive 
                  in our data-driven agricultural future.
                </p>
                <div className="mt-8 inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                  <Leaf className="w-5 h-5 mr-2" />
                  Growing Together, Smartly
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;