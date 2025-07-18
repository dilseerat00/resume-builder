import Resume from '../models/resumeModel.js';
import fs from 'fs';
import path from 'path';



export const createResume = async (req, res) => {
    try {
        const {title} = req.body;

        //Template for a new resume
        
        const defaultResumeData = {
            profileInfo: {
                profileImg: null,
                previewUrl: '',
                fullName: '',
                designation: '',
                summary: '',
            },
            contactInfo: {
                email: '',
                phone: '',
                address: '',
                linkedin: '',
                github: '',
                website: '',
            },
            internshipExperience: [
                {
                    companyName: '',
                    role: '',
                    startDate: null,
                    endDate: null,
                    description: '',
                },
            ],
            education: [
                {
                    institution: '',
                    degree: '',
                    startDate: null,
                    endDate: null,
                },
            ],
            skills: [
                {
                    name: '',
                    proficiency: 0,
                },
            ],
            projects: [
                {
                    title: '',
                    description: '',
                    github: '',
                },
            ],
            certifications: [
                {
                    title: '',
                    issuer: '',
                    issueDate: null,
                    credentialUrl: '',
                },
            ],
            languages: [
                {
                    name: '',
                    proficiency: '',
                },
            ],
            interests: [''],
        };

        const newResume = await Resume.create({
            userId: req.user._id,
            title,
            ...defaultResumeData,
            ...req.body
        });
        res.status(201).json(newResume);


        
    } catch (error) {
        res.status(400).json({ message:"Failed to create Resume", error:error.message });
    }
}

//Get all resumes for a user
export const getUserResumes = async (req, res) => {
    try {
        const resumes = await Resume.find({ userId: req.user._id }).sort({
            updateAt: -1
        });
        res.status(200).json(resumes);
    }
    catch (error) {
        res.status(400).json({ message: "Failed to fetch resumes", error: error.message });
    }
}

//Get resume by ID
export const getResumeById = async (req, res) => {
    try {
        const resume = await Resume.findById({ _id: req.params.id, userId: req.user._id });
        if (!resume) {
            return res.status(404).json({ message: "Resume not found" });
        }
        res.status(200).json(resume);
    } catch (error) {
        res.status(400).json({ message: "Failed to fetch resume", error: error.message });
    }
}

//Update resume by ID
export const updateResume = async (req, res) => {
    try {
        const resume = await Resume.findBOne({ _id: req.params.id, userId: req.user._id });
        if (!resume) {
            return res.status(404).json({ message: "Resume not found" });
        }
        
        //Merge the existing resume data with the new data
        Object.assign(resume, req.body);
        const savedResume = await resume.save();
        res.status(200).json(savedResume);
    } catch (error) {
        res.status(400).json({ message: "Failed to update resume", error: error.message });
    }
}

//Delete resume
export const deleteResume = async (req, res) => {
    try {
        const resume = await Resume.findOneAndDelete({ _id: req.params.id, userId: req.user._id });
        if (!resume) {
            return res.status(404).json({ message: "Resume not found" });
        }

        //Create a folder and store the resume there
        const uploadsFolder=path.join(process.cwd(), 'uploads');

        //Delete thumbnail 
        if(resume.thumbnailLink){
            const oldThumbnail = path.join(uploadsFolder, path.basename(resume.thumbnailLink));
            if (fs.existsSync(oldThumbnail)) {
                fs.unlinkSync(oldThumbnail);
            }
        }
        if(resume.profileInfo?.profilePreviewUrl){
            const oldProfile = path.join(uploadsFolder, path.basename(resume.profileInfo.profilePreviewUrl));
            if (fs.existsSync(oldProfile)) {
                fs.unlinkSync(oldProfile);
            }
        }

        //Delete resume document from mongoDB
        const deleted = await Resume.findByIdAndDelete({ _id: req.params.id, userId: req.user._id });
        if (!deleted) {
            return res.status(404).json({ message: "Resume not found" });
        }
        res.status(200).json({ message: "Resume deleted successfully" });
    } catch (error) {
        res.status(400).json({ message: "Failed to delete resume", error: error.message });
    }
}