async function loadEntries() {
    const entryList = document.getElementById('journal-list');
    const entries = ['entry1.md', 'entry2.md', 'entry3.md'];

    // Generate list of links to entries
    for (const entry of entries) {
        const entryName = entry.replace('.md', '').replace(/-/g, ' ');
        const listItem = document.createElement('li');
        listItem.innerHTML = `<a href="entry.html?file=${entry}">${entryName}</a>`;
        entryList.appendChild(listItem);
    }
}

// Run the function once the page is fully loaded
document.addEventListener('DOMContentLoaded', loadEntries);
