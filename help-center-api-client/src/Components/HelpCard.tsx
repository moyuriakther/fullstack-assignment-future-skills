import React from 'react';
import { Card } from 'antd';

interface HelpCardProps {
  title: string;
  description: string;
}

const HelpCard: React.FC<HelpCardProps> = ({ title, description }) => {
  return (
    <Card className="w-full md:w-1/3 bg-custom-gray border-2 border-gray-300 rounded-lg shadow-md text-left">
        <h2 className="text-lg font-semibold border-b-2 border-gray-300 pb-1">{title}</h2>
        <p className='pt-1'>{description}</p>
    </Card>

  //   <Card title={title}style={{ width: 300 }} className=''>
  //   {/* <h2 className="text-lg font-semibold">{title}</h2> */}
  //     <p>{description}</p>
  // </Card>
  );
};

export default HelpCard;
