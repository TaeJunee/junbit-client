FROM node:19-alpine3.16 as build

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

ARG API_URL

ENV REACT_APP_API_URL=${API_URL}

RUN npm run build



FROM fholzer/nginx-brotli:v1.12.2

WORKDIR /etc/nginx
COPY certificate.crt /etc/ssl
COPY private.key /etc/ssl
ADD nginx.conf /etc/nginx/nginx.conf

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 443

CMD ["nginx", "-g", "daemon off;"]