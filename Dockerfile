FROM node:18

ENV NODE_ENV=production

WORKDIR /app

COPY package*.json ./

RUN npm install 

COPY . .

EXPOSE 6000

CMD [ "npm", "dev" ]
