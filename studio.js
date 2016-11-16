

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function dropFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}




var imagesMain = new Array;
imagesMain[0] = "images/15.jpg";
imagesMain[1] = "images/12.jpg";
imagesMain[2] = "images/13.jpg";
imagesMain[3] = "images/14.jpg";
imagesMain[4] = "images/11.jpg";

for( images in imagesMain){
    var pic = document.createElement("IMG");
    pic.setAttribute("src", this.imagesMain[images]);
    pic.setAttribute("width", "300");
    pic.setAttribute("height", "300");
    pic.setAttribute("onClick", "window.open()")
    pic.style.display = "inline block";

    document.getElementById("main").appendChild(pic);
    
};

var button = document.createElement("BUTTON");
var textButton = document.createTextNode("View In A Room");
button.appendChild(textButton);
button.setAttribute("onClick", "viewRoom()");
button.style.borderRadius = "20%";
button.style.display = "block";
document.getElementById("main").appendChild(button);

function viewRoom() {
    var showroom = window.open("", "", "top=150, left=400, width=800, height=600");
    showroom.document.open();
    var x = showroom.document.createElement("IMG");
    showroom.document.close();
    
    x.setAttribute("src", this.imagesMain[images]);
    x.setAttribute("width", "100");
    x.setAttribute("height", "150");
    x.style.marginLeft = "350px";
    x.style.marginTop = "150px";
    

    showroom.document.body.appendChild(x);
    showroom.document.body.style.backgroundImage = "url('images/couch2.jpg')";
    showroom.document.body.style.backgroundRepeat = "no-repeat";
}



function openContacts() {
    document.getElementById("contacts").classList.add("showContacts");
    document.getElementById("main").classList.add("hideMain");
    document.getElementById("gallery").classList.add("hideGallery");
    document.getElementById("contacts").classList.remove("hideContacts");
}

function openHome() {
    document.getElementById("main").classList.add("showMain");
    document.getElementById("contacts").classList.add("hideContacts");
    document.getElementById("gallery").classList.add("hideGallery");
    document.getElementById("main").classList.remove("hideMain");
}

function openGallery() {
    document.getElementById("gallery").classList.add("showGallery");
    document.getElementById("contacts").classList.add("hideContacts");
    document.getElementById("main").classList.add("hideMain");
    document.getElementById("gallery").classList.remove("hideGallery");
}