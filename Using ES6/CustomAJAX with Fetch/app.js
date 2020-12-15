
const http = new EasyHTTP;

//get Users 
http.get('https://jsonplaceholder.typicode.com/users')
.then(data => console.log(data))
.catch(err => console.log(err));

//post users 
const data={
    name:"Kiran Hirani",
    username:"Kiran",
    email:"kiran@typicode.com"
}
http.post('https://jsonplaceholder.typicode.com/users',data)
.then(data=>console.log(data))
.catch(err=>console.log(err));

//update user
http.put('https://jsonplaceholder.typicode.com/users/5',data)
.then(data=>console.log(data))
.catch(err=>console.log(err));

//delete user
http.delete('https://jsonplaceholder.typicode.com/users/4')
.then(data => console.log('User Deleted'))
.catch(err => console.log(err) );