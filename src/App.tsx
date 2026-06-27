import { BrowserRouter, Routes, Route } from "react-router-dom";
import OnboardingStepOne from "./pages/OnboardingStepOne";
import OnboardingStepTwo from "./pages/OnboardingStepTwo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<OnboardingStepOne />} />
        <Route path="/onboarding-step-two" element={<OnboardingStepTwo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;