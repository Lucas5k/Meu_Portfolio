FROM node:16.14-alpine

WORKDIR /app-backend

COPY package* ./

RUN npm install

COPY . .

EXPOSE 3005

CMD ["npm", "run", "dev"]