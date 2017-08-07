#!/bin/bash

# pentru consolă in container nou
# docker run -ti --rm -v $PWD:/app -w /app -p 3000:3000 -e NODE_ENV=development -e NODE_PATH=/node_modules --name lfwd-site savin/lfwd bash

docker run --rm -it -v $PWD:/app -w /app -p 3000:3000 -e NODE_ENV=development -e NODE_PATH=/node_modules --name lfwd-site savin/lfwd npm start
