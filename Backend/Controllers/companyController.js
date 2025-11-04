//import Company from '../models/Company.js';
import Company from '../Models/Company.js';


// Get all companies
export const getAllCompanies = async (req, res) => {
  try {
    const companies = await Company.find();
    res.status(200).json({
      success: true,
      count: companies.length,
      data: companies,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching companies',
      error: error instanceof Error ? error.message : 'Unknown error',
    });
  }
};

// Get single company by ID
export const getCompanyById = async (req, res) => {
  try {
    const { id } = req.params;
    const company = await Company.findOne({ id });

    if (!company) {
      res.status(404).json({
        success: false,
        message: 'Company not found',
      });
      return;
    }

    res.status(200).json({
      success: true,
      data: company,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching company',
      error: error instanceof Error ? error.message : 'Unknown error',
    });
  }
};

// Create new company
export const createCompany = async (req, res) => {
  try {
    const company = await Company.create(req.body);
    res.status(201).json({
      success: true,
      message: 'Company created successfully',
      data: company,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Error creating company',
      error: error instanceof Error ? error.message : 'Unknown error',
    });
  }
};

// Create multiple companies (bulk insert)
export const createMultipleCompanies = async (req, res) => {
  try {
    const companies = await Company.insertMany(req.body);
    res.status(201).json({
      success: true,
      message: `${companies.length} companies created successfully`,
      data: companies,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Error creating companies',
      error: error instanceof Error ? error.message : 'Unknown error',
    });
  }
};

// Update company
export const updateCompany = async (req, res) => {
  try {
    const { id } = req.params;
    const company = await Company.findOneAndUpdate(
      { id },
      req.body,
      { new: true, runValidators: true }
    );

    if (!company) {
      res.status(404).json({
        success: false,
        message: 'Company not found',
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: 'Company updated successfully',
      data: company,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Error updating company',
      error: error instanceof Error ? error.message : 'Unknown error',
    });
  }
};

// Delete company
export const deleteCompany = async (req, res) => {
  try {
    const { id } = req.params;
    const company = await Company.findOneAndDelete({ id });

    if (!company) {
      res.status(404).json({
        success: false,
        message: 'Company not found',
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: 'Company deleted successfully',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error deleting company',
      error: error instanceof Error ? error.message : 'Unknown error',
    });
  }
};