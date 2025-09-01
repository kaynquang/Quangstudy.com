import { ExternalLink, FileText } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface ResearchItem {
  title: string
  topic: string
  dates: string
  bullets: string[]
  links: { [key: string]: string }
}

interface ResearchProps {
  research: ResearchItem[]
}

export function Research({ research }: ResearchProps) {
  return (
    <section id="research" className="section-spacing">
      <div className="container">
        <h2 className="text-3xl font-medium mb-12 intel-accent">Research</h2>
        
        <div className="space-y-8">
          {research.map((item, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="mb-2">{item.title}</CardTitle>
                <p className="text-base text-muted-foreground mb-2">{item.topic}</p>
                <p className="text-sm text-muted-foreground">{item.dates}</p>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-4">
                  <ul className="space-y-2">
                    {item.bullets.map((bullet, idx) => (
                      <li key={idx} className="text-sm">• {bullet}</li>
                    ))}
                  </ul>
                  
                  {item.links && Object.keys(item.links).length > 0 && (
                    <div className="flex gap-2">
                      {Object.entries(item.links).map(([type, url]) => (
                        <Button key={type} variant="outline" size="sm" asChild>
                          <a href={url} target="_blank" rel="noopener noreferrer">
                            {type === 'repo' && <ExternalLink className="h-4 w-4 mr-2" />}
                            {type === 'poster' && <FileText className="h-4 w-4 mr-2" />}
                            {type.charAt(0).toUpperCase() + type.slice(1)}
                          </a>
                        </Button>
                      ))}
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
