FROM node:12.14.1-alpine

RUN apk add --no-cache \
  nano \
  make \
  bash \
  bash-doc \
  bash-completion \
  py-pip \
  build-base

RUN apk add --no-cache su-exec git python3 && \
  addgroup bar && \
  adduser -D -h /home -s /bin/sh -G bar foo

RUN npm install webpack-cli -g

ADD entrypoint.sh /entrypoint

WORKDIR /srv
ENTRYPOINT ["/entrypoint"]
