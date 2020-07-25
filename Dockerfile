FROM node:12

# Create app directory
WORKDIR /usr/src/app

# Clone repository
RUN git clone https://github.com/GeorgieH/dwp-56688.git .

# Install dependencies
RUN npm install

# Install dependencies in production
# RUN npm ci --only=production

EXPOSE 3000

CMD [ "node", "./bin/www" ]
