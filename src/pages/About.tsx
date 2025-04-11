
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Award, Target, Heart } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="bg-navy text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">About ArmyFund</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Learn about our mission, values, and the impact we're making together.
          </p>
        </div>
      </section>
      
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-navy mb-6">Our Mission</h2>
              <p className="text-gray-700 mb-4">
                ArmyFund was founded in 2015 with a simple yet powerful mission: to support the men and women of our armed forces through community-driven funding initiatives.
              </p>
              <p className="text-gray-700 mb-4">
                We believe that those who serve our country deserve the very best support both during and after their service. Through targeted fundraising campaigns, we aim to fill gaps in support systems and provide resources that enhance the lives of service members, veterans, and their families.
              </p>
              <p className="text-gray-700">
                Our platform enables direct community involvement, allowing citizens to contribute directly to specific causes and see the tangible impact of their generosity.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1608508644127-ba99d7732fee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                alt="Military personnel"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-navy mb-10 text-center">Our Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-t-4 border-navy">
              <CardContent className="p-6">
                <Shield className="h-12 w-12 text-navy mb-4" />
                <h3 className="text-xl font-bold mb-3">Integrity</h3>
                <p className="text-gray-600">
                  We maintain the highest standards of transparency in our operations and funding allocations.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-t-4 border-navy">
              <CardContent className="p-6">
                <Award className="h-12 w-12 text-navy mb-4" />
                <h3 className="text-xl font-bold mb-3">Excellence</h3>
                <p className="text-gray-600">
                  We strive for excellence in every initiative, ensuring maximum impact for our beneficiaries.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-t-4 border-navy">
              <CardContent className="p-6">
                <Target className="h-12 w-12 text-navy mb-4" />
                <h3 className="text-xl font-bold mb-3">Purpose</h3>
                <p className="text-gray-600">
                  Every campaign we launch serves a specific, well-defined purpose to address real needs.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-t-4 border-navy">
              <CardContent className="p-6">
                <Heart className="h-12 w-12 text-navy mb-4" />
                <h3 className="text-xl font-bold mb-3">Compassion</h3>
                <p className="text-gray-600">
                  We approach our work with genuine care for the wellbeing of service members and their families.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-navy mb-10 text-center">Our Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Major James Wilson (Ret.)', role: 'Founder & Executive Director', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80' },
              { name: 'Dr. Sarah Mitchell', role: 'Director of Operations', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80' },
              { name: 'Sgt. Robert Taylor (Ret.)', role: 'Outreach Coordinator', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80' },
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
