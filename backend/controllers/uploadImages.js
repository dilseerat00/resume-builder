import fs from 'fs';
import path from 'path';
import Resume from '../models/resumeModel.js';
import upload from '../middleware/uploadMiddleware.js';

export const uploadProfileImage = (req, res) => {
  const multiUpload = upload.fields([
    { name: "thumbnail", maxCount: 1 },
    { name: "profileImage", maxCount: 1 },
  ]);

  multiUpload(req, res, async (err) => {
    if (err) {
      return res.status(400).json({ message: "File upload failed", error: err.message });
    }

    try {
      const resumeId = req.params.id;
      const resume = await Resume.findOne({ _id: resumeId, userId: req.user._id });

      if (!resume) {
        return res.status(404).json({ message: 'Resume not found' });
      }

      const uploadsFolder = path.join(process.cwd(), 'uploads');
      const baseUrl = `${req.protocol}://${req.get('host')}`;

      const newProfileImage = req.files?.profileImage?.[0];
      const newThumbnail = req.files?.thumbnail?.[0];

      // Handle thumbnail
      if (newThumbnail) {
        if (resume.thumbnailLink) {
          const oldThumbnail = path.join(uploadsFolder, path.basename(resume.thumbnailLink));
          if (fs.existsSync(oldThumbnail)) fs.unlinkSync(oldThumbnail);
        }
        resume.thumbnailLink = `${baseUrl}/uploads/${newThumbnail.filename}`;
      }

      // Handle profile image
      if (newProfileImage) {
        if (resume.profileInfo?.profilePreviewUrl) {
          const oldProfile = path.join(uploadsFolder, path.basename(resume.profileInfo.profilePreviewUrl));
          if (fs.existsSync(oldProfile)) fs.unlinkSync(oldProfile);
        }
        resume.profileInfo.profilePreviewUrl = `${baseUrl}/uploads/${newProfileImage.filename}`;
      }

      await resume.save();

      return res.status(200).json({
        message: 'Profile image uploaded successfully',
        thumbnailLink: resume.thumbnailLink,
        profilePreviewUrl: resume.profileInfo.profilePreviewUrl,
      });

    } catch (error) {
      console.error('Error uploading profile image:', error);
      res.status(500).json({ message: 'Failed to upload profile image', error: error.message });
    }
  });
};
