import { Tag } from "@/components/ui/tag"

interface HeroProps {
  name: string
  title: string
  bio: string
  tags: string[]
}

export function Hero({ name, title, bio, tags }: HeroProps) {
  return (
    <section id="about" className="section-spacing">
      <div className="container">
        <div className="max-w-4xl">
          <h1 className="text-5xl font-medium mb-6 leading-tight">{name}</h1>
          <h2 className="text-2xl intel-accent mb-8 font-medium">{title}</h2>
          <p className="text-xl leading-relaxed-custom mb-12 text-muted-foreground max-w-3xl">{bio}</p>
          
          <div className="flex flex-wrap gap-3">
            {tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
