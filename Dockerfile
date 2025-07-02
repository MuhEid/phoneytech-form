FROM node:18-alpine

# Accept build-time arg
ARG NEXT_PUBLIC_EMAIL_RECEIVER
ENV NEXT_PUBLIC_EMAIL_RECEIVER=$NEXT_PUBLIC_EMAIL_RECEIVER

WORKDIR /app

# Install deps
COPY package*.json ./
RUN npm install

# Copy all code
COPY . .

# Inject env
RUN printf "\nNEXT_PUBLIC_EMAIL_RECEIVER=%s\n" "$NEXT_PUBLIC_EMAIL_RECEIVER" >> .env.local

# Build the app
RUN npm run build

# Move static files to standalone dir
RUN cp -r .next/static .next/standalone/.next/static

# Install PM2
RUN npm install -g pm2

# Expose Next.js port
EXPOSE 3000

# Run using the built server
CMD ["pm2-runtime", "start", "node", "--name", "hashemform", "--", ".next/standalone/server.js"]
