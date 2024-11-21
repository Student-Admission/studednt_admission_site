import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Step from '@mui/material/Step';
import StepContent from '@mui/material/StepContent';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import EduDetails from './component/edu_details.jsx';
import FamilyDetails from './component/family_details.jsx';
import PersonalDetails from './component/personal_details.jsx';
import Preferences from './component/preferences.jsx';

const steps = [
  {
    label: 'Add personal details',
    description: 'Write each detail carefully',
    component: (handleNext, setStepCompletion) => <PersonalDetails handleNext={handleNext} setStepCompletion={setStepCompletion} />,
  },
  {
    label: 'Add education details',
    description: 'Write each detail carefully',
    component: (handleNext, setStepCompletion) => <EduDetails handleNext={handleNext} setStepCompletion={setStepCompletion} />,
  },
  {
    label: 'Add family details',
    description: 'Write each detail carefully',
    component: (handleNext, setStepCompletion) => <FamilyDetails handleNext={handleNext} setStepCompletion={setStepCompletion} />,
  },
  {
    label: 'Add your Preferences',
    description: 'Carefully add the preferences of branch',
    component: (handleNext, setStepCompletion) => <Preferences handleNext={handleNext} setStepCompletion={setStepCompletion} />,
  },
];

export default function VerticalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [stepCompletion, setStepCompletion] = React.useState(Array(steps.length).fill(false));
  const [isFormLocked, setIsFormLocked] = React.useState(false);
  const navigate = useNavigate(); // Hook to navigate to different routes

  const handleNext = () => {
    if (!stepCompletion[activeStep]) {
      alert("Please complete the form before proceeding.");
      return;
    }
    if (activeStep === steps.length - 1) {
      // If the last step is reached, lock the form, set form completion in localStorage, and navigate to /allocated_branch
      setIsFormLocked(true);
      localStorage.setItem('formCompleted', 'true'); // Update localStorage
      navigate('/allocated_branch');
      window.location.reload();
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    if (!isFormLocked) {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    }
  };

  const handleReset = () => {
    setActiveStep(0);
    setStepCompletion(Array(steps.length).fill(false));
    setIsFormLocked(false);
    localStorage.setItem('formCompleted', 'false'); // Reset form completion in localStorage
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', maxWidth: '100%', mt: 8, px: 3 }}>
      <Box sx={{ width: '100%', maxWidth: 300 }}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((step, index) => (
            <Step key={step.label}>
              <StepLabel
                optional={
                  index === steps.length - 1 ? (
                    <Typography variant="caption">Last step</Typography>
                  ) : null
                }
              >
                {step.label}
              </StepLabel>
              <StepContent>
                <Typography>{step.description}</Typography>
                <Box sx={{ mb: 2 }}>
                  <div>
                    <Button
                      variant="contained"
                      onClick={handleNext}
                      sx={{ mt: 1, mr: 2 }}
                      disabled={!stepCompletion[activeStep]} // Disable if current step is not complete
                    >
                      {activeStep === steps.length - 1 ? 'Finish' : 'Continue'}
                    </Button>
                    <Button
                      disabled={activeStep === 0 || isFormLocked} // Disable if on the first step or form is locked
                      onClick={handleBack}
                      sx={{ mt: 1, mr: 2 }}
                    >
                      Back
                    </Button>
                  </div>
                </Box>
              </StepContent>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length && (
          <Box mt={2}>
            <Typography>All steps completed - you're finished</Typography>
            <Button onClick={handleReset} sx={{ mt: 1, mr: 2 }}>
              Reset
            </Button>
          </Box>
        )}
      </Box>
      <Box sx={{ ml: 3, flexGrow: 1 }}>
        {steps[activeStep].component(handleNext, (isComplete) => {
          const newCompletion = [...stepCompletion];
          newCompletion[activeStep] = isComplete;
          setStepCompletion(newCompletion);
        })}
      </Box>
    </Box>
  );
}
