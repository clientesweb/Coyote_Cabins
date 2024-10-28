document.addEventListener('DOMContentLoaded', function() {
    // Preloader
    const preloader = document.getElementById('preloader');
    
    function hidePreloader() {
        preloader.classList.add('hidden');
    }

    // Simulate loading time (remove this in production)
    setTimeout(hidePreloader, 2000);

    // Hide preloader when the page is fully loaded
    window.addEventListener('load', hidePreloader);

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

    if (nosotrosSlider) {
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
    }

    // Gallery Filter
    const galleryGrid = document.getElementById('gallery-grid');
    const filterButtons = document.querySelectorAll('.filter-btn');

    const galleryItems = [
        { type: 'A', src: 'cabin-a1.jpg', description: 'Cabaña Tipo A - Modelo Pino', images: ['cabin-a1.jpg', 'cabin-a1-2.jpg', 'cabin-a1-3.jpg'] },
        { type: 'A', src: 'cabin-a2.jpg', description: 'Cabaña Tipo A - Modelo Roble', images: ['cabin-a2.jpg', 'cabin-a2-2.jpg', 'cabin-a2-3.jpg'] },
        { type: 'B', src: 'cabin-b1.jpg', description: 'Cabaña Tipo B - Modelo Cedro', images: ['cabin-b1.jpg', 'cabin-b1-2.jpg', 'cabin-b1-3.jpg'] },
        { type: 'B', src: 'cabin-b2.jpg', description: 'Cabaña Tipo B - Modelo Abeto', images: ['cabin-b2.jpg', 'cabin-b2-2.jpg', 'cabin-b2-3.jpg'] },
        { type: 'C', src: 'cabin-c1.jpg', description: 'Cabaña Tipo C - Modelo Secuoya', images: ['cabin-c1.jpg', 'cabin-c1-2.jpg', 'cabin-c1-3.jpg'] },
        { type: 'C', src: 'cabin-c2.jpg', description: 'Cabaña Tipo C - Modelo Arce', images: ['cabin-c2.jpg', 'cabin-c2-2.jpg', 'cabin-c2-3.jpg'] },
        { type: 'D', src: 'cabin-d1.jpg', description: 'Cabaña Tipo D - Modelo Nogal', images: ['cabin-d1.jpg', 'cabin-d1-2.jpg', 'cabin-d1-3.jpg'] },
        { type: 'D', src: 'cabin-d2.jpg', description: 'Cabaña Tipo D - Modelo Caoba', images: ['cabin-d2.jpg', 'cabin-d2-2.jpg', 'cabin-d2-3.jpg'] },
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
        div.addEventListener('click', () => openGalleryModal(item));
        return div;
    }

    function filterGallery(type) {
        if (galleryGrid) {
            galleryGrid.innerHTML = '';
            const filteredItems = type === 'all' ? galleryItems : galleryItems.filter(item => item.type === type);
            filteredItems.forEach(item => {
                galleryGrid.appendChild(createGalleryItem(item));
            });
        }
    }

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('bg-gray-800', 'text-white'));
            button.classList.add('bg-gray-800', 'text-white');
            filterGallery(button.dataset.filter);
        });
    });

    filterGallery('all');

    // Gallery Modal
    const galleryModal = document.getElementById('gallery-modal');
    const galleryModalSlider = document.getElementById('gallery-modal-slider');
    const galleryModalDescription = document.getElementById('gallery-modal-description');
    const closeGalleryModal = document.getElementById('close-gallery-modal');
    const galleryModalPrev = document.getElementById('gallery-modal-prev');
    const galleryModalNext = document.getElementById('gallery-modal-next');

    let currentGalleryModalImage = 0;
    let currentGalleryItem = null;

    function openGalleryModal(item) {
        currentGalleryItem = item;
        currentGalleryModalImage = 0;
        updateGalleryModal();
        galleryModal.classList.remove('hidden');
    }

    function updateGalleryModal() {
        galleryModalSlider.innerHTML = `<img src="${currentGalleryItem.images[currentGalleryModalImage]}" alt="${currentGalleryItem.description}" class="w-full h-full object-cover">`;
        galleryModalDescription.textContent = currentGalleryItem.description;
    }

    closeGalleryModal.addEventListener('click', () => {
        galleryModal.classList.add('hidden');
    });

    galleryModalPrev.addEventListener('click', () => {
        currentGalleryModalImage = (currentGalleryModalImage - 1 + currentGalleryItem.images.length) % currentGalleryItem.images.length;
        updateGalleryModal();
    });

    galleryModalNext.addEventListener('click', () => {
        currentGalleryModalImage = (currentGalleryModalImage + 1) % currentGalleryItem.images.length;
        updateGalleryModal();
    });

    // Proyectos Slider
    const proyectosSlider = document.getElementById('proyectos-slider');
    const scrollLeftBtn = document.getElementById('scroll-left');
    const scrollRightBtn = document.getElementById('scroll-right');
    const proyectos = [
        { name: 'Proyecto 1', location: 'Ciudad de México', image: 'proyecto1.jpg', description: 'Complejo de cabañas ecológicas en el bosque de Chapultepec.', images: ['proyecto1.jpg', 'proyecto1-2.jpg', 'proyecto1-3.jpg'] },
        { name: 'Proyecto 2', location: 'Guadalajara', image: 'proyecto2.jpg', description: 'Resort de cabañas de lujo en las afueras de Guadalajara.', images: ['proyecto2.jpg', 'proyecto2-2.jpg', 'proyecto2-3.jpg'] },
        { name: 'Proyecto 3', location: 'Monterrey', image: 'proyecto3.jpg', description: 'Cabañas de montaña con vista panorámica en Chipinque.', images: ['proyecto3.jpg', 'proyecto3-2.jpg', 'proyecto3-3.jpg'] },
        { name: 'Proyecto 4', location: 'Cancún', image: 'proyecto4.jpg', description: 'Cabañas sobre el agua en la laguna Nichupté.', images: ['proyecto4.jpg', 'proyecto4-2.jpg', 'proyecto4-3.jpg'] },
        { name: 'Proyecto 5', location: 'Puebla', image: 'proyecto5.jpg', description: 'Conjunto de cabañas rústicas en el Parque Nacional Izta-Popo.', images: ['proyecto5.jpg', 'proyecto5-2.jpg', 'proyecto5-3.jpg'] },
        { name: 'Proyecto 6', location: 'Tijuana', image: 'proyecto6.jpg', description: 'Cabañas modernas con vista al océano en Playas de Tijuana.', images: ['proyecto6.jpg', 'proyecto6-2.jpg', 'proyecto6-3.jpg'] },
    ];

    if (proyectosSlider) {
        proyectos.forEach(proyecto => {
            const card = document.createElement('div');
            card.className = 'flex-shrink-0 w-80 bg-white rounded-lg shadow-md overflow-hidden cursor-pointer';
            card.innerHTML = `
                <img src="${proyecto.image}" alt="${proyecto.name}" class="w-full h-48 object-cover">
                <div class="p-4">
                    <h3 class="font-semibold text-lg mb-2">${proyecto.name}</h3>
                    <p class="text-gray-600">${proyecto.location}</p>
                </div>
            `;
            card.addEventListener('click', () => openProjectModal(proyecto));
            proyectosSlider.appendChild(card);
        });
    }

    if (scrollLeftBtn && scrollRightBtn) {
        scrollLeftBtn.addEventListener('click', () => {
            proyectosSlider.scrollBy({ left: -300, behavior: 'smooth' });
        });

        scrollRightBtn.addEventListener('click', () => {
            proyectosSlider.scrollBy({ left: 300, behavior: 'smooth' });
        });
    }

    // Project Modal
    const projectModal = document.getElementById('project-modal');
    const projectModalSlider = document.getElementById('project-modal-slider');
    const projectModalDescription = document.getElementById('project-modal-description');
    const closeProjectModal = document.getElementById('close-project-modal');
    const projectModalPrev = document.getElementById('project-modal-prev');
    const projectModalNext = document.getElementById('project-modal-next');

    let currentProjectModalImage = 0;
    let currentProject = null;

    function openProjectModal(project) {
        currentProject = project;
        currentProjectModalImage = 0;
        updateProjectModal();
        projectModal.classList.remove('hidden');
    }

    function updateProjectModal() {
        projectModalSlider.innerHTML = `<img src="${currentProject.images[currentProjectModalImage]}" alt="${currentProject.name}" class="w-full h-full object-cover">`;
        projectModalDescription.innerHTML = `
            <h3 class="text-xl font-semibold mb-2">${currentProject.name}</h3>
            <p class="text-gray-600 mb-2">${currentProject.location}</p>
            <p>${currentProject.description}</p>
        `;
    }

    closeProjectModal.addEventListener('click', () => {
        projectModal.classList.add('hidden');
    });

    projectModalPrev.addEventListener('click', () => {
        currentProjectModalImage = (currentProjectModalImage - 1 + currentProject.images.length) % currentProject.images.length;
        updateProjectModal();
    });

    projectModalNext.addEventListener('click', () => {
        currentProjectModalImage = (currentProjectModalImage + 1) % currentProject.images.length;
        updateProjectModal();
    });

    // Instagram Reels Slider
    const instagramSlider = document.getElementById('instagram-slider');
    const instagramScrollLeftBtn = document.getElementById('instagram-scroll-left');
    const instagramScrollRightBtn = document.getElementById('instagram-scroll-right');

    if (instagramScrollLeftBtn && instagramScrollRightBtn) {
        instagramScrollLeftBtn.addEventListener('click', () => {
            instagramSlider.scrollBy({ left: -315, behavior: 'smooth' });
        });

        instagramScrollRightBtn.addEventListener('click', () => {
            instagramSlider.scrollBy({ left: 315, behavior: 'smooth' });
        });
    }

    // Testimonios
    const testimoniosSlider = document.getElementById('testimonios-slider');
    const testimoniosScrollLeftBtn = document.getElementById('testimonios-scroll-left');
    const testimoniosScrollRightBtn = document.getElementById('testimonios-scroll-right');
    const testimonios = [
        { name: 'Juan Pérez', text: 'Excelente servicio y calidad en la construcción de nuestra cabaña. ¡Superó nuestras expectativas!', avatar: 'avatar1.jpg', rating: 5 },
        { name: 'María González', text: 'El equipo de Coyote Cabins fue muy profesional y entregó nuestro proyecto en tiempo récord.', avatar: 'avatar2.jpg', rating: 4 },
        { name: 'Carlos Rodríguez', text: 'Nuestra cabaña es hermosa y funcional. Gracias por hacer realidad nuestro sueño.', avatar: 'avatar3.jpg', rating: 5 },
        { name: 'Ana Martínez', text: 'Increíble atención al cliente y un diseño personalizado que se ajustó perfectamente a nuestras necesidades.', avatar: 'avatar4.jpg', rating: 5 },
        { name: 'Roberto Sánchez', text: 'La calidad de los materiales y el acabado de nuestra cabaña superaron nuestras expectativas. Muy recomendable.', avatar: 'avatar5.jpg', rating: 4 },
    ];

    if (testimoniosSlider) {
        const testimoniosContainer = document.createElement('div');
        testimoniosContainer.className = 'flex space-x-6';
        testimoniosSlider.appendChild(testimoniosContainer);

        testimonios.forEach(testimonio => {
            const card = document.createElement('div');
            card.className = 'testimonial-card';
            card.innerHTML = `
                <div class="testimonial-header">
                    <img src="${testimonio.avatar}" alt="${testimonio.name}" class="testimonial-avatar">
                    <div>
                        <p class="testimonial-name">${testimonio.name}</p>
                        <div class="testimonial-rating">
                            ${'★'.repeat(testimonio.rating)}${'☆'.repeat(5 - testimonio.rating)}
                        </div>
                    </div>
                </div>
                <p class="testimonial-text">"${testimonio.text}"</p>
            `;
            testimoniosContainer.appendChild(card);
        });
    }

    if (testimoniosScrollLeftBtn && testimoniosScrollRightBtn) {
        testimoniosScrollLeftBtn.addEventListener('click', () => {
            testimoniosSlider.scrollBy({ left: -300, behavior: 'smooth' });
        });

        testimoniosScrollRightBtn.addEventListener('click', () => {
            testimoniosSlider.scrollBy({ left: 300, behavior: 'smooth' });
        });
    }

    // FAQs
    const faqsContainer = document.querySelector('#faqs .max-w-3xl');
    const faqs = [
        { question: '¿Cuánto tiempo toma construir una cabaña?', answer: 'El tiempo de construcción varía según el modelo y tamaño, pero generalmente toma entre 4 a 8 semanas.' },
        { question: '¿Ofrecen servicios de diseño personalizado?', answer: 'Sí, ofrecemos servicios de diseño personalizado para adaptar nuestras cabañas a sus necesidades específicas.' },
        { question: '¿Cuál es la garantía de sus cabañas?', answer: 'Ofrecemos una garantía de 5 años en la estructura y 2 años en acabados e instalaciones.' },
    ];

    if (faqsContainer) {
        faqs.forEach((faq, index) => {
            const item = document.createElement('div');
            item.className = 'faq-item';
            item.innerHTML = `
                <div class="faq-question">
                    <h3 class="font-semibold">${faq.question}</h3>
                    <i class="fas fa-chevron-down faq-icon"></i>
                </div>
                <div class="faq-answer">
                    <p class="text-gray-600 py-2">${faq.answer}</p>
                </div>
            `;
            faqsContainer.appendChild(item);

            const question = item.querySelector('.faq-question');
            const answer = item.querySelector('.faq-answer');
            const icon = item.querySelector('.faq-icon');

            question.addEventListener('click', () => {
                answer.classList.toggle('open');
                icon.classList.toggle('open');
            });
        });
    }

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
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const formData = new FormData(contactForm);
            fetch(contactForm.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            }).then(response => {
                if (response.ok) {
                    alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.');
                    contactForm.reset();
                } else {
                    alert('Hubo un problema al enviar tu mensaje. Por favor, inténtalo de nuevo más tarde.');
                }
            }).catch(error => {
                alert('Hubo un problema al enviar tu mensaje. Por favor, inténtalo de nuevo más tarde.');
            });
        });
    }
});