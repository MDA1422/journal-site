document.addEventListener('DOMContentLoaded', loadEntries);

function loadEntries() {
    const entryList = document.getElementById('journal-list');
    const entries = ['entry1.md', 'entry2.md', 'entry3.md']; // List of your Markdown files

    entries.forEach(entry => {
        const entryName = entry.replace('.md', '').replace(/-/g, ' '); // Format the file name
        const listItem = document.createElement('li');

        // Create a link that goes to entry.html with a query parameter for the file
        listItem.innerHTML = `<a href="entry.html?file=${entry}">${entryName}</a>`;
        entryList.appendChild(listItem);
    });
}
