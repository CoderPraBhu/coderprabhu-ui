###########################
FROM node:22-alpine as build-stage
###########################
WORKDIR /app
ENV NODE_OPTIONS=--openssl-legacy-provider
COPY package*.json /app/
RUN npm install
COPY ./ /app/
###########################
RUN CI=true npm test
RUN npm run build
###########################
FROM nginx:alpine
COPY --from=build-stage /app/build/ /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
###########################
ENV PORT 8080
###########################