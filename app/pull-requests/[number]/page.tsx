import { Header } from "@/components/header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AICommentCard } from "@/components/ai-comment-card"
import {
  GitPullRequest,
  Clock,
  FileCode,
  GitBranch,
  User,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  TrendingUp,
} from "lucide-react"
import { mockPullRequests, mockAIComments, mockTestCoverage } from "@/lib/mock-data"
import { cn } from "@/lib/utils"
import { notFound } from "next/navigation"

const statusConfig = {
  pending: { label: "Pending Review", className: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20" },
  approved: { label: "Approved", className: "bg-green-500/10 text-green-500 border-green-500/20" },
  "changes-requested": { label: "Changes Requested", className: "bg-red-500/10 text-red-500 border-red-500/20" },
  merged: { label: "Merged", className: "bg-purple-500/10 text-purple-500 border-purple-500/20" },
}

export default function PullRequestDetailPage({ params }: { params: { number: string } }) {
  const pr = mockPullRequests.find((p) => p.number === Number.parseInt(params.number))

  if (!pr) {
    notFound()
  }

  const aiComments = mockAIComments[pr.id] || []
  const testCoverage = mockTestCoverage[pr.id] || []
  const totalIssues = pr.issues.critical + pr.issues.high + pr.issues.medium + pr.issues.low

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container py-8">
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-2">
            <GitPullRequest className="h-8 w-8 text-muted-foreground" />
            <h1 className="text-3xl font-bold text-foreground">{pr.title}</h1>
          </div>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="font-mono">#{pr.number}</span>
            <span className="flex items-center gap-1">
              <User className="h-3 w-3" />
              {pr.author}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              Updated {new Date(pr.updatedAt).toLocaleDateString()}
            </span>
            <Badge variant="outline" className={statusConfig[pr.status].className}>
              {statusConfig[pr.status].label}
            </Badge>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3 mb-8">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-sm font-medium text-muted-foreground">Quality Score</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-3xl font-bold text-foreground">{pr.qualityScore}%</div>
                <TrendingUp
                  className={cn("h-6 w-6", {
                    "text-green-500": pr.qualityScore >= 90,
                    "text-yellow-500": pr.qualityScore >= 75 && pr.qualityScore < 90,
                    "text-red-500": pr.qualityScore < 75,
                  })}
                />
              </div>
              <div className="mt-2 h-2 w-full bg-muted rounded-full overflow-hidden">
                <div
                  className={cn("h-full rounded-full", {
                    "bg-green-500": pr.qualityScore >= 90,
                    "bg-yellow-500": pr.qualityScore >= 75 && pr.qualityScore < 90,
                    "bg-red-500": pr.qualityScore < 75,
                  })}
                  style={{ width: `${pr.qualityScore}%` }}
                />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-sm font-medium text-muted-foreground">Test Coverage</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-3xl font-bold text-foreground">{pr.coverage}%</div>
                <CheckCircle2
                  className={cn("h-6 w-6", {
                    "text-green-500": pr.coverage >= 90,
                    "text-yellow-500": pr.coverage >= 75 && pr.coverage < 90,
                    "text-red-500": pr.coverage < 75,
                  })}
                />
              </div>
              <div className="mt-2 h-2 w-full bg-muted rounded-full overflow-hidden">
                <div
                  className={cn("h-full rounded-full", {
                    "bg-green-500": pr.coverage >= 90,
                    "bg-yellow-500": pr.coverage >= 75 && pr.coverage < 90,
                    "bg-red-500": pr.coverage < 75,
                  })}
                  style={{ width: `${pr.coverage}%` }}
                />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-sm font-medium text-muted-foreground">Issues Found</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-3xl font-bold text-foreground">{totalIssues}</div>
                <AlertTriangle className="h-6 w-6 text-orange-500" />
              </div>
              <div className="flex items-center gap-2 mt-2 text-xs">
                {pr.issues.critical > 0 && <span className="text-red-500">{pr.issues.critical} Critical</span>}
                {pr.issues.high > 0 && <span className="text-orange-500">{pr.issues.high} High</span>}
                {pr.issues.medium > 0 && <span className="text-yellow-500">{pr.issues.medium} Medium</span>}
                {pr.issues.low > 0 && <span className="text-blue-500">{pr.issues.low} Low</span>}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-card border-border mb-6">
          <CardHeader>
            <CardTitle className="text-foreground">Changes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <FileCode className="h-4 w-4 text-muted-foreground" />
                <span className="text-foreground">{pr.filesChanged} files changed</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500 font-medium">+{pr.additions} additions</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-red-500 font-medium">-{pr.deletions} deletions</span>
              </div>
              <div className="flex items-center gap-2 ml-auto">
                <GitBranch className="h-4 w-4 text-muted-foreground" />
                <span className="font-mono text-xs text-muted-foreground">{pr.branch}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="ai-review" className="w-full">
          <TabsList className="bg-muted border border-border">
            <TabsTrigger value="ai-review">AI Review ({aiComments.length})</TabsTrigger>
            <TabsTrigger value="coverage">Test Coverage</TabsTrigger>
            <TabsTrigger value="quality-gates">Quality Gates</TabsTrigger>
          </TabsList>

          <TabsContent value="ai-review" className="mt-6">
            <div className="space-y-4">
              {aiComments.length > 0 ? (
                aiComments.map((comment) => <AICommentCard key={comment.id} comment={comment} />)
              ) : (
                <Card className="bg-card border-border">
                  <CardContent className="pt-6">
                    <div className="text-center py-8">
                      <CheckCircle2 className="h-12 w-12 text-green-500 mx-auto mb-3" />
                      <h3 className="text-lg font-semibold text-foreground mb-2">No Issues Found</h3>
                      <p className="text-sm text-muted-foreground">
                        AI review completed successfully with no issues detected.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </TabsContent>

          <TabsContent value="coverage" className="mt-6">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-foreground">Test Coverage Report</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Coverage analysis for modified files
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {testCoverage.map((file) => (
                    <div key={file.file} className="p-4 rounded-lg border border-border bg-card">
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-mono text-sm text-foreground">{file.file}</span>
                        <Badge
                          variant="outline"
                          className={cn({
                            "bg-green-500/10 text-green-500 border-green-500/20": file.coverage >= 90,
                            "bg-yellow-500/10 text-yellow-500 border-yellow-500/20":
                              file.coverage >= 75 && file.coverage < 90,
                            "bg-red-500/10 text-red-500 border-red-500/20": file.coverage < 75,
                          })}
                        >
                          {file.coverage}%
                        </Badge>
                      </div>
                      <div className="h-2 w-full bg-muted rounded-full overflow-hidden mb-3">
                        <div
                          className={cn("h-full rounded-full", {
                            "bg-green-500": file.coverage >= 90,
                            "bg-yellow-500": file.coverage >= 75 && file.coverage < 90,
                            "bg-red-500": file.coverage < 75,
                          })}
                          style={{ width: `${file.coverage}%` }}
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-xs">
                        <div>
                          <div className="text-muted-foreground mb-1">Lines</div>
                          <div className="text-foreground">
                            {file.lines.covered} / {file.lines.total} covered
                          </div>
                        </div>
                        <div>
                          <div className="text-muted-foreground mb-1">Branches</div>
                          <div className="text-foreground">
                            {file.branches.covered} / {file.branches.total} covered
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="quality-gates" className="mt-6">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-foreground">Quality Gates</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Automated checks that must pass before merging
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 rounded-lg border border-border bg-card">
                    <div className="flex items-center gap-3">
                      {pr.coverage >= 90 ? (
                        <CheckCircle2 className="h-5 w-5 text-green-500" />
                      ) : (
                        <XCircle className="h-5 w-5 text-red-500" />
                      )}
                      <div>
                        <div className="text-sm font-medium text-foreground">Test Coverage ≥ 90%</div>
                        <div className="text-xs text-muted-foreground">Current: {pr.coverage}%</div>
                      </div>
                    </div>
                    <Badge
                      variant="outline"
                      className={
                        pr.coverage >= 90
                          ? "bg-green-500/10 text-green-500 border-green-500/20"
                          : "bg-red-500/10 text-red-500 border-red-500/20"
                      }
                    >
                      {pr.coverage >= 90 ? "Passed" : "Failed"}
                    </Badge>
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-lg border border-border bg-card">
                    <div className="flex items-center gap-3">
                      {pr.issues.critical === 0 ? (
                        <CheckCircle2 className="h-5 w-5 text-green-500" />
                      ) : (
                        <XCircle className="h-5 w-5 text-red-500" />
                      )}
                      <div>
                        <div className="text-sm font-medium text-foreground">No Critical Issues</div>
                        <div className="text-xs text-muted-foreground">Found: {pr.issues.critical}</div>
                      </div>
                    </div>
                    <Badge
                      variant="outline"
                      className={
                        pr.issues.critical === 0
                          ? "bg-green-500/10 text-green-500 border-green-500/20"
                          : "bg-red-500/10 text-red-500 border-red-500/20"
                      }
                    >
                      {pr.issues.critical === 0 ? "Passed" : "Failed"}
                    </Badge>
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-lg border border-border bg-card">
                    <div className="flex items-center gap-3">
                      {pr.qualityScore >= 85 ? (
                        <CheckCircle2 className="h-5 w-5 text-green-500" />
                      ) : (
                        <XCircle className="h-5 w-5 text-red-500" />
                      )}
                      <div>
                        <div className="text-sm font-medium text-foreground">Quality Score ≥ 85%</div>
                        <div className="text-xs text-muted-foreground">Current: {pr.qualityScore}%</div>
                      </div>
                    </div>
                    <Badge
                      variant="outline"
                      className={
                        pr.qualityScore >= 85
                          ? "bg-green-500/10 text-green-500 border-green-500/20"
                          : "bg-red-500/10 text-red-500 border-red-500/20"
                      }
                    >
                      {pr.qualityScore >= 85 ? "Passed" : "Failed"}
                    </Badge>
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-lg border border-border bg-card">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500" />
                      <div>
                        <div className="text-sm font-medium text-foreground">Static Analysis</div>
                        <div className="text-xs text-muted-foreground">No linting errors</div>
                      </div>
                    </div>
                    <Badge variant="outline" className="bg-green-500/10 text-green-500 border-green-500/20">
                      Passed
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="flex items-center gap-4 mt-8">
          <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white">
            <CheckCircle2 className="h-4 w-4 mr-2" />
            Approve PR
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-red-500 text-red-500 hover:bg-red-500/10 bg-transparent"
          >
            <XCircle className="h-4 w-4 mr-2" />
            Request Changes
          </Button>
          <Button size="lg" variant="outline">
            Add Comment
          </Button>
        </div>
      </main>
    </div>
  )
}
