import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Icon from '../../../components/AppIcon';

const ServiceQuestionnaire = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({
    deviceType: '',
    quantity: '',
    location: '',
    timeline: '',
    specialRequirements: []
  });

  const questions = [
    {
      id: 'deviceType',
      title: 'What type of device do you need to recycle?',
      type: 'select',
      options: [
        { value: 'smartphone', label: 'Smartphone', icon: 'Smartphone' },
        { value: 'laptop', label: 'Laptop/Computer', icon: 'Laptop' },
        { value: 'tablet', label: 'Tablet', icon: 'Tablet' },
        { value: 'tv', label: 'TV/Monitor', icon: 'Monitor' },
        { value: 'appliance', label: 'Home Appliance', icon: 'Zap' },
        { value: 'battery', label: 'Batteries', icon: 'Battery' },
        { value: 'cables', label: 'Cables/Accessories', icon: 'Cable' },
        { value: 'mixed', label: 'Mixed Items', icon: 'Package' }
      ]
    },
    {
      id: 'quantity',
      title: 'How many items do you have?',
      type: 'select',
      options: [
        { value: '1-5', label: '1-5 items', icon: 'Hash' },
        { value: '6-20', label: '6-20 items', icon: 'Hash' },
        { value: '21-50', label: '21-50 items', icon: 'Hash' },
        { value: '50+', label: '50+ items (Bulk)', icon: 'Truck' }
      ]
    },
    {
      id: 'location',
      title: 'What\'s your location?',
      type: 'input',
      placeholder: 'Enter your ZIP code or city'
    },
    {
      id: 'timeline',
      title: 'When do you need this done?',
      type: 'select',
      options: [
        { value: 'asap', label: 'As soon as possible', icon: 'Clock' },
        { value: 'week', label: 'Within a week', icon: 'Calendar' },
        { value: 'month', label: 'Within a month', icon: 'CalendarDays' },
        { value: 'flexible', label: 'I\'m flexible', icon: 'Timer' }
      ]
    },
    {
      id: 'specialRequirements',
      title: 'Any special requirements?',
      type: 'multiselect',
      options: [
        { value: 'data-security', label: 'Data Security/Wiping', icon: 'Shield' },
        { value: 'certification', label: 'Certification Required', icon: 'Award' },
        { value: 'pickup', label: 'Pickup Service', icon: 'Truck' },
        { value: 'bulk-processing', label: 'Bulk Processing', icon: 'Package' },
        { value: 'hazardous', label: 'Hazardous Materials', icon: 'AlertTriangle' }
      ]
    }
  ];

  const currentQuestion = questions[currentStep];

  const handleAnswer = (value) => {
    if (currentQuestion.type === 'multiselect') {
      const currentValues = answers[currentQuestion.id] || [];
      const newValues = currentValues.includes(value)
        ? currentValues.filter(v => v !== value)
        : [...currentValues, value];
      
      setAnswers(prev => ({
        ...prev,
        [currentQuestion.id]: newValues
      }));
    } else {
      setAnswers(prev => ({
        ...prev,
        [currentQuestion.id]: value
      }));
    }
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete(answers);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const isAnswered = () => {
    const answer = answers[currentQuestion.id];
    if (currentQuestion.type === 'multiselect') {
      return answer && answer.length > 0;
    }
    return answer && answer.trim() !== '';
  };

  const progress = ((currentStep + 1) / questions.length) * 100;

  return (
    <div className="bg-card rounded-xl shadow-layered p-6 lg:p-8">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-text-secondary">
            Question {currentStep + 1} of {questions.length}
          </span>
          <span className="text-sm font-medium text-primary">
            {Math.round(progress)}% Complete
          </span>
        </div>
        <div className="w-full bg-muted rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <div className="mb-8">
        <h3 className="text-xl lg:text-2xl font-heading font-semibold text-text-primary mb-6">
          {currentQuestion.title}
        </h3>

        {currentQuestion.type === 'input' && (
          <Input
            type="text"
            placeholder={currentQuestion.placeholder}
            value={answers[currentQuestion.id] || ''}
            onChange={(e) => handleAnswer(e.target.value)}
            className="w-full"
          />
        )}

        {(currentQuestion.type === 'select' || currentQuestion.type === 'multiselect') && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {currentQuestion.options.map((option) => {
              const isSelected = currentQuestion.type === 'multiselect'
                ? (answers[currentQuestion.id] || []).includes(option.value)
                : answers[currentQuestion.id] === option.value;

              return (
                <button
                  key={option.value}
                  onClick={() => handleAnswer(option.value)}
                  className={`flex items-center space-x-3 p-4 rounded-lg border-2 transition-all duration-200 text-left ${
                    isSelected
                      ? 'border-primary bg-primary/10 text-primary' :'border-border hover:border-primary/50 hover:bg-surface text-text-primary'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    isSelected ? 'bg-primary text-primary-foreground' : 'bg-surface text-text-secondary'
                  }`}>
                    <Icon name={option.icon} size={20} />
                  </div>
                  <span className="font-medium">{option.label}</span>
                  {currentQuestion.type === 'multiselect' && isSelected && (
                    <Icon name="Check" size={16} className="ml-auto text-primary" />
                  )}
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between">
        <Button
          variant="ghost"
          onClick={handlePrevious}
          disabled={currentStep === 0}
          iconName="ChevronLeft"
          iconPosition="left"
        >
          Previous
        </Button>

        <Button
          variant="primary"
          onClick={handleNext}
          disabled={!isAnswered()}
          iconName={currentStep === questions.length - 1 ? "Search" : "ChevronRight"}
          iconPosition="right"
          className="bg-primary hover:bg-primary/90"
        >
          {currentStep === questions.length - 1 ? 'Find Solutions' : 'Next'}
        </Button>
      </div>
    </div>
  );
};

export default ServiceQuestionnaire;