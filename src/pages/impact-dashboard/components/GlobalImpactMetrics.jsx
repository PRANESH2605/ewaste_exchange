import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import Icon from '../../../components/AppIcon';

const GlobalImpactMetrics = ({ globalData }) => {
  const { totalDevices, totalCO2, totalMaterials, deviceTypeData, regionData } = globalData;

  const COLORS = ['#2D5A27', '#4A7C59', '#7FB069', '#6B8E23', '#D2691E'];

  return (
    <div className="bg-card rounded-xl p-6 shadow-organic border border-border">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-heading font-bold text-primary">Global Platform Impact</h2>
        <div className="flex items-center space-x-2 text-accent">
          <Icon name="Globe" size={20} />
          <span className="text-sm font-medium">Real-time</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="text-center p-6 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg">
          <div className="text-3xl font-heading font-bold text-primary animate-count-up">
            {totalDevices.toLocaleString()}
          </div>
          <div className="text-sm text-text-secondary mt-2">Total Devices Processed</div>
          <div className="flex items-center justify-center mt-2 text-accent">
            <Icon name="TrendingUp" size={16} />
            <span className="text-xs ml-1">+12% this month</span>
          </div>
        </div>

        <div className="text-center p-6 bg-gradient-to-br from-accent/10 to-accent/5 rounded-lg">
          <div className="text-3xl font-heading font-bold text-accent animate-count-up">
            {totalCO2.toLocaleString()}
          </div>
          <div className="text-sm text-text-secondary mt-2">Tons CO₂ Prevented</div>
          <div className="flex items-center justify-center mt-2 text-success">
            <Icon name="Leaf" size={16} />
            <span className="text-xs ml-1">Environmental Impact</span>
          </div>
        </div>

        <div className="text-center p-6 bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-lg">
          <div className="text-3xl font-heading font-bold text-secondary animate-count-up">
            {totalMaterials.toLocaleString()}
          </div>
          <div className="text-sm text-text-secondary mt-2">Tons Materials Recovered</div>
          <div className="flex items-center justify-center mt-2 text-warning">
            <Icon name="Recycle" size={16} />
            <span className="text-xs ml-1">Circular Economy</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <h3 className="font-heading font-semibold text-primary mb-4">Device Types Processed</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={deviceTypeData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {deviceTypeData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div>
          <h3 className="font-heading font-semibold text-primary mb-4">Regional Impact</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={regionData}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                <XAxis dataKey="region" stroke="var(--color-text-secondary)" />
                <YAxis stroke="var(--color-text-secondary)" />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'var(--color-card)',
                    border: '1px solid var(--color-border)',
                    borderRadius: '8px'
                  }}
                />
                <Bar dataKey="devices" fill="var(--color-primary)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="mt-6 p-4 bg-gradient-to-r from-accent/5 to-primary/5 rounded-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Icon name="Users" size={20} color="var(--color-primary)" />
            <div>
              <h3 className="font-heading font-semibold text-primary">Community Growth</h3>
              <p className="text-sm text-text-secondary">
                Join 50,000+ users making a difference worldwide
              </p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-lg font-heading font-bold text-accent">+2,847</div>
            <div className="text-xs text-text-secondary">New users this week</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalImpactMetrics;