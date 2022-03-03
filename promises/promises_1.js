
let allGood = false


let fetchSomeData = new Promise((resolve, reject) =>{
    if(!allGood){
        reject({
            id: 0,
            message: "this is an error"
        })
    } else {
        resolve({
            id: 1,
            message: "nice work"
        })
    }
})

//consuming the Promise

fetchSomeData.then(fetchedData => {
    console.log("then:", fetchedData)
}).catch(err => {
    console.error("catch", err)
})