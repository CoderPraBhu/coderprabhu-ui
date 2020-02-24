FROM node:10 as build-stage

WORKDIR /app

COPY package*.json /app/

RUN npm install

COPY ./ /app/

RUN CI=true npm test

RUN npm run build


# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:1.15


COPY --from=build-stage /app/build/ /usr/share/nginx/html

# Copy the our nginx.conf
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

ENV PORT 8080