import React from 'react';
import Carousel from './Carousel/Carousel';
import HighlightHeroButton from './Buttons/HighlightHeroButton';
import NormalHeroButton from './Buttons/NormalHeroButton';

const Hero = () => {
  return (
    <div className='lg:pt-24 md:pt-8 pt-24'>
      <Carousel />
      <div className="flex justify-center flex-wrap gap-4 mt-8">
        <div className="flex-grow min-w-[200px]">
          <HighlightHeroButton />
        </div>
        <div className="flex-grow min-w-[200px]">
          <NormalHeroButton
            href="/"
            imageUrl="/images/home/icons/premium-icon.png"
            title="ePremium"
            description="Member Benefits"
          />
        </div>
        <div className="flex-grow min-w-[200px]">
          <NormalHeroButton
            href="/"
            imageUrl="/images/home/icons/vehicle-medical.png"
            title="Driving License Medical"
            description="Book an Appointment"
          />
        </div>
        <div className="flex-grow min-w-[200px]">
          <NormalHeroButton
            href="/"
            imageUrl="/images/home/icons/IOMiconBlue.png"
            title="IOM Visa Medical"
            description="Pre-Migration Assessment"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
