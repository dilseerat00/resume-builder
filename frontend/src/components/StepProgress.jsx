import React from "react";
import { shimmerStyle } from "../assets/dummystyle";
import { Check } from "react-feather";

const StepProgress = ({ progress }) => {
  return (
    <>
      <style>{shimmerStyle}</style>
      <div className="relative w-full h-4 bg-white/5 backdrop-blur-2xl overflow-hidden rounded-full border border-white/10">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/30 to-teal-400/30 animate-pulse" />
        {/* MAIN PROGRESS BAR */}
        <div
          className="relative h-full bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-600 
             animate-flow bg-[length:200%_100%] transition-all duration-700 ease-out 
             rounded-full overflow-hidden animate-pulse-glow"
          style={{ width: `${progress}%` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />

          {/* ANIMATED BUBBLES */}
          <div className="absolute inset-0 opacity-80">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-teal-300 rounded-full animate-bounce"
                style={{
                  left: `${(i + 1) * 10}%`,
                  animationDelay: `${i * 0.2}s`,
                  transform: "translateY(-50%)",
                }}
              ></div>
            ))}
          </div>
          {/*Particle Effect*/}
          <div className="absolute inset-0">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white/60 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                }}
              />
            ))}
          </div>
        </div>

        {progress > 0 && (
          <div
            className="absolute top-0 h-full w-8 bg-gradient-to-r from-transparent via-white/60 to-white/30 blur-sm"
            style={{ left: `${Math.max(0, progress - 4)}%` }}
          ></div>
        )}
      </div>

      <div className="flex justify-between items-center mt-3">
        <div className="text-xs font-bold text-gray-300">
          {progress < 25
            ? "Getting Started"
            : progress < 50
            ? "Making Progress"
            : progress < 75
            ? "Almost There"
            : "Nearly Completed"}
        </div>

        <div className="flex items-center gap-2">
          {progress === 100 && (
            <div className="text-green-400 text-sm font-semibold">
                <Check size={12}
                className="text-white"/>
              
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default StepProgress;
