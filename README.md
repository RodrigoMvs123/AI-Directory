# AI Services Directory

A modern, minimalist web application serving as a comprehensive directory for AI coding agents, IDE extensions, and related services. Designed with a clean interface inspired by Claude, it features real-time search, category filtering, and dark mode support.

## The website is live at
- https://ai-directory-cxel.onrender.com/

## Features

- **Service Directory**: Curated list of AI tools categorized by type (CLI Agents, IDE Extensions, Web Apps, etc.).
- **Minimalist Design**: Clean aesthetics using Tailwind CSS with a focus on typography and whitespace.
- **Interactive Search**: Real-time filtering by name, description, and tags.
- **Category Navigation**: Easy-to-use tab system for filtering services.
- **Dark Mode**: Fully responsive dark/light mode toggle.
- **Responsive Layout**: optimized for mobile, tablet, and desktop viewports.

## Tech Stack

- **React 19**: Frontend framework.
- **TypeScript**: Type safety.
- **Vite**: Build tool and development server.
- **Tailwind CSS**: Utility-first styling.
- **Lucide React**: Iconography.

## Local Development Setup

To run this project locally, follow these steps:

### Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)

### Installation

1.  **Clone the repository** (or download the source code):
    ```bash
    git clone <repository-url>
    cd ai-services-directory
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Start the development server**:
    ```bash
    npm run dev
    ```

4.  **Open the application**:
    Open your browser and navigate to `http://localhost:5173` (or the port shown in your terminal).

### Building for Production

To create a production-ready build:

```bash
npm run build
```

This will generate static files in the `dist` directory, which can be deployed to any static site host (Vercel, Netlify, GitHub Pages, etc.).
