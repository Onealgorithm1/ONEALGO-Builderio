import React from "react";
import Layout from "../components/Layout";
import DetailedCollapsible from "../components/DetailedCollapsible";
import { Button } from "../components/ui/button";
import { Globe, Users, Zap, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-onealgo-blue-950 to-onealgo-blue-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our <span className="text-onealgo-orange-500">Services</span>
            </h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto mb-8">
              Comprehensive technology solutions designed to streamline your operations, 
              automate workflows, and drive sustainable business growth.
            </p>
          </div>
        </div>
      </section>

      {/* AMC Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-in">
                Annual Maintenance Contract{" "}
                <span className="text-onealgo-orange-500">(AMC)</span>
              </h2>
              <DetailedCollapsible
                title="AMC Benefits"
                summary="End-to-end system management with proactive monitoring, 24/7 support, and continuous optimization — keeping your team focused on driving sales while technology evolves with your business goals."
                details={[
                  "24/7 proactive monitoring and immediate issue resolution",
                  "Regular system updates and security patches",
                  "Comprehensive user training and onboarding support",
                  "Performance tuning and system optimization",
                  "Troubleshooting and technical support",
                  "Strategic technology alignment with business goals",
                  "Backup and disaster recovery management",
                  "Custom workflow development and refinement",
                ]}
              />
              <div className="mt-6">
                <Button asChild size="lg" className="bg-onealgo-blue-950 hover:bg-onealgo-blue-900 text-white">
                  <Link to="/contact">Get AMC Quote</Link>
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center hover:scale-105 transition-transform duration-300">
                <Globe className="w-12 h-12 text-onealgo-blue-950 mx-auto mb-4 animate-pulse-slow" />
                <h3 className="text-lg font-semibold text-gray-900">
                  24/7 Support
                </h3>
                <p className="text-gray-600">
                  Round-the-clock monitoring and support
                </p>
              </div>
              <div className="text-center hover:scale-105 transition-transform duration-300">
                <Users
                  className="w-12 h-12 text-onealgo-blue-950 mx-auto mb-4 animate-pulse-slow"
                  style={{ animationDelay: "0.5s" }}
                />
                <h3 className="text-lg font-semibold text-gray-900">
                  Expert Team
                </h3>
                <p className="text-gray-600">
                  Dedicated specialists for your systems
                </p>
              </div>
              <div className="text-center hover:scale-105 transition-transform duration-300">
                <Zap
                  className="w-12 h-12 text-onealgo-blue-950 mx-auto mb-4 animate-pulse-slow"
                  style={{ animationDelay: "1s" }}
                />
                <h3 className="text-lg font-semibold text-gray-900">
                  Proactive Updates
                </h3>
                <p className="text-gray-600">
                  Stay ahead with regular optimizations
                </p>
              </div>
              <div className="text-center hover:scale-105 transition-transform duration-300">
                <TrendingUp
                  className="w-12 h-12 text-onealgo-blue-950 mx-auto mb-4 animate-pulse-slow"
                  style={{ animationDelay: "1.5s" }}
                />
                <h3 className="text-lg font-semibold text-gray-900">
                  Performance Tuning
                </h3>
                <p className="text-gray-600">Continuous system optimization</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Additional Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive range of technology solutions tailored to your industry needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">System Integration</h3>
              <p className="text-gray-600 mb-4">Seamlessly connect your existing systems for optimal workflow efficiency.</p>
              <Link to="/contact" className="text-onealgo-blue-950 hover:text-onealgo-orange-500 font-medium">Learn More →</Link>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Custom Development</h3>
              <p className="text-gray-600 mb-4">Tailored software solutions designed specifically for your business needs.</p>
              <Link to="/contact" className="text-onealgo-blue-950 hover:text-onealgo-orange-500 font-medium">Learn More →</Link>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Cloud Migration</h3>
              <p className="text-gray-600 mb-4">Move your infrastructure to the cloud for improved scalability and performance.</p>
              <Link to="/contact" className="text-onealgo-blue-950 hover:text-onealgo-orange-500 font-medium">Learn More →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-onealgo-blue-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
            Let's discuss how our services can help streamline your operations and drive growth.
          </p>
          <Button asChild size="lg" className="bg-onealgo-orange-500 hover:bg-onealgo-orange-600 text-white">
            <Link to="/contact">Get Started Today</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
