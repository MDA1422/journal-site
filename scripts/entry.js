async function loadEntry() {
    const urlParams = new URLSearchParams(window.location.search);
    const fileName = urlParams.get('file');

    if (fileName) {
        try {
            const response = await fetch(`entries/${fileName}`);
            const text = await response.text();
            const htmlContent = marked.parse(text);

            const contentDiv = document.getElementById('entry-content');
            contentDiv.innerHTML = htmlContent;
        } catch (error) {
            console.error('Error loading entry:', error);
        }
    } else {
        document.getElementById('entry-content').innerHTML = 'No entry selected.';
    }
}

document.addEventListener('DOMContentLoaded', loadEntry);
