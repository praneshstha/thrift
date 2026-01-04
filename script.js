document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:5000/api/products')
  .then(res => res.json())
  .then(products => {
    const productGrid = document.querySelector('.products-grid');
    productGrid.innerHTML = '';
    products.forEach(p => {
      productGrid.innerHTML += `
        <div class="product">
          <img src="${p.img}" alt="${p.name}">
          <p>${p.name}</p>
        </div>
      `;
    });
  })
  .catch(err => console.log(err));


const logoSubtitle = document.getElementById('logo-subtitle');
const logoTexts = ["Welcome to our store 💚", "Shop our latest collection"];
let logoIndex = 0;

setInterval(() => {
    
    logoSubtitle.style.opacity = 0;

    setTimeout(() => {
        
        logoSubtitle.textContent = logoTexts[logoIndex];
        
        logoSubtitle.style.opacity = 1;
        
        logoIndex = (logoIndex + 1) % logoTexts.length;
    }, 500);
}, 3000);

    const shopBtn = document.querySelector('.btn');
    const highlightsSection = document.querySelector('.highlights');
    if (shopBtn && highlightsSection) {
        shopBtn.addEventListener('click', e => {
            e.preventDefault();
            highlightsSection.scrollIntoView({ behavior: 'smooth' });
        });
    }

    
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});


const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + 150; 
    sections.forEach(section => {
        if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
            const id = section.getAttribute('id');
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${id}`) link.classList.add('active');
            });
        }
    });
});


window.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    const heroText = document.querySelector('.hero-text');

    
    if (header) header.classList.add('show');

    
    if (heroText) {
        heroText.style.opacity = 0;
        heroText.style.transform = 'translateY(20px)';
        setTimeout(() => {
            heroText.style.transition = 'all 1s ease-out';
            heroText.style.opacity = 1;
            heroText.style.transform = 'translateY(0)';
        }, 300);
    }
});


const highlights = document.querySelectorAll('.highlight');

highlights.forEach((card, index) => {
    
    card.style.opacity = 0;
    card.style.transform = 'translateY(20px)';

    
    setTimeout(() => {
        card.style.transition = 'all 0.6s ease-out';
        card.style.opacity = 1;
        card.style.transform = 'translateY(0)';
    }, index * 150);

    
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.05)';
        card.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)';
        card.style.transition = 'all 0.3s ease';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
        card.style.boxShadow = '0 5px 15px rgba(0,0,0,0.05)';
    });
});


const products = document.querySelectorAll('.product');

products.forEach(prod => {
    
    prod.addEventListener('mouseenter', () => {
        prod.style.transform = 'scale(1.03)';
        prod.style.transition = 'all 0.3s ease';
    });
    prod.addEventListener('mouseleave', () => {
        prod.style.transform = 'scale(1)';
    });

    
    prod.addEventListener('click', () => {
        const prodName = prod.querySelector('p').innerText;
        const prodImg = prod.querySelector('img').src;

        const modal = document.createElement('div');
        modal.classList.add('modal');
        modal.innerHTML = `
            <div class="modal-content">
                <span class="modal-close">&times;</span>
                <img src="${prodImg}" alt="${prodName}">
                <h2>${prodName}</h2>
            </div>
        `;
        document.body.appendChild(modal);

        const modalContent = modal.querySelector('.modal-content');
        modalContent.style.transform = 'scale(0.8)';
        modalContent.style.opacity = 0;
        setTimeout(() => {
            modalContent.style.transition = 'all 0.5s ease-out';
            modalContent.style.transform = 'scale(1)';
            modalContent.style.opacity = 1;
        }, 50);

        
        modal.querySelector('.modal-close').addEventListener('click', () => modal.remove());
        modal.addEventListener('click', e => { if (e.target === modal) modal.remove(); });
    });
});


const revealSections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
    const triggerBottom = window.innerHeight / 1.1;
    revealSections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < triggerBottom) {
            section.style.opacity = 1;
            section.style.transform = 'translateY(0)';
            section.style.transition = 'all 0.8s ease-out';
        } else {
            section.style.opacity = 0;
            section.style.transform = 'translateY(20px)';
        }
    });
});