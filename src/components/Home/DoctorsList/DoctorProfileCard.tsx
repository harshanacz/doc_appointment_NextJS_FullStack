import React from 'react';
import Image from 'next/image';

interface DoctorProfileCardProps {
  name: string;
  specialization: string;
  hospital: string;
  description: string;
  imageUrl: string;
}

const DoctorProfileCard: React.FC<DoctorProfileCardProps> = ({
  name,
  specialization,
  hospital,
  description,
  imageUrl,
}) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
      <div className="relative overflow-hidden h-40">
        <Image 
          src={`/${imageUrl}`} 
          alt={`${name}'s profile`} 
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 ease-in-out transform hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100"></div>
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold text-blue-800 transition-colors duration-300 hover:text-blue-600">{name}</h2>
        <p className="text-sm text-gray-500 transition-all duration-300 hover:text-gray-700 hover:translate-x-1">{specialization}</p>
        <p className="text-sm text-gray-500 transition-all duration-300 hover:text-gray-700 hover:translate-x-1">{hospital}</p>
        <p className="mt-2 text-gray-700 transition-all duration-300 hover:text-gray-900">{description}</p>
      </div>
    </div>
  );
};

export default DoctorProfileCard;
