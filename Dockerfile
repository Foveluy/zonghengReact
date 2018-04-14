FROM node:8.9.3
RUN apt-get update  && apt-get install -y nginx
WORKDIR /app
COPY . /app/
EXPOSE 80
RUN npm install sass-loader node-sass webpack --save-dev
RUN  npm install      && npm run build     && cp -r build/* /var/www/html     && rm -rf /app
CMD ["nginx","-g","daemon off;"]