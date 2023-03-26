FROM node:19-alpine3.16 as build

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

FROM fholzer/nginx-brotli:v1.12.2

WORKDIR /etc/nginx

ADD nginx.conf /etc/nginx/nginx.conf

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE $PORT

CMD ["nginx", "-g", "daemon off;"]