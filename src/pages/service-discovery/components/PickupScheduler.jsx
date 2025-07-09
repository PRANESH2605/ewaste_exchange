import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Icon from '../../../components/AppIcon';

const PickupScheduler = ({ service, onClose, onScheduled }) => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [contactInfo, setContactInfo] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    instructions: ''
  });
  const [isScheduling, setIsScheduling] = useState(false);

  const timeSlots = [
    { value: '09:00', label: '9:00 AM - 11:00 AM', available: true },
    { value: '11:00', label: '11:00 AM - 1:00 PM', available: true },
    { value: '13:00', label: '1:00 PM - 3:00 PM', available: false },
    { value: '15:00', label: '3:00 PM - 5:00 PM', available: true },
    { value: '17:00', label: '5:00 PM - 7:00 PM', available: true }
  ];

  const handleInputChange = (field, value) => {
    setContactInfo(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSchedule = async () => {
    setIsScheduling(true);
    
    // Simulate API call
    setTimeout(() => {
      const scheduledPickup = {
        id: `pickup-${Date.now()}`,
        service: service.title,
        date: selectedDate,
        time: selectedTime,
        contact: contactInfo,
        confirmationNumber: `EWE-${Math.random().toString(36).substr(2, 9).toUpperCase()}`,
        estimatedArrival: '2:30 PM - 3:30 PM'
      };
      
      setIsScheduling(false);
      onScheduled(scheduledPickup);
    }, 2000);
  };

  const isFormValid = () => {
    return selectedDate && selectedTime && contactInfo.name && 
           contactInfo.phone && contactInfo.email && contactInfo.address;
  };

  // Generate available dates (next 14 days, excluding weekends for this example)
  const getAvailableDates = () => {
    const dates = [];
    const today = new Date();
    
    for (let i = 1; i <= 14; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      
      // Skip weekends for this example
      if (date.getDay() !== 0 && date.getDay() !== 6) {
        dates.push({
          value: date.toISOString().split('T')[0],
          label: date.toLocaleDateString('en-US', { 
            weekday: 'long', 
            month: 'short', 
            day: 'numeric' 
          }),
          available: Math.random() > 0.3 // 70% availability
        });
      }
    }
    
    return dates;
  };

  const availableDates = getAvailableDates();

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-card rounded-xl shadow-layered max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div>
            <h2 className="text-xl font-heading font-semibold text-text-primary">
              Schedule Pickup
            </h2>
            <p className="text-text-secondary text-sm mt-1">
              {service?.title || 'Premium Pickup Service'}
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg flex items-center justify-center text-text-secondary hover:bg-surface hover:text-text-primary transition-colors"
          >
            <Icon name="X" size={20} />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Service Summary */}
          <div className="bg-primary/10 rounded-lg p-4">
            <div className="flex items-center space-x-3 mb-3">
              <Icon name="Truck" size={20} className="text-primary" />
              <span className="font-medium text-text-primary">Pickup Details</span>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-text-secondary">Service:</span>
                <span className="ml-2 font-medium text-text-primary">
                  {service?.title || 'Premium Pickup'}
                </span>
              </div>
              <div>
                <span className="text-text-secondary">Price:</span>
                <span className="ml-2 font-medium text-primary">
                  {service?.price || '$25'}
                </span>
              </div>
              <div>
                <span className="text-text-secondary">Timeline:</span>
                <span className="ml-2 font-medium text-text-primary">
                  {service?.timeline || '2-3 business days'}
                </span>
              </div>
              <div>
                <span className="text-text-secondary">Includes:</span>
                <span className="ml-2 font-medium text-text-primary">
                  Data wiping & tracking
                </span>
              </div>
            </div>
          </div>

          {/* Date Selection */}
          <div>
            <label className="block text-sm font-medium text-text-primary mb-3">
              Select Date
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {availableDates.slice(0, 8).map((date) => (
                <button
                  key={date.value}
                  onClick={() => date.available && setSelectedDate(date.value)}
                  disabled={!date.available}
                  className={`p-3 rounded-lg text-left transition-all duration-200 ${
                    selectedDate === date.value
                      ? 'bg-primary text-primary-foreground'
                      : date.available
                      ? 'bg-surface hover:bg-background text-text-primary' :'bg-muted text-text-secondary cursor-not-allowed'
                  }`}
                >
                  <div className="font-medium">{date.label}</div>
                  {!date.available && (
                    <div className="text-xs mt-1">Fully booked</div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Time Selection */}
          {selectedDate && (
            <div>
              <label className="block text-sm font-medium text-text-primary mb-3">
                Select Time Slot
              </label>
              <div className="space-y-2">
                {timeSlots.map((slot) => (
                  <button
                    key={slot.value}
                    onClick={() => slot.available && setSelectedTime(slot.value)}
                    disabled={!slot.available}
                    className={`w-full p-3 rounded-lg text-left transition-all duration-200 flex items-center justify-between ${
                      selectedTime === slot.value
                        ? 'bg-primary text-primary-foreground'
                        : slot.available
                        ? 'bg-surface hover:bg-background text-text-primary' :'bg-muted text-text-secondary cursor-not-allowed'
                    }`}
                  >
                    <span>{slot.label}</span>
                    {!slot.available && (
                      <span className="text-xs">Unavailable</span>
                    )}
                    {slot.available && selectedTime !== slot.value && (
                      <Icon name="Clock" size={16} className="text-text-secondary" />
                    )}
                    {selectedTime === slot.value && (
                      <Icon name="Check" size={16} />
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-text-primary">
              Contact Information
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                type="text"
                placeholder="Full Name"
                value={contactInfo.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                required
              />
              <Input
                type="tel"
                placeholder="Phone Number"
                value={contactInfo.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                required
              />
            </div>
            
            <Input
              type="email"
              placeholder="Email Address"
              value={contactInfo.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              required
            />
            
            <Input
              type="text"
              placeholder="Pickup Address"
              value={contactInfo.address}
              onChange={(e) => handleInputChange('address', e.target.value)}
              required
            />
            
            <div>
              <label className="block text-sm font-medium text-text-secondary mb-2">
                Special Instructions (Optional)
              </label>
              <textarea
                placeholder="Any special instructions for the pickup team..."
                value={contactInfo.instructions}
                onChange={(e) => handleInputChange('instructions', e.target.value)}
                rows={3}
                className="w-full px-3 py-2 bg-background border border-border rounded-lg text-text-primary placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none"
              />
            </div>
          </div>

          {/* Terms & Conditions */}
          <div className="bg-surface rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <Icon name="Info" size={16} className="text-primary mt-0.5 flex-shrink-0" />
              <div className="text-sm text-text-secondary">
                <p className="mb-2">
                  By scheduling this pickup, you agree to our terms of service and privacy policy.
                </p>
                <ul className="space-y-1 text-xs">
                  <li>• Ensure devices are powered off and accessible</li>
                  <li>• Remove personal data or request our data wiping service</li>
                  <li>• Someone must be present during the pickup window</li>
                  <li>• Cancellations must be made 24 hours in advance</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Button
              variant="outline"
              onClick={onClose}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              variant="primary"
              onClick={handleSchedule}
              disabled={!isFormValid() || isScheduling}
              loading={isScheduling}
              iconName="Calendar"
              iconPosition="left"
              className="flex-1"
            >
              {isScheduling ? 'Scheduling...' : 'Schedule Pickup'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PickupScheduler;