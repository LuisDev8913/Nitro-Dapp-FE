export const redirectToWebPage = (url = "http://google.com") => {
    if (window) {
        window.open(url, "_blank");
    }
}