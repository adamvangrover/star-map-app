const starMap = document.getElementById('star-map');

// Star data (expanded example)
const stars = [
    { name: 'Sirius', ra: 101.2875, dec: -16.71611, mag: -1.46 },
    { name: 'Canopus', ra: 95.98833, dec: -52.69528, mag: -0.72 },
    { name: 'Arcturus', ra: 213.91528, dec: 19.18241, mag: -0.04 },
    //... thousands of stars...
];

// Constellation data (expanded example)
const constellations = [
    {
        name: 'Ursa Major',
        stars: ['Dubhe', 'Merak', 'Phecda', 'Megrez', 'Alioth', 'Mizar', 'Alkaid'],
        mythology: 'The Great Bear, associated with Artemis in Greek mythology.',
        lines: [
            { from: 'Dubhe', to: 'Merak' },
            { from: 'Merak', to: 'Phecda' },
            //... lines connecting stars...
        ]
    },
    //... dozens of constellations...
];

const canvas = document.createElement('canvas');
canvas.width = starMap.offsetWidth;
canvas.height = starMap.offsetHeight;
starMap.appendChild(canvas);
const ctx = canvas.getContext('2d');

// Function to draw stars on the canvas (animated)
function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas for animation

    stars.forEach(star => {
        // Convert Right Ascension and Declination to pixel coordinates
        const x = (star.ra / 24) * starMap.offsetWidth;
        const y = starMap.offsetHeight - (star.dec + 90) / 180 * starMap.offsetHeight;

        // Calculate star position with animation offset
        const animationOffset = Math.sin(Date.now() / 1000 + star.ra) * 5; // Example animation
        const xAnimated = x + animationOffset;
        const yAnimated = y + animationOffset;

        ctx.beginPath();
        ctx.arc(xAnimated, yAnimated, (2 - star.mag) * 2, 0, 2 * Math.PI); // Draw star on canvas
        ctx.fillStyle = '#fff';
        ctx.fill();
    });

    requestAnimationFrame(drawStars); // Recursive call for animation
}

// Function to draw constellation lines (on canvas)
function drawConstellationLines(constellation) {
    ctx.beginPath();
    constellation.lines.forEach(line => {
        const star1 = stars.find(star => star.name === line.from);
        const star2 = stars.find(star => star.name === line.to);
        if (star1 && star2) {
            const x1 = (star1.ra / 24) * starMap.offsetWidth;
            const y1 = starMap.offsetHeight - (star1.dec + 90) / 180 * starMap.offsetHeight;
            const x2 = (star2.ra / 24) * starMap.offsetWidth;
            const y2 = starMap.offsetHeight - (star2.dec + 90) / 180 * starMap.offsetHeight;
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
        }
    });
    ctx.strokeStyle = '#ccc';
    ctx.lineWidth = 1;
    ctx.stroke();
}

// Event listeners for constellation clicks
canvas.addEventListener('click', (e) => {
    const rect = canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    constellations.forEach(constellation => {
        // Check if click is within the bounds of a constellation (simplified)
        //... complex calculation to determine if click is on a constellation...
        if (/*... */) {
            showConstellationInfo(constellation);
        }
    });
});

// Zoom controls
const zoomInButton = document.createElement('button');
zoomInButton.textContent = '+';
zoomInButton.addEventListener('click', () => {
    scale += 0.1;
    scale = Math.min(scale, 2);
    canvas.style.transition = 'transform 0.3s ease'; // Add transition
    updateTransform();
});
starMap.appendChild(zoomInButton);

const zoomOutButton = document.createElement('button');
zoomOutButton.textContent = '-';
zoomOutButton.addEventListener('click', () => {
    scale -= 0.1;
    scale = Math.max(scale, 0.5);
    canvas.style.transition = 'transform 0.3s ease'; // Add transition
    updateTransform();
});
starMap.appendChild(zoomOutButton);

// Helper function to update canvas transform
function updateTransform() {
    canvas.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
}

// Search functionality (simplified)
const searchInput = document.createElement('input');
searchInput.type = 'text';
searchInput.placeholder = 'Search for a constellation...';
searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();
    constellations.forEach(constellation => {
        if (constellation.name.toLowerCase().includes(searchTerm)) {
            //... highlight or focus on the constellation...
        }
    });
});
starMap.appendChild(searchInput);

// Accessibility (example for constellation info)
constellationInfo.setAttribute('aria-label', 'Constellation Information');
constellationInfo.setAttribute('role', 'dialog');

//... (rest of the code)...

// Initial drawing of stars and constellations (animated)
drawStars(); // Start animation loop
constellations.forEach(drawConstellationLines); // Draw lines once
