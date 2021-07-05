FROM node:alpine

WORKDIR /usr/app

COPY package.json ./

RUN npm install
COPY . .

EXPOSE 8004


# RUN npm run initial

CMD ["npm", "run", "dev"]

