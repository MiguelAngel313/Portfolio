const botonContacto = document.getElementById('contacto');
const contacto = document.querySelector('.contacto');

contacto.style.opacity = '0';
contacto.style.transform = 'translateX(20px)';
contacto.style.display = 'none';
contacto.style.transition = 'all 0.3s ease';

botonContacto.addEventListener('click', function() {
    if (contacto.style.display === 'none' || contacto.style.display === '') {
        contacto.style.display = 'grid';
        
        setTimeout(() => {
            contacto.style.opacity = '1';
            contacto.style.transform = 'translateX(0)';
        }, 10);
        
        botonContacto.textContent = '❌';
    } else {
        contacto.style.opacity = '0';
        contacto.style.transform = 'translateX(20px)';
        
        setTimeout(() => {
            contacto.style.display = 'none';
        }, 300);
        
        botonContacto.textContent = 'Contáctame';
    }
});

document.addEventListener('click', function(event) {
    const esBotonContacto = botonContacto.contains(event.target);
    const esContenidoContacto = contacto.contains(event.target);
    
    if (!esBotonContacto && !esContenidoContacto && contacto.style.display !== 'none') {
        contacto.style.opacity = '0';
        contacto.style.transform = 'translateX(20px)';
        
        setTimeout(() => {
            contacto.style.display = 'none';
            botonContacto.textContent = 'Contáctame';
        }, 300);
    }
});