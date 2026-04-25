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
  DollarSign,
  BarChart3,
  CreditCard,
  TrendingUp,
  CheckCircle,
  Target,
  Shield,
  Users,
  Wallet,
  PieChart,
  Lock,
} from "lucide-react";
import { useSEO, getCanonicalUrl } from "../../hooks/use-seo";
import {
  StructuredData,
  createServiceSchema,
} from "../../components/StructuredData";

export default function OracleFinancials() {
  useSEO({
    title: "OneAlgorithm — Oracle Financials Implementation",
    description:
      "Comprehensive Oracle Financials Cloud (ERP) implementation services for general ledger, accounts receivable, accounts payable, and cash management. Streamline your financial operations.",
    canonical: getCanonicalUrl("/services/oracle-financials"),
    keywords:
      "Oracle Financials, Oracle GL, Oracle AR, Oracle AP, cash management, accounting automation, financial close automation, Oracle Financials Cloud",
    ogTitle: "OneAlgorithm — Oracle Financials Implementation",
    ogDescription:
      "Comprehensive Oracle Financials Cloud implementation for GL, AR, AP, and cash management. Streamline financial operations with expert guidance.",
    ogUrl: getCanonicalUrl("/services/oracle-financials"),
    ogImage:
      "https://cdn.builder.io/api/v1/image/assets%2Fb90cab62d3d34e0087abec352888a96d%2F33f56ea89d674e2eb7334b03e9c57fd8?format=png&width=1200",
    twitterTitle: "Oracle Financials Implementation - OneAlgorithm",
    twitterDescription:
      "Expert Oracle Financials Cloud implementation for comprehensive financial operations management.",
    twitterImage:
      "https://cdn.builder.io/api/v1/image/assets%2Fb90cab62d3d34e0087abec352888a96d%2F33f56ea89d674e2eb7334b03e9c57fd8?format=png&width=1200",
  });

  const features = [
    {
      icon: <DollarSign className="w-8 h-8 text-onealgo-orange-500" />,
      title: "General Ledger (GL)",
      description:
        "Centralized chart of accounts, accounting rules, and financial reporting across your enterprise.",
    },
    {
      icon: <CreditCard className="w-8 h-8 text-onealgo-orange-500" />,
      title: "Accounts Receivable (AR)",
      description:
        "Streamlined invoicing, collections, and revenue recognition with automated workflows.",
    },
    {
      icon: <Wallet className="w-8 h-8 text-onealgo-orange-500" />,
      title: "Accounts Payable (AP)",
      description:
        "Efficient invoice management, payment processing, and supplier management.",
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-onealgo-orange-500" />,
      title: "Cash Management",
      description:
        "Comprehensive cash visibility, forecasting, and liquidity optimization.",
    },
    {
      icon: <PieChart className="w-8 h-8 text-onealgo-orange-500" />,
      title: "Financial Reporting",
      description:
        "Real-time financial reporting, dashboards, and regulatory compliance.",
    },
    {
      icon: <Lock className="w-8 h-8 text-onealgo-orange-500" />,
      title: "Close Management",
      description:
        "Automated financial close processes with audit trails and control frameworks.",
    },
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Financial Visibility",
      description:
        "Real-time insights into financial performance and cash position across your organization.",
    },
    {
      icon: Target,
      title: "Process Efficiency",
      description:
        "Automated workflows reduce manual tasks and accelerate financial cycles.",
    },
    {
      icon: Shield,
      title: "Compliance & Control",
      description:
        "Built-in controls, audit trails, and regulatory compliance capabilities.",
    },
    {
      icon: Users,
      title: "User Adoption",
      description:
        "Intuitive interfaces and comprehensive training ensure successful user adoption.",
    },
  ];

  const process = [
    {
      step: "1",
      title: "Discovery & Assessment",
      description:
        "Evaluate current financial processes, chart of accounts, and compliance requirements.",
    },
    {
      step: "2",
      title: "Design & Configuration",
      description:
        "Design GL structures, AR/AP workflows, and financial close procedures.",
    },
    {
      step: "3",
      title: "Data Migration & Testing",
      description:
        "Migrate financial data from legacy systems with validation and reconciliation.",
    },
    {
      step: "4",
      title: "Training & Go-Live",
      description:
        "Comprehensive training and support for smooth financial operations launch.",
    },
  ];

  return (
    <Layout>
      <StructuredData
        data={createServiceSchema(
          "Oracle Financials Implementation Services",
          "Comprehensive Oracle Financials Cloud implementation for general ledger, accounts receivable, accounts payable, and cash management.",
          "Oracle Financials",
          "https://onealgorithm.com/services/oracle-financials",
        )}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-onealgo-blue-950 via-onealgo-blue-900 to-onealgo-blue-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Oracle <span className="text-onealgo-orange-500">Financials</span> Cloud
                Implementation
              </h1>
              <ul className="text-xl text-blue-200 mb-8 space-y-3">
                <li className="flex items-start">
                  <span className="text-onealgo-orange-500 mr-3">•</span>
                  Complete GL, AR, AP, and cash management solutions.
                </li>
                <li className="flex items-start">
                  <span className="text-onealgo-orange-500 mr-3">•</span>
                  Streamlined financial close and compliance automation.
                </li>
                <li className="flex items-start">
                  <span className="text-onealgo-orange-500 mr-3">•</span>
                  Real-time financial reporting and dashboards.
                </li>
                <li className="flex items-start">
                  <span className="text-onealgo-orange-500 mr-3">•</span>
                  Expert guidance from certified Oracle specialists.
                </li>
              </ul>
              <Button
                asChild
                size="lg"
                className="bg-onealgo-orange-500 hover:bg-onealgo-orange-600 text-white px-8 py-4"
              >
                <Link to="/contact">Discuss Your Requirements</Link>
              </Button>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
                <DollarSign className="w-24 h-24 text-onealgo-orange-500 mx-auto mb-4" />
                <div className="text-center text-white">
                  <h3 className="text-2xl font-bold mb-2">
                    Financial Excellence
                  </h3>
                  <p className="text-blue-200">
                    Transform your finance operations with Oracle Cloud
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
              Oracle Financials Core Modules
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive financial management across all critical business functions.
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
              Why Oracle Financials?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Drive financial transformation and operational excellence with
              Oracle's leading cloud solution.
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
              A proven, structured methodology for successful Oracle Financials
              deployment.
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

      {/* Key Capabilities */}
      <section className="py-20 bg-onealgo-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Advanced Financial Capabilities
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <p className="text-gray-600">
                    <strong>Intercompany Accounting:</strong> Automated intercompany
                    transactions and eliminations for consolidated reporting.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <p className="text-gray-600">
                    <strong>Multi-Entity Consolidation:</strong> Simplified corporate
                    consolidation processes with variance analysis.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <p className="text-gray-600">
                    <strong>Revenue Recognition:</strong> ASC 606 compliant revenue
                    recognition automation.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <p className="text-gray-600">
                    <strong>Predictive Analytics:</strong> AI-driven insights for
                    forecasting and analysis.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <p className="text-gray-600">
                    <strong>Compliance Automation:</strong> Regulatory compliance
                    monitoring and reporting.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Ready to Modernize Your Finance Function?
              </h3>
              <p className="text-gray-600 mb-6">
                Discover how Oracle Financials Cloud can streamline your financial
                operations, improve compliance, and provide real-time financial
                visibility.
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
            Transform Your Finance Operations
          </h2>
          <p className="text-xl text-blue-200 mb-8">
            Let our Oracle Financials experts help you implement a modern,
            cloud-based financial management solution.
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
            title="Oracle Financials Implementation Services - OneAlgorithm"
            className="justify-center"
          />
        </div>
      </section>
    </Layout>
  );
}
