const http=new easyHttp;

//Get method 

http.get('https://jsonplaceholder.typicode.com/comments',function(err,response){
    console.log(response);
})

//Post method 
http.post('https://jsonplaceholder.typicode.com/comments',{name:'Test Comment',body:'This is test comment'},
function(err,response){
    console.log(response);
})

//Put method 
http.put('https://jsonplaceholder.typicode.com/comments/5',{name:'Test Comment',body:'This is test comment for update'},
function(err,response){
    console.log(response);
})

//Delete method 
http.delete('https://jsonplaceholder.typicode.com/comments/2',function(response){
    console.log(response);
})