//customer reviews
const reviewsContainer = document.querySelector('.reviews-container')
const customerReview = document.querySelectorAll('.customer-review')

// hamburger button
const toggleButton = document.querySelectorAll('.toggle-button')[0]
const navbarLinks = document.querySelectorAll('.navbar-links')[0]

toggleButton.addEventListener('click', ()=> {
    navbarLinks.classList.toggle('active')
})

//customer reviews
console.log(customerReview)
let index = 0;

let interval = setInterval(run, 3000)

function run() {
    index++
    changeReview()
}

function changeReview() {
    if(index > customerReview.length - 2) {
        index = 0
    } else if (index < 0) {
        index = customerReview.length - 1
    }

    reviewsContainer.style.transform = `translateX(${-index * 18}rem)`
}



