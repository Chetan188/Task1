const data = [
    { title: "Tech Innovation in 2024", category: "tech" },
    { title: "Business Strategies for Growth", category: "business" },
    { title: "How to Improve Your Lifestyle", category: "lifestyle" },
    { title: "The Future of Artificial Intelligence", category: "tech" },
    { title: "Starting Your Own Business", category: "business" },
    { title: "Top Health Tips for 2024", category: "lifestyle" }
];

function filterResults() {
    const searchBox = document.getElementById("searchBox").value.toLowerCase();
    const filter = document.getElementById("filter").value;
    
    const filteredData = data.filter(item => {
        const matchesSearch = item.title.toLowerCase().includes(searchBox);
        const matchesFilter = filter === "all" || item.category === filter;
        return matchesSearch && matchesFilter;
    });

    displayResults(filteredData);
}

function displayResults(results) {
    const resultsContainer = document.getElementById("results");
    resultsContainer.innerHTML = "";

    if (results.length === 0) {
        resultsContainer.innerHTML = "<p>No results found</p>";
    } else {
        results.forEach(item => {
            const div = document.createElement("div");
            div.classList.add("result-item");
            div.textContent = item.title;
            resultsContainer.appendChild(div);
        });
    }
}

// Initial display of all data
displayResults(data);
