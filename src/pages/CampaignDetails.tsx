
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Share2, Clock, Calendar, Users } from 'lucide-react';

const allCampaigns = [
  {
    id: '1',
    title: 'Medical Support for Veterans',
    description: `
      Our veterans have sacrificed so much for our country, and many return with medical needs that extend beyond what standard healthcare provides. This campaign aims to bridge that gap by providing specialized medical services, equipment, and support for veterans with unique healthcare requirements.
      
      The funds raised will help veterans access:
      - Specialized medical equipment not covered by standard benefits
      - Physical therapy and rehabilitation services
      - Mental health counseling and PTSD treatment programs
      - Accessibility modifications for homes
      
      Your contribution makes a direct impact on the quality of life for those who have served our nation. Help us ensure that our veterans receive the care they deserve.
    `,
    imageSrc: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    raised: 45000,
    goal: 75000,
    category: 'Medical',
    daysLeft: 21,
    supporters: 183,
    updates: [
      {
        date: '2023-04-01',
        title: 'New Partnership with Regional Medical Center',
        content: 'We\'re excited to announce a new partnership with Regional Medical Center, which will allow us to provide additional specialized services to veterans in need.'
      },
      {
        date: '2023-03-15',
        title: 'Halfway to Our Goal!',
        content: 'Thanks to your generous support, we\'ve reached the halfway mark of our fundraising goal! The impact is already being felt as we\'ve been able to provide specialized equipment to 25 veterans this month.'
      }
    ]
  },
  {
    id: '2',
    title: 'Family Support Program',
    description: `
      Military families face unique challenges when service members are deployed. This campaign aims to provide comprehensive support systems for these families during the difficult periods of separation.
      
      The funds raised will support:
      - Emergency financial assistance for families facing hardship
      - Childcare services for spouses managing households alone
      - Community events and activities to connect military families
      - Educational resources and counseling for children coping with a parent's deployment
      
      By supporting military families, we strengthen the foundation that allows service members to focus on their mission, knowing their loved ones are cared for.
    `,
    imageSrc: 'https://images.unsplash.com/photo-1594750852563-5ed8e0428a7c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    raised: 28500,
    goal: 50000,
    category: 'Family',
    daysLeft: 45,
    supporters: 127,
    updates: [
      {
        date: '2023-03-28',
        title: 'Community Event Success',
        content: 'Our recent family picnic brought together over 50 military families for a day of connection and support. Thank you to all volunteers and donors who made this possible!'
      }
    ]
  },
  {
    id: '3',
    title: 'New Equipment for Active Units',
    description: `
      Our troops often deploy to challenging environments where having the right equipment can make all the difference. This campaign aims to provide additional gear and equipment that enhances safety, comfort, and operational effectiveness.
      
      The funds raised will provide:
      - Advanced communications equipment for improved unit coordination
      - Personal comfort items for deployed soldiers in remote locations
      - Specialized gear for extreme climate conditions
      - Enhanced medical kits for field operations
      
      While the military provides standard-issue equipment, your support helps fill gaps and provide extras that make a significant difference in the daily lives of our troops serving abroad.
    `,
    imageSrc: 'https://images.unsplash.com/photo-1579912437766-7896df6d3cd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    raised: 120000,
    goal: 200000,
    category: 'Equipment',
    daysLeft: 15,
    supporters: 432,
    updates: [
      {
        date: '2023-04-05',
        title: 'First Shipment Deployed',
        content: 'We\'re thrilled to announce that the first shipment of equipment has been sent to units stationed overseas. This includes 200 advanced communication devices and 500 cold-weather gear packages.'
      },
      {
        date: '2023-03-20',
        title: 'Major Donation Received',
        content: 'A generous corporate sponsor has matched $50,000 in donations this month, significantly accelerating our progress toward the goal!'
      },
      {
        date: '2023-02-28',
        title: 'Campaign Launch',
        content: 'Today marks the official launch of our equipment fundraising campaign. Thank you to everyone who has already contributed to give our troops the equipment they need.'
      }
    ]
  }
];

const CampaignDetails = () => {
  const { id } = useParams<{ id: string }>();
  const campaign = allCampaigns.find(c => c.id === id);
  
  if (!campaign) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-2">Campaign Not Found</h1>
            <p className="text-gray-600 mb-6">The campaign you're looking for doesn't exist or has been removed.</p>
            <Link to="/campaigns">
              <Button>View All Campaigns</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  
  const progress = Math.min((campaign.raised / campaign.goal) * 100, 100);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-72 md:h-96">
                  <img
                    src={campaign.imageSrc}
                    alt={campaign.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-navy text-white text-sm font-semibold px-3 py-1 rounded">
                    {campaign.category}
                  </div>
                </div>
                
                <div className="p-6">
                  <h1 className="text-3xl font-bold text-navy mb-4">{campaign.title}</h1>
                  
                  <Tabs defaultValue="about">
                    <TabsList className="grid grid-cols-3 mb-6">
                      <TabsTrigger value="about">About</TabsTrigger>
                      <TabsTrigger value="updates">Updates</TabsTrigger>
                      <TabsTrigger value="supporters">Supporters</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="about" className="space-y-4">
                      {campaign.description.split('\n').map((paragraph, index) => (
                        <p key={index} className="text-gray-700">
                          {paragraph}
                        </p>
                      ))}
                    </TabsContent>
                    
                    <TabsContent value="updates">
                      <div className="space-y-6">
                        {campaign.updates.length > 0 ? (
                          campaign.updates.map((update, index) => (
                            <div key={index} className="border-b pb-4 last:border-0">
                              <div className="flex items-center mb-2">
                                <Calendar size={16} className="text-gray-500 mr-2" />
                                <span className="text-sm text-gray-500">{update.date}</span>
                              </div>
                              <h3 className="text-lg font-semibold mb-2">{update.title}</h3>
                              <p className="text-gray-700">{update.content}</p>
                            </div>
                          ))
                        ) : (
                          <p className="text-gray-500">No updates yet. Check back soon!</p>
                        )}
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="supporters">
                      <div className="text-center py-8">
                        <Users size={48} className="mx-auto text-navy mb-4" />
                        <h3 className="text-2xl font-bold mb-2">{campaign.supporters}</h3>
                        <p className="text-gray-600">Generous supporters have contributed to this campaign</p>
                      </div>
                      
                      <div className="border-t pt-6">
                        <h3 className="font-semibold mb-4">Recent Donors</h3>
                        <div className="space-y-4">
                          {[
                            { name: 'John D.', amount: 100, message: 'Thank you for your service!' },
                            { name: 'Sarah M.', amount: 250, message: 'In honor of my father who served.' },
                            { name: 'Anonymous', amount: 50, message: '' },
                            { name: 'The Thompson Family', amount: 500, message: 'Proud to support our troops' },
                          ].map((donor, index) => (
                            <div key={index} className="flex justify-between border-b pb-3">
                              <div>
                                <p className="font-medium">{donor.name}</p>
                                {donor.message && <p className="text-sm text-gray-600">{donor.message}</p>}
                              </div>
                              <p className="font-semibold">${donor.amount}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-6">
                <div className="mb-6">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-semibold text-lg">${campaign.raised.toLocaleString()} raised</span>
                    <span className="text-gray-500">of ${campaign.goal.toLocaleString()}</span>
                  </div>
                  <Progress value={progress} className="h-2" />
                  <div className="flex justify-between mt-2 text-sm text-gray-600">
                    <span>{progress.toFixed(0)}% of goal</span>
                    <span>{campaign.supporters} supporters</span>
                  </div>
                </div>
                
                <div className="flex items-center mb-6 text-sm text-gray-600">
                  <Clock size={18} className="mr-2" />
                  <span>{campaign.daysLeft} days left to contribute</span>
                </div>
                
                <div className="space-y-3">
                  <Link to="/donate">
                    <Button className="w-full bg-deepred hover:bg-red-700 text-white py-6">
                      Donate Now
                    </Button>
                  </Link>
                  
                  <Button variant="outline" className="w-full flex items-center justify-center">
                    <Share2 size={18} className="mr-2" /> Share Campaign
                  </Button>
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h3 className="font-semibold mb-3">Campaign Organizer</h3>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-gray-200 mr-3 overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1061&q=80" 
                        alt="Organizer"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium">ArmyFund Team</p>
                      <p className="text-sm text-gray-600">Campaign Verified</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default CampaignDetails;
