// Funcionalidad para la página de boda Edén & Natali

// Variables globales
let isPlaying = false;
let audioContext = null;

// Funciones del reproductor de música
function initializeMusic() {
    const playBtn = document.getElementById('playBtn');
    const musicIcon = document.querySelector('.music-icon');
    const musicText = document.querySelector('.music-text');

    if (playBtn && musicIcon && musicText) {
        playBtn.addEventListener('click', () => {
            if (!isPlaying) {
                // Simular reproducción de música
                playMusic();
                musicIcon.textContent = '⏸';
                musicText.innerHTML = 'pausa<br>nuestra canción';
                playBtn.classList.add('playing');
            } else {
                // Pausar música
                pauseMusic();
                musicIcon.textContent = '♪';
                musicText.innerHTML = 'haz clic y reproduce<br>nuestra canción';
                playBtn.classList.remove('playing');
            }
            isPlaying = !isPlaying;
        });
    }
}

function playMusic() {
    // En una implementación real, aquí se reproduciría la canción de YouTube
    // Por ahora simulamos la funcionalidad
    console.log('Reproduciendo música...');
    
    // Agregar efecto visual al botón
    const playBtn = document.getElementById('playBtn');
    if (playBtn) {
        playBtn.style.background = '#739cc4';
        playBtn.style.color = 'white';
    }
}

function pauseMusic() {
    console.log('Pausando música...');
    
    // Restaurar estilo original del botón
    const playBtn = document.getElementById('playBtn');
    if (playBtn) {
        playBtn.style.background = 'rgba(255, 255, 255, 0.9)';
        playBtn.style.color = '#55627c';
    }
}

// Función de countdown
function initializeCountdown() {
    const countdownElement = document.getElementById('countdown');
    
    if (countdownElement) {
        // Fecha de la boda - 1 de agosto de 2025
        const weddingDate = new Date('2025-10-31T14:30:00').getTime();
        
        function updateCountdown() {
            const now = new Date().getTime();
            const distance = weddingDate - now;
            
            if (distance > 0) {
                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);
                
                if (countdownElement) {
                    countdownElement.innerHTML = `
                        <div style="display: flex; justify-content: center; gap: 20px; flex-wrap: wrap;">
                            <div style="text-align: center;">
                                <div style="font-size: 3rem; font-weight: 700; line-height: 1;">${days}</div>
                                <div style="font-size: 0.9rem; opacity: 0.8;">días</div>
                            </div>
                            <div style="text-align: center;">
                                <div style="font-size: 3rem, font-weight: 700; line-height: 1;">${hours}</div>
                                <div style="font-size: 0.9rem, opacity: 0.8;">horas</div>
                            </div>
                            <div style="text-align: center;">
                                <div style="font-size: 3rem, font-weight: 700; line-height: 1;">${minutes}</div>
                                <div style="font-size: 0.9rem, opacity: 0.8;">min</div>
                            </div>
                            <div style="text-align: center;">
                                <div style="font-size: 3rem, font-weight: 700; line-height: 1;">${seconds}</div>
                                <div style="font-size: 0.9rem, opacity: 0.8;">seg</div>
                            </div>
                        </div>
                    `;
                }
            } else {
                if (countdownElement) {
                    countdownElement.innerHTML = '<div style="font-size: 2rem; color: #c2af9a;">¡Ya es el gran día!</div>';
                }
            }
        }
        
        // Actualizar cada segundo
        updateCountdown();
        setInterval(updateCountdown, 1000);
    }
}

// Funciones para botones de confirmación
function initializeConfirmationButtons() {
    const groomBtn = document.querySelector('.groom-btn');
    const brideBtn = document.querySelector('.bride-btn');
    
    if (groomBtn) {
        groomBtn.addEventListener('click', () => {
            // Simular WhatsApp al novio
            const phoneNumber = '51999917998'; // Número del novio
            const message = encodeURIComponent('¡Hola Luis! Confirmo mi asistencia a tu boda🥳🥳🥳🥳. ¡No me la perdería por nada!🍷🍷');
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
            window.open(whatsappUrl, '_blank');
        });
    }
    
    if (brideBtn) {
        brideBtn.addEventListener('click', () => {
            // Simular WhatsApp a la novia
            const phoneNumber = '51999917998'; // Número de la novia
            const message = encodeURIComponent('¡Hola Rocio! Confirmo mi asistencia a tu boda🥳🥳🥳🥳. ¡Estoy muy emocionado/a!🍷🍷');
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
            window.open(whatsappUrl, '_blank');
        });
    }
}

// Función para el botón "Cómo llegar"
function initializeLocationButton() {
    const locationBtn = document.querySelector('.location-btn');
    
    if (locationBtn) {
        locationBtn.addEventListener('click', () => {
            // Abrir Google Maps con la URL directa
            const mapsUrl = 'https://www.google.com/maps/place/LOCAL+TRINOMIO+DORADO/@-12.0291113,-75.2270819,17z/data=!3m1!4b1!4m6!3m5!1s0x910ebd2749e3854f:0x3b5f44c6ad60726e!8m2!3d-12.0291113!4d-75.2270819!16s%2Fg%2F11ghtc673b?entry=ttu&g_ep=EgoyMDI1MDYyNi4wIKXMDSoASAFQAw%3D%3D';
            window.open(mapsUrl, '_blank');
        });
    }
}

// Función para animaciones suaves al hacer scroll
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target instanceof HTMLElement) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            }
        });
    }, observerOptions);
    
    // Asumiendo que hay una variable sections definida globalmente o en otro lugar
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        if (section instanceof HTMLElement) {
            section.style.opacity = '0';
            section.style.transform = 'translateY(30px)';
            section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            observer.observe(section);
        }
    });
}

// Función para efectos en las fotos de la pareja
function initializeCouplePhotoEffects() {
    const couplePhotos = document.querySelectorAll('.couple-photo');
    couplePhotos.forEach(photo => {
        photo.addEventListener('mouseenter', () => {
            if (photo instanceof HTMLElement) {
                photo.style.transform = 'scale(1.1) rotate(5deg)';
                photo.style.transition = 'transform 0.3s ease';
            }
        });

        photo.addEventListener('mouseleave', () => {
            if (photo instanceof HTMLElement) {
                photo.style.transform = 'scale(1) rotate(0deg)';
            }
        });
    });
}

// Función para particulas flotantes (efecto romántico)
function createFloatingHearts() {
    const heartsContainer = document.createElement('div');
    heartsContainer.style.position = 'fixed';
    heartsContainer.style.top = '0';
    heartsContainer.style.left = '0';
    heartsContainer.style.width = '100%';
    heartsContainer.style.height = '100%';
    heartsContainer.style.pointerEvents = 'none';
    heartsContainer.style.zIndex = '1';
    document.body.appendChild(heartsContainer);
    
    function createHeart() {
        const heart = document.createElement('div');
        heart.innerHTML = '♥';
        heart.style.position = 'absolute';
        heart.style.color = '#c2af9a';
        heart.style.fontSize = '20px';
        heart.style.opacity = '0.3';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.top = '100%';
        heart.style.animation = 'floatUp 8s linear forwards';
        
        heartsContainer.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 8000);
    }
    
    // Crear corazón cada 3 segundos
    setInterval(createHeart, 3000);
    
    // Agregar CSS para la animación
    const style = document.createElement('style');
    style.textContent = `
        @keyframes floatUp {
            to {
                transform: translateY(-100vh) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// Función para smooth scroll
function initializeSmoothScroll() {
    // Aplicar smooth scroll a todos los enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Función para botones de Yape (copiar número)
function initializeYapeButtons() {
    const yapeNumbers = document.querySelectorAll('.yape-number');
    yapeNumbers.forEach(span => {
        if (span instanceof HTMLSpanElement) {
            span.style.cursor = 'pointer';
            span.title = 'Haz clic para copiar';

            span.addEventListener('click', () => {
                const number = span.textContent?.replace('Yape: ', '') || '';

                if (navigator.clipboard) {
                    navigator.clipboard.writeText(number).then(() => {
                        // Mostrar feedback visual
                        const originalText = span.textContent;
                        span.textContent = '¡Copiado!';
                        span.style.background = '#739cc4';
                        span.style.color = 'white';

                        setTimeout(() => {
                            span.textContent = originalText;
                            span.style.background = 'white';
                            span.style.color = '#55627c';
                        }, 2000);
                    });
                }
            });
        }
    });
}




// Función principal de inicialización
function initializeApp() {
    console.log('Inicializando página de boda Edén & Natali...');
    
    // Esperar a que el DOM esté completamente cargado
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            initializeAllFeatures();
        });
    } else {
        initializeAllFeatures();
    }
}

function initializeAllFeatures() {
    initializeMusic();
    initializeCountdown();
    initializeConfirmationButtons();
    initializeLocationButton();
    initializeScrollAnimations();
    initializeCouplePhotoEffects();
    initializeSmoothScroll();
    initializeYapeButtons();
    
    // Inicializar efectos especiales después de un breve delay
    setTimeout(() => {
        createFloatingHearts();
    }, 2000);
    
    console.log('¡Todas las funcionalidades inicializadas correctamente!');
}

// Inicializar la aplicación
initializeApp();
// Inserta una flor decorativa al inicio de cada sección automáticamente
    document.addEventListener('DOMContentLoaded', function () {
        const flowerHTML = `
        <div class="flower flower-small">
            <div class="petal petal1"></div>
            <div class="petal petal2"></div>
            <div class="petal petal3"></div>
            <div class="petal petal4"></div>
            <div class="petal petal5"></div>
            <div class="petal petal6"></div>
            <div class="petal petal7"></div>
            <div class="petal petal8"></div>
            <div class="center"></div>
        </div>
        `;
        document.querySelectorAll('section .container').forEach(container => {
            container.insertAdjacentHTML('afterbegin', flowerHTML);
        });
    });

  // Preloader para la página 
  window.addEventListener('load', function() {
    setTimeout(function() {
      document.getElementById('preloader').style.display = 'none';
      document.body.style.overflow = 'auto';
      // Reproducir audio de YouTube después del preloader
      insertarIframeYoutube();
    }, 3000);
  });

  // Función para insertar el iframe de YouTube oculto
  function insertarIframeYoutube() {
    const iframe = document.createElement('iframe');
    iframe.width = "0";
    iframe.height = "0";
    iframe.style.display = "none"; // Oculta el iframe completamente
    iframe.src = "https://www.youtube.com/embed/zABLecsR5UE?autoplay=1";
    iframe.frameBorder = "0";
    iframe.allow = "autoplay";
    document.body.appendChild(iframe);
  }

  // Reemplaza ID_DEL_VIDEO por el ID real del video de YouTube que quieres reproducir
