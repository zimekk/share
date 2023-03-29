[![Deployment](https://github.com/zimekk/share/actions/workflows/deploy.yml/badge.svg?branch=main)](https://github.com/zimekk/share/actions/workflows/deploy.yml)

# share

[zimekk.github.io/share](https://zimekk.github.io/share)

## todo

- [ ] handle websocket connection error
      https://github.com/apollographql/subscriptions-transport-ws/issues/506
- [ ] authentication and authorization
      https://www.apollographql.com/docs/apollo-server/security/authentication/
- [ ] switch to apollo-server-express
      https://dev.to/dsckiitdev/build-a-chat-app-with-graphql-subscriptions-typescript-part-2-3k35

## settings

```sh
ssh-keygen -t rsa -b 4096 -C "" -f /tmp/ACTIONS_DEPLOY_KEY -N ""
pbcopy < /tmp/ACTIONS_DEPLOY_KEY.pub # Deploy keys - Add deploy key
pbcopy < /tmp/ACTIONS_DEPLOY_KEY # Secrets - New repository secret
```

## install

```sh
nvm install v16
npm i -g yarn
```

```sh
node -v # v16.19.1
yarn -v # 1.22.17
```

## run

```sh
yarn # ✨  Done in 1.14s.
yarn start # ⚡️[server]: Server is running at http://localhost:8080
```

```sh
curl http://localhost:8080 # <!DOCTYPE html>
```

## docker

```sh
docker-compose config # services:
docker-compose up --build # app_1  | ⚡️[server]: Server is running at http://localhost:8080
```

```sh
curl http://localhost:8080 # <!DOCTYPE html>
```

```sh
docker-compose -f docker-compose.prod.yml pull
docker-compose -f docker-compose.prod.yml up -d
docker-compose logs
docker-compose restart
docker-compose stop
docker system prune
```

```sh
docker-compose -f docker-compose.prod.yml pull && docker-compose -f docker-compose.prod.yml up -d && docker system prune
```

## podman

```sh
brew install podman
podman machine init
podman machine start
```

## podman-compose

```sh
pip3 install podman-compose
```

## redis

```sh
podman pull docker.io/redis
podman images
podman run -d \
  --name redis_server \
  -v $PWD/redis-data:/var/redis/data  \
  -p 6379:6379 \
  redis
```

```sh
podman-compose -f packages/schedule/docker-compose.yml up -d
```

```sh
podman-compose -f packages/schedule/docker-compose.yml start
```

## nginx

[www.nginx.com/blog/websocket-nginx](https://www.nginx.com/blog/websocket-nginx)

```nginx
server {
  listen 443;
  server_name  ...;

  location /share/ {
    include /etc/nginx/proxy_params;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "upgrade";
    proxy_http_version 1.1;

    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_pass http://share_app:8080/;
  }
}
```

## hooks

```sh
yarn husky install
yarn husky add .husky/pre-commit "yarn pretty-quick --staged"
yarn husky add .husky/commit-msg "yarn commitlint --edit \$1"
```

## graphdoc

[zimekk.github.io/share/schema](https://zimekk.github.io/share/schema)

## graphiQL

[localhost:8080/graphql](http://localhost:8080/graphql)

```graphql
query {
  hello
}
```

```graphql
mutation ($message: MessageInput) {
  sendMessage(message: $message)
}
```

```json
{
  "message": {
    "uuid": "uuid",
    "text": "text"
  }
}
```
