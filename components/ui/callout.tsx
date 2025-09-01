import * as React from "react"
import { cn } from "@/lib/utils"

interface CalloutProps {
  icon?: React.ReactNode
  children: React.ReactNode
  className?: string
}

export function Callout({ icon, children, className }: CalloutProps) {
  return (
    <div className={cn("notion-callout", className)}>
      {icon && (
        <div className="flex-shrink-0 mt-0.5">
          {icon}
        </div>
      )}
      <div className="flex-1">
        {children}
      </div>
    </div>
  )
}
