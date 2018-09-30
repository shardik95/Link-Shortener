# Link Shortner:

Two parts of the system:
1. Client
2. Server

## Client

1. Created in ReactJs.
2. User Enters the Link
3. Client contacts the server using REST Api's.
4. Server responds with shortLink
5. ShortLink is displayed.
6. Client can copy the short link and use for redirection to original link.

## Server
1. Created in NodeJs with data storage in MongoDB.
2. The Link is received at Server from client end. Server shortens the link.
3. The Orginal Link, Shortened link and the Shortlink code, all are stored in MongoDB.
4. The server sends the shortlink back to client.

#### nginx server is used for redirection of the shortlink to Original link.

## Pre-requsite:
1. Download and install npm from [npm site](https://www.npmjs.com/get-npm).
2. Download and install NodeJs from [NodeJs site](https://www.npmjs.com/get-npm).
3. Download and install MongoDB from [MongoDB](https://docs.mongodb.com/manual/administration/install-community/).
4. Download and install nginx from [nginx.org](http://nginx.org/en/download.html).

Alterative: you can also install all packages from [HomeBrew](https://brew.sh) for Mac

## Installation

1. Change directory of terminal where the project has to be located.
2. Clone the git repository using command: `git clone https://github.com/shardik95/Link-Shortener`
3. `cd your-path/Link-Shortner` change to your path
4. `cd server`
5. `npm install`
6. `npm start`
7. Open a new tab in terminal to start client
8. `cd ..`
9. `cd client`
10. `npm install`
11. `npm start`
12. open a new tab in terminal and change directory to where nginx is installed
    In most case, it might be present at /usr/local/etc/nginx/
13. `open nginx.conf`
14.  save it following changes: `server {
        listen       80;
        server_name  localhost;
        location ~* "^/[0-9a-z@]{5,15}$"  {
    rewrite ^/(.*)$ http://localhost:4000/api/link/$1 redirect;
 }`
15. Save and quit
16. Start nginx `sudo nginx`
17. If there's a problem try `sudo nginx -s quit` and `sudo nginx`
18. Start MongoDB in new tab: `sudo mongod`
19. You can go to new tab and see the database. type `mongo`, then `show dbs`, then `use link-shortner` and `db.linkshortner.find().pretty()`

## Working

1. Go to browser and type http://localhost:3000 or whatever port your client is running own.
2. Make sure your server is running by going to http://localhost:4000 where you can see 'Link Shortner'
3. Type the Original Long link in client and press submit.
4. You'll see a new shortened link.

## Demo



