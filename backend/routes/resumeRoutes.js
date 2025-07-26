import express from 'express';
import multer from 'multer';
import { protect } from '../middleware/authMiddleware.js';
import {
  createResume,
  getUserResumes,
  getResumeById,
  updateResume,
  deleteResume
} from '../controllers/resumeController.js';
import { uploadProfileImage } from '../controllers/uploadImages.js';
import upload from '../middleware/uploadMiddleware.js';

const resumeRouter = express.Router();

// Base route: /api/resume
resumeRouter.post('/', protect, createResume); // Create Resume
resumeRouter.get('/', protect, getUserResumes); // Get All Resumes for User
resumeRouter.get('/:id', protect, getResumeById); // Get Resume by ID
resumeRouter.put('/:id', protect, updateResume); //  Update Resume


resumeRouter.put('/:id/upload-images', protect, uploadProfileImage); //  Upload Images
resumeRouter.delete('/:id', protect, deleteResume); //  Delete Resume

export default resumeRouter;
