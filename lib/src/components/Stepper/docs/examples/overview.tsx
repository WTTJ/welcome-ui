import React from 'react'

import { Stepper } from '@/components/Stepper'

const Example = () => {
  const [activeStep, setActiveStep] = React.useState(1)

  return (
    <Stepper>
      <Stepper.Item isCompleted isOpen={activeStep === 0} onClick={() => setActiveStep(0)}>
        Step 1
      </Stepper.Item>
      <Stepper.Separator />
      <Stepper.Item isOpen={activeStep === 1} onClick={() => setActiveStep(1)}>
        Step 2
      </Stepper.Item>
      <Stepper.Separator />
      <Stepper.Item isOpen={activeStep === 2} onClick={() => setActiveStep(2)}>
        Step 3
      </Stepper.Item>
    </Stepper>
  )
}

export default Example
