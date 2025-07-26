export const landingPageStyles = {
  // Main container
  container: "min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-100 font-raleway tracking-wide",

  // Header styles
  header: "fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-emerald-100/60 font-raleway tracking-wide",
  headerContainer: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center",

  // Logo area
  logoContainer: "flex items-center space-x-2",
  logoIcon: "w-10 h-10 border-2 border-emerald-600 rounded-md flex items-center justify-center bg-white shadow-md",
  logoIconInner: "w-5 h-5 text-emerald-600", // use a subtle SVG or initials here,
  logoText: "text-2xl sm:text-[26px] font-extrabold tracking-wide text-emerald-700 font-raleway italic",


  // Mobile menu
  mobileMenuButton: "md:hidden p-2 rounded-xl hover:bg-emerald-50 transition-colors font-raleway tracking-wide",
  mobileMenuIcon: "text-emerald-600",

  // Auth buttons
  desktopAuthButton: "relative group px-6 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-emerald-600 to-teal-500 text-white font-semibold tracking-wide font-raleway rounded-2xl overflow-hidden transition-all hover:scale-105 hover:shadow-xl hover:shadow-emerald-200",
  desktopAuthButtonText: "relative text-sm sm:text-base font-medium font-raleway",
  desktopAuthButtonOverlay: "absolute inset-0 bg-gradient-to-r from-teal-500 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity",
  mobileAuthButton: "w-full px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-500 text-white font-semibold font-raleway tracking-wide rounded-2xl",

  // Mobile menu
  mobileMenu: "md:hidden bg-white/95 backdrop-blur-lg w-full fixed top-16 left-0 right-0 z-40 shadow-lg border-b border-emerald-100/60 transition-all duration-300 ease-in-out font-raleway tracking-wide",
  mobileMenuContainer: "max-w-6xl mx-auto px-4 sm:px-6 py-4 flex flex-col gap-4",
  mobileUserInfo: "flex flex-col gap-4 py-2",
  mobileUserWelcome: "text-emerald-700 font-medium text-center py-2 text-base sm:text-lg font-raleway tracking-wide",
  mobileDashboardButton: "w-full px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-500 text-white font-semibold rounded-2xl hover:shadow-lg hover:shadow-emerald-200/60 transition-all font-raleway tracking-wide",
  mobileAuthButton: "w-full px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-500 text-white font-semibold rounded-2xl hover:shadow-lg hover:shadow-emerald-200/60 transition-all font-raleway tracking-wide",


  // Main content
  main: "pt-24",


 // Hero section
 heroSection: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-24",

  heroGrid: "flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24",

  heroLeft: "w-full lg:w-1/2 px-4 sm:px-6 space-y-6 text-center lg:text-left",

  heroRight: "w-full lg:w-1/2 flex justify-center",

  tagline: "text-sm sm:text-base font-semibold text-emerald-700 border-l-4 border-emerald-500 pl-4 italic tracking-wide font-raleway",

  heading: "text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-emerald-700 font-raleway",

  headingText: "block text-emerald-800",

  headingGradient: "block bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-700 bg-clip-text text-transparent",

  description: "text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed max-w-2xl font-raleway font-medium",

  ctaButtons: "flex flex-col sm:flex-row gap-4",




  // Buttons 
  primaryButton: "group relative px-10 py-4 bg-gradient-to-r from-emerald-600 to-teal-500 text-white font-bold rounded-xl rounded-bl-[40px] rounded-tr-[40px] overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-emerald-200",
  primaryButtonOverlay: "absolute inset-0 bg-gradient-to-r from-teal-500 to-lime-400 opacity-0 group-hover:opacity-100 transition-opacity",
  primaryButtonContent: "relative flex items-center gap-2 sm:gap-3",
  primaryButtonIcon: "group-hover:translate-x-1 transition-transform",
  secondaryButton: "mt-4 px-10 py-4 border-2 border-emerald-400 text-emerald-700 font-bold rounded-xl rounded-bl-[40px] rounded-tr-[40px] bg-white hover:border-emerald-500 hover:bg-emerald-50 transition-all shadow-sm text-sm sm:text-base",

  // Hero illustration// Hero Illustration (Green Theme + Custom Shapes + Right Aligned)
heroIllustration: "absolute right-0 top-1/4 transform translate-x-1/4 w-36 sm:w-48 lg:w-56 z-10",
heroIllustrationContainer: "relative",

heroIllustrationBg: "absolute inset-0 bg-gradient-to-tr from-emerald-200/30 to-teal-300/30 clip-hexagon animate-pulse shadow-xl",

// SVG styles with custom green accents and angular geometry
svgContainer: "w-full h-auto max-w-xs mx-auto",
svgRect: "fill-[url(#greenHexGradient)] stroke-[#a7f3d0] stroke-[1.5]",
svgCircle: "fill-none", // removed for clean edges
svgRectPrimary: "fill-[#059669]", // emerald-600
svgRectSecondary: "fill-[#14b8a6]", // teal-500
svgRectLight: "fill-[#d1fae5]", // emerald-100
svgRectSkill: "fill-[#99f6e4]", // teal-100
svgAnimatedCircle: "fill-[#34d399] opacity-80", // emerald-400 (animated)
svgAnimatedRect: "fill-[#10b981] opacity-90 animate-bounce", // emerald-500
svgAnimatedPolygon: "fill-[#2dd4bf] opacity-90 animate-spin-slow", // teal-400


// Feature cards
featureCard: "group relative",
featureCardHover: "absolute -inset-2 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity blur-xl rounded-3xl from-emerald-200 to-teal-200",
featureCardContent: "relative bg-gradient-to-br border border-white/50 p-6 sm:p-8 rounded-3xl hover:shadow-2xl transition-all group-hover:scale-105",
featureIconContainer: "w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br rounded-2xl flex items-center justify-center mb-4 sm:mb-6 text-white shadow-lg",
featureIcon: "w-8 h-8 sm:w-10 sm:h-10",
featureTitle: "text-xl sm:text-2xl font-black text-slate-900 mb-2 sm:mb-4",
featureDescription: "text-sm sm:text-base text-slate-600 leading-relaxed font-medium",

// Feature gradients
featureCardViolet: "from-emerald-50 to-teal-50",
featureCardFuchsia: "from-teal-50 to-green-50",
featureCardOrange: "from-lime-50 to-emerald-50",
featureIconViolet: "from-emerald-500 to-teal-600",
featureIconFuchsia: "from-teal-500 to-green-600",
featureIconOrange: "from-lime-500 to-emerald-600",

// CTA section
ctaSection: "py-16 sm:py-24",
ctaContainer: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center",
ctaCard: "relative",
ctaCardBg: "absolute -inset-6 sm:-inset-8 bg-gradient-to-r from-emerald-200/50 to-teal-200/50 rounded-3xl blur-3xl",
ctaCardContent: "relative bg-gradient-to-br from-white to-emerald-50 border border-emerald-100 rounded-3xl p-8 sm:p-16",
ctaTitle: "text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-4 sm:mb-6",
ctaTitleGradient: "bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent",
ctaDescription: "text-base sm:text-lg text-slate-600 mb-6 sm:mb-10 max-w-2xl mx-auto font-medium",
ctaButton: "group relative px-8 sm:px-12 py-3 sm:py-5 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-black text-lg rounded-2xl overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-emerald-200",
ctaButtonOverlay: "absolute inset-0 bg-gradient-to-r from-teal-600 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity",
ctaButtonText: "relative",

// Footer
footer: "border-t border-emerald-100 bg-gradient-to-r from-emerald-50 to-teal-50 py-6 sm:py-8",
footerContainer: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center",
footerText: "text-sm sm:text-base text-slate-500 font-medium",
footerHeart: "bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent",
footerLink: "hover:text-emerald-500 underline"

};

export const dashboardStyles = {
  // Main container for dashboard
  container: "w-full max-w-7xl mx-auto px-5 py-8 bg-gradient-to-br from-teal-50 to-emerald-50 rounded-3xl shadow-lg",

  // Header area
  headerWrapper: "flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10 bg-gradient-to-r from-emerald-500/90 to-teal-400/80 rounded-2xl p-8 shadow",
  headerTitle: "text-3xl font-bold text-white tracking-tight drop-shadow",
  headerSubtitle: "text-lg font-semibold text-white/80 mt-2",

  // Create Resume Button
  createButton: "group relative px-9 py-3 bg-gradient-to-r from-emerald-600 to-teal-500 text-white font-bold rounded-xl shadow-md border-emerald-300 border hover:from-teal-500 hover:to-emerald-600 hover:scale-105 transition-all focus:outline-none overflow-hidden",
  createButtonOverlay: "absolute inset-0 bg-gradient-to-r from-teal-500 to-emerald-600 opacity-0 group-hover:opacity-15 transition-opacity pointer-events-none rounded-xl",
  createButtonContent: "relative flex items-center gap-2 text-base",

  // Loading State
  spinnerWrapper: "flex justify-center items-center py-14",
  spinner: "animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-emerald-500",

  // Empty State
  emptyStateWrapper: "flex flex-col items-center justify-center py-14 bg-emerald-50 rounded-2xl shadow-inner",
  emptyIconWrapper: "bg-emerald-100 p-4 rounded-full mb-5 shadow-sm",
  emptyTitle: "text-2xl font-bold text-emerald-700 mb-1",
  emptyText: "text-base text-teal-700 max-w-md mb-6",

  // Grid of resumes
  grid: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8",

  // Create New Resume card
  newResumeCard: "flex flex-col items-center justify-center bg-gradient-to-br from-emerald-100 to-teal-100 border-2 border-dashed border-emerald-400 rounded-2xl p-8 cursor-pointer h-full transition-all hover:shadow-lg hover:border-emerald-600",
  newResumeIcon: "w-16 h-16 rounded-full bg-gradient-to-r from-emerald-600 to-teal-400 flex items-center justify-center mb-6",
  newResumeTitle: "text-2xl font-bold text-emerald-900 mb-3 text-center",
  newResumeText: "text-base text-teal-700 text-center",

  // Modal
  modalHeader: "flex justify-between items-center mb-4 py-2",
  modalTitle: "text-xl font-bold text-emerald-800",
  modalCloseButton: "text-gray-400 hover:text-emerald-700 p-1 rounded transition-colors",

  // Delete Modal
  deleteIconWrapper: "bg-rose-100 p-3 rounded-full mb-4 flex justify-center",
  deleteTitle: "text-lg font-bold text-rose-700 mb-2 text-center",
  deleteText: "text-base text-gray-500 mb-3 text-center",
};


export const cardStyles = {
  // ProfileInfoCard styles
  profileCard: "flex items-center gap-3 p-2 sm:p-3 bg-white backdrop-blur-xl border border-emerald-200 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.03]",
  profileInitialsContainer: "w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-md",
  profileInitialsText: "text-base sm:text-lg font-black text-white",
  profileName: "text-xs sm:text-sm font-bold text-gray-800",
  logoutButton: "text-emerald-600 text-[10px] sm:text-xs font-bold cursor-pointer hover:text-teal-600 transition-colors",

  // ResumeSummaryCard styles
  resumeCard: "group relative h-[360px] sm:h-[380px] lg:h-[400px] flex flex-col bg-white border border-emerald-200 rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:border-emerald-300",
  cardBackground: "absolute inset-0 bg-gradient-to-br from-emerald-100 via-transparent to-teal-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500",
  previewArea: "p-4 sm:p-6 flex-1 relative overflow-hidden",
  emptyPreview: "w-full h-[180px] sm:h-[200px] lg:h-[220px] flex flex-col items-center justify-center rounded-2xl",
  emptyPreviewIcon: "w-16 h-16 bg-white/90 rounded-2xl flex items-center justify-center mb-4 shadow-md",
  emptyPreviewText: "text-gray-800 text-sm font-bold",
  emptyPreviewSubtext: "text-gray-500 text-xs mt-1",
  infoArea: "bg-gray-50 border-t border-gray-200 p-4 sm:p-6",
  title: "text-sm sm:text-base font-bold text-gray-800 truncate mb-2 group-hover:text-emerald-600 transition-colors",
  dateInfo: "flex items-center gap-2 text-xs text-gray-500",

  // Action buttons
  actionOverlay: "absolute inset-4 sm:inset-6 bg-gradient-to-t from-white/80 via-white/20 to-transparent flex items-end justify-center p-6 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-2xl",
  actionButtonsContainer: "flex gap-3",
  editButton: "group/btn w-12 h-12 flex items-center justify-center bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl shadow-md hover:scale-110 transition-all duration-300",
  deleteButton: "group/btn w-12 h-12 flex items-center justify-center bg-gradient-to-r from-rose-500 to-red-500 rounded-2xl shadow-md hover:scale-110 transition-all duration-300",
  buttonIcon: "text-white group-hover/btn:scale-110 transition-transform",

  // Progress and completion styles
  progressBar: "relative w-full h-2 bg-gray-200 rounded-full overflow-hidden",
  progressFill: "h-full rounded-full transition-all duration-700 ease-out relative overflow-hidden",
  progressGlow: "absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse",
  progressIndicator: "absolute top-0 h-full w-4 bg-gradient-to-r from-transparent to-white/50 blur-sm transition-all duration-700",
  completionStatus: "flex justify-between items-center mt-2",
  statusText: "text-xs font-medium text-gray-500",
  percentageText: "text-xs font-bold text-gray-700",

  // Completion indicator
  completionIndicator: "absolute top-4 right-4 z-10 flex items-center gap-2 px-3 py-2 bg-gray-50 border border-gray-200 rounded-full shadow-sm",
  completionDot: "w-3 h-3 rounded-full flex items-center justify-center",
  completionDotInner: "w-1 h-1 bg-white rounded-full",
  completionPercentageText: "text-xs font-bold text-gray-700",

  // Completion color classes
  completionHigh: "from-emerald-500 to-green-600",
  completionMedium: "from-yellow-500 to-orange-500",
  completionLow: "from-red-500 to-rose-600",

  // TemplateCard styles
  templateCard: "relative rounded-lg overflow-hidden shadow-md transition-all duration-300 cursor-pointer border border-gray-200",
  templateCardSelected: "ring-2 ring-emerald-500 scale-[1.02]",
  templateCardDefault: "hover:shadow-lg hover:border-gray-300",
  templateDesign: "relative h-full w-full aspect-[4/5]",
  templateOverlay: "absolute inset-0 bg-white/10 backdrop-blur-sm",
  selectionIndicator: "absolute top-4 right-4 z-20",
  selectionCircle: "w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center shadow-md",
  selectionIcon: "text-white",
  templateHoverEffect: "absolute inset-0 bg-black/5 opacity-0 hover:opacity-100 transition-opacity duration-300",
  templateName: "text-sm font-medium text-gray-800",
  emptyTemplate: "relative h-full w-full rounded-lg overflow-hidden",
  emptyTemplateIcon: "p-3 bg-white/90 rounded-full shadow-sm",
  emptyTemplateText: "text-xs text-gray-600 mt-1"
};


export const authStyles = {
  container: "w-[90vw] md:w-[400px] p-8 bg-gradient-to-br from-white to-emerald-50 rounded-3xl border border-emerald-100 shadow-2xl",
  headerWrapper: "text-center mb-8",
  title: "text-2xl font-black text-slate-900 mb-2",
  subtitle: "text-slate-600 font-medium",
  form: "space-y-6",
  errorMessage: "text-red-500 text-sm font-medium bg-red-50 border border-red-200 px-4 py-3 rounded-xl",
  submitButton: "w-full py-4 bg-gradient-to-r from-emerald-600 to-teal-500 text-white font-black rounded-2xl hover:scale-105 hover:shadow-xl hover:shadow-emerald-200 transition-all text-lg",
  switchText: "text-center text-sm text-slate-600 font-medium",
  switchButton: "font-black text-emerald-600 hover:text-teal-600 transition-colors",

  signupContainer: "w-[90vw] md:w-[400px] p-8 bg-gradient-to-br from-white to-emerald-50 rounded-3xl border border-emerald-100 shadow-2xl overflow-hidden",
  signupTitle: "text-2xl font-black text-slate-900 mb-2",
  signupSubtitle: "text-slate-600 font-medium",
  signupForm: "space-y-4",
  signupSubmit: "w-full py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-black rounded-2xl hover:scale-105 hover:shadow-xl hover:shadow-teal-200 transition-all text-lg",
  signupSwitchButton: "font-black text-emerald-600 hover:text-teal-600 transition-colors"
};


export const shimmerStyle = `
  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
  
  @keyframes flow {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  
  @keyframes bubble {
    0% { transform: translateY(0) scale(1); opacity: 0.7; }
    50% { transform: translateY(-10px) scale(1.1); opacity: 0.9; }
    100% { transform: translateY(0) scale(1); opacity: 0.7; }
  }
  
  @keyframes pulse-glow {
    0%, 100% { box-shadow: 0 0 20px rgba(52, 211, 153, 0.3); }   /* emerald-400 */
    50% { box-shadow: 0 0 40px rgba(16, 185, 129, 0.6); }       /* emerald-500 */
  }
  
  .animate-shimmer {
    animation: shimmer 2s infinite;
  }

  .animate-flow {
    animation: flow 4s infinite linear;
  }

  .animate-bubble {
    animation: bubble 2s infinite ease-in-out;
  }

  .animate-pulse-glow {
    animation: pulse-glow 2s infinite;
  }
`


// Common Styles
export const commonStyles = {
  trashButton: "absolute top-4 right-4 p-2 text-emerald-600 hover:bg-emerald-50 rounded-xl transition-all",

  addButtonBase: "flex items-center gap-3 px-6 py-3 text-white font-bold rounded-xl bg-emerald-600 hover:bg-emerald-700 hover:scale-105 transition-all shadow-lg",
};


// AdditionalInfoForm Styles
export const additionalInfoStyles = {
  container: "p-8 bg-gradient-to-br from-white to-emerald-50",
  heading: "text-2xl font-black text-emerald-900 mb-8",
  sectionHeading: "text-lg font-bold text-emerald-800 mb-6 flex items-center gap-2",
  dotViolet: "w-2 h-2 bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full", // replaced violet-fuchsia with emerald-teal
  dotOrange: "w-2 h-2 bg-gradient-to-r from-teal-500 to-emerald-400 rounded-full", // replaced orange-red with teal-emerald
  languageItem: "relative bg-white border border-emerald-100 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all",
  interestItem: "relative",
  addButtonLanguage: "bg-gradient-to-r from-emerald-500 to-teal-400",
  addButtonInterest: "bg-gradient-to-r from-teal-500 to-emerald-400",
};


// CertificationInfoForm Styles
export const certificationInfoStyles = {
  container: "p-8 bg-gradient-to-br from-white to-emerald-50",
  heading: "text-2xl font-black text-slate-900 mb-8",
  item: "relative bg-white border border-emerald-100 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all",
  addButton: "bg-gradient-to-r from-emerald-500 to-teal-500",
};

// ContactInfoForm Styles
export const contactInfoStyles = {
  container: "p-8 bg-gradient-to-br from-white to-blue-50",
  heading: "text-2xl font-black text-slate-900 mb-8",
};

// EducationDetailsForm Styles
export const educationDetailsStyles = {
  container: "p-8 bg-gradient-to-br from-white to-emerald-50",
  heading: "text-2xl font-black text-emerald-900 mb-8",
  item: "relative bg-white border border-emerald-100 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all",
  addButton: "bg-gradient-to-r from-emerald-500 to-teal-400",
};


// ProfileInfoForm Styles
export const profileInfoStyles = {
  container: "p-8 bg-gradient-to-br from-white to-emerald-50",
  heading: "text-2xl font-black text-emerald-900 mb-8",
  textarea: "w-full p-4 bg-white border border-emerald-200 rounded-xl focus:border-emerald-400 focus:ring-4 focus:ring-emerald-50 transition-all outline-none resize-none",
};


// ProjectDetailForm Styles
export const projectDetailStyles = {
  container: "p-8 bg-gradient-to-br from-white to-teal-50",
  heading: "text-2xl font-black text-emerald-900 mb-8",
  item: "relative bg-white border border-teal-100 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all",
  textarea: "w-full p-4 bg-white border border-teal-200 rounded-xl focus:border-teal-400 focus:ring-4 focus:ring-teal-50 transition-all outline-none resize-none",
  addButton: "bg-gradient-to-r from-teal-500 to-emerald-500",
};


// SkillsInfoForm Styles
export const skillsInfoStyles = {
  container: "p-8 bg-gradient-to-br from-white to-emerald-50",
  heading: "text-2xl font-black text-emerald-900 mb-8",
  item: "relative bg-white border border-emerald-100 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all",
  addButton: "bg-gradient-to-r from-emerald-500 to-teal-500",
};


// WorkExperienceForm Styles
export const workExperienceStyles = {
  container: "p-8 bg-gradient-to-br from-white to-emerald-50",
  heading: "text-2xl font-black text-emerald-900 mb-8",
  item: "relative bg-white border border-emerald-100 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all",
  textarea: "w-full p-4 bg-white border border-emerald-200 rounded-xl focus:border-emerald-400 focus:ring-4 focus:ring-emerald-50 transition-all outline-none resize-none",
  addButton: "bg-gradient-to-r from-emerald-500 to-teal-500",
};


export const containerStyles = {
  main: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6",

  // Header with emerald green gradient, subtle border and shadow
  header:
    "flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 " +
    "bg-gradient-to-r from-emerald-50 to-teal-100 border border-emerald-200 rounded-2xl " +
    "py-4 px-6 mb-6 shadow-md",

  // Responsive grid layout with comfortable gaps
  grid: "grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8",

  // Form container with white background and soft emerald border + shadow
  formContainer:
    "bg-white border border-emerald-200 rounded-2xl overflow-hidden shadow-sm",

  // Preview container with padding and subtle emerald border + shadow
  previewContainer:
    "bg-white border border-emerald-200 rounded-2xl overflow-hidden shadow-sm p-4",

  // Inner wrapper with max width and centered horizontally
  previewInner: "w-full max-w-[800px] mx-auto",

  // Modal sizing - responsive width and height
  modalContent: "w-[90vw] h-[80vh]",

  // PDF preview padding and centered flex container
  pdfPreview: "w-full p-4 flex justify-center",

  // Hidden thumbnail style for upload previews or similar
  hiddenThumbnail: "bg-white shadow-lg max-w-[400px] mx-auto",
};


export const buttonStyles = {
   theme:
    "flex items-center gap-1 px-3 py-1 text-xs font-medium bg-emerald-50 text-emerald-700 rounded-xl shadow-sm hover:bg-emerald-100 transition",
  download:
    "flex items-center gap-1 px-3 py-1 text-xs font-medium bg-teal-50 text-teal-600 rounded-xl shadow-sm hover:bg-teal-100 transition",
  
  delete:
    "flex items-center gap-1 px-3 py-1 text-xs font-medium bg-rose-50 text-rose-600 rounded-xl shadow-sm hover:bg-rose-100 border border-rose-100 transition",

  back:
    "flex items-center gap-2 px-5 sm:px-7 py-2 sm:py-3 bg-slate-100 text-slate-700 font-semibold rounded-2xl hover:bg-slate-200 hover:shadow-sm transition-all duration-300 text-sm",

  save:
    "flex items-center gap-2 px-5 sm:px-7 py-2 sm:py-3 bg-emerald-50 text-emerald-700 font-semibold rounded-2xl hover:bg-emerald-100 hover:shadow-sm transition-all duration-300 text-sm",

  next:
    "flex items-center gap-2 px-5 sm:px-7 py-2 sm:py-3 bg-gradient-to-r from-emerald-600 to-teal-500 text-white font-semibold rounded-2xl hover:scale-105 hover:shadow-lg transition-all duration-300 text-sm",

  modalAction:
    "flex items-center gap-2 px-5 sm:px-7 py-2 sm:py-3 bg-gradient-to-r from-emerald-600 to-teal-500 text-white font-semibold rounded-2xl hover:scale-105 hover:shadow-lg transition-all duration-300 text-sm",
};



export const statusStyles = {
  completionBadge:
    "inline-flex items-center gap-2 bg-emerald-100 px-3 py-1 rounded-full text-sm font-medium text-emerald-700",
  modalBadge:
    "inline-flex items-center gap-2 bg-teal-100 px-3 py-1 rounded-full text-sm font-medium text-teal-700",
  error:
    "flex items-center gap-3 text-sm font-medium text-red-700 bg-red-50 border border-red-200 px-4 py-3 rounded-xl mb-4",
};


export const iconStyles = {
  pulseDot: "w-2 h-2 rounded-full bg-emerald-500 animate-pulse"
};

export const inputStyles = {
  wrapper: "mb-6 group",

  label: "block text-sm font-bold text-slate-800 mb-3 group-focus-within:text-emerald-600 transition-colors",

  inputContainer: (focused) =>
    `relative flex items-center bg-emerald-50/20 border-2 px-4 py-3 rounded-xl transition-all duration-300 ${
      focused
        ? 'border-emerald-500 ring-4 ring-emerald-500/20 shadow-lg shadow-emerald-500/10'
        : 'border-slate-300 hover:border-teal-400'
    }`,

  inputField: "w-full bg-transparent outline-none text-slate-800 placeholder-slate-500 font-medium",

  toggleButton: "text-slate-500 hover:text-emerald-600 transition-colors p-1 rounded-lg hover:bg-emerald-50"
};


export const photoSelectorStyles = {
  container: "flex justify-center mb-8",
  hiddenInput: "hidden",

  placeholder: hovered =>
    `relative w-32 h-32 sm:w-36 sm:h-36 flex items-center justify-center bg-emerald-50 border-2 border-dashed border-emerald-300 rounded-full cursor-pointer transition-all duration-300 ${
      hovered ? "border-emerald-500 bg-emerald-100 shadow-md" : ""
    }`,

  cameraButton:
    "absolute -bottom-3 -right-3 w-14 h-14 flex items-center justify-center bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-700 hover:to-teal-600 text-white rounded-full transition-transform duration-300 shadow-lg hover:scale-110 hover:shadow-emerald-400",

  previewWrapper: "relative group",

  previewImageContainer: hovered =>
    `w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden border-4 border-emerald-200 shadow-lg transition-all duration-300 ${
      hovered ? "group-hover:border-emerald-400 shadow-2xl" : ""
    }`,

  previewImage:
    "w-full h-full object-cover cursor-pointer group-hover:scale-110 transition-transform duration-300",

  overlay:
    "absolute inset-0 bg-black/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center",

  actionButton: (bg, hoverBg, textColor) =>
    `w-10 h-10 flex items-center justify-center bg-${bg} text-${textColor} rounded-full hover:bg-${hoverBg} shadow-md hover:shadow-lg transition-all duration-300`,
};


export const titleInputStyles = {
  container: "flex items-center gap-4 bg-white/80 rounded-xl px-5 py-3 shadow-md",
  titleText: "text-lg sm:text-xl font-extrabold text-emerald-900 tracking-tight flex-1",
  editButton: "w-10 h-10 p-0 flex items-center justify-center rounded-full bg-emerald-100 hover:bg-emerald-200 ml-2 transition shadow group",
  editIcon: "w-5 h-5 text-emerald-700 group-hover:text-teal-600 transition-colors duration-200",
  inputField: focused =>
    `flex-1 text-lg sm:text-xl font-bold bg-transparent outline-none text-emerald-900 border-b-2 pb-1 transition-all duration-200 placeholder-teal-400 ${
      focused ? "border-emerald-500" : "border-emerald-300"
    } placeholder-opacity-70 focus:placeholder-opacity-40`,
  confirmButton: "w-10 h-10 ml-2 flex items-center justify-center rounded-full bg-gradient-to-r from-emerald-600 to-teal-500 text-white shadow hover:shadow-emerald-400 transition",
};



export const modalStyles = {
  overlay:
    "fixed inset-0 flex items-center justify-center w-full h-full bg-black/50 backdrop-blur-sm z-50",

  container:
    "relative flex flex-col bg-white/95 backdrop-blur-xl shadow-2xl rounded-3xl overflow-hidden border border-emerald-100 max-w-[95vw] max-h-[95vh]",

  header:
    "flex items-center justify-between p-6 border-b border-emerald-100 bg-gradient-to-r from-white to-emerald-50",

  title:
    "text-xl sm:text-2xl font-black text-slate-900 bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-teal-400",

  actionButton:
    "flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-400 text-white font-bold rounded-xl hover:scale-105 transition-all shadow-lg",

  closeButton:
    "absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-white/80 hover:bg-emerald-50 text-slate-400 hover:text-red-500 rounded-xl transition-all shadow-md hover:scale-110 z-10",

  body: "flex-1 overflow-y-auto px-6 py-4 text-gray-800",
};


export const infoStyles = {
  // Progress
  progressWrapper: "w-24 h-2.5 rounded-full bg-emerald-100 shadow-inner",
  progressBar: (color) => `h-full rounded-full transition-all bg-${color}-500`,

  // ActionLink
  actionWrapper: "flex items-center gap-3 mt-2",
  actionIconWrapper: "w-6 h-6 flex items-center justify-center rounded-full bg-emerald-100 text-emerald-600",
  actionLink: "text-sm font-medium underline cursor-pointer break-all text-emerald-700 hover:text-emerald-800 transition-all",

  // CertificationInfo
  certContainer: "mb-6 bg-emerald-50 p-4 rounded-xl shadow-sm",
  certTitle: "text-lg font-semibold text-emerald-900",
  certRow: "flex items-center gap-2 mt-1",
  certYear: (bgColor) => `text-xs font-bold text-white px-3 py-1 rounded-lg bg-${bgColor}-600`,
  certIssuer: "text-sm text-emerald-700 font-medium",

  // ContactInfo
  contactRow: "flex items-center gap-4 mb-4",
  contactIconWrapper: "w-9 h-9 flex items-center justify-center rounded-lg bg-emerald-100 text-emerald-700",
  contactText: "flex-1 text-sm font-medium break-all text-emerald-900",

  // EducationInfo
  eduContainer: "mb-6 bg-emerald-50 p-4 rounded-xl shadow-sm",
  eduDegree: "text-base font-bold text-emerald-900",
  eduInstitution: "text-sm text-emerald-800 font-medium",
  eduDuration: "text-xs text-emerald-600 font-medium italic mt-1",
  eduCgpa: "text-xs text-emerald-700 font-medium mt-1",

  // Language/Skill Info
  infoRow: "flex items-center justify-between mb-3",
  infoLabel: "text-sm font-semibold text-emerald-900",

  // Links
  linkRow: "flex items-center space-x-2 text-sm font-medium text-emerald-600 hover:text-emerald-800 transition-colors",

  // ProjectInfo
  projectContainer: "mb-6 bg-emerald-50 p-4 rounded-xl shadow",
  projectTitle: (isPreview) => `${isPreview ? 'text-sm' : 'text-lg'} font-bold text-emerald-900`,
  projectDesc: "text-sm text-emerald-700 mt-1 leading-relaxed",
  projectLinks: "flex items-center gap-4 font-medium mt-3 text-emerald-600",

  // RatingInput
  ratingWrapper: "flex gap-2 cursor-pointer",
  ratingDot: "w-4 h-4 rounded-full transition-all bg-emerald-400 hover:scale-110",

  // SkillSection
  skillGrid: "grid grid-cols-2 gap-x-6 gap-y-3 mb-6",

  // WorkExperience
  workContainer: "mb-6 bg-emerald-50 p-4 rounded-xl shadow-sm",
  workHeader: "flex items-start justify-between mb-2",
  workCompanyName: "text-base font-bold text-emerald-900",
  workRole: "text-base font-medium text-emerald-800",
  workDuration: (color) => `text-sm font-bold italic text-${color}-700`,
  workDesc: "text-sm text-emerald-700 leading-relaxed"
};
