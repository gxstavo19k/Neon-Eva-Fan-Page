import "@styles/spinner.css";
export function SpinnerLoader() {
    const spinner = document.createElement('div');
    spinner.id = 'spinner';
    document.body.appendChild(spinner);
    document.body.classList.add('loading');

    function checkIfLoaded() {
        const allLoaded = document.readyState === 'complete';

        if (allLoaded) {
            document.body.classList.remove('loading');
            spinner.remove();
        } else {
            setTimeout(checkIfLoaded, 100);
        }
    }


    checkIfLoaded();
}