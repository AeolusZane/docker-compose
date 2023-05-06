# Procedure
1.前台打包，进入front目录
`yarn install && yarn build`

2.docker compose启动
`docker compose up`

# Access
本地网页访问 http://localhost

# Description
    服务端 
    - server: 会通过docker hub在我的仓库拉取部署

    前端
    - front: 前端打包（打包出dist）后通过nginx容器部署，映射到外部dist

    nginx代理
    - 解决前后端跨域问题，通过nginx容器做个反向代理，让前端可以在docker内访问服务端# docker-compose
