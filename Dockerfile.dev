FROM node:14-alpine
# ENV NODE_ENV development
WORKDIR /frontend
COPY ./package.json /frontend
# COPY package-lock.json .
RUN npm install 
RUN npm install webpack-dev-server -g
COPY . .
EXPOSE 3000
CMD ["npm", "run", "start"]
