# Board Game
:boom: 3 day challenge to build and deploy the board game. :boom: 

### :pushpin: Frontend is deployed on Firebase
https://board-game-175ec.web.app/ :pushpin:

### :pushpin: Server is deployed on Heroku
https://board-game-atompoint.herokuapp.com/ :pushpin:

## Game Scenario
You’ve been selected as the new knight from King Arthur himself. Some bandits raided the local towns and stole some valuable items from the people. You need to collect those items and bring them back to the town folks.
You will have to sneak into their base and collect all items without being detected, so stealth is your best friend.

Rules:
1. Create a board of 20x20 cells.
2. The player will always spawn on (0,0) location of the board. (top left corner)
3. Enemies can spawn randomly on different locations of the board.
4. Items should also be spawn randomly on different locations of the board.
5. The player will move to the item location using keyboard (up,down,left,right) arrow keys.
6. You need to pick all items by moving to the cell block of the items.
7. Avoid touch enemies, because if you do, you’ll die immediately.
8. Complete the challenge in shortest amount of time.

Goal: Player needs to collect all items in shortest amount of time.

## Technologies
- React <img alt="React" src="https://img.shields.io/badge/-React-45b8d8?style=flat-square&logo=react&logoColor=white" />
- React Query <img alt="React Query" src="https://img.shields.io/badge/-React%20Query-FF4154?style=flat-square&logo=reactquery&logoColor=white" />
- Ant Design <img alt="Antd" src="https://img.shields.io/badge/-Ant%20Design-0170FE?style=flat-square&logo=antdesign&logoColor=white" />
- Node JS <img alt="Nodejs" src="https://img.shields.io/badge/-Nodejs-43853d?style=flat-square&logo=Node.js&logoColor=white" />
- Express JS <img alt="Express" src="https://img.shields.io/badge/-Express-000000?style=flat-square&logo=express&logoColor=white" />
- MongoDB <img alt="MongoDB" src="https://img.shields.io/badge/-MongoDB-13aa52?style=flat-square&logo=mongodb&logoColor=white" />
- Heroku <img alt="Heroku" src="https://img.shields.io/badge/-Heroku-430098?style=flat-square&logo=heroku&logoColor=white" />
- Firebase <img alt="Firebase" src="https://img.shields.io/badge/-Firebase-FFCA28?style=flat-square&logo=firebase&logoColor=black" />

## How to run locally
- Git clone
- Run `npm install`
- Run `npm run dev` or `npm start`
- cd client
- Run `npm install`
- Run `npm start`

## Set up `.env` on server
```
PORT=5000
NODE_ENV=development
MONGO_URI={DB-LINK}
```
