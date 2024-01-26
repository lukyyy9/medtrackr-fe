FROM node:16.19.0 as base
RUN apt-get update

ARG VITE_BE_HOST

COPY . /var/www
WORKDIR /var/www
RUN npm install
RUN npm run build

FROM nginx:1.23.1
RUN mkdir -p /usr/share/nginx/static
COPY --from=base /var/www/dist /usr/share/nginx/html
