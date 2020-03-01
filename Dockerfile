###########################
FROM node:13 as build-stage
###########################
WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY ./ /app/
###########################
RUN CI=true npm test
RUN npm run build
###########################
FROM nginx:1.17
COPY --from=build-stage /app/build/ /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
###########################
ENV PORT 8080
###########################