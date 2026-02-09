document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const menuLinks = document.querySelectorAll('.mobile-menu a');

    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            
            // Animação básica do ícone hamburger (opcional, pode ser feito no CSS)
            const spans = menuToggle.querySelectorAll('span');
            // Aqui poderíamos adicionar classes para transformar em 'X', 
            // mas por enquanto apenas toggle do menu
        });

        // Fechar menu ao clicar em um link
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
            });
        });
    }

    // 2. FAQ Accordion
    const accordions = document.querySelectorAll('.accordion-header');

    accordions.forEach(acc => {
        acc.addEventListener('click', function() {
            // Toggle 'active' class para o botão
            this.classList.toggle('active');

            // Toggle do painel de conteúdo
            const panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    });

    // 3. Smooth Scroll (para navegadores antigos que não suportam scroll-behavior: smooth)
    // Modern browsers já lidam com isso via CSS, mas isso garante
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Compensar altura do header fixo
                const headerOffset = 70;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

});
