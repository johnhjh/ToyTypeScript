# ToyTypescript

ToyTypescript is a project aimed at practicing TypeScript. It is organized as a series of APIs, each focusing on a specific use case or scenario. This repository currently contains the implementation for a purchase management API and more APIs will be added in the future.

## Table of Contents

- [About the Project](#about-the-project)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Running the Tests](#running-the-tests)
- [Endpoints](#endpoints)
- [Reasons for Choosing Certain Modules](#reasons-for-choosing-certain-modules)
- [Data Structure](#data-structure)
- [License](#license)

## About the Project

The Purchase API allows for the creation, retrieval, updating, and deletion of purchase data. Each purchase is stored as an object within an array, with each purchase object containing the following keys:

- `pid`: A unique identifier for the purchase.
- `cid`: An identifier representing the associated coupon.
- `amount`: The quantity of the purchase.

This structure makes it easy to add new purchases to the database and to retrieve, update or delete purchases based on their `pid`.

## Technologies Used

- [Node.js](https://nodejs.org/): JavaScript runtime built on Chrome's V8 JavaScript engine.
- [Express](https://expressjs.com/): Web application framework for Node.js.
- [node-json-db](https://github.com/Belphemur/node-json-db): A simple "database" that use JSON file for Node.js.
- [Jest](https://jestjs.io/): JavaScript Testing Framework.
- [Supertest](https://github.com/visionmedia/supertest): A library made specifically for testing Node.js HTTP servers.

## Installation

To install and run this project, you will need Node.js and npm installed on your computer. After this, you can clone the project and install its dependencies:

```bash
git clone https://github.com/johnhjh/ToyTypeScript.git
cd ToyTypescript
npm install
```

You can start the server with:

```bash
npm start
```

## Running the Tests

This project uses Jest and Supertest for testing. To run the tests, use the following command:

```bash
npm test
```

## Endpoints

The Purchase API has the following endpoints:

- `GET /purchase`: Returns a list of all purchases.
- `GET /purchase/:pid`: Returns the specific purchase with the given pid.
- `POST /purchase`: Creates a new purchase and returns the pid of the new purchase.
- `PUT /purchase/:pid`: Updates the specific purchase with the given pid.
- `DELETE /purchase/:pid`: Deletes the specific purchase with the given pid.

## Reasons for Choosing Certain Modules

- **Node.js and Express**: These technologies are popular, well-documented, and efficient for building APIs.
- **node-json-db**: This module provides a simple way to persist and query data using JSON files. It's useful for small projects where a full-fledged database may not be necessary.
- **Jest and Supertest**: Jest is a comprehensive testing tool with built-in support for mocking and asynchronous testing. Supertest complements Jest by providing a simple way to test HTTP servers.

## Data Structure

The data is stored in a JSON file managed by `node-json-db`. Each purchase is stored as an object within an array. The format is as follows:

```javascript
[
  {
    pid: string,
    cid: string,
    amount: number
  },
  ...
]
```

## License

This project is licensed under the MIT License.