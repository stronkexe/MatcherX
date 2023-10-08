FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npm i vite

COPY . .

EXPOSE 5173

RUN npm run build

CMD [ "npm", "run", "dev" ]