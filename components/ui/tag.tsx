import * as React from "react"
import { cn } from "@/lib/utils"

interface TagProps {
  children: React.ReactNode
  className?: string
}

export function Tag({ children, className }: TagProps) {
  return (
    <span className={cn("notion-tag", className)}>
      {children}
    </span>
  )
}
