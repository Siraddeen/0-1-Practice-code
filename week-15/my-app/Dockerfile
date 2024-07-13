FROM node:20-alpine

WORKDIR  /myapp

COPY package* .

RUN npm install

COPY . .

CMD ["npm","run","dev"]
