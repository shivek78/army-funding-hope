
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CampaignCard from '@/components/CampaignCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Filter, PlusCircle } from 'lucide-react';

const allCampaigns = [
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
  },
  {
    id: '4',
    title: 'Mental Health Services',
    description: 'Expanding access to mental health resources for service members dealing with PTSD and other deployment-related conditions.',
    imageSrc: 'https://images.unsplash.com/photo-1527689638836-411945a2b57c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    raised: 32000,
    goal: 60000,
    category: 'Medical'
  },
  {
    id: '5',
    title: 'Education Scholarships',
    description: 'Providing educational scholarships for children of fallen soldiers to support their academic futures.',
    imageSrc: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1744&q=80',
    raised: 89000,
    goal: 100000,
    category: 'Education'
  },
  {
    id: '6',
    title: 'Housing Assistance',
    description: 'Helping military families secure stable housing through down payment assistance and transitional housing support.',
    imageSrc: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1739&q=80',
    raised: 56000,
    goal: 125000,
    category: 'Housing'
  }
];

const categories = ['All', 'Medical', 'Family', 'Equipment', 'Education', 'Housing'];

const Campaigns = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  
  const filteredCampaigns = allCampaigns.filter(campaign => {
    const matchesSearch = campaign.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                        campaign.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'All' || campaign.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="bg-navy text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">Current Campaigns</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Browse our active fundraising campaigns and find a cause that resonates with you.
          </p>
        </div>
      </section>
      
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
            <div className="relative w-full md:w-auto md:flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Search campaigns..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <Link to="/campaigns/create">
              <Button className="bg-deepred hover:bg-red-700 text-white w-full md:w-auto">
                <PlusCircle className="mr-2 h-4 w-4" /> Create Campaign
              </Button>
            </Link>
          </div>
            
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  activeCategory === category 
                    ? 'bg-navy text-white' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
          
          {filteredCampaigns.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCampaigns.map((campaign) => (
                <CampaignCard key={campaign.id} {...campaign} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium text-gray-700 mb-2">No campaigns found</h3>
              <p className="text-gray-500">Try adjusting your search or filters</p>
            </div>
          )}
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Campaigns;
