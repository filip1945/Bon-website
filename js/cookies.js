
document.addEventListener("DOMContentLoaded", () => {
    const banner = document.getElementById("cookieBanner");
    const acceptButton = document.getElementById("cookieAccept");
    const rejectButton = document.getElementById("cookieReject");
    const settingsButton = document.getElementById("cookieSettings");

    if (!banner || !acceptButton || !rejectButton) return;

    const savedConsent = localStorage.getItem("bonCookieConsent");

    if (savedConsent !== "accepted" && savedConsent !== "rejected") {
        banner.hidden = false;
    }

    if (settingsButton) {
        settingsButton.addEventListener("click", () => {
            banner.hidden = false;
        });
    }

    acceptButton.addEventListener("click", () => {
        localStorage.setItem("bonCookieConsent", "accepted");
        banner.hidden = true;

        document.dispatchEvent(new CustomEvent("cookieConsentChanged", {
            detail: { analytics: true }
        }));
    });

    rejectButton.addEventListener("click", () => {
        localStorage.setItem("bonCookieConsent", "rejected");
        banner.hidden = true;

        document.dispatchEvent(new CustomEvent("cookieConsentChanged", {
            detail: { analytics: false }
        }));
    });
});
