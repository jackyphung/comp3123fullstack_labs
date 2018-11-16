const http = require('http');
const os = require('os');
var osinfo = require('./osinfo');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  let system = osinfo.system;
  let firewall = osinfo.firewall;
  if(req.url == '/'){
    res.end("No data found");
  }
  if(req.url == '/api/systeminfo'){
    res.end(JSON.stringify(system.getSysteminfo()));
  }
  if(req.url == '/api/userinfo'){
    res.end(JSON.stringify(system.getUserInfo()));
  }
  if(req.url == '/api/firewall'){
    res.end(JSON.stringify(firewall.getStatues()));
  }
  else{
    res.statusCode = 404;
    res.end("Error");
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});