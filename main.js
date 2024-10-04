console.log("Loading spectrum tooltip closer by Splen ...");

document.body.addEventListener('keydown', function(e) {
    //|| e.key == "Spacebar" || e.key == " "
    if (e.key == "Escape" ) {
        const elements = document.querySelectorAll(".__react_component_tooltip");
        //console.log("Escape pressed");
        elements.forEach(x => {
            if (x != null) {
                console.log("Tooltip hidden!");
                x.classList.remove("show");
                //element.remove();
                //element.style.display = "hidden";
            }
        });
        
    }
});