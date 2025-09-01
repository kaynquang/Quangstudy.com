import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'ghost' | 'outline'
  size?: 'default' | 'sm' | 'lg'
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', asChild = false, ...props }, ref) => {
    const Comp = asChild ? React.Fragment : "button"
    const buttonClasses = cn(
      "inline-flex items-center justify-center rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-intel-blue focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
      {
        'bg-intel-blue text-white hover:bg-intel-dark': variant === 'default',
        'hover:bg-accent hover:text-accent-foreground': variant === 'ghost',
        'border border-intel-blue/30 hover:bg-intel-blue/10 hover:text-intel-blue': variant === 'outline',
      },
      {
        'h-10 py-2 px-4': size === 'default',
        'h-9 px-3 rounded-md': size === 'sm',
        'h-11 px-8 rounded-md': size === 'lg',
      },
      className
    )

    if (asChild) {
      return React.cloneElement(props.children as React.ReactElement, {
        className: cn(buttonClasses, (props.children as React.ReactElement).props.className),
        ref,
      })
    }

    return (
      <button
        className={buttonClasses}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
