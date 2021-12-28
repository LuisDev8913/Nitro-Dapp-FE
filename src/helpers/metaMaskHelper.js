export const getMetaMaskExtensionStatus = () => {
    if (!window) {
        // eslint-disable-next-line no-console
        console.warn("No window object found");
        return;
    }

    try {
        const ethereum = (window).ethereum;
        if (!ethereum) {
            // eslint-disable-next-line no-console
            return false;
        }
        else {
            return true
        }
    } catch (error) {
        // eslint-disable-next-line no-console
    }
}

