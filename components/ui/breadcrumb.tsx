import * as React from "react"
import { ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface BreadcrumbProps {
  items: { label: string; href?: string }[]
  className?: string
}

export function Breadcrumb({ items, className }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className={cn("flex items-center space-x-2 text-sm text-muted-foreground", className)}>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {index > 0 && <ChevronRight className="h-4 w-4" />}
          {item.href ? (
            <a 
              href={item.href} 
              className="hover:text-foreground transition-colors"
            >
              {item.label}
            </a>
          ) : (
            <span className={index === items.length - 1 ? "text-foreground font-medium" : ""}>
              {item.label}
            </span>
          )}
        </React.Fragment>
      ))}
    </nav>
  )
}
