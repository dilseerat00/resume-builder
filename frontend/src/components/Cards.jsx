import { useNavigate } from "react-router-dom"; 

import { useContext , useState} from "react";
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
    }

    return (
        user && (
            <div className={cardStyles.profileCard}>
                <div className= {cardStyles.profileInitialsContainer}>
                    <span className= { cardStyles.profileInitialsText}>
                        {user.name ? user.name.charAt(0).toUpperCase() : ""}

                    </span>
                </div>
                <div>
                    <div className={cardStyles.profileName}>
                        {user.name || ""}

                    </div>
                    <button className={cardStyles.logoutButton}>
                        onClick={handleLogout}
                        Logout
                    </button>

                </div>

            </div>
        )
    );
}

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
    if (completion >= 90) return <Award size={12} className="text-emerald-600" />;
    if (completion >= 70) return <TrendingUp size={12} className="text-teal-500" />;
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
        <div className={`h-4 w-4 rounded-full bg-gradient-to-r ${getCompletionColor()}`}>
          <div className="h-2 w-2 bg-white rounded-full mx-auto my-auto mt-[3px]" />
        </div>
        <span className="text-xs font-medium text-gray-600">{completion}%</span>
        {getCompletionIcon()}
      </div>

      {/* Preview area */}
      <div className={`relative h-48 rounded-t-xl bg-gradient-to-br ${designColor}`}>
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
          <span className="text-xs font-bold text-emerald-800">{completion}% Complete</span>
        </div>
      </div>
    </div>
  );
};

