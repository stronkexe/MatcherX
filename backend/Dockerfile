FROM node:16

WORKDIR /app

COPY ./package*.json ./

RUN npm install bcrypt

RUN npm install

COPY . .

EXPOSE 8080

CMD ["npm", "start"]
