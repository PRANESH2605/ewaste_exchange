import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';


const CommunityChallenge = ({ currentChallenge, upcomingChallenges }) => {
  const { title, description, progress, target, participants, endDate, rewards, teams } = currentChallenge;

  return (
    <div className="bg-card rounded-xl p-6 shadow-organic border border-border">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-heading font-bold text-primary">Community Challenge</h2>
        <div className="flex items-center space-x-2 text-warning">
          <Icon name="Clock" size={16} />
          <span className="text-sm font-medium">{endDate} left</span>
        </div>
      </div>

      <div className="mb-6">
        <div className="flex items-start space-x-4 mb-4">
          <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-xl flex items-center justify-center animate-breathe">
            <Icon name="Zap" size={32} color="white" />
          </div>
          
          <div className="flex-1">
            <h3 className="text-lg font-heading font-bold text-primary mb-2">{title}</h3>
            <p className="text-text-secondary mb-3">{description}</p>
            
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-1 text-accent">
                <Icon name="Users" size={16} />
                <span>{participants.toLocaleString()} participants</span>
              </div>
              <div className="flex items-center space-x-1 text-success">
                <Icon name="Trophy" size={16} />
                <span>{rewards}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <div className="flex justify-between text-sm mb-2">
            <span className="text-text-secondary">Challenge Progress</span>
            <span className="text-primary font-medium">
              {progress.toLocaleString()} / {target.toLocaleString()} devices
            </span>
          </div>
          <div className="w-full bg-surface rounded-full h-3">
            <div 
              className="bg-gradient-to-r from-accent to-primary h-3 rounded-full transition-all duration-500"
              style={{ width: `${Math.min((progress / target) * 100, 100)}%` }}
            ></div>
          </div>
          <div className="text-right mt-1">
            <span className="text-sm text-accent font-medium">
              {Math.round((progress / target) * 100)}% Complete
            </span>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h4 className="font-heading font-semibold text-primary mb-3">Top Teams</h4>
        <div className="space-y-2">
          {teams.slice(0, 3).map((team, index) => (
            <div key={team.id} className="flex items-center space-x-3 p-3 bg-surface rounded-lg">
              <div className="flex items-center space-x-2">
                <span className={`text-sm font-bold ${
                  index === 0 ? 'text-warning' : 
                  index === 1 ? 'text-text-secondary' : 'text-accent'
                }`}>
                  #{index + 1}
                </span>
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                  <Icon name="Users" size={16} color="white" />
                </div>
              </div>
              
              <div className="flex-1">
                <h5 className="font-heading font-semibold text-primary">{team.name}</h5>
                <p className="text-sm text-text-secondary">{team.members} members</p>
              </div>
              
              <div className="text-right">
                <div className="text-lg font-heading font-bold text-primary">
                  {team.devices}
                </div>
                <div className="text-xs text-text-secondary">devices</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex space-x-3 mb-6">
        <Button
          variant="primary"
          size="md"
          iconName="Users"
          iconPosition="left"
          className="flex-1 bg-accent hover:bg-accent/90"
        >
          Join Team
        </Button>
        <Button
          variant="outline"
          size="md"
          iconName="Plus"
          iconPosition="left"
          className="flex-1 border-primary text-primary hover:bg-primary/10"
        >
          Create Team
        </Button>
      </div>

      <div className="border-t border-border pt-4">
        <h4 className="font-heading font-semibold text-primary mb-3">Upcoming Challenges</h4>
        <div className="space-y-3">
          {upcomingChallenges.map((challenge, index) => (
            <div key={index} className="flex items-center space-x-3 p-3 bg-surface rounded-lg">
              <div className="w-10 h-10 bg-gradient-to-br from-secondary to-accent rounded-lg flex items-center justify-center">
                <Icon name={challenge.icon} size={20} color="white" />
              </div>
              
              <div className="flex-1">
                <h5 className="font-heading font-semibold text-primary">{challenge.title}</h5>
                <p className="text-sm text-text-secondary">{challenge.description}</p>
              </div>
              
              <div className="text-right">
                <div className="text-sm text-accent font-medium">{challenge.startDate}</div>
                <div className="text-xs text-text-secondary">{challenge.duration}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommunityChallenge;