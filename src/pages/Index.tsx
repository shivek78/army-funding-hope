import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CampaignCard from '@/components/CampaignCard';
import { ChevronRight, Shield, Heart, Users, PlusCircle } from 'lucide-react';

const campaigns = [
  {
    id: '1',
    title: 'Medical Support for Veterans',
    description: 'Providing essential medical services and equipment for veterans returning from active duty with specialized health needs.',
    imageSrc: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    raised: 45000,
    goal: 75000,
    category: 'Medical'
  },
  {
    id: '2',
    title: 'Family Support Program',
    description: 'Supporting families of deployed service members with essential resources, counseling, and community events.',
    imageSrc: 'https://images.unsplash.com/photo-1594750852563-5ed8e0428a7c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    raised: 28500,
    goal: 50000,
    category: 'Family'
  },
  {
    id: '3',
    title: 'New Equipment for Active Units',
    description: 'Providing additional gear and equipment for soldiers currently serving in challenging environments.',
    imageSrc: 'https://images.unsplash.com/photo-1579912437766-7896df6d3cd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    raised: 120000,
    goal: 200000,
    category: 'Equipment'
  }
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero-pattern py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-navy mb-4">
              Support Our Troops Through Community-Powered Funding
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Your contribution directly helps service members, veterans, and their families access the resources they need and deserve.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/donate">
                <Button className="bg-deepred hover:bg-red-700 text-white px-6 py-3 text-lg">
                  Donate Now
                </Button>
              </Link>
              <Link to="/campaigns">
                <Button variant="outline" className="border-navy text-navy hover:bg-navy hover:text-white px-6 py-3 text-lg">
                  View Campaigns
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Campaigns Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-navy">Featured Campaigns</h2>
            <div className="flex gap-4">
              <Link to="/campaigns" className="text-navy flex items-center hover:text-deepred transition-colors">
                View All <ChevronRight size={16} className="ml-1" />
              </Link>
              <Link to="/campaigns/create" className="flex items-center text-deepred hover:text-red-700 transition-colors">
                <PlusCircle size={16} className="mr-1" /> Create Campaign
              </Link>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {campaigns.map((campaign) => (
              <CampaignCard key={campaign.id} {...campaign} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Impact Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-navy mb-12">Our Impact</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-t-4 border-navy">
              <CardContent className="p-6 flex flex-col items-center">
                <div className="p-4 rounded-full bg-blue-50 mb-4">
                  <Shield className="h-10 w-10 text-navy" />
                </div>
                <h3 className="text-xl font-bold mb-2">$1.2M+ Raised</h3>
                <p className="text-gray-600">
                  Through the generosity of our donors, we've raised over $1.2 million to support military needs.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-t-4 border-deepred">
              <CardContent className="p-6 flex flex-col items-center">
                <div className="p-4 rounded-full bg-red-50 mb-4">
                  <Heart className="h-10 w-10 text-deepred" />
                </div>
                <h3 className="text-xl font-bold mb-2">85+ Projects Funded</h3>
                <p className="text-gray-600">
                  We've successfully funded over 85 critical projects that directly benefit our military community.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-t-4 border-gold">
              <CardContent className="p-6 flex flex-col items-center">
                <div className="p-4 rounded-full bg-yellow-50 mb-4">
                  <Users className="h-10 w-10 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">10,000+ Lives Impacted</h3>
                <p className="text-gray-600">
                  Our initiatives have touched the lives of more than 10,000 service members and their families.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-navy text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Your contribution, no matter the size, makes a significant impact on the lives of those who serve our country.
          </p>
          <Link to="/donate">
            <Button className="bg-deepred hover:bg-red-700 text-white px-8 py-3 text-lg">
              Donate Today
            </Button>
          </Link>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
