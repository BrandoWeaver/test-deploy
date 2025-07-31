# Stage 1: Build the application
FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN rm -rf package-lock.json node_modules
RUN npm install

COPY . .

COPY .env.prod .env

RUN npm run build

# Stage 2: Production stage
FROM node:20-alpine AS prod

WORKDIR /app

COPY --from=build /app/.output /app/.output

CMD ["node", ".output/server/index.mjs"]