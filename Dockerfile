FROM node:18

ENV NODE_ENV=production

WORKDIR /app

COPY package*.json ./

RUN npm install 

COPY . .

EXPOSE 5000

CMD [ "nodemon -e ts,json app.ts" ]
