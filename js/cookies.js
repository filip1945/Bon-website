
document.addEventListener("DOMContentLoaded", () => {
    const banner = document.getElementById("cookie-banner");
    const accept = document.getElementById("accept-cookies");
    const reject = document.getElementById("reject-cookies");

    if (!banner || !accept || !reject) return;

    const choice = localStorage.getItem("bon-cookie-consent");

    if (!choice) {
        banner.style.display = "block";
    }

    accept.addEventListener("click", () => {
        localStorage.setItem("bon-cookie-consent", "accepted");
        banner.style.display = "none";
    });

    reject.addEventListener("click", () => {
        localStorage.setItem("bon-cookie-consent", "rejected");
        banner.style.display = "none";
    });
});
