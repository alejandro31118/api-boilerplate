FROM node:18-alpine
WORKDIR /app

ARG PORT

COPY . .

RUN npm install

EXPOSE ${PORT}

CMD ["npm", "run", "dev"]
