import React from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import SocialShare from "../../components/SocialShare";
import {
  Package,
  Truck,
  Zap,
  TrendingUp,
  CheckCircle,
  Target,
  Shield,
  Users,
  BarChart3,
  Box,
  Network,
} from "lucide-react";
import { useSEO, getCanonicalUrl } from "../../hooks/use-seo";
import {
  StructuredData,
  createServiceSchema,
} from "../../components/StructuredData";

export default function OracleSCM() {
  useSEO({
    title: "OneAlgorithm — Oracle Supply Chain Management (SCM) Implementation",
    description:
      "Expert Oracle SCM Cloud implementation for procurement, inventory management, order fulfillment, and supply chain optimization. Enhance operational efficiency.",
    canonical: getCanonicalUrl("/services/oracle-scm"),
    keywords:
      "Oracle SCM, Supply Chain Management, Oracle Procurement, Oracle Inventory, order fulfillment, supply chain optimization, supplier management",
    ogTitle: "OneAlgorithm — Oracle SCM Implementation",
    ogDescription:
      "Comprehensive Oracle Supply Chain Management Cloud implementation for procurement, inventory, and order fulfillment.",
    ogUrl: getCanonicalUrl("/services/oracle-scm"),
    ogImage:
      "https://cdn.builder.io/api/v1/image/assets%2Fb90cab62d3d34e0087abec352888a96d%2F33f56ea89d674e2eb7334b03e9c57fd8?format=png&width=1200",
    twitterTitle: "Oracle SCM Implementation - OneAlgorithm",
    twitterDescription:
      "Expert Oracle Supply Chain Management Cloud implementation for optimized procurement and operations.",
    twitterImage:
      "https://cdn.builder.io/api/v1/image/assets%2Fb90cab62d3d34e0087abec352888a96d%2F33f56ea89d674e2eb7334b03e9c57fd8?format=png&width=1200",
  });

  const features = [
    {
      icon: <Package className="w-8 h-8 text-onealgo-orange-500" />,
      title: "Procurement Management",
      description:
        "Streamlined sourcing, purchasing, and supplier management with contract automation.",
    },
    {
      icon: <Box className="w-8 h-8 text-onealgo-orange-500" />,
      title: "Inventory Management",
      description:
        "Real-time inventory visibility, forecasting, and optimization across multiple locations.",
    },
    {
      icon: <Truck className="w-8 h-8 text-onealgo-orange-500" />,
      title: "Order Fulfillment",
      description:
        "End-to-end order management from quote to cash with warehouse optimization.",
    },
    {
      icon: <Network className="w-8 h-8 text-onealgo-orange-500" />,
      title: "Supplier Management",
      description:
        "Comprehensive supplier collaboration, performance monitoring, and relationship management.",
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-onealgo-orange-500" />,
      title: "Demand Planning",
      description:
        "Advanced forecasting and demand sensing for optimized planning and inventory.",
    },
    {
      icon: <Zap className="w-8 h-8 text-onealgo-orange-500" />,
      title: "Supply Chain Analytics",
      description:
        "Real-time dashboards and predictive analytics for supply chain insights.",
    },
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Cost Optimization",
      description:
        "Reduce procurement costs, inventory carrying costs, and operational expenses.",
    },
    {
      icon: Target,
      title: "Operational Excellence",
      description:
        "Streamlined processes improve efficiency and reduce lead times.",
    },
    {
      icon: Shield,
      title: "Supply Chain Resilience",
      description:
        "Better visibility and planning for risk mitigation and business continuity.",
    },
    {
      icon: Users,
      title: "Supplier Collaboration",
      description:
        "Enhanced collaboration tools improve supplier relationships and performance.",
    },
  ];

  const process = [
    {
      step: "1",
      title: "Assessment & Planning",
      description:
        "Evaluate current supply chain processes, pain points, and organizational requirements.",
    },
    {
      step: "2",
      title: "Configuration & Design",
      description:
        "Design procurement workflows, inventory strategies, and demand planning models.",
    },
    {
      step: "3",
      title: "Integration & Data Migration",
      description:
        "Integrate with existing systems, migrate supplier and inventory data.",
    },
    {
      step: "4",
      title: "Training & Optimization",
      description:
        "Comprehensive training and continuous optimization for maximum efficiency.",
    },
  ];

  return (
    <Layout>
      <StructuredData
        data={createServiceSchema(
          "Oracle Supply Chain Management Implementation Services",
          "Comprehensive Oracle SCM Cloud implementation for procurement, inventory management, order fulfillment, and supply chain optimization.",
          "Oracle SCM",
          "https://onealgorithm.com/services/oracle-scm",
        )}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-onealgo-blue-950 via-onealgo-blue-900 to-onealgo-blue-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Oracle <span className="text-onealgo-orange-500">Supply Chain</span> Management
                Implementation
              </h1>
              <ul className="text-xl text-blue-200 mb-8 space-y-3">
                <li className="flex items-start">
                  <span className="text-onealgo-orange-500 mr-3">•</span>
                  Comprehensive procurement and supplier management solutions.
                </li>
                <li className="flex items-start">
                  <span className="text-onealgo-orange-500 mr-3">•</span>
                  Real-time inventory visibility and optimization.
                </li>
                <li className="flex items-start">
                  <span className="text-onealgo-orange-500 mr-3">•</span>
                  End-to-end order fulfillment and warehouse management.
                </li>
                <li className="flex items-start">
                  <span className="text-onealgo-orange-500 mr-3">•</span>
                  Advanced demand planning and forecasting capabilities.
                </li>
              </ul>
              <Button
                asChild
                size="lg"
                className="bg-onealgo-orange-500 hover:bg-onealgo-orange-600 text-white px-8 py-4"
              >
                <Link to="/contact">Optimize Your Supply Chain</Link>
              </Button>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
                <Truck className="w-24 h-24 text-onealgo-orange-500 mx-auto mb-4" />
                <div className="text-center text-white">
                  <h3 className="text-2xl font-bold mb-2">
                    Supply Chain Excellence
                  </h3>
                  <p className="text-blue-200">
                    Streamline operations from procurement to fulfillment
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Oracle SCM Core Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive supply chain solutions for procurement, inventory,
              and order fulfillment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-2 hover:border-onealgo-blue-950 transition-colors h-full hover:shadow-lg"
              >
                <CardHeader>
                  {feature.icon}
                  <CardTitle className="text-xl text-onealgo-blue-950">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-onealgo-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Oracle SCM?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Optimize your supply chain for cost efficiency, visibility, and
              resilience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="border-2 hover:border-onealgo-blue-950 transition-colors h-full"
              >
                <CardHeader className="text-center">
                  <benefit.icon className="w-12 h-12 text-onealgo-blue-950 mx-auto mb-4" />
                  <CardTitle className="text-xl text-onealgo-blue-950">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Implementation Approach
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology for successful Oracle SCM implementation and
              optimization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-onealgo-blue-950 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl font-bold">
                    {step.step}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Capabilities */}
      <section className="py-20 bg-onealgo-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Advanced Supply Chain Capabilities
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <p className="text-gray-600">
                    <strong>Demand-Driven Supply Chain:</strong> AI-powered demand
                    sensing and collaborative forecasting.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <p className="text-gray-600">
                    <strong>Warehouse Management:</strong> Automated warehouse
                    operations and labor optimization.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <p className="text-gray-600">
                    <strong>Transportation Management:</strong> Optimized shipping
                    and carrier management with real-time tracking.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <p className="text-gray-600">
                    <strong>Supplier Scorecards:</strong> Performance metrics and
                    collaborative improvement programs.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <p className="text-gray-600">
                    <strong>Network Optimization:</strong> Multi-site supply chain
                    planning and optimization.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Ready to Transform Your Supply Chain?
              </h3>
              <p className="text-gray-600 mb-6">
                Discover how Oracle SCM can streamline procurement, optimize
                inventory, and improve supply chain visibility for competitive
                advantage.
              </p>
              <Button
                asChild
                className="w-full bg-onealgo-blue-950 hover:bg-onealgo-blue-900 text-white"
              >
                <Link to="/contact">Schedule a Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-onealgo-blue-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Optimize Your Supply Chain Operations
          </h2>
          <p className="text-xl text-blue-200 mb-8">
            Let our Oracle SCM experts help you implement a modern supply chain
            solution that drives efficiency and cost savings.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-onealgo-orange-500 hover:bg-onealgo-orange-600 text-white px-8 py-4"
            >
              <Link to="/contact">Get Started</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-onealgo-blue-950 px-8 py-4"
            >
              <Link to="/services/oracle-erp">Back to Oracle ERP</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Social Sharing */}
      <section className="py-8 bg-gray-50 border-t">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SocialShare
            title="Oracle Supply Chain Management Implementation - OneAlgorithm"
            className="justify-center"
          />
        </div>
      </section>
    </Layout>
  );
}
