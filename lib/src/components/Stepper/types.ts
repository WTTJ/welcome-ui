import type { ComponentProps, ComponentPropsWithRef, HTMLAttributes } from 'react'

export type StepperItemProps = ComponentProps<'div'> &
  HTMLAttributes<HTMLLIElement> &
  StepperItemOptions

export type StepperProps = ComponentPropsWithRef<'ol'> &
  HTMLAttributes<HTMLOListElement> &
  StepperOptions

interface StepperItemOptions {
  children: React.ReactNode
  /**
   * force default icones even if status is provided
   */
  icon?: React.ReactNode
  /**
   * add checked icon on Stepper.Item
   */
  isCompleted?: boolean
  /**
   * add open folder icon on Stepper.Item
   */
  isOpen?: boolean
}

interface StepperOptions {
  children: React.ReactNode
}
