// let userName = window.prompt("What is your username")

// console.log(userName)

let userName

document.getElementById("submit").onclick = function(){
    userName = document.getElementById("mytext").value
    document.getElementById("myH1").textContent = `Hello ${userName}`
}