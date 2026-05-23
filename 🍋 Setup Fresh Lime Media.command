#!/bin/bash
# Double-click this file in Finder to set up Fresh Lime Media
# It will open in Terminal and run automatically.

cd "$(dirname "$0")"
echo ""
echo "🍋 Fresh Lime Media — Project Setup"
echo "======================================"
echo "📍 Working in: $(pwd)"
echo ""

# Remove any stale git lock file
if [ -f .git/index.lock ]; then
  echo "🔓 Removing stale git lock file..."
  rm -f .git/index.lock
fi

# Stage and commit all files
echo "📦 Committing project files..."
git add -A
git commit -m "feat: bootstrap Fresh Lime Media — design system, layout shell, homepage hero"

echo ""
echo "🚀 Pushing to GitHub..."
git push origin main

echo ""
echo "📦 Installing npm dependencies..."
npm install

echo ""
echo "🔨 Running build check..."
npm run build

echo ""
echo "✅ All done!"
echo ""
echo "  GitHub:   https://github.com/ethanpeterson99/freshlime-media"
echo "  Dev:      npm run dev  →  http://localhost:3000"
echo ""
echo "Next steps:"
echo "  1. Fill in .env.local with real API keys"
echo "  2. Connect to Vercel: vercel --cwd ~/Documents/Claude/Projects/freshlime-media"
echo ""
read -p "Press Enter to close..."
