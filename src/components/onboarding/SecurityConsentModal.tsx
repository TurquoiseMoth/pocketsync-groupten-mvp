import { useEffect, useState } from 'react';
import shieldLockIcon from '../../assets/icons/shield-lock.svg';
import buildingIcon from '../../assets/icons/building.svg';
import lockIcon from '../../assets/icons/lock.svg';
import checkCircleIcon from '../../assets/icons/check-circle.svg';
import './SecurityConsentModal.css';

const COMPLIANCE_ITEMS = [
  {
    icon: shieldLockIcon,
    title: 'NDPR Compliant',
    description:
      'We comply with the Nigeria Data Protection Regulation (NDPR) to ensure your personal data is protected.',
  },
  {
    icon: buildingIcon,
    title: 'CBN Guidelines',
    description:
      'We adhere to the CBN open banking and data sharing standards.',
  },
  {
    icon: lockIcon,
    title: 'Secure & Encrypted',
    description:
      'Your data is encrypted in transit and at rest using industry-standard encryption (256-bit SSL).',
  },
  {
    icon: checkCircleIcon,
    title: 'Your Privacy Matters',
    description:
      'We do not sell or share your personal or financial data with third parties without your consent.',
  },
] as const;

interface SecurityConsentModalProps {
  open: boolean;
  onProceed: () => void;
  onCancel: () => void;
}

export default function SecurityConsentModal({
  open,
  onProceed,
  onCancel,
}: SecurityConsentModalProps) {
  const [agreed, setAgreed] = useState(false);

  useEffect(() => {
    if (open) {
      setAgreed(false);
    }
  }, [open]);

  if (!open) {
    return null;
  }

  return (
    <div className="security-consent-overlay">
      <div
        className="security-consent-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="security-consent-title"
      >
        <div className="security-consent-icon-wrap" aria-hidden="true">
          <span className="security-consent-dot security-consent-dot--tl" />
          <span className="security-consent-dot security-consent-dot--tr" />
          <span className="security-consent-dot security-consent-dot--bl" />
          <span className="security-consent-dot security-consent-dot--br" />
          <div className="security-consent-icon-circle">
            <img src={shieldLockIcon} alt="" width="28" height="28" />
          </div>
        </div>

        <header className="security-consent-header">
          <h2 id="security-consent-title">Your Security is Our Priority</h2>
          <p>
            At PocketSync, we are committed to protecting your data and your privacy. Before
            you connect your account, please review how we handle your information.
          </p>
        </header>

        <ul className="security-consent-list">
          {COMPLIANCE_ITEMS.map((item) => (
            <li key={item.title} className="security-consent-item">
              <img src={item.icon} alt="" width="22" height="22" aria-hidden="true" />
              <div>
                <strong>{item.title}</strong>
                <p>{item.description}</p>
              </div>
            </li>
          ))}
        </ul>

        <label className="security-consent-checkbox">
          <input
            type="checkbox"
            checked={agreed}
            onChange={(event) => setAgreed(event.target.checked)}
          />
          <span>
            I understand how my data is handled and agree to connect my account
          </span>
        </label>

        <div className="security-consent-actions">
          <button type="button" className="security-consent-cancel" onClick={onCancel}>
            Cancel
          </button>
          <button
            type="button"
            className="security-consent-proceed"
            disabled={!agreed}
            onClick={onProceed}
          >
            Proceed to connect <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </div>
  );
}