//Creating a constructor function 

function easyHttp(){
    this.http=new XMLHttpRequest();
}

//Creating get,post,put,delete methods as a part of prototype of easyHttp

easyHttp.prototype.get=function(url,callback){
    this.http.open('GET',url,true);
    
    let self=this; 
    this.http.onload=function(){
        if(self.http.status===200){
            callback(null,self.http.responseText)
        }else{
            callback(`Error ${self.http.status}`)
        }
    }
    this.http.send();
}

easyHttp.prototype.post=function(url,data,callback){
    this.http.open('POST',url,true);

    this.http.setRequestHeader('Content-Type','application/json');

    let self=this;
    this.http.onload=function(){
         callback(null,self.http.responseText);
    }
    this.http.send(JSON.stringify(data));
}

easyHttp.prototype.put=function(url,data,callback){
    this.http.open('PUT',url,true);
 
    this.http.setRequestHeader('Content-Type','application/json');
    let self=this;
    this.http.onload=function(){
        callback(null,self.http.responseText);
    }

    this.http.send(JSON.stringify(data));
}

easyHttp.prototype.delete=function(url,callback){
    this.http.open('DELETE',url,true);
     let self=this;

    this.http.onload=function(){
        if(self.http.status===200){
       callback('Comment Deleted')}
       else{
           callback('Error: '+self.http.status)
       }
    }
    this.http.send();
}