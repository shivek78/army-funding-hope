
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

interface CampaignCardProps {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  raised: number;
  goal: number;
  category: string;
}

const CampaignCard = ({
  id,
  title,
  description,
  imageSrc,
  raised,
  goal,
  category,
}: CampaignCardProps) => {
  const progress = Math.min((raised / goal) * 100, 100);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-lg border border-gray-200">
      <div className="relative h-48 overflow-hidden">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
        />
        <div className="absolute top-3 right-3 bg-navy text-white text-xs font-semibold px-2 py-1 rounded">
          {category}
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="text-xl font-bold mb-2 text-navy">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>
        
        <div className="mb-4">
          <div className="flex justify-between text-sm mb-1">
            <span className="font-semibold">${raised.toLocaleString()} raised</span>
            <span className="text-gray-500">of ${goal.toLocaleString()}</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
        
        <div className="flex justify-between items-center">
          <Link to={`/campaigns/${id}`}>
            <Button variant="outline" className="text-navy border-navy hover:bg-navy hover:text-white">
              View Details
            </Button>
          </Link>
          <Link to="/donate">
            <Button className="bg-deepred hover:bg-red-700 text-white">
              Donate
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CampaignCard;
