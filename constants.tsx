import { Service, CategoryType } from './types';
import { 
  Terminal, 
  Code2, 
  Globe, 
  Cpu, 
  Monitor, 
  ShieldCheck, 
  MessageSquare, 
  Sparkles, 
  Building2 
} from 'lucide-react';

export const CATEGORIES: { id: CategoryType; label: string; icon: any }[] = [
  { id: 'All', label: 'All Services', icon: Globe },
  { id: 'CLI Agent', label: 'CLI Agents', icon: Terminal },
  { id: 'IDE Extension', label: 'IDE Extensions', icon: Code2 },
  { id: 'Web App', label: 'Web Apps', icon: Globe },
  { id: 'Desktop App', label: 'Desktop Apps', icon: Monitor },
  { id: 'API Service', label: 'API Services', icon: Cpu },
  { id: 'Code Review', label: 'Code Review', icon: ShieldCheck },
  { id: 'AI Chat', label: 'AI Chat', icon: MessageSquare },
  { id: 'Creative', label: 'Creative', icon: Sparkles },
  { id: 'Enterprise', label: 'Enterprise', icon: Building2 },
];

export const SERVICES: Service[] = [
  // CLI Agents
  {
    id: "claude-code-cli",
    name: "Claude Code CLI Agent",
    categories: ["CLI Agent"],
    url: "https://docs.anthropic.com/en/docs/claude-code/overview",
    description: "Professional CLI agent with MCP tools and code diffing capabilities directly in your terminal.",
    features: ["MCP tool integration", "Smart code diffing", "Autonomous execution"],
    installation: { command: "npm install -g @anthropic-ai/claude-code" },
    pricing: { type: "Paid", details: "Requires Claude Pro/Team" },
    tags: ["anthropic", "terminal", "agent"]
  },
  {
    id: "openai-cli-codex",
    name: "OpenAI CLI Agent (Codex)",
    categories: ["CLI Agent"],
    url: "https://openai.com/index/introducing-chatgpt-agent/",
    description: "ChatGPT's official command-line coding agent optimized for quick scripting and refactoring.",
    installation: { command: "npm i -g @openai/codex" },
    pricing: { type: "Paid", details: "Included in ChatGPT Plus/Pro" },
    tags: ["openai", "codex", "cli"]
  },
  {
    id: "gemini-cli",
    name: "Google Gemini CLI Agent",
    categories: ["CLI Agent"],
    url: "https://github.com/google-gemini/gemini-cli",
    description: "Google's CLI agent leveraging the 1M+ token context window for massive codebase understanding.",
    features: ["1M token context", "Multi-file analysis", "Fast reasoning"],
    installation: { command: "npm install -g @google/gemini-cli" },
    pricing: { type: "Free", details: "Free tier available" },
    tags: ["google", "gemini", "cli"]
  },
  {
    id: "gh-copilot-cli",
    name: "GitHub Copilot CLI",
    categories: ["CLI Agent"],
    url: "https://github.com/github/gh-copilot",
    description: "GitHub's AI pair programmer brought to the command line to explain shell commands.",
    installation: { command: "npm install -g @github/copilot" },
    pricing: { type: "Paid", details: "Part of Copilot sub" },
    tags: ["github", "copilot", "cli"]
  },
  {
    id: "aider",
    name: "Aider",
    categories: ["CLI Agent"],
    url: "https://aider.chat",
    description: "A popular command-line tool that lets you pair program with LLMs to edit code in your local git repo.",
    features: ["Git integration", "Repo map", "Multi-file edits"],
    installation: { command: "pip install aider-chat" },
    pricing: { type: "Free", details: "Bring your own key" },
    tags: ["python", "open-source", "cli"]
  },
  {
    id: "goose",
    name: "Goose",
    categories: ["CLI Agent"],
    url: "https://block.github.io/goose/",
    description: "Open-source AI agent from Block designed to automate engineering tasks with MCP.",
    installation: { command: "curl -fsSL https://github.com/block/goose/releases/download/stable/download_cli.sh | bash" },
    pricing: { type: "Free", details: "Open Source" },
    tags: ["block", "automation", "cli"]
  },
  {
    id: "jules",
    name: "Jules",
    categories: ["CLI Agent", "Specialized"],
    url: "https://jules.google",
    description: "Google's experimental AI agent focused on complex workflow automation.",
    installation: { command: "npm install -g @google/jules" },
    pricing: { type: "TBA", details: "Experimental/Beta" },
    tags: ["google", "experimental"]
  },

  // IDE Extensions & Desktop
  {
    id: "cursor",
    name: "Cursor",
    categories: ["Desktop App", "IDE Extension"],
    url: "https://cursor.com",
    description: "An AI-first IDE forked from VS Code that deeply integrates AI into the editing experience.",
    features: ["Tab auto-complete", "Chat with codebase", "Composer mode"],
    pricing: { type: "Freemium", details: "Free / $20/mo Pro" },
    tags: ["ide", "vscode-fork", "popular"]
  },
  {
    id: "windsurf",
    name: "Windsurf",
    categories: ["Desktop App", "IDE Extension"],
    url: "https://codeium.com/windsurf",
    description: "The first agentic IDE by Codeium, featuring 'Cascade' flow for seamless agent collaboration.",
    features: ["Cascade flow", "Deep context", "Codeium engine"],
    pricing: { type: "Freemium", details: "Free tier available" },
    tags: ["codeium", "ide", "agentic"]
  },
  {
    id: "amazon-q-vscode",
    name: "Amazon Q Developer",
    categories: ["IDE Extension"],
    url: "https://marketplace.visualstudio.com/items?itemName=AmazonWebServices.amazon-q-vscode",
    description: "Generative AI assistant for VS Code with agent mode for autonomous task execution.",
    features: ["/dev command", "Java upgrade agent", "AWS integration"],
    pricing: { type: "Freemium", details: "Free / $19/user/mo" },
    tags: ["aws", "vscode", "enterprise"]
  },
  {
    id: "gemini-code-assist",
    name: "Gemini Code Assist",
    categories: ["IDE Extension"],
    url: "https://marketplace.visualstudio.com/items?itemName=Google.geminicodeassist",
    description: "Google's enterprise-grade AI assistant for VS Code powered by Gemini 1.5 Pro.",
    pricing: { type: "Freemium", details: "Free / $19/user/mo" },
    tags: ["google", "vscode", "gemini"]
  },
  {
    id: "kiro",
    name: "Kiro",
    categories: ["Desktop App", "IDE Extension"],
    url: "https://kiro.dev",
    description: "Spec-driven agentic IDE that turns requirements into design and tasks autonomously.",
    features: ["Spec mode", "Automated hooks", "Plan & execute"],
    pricing: { type: "Freemium", details: "Free in preview / $20/mo" },
    tags: ["ide", "spec-driven", "agent"]
  },
  {
    id: "google-antigravity",
    name: "Google Antigravity",
    categories: ["Desktop App"],
    url: "https://antigravity.google",
    description: "Agent-first development platform with multi-agent orchestration and a built-in browser.",
    features: ["Mission Control", "Multi-agent", "Built-in browser"],
    pricing: { type: "Free", details: "Free during preview" },
    tags: ["google", "future", "platform"]
  },
  {
    id: "cline",
    name: "Cline",
    categories: ["IDE Extension"],
    url: "https://cline.bot",
    description: "Autonomous coding agent for VS Code that can edit files, run commands, and use the browser.",
    features: ["Plan/Act modes", "Browser use", "CLI execution"],
    installation: { command: "VS Code Marketplace" },
    pricing: { type: "Free", details: "Open Source" },
    tags: ["open-source", "autonomous"]
  },
  {
    id: "continue",
    name: "Continue",
    categories: ["IDE Extension"],
    url: "https://continue.dev",
    description: "The leading open-source AI code assistant for VS Code and JetBrains.",
    features: ["RAG", "Model agnostic", "Custom context providers"],
    pricing: { type: "Free", details: "Open Source" },
    tags: ["open-source", "local-llm"]
  },
  {
    id: "augment-code",
    name: "Augment Code",
    categories: ["IDE Extension"],
    url: "https://www.augmentcode.com",
    description: "AI coding assistant designed for instant understanding of large enterprise codebases.",
    pricing: { type: "Contact", details: "Waitlist / Enterprise" },
    tags: ["enterprise", "fast"]
  },

  // Web Apps
  {
    id: "replit-agent",
    name: "Replit Agent",
    categories: ["Web App"],
    url: "https://replit.com",
    description: "Natural language to full-stack app builder integrated into the Replit browser IDE.",
    features: ["Instant deployment", "Database setup", "Auth integration"],
    pricing: { type: "Freemium", details: "Subscription required" },
    tags: ["browser-ide", "beginner-friendly"]
  },
  {
    id: "bolt-new",
    name: "Bolt.new",
    categories: ["Web App"],
    url: "https://bolt.new",
    description: "StackBlitz's tool for instant full-stack AI development in the browser.",
    pricing: { type: "Free", details: "Free tier available" },
    tags: ["web-container", "stackblitz"]
  },
  {
    id: "lovable",
    name: "Lovable",
    categories: ["Web App"],
    url: "https://lovable.dev",
    description: "AI-powered web application builder focused on beautiful UI and functional backends.",
    pricing: { type: "Paid", details: "Subscription based" },
    tags: ["no-code", "low-code", "ui"]
  },
  {
    id: "v0-dev",
    name: "v0",
    categories: ["Web App"],
    url: "https://v0.dev",
    description: "Generative UI system by Vercel that creates copy-paste friendly React/Tailwind code.",
    pricing: { type: "Freemium", details: "Free / Paid" },
    tags: ["vercel", "ui-gen"]
  },
  {
    id: "chatgpt",
    name: "ChatGPT",
    categories: ["Web App", "AI Chat"],
    url: "https://chat.openai.com",
    description: "The industry standard for conversational AI, now with advanced coding and reasoning (o1).",
    pricing: { type: "Freemium", details: "Free / $20/mo" },
    tags: ["openai", "llm"]
  },
  {
    id: "claude-web",
    name: "Claude",
    categories: ["Web App", "AI Chat"],
    url: "https://claude.ai",
    description: "Anthropic's assistant with 'Artifacts' for previewing code and content side-by-side.",
    pricing: { type: "Freemium", details: "Free / $20/mo" },
    tags: ["anthropic", "artifacts"]
  },
  {
    id: "perplexity",
    name: "Perplexity",
    categories: ["Web App"],
    url: "https://www.perplexity.ai",
    description: "AI-powered research assistant that searches the web to answer technical queries.",
    pricing: { type: "Freemium", details: "Free / $20/mo" },
    tags: ["search", "research"]
  },
  {
    id: "deepseek",
    name: "DeepSeek",
    categories: ["Web App", "AI Chat"],
    url: "https://chat.deepseek.com",
    description: "Advanced AI model (DeepSeek-V3.1) offering high performance in reasoning, math, and coding.",
    pricing: { type: "Freemium", details: "Free tier available" },
    tags: ["deepseek", "llm", "coding"]
  },

  // Code Review & Specialized
  {
    id: "qodo",
    name: "Qodo (Codium)",
    categories: ["Code Review", "IDE Extension"],
    url: "https://www.qodo.ai",
    description: "Quality-first AI platform for code integrity, automated testing, and PR reviews.",
    pricing: { type: "Freemium", details: "Free / Teams" },
    tags: ["testing", "quality"]
  },
  {
    id: "devin",
    name: "Devin AI",
    categories: ["Specialized"],
    url: "https://devin.ai",
    description: "The first fully autonomous AI software engineer capable of end-to-end project execution.",
    pricing: { type: "Paid", details: "$500/month" },
    tags: ["autonomous", "agent"]
  },
  
  // API & Enterprise
  {
    id: "openrouter",
    name: "OpenRouter",
    categories: ["API Service"],
    url: "https://openrouter.ai",
    description: "A unified interface to access and compare the best open and closed source AI models.",
    pricing: { type: "Paid", details: "Pay-per-use" },
    tags: ["aggregator", "api"]
  },
  {
    id: "ollama",
    name: "Ollama",
    categories: ["CLI Agent", "API Service"],
    url: "https://ollama.com",
    description: "Run Llama 3, Mistral, Gemma, and other large language models locally.",
    installation: { command: "curl -fsSL https://ollama.com/install.sh | sh" },
    pricing: { type: "Free", details: "Free (Local)" },
    tags: ["local", "privacy"]
  },
  {
    id: "mistral",
    name: "Mistral",
    categories: ["API Service", "Web App"],
    url: "https://console.mistral.ai",
    description: "French AI lab offering open weights models and a platform for custom agents.",
    pricing: { type: "Paid", details: "Usage based" },
    tags: ["open-weights", "europe"]
  },
  
  // Creative
  {
    id: "heygen",
    name: "HeyGen",
    categories: ["Creative"],
    url: "https://app.heygen.com",
    description: "AI video generation platform for creating professional avatars and videos.",
    pricing: { type: "Paid", details: "Subscription" },
    tags: ["video", "avatar"]
  },
  {
    id: "elevenlabs",
    name: "ElevenLabs",
    categories: ["Creative"],
    url: "https://elevenlabs.io",
    description: "The leading AI voice synthesis and text-to-speech platform.",
    pricing: { type: "Freemium", details: "Free / Paid" },
    tags: ["voice", "audio"]
  },
  
  // Misc/New
  {
    id: "warp",
    name: "Warp",
    categories: ["Desktop App"],
    url: "https://www.warp.dev",
    description: "A modern, Rust-based terminal with integrated AI search and command assistance.",
    pricing: { type: "Freemium", details: "Free / Pro" },
    tags: ["terminal", "rust"]
  },
  {
    id: "trae",
    name: "Trae",
    categories: ["Enterprise"],
    url: "https://www.trae.ai",
    description: "Enterprise AI agent platform for secure workforce automation.",
    pricing: { type: "Contact", details: "Enterprise" },
    tags: ["automation", "corporate"]
  }
];