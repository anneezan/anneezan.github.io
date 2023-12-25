// $(".accordion-item").getElementsByClassName("accordion-item__content")[0].classList.toggle('accordion-item__dropdown');

const elementsWithClass = document.querySelectorAll('.accordion-item');

// Toggle a class on the found elements
elementsWithClass.forEach(element => {
    element.addEventListener('click', () => {
        // Toggle the class 'highlight' on the clicked element
        element.getElementsByClassName("accordion-item__content")[0].classList.toggle('accordion-item__dropdown');
    });
});
