const landing = document.getElementById('landing');
const headshot = document.getElementById('headshot')
// const showcase = document.getElementById('landing');

const headshotOptions = {
    rootMargin: "-300px 0px 0px 0px"
}

const headshotObserver = new IntersectionObserver(function (entries, headshotObserver) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            // console.log("over");
            headshot.classList.add('slideIn');
            // headshot.style.webkitAnimationPlayState = "paused";
            // console.log(headshot.classList);
        } else {
            // console.log("not over");
            // headshot.style.webkitAnimationPlayState = "running";
            // headshot.classList.add('slideIn');
            // console.log(headshot.classList);
        }
    });
}, headshotOptions);

headshotObserver.observe(landing);