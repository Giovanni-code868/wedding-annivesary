var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        window.location.href = "nextpage.html"; // Redirect to next page after all slides have been shown
        return;
    }    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 4000); // Change slide every 2 seconds
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Previous and next slide navigation
document.querySelector('.left').addEventListener('click', function() {
    slideIndex -= 1; // Move back two slides (one for current slideIndex increment and one for previous slide)
    showSlides();
  });
  
  document.querySelector('.right').addEventListener('click', function() {
    showSlides();
  });
