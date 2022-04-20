FROM node:16

LABEL version="1.0"
LABEL description="This is the base docker image for Time Tracker frontend react app."
LABEL maintainer = ["shad3s.of.m3@gmail.com"]

WORKDIR /app

COPY ["package.json", "package-lock.json", "./"]

RUN npm install

COPY . .

EXPOSE 5001

CMD ["npm", "start"]
