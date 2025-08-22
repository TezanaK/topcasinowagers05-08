import React from 'react';
import { Shield, Award, Users, Clock, CheckCircle, Star, Lock, Globe } from 'lucide-react';

const TrustIndicators: React.FC = () => {
  const trustMetrics = [
    {
      icon: Users,
      value: "50,000+",
      label: "Players Served",
      description: "Canadian players trust our recommendations"
    },
    {
      icon: Award,
      value: "150+",
      label: "Casinos Reviewed",
      description: "Comprehensive analysis and testing"
    },
    {
      icon: Clock,
      value: "5+",
      label: "Years Experience",
      description: "Established casino review authority"
    },
    {
      icon: Star,
      value: "4.9/5",
      label: "User Rating",
      description: "Highly rated by Canadian players"
    }
  ];

  const securityFeatures = [
    {
      icon: Shield,
      title: "Licensed Operators",
      description: "Malta Gaming Authority & UK Gambling Commission"
    },
    {
      icon: Lock,
      title: "SSL Encryption",
      description: "256-bit security for all transactions"
    },
    {
      icon: CheckCircle,
      title: "Fair Play Certified",
      description: "Regular audits by eCOGRA and iTech Labs"
    },
    {
      icon: Globe,
      title: "Canadian Focused",
      description: "CAD support and Interac e-Transfer"
    }
  ];

  return (
    <div className="py-16 bg-gradient-to-br from-slate-100 to-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trust Metrics */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {trustMetrics.map((metric, index) => (
            <div key={index} className="modern-card shadow-modern text-center trust-badge">
              <div className="p-6">
                <div className="gradient-primary rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <metric.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-2">{metric.value}</div>
                <div className="font-semibold text-slate-700 mb-2">{metric.label}</div>
                <div className="text-sm text-slate-600">{metric.description}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Security Features */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">🔒 Your Security is Our Priority</h3>
          <p className="text-slate-600">We only recommend casinos that meet the highest security standards</p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {securityFeatures.map((feature, index) => (
            <div key={index} className="glass rounded-xl p-4 border border-slate-200 text-center">
              <div className="gradient-secondary rounded-xl w-12 h-12 flex items-center justify-center mx-auto mb-3">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-slate-900 mb-2">{feature.title}</h4>
              <p className="text-xs text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustIndicators;