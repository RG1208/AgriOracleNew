import { Microscope, LineChart, Leaf, TrendingUp, Zap } from 'lucide-react';

const OurServices = () => {
  const services = [
    {
      icon: <Microscope className="w-8 h-8" />,
      title: "Image Based Disease Prediction",
      description: "Early detection of crop diseases is crucial for preventing yield loss. With AgriOracle's AI-powered image-based disease prediction, farmers can instantly diagnose plant diseases by simply uploading a photo. Our advanced machine learning models analyze leaf patterns, discoloration, and other symptoms to provide accurate disease identification and treatment recommendations.",
      image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      link: "/predict_disease",
      gradient: "from-emerald-400 to-teal-500",
      bgGradient: "from-emerald-50 to-teal-50"
    },
    {
      icon: <LineChart className="w-8 h-8" />,
      title: "Crop Recommendation",
      description: "Crop recommendation systems assist farmers in selecting the most suitable crops based on soil type, climate, water availability, and market demand. By analyzing historical data and weather patterns, these systems provide personalized suggestions.",
      image: "https://res.cloudinary.com/dx2ttgkba/image/upload/v1747338835/crop_recommendation_pkpw59.png",
      link: "/recommend_crop",
      gradient: "from-amber-400 to-orange-500",
      bgGradient: "from-amber-50 to-orange-50"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Intercropping",
      description: "Intercropping is an agricultural practice where two or more crops are grown simultaneously on the same field. This technique aims to maximize the use of space, sunlight, water, and nutrients, often resulting in better overall yield and reduced risk of crop failure.",
      image: "https://res.cloudinary.com/dx2ttgkba/image/upload/v1746891561/AgriOracle_IMG_kg9qjf.jpg",
      link: "/crop_intercropping",
      gradient: "from-blue-400 to-indigo-500",
      bgGradient: "from-blue-50 to-indigo-50"
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "General Info About Crops",
      description: "Understanding your crops is the first step to a successful harvest. AgriOracle's General Info section provides insights into growing conditions, soil requirements, ideal climate, and common diseases to help farmers make informed decisions throughout the season.",
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      link: "/general-info",
      gradient: "from-green-400 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-lime-50 via-emerald-50 to-teal-50 font-sans overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-40 h-40 bg-green-200 rounded-full opacity-20 animate-bounce" style={{animationDelay: '0s', animationDuration: '4s'}}></div>
        <div className="absolute top-40 right-32 w-32 h-32 bg-lime-300 rounded-full opacity-15 animate-bounce" style={{animationDelay: '2s', animationDuration: '5s'}}></div>
        <div className="absolute bottom-32 left-1/3 w-24 h-24 bg-emerald-200 rounded-full opacity-25 animate-bounce" style={{animationDelay: '1s', animationDuration: '3s'}}></div>
        <div className="absolute bottom-20 right-1/4 w-20 h-20 bg-teal-200 rounded-full opacity-20 animate-bounce" style={{animationDelay: '3s', animationDuration: '4.5s'}}></div>
      </div>

      <div className="relative z-10 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Hero Header */}
          <div className="text-center mb-20">
            <h1 className="text-6xl font-bold bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent mb-6 tracking-tight">
              Our Services
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto font-medium">
              🌾 Discover our comprehensive suite of AI-powered agricultural solutions designed to revolutionize farming practices and maximize crop productivity.
            </p>
          </div>

          {/* Services Grid */}
          <div className="space-y-24">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`relative overflow-hidden rounded-3xl shadow-2xl bg-gradient-to-br ${service.bgGradient} border border-green-200 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2`}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-10 left-10 w-32 h-32 bg-green-400 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-10 right-10 w-24 h-24 bg-emerald-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                </div>

                <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 p-12`}>
                  {/* Content */}
                  <div className="flex-1 relative z-10">
                    <div className="flex items-center mb-6">
                      <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl text-white shadow-lg mr-4 hover:scale-110 transition-transform duration-300`}>
                        {service.icon}
                      </div>
                      <a href={service.link} className="no-underline text-inherit group">
                        <h2 className="text-4xl font-bold text-green-800 group-hover:text-green-600 transition-colors duration-300">
                          {service.title}
                        </h2>
                      </a>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-lg mb-8">
                      {service.description}
                    </p>
                    <a 
                      href={service.link}
                      className={`inline-flex items-center px-8 py-4 bg-gradient-to-r ${service.gradient} text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group`}
                    >
                      <span>Explore Service</span>
                      <Zap className="w-5 h-5 ml-2 group-hover:animate-pulse" />
                    </a>
                  </div>

                  {/* Image */}
                  <div className="flex-1 relative">
                    <div className="relative overflow-hidden rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500">
                      <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-20`}></div>
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-80 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;