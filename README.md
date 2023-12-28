## Install nodejs runtime env in your local env ##

## Project install steps: ##
* git clone 
* cd <proj dir>
* npm init -y
* npm i
* npm install pm2@latest -g ### this is run server as background service
* pm2 start index.js



## RestAPI Endpoints: ##
### Endpoint : http://127.0.0.1:3000/api/v1/registration ###
### Medthod : POST###
### Body : { "username":"aksay","password":"12346"} ###
### Response : ###

### Endpoint : http://127.0.0.1:3000/api/v1/login/?username=akshay&passwd=1234 ###
### Medthod : GET ###
### PARAM : username=akshay&passwd=1234 ###
### Response : ###

### Endpoint : http://127.0.0.1:3000/api/v1/get_products/ ###
### Medthod : POST ###
### Response : ###