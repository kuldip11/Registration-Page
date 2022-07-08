export const userLogIn = (userDetails) => {
    
    // var data = new FormData();
    //     for (const property in userDetails) {
    //         data.append(`${property}`, userDetails[property]);
    // }

    const payload = {
        method: "POST",
        body: JSON.stringify(userDetails)
        // body:data
    }
    fetch(`https://wordpress.betadelivery.com/interview/api/login`, payload)
    .then((response) => {console.log(response); return response?.json()})
    .then((response) => {console.log(response);})
    .catch(err => {console.log('err=>>', err)})
}