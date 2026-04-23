const projects = [
    {
        title: "Phoenix is Only Getting Hotter",
        category: "Urban Heat",
        description: "An interactive infographic tracking 133 days at or above 100°F in Phoenix — the all-time record. Adjust a temperature threshold and watch the entire visualization respond live.",
        image: "",
        url: "https://markprubin.github.io/the-lasting-wake"
    },
    {
        title: "Yakima County's Water Crisis",
        category: "Water Crisis",
        description: "Three visualizations telling the story of five mountain reservoirs that are failing to refill, published by the Center for Environmental Law & Policy.",
        image: "",
        url: "https://markprubin.github.io/the-lasting-wake"
    },
    {
        title: "Valley of the Heat",
        category: "Urban Climate",
        description: "75 years of Phoenix temperature data arranged in a radial chart — each ray a year, colors shifting from cool blue to burning red.",
        image: "",
        url: "https://markprubin.github.io/the-lasting-wake"
    },
    {
        title: "Polar Sea Ice in Decline",
        category: "Climate Analysis",
        description: "Side-by-side panels tracking Arctic and Antarctic sea ice from 1979 to 2024, revealing two very different stories of decline.",
        image: "",
        url: "https://markprubin.github.io/the-lasting-wake"
    }
];

const grid = document.getElementById('portfolio-grid');

projects.forEach(project => {
    const card = document.createElement('a');
    card.href = project.url;
    card.target = '_blank';
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
