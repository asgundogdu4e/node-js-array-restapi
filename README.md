# node-js-array-restapi
### Node.js ve Express ile Array kullananarak hizmet sunan Rest API örneği.
### Example of Rest API serving using Array with Node.js and Express.
#
## Kurulum (Installation)
#### `npm i`
#
## Çalıştırma (Run)
#### `npm run dev`
### Uygulama 8080 nolu portu dinlemeye başlayacaktır.
### The application will start listening on port 8080.
### `http://localhost:8080`
#
## Api servislerine erişim. (Access to API services.)
### Todos ve Tutorials olmak üzere iki adet Rest API hizmeti içerir. 
### Includes two Rest API services, Todos and Tutorials.
#
## Görevleri Getir (Get Todos)
### Konsolda (On Console)
#### `curl --request GET --url http://localhost:8080/api/todos`
### JS Axios ile (with JS Axios)
```js
import axios from "axios";

const options = {method: 'GET', url: 'http://localhost:8080/api/todos'};

axios.request(options).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});
```
#
## Görev Eklemek (Insert Todo)
### Konsolda (On Console)
#### `curl --request POST \`
#### `--url http://localhost:8080/api/todos \`
#### `  --header 'Content-Type: application/json' \`
#### `  --data '  {`
#### `    "task": "Yeni görev",`
#### `    "description": "Yep yeni bir görev."`
#### `  }'`
### JS Axios ile (with JS Axios)
```js
import axios from "axios";

const options = {
  method: 'POST',
  url: 'http://localhost:8080/api/todos',
  headers: {'Content-Type': 'application/json'},
  data: {task: 'Yeni görev', description: 'Yep yeni bir görev.'}
};

axios.request(options).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});
```
#
## Görevi Güncellemek (Update Todo)
### Konsolda (On Console)
```
curl --request PUT \
  --url http://localhost:8080/api/todos/1 \
  --header 'Content-Type: application/json' \
  --data '  {
    "task": "Kitap oku",
    "description": "Listedeki kitapları oku.",
    "completed": true
  }'
```  
### JS Axios ile (with JS Axios)
```js
import axios from "axios";

const options = {
  method: 'PUT',
  url: 'http://localhost:8080/api/todos/1',
  headers: {'Content-Type': 'application/json'},
  data: {task: 'Kitap oku', description: 'Listedeki kitapları oku.', completed: true}
};

axios.request(options).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});
```
#
## Görevi Silmek (Delete Todo)
### Konsolda (On Console)
```
curl --request DELETE \
  --url http://localhost:8080/api/todos/1
```  
### JS Axios ile (with JS Axios)
```js
import axios from "axios";

const options = {method: 'DELETE', url: 'http://localhost:8080/api/todos/1'};

axios.request(options).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});
```
