'use client'

import * as React from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface ToggleProps {
  title: string
  children: React.ReactNode
  defaultOpen?: boolean
  className?: string
}

export function Toggle({ title, children, defaultOpen = false, className }: ToggleProps) {
  const [isOpen, setIsOpen] = React.useState(defaultOpen)

  return (
    <div className={cn("notion-toggle", className)}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 text-left hover:bg-secondary/50 transition-colors"
        aria-expanded={isOpen}
        aria-controls={`toggle-content-${title}`}
      >
        <span className="font-medium">{title}</span>
        <ChevronDown 
          className={cn(
            "h-4 w-4 transition-transform duration-150",
            isOpen && "rotate-180"
          )} 
        />
      </button>
      {isOpen && (
        <div 
          id={`toggle-content-${title}`}
          className="px-4 pb-4 border-t border-border animate-in slide-in-from-top-2 duration-150"
        >
          {children}
        </div>
      )}
    </div>
  )
}
