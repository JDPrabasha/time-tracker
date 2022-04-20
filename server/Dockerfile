FROM node:16

LABEL version="1.0"
LABEL description="This is the base docker image for the Time Tracker backend API."
LABEL maintainer = ["shad3s.of.m3@gmail.com"]

WORKDIR /app

COPY ["package.json", "package-lock.json", "./"]
RUN ls
RUN npm install 
COPY . .

EXPOSE 3000

CMD ["node", "server"]

