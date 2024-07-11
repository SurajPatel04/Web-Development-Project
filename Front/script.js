let buttons = document.querySelectorAll(".btn-Setting-color");

function handleButtonColor(event){
    buttons.forEach(button => {
        // Reset to previous state
        button.style.backgroundColor = "";
    });

    event.currentTarget.style.backgroundColor = "gray";
}

buttons.forEach(button => {
    button.addEventListener("click", handleButtonColor);
});
