import { Tag } from "@/components/ui/tag"

interface SkillsProps {
  skills: { [category: string]: string[] }
}

export function Skills({ skills }: SkillsProps) {
  return (
    <section className="section-spacing">
      <div className="container">
        <h2 className="text-3xl font-medium mb-12 intel-accent">Skills</h2>
        
        <div className="grid gap-8 md:grid-cols-2">
          {Object.entries(skills).map(([category, skillList]) => (
            <div key={category} className="space-y-4">
              <h3 className="text-lg font-medium intel-accent">{category}</h3>
              <div className="flex flex-wrap gap-3">
                {skillList.map((skill) => (
                  <Tag key={skill} className="text-xs">{skill}</Tag>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
