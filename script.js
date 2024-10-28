document.addEventListener('DOMContentLoaded', function() {
    // Top Banner Messages
    const bannerMessages = document.querySelectorAll('.banner-message');
    let currentMessage = 0;

    function rotateBannerMessages() {
        bannerMessages[currentMessage].classList.add('opacity-0');
        setTimeout(() => {
            bannerMessages[currentMessage].classList.add('hidden');
            currentMessage = (currentMessage + 1) % bannerMessages.length;
            bannerMessages[currentMessage].classList.remove('hidden');
            setTimeout(() => {
                bannerMessages[currentMessage].classList.remove('opacity-0');
            }, 50);
        }, 500);
    }

    setInterval(rotateBannerMessages, 5000);

    // Mobile Menu Toggle
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeMenu = document.getElementById('close-menu');

    menuToggle.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('show');
    });

    closeMenu.addEventListener('click', function() {
        mobileMenu.classList.add('hidden');
        mobileMenu.classList.remove('show');
    });

    // Close mobile menu when clicking on a link
    const mobileMenuLinks = mobileMenu.querySelectorAll('a');
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.add('hidden');
            mobileMenu.classList.remove('show');
        });
    });

    // Hero Slider
    const heroSlider = document.getElementById('hero-slider');
    const heroImages = [
        'hero.png',
        'hero1.png',
        'hero2.png'
    ];

    heroImages.forEach((src, index) => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = `Hero Image ${index + 1}`;
        img.className = 'absolute inset-0 w-full h-full object-cover transition-opacity duration-1000';
        img.style.opacity = index === 0 ? '1' : '0';
        heroSlider.appendChild(img);
    });

    let currentHeroImage = 0;
    setInterval(() => {
        const images = heroSlider.querySelectorAll('img');
        images[currentHeroImage].style.opacity = '0';
        currentHeroImage = (currentHeroImage + 1) % images.length;
        images[currentHeroImage].style.opacity = '1';
    }, 5000);

    // Nosotros Slider
    const nosotrosSlider = document.getElementById('nosotros-slider');
    const nosotrosImages = [
        'nosotros1.jpg',
        'nosotros2.jpg',
        'nosotros3.jpg'
    ];

    const sliderContainer = document.createElement('div');
    sliderContainer.className = 'slider-container';
    nosotrosSlider.appendChild(sliderContainer);

    nosotrosImages.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = 'Nosotros Image';
        img.className = 'w-full h-full object-cover';
        sliderContainer.appendChild(img);
    });

    let currentNosotrosImage = 0;
    const totalNosotrosImages = nosotrosImages.length;

    function moveNosotrosSlider() {
        currentNosotrosImage = (currentNosotrosImage + 1) % totalNosotrosImages;
        sliderContainer.style.transform = `translateX(-${currentNosotrosImage * 100}%)`;
    }

    setInterval(moveNosotrosSlider, 5000);

    // Gallery Filter
    const galleryGrid = document.getElementById('gallery-grid');
    const filterButtons = document.querySelectorAll('[data-type]');

    const galleryItems = [
        { type: 'A', src: 'cabin-a1.jpg', description: 'Cabaña Tipo A - Modelo Pino' },
        { type: 'A', src: 'cabin-a2.jpg', description: 'Cabaña Tipo A - Modelo Roble' },
        { type: 'B', src: 'cabin-b1.jpg', description: 'Cabaña Tipo B - Modelo Cedro' },
        { type: 'B', src: 'cabin-b2.jpg', description: 'Cabaña Tipo B - Modelo Abeto' },
        { type: 'C', src: 'cabin-c1.jpg', description: 'Cabaña Tipo C - Modelo Secuoya' },
        { type: 'C', src: 'cabin-c2.jpg', description: 'Cabaña Tipo C - Modelo Arce' },
        { type: 'D', src: 'cabin-d1.jpg', description: 'Cabaña Tipo D - Modelo Nogal' },
        { type: 'D', src: 'cabin-d2.jpg', description: 'Cabaña Tipo D - Modelo Caoba' },
    ];

    function createGalleryItem(item) {
        const div = document.createElement('div');
        div.className = 'relative overflow-hidden rounded-lg shadow-lg group cursor-pointer';
        div.innerHTML = `
            <img src="${item.src}" alt="${item.description}" class="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110">
            <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p class="text-white text-center p-4">${item.description}</p>
            </div>
        `;
        div.addEventListener('click', () => openModal(item));
        return div;
    }

    function filterGallery(type) {
        galleryGrid.innerHTML = '';
        const filteredItems = type === 'A' ? galleryItems : galleryItems.filter(item => item.type === type);
        filteredItems.forEach(item => {
            galleryGrid.appendChild(createGalleryItem(item));
        });
    }

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('bg-gray-800', 'text-white'));
            button.classList.add('bg-gray-800', 'text-white');
            filterGallery(button.dataset.type);
        });
    });

    filterGallery('A');

    // Modal
    const modal = document.getElementById('modal');
    const closeModal = document.getElementById('close-modal');
    const modalSlider = document.getElementById('modal-slider');
    const modalDescription = document.getElementById('modal-description');

    function openModal(item) {
        modalSlider.innerHTML = `<img src="${item.src}" alt="${item.description}" class="w-full h-64 object-cover">`;
        modalDescription.textContent = item.description;
        modal.classList.remove('hidden');
    }

    closeModal.addEventListener('click', () => {
        modal.classList.add('hidden');
    });

    // Proyectos Slider
    const proyectosSlider = document.getElementById('proyectos-slider');
    const proyectos = [
        { name: 'Proyecto 1', location: 'Ciudad de México', image: 'proyecto1.jpg' },
        { name: 'Proyecto 2', location: 'Guadalajara', image: 'proyecto2.jpg' },
        { name: 'Proyecto 3', location: 'Monterrey', image: 'proyecto3.jpg' },
        { name: 'Proyecto 4', location: 'Cancún', image: 'proyecto4.jpg' },
    ];

    proyectos.forEach(proyecto => {
        const card = document.createElement('div');
        card.className = 'flex-shrink-0 w-80 bg-white rounded-lg shadow-md overflow-hidden';
        card.innerHTML = `
            <img src="${proyecto.image}" alt="${proyecto.name}" class="w-full h-48 object-cover">
            <div class="p-4">
                <h3 class="font-semibold text-lg mb-2">${proyecto.name}</h3>
                <p class="text-gray-600">${proyecto.location}</p>
            </div>
        `;
        proyectosSlider.appendChild(card);
    });

    // Testimonios
    const testimoniosContainer = document.querySelector('#testimonios .grid');
    const testimonios = [
        { name: 'Juan Pérez', text: 'Excelente servicio y calidad en la construcción de nuestra cabaña. ¡Superó nuestras expectativas!', avatar: 'avatar1.jpg' },
        { name: 'María González', text: 'El equipo de Coyote Cabins fue muy profesional y entregó nuestro proyecto en tiempo récord.', avatar: 'avatar2.jpg' },
        { name: 'Carlos Rodríguez', text: 'Nuestra cabaña es hermosa y funcional. Gracias por hacer realidad nuestro sueño.', avatar: 'avatar3.jpg' },
    ];

    testimonios.forEach(testimonio => {
        const card = document.createElement('div');
        card.className = '
        bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center animate-fade-in-up';
        card.innerHTML = `
            <img src="${testimonio.avatar}" alt="${testimonio.name}" class="w-20 h-20 rounded-full mb-4">
            <p class="text-gray-600 mb-4">"${testimonio.text}"</p>
            <h3 class="font-semibold">${testimonio.name}</h3>
        `;
        testimoniosContainer.appendChild(card);
    });

    // FAQs
    const faqsContainer = document.querySelector('#faqs .max-w-3xl');
    const faqs = [
        { question: '¿Cuánto tiempo toma construir una cabaña?', answer: 'El tiempo de construcción varía según el modelo y tamaño, pero generalmente toma entre 4 a 8 semanas.' },
        { question: '¿Ofrecen servicios de diseño personalizado?', answer: 'Sí, ofrecemos servicios de diseño personalizado para adaptar nuestras cabañas a sus necesidades específicas.' },
        { question: '¿Cuál es la garantía de sus cabañas?', answer: 'Ofrecemos una garantía de 5 años en la estructura y 2 años en acabados e instalaciones.' },
    ];

    faqs.forEach((faq, index) => {
        const item = document.createElement('div');
        item.className = 'mb-4 animate-fade-in-up';
        item.style.animationDelay = `${index * 0.1}s`;
        item.innerHTML = `
            <h3 class="font-semibold mb-2">${faq.question}</h3>
            <p class="text-gray-600">${faq.answer}</p>
        `;
        faqsContainer.appendChild(item);
    });

    // Scroll Animation
    const fadeElems = document.querySelectorAll('.animate-fade-in-up, .animate-fade-in-down, .animate-fade-in-left, .animate-fade-in-right');

    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    fadeElems.forEach(elem => {
        elem.style.animationPlayState = 'paused';
        observer.observe(elem);
    });

    // Form Submission
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Here you would typically send the form data to your server
        alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.');
        contactForm.reset();
    });
});