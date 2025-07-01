$(document).ready(function() {
    $("body").keydown(function(event) {
        let currentText = $("h1").text();
        
        if (event.key === "Backspace") {
            $("h1").text(currentText.slice(0, -1));
        } else {
            $("h1").text(currentText + event.key);
        }
        
        console.log(event.key);
    });
});
