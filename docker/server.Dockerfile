FROM node:15.4 as build 

WORKDIR /react-app

COPY ./server/package*.json .

RUN npm install

COPY ./server .

# ENTRYPOINT ["tail", "-f", "/dev/null"]

ENTRYPOINT [ "node", "src/index.js" ]

# FROM nginx:1.19

# COPY ./docker/nginx.conf /etc/nginx/nginx.conf

# COPY --from=build /react-app/build /usr/share/nginx/html