# Node Skeleton

FILL ME IN!

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
7. You'll need to sign up for a Twilio trial account at https://www.twilio.com/
8. Update the .env file with your correct local information that you set up for your database, your ngrok URL, and twilio API info.
9. Run the server: `npm run local`
10. Visit `http://localhost:8080/`
11. Test that ngrok is also working by visiting your Ngrok URL.

## Dependencies

- TO BE UPDATED
