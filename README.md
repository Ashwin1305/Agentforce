# Agent Workforce Platform

A modern, responsive web application for managing and discovering AI agents. Built with React, TypeScript, and Supabase.

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

### News & Updates
- 📰 Dedicated news section for platform updates
- ✍️ Rich content creation for news posts
- 📝 Structured news post editor with:
  - Title and content management
  - Image upload support
  - Team member tagging
  - Release date scheduling
  - Post categorization (Updates, Announcements, New Agents)
- 🔄 Chronological news feed
- ↩️ Easy navigation between news and main dashboard

### User Interface
- 🎨 Modern, responsive design with animations
- 🌓 Glass morphism effects and subtle transitions
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
- **Backend**: Supabase (Authentication & Database)

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
├── lib/                 # Utility functions and configurations
│   └── supabase.ts     # Supabase client configuration
├── types/               # TypeScript type definitions
│   └── index.ts        # Common types (Agent, NewsItem)
└── App.tsx             # Root component with routing
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Supabase account

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

3. Set up Supabase:
   - Create a new project in Supabase
   - Click "Connect to Supabase" button in the top right of the StackBlitz editor
   - Environment variables will be automatically added to your project

4. Start the development server:
   ```bash
   npm run dev
   ```

## Database Schema

### Agents Table
```sql
CREATE TABLE agents (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  image_url TEXT,
  category TEXT NOT NULL,
  subject TEXT NOT NULL,
  support_email TEXT NOT NULL,
  published_date TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  access_level TEXT NOT NULL CHECK (access_level IN ('all', 'team')),
  team_ids UUID[] DEFAULT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);
```

### News Table
```sql
CREATE TABLE news (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  author UUID REFERENCES auth.users(id),
  image_url TEXT,
  type TEXT NOT NULL CHECK (type IN ('agent_added', 'update', 'announcement')),
  published_date TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  team_members UUID[] DEFAULT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);
```

## Environment Variables

```env
VITE_SUPABASE_URL=your-supabase-project-url
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
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

- 🔐 Supabase Authentication integration
- 👥 Role-based access control
- 🛡️ Row Level Security (RLS) policies
- 🔒 Secure environment variable handling
- 📧 Email validation for support contacts

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

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

MIT