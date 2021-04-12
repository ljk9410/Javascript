let http = require('http');
let fs = require('fs');
let url = require('url');
let app = http.createServer(function(request,response){
    let _url = request.url;
    let queryData = url.parse(_url, true).query;
    let pathname = url.parse(_url, true).pathname;
    
    if (pathname === '/')
    {
      fs.readdir('./data', (err, fileLists) => {
        fs.readFile(`data/${queryData.id}`, 'utf8', (err, description) => {
          let title = queryData.id;
          if (queryData.id === undefined)
          {
            title = "Welcome";
            description = "Hello, Node.js";
          }
          /*
          let list = `
          <ol>
            <li><a href="/?id=HTML">HTML</a></li>
            <li><a href="/?id=CSS">CSS</a></li>
            <li><a href="/?id=JavaScript">JavaScript</a></li>
          </ol>
          `;
          */
          let list = '<ul>';
          for (let i = 0; i < fileLists.length; i++) {
            list = list + `<li><a href="/?id=${fileLists[i]}">${fileLists[i]}</a></li>`;
          }
          list = list + '</ul>';
          let template = `
          <!doctype html>
          <html>
          <head>
            <title>WEB1 - ${title}</title>
            <meta charset="utf-8">
          </head>
          <body>
            <h1><a href="/">WEB</a></h1>
            ${list}
            <h2>${title}</h2>
            <p>${description}</p>
          </body>
          </html>
          `;
          response.writeHead(200); // 정상적으로 데이터가 전송
          response.end(template);
        });
      });
    }
    else 
    {
      response.writeHead(404); // path를 찾을 수 없다는 error
      response.end('Not found');
    }
});
app.listen(3000);