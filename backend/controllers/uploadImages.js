import fs from 'fs';
import path from 'path';

import Resume from '../models/resumeModel.js';
import upload from '../middleware/uploadMiddleware.js';

export const uploadProfileImage = (req, res) => {
    try{
        upload.fields[{name: "thumbnail"},{name:"profileImage"}];
        (req, res, async (err) => {
            if (err) {
                return res.status(400).json({ message: "File upload failed",error: err.message });
            }

            const resumeId  = req.params.id;
            const resume = await Resume.findOne({ _id: resumeId, userId: req.user._id });

            if (!resume) {
                return res.status(404).json({ message: 'Resume not found' });
            }

            //Use cwd to upload files to the correct directory
            const uploadsFolder= path.join(process.cwd(), 'uploads');
            const baseUrl = `${req.protocol}://${req.get('host')}`;

            const newprofileImage = req.files.profileImage?.[0];
            const newThumbnail = req.files.thumnail?.[0];
            //url for new thumbnail
            if (newThumbnail) {
                if(resume.thumbnailLink){
                    const oldThumbnail = path.join(uploadsFolder, path.basename(resume.thumbnailLink));
                    if (fs.existsSync(oldThumbnail)) {
                        fs.unlinkSync(oldThumbnail);
                    }}
                    resume.thumbnailLink = `${baseUrl}/uploads/${newThumbnail.filename}`;    
            }

            //url for new profile image
              if (newProfileImage) {
                if(resume.profileInfo?.profilePreviewUrl){
                    const oldProfile = path.join(uploadsFolder, path.basename(resume.profileInfo.profilePreviewUrl));
                    if (fs.existsSync(oldProfile)) {
                        fs.unlinkSync(oldProfile);
                    }}
                    resume.profileInfo.profilePreviewUrl = `${baseUrl}/uploads/${newProfileImage.filename}`;    
            }
            await resume.save();
            res.status(200).json({ message: 'Profile image uploaded successfully', thumbnailLink: resume.thumbnailLink, profilePreviewUrl: resume.profileInfo.profilePreviewUrl });
        });

    }
    catch (error) {
        console.error('Error uploading profile image:', err);
        res.status(500).json({ message: 'Failed to upload profile image' , error: err.message });
    }
}