import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const DeviceIdentifier = ({ onDeviceIdentified }) => {
  const [identificationMethod, setIdentificationMethod] = useState('upload');
  const [uploadedImage, setUploadedImage] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [identifiedDevice, setIdentifiedDevice] = useState(null);

  const popularDevices = [
    {
      id: 'iphone-14',
      name: 'iPhone 14 Pro',
      brand: 'Apple',
      category: 'Smartphone',
      image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=200&h=200&fit=crop',
      recyclingValue: '$45-65',
      environmentalImpact: '2.1 kg CO₂ saved'
    },
    {
      id: 'macbook-pro',
      name: 'MacBook Pro 13"',
      brand: 'Apple',
      category: 'Laptop',
      image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=200&h=200&fit=crop',
      recyclingValue: '$120-180',
      environmentalImpact: '8.5 kg CO₂ saved'
    },
    {
      id: 'samsung-s23',
      name: 'Galaxy S23 Ultra',
      brand: 'Samsung',
      category: 'Smartphone',
      image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=200&h=200&fit=crop',
      recyclingValue: '$40-60',
      environmentalImpact: '2.3 kg CO₂ saved'
    },
    {
      id: 'dell-laptop',
      name: 'Dell XPS 15',
      brand: 'Dell',
      category: 'Laptop',
      image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=200&h=200&fit=crop',
      recyclingValue: '$80-120',
      environmentalImpact: '7.2 kg CO₂ saved'
    },
    {
      id: 'ipad-air',
      name: 'iPad Air',
      brand: 'Apple',
      category: 'Tablet',
      image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=200&h=200&fit=crop',
      recyclingValue: '$60-90',
      environmentalImpact: '3.8 kg CO₂ saved'
    },
    {
      id: 'lg-tv',
      name: 'LG OLED 55"',
      brand: 'LG',
      category: 'TV',
      image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=200&h=200&fit=crop',
      recyclingValue: '$25-45',
      environmentalImpact: '12.4 kg CO₂ saved'
    }
  ];

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target.result);
        processImage(file);
      };
      reader.readAsDataURL(file);
    }
  };

  const processImage = async (file) => {
    setIsProcessing(true);
    
    // Simulate AI processing
    setTimeout(() => {
      const mockResult = {
        name: 'iPhone 13 Pro',
        brand: 'Apple',
        category: 'Smartphone',
        confidence: 94,
        recyclingValue: '$50-70',
        environmentalImpact: '2.2 kg CO₂ saved',
        condition: 'Good',
        estimatedAge: '2 years',
        specialRequirements: ['Data wiping required', 'Remove case before recycling']
      };
      
      setIdentifiedDevice(mockResult);
      setIsProcessing(false);
    }, 2000);
  };

  const handleDeviceSelect = (device) => {
    onDeviceIdentified(device);
  };

  const filteredDevices = popularDevices.filter(device =>
    device.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    device.brand.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-card rounded-xl shadow-layered p-6 lg:p-8">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon name="Camera" size={32} color="white" />
        </div>
        <h2 className="text-2xl lg:text-3xl font-heading font-bold text-text-primary mb-2">
          Identify Your Device
        </h2>
        <p className="text-text-secondary">
          Upload a photo or search for your device to get personalized recycling recommendations
        </p>
      </div>

      {/* Method Selection */}
      <div className="flex justify-center mb-8">
        <div className="bg-surface rounded-lg p-1 flex">
          <button
            onClick={() => setIdentificationMethod('upload')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
              identificationMethod === 'upload' ?'bg-primary text-primary-foreground shadow-sm' :'text-text-secondary hover:text-primary'
            }`}
          >
            Upload Photo
          </button>
          <button
            onClick={() => setIdentificationMethod('search')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
              identificationMethod === 'search' ?'bg-primary text-primary-foreground shadow-sm' :'text-text-secondary hover:text-primary'
            }`}
          >
            Search Device
          </button>
        </div>
      </div>

      {/* Upload Method */}
      {identificationMethod === 'upload' && (
        <div className="space-y-6">
          {!uploadedImage ? (
            <div className="border-2 border-dashed border-border rounded-xl p-8 text-center hover:border-primary/50 transition-colors duration-200">
              <Icon name="Upload" size={48} className="text-text-secondary mx-auto mb-4" />
              <h3 className="text-lg font-medium text-text-primary mb-2">
                Upload Device Photo
              </h3>
              <p className="text-text-secondary mb-4">
                Take a clear photo of your device for instant identification
              </p>
              <Input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
                id="device-upload"
              />
              <label htmlFor="device-upload">
                <Button
                  variant="primary"
                  iconName="Camera"
                  iconPosition="left"
                  className="cursor-pointer"
                >
                  Choose Photo
                </Button>
              </label>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="relative">
                <Image
                  src={uploadedImage}
                  alt="Uploaded device"
                  className="w-full h-64 object-cover rounded-xl"
                />
                <button
                  onClick={() => {
                    setUploadedImage(null);
                    setIdentifiedDevice(null);
                  }}
                  className="absolute top-4 right-4 w-8 h-8 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center text-text-secondary hover:text-error transition-colors"
                >
                  <Icon name="X" size={16} />
                </button>
              </div>

              {isProcessing && (
                <div className="text-center py-8">
                  <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin mx-auto mb-4"></div>
                  <p className="text-text-secondary">Analyzing your device...</p>
                </div>
              )}

              {identifiedDevice && (
                <div className="bg-success/10 border border-success/20 rounded-xl p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-success rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="Check" size={24} color="white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-text-primary mb-2">
                        Device Identified!
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                        <div>
                          <p className="text-sm text-text-secondary">Device</p>
                          <p className="font-medium text-text-primary">
                            {identifiedDevice.brand} {identifiedDevice.name}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-text-secondary">Confidence</p>
                          <p className="font-medium text-success">{identifiedDevice.confidence}%</p>
                        </div>
                        <div>
                          <p className="text-sm text-text-secondary">Recycling Value</p>
                          <p className="font-medium text-primary">{identifiedDevice.recyclingValue}</p>
                        </div>
                        <div>
                          <p className="text-sm text-text-secondary">Environmental Impact</p>
                          <p className="font-medium text-accent">{identifiedDevice.environmentalImpact}</p>
                        </div>
                      </div>
                      
                      {identifiedDevice.specialRequirements && (
                        <div className="mb-4">
                          <p className="text-sm text-text-secondary mb-2">Special Requirements:</p>
                          <ul className="space-y-1">
                            {identifiedDevice.specialRequirements.map((req, index) => (
                              <li key={index} className="flex items-center space-x-2 text-sm text-text-primary">
                                <Icon name="AlertCircle" size={14} className="text-warning" />
                                <span>{req}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <Button
                        variant="primary"
                        onClick={() => handleDeviceSelect(identifiedDevice)}
                        iconName="ArrowRight"
                        iconPosition="right"
                        className="w-full sm:w-auto"
                      >
                        Get Recycling Options
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* Search Method */}
      {identificationMethod === 'search' && (
        <div className="space-y-6">
          <div className="relative">
            <Icon name="Search" size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-secondary" />
            <Input
              type="text"
              placeholder="Search for your device (e.g., iPhone 14, MacBook Pro)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredDevices.map((device) => (
              <div
                key={device.id}
                className="bg-surface rounded-xl p-4 hover:shadow-layered transition-all duration-200 cursor-pointer group"
                onClick={() => handleDeviceSelect(device)}
              >
                <div className="relative mb-3">
                  <Image
                    src={device.image}
                    alt={device.name}
                    className="w-full h-32 object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 rounded-lg transition-colors duration-200"></div>
                </div>
                
                <h3 className="font-medium text-text-primary mb-1 group-hover:text-primary transition-colors">
                  {device.name}
                </h3>
                <p className="text-sm text-text-secondary mb-2">{device.brand} • {device.category}</p>
                
                <div className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span className="text-text-secondary">Value:</span>
                    <span className="font-medium text-primary">{device.recyclingValue}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-text-secondary">Impact:</span>
                    <span className="font-medium text-accent">{device.environmentalImpact}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredDevices.length === 0 && searchQuery && (
            <div className="text-center py-8">
              <Icon name="Search" size={48} className="text-text-secondary mx-auto mb-4" />
              <h3 className="text-lg font-medium text-text-primary mb-2">
                No devices found
              </h3>
              <p className="text-text-secondary mb-4">
                Try a different search term or contact our support team
              </p>
              <Button
                variant="outline"
                iconName="MessageCircle"
                iconPosition="left"
              >
                Contact Support
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default DeviceIdentifier;