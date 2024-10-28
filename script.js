document.addEventListener('DOMContentLoaded', function() {
    // Top Banner Messages
    const bannerMessages = document.querySelectorAll('.banner-message');
    let currentMessage = 0;

    function rotateBannerMessages() {
        bannerMessages[currentMessage].classList.add('hidden');
        currentMessage = (currentMessage + 1) % bannerMessages.length;
        bannerMessages[currentMessage].classList.remove('hidden');
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
        'https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        'https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
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
        'https://images.unsplash.com/photo-1542718610-a1d656d1884c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=958&q=80',
        'https://images.unsplash.com/photo-1482192505345-5655af888cc4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1228&q=80'
    ];

    const sliderContainer = document.createElement('div');
    sliderContainer.className = 'slider-container';
    nosotrosImages.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = 'Nosotros Image';
        sliderContainer.appendChild(img);
    });
    nosotrosSlider.appendChild(sliderContainer);

    let currentNosotrosImage = 0;
    setInterval(() => {
        currentNosotrosImage = (currentNosotrosImage + 1) % nosotrosImages.length;
        sliderContainer.style.transform = `translateX(-${currentNosotrosImage * 100}%)`;
    }, 5000);

    // Gallery
    const galleryGrid = document.getElementById('gallery-grid');
    const galleryImages = [
        { src: 'https://images.unsplash.com/photo-1604868189265-219ba7bf7ea3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80', type: 'A' },
        { src: 'https://images.unsplash.com/photo-1604868189278-e70c35ba14b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80', type: 'B' },
        { src: 'https://images.unsplash.com/photo-1604868189536-0e9a4f0b1b1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80', type: 'C' },
        { src: 'https://images.unsplash.com/photo-1604868189612-5e7c2b3f4e7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80', type: 'D' },
        { src: 'https://images.unsplash.com/photo-1604868189654-7e7a0f836300?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80', type: 'A' },
        { src: 'https://images.unsplash.com/photo-1604868189703-9e8e0934e0f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80', type: 'B' }
    ];

    galleryImages.forEach(image => {
        const div = document.createElement('div');
        div.className = 'relative overflow-hidden rounded-lg shadow-lg gallery-image';
        div.setAttribute('data-type', image.type);

        const img = document.createElement('img');
        img.src = image.src;
        img.alt = `Cabaña Tipo ${image.type}`;
        img.className = 'w-full h-64 object-cover';

        const overlay = document.createElement('div');
        overlay.className = 'absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300';

        const button = document.createElement('button');
        button.textContent = 'Ver más';
        button.className = 'bg-white text-gray-800 font-bold py-2 px-4 rounded hover:bg-gray-200 transition duration-300';
        button.addEventListener('click', () => openModal(image));

        overlay.appendChild(button);
        div.appendChild(img);
        div.appendChild(overlay);
        galleryGrid.appendChild(div);
    });

    const filterButtons = document.querySelectorAll('#galeria button[data-type]');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const type = button.getAttribute('data-type');
            filterGallery(type);
            filterButtons.forEach(btn => btn.classList.remove('bg-gray-800', 'text-white'));
            button.classList.add('bg-gray-800', 'text-white');
        });
    });

    function filterGallery(type) {
        const images = document.querySelectorAll('.gallery-image');
        images.forEach(image => {
            if (type === 'A' || image.getAttribute('data-type') === type)
                image.style.display = 'block';
            else
                image.style.display = 'none';
        });
    }

    // Projects
    const projectsSlider = document.getElementById('proyectos-slider');
    const projectImages = [
        { src: 'https://images.unsplash.com/photo-1604868189626-7e0022267cc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80', title: 'Proyecto 1', description: 'Cabaña de lujo con vista al lago' },
        { src: 'https://images.unsplash.com/photo-1604868189650-e9e5d8f4a4b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80', title: 'Proyecto 2', description: 'Cabaña familiar en el bosque' },
        { src: 'https://images.unsplash.com/photo-1604868189679-e9e5d8f4a4b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80', title: 'Proyecto 3', description: 'Cabaña moderna con terraza panorámica' }
    ];

    projectImages.forEach(project => {
        const div = document.createElement('div');
        div.className = 'proyecto-card bg-white rounded-lg shadow-lg overflow-hidden';

        const img = document.createElement('img');
        img.src = project.src;
        img.alt = project.title;
        img.className = 'w-full h-48 object-cover';

        const content = document.createElement('div');
        content.className = 'p-4';

        const title = document.createElement('h3');
        title.textContent = project.title;
        title.className = 'text-xl font-bold mb-2';

        const description = document.createElement('p');
        description.textContent = project.description;
        description.className = 'text-gray-600';

        content.appendChild(title);
        content.appendChild(description);
        div.appendChild(img);
        div.appendChild(content);
        projectsSlider.appendChild(div);
    });

    // Testimonials
    const testimonialSection = document.querySelector('#testimonios .grid');
    const testimonials = [
        { name: 'Juan Pérez', rating: 5, text: 'Excelente servicio y calidad en la construcción de nuestra cabaña. ¡Superó nuestras expectativas!' },
        { name: 'María González', rating: 4, text: 'Muy satisfecha con el resultado final. El equipo fue profesional y atento a nuestras necesidades.' },
        { name: 'Carlos Rodríguez', rating: 5, text: 'La atención al detalle en el diseño y la construcción es impresionante. Totalmente recomendado.' }
    ];

    testimonials.forEach(testimonial => {
        const card = document.createElement('div');
        card.className = 'testimonial-card';

        const content = `
            <div class="flex items-center mb-4">
                <div class="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                    <h3 class="font-bold">${testimonial.name}</h3>
                    <div class="star-rating">${'★'.repeat(testimonial.rating)}${'☆'.repeat(5 - testimonial.rating)}</div>
                </div>
            </div>
            <p class="text-gray-600">"${testimonial.text}"</p>
        `;

        card.innerHTML = content;
        testimonialSection.appendChild(card);
    });

    // FAQs
    const faqSection = document.querySelector('#faqs .max-w-3xl');
    const faqs = [
        { question: '¿Cuánto tiempo toma construir una cabaña?', answer: 'El tiempo de construcción varía según el tamaño y la complejidad del diseño, pero generalmente oscila entre 2 y 4 meses.' },
        { question: '¿Ofrecen diseños personalizados?', answer: 'Sí, trabajamos estrechamente con nuestros clientes para crear diseños personalizados que se adapten a sus necesidades y preferencias.' },
        { question: '¿Qué tipos de materiales utilizan?', answer: 'Utilizamos materiales de alta calidad, principalmente madera tratada y otros materiales ecológicos y duraderos.' },
        { question: '¿Proporcionan servicios de mantenimiento post-construcción?', answer: 'Sí, ofrecemos servicios de mantenimiento y reparación para asegurar que su cabaña se mantenga en excelentes condiciones a lo largo del tiempo.' }
    ];

    faqs.forEach((faq, index) => {
        const faqItem = document.createElement('div');
        faqItem.className = 'faq-item';
        faqItem.innerHTML = `
            <div class="faq-question">
                <h3 class="text-lg font-semibold">${faq.question}</h3>
                <span class="text-2xl">+</span>
            </div>
            <div class="faq-answer">
                <p class="py-2">${faq.answer}</p>
            </div>
        `;
        faqSection.appendChild(faqItem);

        const question = faqItem.querySelector('.faq-question');
        const answer = faqItem.querySelector('.faq-answer');
        const icon = question.querySelector('span');

        question.addEventListener('click', () => {
            answer.classList.toggle('show');
            icon.textContent = answer.classList.contains('show') ? '−' : '+';
        });
    });

    // Modal
    const modal = document.getElementById('modal');
    const closeModal = document.getElementById('close-modal');
    const modalSlider = document.getElementById('modal-slider');
    const modalDescription = document.getElementById('modal-description');

    function openModal(image) {
        modalSlider.innerHTML = '';
        const sliderContainer = document.createElement('div');
        sliderContainer.className = 'slider-container';

        // Add multiple images to the modal slider
        const modalImages = [
            image.src,
            'https://images.unsplash.com/photo-1604868189626-7e0022267cc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
            'https://images.unsplash.com/photo-1604868189650-e9e5d8f4a4b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
        ];

        modalImages.forEach(src => {
            const img = document.createElement('img');
            img.src = src;
            img.alt = 'Cabaña Image';
            img.className = 'w-full h-auto';
            sliderContainer.appendChild(img);
        });

        modalSlider.appendChild(sliderContainer);

        // Add description
        modalDescription.innerHTML = `
            <p class="text-gray-700">Esta hermosa cabaña tipo ${image.type} ofrece una experiencia única en medio de la naturaleza. 
            Con amplios espacios y acabados de lujo, es perfecta para escapadas familiares o románticas.</p>
            <ul class="mt-4 list-disc list-inside">
                <li>2 habitaciones</li>
                <li>Sala de estar con chimenea</li>
                <li>Cocina completamente equipada</li>
                <li>Terraza con vista panorámica</li>
            </ul>
        `;

        modal.classList.remove('hidden');

        // Initialize slider functionality
        let currentSlide = 0;
        const totalSlides = modalImages.length;

        function showSlide(index) {
            sliderContainer.style.transform = `translateX(-${index * 100}%)`;
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % totalSlides;
            showSlide(currentSlide);
        }

        function prevSlide() {
            currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
            showSlide(currentSlide);
        }

        // Add navigation buttons
        const prevButton = document.createElement('button');
        prevButton.innerHTML = '&#10094;';
        prevButton.className = 'absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full';
        prevButton.addEventListener('click', prevSlide);

        const nextButton = document.createElement('button');
        nextButton.innerHTML = '&#10095;';
        nextButton.className = 'absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full';
        nextButton.addEventListener('click', nextSlide);

        modalSlider.appendChild(prevButton);
        modalSlider.appendChild(nextButton);
    }

    closeModal.addEventListener('click', () => {
        modal.classList.add('hidden');
    });

    // Close modal when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.add('hidden');
        }
    });

    // Scroll Animations
    const fadeElements = document.querySelectorAll('.fade-in-section');

    const fadeIn = (element) => {
        var distInView = element.getBoundingClientRect().top - window.innerHeight + 20;
        if (distInView < 0) {
            element.classList.add('is-visible');
        } else {
            element.classList.remove('is-visible');
        }
    };

    const handleScroll = () => {
        fadeElements.forEach((element) => {
            fadeIn(element);
        });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    // Form Submission
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Here you would typically send the form data to a server
        alert('¡Gracias por tu mensaje! Te contactaremos pronto.');
        contactForm.reset();
    });

    // Load Instagram posts
    window.instgrm.Embeds.process();
});