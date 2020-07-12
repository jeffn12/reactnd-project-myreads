# Getting Started

To jump right in and use the MyReads bookcase application:
(check it out on Heroku)[https://gentle-meadow-47878.herokuapp.com/]

To run the application using the development server:

- run the command `npm install` in your terminal to install necessary dependencies (see below)
- run the command `npm start` to start the development server and use the app in a browser

# Instructions

Your library is all ready to use, it should already have a few books in it.

#### Moving Books

Use the button in the bottom right of the book cover to open the shelf selector. The current shelf is highlighted. Clicking a new shelf name will move the book to that shelf.

#### Adding Books

Use the button in the bottom right of the app (it has a plus sign) to access the search menu. Type a query into the search bar, and available books will appear below. To add a book, use the button in the bottom right of the book cover to open the shelf selector. The current shelf is highlighted - if the book is not currently in your library, it is located on shelf "None". Select a different shelf from the list to add it to your library.

##### Important

The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

# TL;DR

- run `npm install && npm start` in your terminal and have fun!

#### Dependencies

- prop-types
- react
- react-dom
- react-scripts
- react-router-dom

#### Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
