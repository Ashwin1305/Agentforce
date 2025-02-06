# Agenforce 

A modern, responsive web application for managing and discovering agents.

## Features

### Agent Management
- 🤖 Comprehensive AI agent catalog with detailed information
- 🔍 Advanced search functionality with real-time filtering
- 🏷️ Category-based filtering system
- 📊 Detailed agent cards displaying:
  - Agent name and category
  - Subject area and description
  - Support contact information
  - Publication date
  - Access level (All/Team specific)
  - Visual indicators for different agent types

### User Interface
- 🎨 Modern, responsive design with animations
- 📱 Mobile-friendly layout
- 🔍 Intuitive search and filter interface
- 🎯 Clear visual hierarchy and information organization

## Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS for responsive design
- **Icons**: Lucide React for consistent iconography
- **Routing**: React Router for navigation
- **State Management**: React Hooks
- **Notifications**: Sonner for toast notifications
- **Build Tool**: Vite for fast development


## Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── AgentCard.tsx    # Individual agent display card
│   ├── AgentGrid.tsx    # Grid layout for agents
│   ├── AuthForm.tsx     # Authentication form
│   └── Navbar.tsx       # Navigation bar
├── pages/               # Page components
│   ├── Dashboard.tsx    # Main dashboard with agent listing
│   └── News.tsx         # News and updates page
├── types/               # TypeScript type definitions
│   └── index.ts        # Common types (Agent, NewsItem)
└── App.tsx             # Root component with routing
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn


### Local Development

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd ai-agent-workspace
   ```

2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```


## Development Guidelines

1. **TypeScript**: Use strict typing for all components and functions
2. **Components**: Create reusable, single-responsibility components
3. **Styling**: Use Tailwind CSS classes with consistent naming
4. **State Management**: Utilize React hooks for local state
5. **Error Handling**: Implement proper error boundaries and user feedback
6. **Accessibility**: Follow WCAG guidelines for better accessibility
7. **Performance**: Optimize component rendering and implement proper memoization
8. **Testing**: Write unit tests for critical functionality

## Security Features

- 👥 Role-based access control
- 🛡️ Row Level Security (RLS) policies
- 🔒 Secure environment variable handling

## Build & Deployment

1. Create production build:
   ```bash
   npm run build
   ```

2. Preview the build:
   ```bash
   npm run preview
   ```

3. Deploy to your preferred hosting platform
