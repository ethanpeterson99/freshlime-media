#!/bin/bash
# Fresh Lime Media — One-time setup
# Run from: ~/Documents/Claude/Projects/freshlime-media
set -e

echo "🍋 Fresh Lime Media — Project Setup"
echo "====================================="

echo ""
echo "📦 Installing npm dependencies..."
npm install

echo ""
echo "🔨 Verifying build..."
npm run build

echo ""
echo "🚀 Pushing to GitHub..."
git add -A
git commit -m "feat: bootstrap Fresh Lime Media — design system, layout shell, homepage hero"
git push origin main

echo ""
echo "✅ Done! Repo: https://github.com/ethanpeterson99/freshlime-media"
echo ""
echo "Next steps:"
echo "  1. Fill in .env.local with real API keys"
echo "  2. npm run dev  → localhost:3000"
echo "  3. Connect to Vercel for deploys"
