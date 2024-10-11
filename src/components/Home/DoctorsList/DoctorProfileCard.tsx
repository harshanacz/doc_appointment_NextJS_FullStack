import React from 'react';

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
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
      <img src={imageUrl} alt={`${name}'s profile`} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-blue-800">{name}</h2>
        <p className="text-sm text-gray-500">{specialization}</p>
        <p className="text-sm text-gray-500">{hospital}</p>
        <p className="mt-2 text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default DoctorProfileCard;
