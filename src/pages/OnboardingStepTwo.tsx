import React from "react";
import "./OnboardingStepTwo.css";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";

const OnboardingStepTwo = () => {

    const navigate = useNavigate();

  return (
    <div className="step-two-page">

      {/* Progress */}

      <div className="progress-wrapper2">
        <span>2/3</span>

        <div className="progress2">
          <div className="progress-fill2"></div>
        </div>
      </div>

      {/* Container */}

      <div className="step-two-container">

        {/* Back */}

                <button
        className="back-btn"
        onClick={() => navigate("/")}
        >
        <ArrowLeft size={18} />
        <span>Back</span>
        </button>

        {/* Card */}

        <div className="bvn-card">

          <h1>Enter Your BVN</h1>

          <p className="subtitle">
            Please enter your 11-digit BVN to continue.
          </p>

          <div className="form-group">
            <label>BVN</label>

            <input
              type="text"
              placeholder="Enter your 11-digit"
              maxLength={11}
            />
          </div>

          <div className="form-group">
            <label>Phone</label>

            <input
              type="tel"
              placeholder="Enter phone number"
            />
          </div>

          <div className="notice">

            <ShieldCheck size={18} />

            <p>
              Your BVN IS required to verify your identity <br />
              and securely connect your bank account.
            </p>

          </div>

                    <button
            className="continue-btn"
            onClick={() => navigate("/onboarding-step-three")}
            >
            Continue
            </button>

        </div>

      </div>

    </div>
  );
};

export default OnboardingStepTwo;