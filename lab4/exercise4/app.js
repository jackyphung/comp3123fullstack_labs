const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

var book = require('./store');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  if(req.url == '/'){
    res.end("No data found");
  }
  if(req.url == '/api/favoritebook'){
    var output = "Favorite Book: " + booker.favoriteBook().title + " - Author: " + booker.favoriteBook
    ().author;
    res.end(JSON.stringify(output));
  }
  if(req.url == '/api/getbooks'){
    var booker = book.booksModule;
    res.end(JSON.stringify(booker.getBookRecommendations()));
  }
  if(req.url == '/api/getvideos'){
    var video = book.videosModule;
    res.end(JSON.stringify(video.getVideoRecommendations()));
  }
  else{
    res.statusCode = 404;
    res.end("Error page not found.")
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});