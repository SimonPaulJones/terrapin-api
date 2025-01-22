# Node Express API on Raspberry Pi

This project is a Node.js Express API designed to run within a Docker container on a Raspberry Pi. The API listens on port 8080 and processes incoming POST requests to control lights and filters through bash commands.

## Project Structure

```
node-express-api
├── src
│   ├── app.js               # Entry point of the application
│   ├── controllers          # Contains request handling logic
│   │   └── index.js
│   ├── routes               # Defines API routes
│   │   └── index.js
│   └── services             # Contains logic for executing bash commands
│       └── bashService.js
├── Dockerfile               # Instructions to build the Docker image
├── package.json             # npm configuration file
├── .dockerignore            # Files to ignore when building the Docker image
└── README.md                # Project documentation
```

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone https://github.com/microsoft/vscode-remote-try-node.git
   cd node-express-api
   ```

2. **Build the Docker image:**
   ```
   docker build -t node-express-api .
   ```

3. **Run the Docker container:**
   ```
   docker run -p 8080:8080 node-express-api
   ```

## Usage

Send a POST request to `http://<your-raspberry-pi-ip>:8080` with the following JSON body to control the lights and filters:

### Set Action

```json
{
  "action": "set",
  "message": {
    "lights": true,
    "filter": false
  }
}
```

### Query Action

```json
{
  "action": "query"
}
```

## Response Format

- For the **set** action, the response will include the output of the executed bash commands:

```json
{
  "response": {
    "lights": "<output message>",
    "filter": "<output message>"
  }
}
```

- For the **query** action, the response will return the current state:

```json
{
  "response": {
    "lights": true,
    "filter": false
  }
}
```

## License

This project is licensed under the MIT License.