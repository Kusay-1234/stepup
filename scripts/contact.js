(function() {
    emailjs.init("YOUR_PUBLIC_KEY");
})();

function sendContactEmail(event) {
    event.preventDefault(); 
    
    const contactParams = {
        email: document.getElementById("user-email").value,
        phone: document.getElementById("phone").value,
        name: document.getElementById("name").value,
        message: document.getElementById("message").value
    };
    
    emailjs.send("YOUR_SERVICE_ID", "YOUR_CONTACT_TEMPLATE_ID", contactParams)
        .then(response => {
            alert("Contact form email sent successfully!");
        })
        .catch(error => {
            alert("Failed to send contact form email. Please try again.");
            console.error("Error:", error);
        });
}

function sendAppointmentEmail(event) {
    event.preventDefault(); 
    
    const appointmentParams = {
        email: document.getElementById("appointment-email").value
    };
    
    emailjs.send("YOUR_SERVICE_ID", "YOUR_APPOINTMENT_TEMPLATE_ID", appointmentParams)
        .then(response => {
            alert("Appointment email sent successfully!");
        })
        .catch(error => {
            alert("Failed to send appointment email. Please try again.");
            console.error("Error:", error);
        });
}

document.querySelector("form:first-of-type").addEventListener("submit", sendContactEmail);
document.querySelector("form:last-of-type").addEventListener("submit", sendAppointmentEmail);
