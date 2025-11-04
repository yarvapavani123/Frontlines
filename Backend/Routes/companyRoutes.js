import express from 'express';
import {
  getAllCompanies,
  getCompanyById,
  createCompany,
  createMultipleCompanies,
  updateCompany,
  deleteCompany,
} from '../Controllers/companyController.js';
import { verifyToken } from '../middleware/verifyToken.js';

const router = express.Router();

// Public routes (no authentication required)
router.get('/companies', getAllCompanies);
router.get('/companies/:id', getCompanyById);

// Protected routes (authentication required)
router.post('/companies', verifyToken, createCompany);
router.post('/companies/bulk', verifyToken, createMultipleCompanies);
router.put('/companies/:id', verifyToken, updateCompany);
router.delete('/companies/:id', verifyToken, deleteCompany);

export default router;