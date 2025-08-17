import { forwardRef } from 'react'
import { cn } from '@/lib/classNames'

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
  className?: string
  id?: string
}

const Section = forwardRef<HTMLElement, SectionProps>(
  ({ children, className, id, ...props }, ref) => {
    return (
      <section
        ref={ref}
        id={id}
        className={cn('section-padding', className)}
        {...props}
      >
        <div className="container">
          {children}
        </div>
      </section>
    )
  }
)

Section.displayName = 'Section'

export default Section 