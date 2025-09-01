import { ExternalLink } from "lucide-react"
import { formatDate } from "@/lib/utils"

interface PressItem {
  outlet: string
  title: string
  date: string
  url: string
}

interface PressProps {
  press: PressItem[]
}

export function Press({ press }: PressProps) {
  if (press.length === 0) {
    return null
  }

  return (
    <section id="press" className="section-spacing bg-secondary/20">
      <div className="container">
        <h2 className="text-3xl font-medium mb-12 intel-accent">Press</h2>
        
        <div className="space-y-6">
          {press.map((item, index) => (
            <div key={index} className="notion-table-row grid-cols-[1fr_auto_auto] items-center">
              <div>
                <a 
                  href={item.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-base hover:text-intel-blue transition-colors inline-flex items-center gap-2"
                >
                  {item.title}
                  <ExternalLink className="h-4 w-4" />
                </a>
                <p className="text-sm text-muted-foreground mt-1">{item.outlet}</p>
              </div>
              <span className="text-sm text-muted-foreground">
                {formatDate(item.date)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
