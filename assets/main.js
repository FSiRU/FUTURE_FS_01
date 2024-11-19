/*==================== MENU SHOW Y HIDDEN ====================*/


/*===== MENU SHOW =====*/
/* Validate if constant exists */


/*===== MENU HIDDEN =====*/
/* Validate if constant exists */


/*==================== REMOVE MENU MOBILE ====================*/


/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName('skills__content'),
      skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills(){
    let itemsClass = this.parentNode.className

    for(i = 0; i < skillsContent.length; i++){
        skillsContent[i].className = 'skills__content skills__close'
    }
    if(itemsClass === 'skills__content skills__close'){
        this.parentNode.className = 'skills__content skills__open'
    }
}

skillsHeader.forEach((el) =>{
    el.addEventListener ('click', toggleSkills)
})


/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('qualification__active')
        })
        target.classList.add('qualification__active')

        tab.forEach(tab =>{
            tab.classList.remove('qualification__active')
        })
        tab.classList.add('qualification__active')
    })
})


// ==================== SERVICES MODAL ====================
document.addEventListener('DOMContentLoaded', () => {
    const modalViews = document.querySelectorAll('.services__modal');
    const modalButtons = document.querySelectorAll('.services__button');
    const modalCloseButtons = document.querySelectorAll('.services__modal-close');

    if (modalViews.length && modalButtons.length && modalCloseButtons.length) {
        // Function to open a specific modal
        const openModal = (index) => {
            modalViews[index]?.classList.add('active-modal');
        };

        // Function to close all modals
        const closeModal = () => {
            modalViews.forEach((modalView) => {
                modalView.classList.remove('active-modal');
            });
        };

        // Attach click events to "View More" buttons
        modalButtons.forEach((button, index) => {
            button.addEventListener('click', () => openModal(index));
        });

        // Attach click events to close buttons
        modalCloseButtons.forEach((closeButton) => {
            closeButton.addEventListener('click', closeModal);
        });
    } else {
        console.error('Modal elements not found. Check your HTML structure.');
    }
});



/*==================== PORTFOLIO SWIPER  ====================*/


/*==================== TESTIMONIAL ====================*/


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/


/*==================== CHANGE BACKGROUND HEADER ====================*/ 


/*==================== SHOW SCROLL UP ====================*/ 


/*==================== DARK LIGHT THEME ====================*/ 
