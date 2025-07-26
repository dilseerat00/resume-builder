import { useNavigate } from "react-router-dom";
import { Award, TrendingUp, Zap, Edit, Trash2, Clock, Check } from "lucide-react";

import { useContext, useState } from "react";
import { UserContext } from "../context/userContext";
import { cardStyles } from "../assets/dummystyle";

//Profile Information Card Component
export const ProfileInfoCard = () => {
  const navigate = useNavigate();
  const { user, clearUser } = useContext(UserContext);

  const handleLogout = () => {
    // Clear user context and navigate to the landing page
    localStorage.clear();
    clearUser();
    navigate("/");
  };

  return (
    user && (
      <div className={cardStyles.profileCard}>
        <div className={cardStyles.profileInitialsContainer}>
          <span className={cardStyles.profileInitialsText}>
            {user.name ? user.name.charAt(0).toUpperCase() : ""}
          </span>
        </div>
        <div>
          <div className={cardStyles.profileName}>{user.name || ""}</div>
          <button className={cardStyles.logoutButton} onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    )
  );
};

//Resume Summary
export const ResumeSummaryCard = ({
  title = "Untitled Resume",
  createdAt = null,
  updatedAt = null,
  onSelect,
  onDelete,
  completion = 85,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Created
  const formattedCreatedDate = createdAt
    ? new Date(createdAt).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    : "—";

  //Updated
  const formattedUpdatedDate = updatedAt
    ? new Date(updatedAt).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    : "—";

  //Color as per completion
  const getCompletionColor = () => {
    if (completion >= 90) return "from-emerald-500 to-teal-400";
    if (completion >= 70) return "from-emerald-400 to-teal-300";
    return "from-rose-400 to-orange-300";
  };

  //Icon as per completion
  const getCompletionIcon = () => {
    if (completion >= 90)
      return <Award size={12} className="text-emerald-600" />;
    if (completion >= 70)
      return <TrendingUp size={12} className="text-teal-500" />;
    return <Zap size={12} className="text-yellow-500" />;
  };

  const handleDeleteClick = (e) => {
    e.stopPropagation();
    if (onDelete) onDelete();
  };

  const generateDesign = () => {
    const colors = [
      "from-emerald-50 to-teal-50",
      "from-lime-50 to-emerald-100",
      "from-teal-50 to-emerald-100",
      "from-green-50 to-teal-100",
    ];
    return colors[title.length % colors.length];
  };

  const designColor = generateDesign();

  return (
    <div
      className="rounded-xl shadow-md bg-white hover:shadow-lg cursor-pointer border border-emerald-100 transition-all duration-300"
      onClick={onSelect}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Completion indicator */}
      <div className="flex items-center gap-1 p-2">
        <div
          className={`h-4 w-4 rounded-full bg-gradient-to-r ${getCompletionColor()}`}
        >
          <div className="h-2 w-2 bg-white rounded-full mx-auto my-auto mt-[3px]" />
        </div>
        <span className="text-xs font-medium text-gray-600">{completion}%</span>
        {getCompletionIcon()}
      </div>

      {/* Preview area */}
      <div
        className={`relative h-48 rounded-t-xl bg-gradient-to-br ${designColor}`}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="bg-white p-3 rounded-full shadow">
            <Edit size={28} className="text-emerald-600" />
          </div>
          <span className="mt-2 font-semibold text-emerald-700">{title}</span>
          <span className="text-sm text-gray-600">
            {completion === 0 ? "Start building" : `${completion}% completed`}
          </span>

          {/* Mini resume sections indicator */}
          <div className="mt-4 flex gap-2">
            {["Profile", "Work", "Skills", "Edu"].map((section, i) => (
              <div
                key={i}
                className={`px-2 py-1 text-xs rounded-md ${
                  i < Math.floor(completion / 25)
                    ? "bg-white/90 text-emerald-600 font-medium"
                    : "bg-white/50 text-gray-500"
                }`}
              >
                {section}
              </div>
            ))}
          </div>
        </div>

        {/* Hover overlay with actions */}
        {isHovered && (
          <div className="absolute inset-0 bg-black/10 backdrop-blur-sm flex items-center justify-center gap-3 rounded-t-xl">
            <button
              onClick={(e) => {
                e.stopPropagation();
                if (onSelect) onSelect();
              }}
              className="bg-emerald-600 hover:bg-emerald-700 text-white p-2 rounded-full shadow"
              title="Edit"
            >
              <Edit size={18} />
            </button>
            <button
              onClick={handleDeleteClick}
              className="bg-rose-600 hover:bg-rose-700 text-white p-2 rounded-full shadow"
              title="Delete"
            >
              <Trash2 size={18} />
            </button>
          </div>
        )}
      </div>

      {/* Info area */}
      <div className="px-4 py-3">
        <h5 className="text-base font-semibold text-emerald-800">{title}</h5>
        <div className="text-xs text-gray-500 flex items-center gap-2 mt-1">
          <Clock size={12} />
          <span>Created: {formattedCreatedDate}</span>
          <span className="ml-2">Updated: {formattedUpdatedDate}</span>
        </div>

        {/* Progress bar */}
        <div className="relative w-full h-2 mt-3 bg-gray-200 rounded-full overflow-hidden">
          <div
            className={`h-full bg-gradient-to-r ${getCompletionColor()} rounded-full transition-all duration-700 ease-out relative`}
            style={{ width: `${completion}%` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
          </div>
          <div
            className={`absolute top-0 h-full w-4 bg-gradient-to-r from-transparent to-white/50 blur-sm transition-all duration-700`}
            style={{ left: `${Math.max(0, completion - 2)}%` }}
          ></div>
        </div>

        {/* Completion status */}
        <div className="flex justify-between items-center mt-2">
          <span className="text-xs font-medium text-gray-500">
            {completion < 50
              ? "Getting Started"
              : completion < 80
              ? "Almost There"
              : "Ready to Go!"}
          </span>
          <span className="text-xs font-bold text-emerald-800">
            {completion}% Complete
          </span>
        </div>
      </div>
    </div>
  );
};

//Template Card Component
export const TemplateCard = ({ thumbnailImg, isSelected, onSelect }) => {
  return (
    <div
      className={`group h-auto md:h-[300px] lg:h-[320px] flex flex-col 
        bg-white border-2 overflow-hidden cursor-pointer 
        transition-all duration-500 hover:scale-105 hover:shadow-lg rounded-3xl
        ${
          isSelected
            ? "border-emerald-500 shadow-lg shadow-emerald-500/20 bg-emerald-50"
            : "border-gray-200 hover:border-emerald-300"
        }`}
      onClick={onSelect}
    >
      {thumbnailImg ? (
        <div className="relative w-full h-full overflow-hidden">
          <img
            src={thumbnailImg || "/placeholder.svg"}
            alt="Template Review"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {isSelected && (
            <div className="absolute inset-0 bg-emerald-500/10 flex items-center justify-center">
              <div className="w-16 h-16 bg-white backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg animate-pulse">
                <Check size={24} className="text-emerald-600" />
              </div>
            </div>
          )}

          {/* Hover Effect*/}
          {/* HOVER EFFECT */}
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-100/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      ) : (
        <div className="w-full h-[200px] flex items-center flex-col justify-center bg-gradient-to-br from-emerald-50 via-teal-100 to-teal-50">
          <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mb-3">
            <Edit className="text-white" size={20} />
          </div>
          <span className="text-gray-700 font-bold">No Preview</span>
        </div>
      )}
    </div>
  );
};
