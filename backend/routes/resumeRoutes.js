import express from 'express';
import { protect } from '../middleware/authMiddleware.js';
import { createResume, getUserResumes, getResumeById,updateResume,deleteResume} from '../controllers/resumeController.js';
import {uploadProfileImage} from '../controllers/uploadImages.js';
const resumeRouter = express.Router();

resumeRouter.post('/',protect, createResume);
resumeRouter.post('',protect, createResume);
resumeRouter.get('/',protect, getUserResumes);
resumeRouter.get('/:id', protect, getResumeById);

resumeRouter.put('/:id', protect, updateResume);
resumeRouter.put('/:id/upload-images', protect, uploadProfileImage); 

resumeRouter.delete('/:id', protect, deleteResume);

export default resumeRouter;