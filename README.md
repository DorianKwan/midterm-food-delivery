# Node Skeleton

Eatr is a food ordering application that uses Twilio to connect customers to the restaurant. Customers can visit the Eatr site to order food and receive a text to confirm their order and when their order is available for pickup. The restaurant will receive a call when an order is placed which reads out the order and allows the restaurant to confirm or reject the order.

## Getting Started

Setup Your Postgress DB to start:

1. From terminal: `psql -U vagrant -d template1`
2. Then set up a new user and table 
`CREATE ROLE labber with LOGIN password 'labber';`
`CREATE DATABASE midterm OWNER labber;`

THEN start working with your cloned repository:

1. Install dependencies: `npm i`
2. Fix to binaries for sass: `npm rebuild node-sass`
3. Run migrations: `npm run knex migrate:latest`
4. Run the seed: `npm run knex seed:run`
5. To use in a development environment, you'll need to download and instal Ngrok from https://ngrok.com/download
6. Initialize your ngrok instance by starting the program with `./ngrok http 8080` - Follow ngrok docs to init to this port.
7. You'll need to sign up for a Twilio trial account at https://www.twilio.com/ and create a phone number.
8. Update the `.env.example` file with your correct local information that you set up for your database, your ngrok URL, and twilio API info/phone, and your restaurant phone number. Change the file name to just `.env`
9. Run the server: `npm run local`
10. Visit `http://localhost:8080/`
11. Test that ngrok is also working by visiting your Ngrok URL.

## Final Product
!["The main page of Eatr"](https://github.com/dennyhollick/midterm-food-delivery/blob/master/docs/Screen%20Shot%202017-07-24%20at%2010.49.02%20AM.png?raw=true)
!["Our Menu"](https://github.com/dennyhollick/midterm-food-delivery/blob/master/docs/Screen%20Shot%202017-07-24%20at%2010.49.21%20AM.png?raw=true)
!["Your current cart"](https://github.com/dennyhollick/midterm-food-delivery/blob/master/docs/Screen%20Shot%202017-07-24%20at%2010.49.45%20AM.png?raw=true)

## Dependencies

- Body-parser
- Dotenv
- Ejs
- Express
- Knex
- Knex-logger
- Morgan
- Node-sass-middleware
- Pg
- Sweet Alert
- Twilio

## Known Issues

- No logic to handle invalid inputs from Restaurant
- No logic to handle hangups from Restaurant
- No sanitization or standardization of input text and name from user
- Cart does not clear if user hits the back button after submitting an order
- No ability to reject an order
- `HAL 9000` has injected himself into our system and taken it over on the phone call.
- No web response to user when an restaurant has accepted an order, only by SMS.
- No logic to handle an undelivered SMS with pickup time. (eg, user is using a landline.)

## Future Additions

- Payment processing
- Login/Reg
- Notes from the user
- Customization of order
- Web notification of acceptance 
- Ability for restaurant to see a list of orders previously made
- Ability to reject an order
- Ability for restaurant to change menu items
- Ability for restaurant to see and accept orders incoming from a web interface

