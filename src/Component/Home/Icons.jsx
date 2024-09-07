// src/CategoriesGrid.js
import React from 'react';
import Category from './Category';
import fries from '../../assets/icons/fries.png'
import hotel from '../../assets/icons/hotel.png'
import beauty from '../../assets/icons/beauty.png'
import decor from '../../assets/icons/decor.png'
import edu from '../../assets/icons/edu.png'
import rent from '../../assets/icons/rent.png'
import hospital from '../../assets/icons/Hospital.png'
import contractor from '../../assets/icons/contractor.png'
import pet from '../../assets/icons/pet.png'
import pg from '../../assets/icons/hostel.png'
import estate from '../../assets/icons/estate.png'
import dentist from '../../assets/icons/dentist.png'
import gym from '../../assets/icons/gym.png'
import consultants from '../../assets/icons/consult.png'
import event from '../../assets/icons/event.png'
import car from '../../assets/icons/car.png'
import movers from '../../assets/icons/movers.png'
import courier from '../../assets/icons/courier.png'


const categories = [
  { image : fries, label: 'Restaurant', link:'/Restaurant' },
  { image : hotel, label: 'Hotels' , link:'/Hotel' },
  { image : beauty, label: 'Beauty Spa', link:'/Beauty' },
  { image : decor, label: 'Home Decor' , link:'/Decor' },
  { image : edu, label: 'Education', link:'/Education' },
  { image: rent, label: 'Rent & Hire' , link:'/Rent' },
  { image: hospital, label: 'Hospitals' , link:'/hospital' },
  { image: contractor, label: 'Contractors' },
  { image: pet, label: 'Pet Shops' },
  { image: pg, label: 'PG/Hostels' },
  { image: estate, label: 'Estate Agent' },
  { image: dentist, label: 'Dentists',link:'/Dental' },
  { image: gym, label: 'Gym' },
  { image: consultants, label: 'Consultants' },
  { image: event, label: 'Event Organisers' },
  { image: car, label: 'Driving Schools' },
  { image: movers, label: 'Packers & Movers' },
  { image: courier, label: 'Courier Service' },
];

const CategoriesGrid = () => {
  return (
    <div className="grid grid-cols-9 gap-4  p-4">
      {categories.map((category, index) => (
        <Category key={index} icon={category.image} label={category.label} link={category.link} />
      ))}
    </div>
  );
};

export default CategoriesGrid;
