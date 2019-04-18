FROM node:8-alpine as node-build

WORKDIR /usr/src

COPY app .

RUN npm install --unsafe-perm
RUN npm run build

FROM nginx
WORKDIR /usr/share/nginx/html
COPY --from=node-build /usr/src/dist .
