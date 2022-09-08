FROM node:14.17-alpine

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install 

COPY . .

# This app run in port 3000 so use EXPOSE 3000

EXPOSE 3000

RUN yarn build

CMD yarn start