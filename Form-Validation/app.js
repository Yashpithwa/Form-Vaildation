

let submit=document.getElementById("submit")
submit.addEventListener("click",(e)=>
{
    
let a=document.getElementById("name").value;
let b=document.getElementById("email").value;
let c=document.getElementById("phone").value;
let p1=document.getElementById("password").value;
let p2=document.getElementById("re-password").value;
 

 if(a=="" && b=="" && c=="" && p1=="" && p2=="")
 {
    alert("FILL THE FORM FIRST");
 }
 else if(a=="" || b=="" || c=="" || p1=="" || p2=="")
    {
       alert("FILL THE FORM FIRST");
    }
 else if(a.length<5)
 {
    alert("NAME SHOULD HAVE MINIMUM 5 CHARACTER");
 }
 else if(c.length>10 || c.length<10)
 {
    alert("PHONE NUMBER SHOULD HAVE MINIMUM 10 NUMBER")
 }

 else if(isNaN(c))
 {
    alert("ENTER NUMBER PROPERLY");
 }
 else if(p1==a)
 {
   alert("Note your password should Not be your username");
 }
 else if(p1=="password" )
 {
   alert("Note your Password should not be password");
 }
 else if(p1.length<8)
 {
   alert("Enter minmum 8 Character");
 }

 else if(p1!=p2)
 {
    alert("ENTER PASSWORD AGAIN!");
 }
 
 else if (!b.includes('@')) {
    alert("Email must contain '@'.");
 
 } 
 
 else{
    alert("HORRAY FORM GET SUBMIT !!!!!!!")
 }



 
})
