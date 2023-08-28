const searchbar = document.getElementById("searchbar");
const searchInput = searchbar.querySelector("input[type='search']");

searchbar.addEventListener("mouseenter", function() {
searchbar.style.opacity = "1";
});
searchbar.addEventListener("mouseleave", function() {
searchbar.style.opacity = "0.5";
});
searchbar.addEventListener("click", function() {
 searchbar.style.opacity = "1";
});
searchInput.addEventListener("input", function() {
 
    searchbar.style.opacity = "1";
});
searchInput.addEventListener("blur", function() {
        searchbar.style.opacity = "0.5";
});




$( document ).ready(function() {
    // Bounce button
    $("#animatebutton").click(function(){
        const element =  document.querySelector('.animatebutton');
        element.classList.add('animated', 'pulse');
        setTimeout(function() {
          element.classList.remove('pulse'); 
  },        1000);
    });
    
    
});

$(document).ready(function() {
    var animateButton = $('#animatebutton');
    
    animateButton.click(function() {
      
        window.location.href="./pages/Authentication/login/Auth.html";
    });
});