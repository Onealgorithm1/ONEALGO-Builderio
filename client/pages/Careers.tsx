import React from "react";
import Layout from "../components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { MapPin, Clock, Users, Briefcase } from "lucide-react";

export default function Careers() {
  const jobOpenings = [
    {
      id: 1,
      title: "Senior Salesforce Developer",
      department: "Engineering",
      location: "Malvern, PA / Remote",
      type: "Full-time",
      experience: "3-5 years",
      description: "Join our team to build innovative Salesforce solutions for enterprise clients. You'll work with cutting-edge technologies and collaborate with cross-functional teams.",
      requirements: [
        "Salesforce Platform Developer certification",
        "Strong experience with Apex, Visualforce, and Lightning Components",
        "Knowledge of integration patterns and REST/SOAP APIs",
        "Experience with CI/CD and version control systems"
      ]
    },
    {
      id: 2,
      title: "Business Systems Analyst",
      department: "Consulting",
      location: "Hyderabad, India / Remote",
      type: "Full-time",
      experience: "2-4 years",
      description: "Analyze business requirements and translate them into technical solutions. Work directly with clients to understand their processes and optimize their systems.",
      requirements: [
        "Strong analytical and problem-solving skills",
        "Experience with CRM systems and business process mapping",
        "Excellent communication and client-facing abilities",
        "Bachelor's degree in Business, IT, or related field"
      ]
    },
    {
      id: 3,
      title: "Product Marketing Manager",
      department: "Marketing",
      location: "Dubai, UAE / Hybrid",
      type: "Full-time",
      experience: "4-6 years",
      description: "Drive go-to-market strategies for our technology solutions. Create compelling content and campaigns that showcase our expertise across different industries.",
      requirements: [
        "Proven track record in B2B technology marketing",
        "Strong content creation and storytelling abilities",
        "Experience with marketing automation platforms",
        "Understanding of enterprise software and consulting services"
      ]
    },
    {
      id: 4,
      title: "Implementation Specialist",
      department: "Professional Services",
      location: "Toronto, Canada / Remote",
      type: "Full-time",
      experience: "1-3 years",
      description: "Support the implementation of business automation solutions. Train clients on new systems and ensure smooth project delivery from start to finish.",
      requirements: [
        "Strong technical aptitude and learning ability",
        "Excellent training and presentation skills",
        "Experience with project management methodologies",
        "Customer service oriented mindset"
      ]
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-onealgo-blue-950 via-onealgo-blue-900 to-onealgo-blue-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Join Our <span className="text-onealgo-orange-500">Team</span>
            </h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto mb-8">
              Build the future of business automation with OneAlgorithm. We're looking for passionate individuals who want to make a real impact.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="text-lg py-2 px-4">Global Opportunities</Badge>
              <Badge variant="secondary" className="text-lg py-2 px-4">Remote-First Culture</Badge>
              <Badge variant="secondary" className="text-lg py-2 px-4">Growth & Learning</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Work With OneAlgorithm?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe in empowering our team members to do their best work while building solutions that transform businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Users className="w-12 h-12 text-onealgo-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Collaborative Culture</h3>
              <p className="text-gray-600">Work with a diverse, global team that values innovation and mutual support.</p>
            </div>
            <div className="text-center">
              <Briefcase className="w-12 h-12 text-onealgo-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Meaningful Projects</h3>
              <p className="text-gray-600">Build solutions that directly impact businesses and help them achieve their goals.</p>
            </div>
            <div className="text-center">
              <Clock className="w-12 h-12 text-onealgo-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Work-Life Balance</h3>
              <p className="text-gray-600">Flexible schedules and remote-first approach to help you thrive professionally and personally.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-20 bg-onealgo-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Current Openings
            </h2>
            <p className="text-xl text-gray-600">
              Explore opportunities to grow your career with us
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {jobOpenings.map((job) => (
              <Card key={job.id} className="border-2 hover:border-onealgo-orange-500 transition-colors h-full">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl text-onealgo-blue-950">{job.title}</CardTitle>
                    <Badge variant="outline" className="text-onealgo-orange-500 border-onealgo-orange-500">
                      {job.department}
                    </Badge>
                  </div>
                  <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {job.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {job.type}
                    </div>
                    <div className="flex items-center gap-1">
                      <Briefcase className="w-4 h-4" />
                      {job.experience}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col">
                  <p className="text-gray-600 mb-4">{job.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Requirements:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {job.requirements.map((req, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-onealgo-orange-500 mt-1">•</span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto">
                    <Button 
                      className="w-full bg-onealgo-orange-500 hover:bg-onealgo-orange-600 text-white"
                      onClick={() => window.open('mailto:careers@onealgorithm.com?subject=Application for ' + job.title, '_blank')}
                    >
                      Apply Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Don't See the Right Role?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            We're always looking for talented individuals. Send us your resume and let us know how you'd like to contribute to our mission.
          </p>
          <Button 
            size="lg"
            className="bg-onealgo-blue-950 hover:bg-onealgo-blue-900 text-white px-8 py-4"
            onClick={() => window.open('mailto:careers@onealgorithm.com?subject=General Career Inquiry', '_blank')}
          >
            Get in Touch
          </Button>
        </div>
      </section>
    </Layout>
  );
}
