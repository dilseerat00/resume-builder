import React, { useRef, useState, useEffect, useCallback } from "react";
import DashboardLayout from "./DashboardLayout";
import {
  buttonStyles,
  containerStyles,
  statusStyles,
  iconStyles,
} from "../assets/dummystyle";
import { captureElementAsImage, dataURLtoFile } from "../utils/helper";
import {
  AdditionalInfoForm,
  CertificationInfoForm,
  ContactInfoForm,
  EducationDetailsForm,
  ProfileInfoForm,
  ProjectDetailForm,
  SkillsInfoForm,
  WorkExperienceForm,
} from "../components/Forms";
import { TitleInput } from "./Inputs";
import { useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  AlertCircle,
  Download,
  Palette,
  Save,
  Trash2,
  Check,
  Loader2,
  Trash,
} from "lucide-react";
import axiosInstance from "../utils/axiosInstance";
import { API_PATHS } from "../utils/apiPath";
import StepProgress from "../components/StepProgress";
import RenderResume from "../components/RenderResume";
import ThemeSelector from "../components/ThemeSelector";
import Modal from "../components/Modal";
import html2canvas from "html2canvas";

import toast from "react-hot-toast";
import { fixTailwindColors } from "../utils/colors";
import html2pdf from "html2pdf.js";

// Resize observer hook
const useResizeObserver = () => {
  const [size, setSize] = useState({ width: 0, height: 0 });

  const ref = useCallback((node) => {
    if (node) {
      // Create a ResizeObserver to observe changes in size
      const resizeObserver = new ResizeObserver((entries) => {
        const { width, height } = entries[0].contentRect;
        setSize({ width, height });
      });

      resizeObserver.observe(node);
    }
  }, []);

  return { ...size, ref };
};

const EditResume = () => {
  const { resumeId } = useParams();
  const navigate = useNavigate();
  const resumeDownloadRef = useRef(null);
  const thumbnailRef = useRef(null);

  const [openThemeSelector, setOpenThemeSelector] = useState(false);
  const [openPreviewModal, setOpenPreviewModal] = useState(false);
  const [currentPage, setCurrentPage] = useState("profile-info");
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [completionPercentage, setCompletionPercentage] = useState(0);

  const { width: previewWidth, ref: previewContainerRef } = useResizeObserver();

  const [resumeData, setResumeData] = useState({
    profileInfo: {
      profileImg: null,
      previewUrl: "",
      fullName: "",
      designation: "",
      summary: "",
    },
    contactInfo: {
      email: "",
      phone: "",
      address: "",
      linkedin: "",
      github: "",
      website: "",
    },
    workExperience: [
      {
        companyName: "",
        role: "",
        startDate: null,
        endDate: null,
        description: "",
      },
    ],
    education: [
      {
        institution: "",
        degree: "",
        startDate: null,
        endDate: null,
        cgpa: "",
      },
    ],
    skills: [
      {
        name: "",
        proficiency: 0,
      },
    ],
    projects: [
      {
        title: "",
        description: "",
        github: "",
      },
    ],
    certifications: [
      {
        title: "",
        issuer: "",
        issueDate: null,
        credentialUrl: "",
      },
    ],
    languages: [
      {
        name: "",
        proficiency: "Beginner",
      },
    ],
    interests: [""],
  });

  // Calculate completion percentage
  const calculateCompletion = () => {
    let completedFields = 0;
    let totalFields = 0;

    // Profile Info
    totalFields += 3;
    if (resumeData.profileInfo.fullName) completedFields++;
    if (resumeData.profileInfo.designation) completedFields++;
    if (resumeData.profileInfo.summary) completedFields++;

    // Contact Info
    totalFields += 3;
    if (resumeData.contactInfo.email) completedFields++;
    if (resumeData.contactInfo.phone) completedFields++;
    if (resumeData.contactInfo.address) completedFields++;

    // Internship Experience
    resumeData.workExperience.forEach((exp) => {
      totalFields += 5;
      if (exp.companyName) completedFields++;
      if (exp.role) completedFields++;
      if (exp.startDate) completedFields++;
      if (exp.endDate) completedFields++;
      if (exp.description) completedFields++;
    });

    // Education
    resumeData.education.forEach((edu) => {
      totalFields += 5;
      if (edu.degree) completedFields++;
      if (edu.institution) completedFields++;
      if (edu.startDate) completedFields++;
      if (edu.endDate) completedFields++;
      if (edu.cgpa) completedFields++;
    });

    // Skills
    resumeData.skills.forEach((skill) => {
      totalFields += 2;
      if (skill.name) completedFields++;
      if (skill.proficiency > 0) completedFields++;
    });

    // Projects
    resumeData.projects.forEach((project) => {
      totalFields += 3;
      if (project.title) completedFields++;
      if (project.description) completedFields++;
      if (project.github) completedFields++;
    });

    // Certifications
    resumeData.certifications.forEach((cert) => {
      totalFields += 4;
      if (cert.title) completedFields++;
      if (cert.issuer) completedFields++;
      if (cert.issueDate) completedFields++;
      if (cert.credentialUrl) completedFields++;
    });

    // Languages
    resumeData.languages.forEach((lang) => {
      totalFields += 2;
      if (lang.name) completedFields++;
      if (lang.proficiency) completedFields++;
    });

    // Interests
    totalFields += resumeData.interests.length;
    completedFields += resumeData.interests.filter(
      (i) => i.trim() !== ""
    ).length;

    const percentage = Math.round((completedFields / totalFields) * 100);
    setCompletionPercentage(percentage);
    return percentage;
  };

  useEffect(() => {
    calculateCompletion();
  }, [resumeData]);

  // Validate Inputs
  const validateAndNext = (e) => {
    const errors = [];

    switch (currentPage) {
      case "profile-info":
        const { fullName, designation, summary } = resumeData.profileInfo;
        if (!fullName.trim()) errors.push("Full Name is required");
        if (!designation.trim()) errors.push("Designation is required");
        if (!summary.trim()) errors.push("Summary is required");
        break;

      case "contact-info":
        const { email, phone, address, linkedin, github, website } =
          resumeData.contactInfo;
        if (!email || !/\S+@\S+\.\S+/.test(email))
          errors.email = "Valid email is required.";
        if (!phone || !/^[\d\s()+-]+$/.test(phone))
          errors.phone = "Valid phone number is required.";
        if (!address) errors.address = "Address is required.";
        if (linkedin && !linkedin.startsWith("http"))
          errors.linkedin = "LinkedIn must be a valid URL.";
        if (github && !github.startsWith("http"))
          errors.github = "GitHub must be a valid URL.";
        if (website && !website.startsWith("http"))
          errors.website = "Website must be a valid URL.";
        break;

      case "work-experience":
        resumeData.workExperience.forEach(
          ({ companyName, role, startDate, endDate }, index) => {
            if (!companyName || !companyName.trim())
              errors.push(
                `Company Name is required in experience ${index + 1}`
              );
            if (!role || !role.trim())
              errors.push(`Role is required in experience ${index + 1}`);
            if (!startDate || !endDate)
              errors.push(
                `Start and End dates are required in experience ${index + 1}`
              );
          }
        );
        break;

      case "education-info":
        resumeData.education.forEach(
          ({ degree, institution, startDate, endDate }, index) => {
            if (!degree.trim())
              errors.push(`Degree is required in education ${index + 1}`);
            if (!institution.trim())
              errors.push(`Institution is required in education ${index + 1}`);
            if (!startDate || !endDate)
              errors.push(
                `Start and End dates are required in education ${index + 1}`
              );
          }
        );
        break;

      case "skills":
        resumeData.skills.forEach(({ name, proficiency }, index) => {
          const skillNumber = index + 1;

          if (!name || !name.trim()) {
            errors.push(`Skill name is required in skill ${skillNumber}`);
          }

          if (
            proficiency === undefined ||
            proficiency === null ||
            typeof proficiency !== "number" ||
            proficiency < 0 ||
            proficiency > 100
          ) {
            errors.push(
              `Proficiency must be a number between 0 and 100 in skill ${skillNumber}`
            );
          }
        });
        break;

      case "projects":
        resumeData.projects.forEach(({ title, description }, index) => {
          if (!title.trim())
            errors.push(`Project Title is required in project ${index + 1}`);
          if (!description.trim())
            errors.push(
              `Project description is required in project ${index + 1}`
            );
        });
        break;

      case "certifications":
        resumeData.certifications.forEach(
          ({ title, issuer, issueDate, credentialUrl }, index) => {
            const certNumber = index + 1;

            if (!title || !title.trim()) {
              errors.push(
                `Certification title is required in certification ${certNumber}`
              );
            }

            if (!issuer || !issuer.trim()) {
              errors.push(`Issuer is required in certification ${certNumber}`);
            }

            if (!issueDate) {
              errors.push(
                `Issue date is required in certification ${certNumber}`
              );
            }

            if (credentialUrl && !/^https?:\/\/.+\..+/.test(credentialUrl)) {
              errors.push(
                `Credential URL must be a valid link in certification ${certNumber}`
              );
            }
          }
        );
        break;

      case "additionalInfo":
        if (
          resumeData.languages.length === 0 ||
          !resumeData.languages[0].name?.trim()
        ) {
          errors.push("At least one language is required");
        }
        if (
          resumeData.interests.length === 0 ||
          !resumeData.interests[0]?.trim()
        ) {
          errors.push("At least one interest is required");
        }
        break;

      default:
        break;
    }

    if (errors.length > 0) {
      setErrorMsg(errors.join(", "));
      return;
    }

    setErrorMsg("");
    goToNextStep();
  };

  const goToNextStep = () => {
    const pages = [
      "profile-info",
      "contact-info",
      "work-experience",
      "education-info",
      "skills",
      "projects",
      "certifications",
      "additionalInfo",
    ];

    if (currentPage === "additionalInfo") setOpenPreviewModal(true);

    const currentIndex = pages.indexOf(currentPage);
    if (currentIndex !== -1 && currentIndex < pages.length - 1) {
      const nextIndex = currentIndex + 1;
      setCurrentPage(pages[nextIndex]);

      const percent = Math.round((nextIndex / (pages.length - 1)) * 100);
      setProgress(percent);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  //Take user to previous page
  const goBack = () => {
    const pages = [
      "profile-info",
      "contact-info",
      "work-experience",
      "education-info",
      "skills",
      "projects",
      "certifications",
      "additionalInfo",
    ];

    if (currentPage === "profile-info") navigate("/dashboard");

    const currentIndex = pages.indexOf(currentPage);
    if (currentIndex > 0) {
      const prevIndex = currentIndex - 1;
      setCurrentPage(pages[prevIndex]);

      const percent = Math.round((prevIndex / (pages.length - 1)) * 100);
      setProgress(percent);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const renderForm = () => {
    switch (currentPage) {
      case "profile-info":
        return (
          <ProfileInfoForm
            profileData={resumeData?.profileInfo}
            updateSection={(key, value) =>
              updateSection("profileInfo", key, value)
            }
            onNext={validateAndNext}
          />
        );

      case "contact-info":
        return (
          <ContactInfoForm
            contactInfo={resumeData?.contactInfo}
            updateSection={(key, value) =>
              updateSection("contactInfo", key, value)
            }
          />
        );

      case "work-experience":
        return (
          <WorkExperienceForm
            workExperience={resumeData?.workExperience}
            updateArrayItem={(index, key, value) => {
              updateArrayItem("workExperience", index, key, value);
            }}
            addArrayItem={(newItem) => addArrayItem("workExperience", newItem)}
            removeArrayItem={(index) =>
              removeArrayItem("workExperience", index)
            }
          />
        );

      case "education-info":
        return (
          <EducationDetailsForm
            educationInfo={resumeData?.education}
            updateArrayItem={(index, key, value) => {
              updateArrayItem("education", index, key, value);
            }}
            addArrayItem={(newItem) => addArrayItem("education", newItem)}
            removeArrayItem={(index) => removeArrayItem("education", index)}
          />
        );

      case "skills":
        return (
          <SkillsInfoForm
            skillsInfo={resumeData?.skills}
            updateArrayItem={(index, key, value) => {
              updateArrayItem("skills", index, key, value);
            }}
            addArrayItem={(newItem) => addArrayItem("skills", newItem)}
            removeArrayItem={(index) => removeArrayItem("skills", index)}
          />
        );

      case "projects":
        return (
          <ProjectDetailForm
            projectInfo={resumeData?.projects}
            updateArrayItem={(index, key, value) => {
              updateArrayItem("projects", index, key, value);
            }}
            addArrayItem={(newItem) => addArrayItem("projects", newItem)}
            removeArrayItem={(index) => removeArrayItem("projects", index)}
          />
        );

      case "certifications":
        return (
          <CertificationInfoForm
            certifications={resumeData?.certifications}
            updateArrayItem={(index, key, value) => {
              updateArrayItem("certifications", index, key, value);
            }}
            addArrayItem={(newItem) => addArrayItem("certifications", newItem)}
            removeArrayItem={(index) =>
              removeArrayItem("certifications", index)
            }
          />
        );

      case "additionalInfo":
        return (
          <AdditionalInfoForm
            languages={resumeData.languages}
            interests={resumeData.interests}
            updateArrayItem={(section, index, key, value) =>
              updateArrayItem(section, index, key, value)
            }
            addArrayItem={(section, newItem) => addArrayItem(section, newItem)}
            removeArrayItem={(section, index) =>
              removeArrayItem(section, index)
            }
          />
        );

      default:
        return null;
    }
  };

  // Update section data

  const updateSection = (section, key, value) => {
    setResumeData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [key]: value,
      },
    }));
  };

  // Add new item to array section
  const updateArrayItem = (section, index, key, value) => {
    setResumeData((prev) => {
      const updatedArray = [...prev[section]];

      if (key === null) {
        updatedArray[index] = value;
      } else {
        updatedArray[index] = {
          ...updatedArray[index],
          [key]: value,
        };
      }

      return {
        ...prev,
        [section]: updatedArray,
      };
    });
  };

  // Add new item to array section
  const addArrayItem = (section, newItem) => {
    setResumeData((prev) => ({
      ...prev,
      [section]: [...prev[section], newItem],
    }));
  };

  // Remove item from array section
  const removeArrayItem = (section, index) => {
    setResumeData((prev) => {
      const updatedArray = [...prev[section]];
      updatedArray.splice(index, 1);
      return {
        ...prev,
        [section]: updatedArray,
      };
    });
  };

  // Fetch resume details by ID when component mounts
  const fetchResumeDetailsById = async () => {
    try {
      const response = await axiosInstance.get(
        API_PATHS.RESUME.GET_BY_ID(resumeId)
      );

      if (response.data && response.data.profileInfo) {
        const resumeInfo = response.data;

        setResumeData((prevState) => ({
          ...prevState,
          title: resumeInfo?.title || "Untitled",
          template: resumeInfo?.template || prevState?.template,
          profileInfo: resumeInfo?.profileInfo || prevState?.profileInfo,
          contactInfo: resumeInfo?.contactInfo || prevState?.contactInfo,
          workExperience:
            resumeInfo?.workExperience || prevState?.workExperience,
          education: resumeInfo?.education || prevState?.education,
          skills: resumeInfo?.skills || prevState?.skills,
          projects: resumeInfo?.projects || prevState?.projects,
          certifications:
            resumeInfo?.certifications || prevState?.certifications,
          languages: resumeInfo?.languages || prevState?.languages,
          interests: resumeInfo?.interests || prevState?.interests,
        }));
      }
    } catch (error) {
      console.error("Error fetching resume:", error);
      toast.error("Failed to load resume data");
    }
  };

  // Fetch resume details when component mounts. Helps in downloading and updating resume
  const uploadResumeImages = async () => {
    try {
      setIsLoading(true);

      const thumbnailElement = thumbnailRef.current;
      if (!thumbnailElement) {
        throw new Error("Thumbnail element not found");
      }

      const fixedThumbnail = fixTailwindColors(thumbnailElement);
      document.body.appendChild(fixedThumbnail);

      const thumbnailCanvas = await html2canvas(fixedThumbnail, {
        scale: 0.5,
        backgroundColor: "#FFFFFF",
        logging: false,
      });

      document.body.removeChild(fixedThumbnail);

      const thumbnailDataUrl = thumbnailCanvas.toDataURL("image/png");
      const thumbnailFile = dataURLtoFile(
        thumbnailDataUrl,
        `thumbnail-${resumeId}.png`
      );

      const formData = new FormData();
      formData.append("thumbnail", thumbnailFile);


      const uploadResponse = await axiosInstance.put(
        API_PATHS.RESUME.UPLOAD_IMAGES(resumeId),
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
          timeout: 30000, // 30 seconds timeout
        }
      );

      const { thumbnailLink } = uploadResponse.data;
      await updateResumeDetails(thumbnailLink);

      toast.success("Resume Updated Successfully");
      navigate("/dashboard");
    } catch (error) {
      console.error("Error Uploading Images:", error);
      if (error.response) {
        console.error("Backend Error:", error.response.data);
        toast.error(`Error: ${error.response.data.message}`);
      }

      toast.error("Failed to upload images");
    } finally {
      setIsLoading(false);
    }
  };

  //Update resume details with thumbnail link
  const updateResumeDetails = async (thumbnailLink) => {
    try {
      setIsLoading(true);

      await axiosInstance.put(API_PATHS.RESUME.UPDATE(resumeId), {
        ...resumeData,
        thumbnailLink: thumbnailLink || "",
        completion: completionPercentage,
      });
    } catch (err) {
      console.error("Error updating resume:", err);
      toast.error("Failed to update resume details");
    } finally {
      setIsLoading(false);
    }
  };

  // Handle delete resume

  const handleDeleteResume = async () => {
    try {
      setIsLoading(true);
      await axiosInstance.delete(API_PATHS.RESUME.DELETE(resumeId));
      toast.success("Resume deleted successfully");
      navigate("/dashboard");
    } catch (error) {
      console.error("Error deleting resume:", error);
      toast.error("Failed to delete resume");
    } finally {
      setIsLoading(false);
    }
  };

  // Download PDF function
  const downloadPDF = async () => {
    const element = resumeDownloadRef.current;
    if (!element) {
      toast.error("Failed to generate PDF. Please try again.");
      return;
    }

    setIsDownloading(true);
    setDownloadSuccess(false);
    const toastId = toast.loading("Generating PDFâ€¦");

    const override = document.createElement("style");
    override.id = "__pdf_color_override__";
    override.textContent = `
        * {
          color: #000 !important;
          background-color: #fff !important;
          border-color: #000 !important;
        }
      `;
    document.head.appendChild(override);

    //HTML to PDF generation
    try {
      await html2pdf()
        .set({
          margin: 0,
          filename: `${resumeData.title.replace(/[^a-z0-9]/gi, "_")}.pdf`,
          image: { type: "png", quality: 1.0 },
          html2canvas: {
            scale: 2,
            useCORS: true,
            backgroundColor: "#FFFFFF",
            logging: false,
            windowWidth: element.scrollWidth,
          },
          jsPDF: {
            unit: "mm",
            format: "a4",
            orientation: "portrait",
          },
          pagebreak: {
            mode: ["avoid-all", "css", "legacy"],
          },
        })
        .from(element)
        .save(); // Save the PDF file

      toast.success("PDF downloaded successfully!", { id: toastId });
      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 3000);
    } catch (err) {
      console.error("PDF error:", err);
      toast.error(`Failed to generate PDF: ${err.message}`, { id: toastId });
    } finally {
      document.getElementById("__pdf_color_override__")?.remove();
      setIsDownloading(false);
    }
  };

  //Theme selector function
  const updateTheme = (theme) => {
    setResumeData((prev) => ({
      ...prev,
      template: {
        theme: theme,
        colorPalette: [],
      },
    }));
  };

  useEffect(() => {
    if (resumeId) {
      fetchResumeDetailsById();
    }
  }, [resumeId]);

  return (
    <DashboardLayout>
      <div className={containerStyles.main}>
        <div className={containerStyles.header}>
          <TitleInput
            title={resumeData.title}
            setTitle={(title) => setResumeData({ ...resumeData, title })}
          />

          <div className="flex items-center gap-4">
            <button
              className={buttonStyles.theme}
              onClick={() => setOpenThemeSelector(true)}
            >
              <Palette size={11} className="text-gray-500" />
              <span className="text-sm">Theme</span>
            </button>
            <button
              className={buttonStyles.delete}
              onClick={handleDeleteResume}
              disabled={isLoading}
            >
              <Trash size={11} className="text-gray-500" />
              <span className="text-sm">Delete</span>
            </button>
            <button
              className={buttonStyles.download}
              onClick={() => setOpenPreviewModal(true)}
              disabled={isDownloading}
            >
              <Download size={11} className="text-gray-500" />
              <span className="text-sm">Download</span>
            </button>
          </div>
        </div>

        {/* Progress */}
        <div className={containerStyles.grid}>
          <div className={containerStyles.formContainer}>
            <StepProgress progress={progress} />
            {renderForm()}
            <div className="p-4 sm:p-6">
              {errorMsg && (
                <div className={statusStyles.error}>
                  <AlertCircle size={16} />
                  {errorMsg}
                </div>
              )}
              <div className="flex flex-wrap items-center justify-end gap-3">
                <button
                  className={buttonStyles.back}
                  onClick={goBack}
                  disabled={isLoading}
                >
                  <ArrowLeft size={16} />
                  Back
                </button>

                <button
                  className={buttonStyles.save}
                  onClick={uploadResumeImages}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <Loader2 size={16} className="animate-spin" />
                  ) : (
                    <Save size={16} />
                  )}
                  {isLoading ? "Saving..." : "Save & Exit"}
                </button>

                <button
                  className={buttonStyles.next}
                  onClick={validateAndNext}
                  disabled={isLoading}
                >
                  {currentPage === "additionalInfo" && <Download size={16} />}
                  {currentPage === "additionalInfo"
                    ? "Preview & Download"
                    : "Next"}
                  {currentPage === "additionalInfo" && (
                    <ArrowLeft size={16} className="rotate-180" />
                  )}
                </button>
              </div>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className={containerStyles.previewContainer}>
              <div className="text-center mb-4">
                <div className={statusStyles.completionBadge}>
                  <div className={iconStyles.pulseDot}></div>
                  <span>Preview - {completionPercentage}% Complete</span>
                </div>
              </div>

              <div
                className="preview-container relative"
                ref={previewContainerRef}
              >
                <div className={containerStyles.previewInner}>
                  <RenderResume
                    key={`preview-${resumeData?.template?.theme}`}
                    templateId={resumeData?.template?.theme || ""}
                    resumeData={resumeData}
                    containerWidth={previewWidth}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Modal Section*/}
      <Modal
        isOpen={openThemeSelector}
        onClose={() => setOpenThemeSelector(false)}
        title="Select Theme"
      >
        <div className={containerStyles.modalContent}>
          <ThemeSelector
            selectedTheme={resumeData?.template?.theme}
            setSelectedTheme={updateTheme}
            resumeData={resumeData}
            onClose={() => setOpenThemeSelector(false)}
          />
        </div>
      </Modal>

      <Modal
        isOpen={openPreviewModal}
        onClose={() => setOpenPreviewModal(false)}
        title={resumeData?.title}
        showActionBtn
        actionBtnText={
          isDownloading
            ? "Downloading..."
            : downloadSuccess
            ? "Downloaded"
            : "Download PDF"
        }
        actionBtnIcon={
          isDownloading ? (
            <Loader2 size={16} className="animate-spin" />
          ) : downloadSuccess ? (
            <Check size={16} className="text-white" />
          ) : (
            <Download size={16} />
          )
        }
        onActionClick={downloadPDF}
      >
        <div className="relative">
          <div className="text-center mb-4">
            <div className={statusStyles.modalBadge}>
              <div className={iconStyles.pulseDot}></div>
              <span>Completion: {completionPercentage}%</span>
            </div>
          </div>

          <div className={containerStyles.pdfPreview}>
            <div ref={resumeDownloadRef} className="a4-wrapper">
              <div className="w-full h-full">
                <RenderResume
                  key={`pdf-${resumeData?.template?.theme}`}
                  templateId={resumeData?.template?.theme || ""}
                  resumeData={resumeData}
                  containerWidth={null}
                />
              </div>
            </div>
          </div>
        </div>
      </Modal>

      {/*Thumbnail Modal*/}
      <div style={{ position: "absolute", left: "-9999px", top: 0, visibility: "visible" }} ref={thumbnailRef}>
        <div className={containerStyles.hiddenThumbnail}>
          <RenderResume
            key={`thumb-${resumeData?.template?.theme}`}
            templateId={resumeData?.template?.theme || ""}
            resumeData={resumeData}
          />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default EditResume;
