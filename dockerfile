FROM node:19 as base_stage
FROM base_stage as development
WORKDIR /app
COPY package.json  .
#NODEJS DEP
RUN npm install
#RUN npm install express twilio
#RUN npm install -g nodemon
COPY . .
EXPOSE 4000
CMD [ "npm","run","start-dev" ]
FROM base_stage as production
