import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PersonalDetails from './component/personal_details.jsx';
import EduDetails from './component/edu_details.jsx';
import FamilyDetails from './component/family_details.jsx';

const steps = [
  {
    label: 'Add personal details',
    description: `Write each detail carefully`,
    component: <PersonalDetails />,
  },
  {
    label: 'Add education details',
    description: 'Write each detail carefully',
    component: <EduDetails />,
  },
  {
    label: 'Add family details',
    description: `Write each detail carefully`,
    component: <FamilyDetails />,
  },
  {
    label: 'Jee Mains Score',
    description: `Add Genuine Jee Mains Score`,
    component: null, // No component for this step
  },
  {
    label: 'Upload Documents',
    description: `Add correct documents`,
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
    <Box sx={{ display: 'flex', justifyContent: 'space-between', maxWidth: 800 , mt:8}}>
      <Box>
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
            <Typography>All steps completed - you&apos;re finished</Typography>
            <Button onClick={handleReset} sx={{ mt: 1, mr: 2 }}>
              Reset
            </Button>
          </Box>
        )}
      </Box>
      <Box ml = {20} >
        {steps[activeStep].component}
      </Box>
    </Box>
  );
}
