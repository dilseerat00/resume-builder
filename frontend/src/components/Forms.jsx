"use client";

import { Input } from "./Inputs";
import { RatingInput } from "./ResumeSection";
import { Plus, Trash2 } from "lucide-react";
import {
  commonStyles,
  additionalInfoStyles,
  certificationInfoStyles,
  contactInfoStyles,
  educationDetailsStyles,
  profileInfoStyles,
  projectDetailStyles,
  skillsInfoStyles,
  workExperienceStyles,
} from "../assets/dummystyle";

// AdditionalInfoForm Component
export const AdditionalInfoForm = ({
  languages,
  interests,
  updateArrayItem,
  addArrayItem,
  removeArrayItem,
}) => {
  return (
    <div className={additionalInfoStyles.container}>
      <h2 className={additionalInfoStyles.heading}>Additional Information</h2>

      {/* Languages Section */}
      <div className="mb-10">
        <h3 className={additionalInfoStyles.sectionHeading}>
          <div className={additionalInfoStyles.dotViolet}></div>
          Languages
        </h3>

        <div className="space-y-6">
          {languages?.map((lang, index) => (
            <div key={index} className={additionalInfoStyles.languageItem}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                <Input
                  label="Language"
                  placeholder="e.g. English"
                  value={lang.name || ""}
                  onChange={({ target }) =>
                    updateArrayItem("languages", index, "name", target.value)
                  }
                />

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">
                    Proficiency
                  </label>
                  <select
                    className={commonStyles.select}
                    value={lang.proficiency || "Beginner"}
                    onChange={({ target }) =>
                      updateArrayItem(
                        "languages",
                        index,
                        "proficiency",
                        target.value
                      )
                    }
                  >
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                  </select>
                </div>
              </div>

              {languages.length > 1 && (
                <button
                  type="button"
                  className={commonStyles.trashButton}
                  onClick={() => removeArrayItem("languages", index)}
                >
                  <Trash2 size={16} />
                </button>
              )}
            </div>
          ))}

          <button
            type="button"
            className={`${commonStyles.addButtonBase} ${additionalInfoStyles.addButtonLanguage}`}
            onClick={() =>
              addArrayItem("languages", { name: "", proficiency: "Beginner" })
            }
          >
            <Plus size={16} /> Add Language
          </button>
        </div>
      </div>

      {/* Interests Section */}
      <div className="mb-6">
        <h3 className={additionalInfoStyles.sectionHeading}>
          <div className={additionalInfoStyles.dotOrange}></div>
          Interests
        </h3>
        <div className="space-y-4">
          {interests?.map((interest, index) => (
            <div key={index} className={additionalInfoStyles.interestItem}>
              <Input
                placeholder="e.g. Reading, Photography"
                value={interest || ""}
                onChange={({ target }) =>
                  updateArrayItem("interests", index, null, target.value)
                }
              />
              {interests.length > 1 && (
                <button
                  type="button"
                  className={commonStyles.trashButton}
                  onClick={() => removeArrayItem("interests", index)}
                >
                  <Trash2 size={16} />
                </button>
              )}
            </div>
          ))}

          <button
            type="button"
            className={`${commonStyles.addButtonBase} ${additionalInfoStyles.addButtonInterest}`}
            onClick={() => addArrayItem("interests", "")}
          >
            <Plus size={16} /> Add Interest
          </button>
        </div>
      </div>
    </div>
  );
};

// CertificationInfoForm Component
export const CertificationInfoForm = ({
  certifications,
  updateArrayItem,
  addArrayItem,
  removeArrayItem,
}) => {
  return (
    <div className={certificationInfoStyles.container}>
      <h2 className={certificationInfoStyles.heading}>Certifications</h2>
      <div className="space-y-6 mb-6">
        {certifications.map((cert, index) => (
          <div key={index} className={certificationInfoStyles.item}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Certificate Title"
                placeholder="Full Stack Web Developer"
                value={cert.title || ""}
                onChange={({ target }) =>
                  updateArrayItem(index, "title", target.value)
                }
              />

              <Input
                label="Issuer"
                placeholder="Coursera / Google / etc."
                value={cert.issuer || ""}
                onChange={({ target }) =>
                  updateArrayItem(index, "issuer", target.value)
                }
              />

              <Input
                label="Issue Date"
                type="date"
                value={cert.issueDate || ""}
                onChange={({ target }) =>
                  updateArrayItem(index, "issueDate", target.value)
                }
              />

              <Input
                label="Credential URL"
                placeholder="https://example.com/certificate"
                value={cert.credentialUrl || ""}
                onChange={({ target }) =>
                  updateArrayItem(index, "credentialUrl", target.value)
                }
              />
            </div>

            {certifications.length > 1 && (
              <button
                type="button"
                className={commonStyles.trashButton}
                onClick={() => removeArrayItem(index)}
              >
                <Trash2 size={16} />
              </button>
            )}
          </div>
        ))}

        <button
          type="button"
          className={`${commonStyles.addButtonBase} ${certificationInfoStyles.addButton}`}
          onClick={() =>
            addArrayItem({
              title: "",
              issuer: "",
              issueDate: null,
              credentialUrl: "",
            })
          }
        >
          <Plus size={16} />
          Add Certification
        </button>
      </div>
    </div>
  );
};

// ContactInfoForm Component
export const ContactInfoForm = ({ contactInfo, updateSection }) => {
  return (
    <div className={contactInfoStyles.container}>
      <h2 className={contactInfoStyles.heading}>Contact Information</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="md:col-span-2">
          <Input
            label="Address"
            placeholder="Short Address"
            value={contactInfo.location || ""}
            onChange={({ target }) => updateSection("location", target.value)}
          />
        </div>

        <Input
          label="Email"
          placeholder="john@example.com"
          type="email"
          value={contactInfo.email || ""}
          onChange={({ target }) => updateSection("email", target.value)}
        />

        <Input
          label="Phone Number"
          placeholder="1234567890"
          value={contactInfo.phone || ""}
          onChange={({ target }) => updateSection("phone", target.value)}
        />

        <Input
          label="LinkedIn"
          placeholder="https://linkedin.com/in/username"
          value={contactInfo.linkedin || ""}
          onChange={({ target }) => updateSection("linkedin", target.value)}
        />

        <Input
          label="GitHub"
          placeholder="https://github.com/username"
          value={contactInfo.github || ""}
          onChange={({ target }) => updateSection("github", target.value)}
        />

        <div className="md:col-span-2">
          <Input
            label="Portfolio / Website"
            placeholder="https://yourwebsite.com"
            value={contactInfo.website || ""}
            onChange={({ target }) => updateSection("website", target.value)}
          />
        </div>
      </div>
    </div>
  );
};

// EducationDetailsForm Component
export const EducationDetailsForm = ({
  educationInfo,
  updateArrayItem,
  addArrayItem,
  removeArrayItem,
}) => {
  return (
    <div className={educationDetailsStyles.container}>
      <h2 className={educationDetailsStyles.heading}>Education</h2>
      <div className="space-y-6 mb-6">
        {educationInfo.map((education, index) => (
          <div key={index} className={educationDetailsStyles.item}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Degree/Diploma/Schooling"
                placeholder="BTech in Computer Science"
                value={education.degree || ""}
                onChange={({ target }) =>
                  updateArrayItem(index, "degree", target.value)
                }
              />

              <Input
                label="Institution/Board"
                placeholder="XYZ University"
                value={education.institution || ""}
                onChange={({ target }) =>
                  updateArrayItem(index, "institution", target.value)
                }
              />

              <Input
                label="Start Date"
                type="month"
                value={education.startDate || ""}
                onChange={({ target }) =>
                  updateArrayItem(index, "startDate", target.value)
                }
              />

              <Input
                label="End Date"
                type="month"
                value={education.endDate || ""}
                onChange={({ target }) =>
                  updateArrayItem(index, "endDate", target.value)
                }
              />
                <Input
                label="CGPA/Percentage"
                placeholder="8.5 or 85%"
                value={education.cgpa || ""}
                onChange={({ target }) =>
                  updateArrayItem(index, "cgpa", target.value)
                }
              />
            </div>
            {educationInfo.length > 1 && (
              <button
                type="button"
                className={commonStyles.trashButton}
                onClick={() => removeArrayItem(index)}
              >
                <Trash2 size={16} />
              </button>
            )}
          </div>
        ))}

        <button
          type="button"
          className={`${commonStyles.addButtonBase} ${educationDetailsStyles.addButton}`}
          onClick={() =>
            addArrayItem({
              degree: "",
              institution: "",
              startDate: "",
              endDate: "",
            })
          }
        >
          <Plus size={16} /> Add Education
        </button>
      </div>
    </div>
  );
};

// ProfileInfoForm Component
export const ProfileInfoForm = ({ profileData, updateSection }) => {
  return (
    <div className={profileInfoStyles.container}>
      <h2 className={profileInfoStyles.heading}>Personal Information</h2>

      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="Full Name"
            placeholder="ABC"
            value={profileData.fullName || ""}
            onChange={({ target }) => updateSection("fullName", target.value)}
          />

          <Input
            label="Designation"
            placeholder="Full Stack Developer"
            value={profileData.designation || ""}
            onChange={({ target }) =>
              updateSection("designation", target.value)
            }
          />

          <div className="md:col-span-2">
            <label className="block text-sm font-bold text-slate-700 mb-3">
              Summary
            </label>
            <textarea
              className={profileInfoStyles.textarea}
              rows={4}
              placeholder="Short introduction about yourself"
              value={profileData.summary || ""}
              onChange={({ target }) => updateSection("summary", target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// ProjectDetailForm Component
export const ProjectDetailForm = ({
  projectInfo,
  updateArrayItem,
  addArrayItem,
  removeArrayItem,
}) => {
  return (
    <div className={projectDetailStyles.container}>
      <h2 className={projectDetailStyles.heading}>Projects</h2>
      <div className="space-y-6 mb-6">
        {projectInfo.map((project, index) => (
          <div key={index} className={projectDetailStyles.item}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <Input
                  label="Project Title"
                  placeholder="Portfolio Website"
                  value={project.title || ""}
                  onChange={({ target }) =>
                    updateArrayItem(index, "title", target.value)
                  }
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-bold text-slate-700 mb-3">
                  Description
                </label>
                <textarea
                  placeholder="Short description about the project"
                  className={projectDetailStyles.textarea}
                  rows={3}
                  value={project.description || ""}
                  onChange={({ target }) =>
                    updateArrayItem(index, "description", target.value)
                  }
                />
              </div>

              <Input
                label="GitHub Link"
                placeholder="https://github.com/username/project"
                value={project.github || ""}
                onChange={({ target }) =>
                  updateArrayItem(index, "github", target.value)
                }
              />
            </div>

            {projectInfo.length > 1 && (
              <button
                type="button"
                className={commonStyles.trashButton}
                onClick={() => removeArrayItem(index)}
              >
                <Trash2 size={16} />
              </button>
            )}
          </div>
        ))}

        <button
          type="button"
          className={`${commonStyles.addButtonBase} ${projectDetailStyles.addButton}`}
          onClick={() =>
            addArrayItem({
              title: "",
              description: "",
              github: "",
            })
          }
        >
          <Plus size={16} />
          Add Project
        </button>
      </div>
    </div>
  );
};

// SkillsInfoForm Component
export const SkillsInfoForm = ({
  skillsInfo,
  updateArrayItem,
  addArrayItem,
  removeArrayItem,
}) => {
  const getProficiencyLabel = (level) => {
    switch (level) {
      case 1:
        return "Beginner";
      case 2:
        return "Intermediate";
      case 3:
        return "Advanced";
      case 4:
        return "Expert";
      case 5:
        return "Master";
      default:
        return "None";
    }
  };

  return (
    <div className={skillsInfoStyles.container}>
      <h2 className={skillsInfoStyles.heading}>Skills</h2>
      <div className="space-y-6 mb-6">
        {skillsInfo.map((skill, index) => (
          <div key={index} className={skillsInfoStyles.item}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Skill Name"
                placeholder="e.g., React, Python"
                value={skill.name || ""}
                onChange={({ target }) =>
                  updateArrayItem(index, "name", target.value)
                }
              />

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  Proficiency ({getProficiencyLabel(skill.proficiency)})
                </label>
                <RatingInput
                  value={skill.proficiency || 0}
                  total={5}
                  color="#10b981" // Emerald tone
                  bgColor="#e2e8f0" // Gray background
                  onChange={(newValue) =>
                    updateArrayItem(index, "proficiency", newValue)
                  }
                />
              </div>
            </div>

            {skillsInfo.length > 1 && (
              <button
                type="button"
                className={commonStyles.trashButton}
                onClick={() => removeArrayItem(index)}
              >
                <Trash2 size={16} />
              </button>
            )}
          </div>
        ))}

        <button
          type="button"
          className={`${commonStyles.addButtonBase} ${skillsInfoStyles.addButton}`}
          onClick={() =>
            addArrayItem({
              name: "",
              proficiency: 0,
            })
          }
        >
          <Plus size={16} /> Add Skill
        </button>
      </div>
    </div>
  );
};

// WorkExperienceForm Component
export const WorkExperienceForm = ({
  workExperience,
  updateArrayItem,
  addArrayItem,
  removeArrayItem,
}) => {
  return (
    <div className={workExperienceStyles.container}>
      <h2 className={workExperienceStyles.heading}>Work Experience</h2>
      <div className="space-y-6 mb-6">
        {workExperience.map((experience, index) => (
          <div key={index} className={workExperienceStyles.item}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="CompanyName"
                placeholder="ABC Corp"
                value={experience.companyName || ""}
                onChange={({ target }) =>
                  updateArrayItem(index, "companyName", target.value)
                }
              />

              <Input
                label="Role"
                placeholder="Frontend Developer"
                value={experience.role || ""}
                onChange={({ target }) =>
                  updateArrayItem(index, "role", target.value)
                }
              />

              <Input
                label="Start Date"
                type="month"
                value={experience.startDate || ""}
                onChange={({ target }) =>
                  updateArrayItem(index, "startDate", target.value)
                }
              />

              <Input
                label="End Date"
                type="month"
                value={experience.endDate || ""}
                onChange={({ target }) =>
                  updateArrayItem(index, "endDate", target.value)
                }
              />
            </div>

            <div className="mt-6">
              <label className="block text-sm font-bold text-slate-700 mb-3">
                Description
              </label>
              <textarea
                placeholder="What did you do in this role?"
                className={workExperienceStyles.textarea}
                rows={3}
                value={experience.description || ""}
                onChange={({ target }) =>
                  updateArrayItem(index, "description", target.value)
                }
              />
            </div>

            {workExperience.length > 1 && (
              <button
                type="button"
                className={commonStyles.trashButton}
                onClick={() => removeArrayItem(index)}
              >
                <Trash2 size={16} />
              </button>
            )}
          </div>
        ))}

        <button
          type="button"
          className={`${commonStyles.addButtonBase} ${workExperienceStyles.addButton}`}
          onClick={() =>
            addArrayItem({
              companyName: "",
              role: "",
              startDate: "",
              endDate: "",
              description: "",
            })
          }
        >
          <Plus size={16} />
          Add Internship Experience
        </button>
      </div>
    </div>
  );
};
