
const buttonElm=document.getElementById("script-run-btn")

buttonElm.addEventListener("click",(event)=>{
    console.log("btn clicked");
document.querySelector("#msg-1").textContent="Loading..."
document.querySelector("#msg-2").textContent=""
// setting up fetchAPI upon button click
fetch(`http://localhost:3000/runScript`).then((response)=>{
    console.log("response -->",response);
        response.text().then((data)=>{
           
            document.querySelector("#msg-1").textContent=``
            document.querySelector("#msg-2").textContent=`${data}`
            console.log("data-->",data);
        }).catch( error =>{
            document.querySelector("#msg-1").textContent=`Error occured`
            document.querySelector("#msg-2").textContent=`Something went wrong! Try again later.`
            console.log(error);
        })
}).catch( error =>{
            document.querySelector("#msg-1").textContent=`Error fetching data`
            document.querySelector("#msg-2").textContent=`Something went wrong! Try again later.`
})

})