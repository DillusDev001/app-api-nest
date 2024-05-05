# Build Layer
FROM node:18.17.1 as development

COPY tsconfig*.json ./
COPY package*.json ./
COPY nest-cli*.json ./

RUN npm ci

COPY src/ src/

RUN npm run build

# Expose application port
EXPOSE 3000

# Start application
CMD [ "node", "dist/main.js" ]