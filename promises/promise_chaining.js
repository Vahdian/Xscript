//function that fetches data

let fetchData = function(data){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Fetching data complete");
            resolve({id: 1, message:"Nice work"})
        }, 2000);
    })
}

//funciton that parses data

let parseData = function(data){
    return new Promise((resolve, reject)=>{
        setTimeout(() =>{
            let parsedOutput = `Parsed the data for id: ${data.id} with message: ${data.message}`;
            resolve({parsed: parsedOutput})
        }, 2000)
    })
}

// function to print the data

let echoData = function(data){
    return new Promise((resolve, reject)=>{
        setTimeout(()=> {
            console.log(data.parsed)
        }, 2000)
    })
}

// chaining all the promises

fetchData().then(parseData).then(echoData)