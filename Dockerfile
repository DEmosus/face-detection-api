FROM node:22-alpine3.19

RUN mkdir -p /usr/src/face-detection-app-api

WORKDIR /usr/src/face-detection-app-api

COPY ./ ./

RUN npm install

RUN apk update && apk add bash



CMD [ "/bin/bash" ]