document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const input = document.querySelector("#email");
    const message = document.querySelector(".message");

    form.addEventListener("submit", function(event){
        event.preventDefault();

        const email = input.value.trim();
        if(email === ""){
            message.textContent = "Please enter a valid email address.";
        }else{
            message.textContent = `Thank you! Your email address ${email} has been added to our mailing list!`;
        }
    })
})