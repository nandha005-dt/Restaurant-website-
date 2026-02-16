function openImage(img){
document.getElementById("lightbox").style.display="block";
document.getElementById("lightbox-img").src=img.src;
}

function closeImage(){
document.getElementById("lightbox").style.display="none";
}

function validateForm(){
let name=document.getElementById("name").value;
let guests=document.getElementById("guests").value;

if(name.length<3){
alert("Name must be at least 3 characters");
return false;
}

if(guests<=0){
alert("Guests must be at least 1");
return false;
}

alert("Reservation Confirmed!");
return true;
}
