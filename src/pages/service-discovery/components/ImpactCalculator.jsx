import React, { useState, useEffect } from 'react';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Icon from '../../../components/AppIcon';

const ImpactCalculator = () => {
  const [devices, setDevices] = useState([
    { id: 1, type: 'smartphone', quantity: 1, condition: 'good' }
  ]);
  const [totalImpact, setTotalImpact] = useState({
    co2Saved: 0,
    materialsRecovered: 0,
    energySaved: 0,
    waterSaved: 0,
    treesEquivalent: 0
  });
  const [isCalculating, setIsCalculating] = useState(false);

  const deviceTypes = [
    { value: 'smartphone', label: 'Smartphone', co2Factor: 2.1, materialFactor: 0.15 },
    { value: 'laptop', label: 'Laptop', co2Factor: 8.5, materialFactor: 2.3 },
    { value: 'tablet', label: 'Tablet', co2Factor: 3.8, materialFactor: 0.8 },
    { value: 'desktop', label: 'Desktop Computer', co2Factor: 12.4, materialFactor: 4.2 },
    { value: 'monitor', label: 'Monitor', co2Factor: 6.2, materialFactor: 3.1 },
    { value: 'tv', label: 'Television', co2Factor: 15.7, materialFactor: 8.5 },
    { value: 'printer', label: 'Printer', co2Factor: 4.3, materialFactor: 2.8 },
    { value: 'router', label: 'Router/Modem', co2Factor: 1.8, materialFactor: 0.6 }
  ];

  const conditions = [
    { value: 'excellent', label: 'Excellent', multiplier: 1.2 },
    { value: 'good', label: 'Good', multiplier: 1.0 },
    { value: 'fair', label: 'Fair', multiplier: 0.8 },
    { value: 'poor', label: 'Poor', multiplier: 0.6 }
  ];

  const addDevice = () => {
    const newDevice = {
      id: Date.now(),
      type: 'smartphone',
      quantity: 1,
      condition: 'good'
    };
    setDevices([...devices, newDevice]);
  };

  const removeDevice = (id) => {
    setDevices(devices.filter(device => device.id !== id));
  };

  const updateDevice = (id, field, value) => {
    setDevices(devices.map(device =>
      device.id === id ? { ...device, [field]: value } : device
    ));
  };

  const calculateImpact = () => {
    setIsCalculating(true);
    
    setTimeout(() => {
      let totalCO2 = 0;
      let totalMaterials = 0;
      
      devices.forEach(device => {
        const deviceType = deviceTypes.find(type => type.value === device.type);
        const condition = conditions.find(cond => cond.value === device.condition);
        
        if (deviceType && condition) {
          totalCO2 += deviceType.co2Factor * device.quantity * condition.multiplier;
          totalMaterials += deviceType.materialFactor * device.quantity * condition.multiplier;
        }
      });

      setTotalImpact({
        co2Saved: totalCO2,
        materialsRecovered: totalMaterials,
        energySaved: totalCO2 * 1.8, // kWh
        waterSaved: totalCO2 * 45, // liters
        treesEquivalent: totalCO2 / 22 // trees per year
      });
      
      setIsCalculating(false);
    }, 1500);
  };

  useEffect(() => {
    calculateImpact();
  }, [devices]);

  const getDeviceIcon = (type) => {
    switch (type) {
      case 'smartphone': return 'Smartphone';
      case 'laptop': return 'Laptop';
      case 'tablet': return 'Tablet';
      case 'desktop': return 'Monitor';
      case 'monitor': return 'Monitor';
      case 'tv': return 'Tv';
      case 'printer': return 'Printer';
      case 'router': return 'Wifi';
      default: return 'Smartphone';
    }
  };

  return (
    <div className="bg-card rounded-xl shadow-layered p-6 lg:p-8">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon name="Calculator" size={32} color="white" />
        </div>
        <h2 className="text-2xl lg:text-3xl font-heading font-bold text-text-primary mb-2">
          Environmental Impact Calculator
        </h2>
        <p className="text-text-secondary">
          Calculate the environmental impact of recycling your devices
        </p>
      </div>

      {/* Device List */}
      <div className="space-y-4 mb-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-heading font-semibold text-text-primary">
            Your Devices
          </h3>
          <Button
            variant="outline"
            onClick={addDevice}
            iconName="Plus"
            iconPosition="left"
            size="sm"
          >
            Add Device
          </Button>
        </div>

        {devices.map((device, index) => (
          <div key={device.id} className="bg-surface rounded-lg p-4">
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 items-end">
              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Device Type
                </label>
                <div className="relative">
                  <select
                    value={device.type}
                    onChange={(e) => updateDevice(device.id, 'type', e.target.value)}
                    className="w-full px-3 py-2 bg-background border border-border rounded-lg text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary appearance-none"
                  >
                    {deviceTypes.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                  <Icon name="ChevronDown" size={16} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-text-secondary pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Quantity
                </label>
                <Input
                  type="number"
                  min="1"
                  value={device.quantity}
                  onChange={(e) => updateDevice(device.id, 'quantity', parseInt(e.target.value) || 1)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Condition
                </label>
                <div className="relative">
                  <select
                    value={device.condition}
                    onChange={(e) => updateDevice(device.id, 'condition', e.target.value)}
                    className="w-full px-3 py-2 bg-background border border-border rounded-lg text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary appearance-none"
                  >
                    {conditions.map((condition) => (
                      <option key={condition.value} value={condition.value}>
                        {condition.label}
                      </option>
                    ))}
                  </select>
                  <Icon name="ChevronDown" size={16} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-text-secondary pointer-events-none" />
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center bg-primary/10 text-primary`}>
                  <Icon name={getDeviceIcon(device.type)} size={20} />
                </div>
                {devices.length > 1 && (
                  <button
                    onClick={() => removeDevice(device.id)}
                    className="w-10 h-10 rounded-lg flex items-center justify-center text-error hover:bg-error/10 transition-colors"
                  >
                    <Icon name="Trash2" size={16} />
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Impact Results */}
      <div className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-xl p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-heading font-semibold text-text-primary">
            Your Environmental Impact
          </h3>
          {isCalculating && (
            <div className="flex items-center space-x-2 text-text-secondary">
              <div className="w-4 h-4 border-2 border-primary/20 border-t-primary rounded-full animate-spin"></div>
              <span className="text-sm">Calculating...</span>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-card rounded-lg p-4 text-center">
            <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <Icon name="Leaf" size={24} className="text-success" />
            </div>
            <div className="text-2xl font-bold text-success animate-count-up">
              {totalImpact.co2Saved.toFixed(1)} kg
            </div>
            <div className="text-sm text-text-secondary">CO₂ Emissions Saved</div>
          </div>

          <div className="bg-card rounded-lg p-4 text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <Icon name="Recycle" size={24} className="text-primary" />
            </div>
            <div className="text-2xl font-bold text-primary animate-count-up">
              {totalImpact.materialsRecovered.toFixed(1)} kg
            </div>
            <div className="text-sm text-text-secondary">Materials Recovered</div>
          </div>

          <div className="bg-card rounded-lg p-4 text-center">
            <div className="w-12 h-12 bg-warning/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <Icon name="Zap" size={24} className="text-warning" />
            </div>
            <div className="text-2xl font-bold text-warning animate-count-up">
              {totalImpact.energySaved.toFixed(0)} kWh
            </div>
            <div className="text-sm text-text-secondary">Energy Saved</div>
          </div>

          <div className="bg-card rounded-lg p-4 text-center">
            <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <Icon name="Droplets" size={24} className="text-accent" />
            </div>
            <div className="text-2xl font-bold text-accent animate-count-up">
              {totalImpact.waterSaved.toFixed(0)} L
            </div>
            <div className="text-sm text-text-secondary">Water Saved</div>
          </div>

          <div className="bg-card rounded-lg p-4 text-center">
            <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <Icon name="Trees" size={24} className="text-secondary" />
            </div>
            <div className="text-2xl font-bold text-secondary animate-count-up">
              {totalImpact.treesEquivalent.toFixed(1)}
            </div>
            <div className="text-sm text-text-secondary">Trees Equivalent/Year</div>
          </div>

          <div className="bg-card rounded-lg p-4 text-center">
            <div className="w-12 h-12 bg-conversion/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <Icon name="Globe" size={24} className="text-conversion" />
            </div>
            <div className="text-2xl font-bold text-conversion animate-count-up">
              {devices.reduce((sum, device) => sum + device.quantity, 0)}
            </div>
            <div className="text-sm text-text-secondary">Devices Recycled</div>
          </div>
        </div>

        {/* Impact Comparison */}
        <div className="mt-6 p-4 bg-card rounded-lg">
          <h4 className="font-medium text-text-primary mb-3">Impact Comparison</h4>
          <div className="space-y-2 text-sm">
            <div className="flex items-center justify-between">
              <span className="text-text-secondary">Equivalent to driving:</span>
              <span className="font-medium text-text-primary">
                {(totalImpact.co2Saved * 4.6).toFixed(0)} km less
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-text-secondary">Home energy for:</span>
              <span className="font-medium text-text-primary">
                {(totalImpact.energySaved / 30).toFixed(1)} days
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-text-secondary">Shower time saved:</span>
              <span className="font-medium text-text-primary">
                {(totalImpact.waterSaved / 10).toFixed(0)} minutes
              </span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 mt-6">
          <Button
            variant="primary"
            iconName="Truck"
            iconPosition="left"
            className="flex-1"
          >
            Schedule Pickup for These Devices
          </Button>
          <Button
            variant="outline"
            iconName="Share"
            iconPosition="left"
          >
            Share Impact
          </Button>
          <Button
            variant="ghost"
            iconName="Download"
            iconPosition="left"
          >
            Download Report
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ImpactCalculator;