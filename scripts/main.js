async function loadEntries() {
    const entryList = document.getElementById('journal-list');
    const entries = ['entry1.md', 'entry2.md', 'entry3.md'];

    for (const entry of entries) {
        const response = await fetch(`entries/${entry}`);
        const text = await response.text();
        const htmlContent = marked.parse(text);

        const entryDiv = document.createElement('div');
        entryDiv.className = 'entry';
        entryDiv.innerHTML = htmlContent;
        entryList.appendChild(entryDiv);
    }
}

document.addEventListener('DOMContentLoaded', loadEntries);
