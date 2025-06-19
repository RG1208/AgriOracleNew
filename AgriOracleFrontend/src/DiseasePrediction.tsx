/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { Microscope, Leaf, Shield, Zap, Upload, Camera, TrendingUp } from 'lucide-react';

const DiseasePrediction = () => {
  const [, setImage] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [prediction, setPrediction] = useState<any>(null);
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);
    setImage(file);
    setImageUrl(URL.createObjectURL(file));
    setPrediction(null);
    setError('');
    setLoading(true);

    try {
      const response = await fetch('http://127.0.0.1:5000/predict_disease', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      if (response.ok) {
        setPrediction(data);
        setError('');
      } else {
        setError(data.error || 'Something went wrong');
      }
    } catch (err) {
      setError('Error uploading image');
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
        <div className="max-w-5xl mx-auto">
          {/* Hero Header */}
          <div className="text-center mb-16">
            <h1 className="text-6xl font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent mb-6 tracking-tight">
              Disease Prediction
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto font-medium">
              🔬 Upload an image of your crop and get instant AI-powered disease diagnosis with treatment recommendations. 
              Early detection saves your harvest!
            </p>
          </div>

          {/* Upload Section */}
          <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-gradient-to-br from-emerald-50 to-teal-50 border-2 border-emerald-200 mb-12">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-10 left-10 w-32 h-32 bg-emerald-400 rounded-full animate-pulse"></div>
              <div className="absolute bottom-10 right-10 w-24 h-24 bg-teal-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
              <div className="absolute top-1/2 left-1/2 w-20 h-20 bg-cyan-400 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
            </div>

            <div className="relative z-10 p-12 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full mb-6 shadow-lg">
                <Camera className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-green-800 mb-6">Upload Crop Image for Analysis</h2>
              
              <div className="relative inline-block">
                <input
                  type="file"
                  onChange={handleImageUpload}
                  accept="image/*"
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  id="imageUpload"
                />
                <label 
                  htmlFor="imageUpload"
                  className="inline-flex items-center px-10 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-full font-bold text-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
                >
                  <Upload className="w-6 h-6 mr-3" />
                  Choose Image to Analyze
                </label>
              </div>
              
              <p className="text-gray-600 mt-4 text-lg">
                Supported formats: JPG, PNG, JPEG • Max size: 10MB
              </p>
            </div>
          </div>

          {/* Loading State */}
          {loading && (
            <div className="mb-12 bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-3xl p-10 shadow-lg text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full mb-6 shadow-lg animate-spin">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-blue-800 mb-4">AI Analysis in Progress...</h3>
              <p className="text-blue-600 text-lg">Our advanced algorithms are analyzing your crop image for disease detection.</p>
            </div>
          )}

          {/* Image Preview */}
          {imageUrl && !prediction && !loading && (
            <div className="mb-12 bg-white rounded-3xl shadow-2xl p-8 border-2 border-green-200 animate-fadeIn">
              <h3 className="text-2xl font-bold text-green-800 mb-6 text-center flex items-center justify-center">
                <Camera className="w-6 h-6 mr-2" />
                Image Preview
              </h3>
              <div className="relative max-w-2xl mx-auto">
                <img
                  src={imageUrl}
                  alt="Crop Preview"
                  className="w-full rounded-2xl shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div className="mb-12 bg-gradient-to-r from-red-50 to-pink-50 border-2 border-red-200 rounded-2xl p-8 shadow-lg animate-pulse">
              <div className="flex items-center justify-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-red-500 to-pink-600 rounded-full text-white shadow-lg mr-4">
                  <span className="text-2xl">❌</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-red-700 mb-2">Analysis Failed</h3>
                  <p className="text-red-600">{error}</p>
                </div>
              </div>
            </div>
          )}

          {/* Results */}
          {prediction && (
            <div className="space-y-8 animate-fadeIn">
              {/* Prediction Results */}
              <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-6 left-6 w-24 h-24 bg-green-400 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-6 right-6 w-20 h-20 bg-emerald-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                </div>

                <div className="relative z-10 p-10">
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full mb-6 shadow-lg animate-bounce">
                      <Microscope className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-4xl font-bold text-green-800 mb-4">
                      🔬 AI Diagnosis Complete
                    </h3>
                    <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full font-bold text-2xl shadow-lg">
                      <Leaf className="w-6 h-6 mr-3" />
                      {prediction.prediction}
                    </div>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    {/* Reason */}
                    <div className="bg-white bg-opacity-80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-green-200">
                      <div className="flex items-center mb-4">
                        <div className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg text-white shadow-lg mr-3">
                          <TrendingUp className="w-5 h-5" />
                        </div>
                        <h4 className="text-xl font-bold text-green-800">Analysis Details</h4>
                      </div>
                      <p className="text-gray-700 leading-relaxed">{prediction.reason}</p>
                    </div>

                    {/* Treatment */}
                    <div className="bg-white bg-opacity-80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-green-200">
                      <div className="flex items-center mb-4">
                        <div className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg text-white shadow-lg mr-3">
                          <Shield className="w-5 h-5" />
                        </div>
                        <h4 className="text-xl font-bold text-green-800">Recommended Treatment</h4>
                      </div>
                      <p className="text-gray-700 leading-relaxed">{prediction.cure}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Processed Image */}
              <div className="bg-white rounded-3xl shadow-2xl p-8 border-2 border-green-200">
                <h4 className="text-2xl font-bold text-green-800 mb-6 text-center flex items-center justify-center">
                  <Microscope className="w-6 h-6 mr-2" />
                  AI-Processed Analysis Image
                </h4>
                <div className="relative max-w-2xl mx-auto">
                  <img
                    src={`http://127.0.0.1:5000${prediction.image_url}`}
                    alt="AI Analysis Result"
                    className="w-full rounded-2xl shadow-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DiseasePrediction;