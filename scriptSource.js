var i = 0;
    let txt = "What does your mind need today?";
    const speed = 50;
    window.onload = typeWriter;
    function typeWriter() {
        if(i < txt.length) {
            document.getElementById("txt").innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }    
    }; 

const links = ["https://apps.apple.com/us/app/ucla-mindful/id1459128935","https://counseling.ucla.edu/services/make-an-appointment", "https://risecenter.ucla.edu/","https://careprogram.ucla.edu/", "https://988lifeline.org/"]
let goButton = document.getElementById("gobutton");
goButton.addEventListener("click", () => {
    let b = document.querySelector('#menu').value;
    for(let i = 0; i < 5; i++) {
        if (b == i) {
            window.location.href = links[i];
        }
    }
});