import { Mail, Github, Linkedin, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ContactInfo {
  email: string
  github: string
  linkedin?: string
  resume?: string
}

interface ContactProps {
  contact: ContactInfo
}

export function Contact({ contact }: ContactProps) {
  return (
    <section id="contact" className="section-spacing">
      <div className="container">
        <h2 className="text-3xl font-medium mb-12 intel-accent">Contact</h2>
        
        <div className="flex flex-wrap gap-6">
          <Button asChild>
            <a href={`mailto:${contact.email}`}>
              <Mail className="h-4 w-4 mr-2" />
              Email
            </a>
          </Button>
          
          <Button variant="outline" asChild>
            <a href={contact.github} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4 mr-2" />
              GitHub
            </a>
          </Button>
          
          {contact.linkedin && (
            <Button variant="outline" asChild>
              <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4 mr-2" />
                LinkedIn
              </a>
            </Button>
          )}
          
          {contact.resume && contact.resume !== "#" && (
            <Button variant="outline" asChild>
              <a href={contact.resume} target="_blank" rel="noopener noreferrer">
                <FileText className="h-4 w-4 mr-2" />
                Resume
              </a>
            </Button>
          )}
        </div>
      </div>
    </section>
  )
}
