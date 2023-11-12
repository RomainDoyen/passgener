document.getElementById('copy-icon').addEventListener('click', function() {
    var password = document.getElementById('password').innerText;
    var textarea = document.createElement('textarea');
    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);

    // Afficher le message
    var copyMessage = document.getElementById('copy-message');
    copyMessage.style.display = 'block';
    copyMessage.style.opacity = 1;

    // Cacher le message après 2 secondes
    setTimeout(function() {
        copyMessage.style.display = 'none';
        copyMessage.style.opacity = 0;
    }, 3000);
});
