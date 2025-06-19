/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { Sprout, Leaf, Shield, Zap, Sun, CloudRain } from 'lucide-react';

const CropIntercropping = () => {
  const [formData, setFormData] = useState({
    previousCrop: '',
    soilType: '',
    season: '',
  });

  const [result, setResult] = useState<{ recommended_crop: string; reasoning: string } | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setShowResult(false);
    setLoading(true);
    setError('');

    try {
      const response = await fetch('http://127.0.0.1:5000/recommend_intercrop', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          primary_crop: formData.previousCrop,
          soil_type: formData.soilType,
          season: formData.season,
        }),
      });

      if (!response.ok) throw new Error('Something went wrong while fetching data.');

      const data = await response.json();
      setResult(data);
      setShowResult(true);
    } catch (err: any) {
      setError(err.message || 'Unknown error occurred.');
    } finally {
      setLoading(false);
    }
  };

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
        <div className="max-w-4xl mx-auto">
          {/* Hero Header */}
          <div className="text-center mb-16">
            <h1 className="text-6xl font-bold bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600  bg-clip-text text-transparent mb-6 tracking-tight">
              Crop Intercropping
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto font-medium">
              🌱 Maximize your farm's potential with AI-powered intercropping recommendations. 
              Discover the perfect companion crops for sustainable and profitable farming.
            </p>
          </div>

          {/* Main Form Card */}
          <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-10 left-10 w-32 h-32 bg-blue-400 rounded-full animate-pulse"></div>
              <div className="absolute bottom-10 right-10 w-24 h-24 bg-indigo-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
              <div className="absolute top-1/2 left-1/2 w-20 h-20 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
            </div>

            <div className="relative z-10 p-12">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Previous Crop */}
                <div className="bg-white bg-opacity-80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-blue-200 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg text-white shadow-lg mr-3">
                      <Sprout className="w-5 h-5" />
                    </div>
                    <label htmlFor="previousCrop" className="text-xl font-bold text-green-800">Primary Crop</label>
                  </div>
                  <input
                    type="text"
                    id="previousCrop"
                    className="w-full px-6 py-4 border-2 border-green-300 rounded-xl text-lg focus:outline-none focus:ring-4 focus:ring-green-200 focus:border-green-500 bg-gradient-to-r from-green-50 to-emerald-50 text-green-800 font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                    placeholder="e.g., Wheat, Rice, Corn..."
                    value={formData.previousCrop}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Soil Type */}
                <div className="bg-white bg-opacity-80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-blue-200 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg text-white shadow-lg mr-3">
                      <Sun className="w-5 h-5" />
                    </div>
                    <label htmlFor="soilType" className="text-xl font-bold text-green-800">Soil Type</label>
                  </div>
                  <input
                    type="text"
                    id="soilType"
                    className="w-full px-6 py-4 border-2 border-amber-300 rounded-xl text-lg focus:outline-none focus:ring-4 focus:ring-amber-200 focus:border-amber-500 bg-gradient-to-r from-amber-50 to-orange-50 text-amber-800 font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                    placeholder="e.g., Loamy, Clay, Sandy..."
                    value={formData.soilType}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Season */}
                <div className="bg-white bg-opacity-80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-blue-200 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg text-white shadow-lg mr-3">
                      <CloudRain className="w-5 h-5" />
                    </div>
                    <label htmlFor="season" className="text-xl font-bold text-green-800">Season</label>
                  </div>
                  <input
                    type="text"
                    id="season"
                    className="w-full px-6 py-4 border-2 border-blue-300 rounded-xl text-lg focus:outline-none focus:ring-4 focus:ring-blue-200 focus:border-blue-500 bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-800 font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                    placeholder="e.g., Kharif, Rabi, Summer..."
                    value={formData.season}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Submit Button */}
                <div className="text-center pt-4">
                  <button
                    type="submit"
                    disabled={loading}
                    className={`inline-flex items-center px-10 py-4 rounded-full text-white font-bold text-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform ${
                      loading
                        ? 'bg-gradient-to-r from-gray-400 to-gray-500 cursor-not-allowed'
                        : 'bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600  hover:from-green-600 hover:to-teal-700 hover:scale-105'
                    }`}
                  >
                    {loading ? (
                      <>
                        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                        Getting AI Recommendation...
                      </>
                    ) : (
                      <>
                        <Zap className="w-6 h-6 mr-3" />
                        Get AI Recommendation
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mt-8 bg-gradient-to-r from-red-50 to-pink-50 border-2 border-red-200 rounded-2xl p-6 shadow-lg animate-pulse">
              <div className="flex items-center justify-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-red-500 to-pink-600 rounded-full text-white shadow-lg mr-4">
                  <span className="text-2xl">❌</span>
                </div>
                <p className="text-red-700 font-bold text-lg">{error}</p>
              </div>
            </div>
          )}

          {/* Results */}
          {showResult && result && (
            <div className="mt-12 relative overflow-hidden rounded-3xl shadow-2xl bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 animate-fadeIn">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-6 left-6 w-24 h-24 bg-green-400 rounded-full animate-pulse"></div>
                <div className="absolute bottom-6 right-6 w-20 h-20 bg-emerald-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
              </div>

              <div className="relative z-10 p-10 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full mb-6 shadow-lg animate-bounce">
                  <Leaf className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-green-800 mb-4">
                  🌾 AI Recommended Companion Crop
                </h3>
                <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full font-bold text-2xl shadow-lg mb-6">
                  <Sprout className="w-6 h-6 mr-3" />
                  {result.recommended_crop}
                </div>
                <div className="bg-white bg-opacity-80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-green-200 max-w-3xl mx-auto">
                  <h4 className="text-xl font-bold text-green-800 mb-4 flex items-center justify-center">
                    <Shield className="w-6 h-6 mr-2" />
                    Why This Recommendation?
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg">{result.reasoning}</p>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default CropIntercropping;