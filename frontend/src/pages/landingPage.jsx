import React, { useContext, useState } from "react";
import {
  ArrowBigRightIcon,
  BrainCog,
  DatabaseZap,
  LayoutTemplate,
  Menu,
  Palette,
  PenTool,
  Sparkles,
  Code2,
  X,
} from "lucide-react";
import { motion } from "framer-motion";
import { landingPageStyles } from "../assets/dummystyle";
import { UserContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";
import { ProfileInfoCard } from "../components/Cards";
import Modal from "../components/Modal";
import Login from "../components/Login";
import SignUp from "../components/SignUp";
import { Input } from "../components/Inputs";

const LandingPage = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const [openAuthModal, setOpenAuthModal] = useState(false);

  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [currentPage, setCurrentPage] = useState("login");
  const handleCTA = () => {
    if (!user) {
      setOpenAuthModal(true);
    } else {
      navigate("/dashboard");
    }
  };

  return (
    <div className={landingPageStyles.container}>
      {/*Header Section*/}
      <header className={landingPageStyles.header}>
        <div className={landingPageStyles.headerContainer}>
          <div className={landingPageStyles.logoContainer}>
            <div className={landingPageStyles.logoIcon}>
              <LayoutTemplate className={landingPageStyles.logoIconInner} />
            </div>
            <span className={landingPageStyles.logoText}>FreshDraft</span>
          </div>
          {/*Mobile button*/}
          <button
            className={landingPageStyles.mobileMenuButton}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X size={24} className={landingPageStyles.mobileMenuIcon} />
            ) : (
              <Menu size={24} className={landingPageStyles.mobileMenuIcon} />
            )}
          </button>

          {/**Navigation */}
          <div className="bg-[#F0FDF4] text-[#064E3B] p-8 rounded-2xl shadow-md">
            {user ? (
              <ProfileInfoCard />
            ) : (
              <button
                className={landingPageStyles.desktopAuthButton}
                onClick={() => setOpenAuthModal(true)}
              >
                <div
                  className={landingPageStyles.desktopAuthButtonOverlay}
                ></div>
                <span className={landingPageStyles.desktopAuthButtonText}>
                  Let's Begin
                </span>
              </button>
            )}
          </div>
        </div>
        {/*Mobile Menu*/}
        {mobileMenuOpen && (
          <div className={landingPageStyles.mobileMenu}>
            <div className={landingPageStyles.mobileMenuContainer}>
              {user ? (
                <div className={landingPageStyles.mobileUserInfo}>
                  <div className={landingPageStyles.mobileUserWelcome}>
                    Welcome
                  </div>
                  <button
                    className={landingPageStyles.mobileDashboardButton}
                    onClick={() => {
                      navigate("/dashboard");
                      setMobileMenuOpen(false);
                    }}
                  ></button>
                </div>
              ) : (
                <button
                  className={landingPageStyles.mobileAuthButton}
                  onClick={() => {
                    setOpenAuthModal(true);
                    setMobileMenuOpen(false);
                  }}
                >
                  Let's Begin
                </button>
              )}
            </div>
          </div>
        )}
      </header>
      {/*Main Content*/}
      {/* Main Content */}
      <main className={landingPageStyles.main}>
        <section className={landingPageStyles.heroSection}>
          <div className={landingPageStyles.heroGrid}>
            {/* Left Side */}
            <div className={landingPageStyles.heroLeft}>
              <div className={landingPageStyles.tagline}>
                Transform Your Career Story
              </div>
              <h1 className="text-center sm:text-left font-raleway leading-tight space-y-1">
                <span className="block text-4xl sm:text-5xl font-bold text-green-800">
                  Instant
                </span>

                <span className="block text-5xl sm:text-6xl font-extrabold text-emerald-600 animate-pulse">
                  Resume
                </span>

                <span className="block text-4xl sm:text-5xl font-bold text-green-800 mt-2">
                  Instant
                </span>

                <span className="block text-5xl sm:text-6xl font-extrabold text-emerald-600 animate-pulse">
                  Impact
                </span>
              </h1>

              <p className="mt-4 text-lg sm:text-xl text-gray-700 max-w-xl font-raleway">
                Create elegant, ATS-friendly resumes that impress recruiters and
                land interviews—without needing design or writing experience.
              </p>
              <div className="flex flex-col items-start gap-4 mt-8">
                <button
                  className={landingPageStyles.primaryButton}
                  onClick={handleCTA}
                >
                  <div className={landingPageStyles.primaryButtonOverlay}></div>
                  <span className={landingPageStyles.primaryButtonContent}>
                    Build. Design. Inspire.
                    <ArrowBigRightIcon
                      className={landingPageStyles.primaryButtonIcon}
                    />
                  </span>
                </button>

                <button
                  className={landingPageStyles.secondaryButton}
                  onClick={handleCTA}
                >
                  Explore Templates
                </button>
              </div>
            </div>

            {/* Right side*/}

            <div className="relative w-full flex justify-center py-12 px-4 lg:px-0">
              {/* Glowing Background */}
              <div className="absolute w-96 h-96 bg-gradient-to-br from-emerald-300 via-teal-400 to-green-300 rounded-full blur-3xl opacity-25 animate-pulse -z-10 top-0" />

              {/* Resume Mock Card */}
              <div className="relative w-[320px] h-[400px] bg-gradient-to-br from-emerald-100 via-green-100 to-teal-100 rounded-[2.5rem] shadow-xl overflow-hidden border border-teal-200">
                {/* Subtle blur gradient */}
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-300 via-teal-200 to-green-100 blur-2xl opacity-25 scale-110 rounded-[2.5rem]" />

                {/* SVG Resume Decoration */}
                <svg
                  viewBox="0 0 320 400"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full relative z-10"
                >
                  <polygon
                    points="160,40 190,70 190,110 160,140 130,110 130,70"
                    fill="#d1fae5"
                  >
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      values="0 160 90; 360 160 90; 0 160 90"
                      dur="8s"
                      repeatCount="indefinite"
                    />
                  </polygon>

                  <polygon
                    points="60,300 80,340 40,340"
                    fill="#bbf7d0"
                    opacity="0.8"
                  >
                    <animateTransform
                      attributeName="transform"
                      type="translate"
                      values="0,0; 0,-10; 0,0"
                      dur="4s"
                      repeatCount="indefinite"
                    />
                  </polygon>

                  <rect
                    x="100"
                    y="100"
                    width="120"
                    height="16"
                    rx="8"
                    fill="#a7f3d0"
                  />
                  <rect
                    x="100"
                    y="125"
                    width="90"
                    height="10"
                    rx="5"
                    fill="#d1fae5"
                  />
                  <rect
                    x="100"
                    y="145"
                    width="110"
                    height="10"
                    rx="5"
                    fill="#f0fdf4"
                  />

                  <rect
                    x="80"
                    y="180"
                    width="160"
                    height="6"
                    rx="3"
                    fill="#ccfbf1"
                  />
                  <rect
                    x="80"
                    y="200"
                    width="100"
                    height="6"
                    rx="3"
                    fill="#a7f3d0"
                  />
                  <rect
                    x="80"
                    y="220"
                    width="140"
                    height="6"
                    rx="3"
                    fill="#99f6e4"
                  />

                  <rect
                    x="90"
                    y="260"
                    width="50"
                    height="16"
                    rx="8"
                    fill="#6ee7b7"
                  />
                  <rect
                    x="150"
                    y="260"
                    width="60"
                    height="16"
                    rx="8"
                    fill="#34d399"
                  />
                  <rect
                    x="220"
                    y="260"
                    width="45"
                    height="16"
                    rx="8"
                    fill="#10b981"
                  />
                </svg>

                {/* AI Assistant Floating Circle */}
                <motion.div
                  className="absolute top-[-25px] left-1/2 -translate-x-1/2 w-16 h-16 bg-white rounded-full shadow-lg border-4 border-emerald-400 flex items-center justify-center z-20"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Sparkles className="w-7 h-7 text-emerald-500" />
                </motion.div>
              </div>

              {/* Floating Skill Cards */}
              <motion.div
                className="absolute top-10 left-2 bg-white p-3 rounded-xl shadow-xl flex items-center gap-2 border border-gray-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Code2 className="text-emerald-600 w-5 h-5" />
                <span className="text-sm font-medium text-gray-800">
                  React & JS
                </span>
              </motion.div>

              <motion.div
                className="absolute bottom-12 right-0 bg-white p-3 rounded-xl shadow-xl flex items-center gap-2 border border-gray-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <DatabaseZap className="text-emerald-600 w-5 h-5" />
                <span className="text-sm font-medium text-gray-800">
                  Data Modeling
                </span>
              </motion.div>

              <motion.div
                className="absolute bottom-2 left-0 bg-white p-3 rounded-xl shadow-xl flex items-center gap-2 border border-gray-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <BrainCog className="text-emerald-600 w-5 h-5" />
                <span className="text-sm font-medium text-gray-800">
                  AI Logic
                </span>
              </motion.div>

              <motion.div
                className="absolute top-4 right-8 bg-white p-3 rounded-xl shadow-xl flex items-center gap-2 border border-gray-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 }}
              >
                <PenTool className="text-emerald-600 w-5 h-5" />
                <span className="text-sm font-medium text-gray-800">
                  Resume Writing
                </span>
              </motion.div>

              <motion.div
                className="absolute top-1/2 -translate-y-1/2 -left-10 bg-white p-3 rounded-xl shadow-xl flex items-center gap-2 border border-gray-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
              >
                <Palette className="text-emerald-600 w-5 h-5" />
                <span className="text-sm font-medium text-gray-800">
                  Design Themes
                </span>
              </motion.div>
            </div>
          </div>
        </section>
        {/* Features Section */}

        <section className="bg-gradient-to-br from-emerald-50 to-teal-50 py-16 sm:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-20">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-emerald-900 mb-4 sm:mb-6">
                <span className="bg-gradient-to-r from-emerald-600 via-teal-500 to-lime-500 bg-clip-text text-transparent">
                  Why Choose Us?
                </span>
              </h2>
              <p className="text-base sm:text-lg text-emerald-700 max-w-2xl mx-auto font-medium">
                Elevate your resume-building experience with tools designed for
                modern professionals.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10">
              {/* Feature 1 */}
              <div className="bg-white/80 backdrop-blur-md shadow-lg rounded-xl p-6 border border-emerald-100 hover:shadow-emerald-200 transition-transform hover:scale-[1.02]">
                <h3 className="text-xl font-semibold text-emerald-700 mb-2">
                  Polished Personalization
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Create resumes that reflect your unique style, tailored for
                  each opportunity.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-white/80 backdrop-blur-md shadow-lg rounded-xl p-6 border border-emerald-100 hover:shadow-emerald-200 transition-transform hover:scale-[1.02]">
                <h3 className="text-xl font-semibold text-emerald-700 mb-2">
                  Seamless Experience
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Enjoy an intuitive, step-by-step interface designed for speed
                  and clarity.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-white/80 backdrop-blur-md shadow-lg rounded-xl p-6 border border-emerald-100 hover:shadow-emerald-200 transition-transform hover:scale-[1.02]">
                <h3 className="text-xl font-semibold text-emerald-700 mb-2">
                  AI-Driven Suggestions
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Get intelligent content and formatting tips to stand out from
                  the crowd.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="bg-white/80 backdrop-blur-md shadow-lg rounded-xl p-6 border border-emerald-100 hover:shadow-emerald-200 transition-transform hover:scale-[1.02]">
                <h3 className="text-xl font-semibold text-emerald-700 mb-2">
                  Export & Share Instantly
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Download your resume in high-quality formats and share it with
                  a single click.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/*Modal for Authentication*/}
      <Modal
        isOpen={openAuthModal}
        onClose={() => {
          setOpenAuthModal(false);
          setCurrentPage("login");
        }}
        hideHeader
      >
        <div>
          {currentPage === "login" && <Login setCurrentPage={setCurrentPage} />}
          {currentPage === "signup" && (
            <SignUp setCurrentPage={setCurrentPage} />
          )}
        </div>
      </Modal>
    </div>
  );
};

export default LandingPage;
