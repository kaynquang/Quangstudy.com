import { ExternalLink, Github } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tag } from "@/components/ui/tag"
import { Toggle } from "@/components/ui/toggle"
import { Button } from "@/components/ui/button"

interface Project {
  title: string
  role: string
  stack: string[]
  summary: string
  metrics: string[]
  links: { [key: string]: string }
  details: string
}

interface ProjectsProps {
  projects: Project[]
}

export function Projects({ projects }: ProjectsProps) {
  return (
    <section id="projects" className="section-spacing bg-secondary/20">
      <div className="container">
        <h2 className="text-3xl font-medium mb-12 intel-accent">Projects</h2>
        
        <div className="space-y-8">
          {projects.map((project, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="mb-2">{project.title}</CardTitle>
                    <p className="text-sm text-muted-foreground mb-3">{project.role}</p>
                    <p className="text-base mb-4">{project.summary}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.stack.map((tech) => (
                        <Tag key={tech} className="text-xs">{tech}</Tag>
                      ))}
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-4">
                  {/* Metrics */}
                  <div>
                    <h4 className="text-sm font-medium mb-2">Key Metrics</h4>
                    <ul className="space-y-1">
                      {project.metrics.map((metric, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground">• {metric}</li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Links */}
                  {project.links && Object.keys(project.links).length > 0 && (
                    <div className="flex gap-2">
                      {Object.entries(project.links).map(([type, url]) => (
                        <Button key={type} variant="outline" size="sm" asChild>
                          <a href={url} target="_blank" rel="noopener noreferrer">
                            {type === 'github' && <Github className="h-4 w-4 mr-2" />}
                            {type === 'demo' && <ExternalLink className="h-4 w-4 mr-2" />}
                            {type === 'press' && <ExternalLink className="h-4 w-4 mr-2" />}
                            {type.charAt(0).toUpperCase() + type.slice(1)}
                          </a>
                        </Button>
                      ))}
                    </div>
                  )}
                  
                  {/* Details Toggle */}
                  <Toggle title="Show details">
                    <p className="text-sm text-muted-foreground mt-2">{project.details}</p>
                  </Toggle>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
