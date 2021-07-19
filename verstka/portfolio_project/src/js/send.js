function sendEmail() {

    const tempParams = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        text: document.getElementById('text').value,
    };

    emailjs.send('service_zgtbw5g', 'template_16018qi', tempParams)
        .then(function (res) {
            console.log('success', res.status);
        })
}