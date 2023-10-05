FROM node:18-alpine
RUN mkdir /webapp
COPY . /webapp

COPY package.json /webapp/package.json
RUN cd /webapp; npm install

COPY . /webapp

EXPOSE 3000

WORKDIR /webapp
