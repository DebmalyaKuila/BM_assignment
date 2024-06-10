
const buttonElm=document.querySelector('button[type="button"]')

buttonElm.addEventListener("click",(event)=>{
event.preventDefault()

document.querySelector("#msg-1").textContent="Loading..."
document.querySelector("#msg-2").textContent=""
// setting up fetchAPI upon button click(on submit of form)
fetch(`http://localhost:3000/runScript`).then((response)=>{
        response.json().then((data)=>{
           
            document.querySelector("#msg-1").textContent=``
            document.querySelector("#msg-2").textContent=`${data}edweqq2fed`
        }).catch( error =>{
            document.querySelector("#msg-1").textContent=`Error occured`
            document.querySelector("#msg-2").textContent=`Something went wrong! Try again later.`
        })
}).catch( error =>{
            document.querySelector("#msg-1").textContent=`Internal server error`
            document.querySelector("#msg-2").textContent=`Something went wrong! Try again later.`
})

})