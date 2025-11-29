const popup = document.querySelector('.cookies');
const acceptBtn = document.querySelector('.accept-btn');
const consent = localStorage.getItem("cookieConsent");

if (consent === "accepted") {
    popup.classList.add('hide');
}

acceptBtn.addEventListener('click', () => {
    popup.classList.add('hide');
    localStorage.setItem("cookieConsent", "accepted");
});

console.log('Hello world');