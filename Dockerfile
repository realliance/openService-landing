FROM node:carbon as builder

RUN npm install --global gatsby-cli

RUN mkdir -p /app

WORKDIR /app

ADD . .

RUN npm install && gatsby build

FROM nginx:mainline-alpine

COPY --from=builder /app/public/* /usr/share/nginx/html/

RUN chmod -R 744 /usr/share/nginx/html/*