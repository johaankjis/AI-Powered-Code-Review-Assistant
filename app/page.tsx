import { Header } from "@/components/header"
import { MetricCard } from "@/components/metric-card"
import { QualityChart } from "@/components/quality-chart"
import { RecentPRs } from "@/components/recent-prs"
import { IssuesOverview } from "@/components/issues-overview"
import { GitPullRequest, Clock, Award, Target } from "lucide-react"
import { dashboardMetrics, mockPullRequests } from "@/lib/mock-data"

export default function DashboardPage() {
  const activePRs = mockPullRequests.filter((pr) => pr.status === "pending" || pr.status === "changes-requested")
  const totalIssues = mockPullRequests.reduce(
    (acc, pr) => ({
      critical: acc.critical + pr.issues.critical,
      high: acc.high + pr.issues.high,
      medium: acc.medium + pr.issues.medium,
      low: acc.low + pr.issues.low,
    }),
    { critical: 0, high: 0, medium: 0, low: 0 },
  )

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Dashboard</h1>
          <p className="text-muted-foreground">AI-powered code review insights and metrics</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
          <MetricCard
            title="Total Pull Requests"
            value={dashboardMetrics.totalPRs}
            change="+12% from last week"
            changeType="positive"
            icon={GitPullRequest}
          />
          <MetricCard
            title="Avg Review Time"
            value={dashboardMetrics.avgReviewTime}
            change="-18% from last week"
            changeType="positive"
            icon={Clock}
          />
          <MetricCard
            title="Quality Score"
            value={`${dashboardMetrics.qualityScore}%`}
            change="+2% from last week"
            changeType="positive"
            icon={Award}
          />
          <MetricCard
            title="Test Coverage"
            value={`${dashboardMetrics.coverageAvg}%`}
            change="+1% from last week"
            changeType="positive"
            icon={Target}
          />
        </div>

        <div className="grid gap-6 lg:grid-cols-3 mb-8">
          <div className="lg:col-span-2">
            <QualityChart data={dashboardMetrics.trendsData} />
          </div>
          <div>
            <IssuesOverview
              critical={totalIssues.critical}
              high={totalIssues.high}
              medium={totalIssues.medium}
              low={totalIssues.low}
              resolved={dashboardMetrics.issuesResolved}
            />
          </div>
        </div>

        <RecentPRs pullRequests={mockPullRequests} />
      </main>
    </div>
  )
}
