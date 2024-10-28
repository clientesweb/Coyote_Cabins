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
        '/placeholder.svg?height=600&width=1200&text=Cabaña+A',
        '/placeholder.svg?height=600&width=1200&text=Cabaña+B',
        '/placeholder.svg?height=600&width=1200&text=Cabaña+C'
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

    // Nosotros Slider
    const nosotrosSlider = document.getElementById('nosotros-slider');
    const nosotrosImages = [
        '/placeholder.svg?height=400&width=600&text=Nosotros+1',
        '/placeholder.svg?height=400&width=600&text=Nosotros+2',
        '/placeholder.svg?height=400&width=600&text=Nosotros+3'
    ];
    let currentNosotrosImage = 0;

    function createNosotrosImage(src, isActive = false) {
        const img = document.createElement('img');
        img.src = src;
        img.alt = 'Nosotros';
        img.className = isActive ? 'active' : '';
        return img;
    }

    nosotrosImages.forEach((src, index) => {
        nosotrosSlider.appendChild(createNosotrosImage(src, index === 0));
    });

    function rotateNosotrosImages() {
        const images = nosotrosSlider.querySelectorAll('img');
        images[currentNosotrosImage].classList.remove('active');
        currentNosotrosImage = (currentNosotrosImage + 1) % images.length;
        images[currentNosotrosImage].classList.add('active');
    }

    setInterval(rotateNosotrosImages, 5000);

    // Gallery
    const galleryGrid = document.getElementById('gallery-grid');
    const galleryTypes = ['A', 'B', 'C', 'D'];
    const galleryButtons = document.querySelectorAll('#galeria button');

    function createGalleryItem(type, index) {
        const item = document.createElement('div');
        item.className = 'relative group gallery-image';
        item.innerHTML = `
            <img src="/placeholder.svg?text=Cabaña${type}${index}&width=400&height=300" alt="Cabaña Tipo ${type}" class="w-full h-auto rounded-lg shadow-md transition duration-300 group-hover:opacity-75">
            <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <button class="bg-white text-amber-600 font-semibold py-2 px-4 rounded shadow view-details">Ver Detalles</button>
            </div>
        `;
        return item;
    }

    function populateGallery(type) {
        galleryGrid.innerHTML = '';
        for (let i = 1; i <= 6; i++) {
            galleryGrid.appendChild(createGalleryItem(type, i));
        }
    }

    galleryButtons.forEach(button => {
        button.addEventListener('click', () => {
            galleryButtons.forEach(btn => btn.classList.remove('bg-amber-600', 'text-white'));
            button.classList.add('bg-amber-600', 'text-white');
            populateGallery(button.dataset.type);
        });
    });

    populateGallery('A'); // Initial population

    // Projects
    const projectsGrid = document.querySelector('#proyectos .grid');
    for (let i = 1; i <= 6; i++) {
        const projectItem = document.createElement('div');
        projectItem.className = 'relative group';
        projectItem.innerHTML = `
            <img src="/placeholder.svg?text=Proyecto${i}&width=400&height=300" alt="Proyecto ${i}" class="w-full h-auto rounded-lg shadow-md transition duration-300 group-hover:opacity-75">
            <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <button class="bg-white text-amber-600 font-semibold py-2 px-4 rounded shadow view-project">Ver Proyecto</button>
            </div>
        `;
        projectsGrid.appendChild(projectItem);
    }

    // Modal
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modal-image');
    const closeModal = document.getElementById('close-modal');

    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('view-details') || e.target.classList.contains('view-project')) {
            const imgSrc = e.target.closest('.group').querySelector('img').src;
            modalImage.src = imgSrc;
            modal.classList.remove('hidden');
        }
    });

    closeModal.addEventListener('click', () => modal.classList.add('hidden'));
    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.classList.add('hidden');
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
});