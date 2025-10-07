export interface PullRequest {
  id: string
  number: number
  title: string
  author: string
  branch: string
  status: "pending" | "approved" | "changes-requested" | "merged"
  createdAt: string
  updatedAt: string
  additions: number
  deletions: number
  filesChanged: number
  qualityScore: number
  coverage: number
  aiComments: number
  issues: {
    critical: number
    high: number
    medium: number
    low: number
  }
}

export interface AIComment {
  id: string
  file: string
  line: number
  type: "security" | "performance" | "style" | "bug" | "suggestion"
  severity: "critical" | "high" | "medium" | "low"
  message: string
  suggestion?: string
  code?: string
}

export interface TestCoverage {
  file: string
  coverage: number
  lines: {
    total: number
    covered: number
    uncovered: number
  }
  branches: {
    total: number
    covered: number
    uncovered: number
  }
}

export const mockPullRequests: PullRequest[] = [
  {
    id: "1",
    number: 1247,
    title: "Add user authentication with JWT tokens",
    author: "sarah-dev",
    branch: "feature/auth-jwt",
    status: "pending",
    createdAt: "2025-01-06T10:30:00Z",
    updatedAt: "2025-01-07T14:22:00Z",
    additions: 342,
    deletions: 89,
    filesChanged: 12,
    qualityScore: 87,
    coverage: 92,
    aiComments: 8,
    issues: { critical: 1, high: 2, medium: 3, low: 2 },
  },
  {
    id: "2",
    number: 1246,
    title: "Optimize database queries for user dashboard",
    author: "mike-backend",
    branch: "perf/db-optimization",
    status: "approved",
    createdAt: "2025-01-05T09:15:00Z",
    updatedAt: "2025-01-07T11:45:00Z",
    additions: 156,
    deletions: 203,
    filesChanged: 8,
    qualityScore: 94,
    coverage: 95,
    aiComments: 3,
    issues: { critical: 0, high: 0, medium: 2, low: 1 },
  },
  {
    id: "3",
    number: 1245,
    title: "Fix memory leak in WebSocket connection handler",
    author: "alex-fullstack",
    branch: "fix/websocket-memory-leak",
    status: "changes-requested",
    createdAt: "2025-01-04T16:20:00Z",
    updatedAt: "2025-01-06T13:10:00Z",
    additions: 67,
    deletions: 45,
    filesChanged: 3,
    qualityScore: 76,
    coverage: 88,
    aiComments: 12,
    issues: { critical: 2, high: 4, medium: 4, low: 2 },
  },
  {
    id: "4",
    number: 1244,
    title: "Implement rate limiting for API endpoints",
    author: "emma-security",
    branch: "feature/rate-limiting",
    status: "merged",
    createdAt: "2025-01-03T11:00:00Z",
    updatedAt: "2025-01-05T15:30:00Z",
    additions: 234,
    deletions: 12,
    filesChanged: 9,
    qualityScore: 96,
    coverage: 97,
    aiComments: 2,
    issues: { critical: 0, high: 0, medium: 1, low: 1 },
  },
  {
    id: "5",
    number: 1243,
    title: "Refactor payment processing module",
    author: "david-payments",
    branch: "refactor/payment-module",
    status: "pending",
    createdAt: "2025-01-02T14:45:00Z",
    updatedAt: "2025-01-07T09:20:00Z",
    additions: 512,
    deletions: 387,
    filesChanged: 15,
    qualityScore: 82,
    coverage: 90,
    aiComments: 15,
    issues: { critical: 0, high: 3, medium: 8, low: 4 },
  },
]

export const mockAIComments: Record<string, AIComment[]> = {
  "1": [
    {
      id: "c1",
      file: "src/auth/jwt.ts",
      line: 45,
      type: "security",
      severity: "critical",
      message: "JWT secret is hardcoded. This is a critical security vulnerability.",
      suggestion: "Move the JWT secret to environment variables and use a strong, randomly generated secret.",
      code: `const JWT_SECRET = "my-secret-key"; // ❌ Hardcoded secret`,
    },
    {
      id: "c2",
      file: "src/auth/jwt.ts",
      line: 78,
      type: "security",
      severity: "high",
      message: "Token expiration time is too long (30 days). Consider shorter expiration for better security.",
      suggestion: "Use a shorter expiration time (e.g., 1 hour) and implement refresh tokens.",
      code: `expiresIn: '30d' // ❌ Too long`,
    },
    {
      id: "c3",
      file: "src/auth/middleware.ts",
      line: 23,
      type: "bug",
      severity: "high",
      message: "Missing error handling for invalid tokens. This could cause unhandled exceptions.",
      suggestion: "Add try-catch block to handle JWT verification errors gracefully.",
    },
    {
      id: "c4",
      file: "src/auth/routes.ts",
      line: 56,
      type: "performance",
      severity: "medium",
      message: "Database query inside loop. This could cause N+1 query problem.",
      suggestion: "Use a single query with WHERE IN clause to fetch all users at once.",
    },
    {
      id: "c5",
      file: "src/auth/validation.ts",
      line: 12,
      type: "style",
      severity: "low",
      message: "Inconsistent naming convention. Use camelCase for function names.",
      code: `function validate_email(email: string) { // ❌ snake_case`,
    },
  ],
  "3": [
    {
      id: "c6",
      file: "src/websocket/connection.ts",
      line: 89,
      type: "bug",
      severity: "critical",
      message: "Event listeners are not being removed on disconnect, causing memory leak.",
      suggestion: "Store listener references and remove them in the cleanup function.",
      code: `socket.on('message', handleMessage); // ❌ No cleanup`,
    },
    {
      id: "c7",
      file: "src/websocket/connection.ts",
      line: 134,
      type: "bug",
      severity: "critical",
      message: "Circular reference between socket and handler objects prevents garbage collection.",
      suggestion: "Use WeakMap or break the circular reference in cleanup.",
    },
  ],
}

export const mockTestCoverage: Record<string, TestCoverage[]> = {
  "1": [
    {
      file: "src/auth/jwt.ts",
      coverage: 95,
      lines: { total: 120, covered: 114, uncovered: 6 },
      branches: { total: 24, covered: 22, uncovered: 2 },
    },
    {
      file: "src/auth/middleware.ts",
      coverage: 88,
      lines: { total: 85, covered: 75, uncovered: 10 },
      branches: { total: 18, covered: 16, uncovered: 2 },
    },
    {
      file: "src/auth/routes.ts",
      coverage: 92,
      lines: { total: 156, covered: 144, uncovered: 12 },
      branches: { total: 32, covered: 30, uncovered: 2 },
    },
    {
      file: "src/auth/validation.ts",
      coverage: 100,
      lines: { total: 45, covered: 45, uncovered: 0 },
      branches: { total: 12, covered: 12, uncovered: 0 },
    },
  ],
  "3": [
    {
      file: "src/websocket/connection.ts",
      coverage: 82,
      lines: { total: 234, covered: 192, uncovered: 42 },
      branches: { total: 48, covered: 38, uncovered: 10 },
    },
    {
      file: "src/websocket/handler.ts",
      coverage: 90,
      lines: { total: 167, covered: 150, uncovered: 17 },
      branches: { total: 28, covered: 26, uncovered: 2 },
    },
  ],
}

export const dashboardMetrics = {
  totalPRs: 247,
  avgReviewTime: "4.2h",
  qualityScore: 89,
  coverageAvg: 93,
  issuesFound: 1247,
  issuesResolved: 1089,
  trendsData: [
    { date: "2025-01-01", prs: 12, quality: 87, coverage: 91 },
    { date: "2025-01-02", prs: 15, quality: 89, coverage: 92 },
    { date: "2025-01-03", prs: 18, quality: 88, coverage: 93 },
    { date: "2025-01-04", prs: 14, quality: 90, coverage: 94 },
    { date: "2025-01-05", prs: 16, quality: 89, coverage: 93 },
    { date: "2025-01-06", prs: 19, quality: 91, coverage: 95 },
    { date: "2025-01-07", prs: 13, quality: 89, coverage: 93 },
  ],
}
