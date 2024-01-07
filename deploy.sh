#! /bin/bash

cd beme-front
git pull origin master
docker compose build
docker compose down
docker compose up -d