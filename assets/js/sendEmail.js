function sendMail(contactForm) {
    emailjs.send("service_epjex1h","rosie", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS!", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;
};