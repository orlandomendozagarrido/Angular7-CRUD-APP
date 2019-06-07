let environment = "dev";
let serverURLs = {
  "dev": {
    "NODE_SERVER":"http://localhost",
    "NODE_SERVER_PORT":"3000",
    "MYSQL_USER": 'localhost',
    "MYSQL_USER":'root',
    "MYSQL_PASSWORD":'password',
    'MYSQL_DATABASE':'angular7_crud',
  }
}

let config = {
  "host": `${serverURLs[environment].MYSQL_HOST}`,
  "user": `${serverURLs[environment].MYSQL_USER}`,
  "password":`${serverURLs[environment].MYSQL_PASSWORD}`,
  "database":`${serverURLs[environment].MYSQL_DATABASE}`

},
"NODE_SERVER_PORT":{
  "url":`${serverURLs[environment].NODE_SERVER}`
}

module.exports={
  config:config
};
