import mongoose from 'mongoose';
import dotenv from 'dotenv';
//import Company from './models/Company.js';
import Company from './Models/Company.js'

dotenv.config();

const companies = [
  { id: '1', name: 'TechVision Inc', logo: 'https://d64gsuwffb70l.cloudfront.net/6908c25e16145887425a0e5a_1762181775508_849bf071.webp', industry: 'Technology', location: 'San Francisco', employees: 1200, founded: 2015, website: 'techvision.com', description: 'Leading AI and machine learning solutions' },
  { id: '2', name: 'DataStream Solutions', logo: 'https://d64gsuwffb70l.cloudfront.net/6908c25e16145887425a0e5a_1762181777290_fa034513.webp', industry: 'Technology', location: 'New York', employees: 850, founded: 2017, website: 'datastream.io', description: 'Big data analytics platform' },
  { id: '3', name: 'CloudNine Systems', logo: 'https://d64gsuwffb70l.cloudfront.net/6908c25e16145887425a0e5a_1762181778991_fe83cddf.webp', industry: 'Technology', location: 'Seattle', employees: 2400, founded: 2012, website: 'cloudnine.com', description: 'Cloud infrastructure services' },
  { id: '4', name: 'FinanceHub Pro', logo: 'https://d64gsuwffb70l.cloudfront.net/6908c25e16145887425a0e5a_1762181780748_6ac800d0.webp', industry: 'Finance', location: 'London', employees: 3200, founded: 2008, website: 'financehub.com', description: 'Digital banking solutions' },
  { id: '5', name: 'HealthTech Labs', logo: 'https://d64gsuwffb70l.cloudfront.net/6908c25e16145887425a0e5a_1762181782481_17da11a6.webp', industry: 'Healthcare', location: 'Boston', employees: 680, founded: 2019, website: 'healthtechlabs.com', description: 'Medical technology innovations' },
  { id: '6', name: 'EcoEnergy Corp', logo: 'https://d64gsuwffb70l.cloudfront.net/6908c25e16145887425a0e5a_1762181784187_713e20df.webp', industry: 'Energy', location: 'Austin', employees: 1500, founded: 2014, website: 'ecoenergy.com', description: 'Renewable energy solutions' },
  { id: '7', name: 'RetailMax Global', logo: 'https://d64gsuwffb70l.cloudfront.net/6908c25e16145887425a0e5a_1762181785919_3df14666.webp', industry: 'Retail', location: 'Chicago', employees: 5600, founded: 2005, website: 'retailmax.com', description: 'E-commerce platform leader' },
  { id: '8', name: 'EduSmart Platform', logo: 'https://d64gsuwffb70l.cloudfront.net/6908c25e16145887425a0e5a_1762181787604_8fb1c792.webp', industry: 'Education', location: 'Toronto', employees: 420, founded: 2020, website: 'edusmart.edu', description: 'Online learning solutions' },
  { id: '9', name: 'MediaWave Studios', logo: 'https://d64gsuwffb70l.cloudfront.net/6908c25e16145887425a0e5a_1762181789438_24bb6e45.webp', industry: 'Media', location: 'Los Angeles', employees: 980, founded: 2016, website: 'mediawave.tv', description: 'Digital content production' },
  { id: '10', name: 'AutoDrive Tech', logo: 'https://d64gsuwffb70l.cloudfront.net/6908c25e16145887425a0e5a_1762181790156_0103f807.webp', industry: 'Automotive', location: 'Detroit', employees: 2800, founded: 2011, website: 'autodrive.com', description: 'Autonomous vehicle systems' },
  { id: '11', name: 'SecureNet Systems', logo: 'https://d64gsuwffb70l.cloudfront.net/6908c25e16145887425a0e5a_1762181792060_e44ddf29.webp', industry: 'Cybersecurity', location: 'Tel Aviv', employees: 750, founded: 2018, website: 'securenet.io', description: 'Enterprise security solutions' },
  { id: '12', name: 'FoodTech Innovations', logo: 'https://d64gsuwffb70l.cloudfront.net/6908c25e16145887425a0e5a_1762181794589_75d09242.webp', industry: 'Food & Beverage', location: 'Portland', employees: 320, founded: 2021, website: 'foodtech.co', description: 'Sustainable food technology' },
  { id: '13', name: 'PropTech Solutions', logo: 'https://d64gsuwffb70l.cloudfront.net/6908c25e16145887425a0e5a_1762181796346_8d4812c4.webp', industry: 'Real Estate', location: 'Miami', employees: 540, founded: 2019, website: 'proptech.com', description: 'Real estate technology platform' },
  { id: '14', name: 'LogiChain Global', logo: 'https://d64gsuwffb70l.cloudfront.net/6908c25e16145887425a0e5a_1762181798066_cbe45142.webp', industry: 'Logistics', location: 'Singapore', employees: 4200, founded: 2010, website: 'logichain.com', description: 'Supply chain management' },
  { id: '15', name: 'BioGenesis Labs', logo: 'https://d64gsuwffb70l.cloudfront.net/6908c25e16145887425a0e5a_1762181799936_621f8b48.webp', industry: 'Biotechnology', location: 'San Diego', employees: 890, founded: 2013, website: 'biogenesis.bio', description: 'Genetic research and development' },
  { id: '16', name: 'TravelHub Connect', logo: 'https://d64gsuwffb70l.cloudfront.net/6908c25e16145887425a0e5a_1762181801673_e3117ac3.webp', industry: 'Travel', location: 'Dubai', employees: 1100, founded: 2016, website: 'travelhub.com', description: 'Travel booking platform' },
  { id: '17', name: 'SportsTech Pro', logo: 'https://d64gsuwffb70l.cloudfront.net/6908c25e16145887425a0e5a_1762181803394_a24d227e.webp', industry: 'Sports', location: 'Barcelona', employees: 460, founded: 2020, website: 'sportstech.pro', description: 'Sports analytics and wearables' },
  { id: '18', name: 'GreenBuild Corp', logo: 'https://d64gsuwffb70l.cloudfront.net/6908c25e16145887425a0e5a_1762181805389_002d5c86.webp', industry: 'Construction', location: 'Vancouver', employees: 1800, founded: 2009, website: 'greenbuild.ca', description: 'Sustainable construction solutions' },
  { id: '19', name: 'InsureTech Plus', logo: 'https://d64gsuwffb70l.cloudfront.net/6908c25e16145887425a0e5a_1762181806124_c6e9bffe.webp', industry: 'Insurance', location: 'Zurich', employees: 2100, founded: 2015, website: 'insuretech.ch', description: 'Digital insurance platform' },
  { id: '20', name: 'FashionForward', logo: 'https://d64gsuwffb70l.cloudfront.net/6908c25e16145887425a0e5a_1762181807871_55b1d95b.webp', industry: 'Fashion', location: 'Paris', employees: 620, founded: 2018, website: 'fashionforward.fr', description: 'Fashion tech and e-commerce' },
  { id: '21', name: 'AgriTech Systems', logo: 'https://d64gsuwffb70l.cloudfront.net/6908c25e16145887425a0e5a_1762181809578_125cdf26.webp', industry: 'Agriculture', location: 'Amsterdam', employees: 380, founded: 2019, website: 'agritech.nl', description: 'Smart farming solutions' },
  { id: '22', name: 'LegalTech Hub', logo: 'https://d64gsuwffb70l.cloudfront.net/6908c25e16145887425a0e5a_1762181811292_6fc1fb2e.webp', industry: 'Legal', location: 'Washington DC', employees: 290, founded: 2021, website: 'legaltech.com', description: 'Legal automation software' },
  { id: '23', name: 'SpaceVenture Inc', logo: 'https://d64gsuwffb70l.cloudfront.net/6908c25e16145887425a0e5a_1762181813111_ac89167c.webp', industry: 'Aerospace', location: 'Houston', employees: 3500, founded: 2012, website: 'spaceventure.com', description: 'Commercial space technology' },
  { id: '24', name: 'GameForge Studios', logo: 'https://d64gsuwffb70l.cloudfront.net/6908c25e16145887425a0e5a_1762181814908_1c20eb78.webp', industry: 'Gaming', location: 'Tokyo', employees: 720, founded: 2017, website: 'gameforge.jp', description: 'Game development and publishing' },
  { id: '25', name: 'CleanTech Solutions', logo: 'https://d64gsuwffb70l.cloudfront.net/6908c25e16145887425a0e5a_1762181816889_b2de0539.webp', industry: 'Environmental', location: 'Stockholm', employees: 510, founded: 2020, website: 'cleantech.se', description: 'Environmental technology' },
  { id: '26', name: 'TelecomNext', logo: 'https://d64gsuwffb70l.cloudfront.net/6908c25e16145887425a0e5a_1762181818606_7800dcf1.webp', industry: 'Telecommunications', location: 'Seoul', employees: 6200, founded: 2006, website: 'telecomnext.kr', description: '5G network infrastructure' },
  { id: '27', name: 'RoboTech Industries', logo: 'https://d64gsuwffb70l.cloudfront.net/6908c25e16145887425a0e5a_1762181820336_c0a5fce8.webp', industry: 'Robotics', location: 'Munich', employees: 1400, founded: 2014, website: 'robotech.de', description: 'Industrial robotics systems' },
  { id: '28', name: 'PharmaCare Global', logo: 'https://d64gsuwffb70l.cloudfront.net/6908c25e16145887425a0e5a_1762181825432_aa84aaed.webp', industry: 'Pharmaceuticals', location: 'Basel', employees: 8900, founded: 2003, website: 'pharmacare.ch', description: 'Pharmaceutical research' },
  { id: '29', name: 'MarketingAI Pro', logo: 'https://d64gsuwffb70l.cloudfront.net/6908c25e16145887425a0e5a_1762181827138_f9b8ef75.webp', industry: 'Marketing', location: 'Sydney', employees: 340, founded: 2022, website: 'marketingai.au', description: 'AI-powered marketing tools' },
  { id: '30', name: 'QuantumCompute', logo: 'https://d64gsuwffb70l.cloudfront.net/6908c25e16145887425a0e5a_1762181828831_f5b459af.webp', industry: 'Technology', location: 'Cambridge', employees: 180, founded: 2021, website: 'quantumcompute.uk', description: 'Quantum computing research' },
];

const seedDatabase = async () => {
  try {
    const mongoURI = process.env.MONGO_URI;
    
    if (!mongoURI) {
      throw new Error('MONGO_URI is not defined');
    }

    await mongoose.connect(mongoURI);
    console.log('✅ Connected to MongoDB');

    // Clear existing data
    await Company.deleteMany({});
    console.log('🗑️  Cleared existing companies');

    // Insert new data
    await Company.insertMany(companies);
    console.log(`✅ Successfully seeded ${companies.length} companies`);

    await mongoose.connection.close();
    console.log('👋 Database connection closed');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();