#!/bin/bash

export NODE_ENV=production

node ./node_modules/webpack/bin/webpack.js
SERVER=1 node ./node_modules/webpack/bin/webpack.js

mkdir learnfwd-com
cp -a server-dist learnfwd-com
cp -a dist learnfwd-com
cp -a public/. learnfwd-com/dist
cp package.json learnfwd-com

tar cvfz learnfwd-com.tar.gz learnfwd-com/*
rm -rf learnfwd-com/
