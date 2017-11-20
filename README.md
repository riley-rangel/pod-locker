# pod-locker
A web-app for podcast listeners to discover, subscribe and listen to podcasts.

<img width="1680" alt="screen shot 2017-11-19 at 4 38 58 pm" src="https://user-images.githubusercontent.com/31449041/32998374-6bd6f940-cd4f-11e7-9a90-4b0b8f6dc1da.png">

Thanks for taking the time to take a look! :) Options available for checking out this project:

# Option #1: Heroku
This project is currently deployed on Heroku. Simply click the link below to visit and have a look. 
(Note: The server may take a few seconds to load up before the app begins to load. Thanks for checking it out!)

https://pod-locker.herokuapp.com/

# Option #2: Download
Download project files and load up on your machine. Steps listed below should get you up and running:

(Note: You will need `Node.js` and `npm` installed to continue. If these are not installed on your current machine, or you are not sure, here is a link to the npm site for more information: https://www.npmjs.com/get-npm)

(Note: The steps given below are given with assumption that the user will have some familiarity with issuing commands to the computer using a terminal emulator.)

1. Go to the project homepage at: https://github.com/riley-rangel/pod-locker
2. Click the green "Clone or download" button > Download Zip
3. If you do not have `npm` installed, see link above for more details. Once you have `npm` installed, while in in your terminal, open the root directory for the project: `/pod-locker-master`. (from step #2)
4. In your terminal, run the command `npm install` while inside the root directory to install the pertinent npm packages for the project. These will appear under `node_modules` in the root directory upon completion. For a full list of the downloaded packages, please review the dependencies included in the `package.json` file.
5. Still in the root directory, create a file named `.env` to create the enviroment variables needed to run the project. 
In the `.env` file you will need: 
  - `PORT`: assigned to an non-system network port between 1024 and 65535. (entry eg. `PORT=8080`)
  - `MONGODB_URI`: assigned to a valid MongoDB URI. (entry eg. `MONGODB_URI=mongodb://localhost/pod-locker`)
Make sure this is saved in the root directory, and then we're ready for step #6.
6. In your terminal, run the command: `npm run bundle` to generate a `main.js` file for the browser. This file will appear in `/server/public`. (Note: this project uses `browserify` and `babelify` to bundle client-side code written with ES6 syntax into a `main.js` file for the browser.)
7. Once again in your terminal, run the command `npm start`, and a message should be returned confirming an open port for the project. (eg. `Listening: 8080`.
8. Open your browser of choice, and enter the url (localhost: + PORT) for the open port. (eg. "localhost:8080")
9. If this is the first time the project is up and running the podcast database will be empty. Here are a few suggestions for RSS feed urls. Simply paste the url into the seach bar at the top where it says "Subscribe to a Podcast" to start listening:
 - NPR's Planet Money: https://www.npr.org/rss/podcast.php?id=510289
 - Wes Bos & Scott Tolinski's Syntax: https://feed.syntax.fm/rss
 - Bloomberg's Decrypted: https://feeds.bloomberg.fm/BLM3923153289
 - Sarah Koenig's Serial: http://feeds.serialpodcast.org/serialpodcast
 
 10. Enjoy and please reach out if you have any questions! Thank you!
