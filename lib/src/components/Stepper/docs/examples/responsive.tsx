import React from 'react'

import { Button } from '@/components/Button'
import { Stepper } from '@/components/Stepper'

const Example = () => {
  const [activeStep, setActiveStep] = React.useState(1)

  return (
    <div className="max-w-450">
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
        <Stepper.Separator />
        <Stepper.Item isOpen={activeStep === 3} onClick={() => setActiveStep(3)}>
          Step 4
        </Stepper.Item>
        <Stepper.Separator />
        <Stepper.Item isOpen={activeStep === 4} onClick={() => setActiveStep(4)}>
          Step 5
        </Stepper.Item>
      </Stepper>

      <div className="flex gap-sm mt-sm">
        <Button onClick={() => setActiveStep(prev => Math.max(prev - 1, 0))}>Previous</Button>
        <Button onClick={() => setActiveStep(prev => Math.min(prev + 1, 4))}>Next</Button>
      </div>
    </div>
  )
}

export default Example
