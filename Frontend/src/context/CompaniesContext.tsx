import React, { createContext, useContext, useState, useMemo, ReactNode, useEffect } from 'react';

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

interface CompaniesContextType {
  allCompanies: Company[];
  filteredCompanies: Company[];
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedIndustry: string;
  setSelectedIndustry: (industry: string) => void;
  selectedLocation: string;
  setSelectedLocation: (location: string) => void;
  selectedSize: string;
  setSelectedSize: (size: string) => void;
  sortBy: string;
  setSortBy: (sort: string) => void;
  viewMode: 'grid' | 'table';
  setViewMode: (mode: 'grid' | 'table') => void;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  itemsPerPage: number;
  clearFilters: () => void;
  industries: string[];
  locations: string[];
  isLoading: boolean;
  error: string | null;
}

const CompaniesContext = createContext<CompaniesContextType | undefined>(undefined);

export const CompaniesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [sortBy, setSortBy] = useState('name-asc');
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  // Fetch companies from backend
  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('http://localhost:5002/api/companies');
        const result = await response.json();
        
        if (result.success) {
          setCompanies(result.data);
          setError(null);
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

  const industries = useMemo(() => 
    Array.from(new Set(companies.map(c => c.industry))).sort(), 
    [companies]
  );

  const locations = useMemo(() => 
    Array.from(new Set(companies.map(c => c.location))).sort(), 
    [companies]
  );

  const filteredCompanies = useMemo(() => {
    let filtered = companies.filter(company => {
      const matchesSearch = searchTerm === '' || 
        company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        company.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        company.industry.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesIndustry = selectedIndustry === '' || company.industry === selectedIndustry;
      const matchesLocation = selectedLocation === '' || company.location === selectedLocation;
      
      let matchesSize = true;
      if (selectedSize === 'small') matchesSize = company.employees < 500;
      else if (selectedSize === 'medium') matchesSize = company.employees >= 500 && company.employees < 2000;
      else if (selectedSize === 'large') matchesSize = company.employees >= 2000;

      return matchesSearch && matchesIndustry && matchesLocation && matchesSize;
    });

    // Sort
    if (sortBy === 'name-asc') filtered.sort((a, b) => a.name.localeCompare(b.name));
    else if (sortBy === 'name-desc') filtered.sort((a, b) => b.name.localeCompare(a.name));
    else if (sortBy === 'employees-asc') filtered.sort((a, b) => a.employees - b.employees);
    else if (sortBy === 'employees-desc') filtered.sort((a, b) => b.employees - a.employees);
    else if (sortBy === 'founded-asc') filtered.sort((a, b) => a.founded - b.founded);
    else if (sortBy === 'founded-desc') filtered.sort((a, b) => b.founded - a.founded);

    return filtered;
  }, [companies, searchTerm, selectedIndustry, selectedLocation, selectedSize, sortBy]);

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedIndustry('');
    setSelectedLocation('');
    setSelectedSize('');
    setSortBy('name-asc');
    setCurrentPage(1);
  };

  return (
    <CompaniesContext.Provider value={{
      allCompanies: companies,
      filteredCompanies,
      searchTerm,
      setSearchTerm,
      selectedIndustry,
      setSelectedIndustry,
      selectedLocation,
      setSelectedLocation,
      selectedSize,
      setSelectedSize,
      sortBy,
      setSortBy,
      viewMode,
      setViewMode,
      currentPage,
      setCurrentPage,
      itemsPerPage,
      clearFilters,
      industries,
      locations,
      isLoading,
      error,
    }}>
      {children}
    </CompaniesContext.Provider>
  );
};

export const useCompanies = () => {
  const context = useContext(CompaniesContext);
  if (!context) throw new Error('useCompanies must be used within CompaniesProvider');
  return context;
};