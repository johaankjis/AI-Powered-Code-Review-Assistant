import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GitPullRequest, Clock, FileCode } from "lucide-react"
import Link from "next/link"
import type { PullRequest } from "@/lib/mock-data"
import { cn } from "@/lib/utils"

interface RecentPRsProps {
  pullRequests: PullRequest[]
}

const statusConfig = {
  pending: { label: "Pending", className: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20" },
  approved: { label: "Approved", className: "bg-green-500/10 text-green-500 border-green-500/20" },
  "changes-requested": { label: "Changes Requested", className: "bg-red-500/10 text-red-500 border-red-500/20" },
  merged: { label: "Merged", className: "bg-purple-500/10 text-purple-500 border-purple-500/20" },
}

export function RecentPRs({ pullRequests }: RecentPRsProps) {
  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="text-foreground">Recent Pull Requests</CardTitle>
        <CardDescription className="text-muted-foreground">Latest code reviews and their status</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {pullRequests.slice(0, 5).map((pr) => (
            <Link
              key={pr.id}
              href={`/pull-requests/${pr.number}`}
              className="flex items-start gap-4 p-4 rounded-lg border border-border bg-card hover:bg-accent/50 transition-colors"
            >
              <div className="flex-shrink-0 mt-1">
                <GitPullRequest className="h-5 w-5 text-muted-foreground" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h4 className="text-sm font-medium text-foreground leading-tight">{pr.title}</h4>
                  <Badge variant="outline" className={cn("flex-shrink-0", statusConfig[pr.status].className)}>
                    {statusConfig[pr.status].label}
                  </Badge>
                </div>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="font-mono">#{pr.number}</span>
                  <span>{pr.author}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {new Date(pr.updatedAt).toLocaleDateString()}
                  </span>
                  <span className="flex items-center gap-1">
                    <FileCode className="h-3 w-3" />
                    {pr.filesChanged} files
                  </span>
                </div>
                <div className="flex items-center gap-3 mt-2">
                  <div className="flex items-center gap-1 text-xs">
                    <span className="text-green-500">+{pr.additions}</span>
                    <span className="text-red-500">-{pr.deletions}</span>
                  </div>
                  <div className="text-xs text-muted-foreground">Quality: {pr.qualityScore}%</div>
                  <div className="text-xs text-muted-foreground">Coverage: {pr.coverage}%</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
