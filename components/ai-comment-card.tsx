import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, Lightbulb, Bug, Zap, Code2 } from "lucide-react"
import type { AIComment } from "@/lib/mock-data"
import { cn } from "@/lib/utils"

interface AICommentCardProps {
  comment: AIComment
}

const typeConfig = {
  security: { icon: AlertTriangle, label: "Security", color: "text-red-500" },
  performance: { icon: Zap, label: "Performance", color: "text-orange-500" },
  bug: { icon: Bug, label: "Bug", color: "text-red-500" },
  style: { icon: Code2, label: "Style", color: "text-blue-500" },
  suggestion: { icon: Lightbulb, label: "Suggestion", color: "text-yellow-500" },
}

const severityConfig = {
  critical: { className: "bg-red-500/10 text-red-500 border-red-500/20" },
  high: { className: "bg-orange-500/10 text-orange-500 border-orange-500/20" },
  medium: { className: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20" },
  low: { className: "bg-blue-500/10 text-blue-500 border-blue-500/20" },
}

export function AICommentCard({ comment }: AICommentCardProps) {
  const TypeIcon = typeConfig[comment.type].icon

  return (
    <Card className="bg-card border-border">
      <CardContent className="pt-6">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <div
              className={cn(
                "h-10 w-10 rounded-lg flex items-center justify-center",
                comment.severity === "critical" && "bg-red-500/10",
                comment.severity === "high" && "bg-orange-500/10",
                comment.severity === "medium" && "bg-yellow-500/10",
                comment.severity === "low" && "bg-blue-500/10",
              )}
            >
              <TypeIcon className={cn("h-5 w-5", typeConfig[comment.type].color)} />
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="outline" className={severityConfig[comment.severity].className}>
                {comment.severity.toUpperCase()}
              </Badge>
              <Badge variant="outline" className="bg-muted text-muted-foreground border-border">
                {typeConfig[comment.type].label}
              </Badge>
              <span className="text-xs text-muted-foreground font-mono">
                {comment.file}:{comment.line}
              </span>
            </div>
            <p className="text-sm text-foreground mb-3">{comment.message}</p>
            {comment.code && (
              <div className="mb-3 p-3 rounded-lg bg-muted/50 border border-border">
                <pre className="text-xs font-mono text-foreground overflow-x-auto">{comment.code}</pre>
              </div>
            )}
            {comment.suggestion && (
              <div className="p-3 rounded-lg bg-green-500/10 border border-green-500/20">
                <div className="flex items-start gap-2">
                  <Lightbulb className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-medium text-green-500 mb-1">Suggested Fix</div>
                    <p className="text-xs text-foreground">{comment.suggestion}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
