import { useState } from 'react';
import { Sprout, Sun, Bug, Leaf, TrendingUp, Shield, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

type CropKey = 'wheat' | 'rice' | 'corn';

const GeneralInfo = () => {
  const [selectedCrop, setSelectedCrop] = useState<CropKey>('wheat');

  const cropInfo: Record<CropKey, {
    title: string;
    description: string;
    growingRequirements: string[];
    fertilizerNeeds: string[];
    commonDiseases: string[];
    gradient: string;
    bgGradient: string;
  }> = {
    wheat: {
      title: 'Wheat',
      description:
        'Wheat is one of the most important cereal crops globally, serving as a staple food for billions. Proper knowledge of its growth cycle, soil conditions, and disease management can significantly improve yield and quality.',
      growingRequirements: [
        'Ideal Climate - Grows best in cool temperatures (10-25°C) with moderate rainfall.',
        'Soil Type - Prefers well-drained loamy or clayey soil with a pH between 6.0-7.5.',
        'Water Requirement - Requires 4-6 irrigations, with critical stages being crown root initiation, tillering and grain filling.',
        'Sowing Time - Best sown in October-November (Rabi season in India).',
      ],
      fertilizerNeeds: [
        'Nitrogen (N) - Boosts leaf and grain development.',
        'Phosphorus (P) - Strengthens root growth and plant establishment.',
        'Potassium (K) - Enhances disease resistance and drought tolerance.',
      ],
      commonDiseases: [
        'Rust (Yellow, Brown, & Black) - Fungal infection causing yellow or brown streaks on leaves.',
        'Powdery Mildew - White powdery coating on leaves.',
        'Loose Smut - Causes black spores in the grain.',
        'Aphids & Armyworms - Suck plant sap, weakening growth.',
      ],
      gradient: 'from-amber-400 to-orange-500',
      bgGradient: 'from-amber-50 to-orange-50'
    },
    rice: {
      title: 'Rice',
      description:
        'Rice is a staple food for more than half of the world\'s population. It is important to understand its cultivation, including water management, soil conditions, and pest control, to maximize yield and quality.',
      growingRequirements: [
        'Ideal Climate - Grows best in hot climates (25-35°C) with high rainfall.',
        'Soil Type - Prefers clay or silty soil with a pH between 5.5-6.5.',
        'Water Requirement - Requires abundant water, often grown in flooded conditions.',
        'Sowing Time - Best sown in June-July (Kharif season in India).',
      ],
      fertilizerNeeds: [
        'Nitrogen (N) - Promotes vegetative growth and grain filling.',
        'Phosphorus (P) - Helps in root development and flower formation.',
        'Potassium (K) - Improves drought resistance and disease control.',
      ],
      commonDiseases: [
        'Rice Blast - Fungal infection causing lesions on leaves and panicles.',
        'Sheath Blight - Fungal infection causing lesions on the leaf sheaths.',
        'Brown Plant Hopper - Insect pests that damage plant tissue.',
      ],
      gradient: 'from-green-400 to-emerald-500',
      bgGradient: 'from-green-50 to-emerald-50'
    },
    corn: {
      title: 'Corn',
      description:
        'Corn is a versatile crop, used for food, fodder, and industrial products. To achieve a high yield, it is crucial to understand its growing conditions, nutrient needs, and disease management.',
      growingRequirements: [
        'Ideal Climate - Grows best in warm temperatures (21-29°C) with moderate rainfall.',
        'Soil Type - Prefers well-drained, fertile soil with a pH between 6.0-6.8.',
        'Water Requirement - Requires regular irrigation, especially during pollination.',
        'Sowing Time - Best sown in March-April (Rabi season in India).',
      ],
      fertilizerNeeds: [
        'Nitrogen (N) - Enhances vegetative growth and kernel development.',
        'Phosphorus (P) - Essential for root growth and early plant development.',
        'Potassium (K) - Helps with disease resistance and grain development.',
      ],
      commonDiseases: [
        'Corn Blight - Fungal disease causing lesions on leaves.',
        'Corn Smut - A fungal infection that forms tumors on ears and kernels.',
        'Corn Earworm - Insect pest that damages kernels and ears.',
      ],
      gradient: 'from-blue-400 to-indigo-500',
      bgGradient: 'from-blue-50 to-indigo-50'
    },
  };

  const crop = cropInfo[selectedCrop];

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
        <div className="max-w-6xl mx-auto">
          {/* Hero Header */}
          <div className="text-center mb-20">
            <h1 className="text-6xl font-bold bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent mb-6 tracking-tight">
              General Info About Crops
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto font-medium">
              🌾 Comprehensive crop information to help you make informed farming decisions and maximize your agricultural success.
            </p>
          </div>

          {/* Crop Selection */}
          <div className="mb-12">
            <div className="relative bg-white rounded-3xl shadow-2xl p-8 border-2 border-green-200 overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-4 left-4 w-16 h-16 bg-green-400 rounded-full animate-pulse"></div>
                <div className="absolute bottom-4 right-4 w-12 h-12 bg-emerald-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl text-white shadow-lg mr-4">
                    <Sprout className="w-6 h-6" />
                  </div>
                  <label className="text-2xl font-bold text-green-800">Select a Crop</label>
                </div>
                <select
                  value={selectedCrop}
                  onChange={(e) => setSelectedCrop(e.target.value as CropKey)}
                  className="w-full p-4 border-2 border-green-300 rounded-xl text-lg font-medium focus:outline-none focus:ring-4 focus:ring-green-200 focus:border-green-500 bg-gradient-to-r from-green-50 to-emerald-50 text-green-800 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <option value="wheat">Wheat</option>
                  <option value="rice">Rice</option>
                  <option value="corn">Corn</option>
                </select>
              </div>
            </div>
          </div>

          {/* Crop Information */}
          <div className={`relative overflow-hidden rounded-3xl shadow-2xl bg-gradient-to-br ${crop.bgGradient} border-2 border-green-200`}>
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-10 left-10 w-32 h-32 bg-green-400 rounded-full animate-pulse"></div>
              <div className="absolute bottom-10 right-10 w-24 h-24 bg-emerald-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
              <div className="absolute top-1/2 left-1/2 w-20 h-20 bg-teal-400 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
            </div>

            <div className="relative z-10 p-12">
              {/* Crop Title */}
              <div className="text-center mb-12">
                <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${crop.gradient} rounded-full mb-6 shadow-lg animate-pulse`}>
                  <Leaf className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-5xl font-bold text-green-800 mb-6">{crop.title}</h2>
                <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">{crop.description}</p>
              </div>

              {/* Information Sections */}
              <div className="grid gap-8 lg:grid-cols-3">
                {/* Growing Requirements */}
                <div className="bg-white bg-opacity-80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-green-200 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="flex items-center mb-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl text-white shadow-lg mr-4">
                      <Sprout className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-green-800">Growing Requirements</h3>
                  </div>
                  <ul className="space-y-4">
                    {crop.growingRequirements.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Fertilizer Needs */}
                <div className="bg-white bg-opacity-80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-green-200 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="flex items-center mb-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl text-white shadow-lg mr-4">
                      <Sun className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-green-800">Fertilizer & Nutrient Needs</h3>
                  </div>
                  <ul className="space-y-4">
                    {crop.fertilizerNeeds.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Common Diseases */}
                <div className="bg-white bg-opacity-80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-green-200 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="flex items-center mb-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-red-500 to-pink-600 rounded-xl text-white shadow-lg mr-4">
                      <Bug className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-green-800">Common Diseases & Pests</h3>
                  </div>
                  <ul className="space-y-4">
                    {crop.commonDiseases.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-20 text-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 rounded-3xl opacity-10 transform rotate-1"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl p-12 mx-auto max-w-4xl border-2 border-green-200">
                <div className="flex items-center justify-center mb-8">
                  <Shield className="w-12 h-12 text-green-600 mr-4" />
                  <TrendingUp className="w-16 h-16 text-emerald-500" />
                  <Zap className="w-12 h-12 text-teal-600 ml-4" />
                </div>
                <h2 className="text-4xl font-bold text-green-800 mb-6">Ready to Optimize Your Crops?</h2>
                <p className="text-xl text-gray-700 leading-relaxed font-medium mb-8">
                  Use this knowledge to make informed decisions about your crops. <span className="text-green-600 font-bold">AgriOracle</span> provides 
                  the insights you need for successful, sustainable farming practices.
                </p>
                <Link to="/our-services">
                  <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer">
                    <Leaf className="w-5 h-5 mr-2" />
                    Explore More Services
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralInfo;