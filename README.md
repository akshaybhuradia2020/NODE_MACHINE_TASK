## Project install steps: ##
* install nodejs runtime and mongodb in your localhost
* git clone Markup : https://github.com/akshaybhuradia2020/NODE_MACHINE_TASK.git
* cd <proj dir>
* npm init -y
* npm i
* npm install pm2@latest -g ### this is run server as background service
* pm2 start index.js


## RestAPI Endpoints: ##

### Endpoint : http://127.0.0.1:3000/api/v1/registration ###
### Method : POST ###
### Body : { "username":"aksay","password":"12346"} ###
### Response : {"message": "USER IS REGISTERED","userreg": true} ###

### Endpoint : http://127.0.0.1:3000/api/v1/login/?username=akshay&passwd=1234 ###
### Method : GET ###
### PARAM : username=akshay&passwd=1234 ###
### Response : {"message": "CORRECT CREDENTIALS","uservalid": true,"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9**"} ###

### Endpoint : http://127.0.0.1:3000/api/v1/get_products/ ###
### Method : POST ###
### Headers : Authorization: token value from login api ###
### Response : Product Data ###


### Endpoint : http://127.0.0.1:3000/api/v1/logout/ ###
### Method : GET ###
### Response : Home page ###