interface ExperienceItem {
  role: string
  org: string
  dates: string
  impact: string[]
}

interface ExperienceProps {
  experience: ExperienceItem[]
}

export function Experience({ experience }: ExperienceProps) {
  return (
    <section className="section-spacing bg-secondary/20">
      <div className="container">
        <h2 className="text-3xl font-medium mb-12 intel-accent">Experience</h2>
        
        <div className="space-y-10">
          {experience.map((item, index) => (
            <div key={index} className="relative pl-10 border-l-2 border-intel-blue/30">
              <div className="absolute -left-2 top-0 w-4 h-4 bg-background border-2 border-intel-blue rounded-full"></div>
              
              <div>
                <h3 className="text-lg font-medium">{item.role}</h3>
                <p className="text-base text-muted-foreground mb-2">{item.org}</p>
                <p className="text-sm text-muted-foreground mb-4">{item.dates}</p>
                
                <ul className="space-y-1">
                  {item.impact.map((impact, idx) => (
                    <li key={idx} className="text-sm">• {impact}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
