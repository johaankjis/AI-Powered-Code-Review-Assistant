# AI-Powered Code Review Assistant - Codebase Documentation

## Table of Contents
1. [Project Overview](#project-overview)
2. [Architecture](#architecture)
3. [Technology Stack](#technology-stack)
4. [Project Structure](#project-structure)
5. [Core Components](#core-components)
6. [Data Models](#data-models)
7. [Pages and Routes](#pages-and-routes)
8. [UI Components](#ui-components)
9. [Utilities and Libraries](#utilities-and-libraries)
10. [Features and Functionality](#features-and-functionality)
11. [Development Workflow](#development-workflow)
12. [Code Patterns and Conventions](#code-patterns-and-conventions)
13. [Future Development](#future-development)

## Project Overview

**AI-Powered Code Review Assistant** is a modern frontend application that provides a comprehensive interface for automated code review and quality monitoring. Built with Next.js 15 and React 19, it demonstrates a production-ready UI/UX for managing pull requests, tracking code quality metrics, and visualizing AI-generated code analysis.

### Key Characteristics
- **Type**: Frontend demonstration application with mock data
- **Purpose**: Showcase AI-powered code review workflow and metrics visualization
- **Current Status**: UI/UX demonstration (no backend integration)
- **Total Files**: 75+ TypeScript/TSX files
- **Primary Languages**: TypeScript, TSX (React with TypeScript)

## Architecture

### Application Architecture
```
┌─────────────────────────────────────────────────┐
│           Next.js 15 App Router                 │
├─────────────────────────────────────────────────┤
│  ┌──────────────┐  ┌──────────────────────┐   │
│  │   Pages      │  │   Components         │   │
│  │  - Dashboard │  │  - Header            │   │
│  │  - PR List   │  │  - Metric Cards      │   │
│  │  - PR Detail │  │  - Charts            │   │
│  └──────────────┘  │  - AI Comments       │   │
│                     │  - UI Primitives     │   │
│                     └──────────────────────┘   │
├─────────────────────────────────────────────────┤
│  ┌──────────────┐  ┌──────────────────────┐   │
│  │  Mock Data   │  │   Utilities          │   │
│  │  - PRs       │  │  - cn() helper       │   │
│  │  - Metrics   │  │  - Type definitions  │   │
│  │  - Comments  │  │                      │   │
│  └──────────────┘  └──────────────────────┘   │
├─────────────────────────────────────────────────┤
│        Styling: Tailwind CSS 4.1.9              │
│        UI Framework: Radix UI                   │
└─────────────────────────────────────────────────┘
```

### Design Pattern
- **Framework**: Next.js App Router (file-based routing)
- **Component Architecture**: Functional React components with hooks
- **State Management**: Local component state (no global state management)
- **Data Flow**: Props-based data passing from mock data sources
- **Styling**: Utility-first with Tailwind CSS + component variants

## Technology Stack

### Core Dependencies
| Category | Technology | Version | Purpose |
|----------|-----------|---------|---------|
| **Framework** | Next.js | 15.2.4 | React framework with App Router |
| **UI Library** | React | 19 | Component-based UI |
| **Language** | TypeScript | 5 | Type-safe JavaScript |
| **Styling** | Tailwind CSS | 4.1.9 | Utility-first CSS framework |
| **UI Components** | Radix UI | Various | Accessible component primitives |
| **Icons** | Lucide React | 0.454.0 | Icon library |
| **Charts** | Recharts | Latest | Data visualization |
| **Typography** | Geist Font | Latest | Modern font family |

### Development Tools
- **Package Manager**: npm (with pnpm support)
- **Linting**: ESLint (Next.js config)
- **Build Tool**: Next.js build system
- **PostCSS**: For Tailwind CSS processing

### Key UI Libraries
- **Radix UI**: Accessible, unstyled component primitives
  - Dialog, Dropdown, Popover, Tabs, Toast, and more
- **class-variance-authority**: Component variant management
- **clsx & tailwind-merge**: Conditional CSS class handling
- **cmdk**: Command palette component
- **date-fns**: Date manipulation
- **sonner**: Toast notifications
- **vaul**: Drawer component

## Project Structure

```
AI-Powered-Code-Review-Assistant/
│
├── app/                          # Next.js App Router directory
│   ├── layout.tsx               # Root layout (theme provider, fonts)
│   ├── page.tsx                 # Dashboard page (/)
│   ├── globals.css              # Global styles and Tailwind imports
│   └── pull-requests/           # Pull requests section
│       ├── page.tsx             # PR list page (/pull-requests)
│       ├── loading.tsx          # Loading state
│       └── [number]/            # Dynamic PR detail route
│           └── page.tsx         # Individual PR page (/pull-requests/[number])
│
├── components/                   # React components
│   ├── header.tsx               # Main navigation header
│   ├── metric-card.tsx          # Dashboard metric display card
│   ├── quality-chart.tsx        # Quality/coverage trend chart
│   ├── recent-prs.tsx           # Recent PRs list component
│   ├── issues-overview.tsx      # Issues summary card
│   ├── ai-comment-card.tsx      # AI comment display card
│   ├── theme-provider.tsx       # Dark/light theme provider
│   └── ui/                      # Reusable UI primitives (65+ components)
│       ├── button.tsx
│       ├── card.tsx
│       ├── badge.tsx
│       ├── chart.tsx
│       └── ... (60+ more)
│
├── lib/                         # Utilities and data
│   ├── mock-data.ts            # Mock data for PRs, metrics, AI comments
│   └── utils.ts                # Utility functions (cn helper)
│
├── hooks/                       # Custom React hooks
│   ├── use-mobile.ts           # Mobile detection hook
│   └── use-toast.ts            # Toast notification hook
│
├── public/                      # Static assets
│   ├── file.svg                # File icon
│   ├── globe.svg               # Globe icon
│   ├── next.svg                # Next.js logo
│   ├── vercel.svg              # Vercel logo
│   └── window.svg              # Window icon
│
├── styles/                      # Global styles
│   └── globals.css             # Tailwind directives and custom CSS
│
├── components.json              # Shadcn UI configuration
├── next.config.mjs             # Next.js configuration
├── tsconfig.json               # TypeScript configuration
├── postcss.config.mjs          # PostCSS configuration
├── tailwind.config.ts          # Tailwind CSS configuration
├── package.json                # Project dependencies
└── README.md                   # Project documentation
```

## Core Components

### Application Pages

#### 1. Dashboard (`app/page.tsx`)
**Purpose**: Main landing page showing overview metrics and trends

**Key Features**:
- Displays 4 metric cards: Total PRs, Avg Review Time, Quality Score, Test Coverage
- Quality and coverage trend chart
- Issues overview by severity
- List of recent pull requests

**Data Sources**:
- `dashboardMetrics` from `lib/mock-data.ts`
- `mockPullRequests` from `lib/mock-data.ts`

**Components Used**:
- `Header`, `MetricCard`, `QualityChart`, `RecentPRs`, `IssuesOverview`

#### 2. Pull Requests List (`app/pull-requests/page.tsx`)
**Purpose**: Comprehensive list of all pull requests with filtering

**Key Features**:
- Search functionality (by title, author, branch)
- Status badges (Pending, Approved, Changes Requested, Merged)
- File change statistics (additions/deletions)
- Quality score and coverage bars
- Issue severity indicators
- Clickable cards linking to detailed PR view

**Data Processing**:
- Filters PRs based on search query
- Displays status with color-coded badges
- Shows quality metrics with visual indicators

#### 3. Pull Request Detail (`app/pull-requests/[number]/page.tsx`)
**Purpose**: Detailed view of a single pull request

**Key Features**:
- PR metadata (status, author, branch, dates)
- Quality metrics (quality score, test coverage, issues)
- File changes with additions/deletions
- Quality checks (threshold-based pass/fail)
- Static analysis results
- AI-generated comments with severity levels
- File-level test coverage breakdown
- Suggested fixes for detected issues

**Dynamic Routing**:
- Uses Next.js dynamic route `[number]` parameter
- Fetches PR by number from mock data
- Shows 404-style message if PR not found

### Feature Components

#### Header (`components/header.tsx`)
**Purpose**: Application-wide navigation and branding

**Elements**:
- Logo and branding ("CodeReview AI")
- Navigation links (Dashboard, Pull Requests)
- Settings button
- "Connect GitHub" action button

#### MetricCard (`components/metric-card.tsx`)
**Purpose**: Display key metrics with trend indicators

**Props**:
- `title`: Metric name
- `value`: Current value
- `change`: Percentage change description
- `changeType`: "positive" | "negative"
- `icon`: Lucide icon component

**Visual Features**:
- Icon with background
- Large value display
- Trend indicator with up/down arrow
- Color-coded change (green for positive, red for negative)

#### QualityChart (`components/quality-chart.tsx`)
**Purpose**: Visualize quality and coverage trends over time

**Chart Type**: Recharts line chart

**Data Displayed**:
- Quality score over time
- Test coverage over time
- Date-based x-axis
- Dual y-axis lines

#### RecentPRs (`components/recent-prs.tsx`)
**Purpose**: Display list of recent pull requests

**Features**:
- Shows up to 6 most recent PRs
- Status badges
- Author and date information
- Quick metrics (quality, coverage)
- Links to detailed PR view

#### IssuesOverview (`components/issues-overview.tsx`)
**Purpose**: Summarize AI-detected issues by severity

**Severity Levels**:
- **Critical**: Red, requires immediate attention
- **High**: Orange, should be fixed soon
- **Medium**: Yellow, can be addressed later
- **Low**: Blue, minor improvements
- **Resolved**: Green, completed fixes

**Visual Design**:
- Color-coded cards for each severity
- Icon indicators
- Count display
- Total and resolved counts at bottom

#### AICommentCard (`components/ai-comment-card.tsx`)
**Purpose**: Display individual AI-generated code review comments

**Props**:
- `file`: File path
- `line`: Line number
- `type`: "security" | "performance" | "style" | "bug" | "suggestion"
- `severity`: "critical" | "high" | "medium" | "low"
- `message`: Comment description
- `suggestion`: (optional) Suggested fix
- `code`: (optional) Code snippet

**Features**:
- Type and severity badges
- File and line location
- Message content
- Expandable code snippet
- Suggested fix display

## Data Models

### Interfaces (from `lib/mock-data.ts`)

#### PullRequest
```typescript
interface PullRequest {
  id: string                    // Unique identifier
  number: number                // PR number
  title: string                 // PR title
  author: string                // Author username
  branch: string                // Source branch name
  status: "pending" | "approved" | "changes-requested" | "merged"
  createdAt: string            // ISO date string
  updatedAt: string            // ISO date string
  additions: number            // Lines added
  deletions: number            // Lines deleted
  filesChanged: number         // Number of files changed
  qualityScore: number         // 0-100 quality score
  coverage: number             // 0-100 test coverage percentage
  aiComments: number           // Count of AI comments
  issues: {
    critical: number
    high: number
    medium: number
    low: number
  }
}
```

#### AIComment
```typescript
interface AIComment {
  id: string                    // Unique identifier
  file: string                  // File path
  line: number                  // Line number
  type: "security" | "performance" | "style" | "bug" | "suggestion"
  severity: "critical" | "high" | "medium" | "low"
  message: string               // Comment message
  suggestion?: string           // Optional suggested fix
  code?: string                 // Optional code snippet
}
```

#### TestCoverage
```typescript
interface TestCoverage {
  file: string                  // File path
  coverage: number              // 0-100 percentage
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
```

### Mock Data

#### Dashboard Metrics
```typescript
dashboardMetrics = {
  totalPRs: 247,
  avgReviewTime: "4.2h",
  qualityScore: 89,
  coverageAvg: 93,
  issuesFound: 1247,
  issuesResolved: 1108,
  trendsData: [...] // 14 days of quality/coverage data
}
```

#### Sample Pull Requests
- 6 mock PRs with varying statuses
- Complete with metrics, issues, and AI comments
- Realistic data for UI demonstration

## Pages and Routes

### Route Structure
| Route | Page | Description |
|-------|------|-------------|
| `/` | `app/page.tsx` | Dashboard with metrics and trends |
| `/pull-requests` | `app/pull-requests/page.tsx` | List of all PRs with search |
| `/pull-requests/[number]` | `app/pull-requests/[number]/page.tsx` | Detailed PR view |

### Navigation Flow
```
Dashboard (/)
    ↓
    ├─→ Pull Requests List (/pull-requests)
    │       ↓
    │       └─→ PR Detail (/pull-requests/1247)
    │
    └─→ Direct to PR Detail (via Recent PRs widget)
```

## UI Components

### Component Library (65+ components in `components/ui/`)

The project uses a comprehensive set of UI primitives based on Radix UI and Shadcn UI:

**Layout & Structure**:
- `card.tsx`, `separator.tsx`, `sidebar.tsx`, `resizable.tsx`

**Forms & Inputs**:
- `button.tsx`, `input.tsx`, `textarea.tsx`, `checkbox.tsx`
- `select.tsx`, `radio-group.tsx`, `switch.tsx`, `slider.tsx`
- `form.tsx`, `field.tsx`, `label.tsx`, `input-group.tsx`

**Navigation**:
- `navigation-menu.tsx`, `menubar.tsx`, `breadcrumb.tsx`
- `tabs.tsx`, `pagination.tsx`

**Overlays & Modals**:
- `dialog.tsx`, `alert-dialog.tsx`, `sheet.tsx`, `drawer.tsx`
- `popover.tsx`, `hover-card.tsx`, `tooltip.tsx`
- `dropdown-menu.tsx`, `context-menu.tsx`

**Data Display**:
- `table.tsx`, `badge.tsx`, `avatar.tsx`, `chart.tsx`
- `progress.tsx`, `skeleton.tsx`, `empty.tsx`

**Feedback**:
- `toast.tsx`, `toaster.tsx`, `sonner.tsx`, `alert.tsx`
- `spinner.tsx`

**Utilities**:
- `command.tsx`, `calendar.tsx`, `carousel.tsx`
- `accordion.tsx`, `collapsible.tsx`
- `scroll-area.tsx`, `aspect-ratio.tsx`

### Styling Conventions

**Color System**:
- Uses CSS variables for theme colors
- Supports dark/light mode via `next-themes`
- Semantic color names (primary, secondary, muted, accent, destructive)

**Component Variants**:
- Managed via `class-variance-authority` (cva)
- Example: Button has variants for size, variant, and state

**Responsive Design**:
- Mobile-first approach with Tailwind breakpoints
- Grid layouts that adapt to screen size
- Custom hook `use-mobile.ts` for mobile detection

## Utilities and Libraries

### Utility Functions

#### `cn()` function (`lib/utils.ts`)
```typescript
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```
**Purpose**: Merge Tailwind CSS classes conditionally
**Usage**: Combine base classes with conditional classes
**Example**: `cn("base-class", { "conditional-class": condition })`

### Custom Hooks

#### `use-mobile.ts`
**Purpose**: Detect mobile viewport
**Returns**: Boolean indicating if viewport is mobile-sized

#### `use-toast.ts`
**Purpose**: Toast notification management
**Functions**: `toast()`, `dismiss()`, `toaster state management`

## Features and Functionality

### 1. Dashboard Analytics
- **Real-time Metrics**: 4 key performance indicators
- **Trend Visualization**: 14-day quality and coverage trends
- **Issue Tracking**: Categorized issue counts
- **Recent Activity**: Quick access to latest PRs

### 2. Pull Request Management
- **Comprehensive Listing**: All PRs with key metrics
- **Search Capability**: Filter by title, author, or branch
- **Status Tracking**: Visual status indicators
- **Quality Scoring**: 0-100 quality assessment

### 3. AI-Powered Code Analysis
- **Comment Types**: Security, Performance, Style, Bug, Suggestion
- **Severity Levels**: Critical, High, Medium, Low
- **Contextual Insights**: File and line-specific comments
- **Suggested Fixes**: AI-generated code improvements

### 4. Test Coverage Tracking
- **PR-level Coverage**: Overall coverage percentage
- **File-level Breakdown**: Per-file coverage details
- **Line & Branch Coverage**: Detailed coverage metrics
- **Visual Indicators**: Color-coded coverage bars (green >90%, yellow 75-90%, red <75%)

### 5. Quality Checks
- **Threshold-based Scoring**: Pass/fail based on 85% quality threshold
- **Static Analysis**: Code quality verification
- **Multiple Metrics**: Quality, coverage, and issue counts

### 6. Responsive UI
- **Mobile Support**: Adapts to small screens
- **Dark/Light Mode**: System preference or manual toggle
- **Accessible Components**: WCAG-compliant Radix UI primitives

## Development Workflow

### Setup and Installation
```bash
# Install dependencies
npm install --legacy-peer-deps
# or
pnpm install

# Run development server
npm run dev
# Access at http://localhost:3000

# Build for production
npm run build

# Start production server
npm run start

# Run linting
npm run lint
```

### File Modification Workflow
1. **Pages**: Add/modify pages in `app/` directory
2. **Components**: Create components in `components/`
3. **UI Primitives**: Use existing `components/ui/` components
4. **Data**: Update mock data in `lib/mock-data.ts`
5. **Styles**: Modify Tailwind config or `globals.css`

### Adding New Features
1. Define data models in `lib/mock-data.ts`
2. Create component in `components/`
3. Import and use in relevant page
4. Apply Tailwind styling
5. Test responsive behavior

### Code Organization Principles
- **Separation of Concerns**: Pages, components, utilities in separate directories
- **Component Reusability**: Small, focused components
- **Type Safety**: TypeScript interfaces for all data structures
- **Consistent Styling**: Tailwind utilities, no inline styles

## Code Patterns and Conventions

### TypeScript Patterns
```typescript
// Interface definitions
export interface ComponentProps {
  title: string
  value: number
  optional?: string
}

// Functional components with typed props
export function Component({ title, value }: ComponentProps) {
  return <div>{title}: {value}</div>
}

// Type-safe data filtering
const filtered = data.filter((item): item is ValidType => 
  item.property !== undefined
)
```

### React Patterns
```typescript
// Client components (when needed)
"use client"

// Async server components (default in App Router)
export default async function Page() {
  return <div>Content</div>
}

// Props destructuring
function Component({ prop1, prop2 }: Props) { ... }

// Conditional rendering
{condition && <Component />}
{value ? <A /> : <B />}
```

### Styling Patterns
```typescript
// Base + conditional classes
<div className={cn(
  "base-classes",
  {
    "conditional-class": condition,
    "bg-green-500": value > 90,
    "bg-yellow-500": value >= 75 && value < 90,
    "bg-red-500": value < 75,
  }
)} />

// Responsive design
<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

// Dark mode support
<div className="bg-background text-foreground">
```

### Quality Thresholds
The codebase uses consistent quality thresholds:
- **Coverage**: 90%+ (green), 75-90% (yellow), <75% (red)
- **Quality Score**: 85%+ (pass), <85% (fail)
- **Issue Severity**: Critical > High > Medium > Low

## Future Development

### Planned Enhancements
1. **Backend Integration**
   - GitHub API connection for real PR data
   - OpenAI/Anthropic API for actual AI analysis
   - Database for historical data persistence

2. **Authentication & Authorization**
   - User login/logout
   - OAuth with GitHub
   - Team-based access control

3. **Real-time Features**
   - WebSocket connections for live updates
   - Notifications for new PRs and comments
   - Collaborative review features

4. **Advanced Analytics**
   - Custom rule configuration
   - Team performance metrics
   - Historical trend analysis
   - Export capabilities

5. **CI/CD Integration**
   - Webhook support for automatic PR analysis
   - GitHub Actions integration
   - Status checks and PR blocking

### Extension Points
- **Custom AI Providers**: Abstraction layer for different AI services
- **Plugin System**: Support for custom analysis rules
- **Theme Customization**: Configurable color schemes
- **Export Formats**: PDF, CSV reports
- **API Layer**: RESTful API for programmatic access

---

## Summary

This codebase represents a well-structured, modern Next.js application demonstrating best practices in:
- **Component Architecture**: Modular, reusable components
- **Type Safety**: Comprehensive TypeScript usage
- **UI/UX**: Polished interface with accessibility
- **Code Organization**: Clear separation of concerns
- **Styling**: Utility-first CSS with theme support
- **Performance**: Server-side rendering, optimized builds

The application serves as a solid foundation for a production AI-powered code review platform, requiring only backend integration and real data sources to become fully functional.
