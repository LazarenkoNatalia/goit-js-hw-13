import Accordion from 'accordion-js';
// import 'accordion-js/dist/accordion.min.css';

//  new Accordion('.accordion-container');

new Accordion('.faq-accord-container', {
  duration: 1200,
  showMultiple: true,
  
  onOpen: function(currentElement) {
    console.log(currentElement);
    const icon = currentElement.querySelector('.arrow-up');
    console.log(icon);
    icon.style.transform='rotate(0.5turn)';
  },
onClose: function(currentElement) {
    console.log(currentElement);
    const icon = currentElement.querySelector('.arrow-up');
    console.log(icon);
   icon.style.transform='none';
  }

});

// const accordion = new Accordion('.container-first');
// accordion.detachEvents();