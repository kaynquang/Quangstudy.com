import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Projects } from "@/components/projects"
import { Research } from "@/components/research"
import { Experience } from "@/components/experience"
import { Skills } from "@/components/skills"
import { Press } from "@/components/press"
import { Writing } from "@/components/writing"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import contentData from "@/data/content.json"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header name={contentData.name} title={contentData.title} />
      
      <main>
        <Hero 
          name={contentData.name}
          title={contentData.title}
          bio={contentData.bio}
          tags={contentData.tags}
        />
        
        <Projects projects={contentData.projects} />
        
        <Research research={contentData.research} />
        
        <Experience experience={contentData.experience} />
        
        <Skills skills={contentData.skills} />
        
        <Press press={contentData.press} />
        
        <Writing writing={contentData.writing} />
        
        <Contact contact={contentData.contact} />
      </main>
      
      <Footer />
    </div>
  )
}
