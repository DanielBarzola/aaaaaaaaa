window.nextStep = function (step) {
    // Hide all steps
    document.querySelectorAll('.form-step').forEach(el => el.classList.remove('active'));
    // Show target step
    document.getElementById(`step-${step}`).classList.add('active');

    // Update progress bar
    document.querySelectorAll('.progress-bar .step').forEach(el => {
        if (parseInt(el.dataset.step) <= step) {
            el.classList.add('active');
        } else {
            el.classList.remove('active');
        }
    });
}

window.prevStep = function (step) {
    // Hide all steps
    document.querySelectorAll('.form-step').forEach(el => el.classList.remove('active'));
    // Show target step
    document.getElementById(`step-${step}`).classList.add('active');

    // Update progress bar
    document.querySelectorAll('.progress-bar .step').forEach(el => {
        if (parseInt(el.dataset.step) <= step) {
            el.classList.add('active');
        } else {
            el.classList.remove('active');
        }
    });
}

document.getElementById('booking-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('¡Reserva confirmada! Te hemos enviado un WhatsApp con los detalles.');
    // Reset form
    this.reset();
    window.nextStep(1);
});
