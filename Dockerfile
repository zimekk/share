FROM node:14-alpine

ENV WORKDIR /app
WORKDIR $WORKDIR

COPY package.json tsconfig.json yarn.lock ./
COPY packages/ packages/
RUN yarn && yarn build

ENV PORT 8080
EXPOSE $PORT
CMD ["yarn", "serve"]
