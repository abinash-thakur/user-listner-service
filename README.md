# User Listener Service

This project is built using the NestJS framework and provides a user listner service.

## Run in Local Environment

### Step 1: Clone the Repository
Clone the repository to your local machine using the following command:

```bash
git clone https://github.com/abinash-thakur/user-listner-service.git
```

### Step 2: setup environment variable
please follow the .env.example file and create .env file

### Step 3: setup the database
I am using the node version 20 to build this project, so for switch the version
```bash
nvm use 20
```

### Step 3:
Start the development server using the following command:
```bash
npm run start:dev
```

## Run in Docker Environment

### Step - 1:
To run the service in a Docker environment, use the following command:
```bash
sudo docker-compose --env-file .env up --build
```
or you can use
```bash
sudo docker compose --env-file .env up --build
```

### Step - 2:
To stop the service and remove volumes and orphan containers, run:
```bash
sudo docker compose down --volumes --remove-orphans
```