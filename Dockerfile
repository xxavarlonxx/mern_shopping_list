FROM NODE:12
WORKDIR /usr/web/app
COPY package*.json ./
RUN npm install
COPY . .