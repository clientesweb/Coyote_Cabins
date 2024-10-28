document.addEventListener('DOMContentLoaded', function() {
    // Preloader
    const preloader = document.getElementById('preloader');
    window.addEventListener('load', function() {
        preloader.classList.add('hidden');
    });

    // Top Banner Messages
    const bannerMessages = document.querySelectorAll('.banner-message');
    let currentMessage = 0;

    function rotateBannerMessages() {
        bannerMessages[currentMessage].classList.add('hidden');
        currentMessage = (currentMessage + 1) % bannerMessages.length;
        bannerMessages[currentMessage].classList.remove('hidden');
    }

    setInterval(rotateBannerMessages, 5000);

    // Mobile Navigation Toggle
    const menuToggle = document.getElementById('menu-toggle');
    const mainNav = document.getElementById('main-nav');

    menuToggle.addEventListener('click', function() {
        mainNav.classList.toggle('hidden');
        mainNav.classList.toggle('show');
    });

    // Hero Slider
    const heroSlider = document.getElementById('hero-slider');
    const heroImages = [
        'https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        'https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    ];
    let currentHeroImage = 0;

    function changeHeroImage() {
        heroSlider.style.backgroundImage = `url('${heroImages[currentHeroImage]}')`;
        heroSlider.style.backgroundSize = 'cover';
        heroSlider.style.backgroundPosition = 'center';
        currentHeroImage = (currentHeroImage + 1) % heroImages.length;
    }

    changeHeroImage(); // Set initial image
    setInterval(changeHeroImage, 5000); // Change image every 5 seconds

    // Función para crear un slider
    function createSlider(containerId, images) {
        const container = document.getElementById(containerId);
        images.forEach((src, index) => {
            const img = document.createElement('img');
            img.src = src;
            img.alt = `Slide ${index + 1}`;
            img.className = index === 0 ? 'active' : '';
            container.appendChild(img);
        });
    }

    // Función para rotar imágenes en un slider
    function rotateSliderImages(containerId) {
        const container = document.getElementById(containerId);
        const images = container.querySelectorAll('img');
        let currentImage = 0;

        setInterval(() => {
            images[currentImage].classList.remove('active');
            currentImage = (currentImage + 1) % images.length;
            images[currentImage].classList.add('active');
        }, 5000);
    }

    // Nosotros Slider
    const nosotrosImages = [
        'https://images.unsplash.com/photo-1542718610-a1d656d1884c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1558&q=80',
        'https://images.unsplash.com/photo-1482192505345-5655af888cc4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80',
        'https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80',
        'https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1530&q=80'
    ];
    createSlider('nosotros-slider', nosotrosImages);
    rotateSliderImages('nosotros-slider');

    // Gallery
    const galleryGrid = document.getElementById('gallery-grid');
    const galleryTypes = ['A', 'B', 'C', 'D'];
    const galleryButtons = document.querySelectorAll('#galeria button');

    const galleryImages = {
        A: [
            'https://images.unsplash.com/photo-1551524559-8af4e6624178?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1526&q=80',
            'https://images.unsplash.com/photo-1604609165678-096d51586ef2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80',
            'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80'
        ],
        B: [
            'https://images.unsplash.com/photo-1542718610-a1d656d1884c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
            'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1558&q=80',
            'https://images.unsplash.com/photo-1482192505345-5655af888cc4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80'
        ],
        C: [
            'https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
            'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
            'https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
        ],
        D: [
            'https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80',
            'https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1530&q=80',
            'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
        ]
    };

    function createGalleryItem(src, type) {
        const item = document.createElement('div');
        item.className = 'relative group gallery-image fade-in-section';
        item.innerHTML = `
            <img src="${src}" alt="Cabaña Tipo ${type}" class="w-full h-auto rounded-lg shadow-md transition duration-300 group-hover:opacity-75">
            <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <button class="bg-white text-gray-800 font-semibold py-2 px-4 rounded shadow view-details" data-type="${type}">Ver Detalles</button>
            </div>
        `;
        return item;
    }

    function populateGallery(type) {
        galleryGrid.innerHTML = '';
        galleryImages[type].forEach((src) => {
            galleryGrid.appendChild(createGalleryItem(src, type));
        });
        initFadeInSections();
    }

    galleryButtons.forEach(button => {
        button.addEventListener('click', () => {
            galleryButtons.forEach(btn => {
                btn.classList.remove('bg-gray-800', 'text-white');
                btn.classList.add('bg-gray-200', 'text-gray-800');
            });
            button.classList.remove('bg-gray-200', 'text-gray-800');
            button.classList.add('bg-gray-800', 'text-white');
            populateGallery(button.dataset.type);
        });
    });

    populateGallery('A'); // Initial population

    // Projects
    const projectsGrid = document.querySelector('#proyectos .grid');
    const projectImages = [
        'https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwa

G90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        'https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        'https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80',
        'https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1530&q=80',
        'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    ];

    projectImages.forEach((src, index) => {
        const projectItem = document.createElement('div');
        projectItem.className = 'relative group fade-in-section';
        projectItem.innerHTML = `
            <img src="${src}" alt="Proyecto ${index + 1}" class="w-full h-auto rounded-lg shadow-md transition duration-300 group-hover:opacity-75">
            <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <button class="bg-white text-gray-800 font-semibold py-2 px-4 rounded shadow view-project" data-project="${index}">Ver Proyecto</button>
            </div>
        `;
        projectsGrid.appendChild(projectItem);
    });

    // Modal
    const modal = document.getElementById('modal');
    const modalSlider = document.getElementById('modal-slider');
    const closeModal = document.getElementById('close-modal');

    function openModal(images) {
        modalSlider.innerHTML = '';
        const sliderContainer = createSlider(modalSlider, images);
        modal.classList.remove('hidden');

        let currentSlide = 0;
        function slideModal() {
            currentSlide = (currentSlide + 1) % images.length;
            sliderContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
        }

        const intervalId = setInterval(slideModal, 5000);

        closeModal.onclick = () => {
            modal.classList.add('hidden');
            clearInterval(intervalId);
        };

        modal.onclick = (e) => {
            if (e.target === modal) {
                modal.classList.add('hidden');
                clearInterval(intervalId);
            }
        };
    }

    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('view-details')) {
            const type = e.target.dataset.type;
            openModal(galleryImages[type]);
        } else if (e.target.classList.contains('view-project')) {
            const projectIndex = parseInt(e.target.dataset.project);
            openModal([projectImages[projectIndex]]);
        }
    });

    // Contact Form
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Here you would typically send the form data to a server
        alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.');
        contactForm.reset();
    });

    // Smooth Scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Scroll appearance animation
    function initFadeInSections() {
        const faders = document.querySelectorAll('.fade-in-section');
        const appearOptions = {
            threshold: 0.3,
            rootMargin: "0px 0px -100px 0px"
        };

        const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
            entries.forEach(entry => {
                if (!entry.isIntersecting) {
                    return;
                } else {
                    entry.target.classList.add('is-visible');
                    appearOnScroll.unobserve(entry.target);
                }
            });
        }, appearOptions);

        faders.forEach(fader => {
            appearOnScroll.observe(fader);
        });
    }

    initFadeInSections();

    // Instagram embed
    if (window.instgrm) {
        window.instgrm.Embeds.process();
    }
});