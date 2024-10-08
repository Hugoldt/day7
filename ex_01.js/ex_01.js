document.addEventListener("DOMContentLoaded", function() {
    function reduceOpacity() {
    document.getElementById('square').style.opacity = 0.5; 
    }
    function resetOpacity() {
    document.getElementById("square").style.opacity = 1; 
    }
    let Carré = document.getElementById('square'); 
    Carré.addEventListener("mouseover", reduceOpacity); 
    Carré.addEventListener("mouseout", resetOpacity); 
});