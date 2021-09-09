# hello

[zimekk.github.io/share](https://zimekk.github.io/share)

## settings

```sh
ssh-keygen -t rsa -b 4096 -C "" -f /tmp/ACTIONS_DEPLOY_KEY -N ""
pbcopy < /tmp/ACTIONS_DEPLOY_KEY.pub # Deploy keys - Add deploy key
pbcopy < /tmp/ACTIONS_DEPLOY_KEY # Secrets - New repository secret
```

## install

```sh
nvm install v12
npm i -g yarn
```

```sh
node -v # v12.19.0
yarn -v # 1.22.10
```

## run

```sh
yarn
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

## nginx

```sh
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
yarn husky add .husky/pre-commit "yarn pretty-quick --staged"
yarn husky add .husky/commit-msg "yarn commitlint --edit \$1"
```
