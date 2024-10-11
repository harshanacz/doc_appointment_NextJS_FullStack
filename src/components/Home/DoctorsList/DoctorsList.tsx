import React from 'react';
import DoctorProfileCard from './DoctorProfileCard';

const DoctorsList: React.FC = () => {
  const doctors = [
    {
      name: 'Dr. John Smith',
      specialization: 'Cardiologist',
      hospital: 'City Hospital',
      description: 'Expert in heart diseases and treatments.',
      imageUrl: 'images/home/doctors/1.png',
    },
    {
      name: 'Dr. Jane Doe',
      specialization: 'Dermatologist',
      hospital: 'Skin Care Center',
      description: 'Specializes in skin conditions and treatments.',
      imageUrl: 'images/home/doctors/2.png',
    },
    {
      name: 'Dr. Alice Johnson',
      specialization: 'Pediatrician',
      hospital: 'Children’s Hospital',
      description: 'Caring for children and their health needs.',
      imageUrl: 'images/home/doctors/3.png',
    },
    {
      name: 'Dr. Robert Brown',
      specialization: 'Neurologist',
      hospital: 'Brain Health Institute',
      description: 'Specializes in brain and nervous system disorders.',
      imageUrl: 'images/home/doctors/4.png',
    },
    {
      name: 'Dr. Sarah Connor',
      specialization: 'Orthopedic Surgeon',
      hospital: 'Sports Medicine Center',
      description: 'Expert in bone and joint health.',
      imageUrl: 'images/home/doctors/5.png',
    },
    {
      name: 'Dr. Michael Scott',
      specialization: 'Endocrinologist',
      hospital: 'Hormone Health Clinic',
      description: 'Specializes in hormonal and metabolic disorders.',
      imageUrl: 'images/home/doctors/6.png',
    },
    {
      name: 'Dr. Emma Watson',
      specialization: 'Oncologist',
      hospital: 'Cancer Treatment Center',
      description: 'Expert in cancer diagnosis and treatment.',
      imageUrl: 'images/home/doctors/7.png',
    },
    {
      name: 'Dr. Liam Neeson',
      specialization: 'Surgeon',
      hospital: 'General Hospital',
      description: 'Experienced in various surgical procedures.',
      imageUrl: 'images/home/doctors/8.png',
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-4">
      {doctors.map((doctor, index) => (
        <DoctorProfileCard key={index} {...doctor} />
      ))}
    </div>
  );
};

export default DoctorsList;
