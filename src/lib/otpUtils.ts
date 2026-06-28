export const DEFAULT_RESEND_SECONDS = 30;

export function formatCountdown(seconds: number): string {
  const padded = Math.max(0, seconds).toString().padStart(2, '0');
  return `00.${padded}`;
}

export function formatPhoneForOtpDisplay(maskedPhone: string): string {
  const lastDigits = maskedPhone.replace(/\D/g, '').slice(-2);
  if (lastDigits.length === 2) {
    return `(080 *** *** ${lastDigits})`;
  }

  return maskedPhone;
}