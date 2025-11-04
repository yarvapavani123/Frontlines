import React, { useEffect, useState } from 'react';
import { useCompanies } from '../context/CompaniesContext';

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

export const CompanyTable: React.FC = () => {
  const { sortBy, setSortBy } = useCompanies();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [apiCompanies, setApiCompanies] = useState<Company[]>([]);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('http://localhost:5002/api/companies');
        const result = await response.json();
        
        if (result.success) {
          setApiCompanies(result.data);
        } else {
          setError('Failed to fetch companies');
        }
      } catch (err) {
        setError('Error connecting to server');
        console.error('Error fetching companies:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCompanies();
  }, []);

  const handleSort = (field: string) => {
    const [currentField, currentDirection] = sortBy.split('-');
    if (currentField === field) {
      setSortBy(`${field}-${currentDirection === 'asc' ? 'desc' : 'asc'}`);
    } else {
      setSortBy(`${field}-asc`);
    }
  };

  const SortIcon = ({ field }: { field: string }) => {
    const [currentField, direction] = sortBy.split('-');
    if (currentField !== field) return null;
    return direction === 'asc' ? '↑' : '↓';
  };

  if (isLoading) {
    return <div className="text-center py-8">Loading companies...</div>;
  }

  if (error) {
    return <div className="text-center py-8 text-red-600">{error}</div>;
  }

  if (apiCompanies.length === 0) {
    return <div className="text-center py-8">No companies found. Please run the seed file.</div>;
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Logo</th>
              <th 
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                onClick={() => handleSort('name')}
              >
                Company <SortIcon field="name" />
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Industry</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
              <th 
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                onClick={() => handleSort('employees')}
              >
                Employees <SortIcon field="employees" />
              </th>
              <th 
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                onClick={() => handleSort('founded')}
              >
                Founded <SortIcon field="founded" />
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Website</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {apiCompanies.map((company) => (
              <tr key={company.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap">
                  <img src={company.logo} alt={company.name} className="w-10 h-10 object-contain" />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{company.name}</div>
                  <div className="text-sm text-gray-500">{company.description}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                    {company.industry}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{company.location}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{company.employees.toLocaleString()}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{company.founded}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <a 
                    href={`https://${company.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-900"
                  >
                    Visit
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};