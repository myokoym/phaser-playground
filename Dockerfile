FROM node:18 AS builder
COPY . /workspace/
WORKDIR /workspace
RUN npm install
RUN npm run build

FROM nginx:latest
COPY --from=builder /workspace/dist /var/www
COPY ./docker/nginx.conf /etc/nginx/conf.d/default.conf
