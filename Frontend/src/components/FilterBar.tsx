import React from 'react';
import { useCompanies } from '../context/CompaniesContext';

export const FilterBar: React.FC = () => {
  const {
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
    clearFilters,
    industries,
    locations,
    filteredCompanies,
  } = useCompanies();

  const hasActiveFilters = searchTerm || selectedIndustry || selectedLocation || selectedSize;

  return (
    <div className="bg-white rounded-lg shadow-md p-4 md:p-6 mb-6">
      {/* Main Filter Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3 md:gap-4 mb-4">
        {/* Search - Takes 2 columns on large screens */}
        <div className="lg:col-span-2">
          <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1 md:mb-2">
            Search
          </label>
          <div className="relative">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search companies..."
              className="w-full px-3 md:px-4 py-2 pl-9 md:pl-10 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <svg 
              className="absolute left-2 md:left-3 top-2.5 w-4 h-4 md:w-5 md:h-5 text-gray-400" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {/* Industry */}
        <div>
          <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1 md:mb-2">
            Industry
          </label>
          <select
            value={selectedIndustry}
            onChange={(e) => setSelectedIndustry(e.target.value)}
            className="w-full px-3 md:px-4 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">All Industries</option>
            {industries.map(industry => (
              <option key={industry} value={industry}>{industry}</option>
            ))}
          </select>
        </div>

        {/* Location */}
        <div>
          <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1 md:mb-2">
            Location
          </label>
          <select
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
            className="w-full px-3 md:px-4 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">All Locations</option>
            {locations.map(location => (
              <option key={location} value={location}>{location}</option>
            ))}
          </select>
        </div>

        {/* Company Size */}
        <div>
          <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1 md:mb-2">
            Size
          </label>
          <select
            value={selectedSize}
            onChange={(e) => setSelectedSize(e.target.value)}
            className="w-full px-3 md:px-4 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">All Sizes</option>
            <option value="small">Small (0-499)</option>
            <option value="medium">Medium (500-1999)</option>
            <option value="large">Large (2000+)</option>
          </select>
        </div>

        {/* Sort By */}
        <div>
          <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1 md:mb-2">
            Sort By
          </label>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="w-full px-3 md:px-4 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="name-asc">Name (A-Z)</option>
            <option value="name-desc">Name (Z-A)</option>
            <option value="employees-asc">Employees (Low-High)</option>
            <option value="employees-desc">Employees (High-Low)</option>
            <option value="founded-asc">Founded (Oldest)</option>
            <option value="founded-desc">Founded (Newest)</option>
          </select>
        </div>
      </div>

      {/* Bottom Row - Results Count and Clear Button */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-3 border-t border-gray-200">
        <div className="flex items-center gap-2">
          <p className="text-xs md:text-sm text-gray-600">
            Showing <span className="font-semibold text-gray-900">{filteredCompanies.length}</span> {filteredCompanies.length === 1 ? 'company' : 'companies'}
          </p>
        </div>

        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            className="flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-lg transition-colors"
          >
            <svg 
              className="w-4 h-4" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
            Clear Filters
          </button>
        )}
      </div>
    </div>
  );
};