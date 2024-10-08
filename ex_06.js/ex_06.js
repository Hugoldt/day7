const robot = document.getElementById("robot")
const speechBubble = document.getElementById("speech-bubble")
const screenText = document.getElementById("screen-text")
const input =document.getElementById("robot-input")
const pupilGauche=document.getElementsByClassName("eye-left-iris")[0]
const pupilDroite=document.getElementsByClassName("eye-right-iris")[0]



robot.addEventListener('click', function () {
    speechBubble.innerText = "Ooch,thathurts!"

    setTimeout(function () {
        speechBubble.style.display = 'none';
    }, 2000)

});


robot.addEventListener('mouseover', function (event) {
    const y = event.clientY;
    const x = event.clientX;
    screenText.textContent = `X: ${x}, Y: ${y}`


});

input.addEventListener('input', function () {
screenText.textContent = "Don’tworry,I’lltakecareofit!"
setTimeout(function () {
screenText.style.display = 'none';
}, 2000)
})

let clickCount = 0;

    pupilGauche.addEventListener('click', function() {
        clickCount++;
        if (clickCount >= 10) {
            pupilGauche.style.backgroundColor = 'red';
            pupilDroite.style.backgroundColor = 'red'; 
            clickCount = 0; 
        }
    });

    pupilDroite.addEventListener('click', function() {
        clickCount++;
        if (clickCount >= 10) {
            pupilGauche.style.backgroundColor = 'red';
            pupilDroite.style.backgroundColor = 'red'; 
            clickCount = 0; 
        }
    });
