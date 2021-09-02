# Docker Image which is used as founder to create a custom Docker Image with this Docker file
FROM node:10
# FROM node:13.12.0-alpine # apt-get fails
# FROM confluent/postgres-bw:0.1

# Must set this variable, it's the location of node_modules and the mapped host volume files
WORKDIR /app

# Add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# Install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install
#RUN npm install react-scripts@3.4.1 -g --silent

# Install necessary packages with apt-get
RUN ["apt-get", "update"]
RUN ["apt-get", "install", "-y", "vim"]

# Copies everything over to Docker environment
COPY . .

# Uses port which is used by the actual application
EXPOSE 3000

# Finally runs the application
CMD [ "npm", "start" ]
