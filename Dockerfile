###########################
FROM node:25-alpine AS build-stage
###########################
WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY ./ /app/
###########################
RUN npm test
RUN npm run build
###########################
FROM nginx:alpine
COPY --from=build-stage /app/build/ /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
###########################
ENV PORT=8080
###########################
