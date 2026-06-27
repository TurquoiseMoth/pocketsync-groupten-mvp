import React from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./OnboardingStepOne.css";

function OnboardingStepOne() { 

  const navigate = useNavigate();

  
  return (
    <div className="page">
      {/* Progress Indicator */}
      <div className="progress-wrapper">
        <span>1/3</span>

        <div className="progress">
          <div className="progress-fill"></div>
        </div>
      </div>

      {/* Main Card */}
      <div className="card">
        {/* Left Section - Illustration */}
        <div className="illustration">
          <img
            src="/src/assets/banks image onboard.png"
            alt="Bank and fintech accounts illustration"
          />
        </div>

        {/* Right Section - Content */}
        <div className="content">
          <h1>
            Connect all your bank
            <br />
            and fintech accounts in
            <br />
            one place. 
          </h1>

          <p>
            View all accounts, track transactions, and manage your money from
            one dashboard.
          </p>

          <button
          type="button"
          onClick={() => navigate("/onboarding-step-two")}
          >
          <span>Get Started</span>
          <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default OnboardingStepOne;