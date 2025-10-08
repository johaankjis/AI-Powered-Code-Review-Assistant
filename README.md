# AI-Powered Code Review Assistant

An automated code review platform powered by AI, designed to enhance code quality and streamline the review process for development teams.

## 🌟 Overview

AI-Powered Code Review Assistant is a modern DevOps tool that provides intelligent code analysis and review capabilities. Built with Next.js 15 and React 19, it offers a comprehensive dashboard for monitoring pull requests, tracking code quality metrics, and receiving AI-generated insights on potential issues.

## ✨ Features

### 📊 Dashboard
- **Real-time Metrics**: Monitor total pull requests, average review time, quality scores, and test coverage
- **Quality Trends**: Visual charts showing code quality and coverage trends over time
- **Issues Overview**: Categorized view of AI-detected issues (Critical, High, Medium, Low)
- **Recent Activity**: Quick access to the most recent pull requests and their status

### 🔍 Pull Request Management
- **Comprehensive PR List**: Browse all pull requests with status indicators (Pending, Approved, Changes Requested, Merged)
- **Search & Filter**: Find specific pull requests quickly with search functionality
- **Detailed Metrics**: View quality scores, test coverage, and file changes for each PR
- **Issue Tracking**: See AI-detected issues categorized by severity

### 🤖 AI-Powered Analysis
- **Smart Comments**: AI-generated comments on code changes with severity levels
- **Multiple Issue Types**: Detection of security vulnerabilities, performance issues, bugs, style problems, and improvement suggestions
- **Suggested Fixes**: AI-provided recommendations for resolving detected issues
- **Code Snippets**: Context-aware code examples highlighting specific concerns

### 📈 Code Quality Insights
- **Quality Scoring**: Automated quality assessment for each pull request
- **Test Coverage**: Detailed coverage metrics including lines and branches
- **File-level Analysis**: Individual file coverage breakdowns
- **Trend Analysis**: Historical data showing quality improvements over time

## 🛠️ Technology Stack

### Frontend
- **Framework**: Next.js 15.2.4 with App Router
- **UI Library**: React 19
- **Styling**: Tailwind CSS 4.1.9
- **Components**: Radix UI primitives
- **Icons**: Lucide React
- **Charts**: Recharts
- **Typography**: Geist Sans & Mono fonts

### Development
- **Language**: TypeScript 5
- **Package Manager**: npm (supports pnpm)
- **Build Tool**: Next.js build system
- **Linting**: ESLint (Next.js config)

## 📦 Installation

### Prerequisites
- Node.js 18+ installed
- npm or pnpm package manager

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/johaankjis/AI-Powered-Code-Review-Assistant.git
   cd AI-Powered-Code-Review-Assistant
   ```

2. **Install dependencies**
   ```bash
   npm install --legacy-peer-deps
   ```
   or with pnpm:
   ```bash
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🚀 Usage

### Development
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

### Project Structure
```
├── app/                    # Next.js app directory
│   ├── page.tsx           # Dashboard page
│   ├── layout.tsx         # Root layout
│   └── pull-requests/     # PR pages
│       ├── page.tsx       # PR list page
│       └── [number]/      # Individual PR detail
├── components/            # React components
│   ├── header.tsx         # Navigation header
│   ├── metric-card.tsx    # Metric display card
│   ├── quality-chart.tsx  # Quality trends chart
│   ├── recent-prs.tsx     # Recent PRs list
│   ├── issues-overview.tsx # Issues summary
│   ├── ai-comment-card.tsx # AI comment display
│   └── ui/                # Reusable UI components
├── lib/                   # Utilities and data
│   ├── mock-data.ts       # Sample data
│   └── utils.ts           # Helper functions
└── styles/                # Global styles
    └── globals.css        # Tailwind and custom CSS
```

## 🎨 Features in Detail

### Dashboard Metrics
- **Total Pull Requests**: Track all PRs with percentage change indicators
- **Average Review Time**: Monitor team efficiency
- **Quality Score**: Overall code quality across all PRs
- **Test Coverage**: Average test coverage percentage

### Pull Request Analysis
Each pull request includes:
- Status tracking (Pending, Approved, Changes Requested, Merged)
- File change statistics (additions/deletions)
- Quality score with visual indicators
- Test coverage metrics
- AI-generated comments and suggestions
- Issue categorization by severity

### Issue Severity Levels
- **Critical**: Requires immediate attention (security vulnerabilities, critical bugs)
- **High**: Should be fixed soon (performance issues, important bugs)
- **Medium**: Can be addressed later (code quality, minor bugs)
- **Low**: Minor improvements (style suggestions, optimizations)

### AI Comment Types
- **Security**: Security vulnerabilities and concerns
- **Performance**: Performance optimization opportunities
- **Bug**: Potential bugs and logic errors
- **Style**: Code style and formatting suggestions
- **Suggestion**: General improvement recommendations

## 🔧 Configuration

The project uses standard Next.js configuration with some customizations:

### next.config.mjs
- ESLint errors ignored during builds (development convenience)
- TypeScript errors ignored during builds (development convenience)
- Unoptimized images enabled

### TypeScript
- Strict mode enabled
- ES6 target
- Path aliases configured (@/* points to root)

## 🎯 Current Status

This is a frontend demonstration application with mock data. The interface showcases:
- Modern, responsive design with dark/light theme support
- Comprehensive PR review workflow
- AI-powered code analysis visualization
- Real-time metrics and trends

**Note**: This application currently uses mock data to demonstrate the UI and user experience. Integration with actual GitHub repositories and AI analysis backends would be needed for production use.

## 🚧 Future Enhancements

Potential areas for expansion:
- GitHub API integration for real PR data
- OpenAI/Anthropic integration for actual AI code analysis
- User authentication and authorization
- Real-time notifications
- Custom rule configuration
- Team collaboration features
- Historical data persistence
- Webhook support for automatic PR analysis

## 📄 License

This project is private and not yet licensed for public use.

## 🤝 Contributing

This is a private repository. For collaboration opportunities, please contact the repository owner.

## 👨‍💻 Author

Created by [johaankjis](https://github.com/johaankjis)

## 🔗 Links

- Repository: [johaankjis/AI-Powered-Code-Review-Assistant](https://github.com/johaankjis/AI-Powered-Code-Review-Assistant)
- Built with [v0.app](https://v0.app)

---

**Note**: This application demonstrates a modern approach to code review automation. The current implementation uses mock data to showcase the interface and user experience patterns that would be used with live data integration.
