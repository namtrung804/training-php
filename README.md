## Setup 
- tạo file .env từ .env.example .Edit thông tin

#### Local
- run `docker-compose up`
- run migration db
    + `docker-compose -f docker-compose.yml run --rm php php migration run`
    
#### Production
- run `docker stack deploy --compose-file docker-production-compose.yml prod `
- run migration db
    + `docker-compose -f docker-production-compose.yml run --rm php php migration run`
    
## Option
- `docker exec -it phpdocker_php_1 bash`
- `docker-compose -f docker-compose.yml run --rm php mkdir -p public/uploads`
- `docker-compose -f docker-compose.yml run --rm php chmod -R a+w public/`
- `docker-compose -f docker-compose.yml run --rm php chmod -R a+w vendor/`
    
### Gulp && gulp watch
- `docker-compose -f docker-compose.yml run --rm nodejs yarn `
- `docker-compose -f docker-compose.yml run --rm nodejs gulp` 
- `docker-compose -f docker-compose.yml run --rm nodejs gulp watch`
    
### Bower
- `docker-compose -f docker-compose.yml run --rm nodejs bower install PACKAGE --save --allow-root` 
- `docker-compose -f docker-compose.yml run --rm nodejs bower update --allow-root` 
    
### Composer
- `docker-compose -f docker-compose.yml run --rm composer composer update`

    
## clear cache pagespeed
- `touch /var/ngx_pagespeed_cache/cache.flush`

## Get error docker swarm deploy
- `docker logs $(docker inspect --format "{{.Status.ContainerStatus.ContainerID}}" <task_id>)`
- ``docker service logs <service_name_or_id>``
- ``docker service inspect <service_name_or_id>``
    
## Log view
- `http://domain/log-viewer` library `arcanedev/log-viewer`
