const termsModal = document.getElementById('termsModal');
const mainLink = 'Principal.html'; 

function mostrarTerminos() {
    termsModal.classList.add('show');
}

function aceptarTerminos() {
    localStorage.setItem('terminosAceptados', 'true');
    termsModal.classList.remove('show');
    window.location.href = mainLink; 
}
