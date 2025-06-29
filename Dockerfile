# 1. Use Node.js base image
FROM node:18-alpine

# 2. Set the working directory
WORKDIR /app

# 3. Copy package files and install deps
COPY package*.json ./
RUN npm install

# 4. Copy the rest of the app
COPY . .

# 5. Build the Next.js app
RUN npm run build

# 6. Install PM2 globally
RUN npm install -g pm2

# 7. Expose the default Next.js port
EXPOSE 3000

# 8. Start using pm2-runtime
CMD ["pm2-runtime", "start", "npm", "--name", "hashemform", "--", "start"]

