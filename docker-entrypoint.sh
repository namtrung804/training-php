#!/bin/sh
# Pull Git
echo -e "\e[1;32mPull Git\e[0m"
docker-compose -f docker-compose.yml -f docker-compose.prod.yml stop
git checkout .
git pull origin master
# window run : bash -c "~/docker-entrypoint.sh"
# Run docker
echo -e "\e[1;32mPermision folder\e[0m"
mkdir -p public/uploads
chmod -R a+w public/
chmod -R a+w docker-config/
chmod -R a+w vendor/
chmod -R a+w storage/
echo -e "\e[1;32mRun Docker\e[0m"
docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d
echo -e "\e[1;32mDone\e[0m"
