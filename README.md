Install nodejs runtime env in your local env

Project install steps:
1)git clone 
2)cd <proj dir>
3)npm init -y
4)npm i
5)npm install pm2@latest -g ### this is run server as background service
6)pm2 start index.js



RestAPI Endpoints
1) 
Endpoint : http://127.0.0.1:3000/api/v1/registration
Medthod : POST
Body : { "username":"aksay","password":"12346"}
Response : 


2) 
Endpoint : http://127.0.0.1:3000/api/v1/login/?username=akshay&passwd=1234
Medthod : GET
PARAM : username=akshay&passwd=1234
Response : 

3) 
Endpoint : http://127.0.0.1:3000/api/v1/get_products/
Medthod : POST
Response : 