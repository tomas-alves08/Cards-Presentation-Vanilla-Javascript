# List of Cards

## Description

This repo will provide you with a HTML, CSS and vanilla javascript code that display a list of Cards containing information about people that retrieved from an API.

The application is responsive and has got some loading animations are loads by default 3 cards. However you have the option of chosing the amount of cards to be displayed as long as it's a number bigger than zero.

## How to start the application

1. Please, clone this repo to your local environment:
   a. using the HTTPS version run the command in your terminal: git clone https://github.com/tomas-alves08/Cards-Presentation-Vanilla-Javascript.git

2. Open project using the IDE of your preference;

3. With the project opened on the IDE, if you have node installed you can run "npx serve" on your terminal;

4. Open the browser of your preference and paste "http://localhost:3000/"

## Disclaimer

Since we are using vanilla javascript in the application, there is less state management which means some functionalities might need browser refresh to work properly such as the animations contained in the loading of the cards.
Also, when inserting a number to choose the amount of cards to be displayed it just works if you click then button. It won't work if you enter a valid value and click enter on your keyboard because the event.preventDefault() function does not work as expected. However, since the form functionality was not a requirement I decided not to invest extra time to fix it.
