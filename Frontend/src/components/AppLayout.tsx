import React from 'react';
import { CompaniesProvider, useCompanies } from '../context/CompaniesContext';
import { FilterBar } from './FilterBar';
import { CompanyCard } from './CompanyCard';
import { CompanyTable } from './CompanyTable';
import { Pagination } from './Pagination';
import { ViewToggle } from './ViewToggle';

const CompaniesContent: React.FC = () => {
  const { filteredCompanies, viewMode, currentPage, itemsPerPage } = useCompanies();

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedCompanies = filteredCompanies.slice(startIndex, endIndex);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-900 to-blue-700 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-4xl font-bold mb-2">Companies Directory</h1>
              <p className="text-blue-100 text-lg">Discover leading companies across industries worldwide</p>
            </div>
            <ViewToggle />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <FilterBar />

        {paginatedCompanies.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-lg shadow-md">
            <svg className="w-24 h-24 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">No companies found</h3>
            <p className="text-gray-600">Try adjusting your filters to see more results</p>
          </div>
        ) : viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginatedCompanies.map(company => (
              <CompanyCard key={company.id} company={company} />
            ))}
          </div>
        ) : (
          <CompanyTable companies={paginatedCompanies} />
        )}

        <Pagination />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">Companies Directory</h3>
              <p className="text-gray-400 mb-4">Your comprehensive resource for discovering and connecting with leading companies worldwide.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">API Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Companies Directory. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default function AppLayout() {
  return (
    <CompaniesProvider>
      <CompaniesContent />
    </CompaniesProvider>
  );
}
