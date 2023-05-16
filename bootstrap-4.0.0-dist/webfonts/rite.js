

let profileMenu =document.getElementById("profileMenu");


function toggleMenu(){
    profileMenu.classList.toggle("open-menu");

}


let sidbar =document.getElementById("sidebar-activity");
let moring =document.getElementById("showmorelink");


function toggleactive(){
    sidbar.classList.toggle("open-activity");
   if(sidbar.classList.contains("open-activity")){
       moring.innerHTML ="Show less <b>-</b>"
   }else{
       moring.innerHTML= "Show less <b>-</b>"
   }
}


