export function Footer() {
  const currentYear = new Date().getFullYear()
  const lastUpdated = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return (
    <footer className="border-t border-border py-8 mt-16">
      <div className="container">
        <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>© {currentYear} Nguyen Minh Quang. All rights reserved.</p>
          <p>Last updated: {lastUpdated}</p>
        </div>
      </div>
    </footer>
  )
}
