FROM node:15.4 as build 

WORKDIR /react-app

COPY ./app/package*.json .

RUN npm install

COPY ./app .

RUN npm run build

FROM nginx:1.19

COPY ./docker/nginx.conf /etc/nginx/nginx.conf

COPY --from=build /react-app/build /usr/share/nginx/html