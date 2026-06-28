import type { ReactNode } from 'react';

interface OnboardingLayoutProps {
  step: number;
  totalSteps: number;
  onBack?: () => void;
  children: ReactNode;
  innerCard?: boolean;
}

export default function OnboardingLayout({
  step,
  totalSteps,
  onBack,
  children,
  innerCard = false,
}: OnboardingLayoutProps) {
  const progress = (step / totalSteps) * 100;

  return (
    <div className="onboarding-page">
      <div className="onboarding-progress">
        <span className="onboarding-progress-label">
          {step}/{totalSteps}
        </span>
        <div className="onboarding-progress-track">
          <div className="onboarding-progress-fill" style={{ width: `${progress}%` }} />
        </div>
      </div>

      <div className={`onboarding-shell${innerCard ? ' onboarding-shell--card' : ''}`}>
        {onBack && (
          <button type="button" className="onboarding-back" onClick={onBack}>
            ← Back
          </button>
        )}

        {innerCard ? <div className="onboarding-inner-card">{children}</div> : children}
      </div>
    </div>
  );
}