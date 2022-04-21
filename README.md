# Time-Tracker Application

Time-Tracker (working title) is an application that can be used to keep track of the time you spend on your projects every day. It serves as a measure of your daily productivity. 

The primary purpose of building this application is to overcome the paywall presented by similar applications, along with presenting a slick UI/UX experience. 

## Features

- Add Projects
- Add daily log entry of work done on project
- View insights on time spent
- Filter logs by date and project

## Project Structure

This repository contains both the client and server side of the aplication. Both the client and server have to be initialized independantly.

## How to Run

### Prerequisites

- A running version of mysql
- nodeJS

### Setup

### Step 1 : Running the Server application

cd into the server folder and run

### `npm install`

to install the dependancies.

Alter credentials as neccessary in `/server/util/database.js`

Next, run 

###  `npx sequelize-cli db:create`

to create the database.

Then start the Server application by running:

### `node server`

This will run an instance of the server on http://localhost:3000

### Step 2 : Running the Client application

cd into the client folder and run

### `npm install && npm start`

to install the dependancies and start the Client application.

### Step 3 : Access the client application

You can now access the client application running on your browser and add your logs as neccessary

