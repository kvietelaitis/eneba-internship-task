# eneba-internship-task

This is my rendition of the given task by Eneba for their internship program.

It was a lot of fun building and deploying this small project, and I learned a lot in the process:)

## notes

The provided compose and .env files should have their values changed, as they are only for demonstration purposes.

This process should only be followed if the deployed version of the site is not fully functional.

If the deployed version is not functional (specifically the connection to the backend API, as I am running it locally on one of my machines), please contact me and I will try to fix whichever problem has occurred.

## prerequisites

Before starting, make sure to have the latest versions of these packages:

- Node.js (Download: https://nodejs.org/en/download)
- Go (Download: https://go.dev/dl/)
- Docker (Download: https://www.docker.com/products/docker-desktop/)

After downloading, follow the provided instructions for each of the tools.

## running the project locally

If, for some reason, the deployed version of the project does not work, it is possible to run the project locally. It should be noted that each of the steps has to be done in the provided order (if the database does not exist, the backend cannot start, and the frontend cannot connect to it:)).

### docker

After installing and setting up Docker, open the terminal and navigate to the project’s backend directory. Create a new file titled “docker-compose.yml” with a text editor of your choice and paste in this configuration:

```yaml
services:
  postgres:
    image: postgres:15-alpine
    container_name: testing-db
    environment:
      POSTGRES_USER: testing
      POSTGRES_PASSWORD: testing12
      POSTGRES_DB: games
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U games"]
      interval: 10s
      timeout: 5s
      retries: 5

volumes:
  postgres_data:
```

Save the file, and in the terminal run the command:

```bash
docker compose up -d
```

It may require administrative privileges, depending on your device.

If everything went well, you should see a confirmation that the database container is running.

### go

To run the backend service itself, we must first create a .env file.

While in the same backend directory, create a file titled .env and open it with a text editor of your choice. Inside, paste the following:

```json
PORT=3000
FRONTEND_URL="http://localhost:5173"
DB_URL="host=localhost user=testing password=testing12 dbname=games port=5432 sslmode=disable"
JWT_SECRET="goMSUKWlBeAWjsd2/W2EvlWcolgNAStfXvgcsELMhzk="
```

Save the file and proceed to start the backend service with this command in the terminal:

```bash
go run main.go --migrate --seed
```

If everything goes smoothly, you should see a small graphic showing the Localhost IP of the service.

### react

After installing Node.js, to start the frontend service, navigate to the project’s frontend directory.

Like previously, create a .env file and paste in this configuration:

```json
VITE_API_URL="http://127.0.0.1:3000/"
```

After saving, enter this command into the terminal to start the service:

```bash
npm run build
```
