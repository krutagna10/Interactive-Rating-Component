'use strict';

const ratings = document.querySelectorAll('.rating-card__rating');
const ratingLabels = document.querySelectorAll('.rating-card__label');
const submitButton = document.querySelector('.rating-card__submit-btn');
const ratingComponent = document.querySelector(".rating-card-section");
const input = document.querySelector('.input');
const rateAgainButton = document.querySelector('.rate-again');
const errorMessage = document.querySelector('.rating-card__error-message');

let currentActive = -1;
let userRating = 0;

const update = () => {
    ratingLabels.forEach((ratingLabel, index) => {
        if (currentActive === index) {
            ratingLabel.classList.add('active');
            userRating = ratingLabel.textContent;
        } else {
            ratingLabel.classList.remove('active');
        }
    })
}
ratings.forEach((rating, index) => {
    rating.addEventListener('click', () => {
        currentActive = index;
        update();
    })
})


submitButton.addEventListener('click', () => {
    if (userRating === 0) {
        errorMessage.classList.remove('hidden');
    } else {
        ratingComponent.classList.add('ratings-submitted');
        errorMessage.classList.add('hidden');
        input.textContent = userRating;
    }
})
//
rateAgainButton.addEventListener('click', () => {
   ratingComponent.classList.remove('ratings-submitted');
   userRating = 0;
   ratings.forEach((rating, index) => {
       ratingLabels[index].classList.remove('active');
       rating.checked = false;
   });

    errorMessage.classList.add('hidden');
})



