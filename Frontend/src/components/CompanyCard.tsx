import React from 'react';

// Define Company interface locally
interface Company {
  id: string;
  name: string;
  logo: string;
  industry: string;
  location: string;
  employees: number;
  founded: number;
  website: string;
  description: string;
}

interface CompanyCardProps {
  company: Company;
}

export const CompanyCard: React.FC<CompanyCardProps> = ({ company }) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border border-gray-100">
      <div className="p-6">
        <div className="flex items-center justify-center h-24 mb-4 bg-gray-50 rounded-lg">
          <img 
            src={company.logo} 
            alt={company.name}
            className="w-20 h-20 object-contain"
          />
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 mb-2 truncate">{company.name}</h3>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-gray-600">
            <span className="font-semibold mr-2">Industry:</span>
            <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">{company.industry}</span>
          </div>
          
          <div className="flex items-center text-sm text-gray-600">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {company.location}
          </div>
          
          <div className="flex items-center text-sm text-gray-600">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 4 0 014 0z" />
            </svg>
            {company.employees.toLocaleString()} employees
          </div>
          
          <div className="flex items-center text-sm text-gray-600">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Founded {company.founded}
          </div>
        </div>
        
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">{company.description}</p>
        
        <a 
          href={`https://${company.website}`}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
        >
          Visit Website
        </a>
      </div>
    </div>
  );
};