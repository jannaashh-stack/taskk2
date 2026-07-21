


(function () {
    emailjs.init("DWn08EgGSqmmLopD8");
})();

document.getElementById("contact-form").addEventListener("submit", function(event) {

    event.preventDefault();

    emailjs.sendForm(
        "service_lioo59b",
        "template_3nyj5vi",
        this
    )
    .then(function() {
        alert("Message sent successfully!");
        document.getElementById("contact-form").reset();
    })
    .catch(function(error) {
        alert("Failed to send message!");
        console.log(error);
    });

});