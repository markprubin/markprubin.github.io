const projects = [
    {
        title: "Phoenix is Only Getting Hotter",
        category: "Urban Heat",
        description: "An interactive infographic tracking 133 days at or above 100°F in Phoenix — the all-time record. Adjust a temperature threshold and watch the entire visualization respond live.",
        image: "assets/project-6-dashboard.png",
        url: "projects/project-6.html"
    },
    {
        title: "A Warning from the Yakima",
        category: "Water Crisis",
        description: "Three visualizations telling the story of five mountain reservoirs that are failing to refill, published by the Center for Environmental Law & Policy.",
        image: "assets/project-5-pdsi.png",
        url: "projects/project-5.html"
    },
    {
        title: "Valley of the Heat",
        category: "Urban Climate",
        description: "75 years of Phoenix temperature data arranged in a radial chart — each ray a year, colors shifting from cool blue to burning red.",
        image: "assets/project-2-dashboard.png",
        url: "projects/project-2.html"
    },
    {
        title: "Polar Sea Ice in Decline",
        category: "Climate Analysis",
        description: "Side-by-side panels tracking Arctic and Antarctic sea ice from 1979 to 2024, revealing two very different stories of decline.",
        image: "assets/project-1-dashboard.png",
        url: "projects/project-1.html"
    },
    {
        title: "AZ County Temperature Anomalies",
        category: "Statewide Climate",
        description: "All 15 Arizona counties' temperature anomalies from 1950–2025, countering the urban heat island argument with statewide evidence.",
        image: "assets/project-3-dashboard.png",
        url: "projects/project-3.html"
    },
    {
        title: "Antarctic Icebergs",
        category: "Iceberg Tracking",
        description: "Maps the journeys of 547 tracked Antarctic icebergs using an automated data pipeline — web scraping, CSV consolidation, and geospatial visualization.",
        image: "assets/project-4-dashboard.png",
        url: "projects/project-4.html"
    }
];

const grid = document.getElementById('portfolio-grid');

projects.forEach(project => {
    const card = document.createElement('a');
    card.href = project.url;
    card.className = 'portfolio-card';

    card.innerHTML = `
        <div class="portfolio-card-image">
            ${project.image ? `<img src="${project.image}" alt="${project.title}" loading="lazy">` : ''}
        </div>
        <div class="portfolio-card-body">
            <div class="portfolio-card-tag">${project.category}</div>
            <div class="portfolio-card-title">${project.title}</div>
            <p class="portfolio-card-desc">${project.description}</p>
        </div>
    `;

    grid.appendChild(card);
});
