FROM node

WORKDIR /urs/app

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 8001

CMD ["npm", "run", "dev"]