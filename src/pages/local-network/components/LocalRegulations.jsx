import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const LocalRegulations = () => {
  const [selectedTab, setSelectedTab] = useState('current');
  const [expandedRegulation, setExpandedRegulation] = useState(null);

  const regulationTabs = [
    { id: 'current', name: 'Current Laws', icon: 'FileText', count: 8 },
    { id: 'upcoming', name: 'Upcoming Changes', icon: 'Calendar', count: 3 },
    { id: 'contacts', name: 'Agency Contacts', icon: 'Phone', count: 5 }
  ];

  const currentRegulations = [
    {
      id: 1,
      title: "California Electronic Waste Recycling Act",
      jurisdiction: "State of California",
      effectiveDate: "2024-01-01",
      category: "Consumer Electronics",
      summary: "Requires proper disposal of covered electronic devices and prohibits disposal in landfills.",
      requirements: [
        "All covered electronic devices must be recycled through certified facilities",
        "Retailers must provide take-back programs for devices they sell",
        "Consumers cannot dispose of e-waste in regular trash",
        "Data destruction certificates required for business devices"
      ],
      penalties: "Fines up to $1,000 per violation for improper disposal",
      compliance: "95%",
      status: "Active",
      lastUpdated: "2024-01-15"
    },
    {
      id: 2,
      title: "San Francisco Mandatory Recycling Ordinance",
      jurisdiction: "City of San Francisco",
      effectiveDate: "2023-07-01",
      category: "Municipal Waste",
      summary: "Mandates separation of recyclable materials including electronics from general waste streams.",
      requirements: [
        "Businesses must provide separate e-waste collection bins",
        "Multi-family buildings require e-waste collection services",
        "Educational signage must be posted at collection points",
        "Monthly reporting required for commercial generators"
      ],
      penalties: "Warning for first offense, $100-$500 for subsequent violations",
      compliance: "87%",
      status: "Active",
      lastUpdated: "2024-02-01"
    },
    {
      id: 3,
      title: "Federal RCRA Hazardous Waste Regulations",
      jurisdiction: "Federal (EPA)",
      effectiveDate: "2023-01-01",
      category: "Hazardous Materials",
      summary: "Governs the management of hazardous components in electronic devices.",
      requirements: [
        "Proper handling of CRT monitors and televisions",
        "Lead-acid battery recycling requirements",
        "Mercury-containing device special handling",
        "Manifest tracking for hazardous e-waste shipments"
      ],
      penalties: "Civil penalties up to $37,500 per violation per day",
      compliance: "92%",
      status: "Active",
      lastUpdated: "2024-01-30"
    }
  ];

  const upcomingChanges = [
    {
      id: 1,
      title: "Extended Producer Responsibility Act",
      jurisdiction: "State of California",
      effectiveDate: "2024-07-01",
      impact: "High",
      description: "Manufacturers will be required to take financial responsibility for the entire lifecycle of their electronic products.",
      changes: [
        "Mandatory take-back programs for all manufacturers",
        "Product design requirements for recyclability",
        "Annual reporting on product lifecycle impacts",
        "Consumer education funding requirements"
      ],
      preparationSteps: [
        "Register with state EPR database",
        "Establish take-back infrastructure",
        "Update product labeling requirements",
        "Implement tracking systems"
      ]
    },
    {
      id: 2,
      title: "Right to Repair Legislation",
      jurisdiction: "State of California",
      effectiveDate: "2024-09-01",
      impact: "Medium",
      description: "Requires manufacturers to provide repair manuals, parts, and tools to consumers and independent repair shops.",
      changes: [
        "Mandatory availability of repair documentation",
        "Parts availability for minimum 7 years",
        "Diagnostic tools access for repair shops",
        "Warranty protection for third-party repairs"
      ],
      preparationSteps: [
        "Inventory current repair resources",
        "Establish parts distribution network",
        "Train customer service on new requirements",
        "Update warranty policies"
      ]
    }
  ];

  const agencyContacts = [
    {
      id: 1,
      agency: "California Department of Resources Recycling and Recovery (CalRecycle)",
      contact: "John Martinez",
      title: "E-waste Program Manager",
      phone: "(916) 341-6000",
      email: "ewaste.info@calrecycle.ca.gov",
      address: "1001 I Street, Sacramento, CA 95814",
      hours: "Mon-Fri: 8:00 AM - 5:00 PM",
      services: ["Permit applications", "Compliance assistance", "Violation reporting"]
    },
    {
      id: 2,
      agency: "San Francisco Department of Environment",
      contact: "Sarah Chen",
      title: "Waste Reduction Coordinator",
      phone: "(415) 355-3700",
      email: "environment@sfgov.org",
      address: "1455 Market Street, Suite 1200, San Francisco, CA 94103",
      hours: "Mon-Fri: 9:00 AM - 4:00 PM",
      services: ["Local ordinance guidance", "Business consultations", "Educational resources"]
    },
    {
      id: 3,
      agency: "US Environmental Protection Agency (EPA) Region 9",
      contact: "Michael Rodriguez",
      title: "Hazardous Waste Inspector",
      phone: "(415) 947-8000",
      email: "region9.hazwaste@epa.gov",
      address: "75 Hawthorne Street, San Francisco, CA 94105",
      hours: "Mon-Fri: 8:30 AM - 4:30 PM",
      services: ["Federal compliance", "Hazardous waste classification", "Enforcement actions"]
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active': return 'text-success';
      case 'Pending': return 'text-warning';
      case 'Expired': return 'text-error';
      default: return 'text-text-secondary';
    }
  };

  const getImpactColor = (impact) => {
    switch (impact) {
      case 'High': return 'text-error';
      case 'Medium': return 'text-warning';
      case 'Low': return 'text-success';
      default: return 'text-text-secondary';
    }
  };

  const toggleExpanded = (id) => {
    setExpandedRegulation(expandedRegulation === id ? null : id);
  };

  return (
    <div className="bg-white rounded-xl shadow-organic border border-border">
      {/* Header */}
      <div className="p-6 border-b border-border">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <Icon name="Scale" size={20} className="text-primary" />
            </div>
            <div>
              <h3 className="font-heading font-semibold text-text-primary">Local Regulations</h3>
              <p className="text-sm text-text-secondary">Stay compliant with e-waste laws</p>
            </div>
          </div>
          
          <Button
            variant="primary"
            size="sm"
            iconName="Download"
            className="bg-primary hover:bg-primary/90"
          >
            Download Guide
          </Button>
        </div>

        {/* Tab Navigation */}
        <div className="flex space-x-1 bg-surface rounded-lg p-1">
          {regulationTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedTab(tab.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-smooth flex-1 justify-center ${
                selectedTab === tab.id
                  ? 'bg-white text-primary shadow-sm'
                  : 'text-text-secondary hover:text-primary'
              }`}
            >
              <Icon name={tab.icon} size={16} />
              <span>{tab.name}</span>
              <span className={`px-2 py-0.5 rounded-full text-xs ${
                selectedTab === tab.id
                  ? 'bg-primary/10 text-primary' :'bg-text-secondary/10 text-text-secondary'
              }`}>
                {tab.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="p-6">
        {selectedTab === 'current' && (
          <div className="space-y-4">
            {currentRegulations.map((regulation) => (
              <div
                key={regulation.id}
                className="border border-border rounded-lg overflow-hidden"
              >
                <div
                  className="p-4 cursor-pointer hover:bg-surface transition-smooth"
                  onClick={() => toggleExpanded(regulation.id)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h4 className="font-heading font-semibold text-text-primary">
                          {regulation.title}
                        </h4>
                        <span className={`text-sm font-medium ${getStatusColor(regulation.status)}`}>
                          {regulation.status}
                        </span>
                      </div>
                      <p className="text-sm text-text-secondary mb-2">
                        {regulation.jurisdiction} • {regulation.category}
                      </p>
                      <p className="text-sm text-text-secondary">
                        {regulation.summary}
                      </p>
                    </div>
                    <div className="flex items-center space-x-3 ml-4">
                      <div className="text-right">
                        <div className="text-sm font-medium text-text-primary">
                          {regulation.compliance} compliant
                        </div>
                        <div className="text-xs text-text-secondary">
                          Updated {regulation.lastUpdated}
                        </div>
                      </div>
                      <Icon 
                        name={expandedRegulation === regulation.id ? "ChevronUp" : "ChevronDown"} 
                        size={20} 
                        className="text-text-secondary"
                      />
                    </div>
                  </div>
                </div>

                {expandedRegulation === regulation.id && (
                  <div className="border-t border-border p-4 bg-surface">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-medium text-text-primary mb-3">Requirements</h5>
                        <ul className="space-y-2">
                          {regulation.requirements.map((req, index) => (
                            <li key={index} className="flex items-start space-x-2 text-sm">
                              <Icon name="Check" size={16} className="text-success mt-0.5 flex-shrink-0" />
                              <span className="text-text-secondary">{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium text-text-primary mb-3">Penalties</h5>
                        <div className="flex items-start space-x-2 text-sm mb-4">
                          <Icon name="AlertTriangle" size={16} className="text-warning mt-0.5 flex-shrink-0" />
                          <span className="text-text-secondary">{regulation.penalties}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button
                            variant="outline"
                            size="sm"
                            iconName="ExternalLink"
                            className="border-primary text-primary hover:bg-primary/10"
                          >
                            View Full Text
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            iconName="BookOpen"
                            className="text-text-secondary hover:text-primary"
                          >
                            Compliance Guide
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {selectedTab === 'upcoming' && (
          <div className="space-y-4">
            {upcomingChanges.map((change) => (
              <div
                key={change.id}
                className="border border-border rounded-lg p-4"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h4 className="font-heading font-semibold text-text-primary">
                        {change.title}
                      </h4>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        change.impact === 'High' ? 'bg-error/10 text-error' :
                        change.impact === 'Medium'? 'bg-warning/10 text-warning' : 'bg-success/10 text-success'
                      }`}>
                        {change.impact} Impact
                      </span>
                    </div>
                    <p className="text-sm text-text-secondary mb-2">
                      {change.jurisdiction} • Effective {change.effectiveDate}
                    </p>
                    <p className="text-sm text-text-secondary">
                      {change.description}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-4">
                  <div>
                    <h5 className="font-medium text-text-primary mb-3">Key Changes</h5>
                    <ul className="space-y-2">
                      {change.changes.map((item, index) => (
                        <li key={index} className="flex items-start space-x-2 text-sm">
                          <Icon name="ArrowRight" size={16} className="text-accent mt-0.5 flex-shrink-0" />
                          <span className="text-text-secondary">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-text-primary mb-3">Preparation Steps</h5>
                    <ul className="space-y-2">
                      {change.preparationSteps.map((step, index) => (
                        <li key={index} className="flex items-start space-x-2 text-sm">
                          <Icon name="CheckSquare" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-text-secondary">{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex items-center space-x-2 mt-4 pt-4 border-t border-border">
                  <Button
                    variant="primary"
                    size="sm"
                    iconName="Bell"
                    className="bg-warning hover:bg-warning/90"
                  >
                    Set Reminder
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    iconName="Download"
                    className="border-primary text-primary hover:bg-primary/10"
                  >
                    Download Checklist
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}

        {selectedTab === 'contacts' && (
          <div className="space-y-4">
            {agencyContacts.map((contact) => (
              <div
                key={contact.id}
                className="border border-border rounded-lg p-4"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h4 className="font-heading font-semibold text-text-primary mb-1">
                      {contact.agency}
                    </h4>
                    <p className="text-sm text-text-secondary">
                      {contact.contact} • {contact.title}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2 text-sm">
                      <Icon name="Phone" size={16} className="text-text-secondary" />
                      <span className="text-text-primary">{contact.phone}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <Icon name="Mail" size={16} className="text-text-secondary" />
                      <span className="text-text-primary">{contact.email}</span>
                    </div>
                    <div className="flex items-start space-x-2 text-sm">
                      <Icon name="MapPin" size={16} className="text-text-secondary mt-0.5" />
                      <span className="text-text-primary">{contact.address}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <Icon name="Clock" size={16} className="text-text-secondary" />
                      <span className="text-text-primary">{contact.hours}</span>
                    </div>
                  </div>
                  <div>
                    <h5 className="font-medium text-text-primary mb-2">Services</h5>
                    <div className="flex flex-wrap gap-2">
                      {contact.services.map((service, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-2 mt-4 pt-4 border-t border-border">
                  <Button
                    variant="primary"
                    size="sm"
                    iconName="Phone"
                    className="bg-primary hover:bg-primary/90"
                  >
                    Call Now
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    iconName="Mail"
                    className="border-primary text-primary hover:bg-primary/10"
                  >
                    Send Email
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default LocalRegulations;