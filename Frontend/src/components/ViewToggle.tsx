import React from 'react';
import { useCompanies } from '../context/CompaniesContext';

export const ViewToggle: React.FC = () => {
  const { viewMode, setViewMode } = useCompanies();

  return (
    <div className="flex items-center gap-2 bg-white rounded-lg shadow-sm p-1 border border-gray-200">
      <button
        onClick={() => setViewMode('grid')}
        className={`px-4 py-2 rounded-md transition-colors flex items-center gap-2 ${
          viewMode === 'grid'
            ? 'bg-blue-600 text-white'
            : 'text-gray-600 hover:bg-gray-100'
        }`}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
        Grid
      </button>
      <button
        onClick={() => setViewMode('table')}
        className={`px-4 py-2 rounded-md transition-colors flex items-center gap-2 ${
          viewMode === 'table'
            ? 'bg-blue-600 text-white'
            : 'text-gray-600 hover:bg-gray-100'
        }`}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
        Table
      </button>
    </div>
  );
};
