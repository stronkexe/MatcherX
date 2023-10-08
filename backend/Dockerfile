FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npm i express

COPY . .

EXPOSE 8000

# RUN npm run build
# RUN node index.js
# RUN npm rebuild bcrypt --update-binary

# ENTRYPOINT [ "sh", "script_helper.sh" ]

CMD [ "node", "index.js"]
