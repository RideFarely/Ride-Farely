# 1. Build stage
FROM node:18-alpine AS builder

WORKDIR /app

# Install deps
COPY package*.json ./
RUN npm install --legacy-peer-deps

# Install TypeScript so next.config.ts can be compiled
RUN npm install typescript --save-dev --legacy-peer-deps

# Copy source code
COPY . .

# Precompile next.config.ts to JS (output next.config.js in root)
RUN npx tsc next.config.ts --esModuleInterop --module commonjs --target es2020 --outDir . \
    && ls -l /app/next.config.js

# Build Next.js app
RUN npm run build

# 2. Runner stage
FROM node:18-alpine AS runner
WORKDIR /app

# Copy only production deps
COPY package*.json ./
RUN npm install --production --legacy-peer-deps

# Copy compiled app
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/next.config.js ./next.config.js
COPY --from=builder /app/tsconfig.json ./tsconfig.json

EXPOSE 3000
CMD ["npm", "start"]
