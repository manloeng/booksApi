# Simple Book API

A simple book api written with node.js (express.js)

# The Mission

The main user features that are currently included in this app are the ability to:

- Get all the books

# Crud Routes

The main user features that are currently included in this app are the ability to:

- GET: /api/books - get all books

## Step 1 - Setting up your own repository

Clone the repo:

```
git clone https://github.com/manloeng/booksApi
```

Once you have cloned the repo, you should have the repo on your system.

You will need to install the required modules to run the app successfully

## Step 3a - Running this app via docker - requires .sql file - not available

On your terminal where your cloned project is located at you will need to run:

```
docker-compose up
```

This should get the app up and running and it can be viewed on http://localhost:3030

## Step 3b - How to run this app locally

On your terminal you will want to run:

```
npm install
```

or

```
yarn
```

This will install all the modules that are listed in the package.json

Once you have the modules installed, you will need to start the app.

```
yarn start

```

This should get the app up and running and it can be viewed on http://localhost:3030

# Testing the App

## Step 1 - Update the secret.example.json (for testing)

To test the app you can now run:

```
yarn test
```

# Todo List

- Update cors - in a real world app
- Add different environments for production, development and testing purposes
- Deploy to the cloud
