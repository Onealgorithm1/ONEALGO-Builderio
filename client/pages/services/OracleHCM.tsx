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
  Users,
  Briefcase,
  TrendingUp,
  CheckCircle,
  Target,
  Shield,
  Award,
  Zap,
  BarChart3,
  Lightbulb,
  Heart,
} from "lucide-react";
import { useSEO, getCanonicalUrl } from "../../hooks/use-seo";
import {
  StructuredData,
  createServiceSchema,
} from "../../components/StructuredData";

export default function OracleHCM() {
  useSEO({
    title: "OneAlgorithm — Oracle Human Capital Management (HCM) Implementation",
    description:
      "Expert Oracle HCM Cloud implementation for talent management, payroll, workforce management, and employee experience. Empower your workforce.",
    canonical: getCanonicalUrl("/services/oracle-hcm"),
    keywords:
      "Oracle HCM, Human Capital Management, Oracle Payroll, talent management, workforce management, employee experience, Oracle Recruiting",
    ogTitle: "OneAlgorithm — Oracle HCM Implementation",
    ogDescription:
      "Comprehensive Oracle HCM Cloud implementation for talent management, payroll, and workforce management.",
    ogUrl: getCanonicalUrl("/services/oracle-hcm"),
    ogImage:
      "https://cdn.builder.io/api/v1/image/assets%2Fb90cab62d3d34e0087abec352888a96d%2F33f56ea89d674e2eb7334b03e9c57fd8?format=png&width=1200",
    twitterTitle: "Oracle HCM Implementation - OneAlgorithm",
    twitterDescription:
      "Expert Oracle HCM Cloud implementation for modern talent and workforce management.",
    twitterImage:
      "https://cdn.builder.io/api/v1/image/assets%2Fb90cab62d3d34e0087abec352888a96d%2F33f56ea89d674e2eb7334b03e9c57fd8?format=png&width=1200",
  });

  const features = [
    {
      icon: <Users className="w-8 h-8 text-onealgo-orange-500" />,
      title: "Talent Management",
      description:
        "End-to-end talent acquisition, onboarding, development, and retention strategies.",
    },
    {
      icon: <Briefcase className="w-8 h-8 text-onealgo-orange-500" />,
      title: "Payroll & Compensation",
      description:
        "Automated payroll processing, tax compliance, and compensation management across regions.",
    },
    {
      icon: <Award className="w-8 h-8 text-onealgo-orange-500" />,
      title: "Performance Management",
      description:
        "Goal setting, continuous feedback, and performance appraisal processes.",
    },
    {
      icon: <Heart className="w-8 h-8 text-onealgo-orange-500" />,
      title: "Employee Experience",
      description:
        "Modern employee portal, benefits, and engagement platforms.",
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-onealgo-orange-500" />,
      title: "Workforce Analytics",
      description:
        "Advanced analytics for workforce planning, analytics, and insights.",
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-onealgo-orange-500" />,
      title: "Learning & Development",
      description:
        "Comprehensive learning management and skills development programs.",
    },
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Enhanced Productivity",
      description:
        "Streamlined HR processes free up resources for strategic initiatives.",
    },
    {
      icon: Target,
      title: "Talent Attraction & Retention",
      description:
        "Modern employee experience attracts and retains top talent.",
    },
    {
      icon: Shield,
      title: "Compliance & Risk",
      description:
        "Built-in compliance controls and audit capabilities reduce risk.",
    },
    {
      icon: Users,
      title: "Employee Engagement",
      description:
        "Modern tools and experience improve employee satisfaction and engagement.",
    },
  ];

  const process = [
    {
      step: "1",
      title: "Discovery & Strategy",
      description:
        "Assess current HR processes, organizational structure, and talent strategy.",
    },
    {
      step: "2",
      title: "Configuration & Design",
      description:
        "Design payroll structures, org structures, and talent workflows.",
    },
    {
      step: "3",
      title: "Data Migration & Integration",
      description:
        "Migrate employee and payroll data, integrate with other systems.",
    },
    {
      step: "4",
      title: "Training & Optimization",
      description:
        "Comprehensive training and ongoing optimization for user adoption.",
    },
  ];

  return (
    <Layout>
      <StructuredData
        data={createServiceSchema(
          "Oracle Human Capital Management Implementation Services",
          "Comprehensive Oracle HCM Cloud implementation for talent management, payroll, workforce management, and employee experience.",
          "Oracle HCM",
          "https://onealgorithm.com/services/oracle-hcm",
        )}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-onealgo-blue-950 via-onealgo-blue-900 to-onealgo-blue-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Oracle <span className="text-onealgo-orange-500">Human Capital</span> Management
                Implementation
              </h1>
              <ul className="text-xl text-blue-200 mb-8 space-y-3">
                <li className="flex items-start">
                  <span className="text-onealgo-orange-500 mr-3">•</span>
                  Modern talent management and acquisition solutions.
                </li>
                <li className="flex items-start">
                  <span className="text-onealgo-orange-500 mr-3">•</span>
                  Automated payroll and compensation across multiple regions.
                </li>
                <li className="flex items-start">
                  <span className="text-onealgo-orange-500 mr-3">•</span>
                  Employee experience and engagement platforms.
                </li>
                <li className="flex items-start">
                  <span className="text-onealgo-orange-500 mr-3">•</span>
                  Advanced workforce analytics and planning capabilities.
                </li>
              </ul>
              <Button
                asChild
                size="lg"
                className="bg-onealgo-orange-500 hover:bg-onealgo-orange-600 text-white px-8 py-4"
              >
                <Link to="/contact">Empower Your Workforce</Link>
              </Button>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
                <Users className="w-24 h-24 text-onealgo-orange-500 mx-auto mb-4" />
                <div className="text-center text-white">
                  <h3 className="text-2xl font-bold mb-2">
                    Talent Excellence
                  </h3>
                  <p className="text-blue-200">
                    Modern HR for the modern workforce
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
              Oracle HCM Core Modules
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive human capital management solutions for modern
              workforce challenges.
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
              Why Oracle HCM?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Build a modern HR operating model that supports talent-driven
              organizational success.
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
              A proven methodology for successful Oracle HCM deployment and user
              adoption.
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
                Advanced HCM Capabilities
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <p className="text-gray-600">
                    <strong>Global Payroll:</strong> Multi-country payroll with
                    tax compliance and statutory reporting.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <p className="text-gray-600">
                    <strong>Succession Planning:</strong> Enterprise-wide talent
                    succession and development planning.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <p className="text-gray-600">
                    <strong>Employee Portal:</strong> Modern, mobile-first
                    employee experience for self-service.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <p className="text-gray-600">
                    <strong>Workforce Analytics:</strong> AI-powered insights
                    for better talent decisions.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <p className="text-gray-600">
                    <strong>Benefits Administration:</strong> Comprehensive
                    benefits enrollment and administration platform.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Ready to Transform Your HR?
              </h3>
              <p className="text-gray-600 mb-6">
                Discover how Oracle HCM Cloud can help you build a modern talent
                strategy and create a better employee experience.
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
            Build a Modern Talent-Driven Organization
          </h2>
          <p className="text-xl text-blue-200 mb-8">
            Let our Oracle HCM experts help you implement modern human capital
            management to attract, retain, and develop top talent.
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
            title="Oracle Human Capital Management Implementation - OneAlgorithm"
            className="justify-center"
          />
        </div>
      </section>
    </Layout>
  );
}
