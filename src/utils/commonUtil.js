export const redirectToWebPage = (url = "https://metamask.io/") => {
    if (window) {
        window.open(url, "_blank");
    }
}