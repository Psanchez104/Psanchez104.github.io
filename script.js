const landing = document.getElementById('landing');
const headshot = document.getElementById('headshot')
// const showcase = document.getElementById('landing');

const headshotOptions = {
    rootMargin: "-300px 0px 0px 0px"
}

const headshotObserver = new IntersectionObserver(function (entries, headshotObserver) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            headshot.classList.add('slideIn');
        }
    });
}, headshotOptions);

headshotObserver.observe(landing);