const projects = [
    {
        title: "Restoring Society's Relationship with the Ocean",
        category: "Ocean Policy",
        description: "An infographic unpacking UN Ocean Decade Challenge 10 — why nine of the ten Challenges ask what we should do to the ocean, and the tenth asks what has to change in us. Covers the behavioral barriers, the four drivers that can shift them, and where the gaps remain.",
        image: "assets/project-9-restoring-ocean.png",
        url: "projects/project-9.html",
        type: "creative",
        credit: { logo: "assets/ASU_School_of_Ocean_Futures_1_Vert_RGB_MaroonGold_150ppi.webp", text: "Made for ASU School of Ocean Futures" }
    },
    {
        title: "Short-Lived but Brutal",
        category: "Climate Science",
        description: "A flame chart showing how long greenhouse gases persist and how hard they hit — height is warming power, length is atmospheric lifetime. Built on HTML5 canvas with IPCC AR6 decay models.",
        image: "assets/ghgflamechart-card.png",
        url: "projects/project-7.html",
        type: "data-design",
        instagramUrl: true
    },
    {
        title: "Phoenix is Only Getting Hotter",
        category: "Urban Heat",
        description: "An interactive infographic tracking 133 days at or above 100°F in Phoenix — the all-time record. Adjust a temperature threshold and watch the entire visualization respond live.",
        image: "assets/project-6-dashboard.png",
        url: "projects/project-6.html",
        type: "tableau"
    },
    {
        title: "A Warning from the Yakima",
        category: "Water Crisis",
        description: "Three visualizations telling the story of five mountain reservoirs that are failing to refill, published by the Center for Environmental Law & Policy.",
        image: "assets/project-5-pdsi.png",
        url: "projects/project-5.html",
        type: "data-design",
        credit: { logo: "assets/CCL-Icon-Color.webp", text: "In Partnership with Creative Climate Lab" }
    },
    {
        title: "Valley of the Heat",
        category: "Urban Climate",
        description: "75 years of Phoenix temperature data arranged in a radial chart — each ray a year, colors shifting from cool blue to burning red.",
        image: "assets/project-2-dashboard.png",
        url: "projects/project-2.html",
        type: "tableau"
    },
    {
        title: "Polar Sea Ice in Decline",
        category: "Climate Analysis",
        description: "Side-by-side panels tracking Arctic and Antarctic sea ice from 1979 to 2024, revealing two very different stories of decline.",
        image: "assets/project-1-dashboard.png",
        url: "projects/project-1.html",
        type: "tableau"
    },
    {
        title: "AZ County Temperature Anomalies",
        category: "Statewide Climate",
        description: "All 15 Arizona counties' temperature anomalies from 1950–2025, countering the urban heat island argument with statewide evidence.",
        image: "assets/project-3-dashboard.png",
        url: "projects/project-3.html",
        type: "tableau"
    },
    {
        title: "Antarctic Icebergs",
        category: "Iceberg Tracking",
        description: "Maps the journeys of 547 tracked Antarctic icebergs using an automated data pipeline — web scraping, CSV consolidation, and geospatial visualization.",
        image: "assets/project-4-dashboard.png",
        url: "projects/project-4.html",
        type: "tableau"
    },
    {
        title: "Charting Our Course",
        category: "Brand Storytelling",
        description: "A milestone timeline built for Creative Climate Lab's Climatebase fellowship pitch deck — tracing our founding, partnerships, and progress through a marine scene that flows seamlessly from open ocean to arctic ice to tropical reef.",
        image: "assets/project-8-timeline-1.png",
        url: "projects/project-8.html",
        type: "creative",
        credit: { logo: "assets/CCL-Icon-Color.webp", text: "Created for Creative Climate Lab" }
    }
];

const FILTERS = [
    { key: "all", label: "All Work" },
    { key: "tableau", label: "Tableau Data Viz" },
    { key: "data-design", label: "Data & Design" },
    { key: "creative", label: "Creative Design" }
];

const grid = document.getElementById('portfolio-grid');
const filterBar = document.getElementById('portfolio-filters');

if (filterBar) {
    filterBar.innerHTML = FILTERS.map((f, i) =>
        `<button class="filter-tab${i === 0 ? ' active' : ''}" data-filter="${f.key}">${f.label}</button>`
    ).join('');
}

// Stagger + appear animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.15 });

projects.forEach(project => {
    const wrap = document.createElement('div');
    wrap.className = 'portfolio-card-wrap';
    wrap.dataset.type = project.type || 'all';

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
            ${project.instagramUrl ? `<div class="card-badge">+ Social Media Adaptation</div>` : ''}
            ${project.credit ? `<div class="card-badge ccl-badge"><img src="${project.credit.logo}" alt="">${project.credit.text}</div>` : ''}
            <p class="portfolio-card-desc">${project.description}</p>
        </div>
    `;

    wrap.appendChild(card);
    grid.appendChild(wrap);
});

document.querySelectorAll('.portfolio-card-wrap').forEach(wrap => {
    observer.observe(wrap);
});

// Filter tabs
if (filterBar) {
    filterBar.addEventListener('click', (e) => {
        const btn = e.target.closest('.filter-tab');
        if (!btn) return;

        filterBar.querySelectorAll('.filter-tab').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.dataset.filter;
        document.querySelectorAll('.portfolio-card-wrap').forEach(wrap => {
            const match = filter === 'all' || wrap.dataset.type === filter;
            wrap.classList.toggle('filtered-out', !match);
        });
    });
}
