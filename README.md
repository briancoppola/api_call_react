# react_api_call
Simple React one-page app with an API data call that populates the page

## Page anatomy
This is a list of personal user information, rendered on one web page in a series of 'cards' that contain all the personal info of each user.
* The first column in each card contains the data fields, represented in the data as keys.
* The second column in each card contains the data itself.
* Since the user data tree is multi-level, the fields that have children are expanded and given their own subsection.

## Development
1. Download all files to preferred directory
2. `yarn dev` or `npm run dev` or `gulp` to start the dev server

## For reference
* API data source: https://jsonplaceholder.typicode.com/users

## To Do
- Make user name more prominent and list at top of card
- Make each data line and section distinct and easier to read through alternating background colors (white/light gray)
- Give the cards in general a more thorough design assessment to make card data easier to digest
