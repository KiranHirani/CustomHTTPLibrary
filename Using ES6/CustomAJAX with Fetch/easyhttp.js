class EasyHTTP {

    //Make an Http get request 
    get(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => reject(err));
        })
    }

    //Make an HTTP post request
    post(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => reject(err));
        })
    }

    //Make an HTTP put request 
    put(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => reject(err));
        })
    }

    //Make an HTTP delete request 
    delete(url){
        return new Promise((resolve,reject) => {
            fetch(url,{
                method:'DELETE',
                headers:{'Content-Type':'application/json'}
            })
            .then(res => res.json())
            .then(data => resolve('Resource Deleted'))
            .catch(err => reject(err));
        })
    }
}