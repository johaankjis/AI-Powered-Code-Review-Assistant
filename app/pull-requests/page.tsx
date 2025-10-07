import { Header } from "@/components/header"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { GitPullRequest, Search, Filter, Clock, FileCode, AlertTriangle } from "lucide-react"
import Link from "next/link"
import { mockPullRequests } from "@/lib/mock-data"
import { cn } from "@/lib/utils"

const statusConfig = {
  pending: { label: "Pending", className: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20" },
  approved: { label: "Approved", className: "bg-green-500/10 text-green-500 border-green-500/20" },
  "changes-requested": { label: "Changes Requested", className: "bg-red-500/10 text-red-500 border-red-500/20" },
  merged: { label: "Merged", className: "bg-purple-500/10 text-purple-500 border-purple-500/20" },
}

export default function PullRequestsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Pull Requests</h1>
          <p className="text-muted-foreground">Review and manage code changes with AI assistance</p>
        </div>

        <Card className="bg-card border-border mb-6">
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search pull requests..."
                  className="pl-10 bg-background border-border text-foreground"
                />
              </div>
              <Button variant="outline" className="gap-2 bg-transparent">
                <Filter className="h-4 w-4" />
                Filter
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-4">
          {mockPullRequests.map((pr) => (
            <Link key={pr.id} href={`/pull-requests/${pr.number}`}>
              <Card className="bg-card border-border hover:bg-accent/50 transition-colors cursor-pointer">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <GitPullRequest className="h-6 w-6 text-muted-foreground" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <div>
                          <h3 className="text-lg font-semibold text-foreground mb-1">{pr.title}</h3>
                          <div className="flex items-center gap-3 text-sm text-muted-foreground">
                            <span className="font-mono">#{pr.number}</span>
                            <span>{pr.author}</span>
                            <span className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              Updated {new Date(pr.updatedAt).toLocaleDateString()}
                            </span>
                          </div>
                        </div>
                        <Badge variant="outline" className={cn("flex-shrink-0", statusConfig[pr.status].className)}>
                          {statusConfig[pr.status].label}
                        </Badge>
                      </div>

                      <div className="flex items-center gap-6 text-sm">
                        <div className="flex items-center gap-2">
                          <FileCode className="h-4 w-4 text-muted-foreground" />
                          <span className="text-foreground">{pr.filesChanged} files changed</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-green-500">+{pr.additions}</span>
                          <span className="text-red-500">-{pr.deletions}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <AlertTriangle className="h-4 w-4 text-muted-foreground" />
                          <span className="text-foreground">{pr.aiComments} AI comments</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 mt-3 pt-3 border-t border-border">
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-muted-foreground">Quality Score:</span>
                          <div className="flex items-center gap-1">
                            <div className="h-2 w-24 bg-muted rounded-full overflow-hidden">
                              <div
                                className={cn("h-full rounded-full", {
                                  "bg-green-500": pr.qualityScore >= 90,
                                  "bg-yellow-500": pr.qualityScore >= 75 && pr.qualityScore < 90,
                                  "bg-red-500": pr.qualityScore < 75,
                                })}
                                style={{ width: `${pr.qualityScore}%` }}
                              />
                            </div>
                            <span className="text-sm font-medium text-foreground">{pr.qualityScore}%</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-muted-foreground">Coverage:</span>
                          <div className="flex items-center gap-1">
                            <div className="h-2 w-24 bg-muted rounded-full overflow-hidden">
                              <div
                                className={cn("h-full rounded-full", {
                                  "bg-green-500": pr.coverage >= 90,
                                  "bg-yellow-500": pr.coverage >= 75 && pr.coverage < 90,
                                  "bg-red-500": pr.coverage < 75,
                                })}
                                style={{ width: `${pr.coverage}%` }}
                              />
                            </div>
                            <span className="text-sm font-medium text-foreground">{pr.coverage}%</span>
                          </div>
                        </div>
                        {(pr.issues.critical > 0 || pr.issues.high > 0) && (
                          <div className="flex items-center gap-2 ml-auto">
                            {pr.issues.critical > 0 && (
                              <Badge variant="outline" className="bg-red-500/10 text-red-500 border-red-500/20">
                                {pr.issues.critical} Critical
                              </Badge>
                            )}
                            {pr.issues.high > 0 && (
                              <Badge
                                variant="outline"
                                className="bg-orange-500/10 text-orange-500 border-orange-500/20"
                              >
                                {pr.issues.high} High
                              </Badge>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}
