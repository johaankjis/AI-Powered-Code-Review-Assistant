import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle, AlertCircle, Info, CheckCircle2 } from "lucide-react"

interface IssuesOverviewProps {
  critical: number
  high: number
  medium: number
  low: number
  resolved: number
}

export function IssuesOverview({ critical, high, medium, low, resolved }: IssuesOverviewProps) {
  const total = critical + high + medium + low

  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="text-foreground">Issues Overview</CardTitle>
        <CardDescription className="text-muted-foreground">AI-detected issues across all PRs</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-3 rounded-lg bg-red-500/10 border border-red-500/20">
            <div className="flex items-center gap-3">
              <AlertTriangle className="h-5 w-5 text-red-500" />
              <div>
                <div className="text-sm font-medium text-foreground">Critical</div>
                <div className="text-xs text-muted-foreground">Requires immediate attention</div>
              </div>
            </div>
            <div className="text-2xl font-bold text-red-500">{critical}</div>
          </div>

          <div className="flex items-center justify-between p-3 rounded-lg bg-orange-500/10 border border-orange-500/20">
            <div className="flex items-center gap-3">
              <AlertCircle className="h-5 w-5 text-orange-500" />
              <div>
                <div className="text-sm font-medium text-foreground">High</div>
                <div className="text-xs text-muted-foreground">Should be fixed soon</div>
              </div>
            </div>
            <div className="text-2xl font-bold text-orange-500">{high}</div>
          </div>

          <div className="flex items-center justify-between p-3 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
            <div className="flex items-center gap-3">
              <Info className="h-5 w-5 text-yellow-500" />
              <div>
                <div className="text-sm font-medium text-foreground">Medium</div>
                <div className="text-xs text-muted-foreground">Can be addressed later</div>
              </div>
            </div>
            <div className="text-2xl font-bold text-yellow-500">{medium}</div>
          </div>

          <div className="flex items-center justify-between p-3 rounded-lg bg-blue-500/10 border border-blue-500/20">
            <div className="flex items-center gap-3">
              <Info className="h-5 w-5 text-blue-500" />
              <div>
                <div className="text-sm font-medium text-foreground">Low</div>
                <div className="text-xs text-muted-foreground">Minor improvements</div>
              </div>
            </div>
            <div className="text-2xl font-bold text-blue-500">{low}</div>
          </div>

          <div className="pt-4 border-t border-border">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
                <span className="text-sm font-medium text-foreground">Resolved</span>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-green-500">{resolved}</div>
                <div className="text-xs text-muted-foreground">
                  {total > 0 ? Math.round((resolved / (total + resolved)) * 100) : 0}% resolution rate
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
