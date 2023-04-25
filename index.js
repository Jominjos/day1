

function promptfunc(){
   const out =prompt("Enter Your age","17");
   if (out<18 && out>5)console.log("go to school");
   else if(out<6 && out>0) console.log("I will tell your parents");
   else console.log("do something productive");
}


function alertfunc(){
    alert("This is an illegal website");
    document.getElementById("ppr").textContent= "hel       lo";

}

function submitfunc(){
    const consent= confirm("are you above age 18");
    if (consent){
        document.getElementById("ppr").innerText ="f      jh";
    }
    else document.querySelector("#ppr").textContent="vannakkam";  
}

setTimeout(()=>{
    document.querySelector("#ppr").textContent="vannakkam"


},2000)