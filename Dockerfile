# The builder from node image
FROM node:12.14.0 as builder

# build-time variables 
# prod|sandbox its value will be come from outside 
ARG env=prod

#RUN apk update && apk add --no-cache make git

# Move our files into directory name "app"
WORKDIR /app
COPY package.json  /app/
RUN npm install @angular/cli -g
RUN cd /app && npm install
COPY .  /app

# Build with $env variable from outside
#RUN cd /app && npm run build:$env
RUN cd /app && ng build --prod --output-path=dist
#CMD ng build --prod --output-path=dist


# Build a small nginx image with static website
FROM nginx:1.17.7
RUN rm -rf /usr/share/nginx/html/*
COPY nginx/default.conf /etc/nginx/nginx.conf
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]	




## base image
#FROM node:12.14.0 as builder
#
## install chrome for protractor tests
##RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -
##RUN sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list'
##RUN apt-get update && apt-get install -yq google-chrome-stable#
#
## set working directory
#WORKDIR /app#
#
## add `/app/node_modules/.bin` to $PATH
#ENV PATH /app/node_modules/.bin:$PATH
#
## install and cache app dependencies
#COPY package.json /app/package.json
#RUN npm install
#
## add app
#COPY . /app
#
## start app
##CMD ng serve --host 0.0.0.0 --port 80
##CMD ng serve --host 0.0.0.0 --prod=true --port 80
#CMD ng build --prod --output-path=dist
#
#FROM nginx:1.17.7
#COPY nginx/default.conf /etc/nginx/conf.d/
#RUN rm -rf /usr/share/nginx/html/*

#COPY --from=builder /app/dist /usr/share/nginx/html
#CMD ["nginx", "-g", "daemon off;"]
