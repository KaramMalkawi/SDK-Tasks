// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to handle the animation
function handleAnimation() {
    const section = document.getElementById('animationSection');

    if (isInViewport(section)) {
        section.classList.add('animate');
    }
}

// Event listener to trigger the animation on scroll
window.addEventListener('scroll', handleAnimation);

// Initial check in case the section is already in view on page load
handleAnimation();
