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

    const connect = async () => {
        if(window.ethereum){
            try{
            await window.ethereum.request({method: 'eth_requestAccounts'})

            web3 = new Web3(window.ethereum)

            let accounts = await web3.eth.getAccounts()

            from = accounts[0]

            console.log(accounts)

            content.style.display = "initial"
            connectButton.style.display = "none"
            account.innerText = from
        } catch(err) {
            alert("Has rechazado la conexion a metamask")
        }
        } else {
            alert("NECESITAS UN PROVEEDOR")
        }
    }

    //listeners
    connectButton.addEventListener("click", ()=>{connect()})
}

console.log(Web3)
