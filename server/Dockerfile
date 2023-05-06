FROM node:16
MAINTAINER 1393649219@qq.com
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
CMD ["node", "server.js"]
# COPY ./base/back /usr/share/nginx/html