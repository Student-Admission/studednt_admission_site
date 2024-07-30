import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Step from '@mui/material/Step';
import StepContent from '@mui/material/StepContent';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import EduDetails from './component/edu_details.jsx';
import FamilyDetails from './component/family_details.jsx';
import PersonalDetails from './component/personal_details.jsx';
import Preferences from './component/preferences.jsx';

const steps = [
  {
    label: 'Add personal details',
    description: 'Write each detail carefully',
    component: (handleNext) => <PersonalDetails handleNext={handleNext} />,
  },
  {
    label: 'Add education details',
    description: 'Write each detail carefully add',
    component: (handleNext) => <EduDetails handleNext={handleNext} />,
  },
  {
    label: 'Add family details',
    description: 'Write each detail carefully',
    component: (handleNext) => <FamilyDetails handleNext={handleNext} />,
  },
  {
    label: 'Add your Preferences',
    description: 'Carefully add the preferences of branch',
    component: (handleNext) => <Preferences handleNext={handleNext} />,
  },
  {
    label: 'Upload Documents',
    description: 'Add correct documents',
    component: null, // No component for this step
  },
];

export default function VerticalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', maxWidth: '100%', mt: 8, px: 3 }}>
      <Box sx={{ width: '100%', maxWidth: 300 }}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((step, index) => (
            <Step key={step.label}>
              <StepLabel
                optional={
                  index === 2 ? (
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
                      disabled={activeStep === steps.length - 1}
                    >
                      {activeStep === steps.length - 1 ? 'Finish' : 'Continue'}
                    </Button>
                    <Button
                      disabled={activeStep === 0}
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
        {steps[activeStep].component(handleNext)}
      </Box>
    </Box>
  );
}
