const Web3 = require("web3")

//CHECK ERC y EIP

window.onload =  function() {
    let web3;
    let from;

    //elements

    const connectButton = document.querySelector("#connect")
    const content = document.querySelector("#content")
    const account = document.querySelector("#account") 

    //functions

    const connect = () => {
        if(window.ethereum){
            window.ethereum.enable()
        } else {
            alert("NECESITAS UN PROVEEDOR")
        }
    }

    //listeners
    connectButton.addEventListener("click", ()=>{connect()})
}

console.log(Web3)
