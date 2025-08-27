import React from "react";
import Layout from "../components/Layout";
import { Button } from "../components/ui/button";

export default function About() {
  return (
    <Layout>
      <section className="py-20 bg-gradient-to-br from-onealgo-lighter via-white to-onealgo-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            About <span className="text-onealgo-orange-500">One</span>
            <span className="text-onealgo-blue-950">Algorithm</span>
          </h1>
          
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <p className="text-xl text-gray-600 mb-6">
              This page is currently under development. Our team is working to provide you with comprehensive information about OneAlgorithm's story, mission, and values.
            </p>
            
            <p className="text-gray-600 mb-8">
              In the meantime, you can learn more about our services and approach on our homepage, or get in touch with us directly.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => window.location.href = '/'}
                className="bg-onealgo-blue-950 hover:bg-onealgo-blue-900 text-white"
              >
                Back to Home
              </Button>
              <Button 
                onClick={() => window.location.href = '/contact'}
                variant="outline"
                className="border-onealgo-blue-950 text-onealgo-blue-950 hover:bg-onealgo-blue-950 hover:text-white"
              >
                Contact Us
              </Button>
            </div>
          </div>
          
          <p className="text-sm text-gray-500">
            Want this page completed? Continue prompting our AI assistant to fill in the content!
          </p>
        </div>
      </section>
    </Layout>
  );
}
