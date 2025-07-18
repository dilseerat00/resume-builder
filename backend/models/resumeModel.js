import mongoose from 'mongoose';
const resumeSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
    },
    title:{
        type: String,
        required: true,
    },
    thumbnailLink: {
        type: String,
    },
    template:{
        theme:String,
        colorPalette: [String],
    },
    profileInfo:{
        profilePreviewUrl: String,
        fullName: String,
        designation: String,
        summary: String,
    },
    contactInfo:{
        email: String,
        phone: String,
        address: String,
        linkedIn: String,
        github: String,
        website: String,
    },

    //Internship Experience
    internshipExperience: [{
        companyName: String,
        role: String,
        startDate: Date,
        endDate: Date,
        description: String,
        },
    ],
    education: [{
        institution: String,
        degree: String,
        startDate: Date,
        endDate: Date,
    },],
    skills: [{
        name: String,
        proficiency: Number, // e.g., Beginner, Intermediate, Advanced
        },
    ],
    projects: [{
        title: String,
        description: String,
        github: String,
        },
    ],
    certifications: [{
        title: String,
        issuer: String,
        issueDate: Date,
        credentialUrl: String,
        },
    ],

    languages: [{
        name: String,
        proficiency: {type: String, enum:['Beginner','Intermediate','Advanced']} // e.g., Beginner, Intermediate, Advanced
        },
    ],
    interests: [String],
},
    {
    timestamps: {
        createdAt: "createdAt",
        updatedAt: "updatedAt"
    }
    }
);

export default mongoose.model("Resume", resumeSchema);