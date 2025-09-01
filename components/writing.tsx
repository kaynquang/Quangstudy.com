interface WritingItem {
  title: string
  summary: string
  date?: string
  url?: string
}

interface WritingProps {
  writing: WritingItem[]
}

export function Writing({ writing }: WritingProps) {
  if (writing.length === 0) {
    return (
      <section id="writing" className="section-spacing">
        <div className="container">
          <h2 className="text-3xl font-medium mb-12 intel-accent">Writing</h2>
          <p className="text-muted-foreground">No blog posts yet. Check back soon!</p>
        </div>
      </section>
    )
  }

  return (
    <section id="writing" className="section-spacing">
      <div className="container">
        <h2 className="text-3xl font-medium mb-12 intel-accent">Writing</h2>
        
        <div className="space-y-6">
          {writing.map((item, index) => (
            <div key={index} className="notion-table-row">
              <div>
                {item.url ? (
                  <a 
                    href={item.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-base hover:text-intel-blue transition-colors"
                  >
                    {item.title}
                  </a>
                ) : (
                  <h3 className="text-base font-medium">{item.title}</h3>
                )}
                <p className="text-sm text-muted-foreground mt-1">{item.summary}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
