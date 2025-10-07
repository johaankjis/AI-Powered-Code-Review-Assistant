import Link from "next/link"
import { Code2, GitPullRequest, BarChart3, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-8 flex items-center gap-2">
          <Code2 className="h-6 w-6 text-primary" />
          <span className="font-mono text-lg font-semibold">CodeReview AI</span>
        </div>

        <nav className="flex items-center gap-6 text-sm">
          <Link href="/" className="flex items-center gap-2 text-foreground/80 transition-colors hover:text-foreground">
            <BarChart3 className="h-4 w-4" />
            Dashboard
          </Link>
          <Link
            href="/pull-requests"
            className="flex items-center gap-2 text-foreground/80 transition-colors hover:text-foreground"
          >
            <GitPullRequest className="h-4 w-4" />
            Pull Requests
          </Link>
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <Settings className="h-4 w-4" />
          </Button>
          <Button size="sm">Connect GitHub</Button>
        </div>
      </div>
    </header>
  )
}
