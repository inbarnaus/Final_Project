export function PostData(type, userData) {
    let BaseURL = 'https://localhost:3000';

    return new Promise((resolve, reject) =>{
    console.log('inbar');
         
        fetch(BaseURL, {
            method: 'POST',
            body: JSON.stringify(userData)
          })
          .then((response) => response.json())
          .then((res) => {
            resolve(res);
          })
          .catch((error) => {
            reject(error);
          });

  
      });
}