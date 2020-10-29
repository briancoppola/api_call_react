# react_api_call
Simple React one-page app with an API call that populates the page with generic user data

## Page anatomy
This is a list of personal user information, rendered on one web page in a series of 'cards' that contain all the personal info of each user (screenshot below).
* The first column in each card contains the data fields, represented in the data as keys.
* The second column in each card contains the data itself.
* Since the user data tree is multi-level, the fields that have children are expanded and given their own subsection.

![React API Data App - screenshot](/images/screenshot.png)

## Setup
To run this project, download all files to a new folder and install it locally using npm:

```
$ cd ../[new folder]
$ npm install
$ npm start
```

## For reference
* API data source: https://jsonplaceholder.typicode.com/users

## To Do
- Make user name more prominent and list at top of card
- Make each data line and section distinct and easier to read through alternating background colors (white/light gray)
- Give the cards in general some design love to beautify cards and make card data easier to digest
