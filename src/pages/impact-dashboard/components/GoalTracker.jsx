import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const GoalTracker = ({ goals, onUpdateGoal }) => {
  const [showAddGoal, setShowAddGoal] = useState(false);

  const goalIcons = {
    'Devices': 'Smartphone',
    'CO2 Reduction': 'Leaf',
    'Materials': 'Recycle',
    'Energy Saving': 'Zap'
  };

  const getProgressColor = (progress) => {
    if (progress >= 100) return 'success';
    if (progress >= 75) return 'accent';
    if (progress >= 50) return 'warning';
    return 'primary';
  };

  return (
    <div className="bg-card rounded-xl p-6 shadow-organic border border-border">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-heading font-bold text-primary">Sustainability Goals</h2>
        <Button
          variant="outline"
          size="sm"
          iconName="Plus"
          iconPosition="left"
          onClick={() => setShowAddGoal(!showAddGoal)}
          className="border-primary text-primary hover:bg-primary/10"
        >
          Add Goal
        </Button>
      </div>

      {showAddGoal && (
        <div className="mb-6 p-4 bg-surface rounded-lg border border-border">
          <h3 className="font-heading font-semibold text-primary mb-3">Set New Goal</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <select className="p-2 border border-border rounded-lg bg-background text-text-primary">
              <option>Select Goal Type</option>
              <option>Devices Recycled</option>
              <option>CO₂ Reduction</option>
              <option>Materials Recovered</option>
              <option>Energy Saved</option>
            </select>
            <input
              type="number"
              placeholder="Target Amount"
              className="p-2 border border-border rounded-lg bg-background text-text-primary"
            />
            <select className="p-2 border border-border rounded-lg bg-background text-text-primary">
              <option>Time Frame</option>
              <option>This Month</option>
              <option>This Quarter</option>
              <option>This Year</option>
            </select>
          </div>
          <div className="flex justify-end mt-4 space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowAddGoal(false)}
            >
              Cancel
            </Button>
            <Button
              variant="primary"
              size="sm"
              onClick={() => setShowAddGoal(false)}
            >
              Create Goal
            </Button>
          </div>
        </div>
      )}

      <div className="space-y-4">
        {goals.map((goal, index) => {
          const progressColor = getProgressColor(goal.progress);
          const progressColorVar = `var(--color-${progressColor})`;
          
          return (
            <div key={index} className="p-4 bg-surface rounded-lg border border-border">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center bg-${progressColor}/10`}>
                    <Icon 
                      name={goalIcons[goal.type] || 'Target'} 
                      size={20} 
                      color={progressColorVar}
                    />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-primary">{goal.title}</h3>
                    <p className="text-sm text-text-secondary">{goal.timeframe}</p>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="text-lg font-heading font-bold text-primary">
                    {goal.current} / {goal.target}
                  </div>
                  <div className={`text-sm font-medium text-${progressColor}`}>
                    {goal.progress}% Complete
                  </div>
                </div>
              </div>

              <div className="mb-3">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-text-secondary">Progress</span>
                  <span className={`text-${progressColor} font-medium`}>{goal.progress}%</span>
                </div>
                <div className="w-full bg-border rounded-full h-2">
                  <div 
                    className={`bg-${progressColor} h-2 rounded-full transition-all duration-500`}
                    style={{ width: `${Math.min(goal.progress, 100)}%` }}
                  ></div>
                </div>
              </div>

              {goal.progress >= 100 && (
                <div className="flex items-center space-x-2 text-success">
                  <Icon name="CheckCircle" size={16} />
                  <span className="text-sm font-medium">Goal Achieved!</span>
                </div>
              )}

              {goal.progress < 100 && (
                <div className="flex items-center justify-between text-sm text-text-secondary">
                  <span>{goal.daysLeft} days remaining</span>
                  <span>Need {goal.target - goal.current} more to reach goal</span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-6 p-4 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg">
        <div className="flex items-center space-x-3">
          <Icon name="Calendar" size={20} color="var(--color-primary)" />
          <div>
            <h3 className="font-heading font-semibold text-primary">Upcoming Reminders</h3>
            <p className="text-sm text-text-secondary">
              Next pickup scheduled for tomorrow at 2:00 PM
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoalTracker;