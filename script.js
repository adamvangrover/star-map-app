// --- Data Definitions ---

const SpectralColors = {
    O: '#9db4ff', // Blue (Hottest)
    B: '#aabfff', // Blue-white
    A: '#cad8ff', // White-blue
    F: '#fbf8ff', // White
    G: '#fff4e8', // Yellow-white (Sun)
    K: '#ffddb4', // Orange
    M: '#ffbd6f', // Red (Coolest)
    // Special
    Neutron: '#00ffff',
    BlackHole: '#220033'
};

const stars = new Map();

// Helper to add star
function addStar(name, raHours, decDeg, mag, details = {}) {
    // Infer spectral color code from type string if not provided
    let colorCode = 'G';
    if (details.type) {
        const t = details.type.trim().charAt(0).toUpperCase();
        if (SpectralColors[t]) colorCode = t;
    }

    stars.set(name, {
        ra: raHours * 15, // Convert to degrees
        dec: decDeg,
        mag,
        colorCode,
        ...details
    });
}

// Top Brightest Stars with detailed metadata
addStar('Sirius', 6.75, -16.7, -1.46, { dist: '8.6 ly', type: 'A0 (Main Sequence)', meaning: 'Scorching (Greek)', constellation: 'Canis Major' });
addStar('Canopus', 6.40, -52.7, -0.72, { dist: '310 ly', type: 'F0 (Supergiant)', meaning: 'Pilot of Argo (Greek)', constellation: 'Carina' });
addStar('Arcturus', 14.26, 19.1, -0.04, { dist: '37 ly', type: 'K0 (Giant)', meaning: 'Guardian of the Bear (Greek)', constellation: 'Boötes' });
addStar('Rigil Kentaurus', 14.66, -60.8, -0.01, { dist: '4.3 ly', type: 'G2 (Main Sequence)', meaning: 'Foot of the Centaur (Arabic)', constellation: 'Centaurus', exoplanets: 'Proxima b, Proxima c' });
addStar('Vega', 18.62, 38.8, 0.03, { dist: '25 ly', type: 'A0 (Main Sequence)', meaning: 'Falling Eagle (Arabic)', constellation: 'Lyra' });
addStar('Capella', 5.27, 46.0, 0.08, { dist: '42 ly', type: 'G5 (Giant)', meaning: 'Little She-Goat (Latin)', constellation: 'Auriga' });
addStar('Rigel', 5.24, -8.2, 0.12, { dist: '860 ly', type: 'B8 (Supergiant)', meaning: 'Foot (Arabic)', constellation: 'Orion' });
addStar('Procyon', 7.65, 5.2, 0.38, { dist: '11.4 ly', type: 'F5 (Main Sequence)', meaning: 'Before the Dog (Greek)', constellation: 'Canis Minor' });
addStar('Achernar', 1.63, -57.2, 0.46, { dist: '144 ly', type: 'B3 (Main Sequence)', meaning: 'End of the River (Arabic)', constellation: 'Eridanus' });
addStar('Betelgeuse', 5.92, 7.4, 0.50, { dist: '640 ly', type: 'M1 (Red Supergiant)', meaning: 'Armpit of the Giant (Arabic)', constellation: 'Orion' });
addStar('Hadar', 14.06, -60.4, 0.61, { dist: '350 ly', type: 'B1 (Giant)', meaning: 'Ground (Arabic)', constellation: 'Centaurus' });
addStar('Acrux', 12.44, -63.1, 0.76, { dist: '320 ly', type: 'B0.5 (Main Sequence)', meaning: 'Cross (Latin)', constellation: 'Crux' });
addStar('Altair', 19.85, 8.9, 0.77, { dist: '16.8 ly', type: 'A7 (Main Sequence)', meaning: 'The Eagle (Arabic)', constellation: 'Aquila' });
addStar('Aldebaran', 4.60, 16.5, 0.85, { dist: '65 ly', type: 'K5 (Giant)', meaning: 'The Follower (Arabic)', constellation: 'Taurus', exoplanets: 'Aldebaran b' });
addStar('Antares', 16.49, -26.4, 0.96, { dist: '600 ly', type: 'M1 (Supergiant)', meaning: 'Rival of Mars (Greek)', constellation: 'Scorpius' });
addStar('Spica', 13.42, -11.2, 1.04, { dist: '260 ly', type: 'B1 (Main Sequence)', meaning: 'Ear of Wheat (Latin)', constellation: 'Virgo' });
addStar('Pollux', 7.76, 28.0, 1.14, { dist: '34 ly', type: 'K0 (Giant)', meaning: 'Twin Brother (Greek)', constellation: 'Gemini', exoplanets: 'Thestias' });
addStar('Fomalhaut', 22.96, -29.6, 1.16, { dist: '25 ly', type: 'A3 (Main Sequence)', meaning: 'Mouth of the Fish (Arabic)', constellation: 'Piscis Austrinus', exoplanets: 'Dagon (Fomalhaut b)' });
addStar('Deneb', 20.69, 45.3, 1.25, { dist: '2600 ly', type: 'A2 (Supergiant)', meaning: 'Tail (Arabic)', constellation: 'Cygnus' });
addStar('Mimosa', 12.80, -59.7, 1.25, { dist: '350 ly', type: 'B0.5 (Giant)', meaning: 'Actor (Latin)', constellation: 'Crux' });
addStar('Regulus', 10.14, 11.9, 1.35, { dist: '77 ly', type: 'B7 (Main Sequence)', meaning: 'Little King (Latin)', constellation: 'Leo' });
addStar('Adhara', 6.98, -28.9, 1.50, { dist: '430 ly', type: 'B2 (Bright Giant)', meaning: 'Virgins (Arabic)', constellation: 'Canis Major' });
addStar('Castor', 7.58, 31.9, 1.58, { dist: '52 ly', type: 'A1 (Main Sequence)', meaning: 'Twin Brother (Greek)', constellation: 'Gemini' });
addStar('Gacrux', 12.52, -57.1, 1.63, { dist: '88 ly', type: 'M3 (Giant)', meaning: 'Gamma Crucis', constellation: 'Crux' });
addStar('Shaula', 17.56, -37.1, 1.62, { dist: '700 ly', type: 'B1 (Subgiant)', meaning: 'Stinger (Arabic)', constellation: 'Scorpius' });
addStar('Bellatrix', 5.42, 6.3, 1.64, { dist: '240 ly', type: 'B2 (Giant)', meaning: 'Female Warrior (Latin)', constellation: 'Orion' });
addStar('Elnath', 5.44, 28.6, 1.65, { dist: '130 ly', type: 'B7 (Giant)', meaning: 'The Butting One (Arabic)', constellation: 'Taurus' });
addStar('Miaplacidus', 9.22, -69.7, 1.67, { dist: '111 ly', type: 'A2 (Subgiant)', meaning: 'Peaceful Waters (Latin/Arabic)', constellation: 'Carina' });
addStar('Alnilam', 5.60, -1.2, 1.69, { dist: '1300 ly', type: 'B0 (Supergiant)', meaning: 'String of Pearls (Arabic)', constellation: 'Orion' });
addStar('Alnair', 22.14, -46.9, 1.74, { dist: '101 ly', type: 'B7 (Main Sequence)', meaning: 'The Bright One (Arabic)', constellation: 'Grus' });
addStar('Alnitak', 5.68, -1.9, 1.74, { dist: '800 ly', type: 'O9 (Supergiant)', meaning: 'The Girdle (Arabic)', constellation: 'Orion' });
addStar('Alioth', 12.90, 55.9, 1.76, { dist: '81 ly', type: 'A0 (Variable)', meaning: 'The Bull (Arabic)', constellation: 'Ursa Major' });
addStar('Kaus Australis', 18.40, -34.4, 1.79, { dist: '140 ly', type: 'B9 (Giant)', meaning: 'Southern Bow (Arabic)', constellation: 'Sagittarius' });
addStar('Mirfak', 3.41, 49.8, 1.79, { dist: '590 ly', type: 'F5 (Supergiant)', meaning: 'Elbow (Arabic)', constellation: 'Perseus' });
addStar('Dubhe', 11.06, 61.8, 1.79, { dist: '120 ly', type: 'K0 (Giant)', meaning: 'Bear (Arabic)', constellation: 'Ursa Major' });
addStar('Wezen', 7.14, -26.4, 1.83, { dist: '1800 ly', type: 'F8 (Supergiant)', meaning: 'Weight (Arabic)', constellation: 'Canis Major' });
addStar('Alkaid', 13.79, 49.3, 1.85, { dist: '100 ly', type: 'B3 (Main Sequence)', meaning: 'Chief of Mourners (Arabic)', constellation: 'Ursa Major' });
addStar('Sargas', 17.62, -43.0, 1.86, { dist: '270 ly', type: 'F0 (Bright Giant)', meaning: 'Scorpion (Sumerian)', constellation: 'Scorpius' });
addStar('Avior', 8.38, -59.5, 1.86, { dist: '630 ly', type: 'K3 (Giant)', meaning: 'Unknown', constellation: 'Carina' });
addStar('Menkalinan', 5.99, 44.9, 1.90, { dist: '82 ly', type: 'A2 (Subgiant)', meaning: 'Shoulder of Rein Holder (Arabic)', constellation: 'Auriga' });
addStar('Atria', 16.81, -69.0, 1.91, { dist: '420 ly', type: 'K2 (Giant)', meaning: 'Alpha Trianguli Australis', constellation: 'Triangulum Australe' });
addStar('Alhena', 6.63, 16.4, 1.93, { dist: '100 ly', type: 'A0 (Subgiant)', meaning: 'The Brand (Arabic)', constellation: 'Gemini' });
addStar('Peacock', 20.43, -56.7, 1.94, { dist: '180 ly', type: 'B2 (Subgiant)', meaning: 'Peacock (English)', constellation: 'Pavo' });
addStar('Polaris', 2.53, 89.3, 1.97, { dist: '430 ly', type: 'F7 (Supergiant)', meaning: 'Pole Star (Latin)', constellation: 'Ursa Minor' });
addStar('Mirzam', 6.38, -17.9, 1.98, { dist: '500 ly', type: 'B1 (Giant)', meaning: 'The Herald (Arabic)', constellation: 'Canis Major' });
addStar('Alphard', 9.46, -8.7, 1.99, { dist: '180 ly', type: 'K3 (Giant)', meaning: 'The Solitary One (Arabic)', constellation: 'Hydra' });
addStar('Hamal', 2.12, 23.5, 2.01, { dist: '66 ly', type: 'K2 (Giant)', meaning: 'Head of the Ram (Arabic)', constellation: 'Aries', exoplanets: 'Hamal b' });
addStar('Algieba', 10.33, 19.8, 2.01, { dist: '130 ly', type: 'K0 (Giant)', meaning: 'The Forehead (Arabic)', constellation: 'Leo', exoplanets: 'Algieba b' });
addStar('Deneb Kaitos', 0.72, -18.0, 2.04, { dist: '96 ly', type: 'K0 (Giant)', meaning: 'Tail of Sea Monster (Arabic)', constellation: 'Cetus' });
addStar('Nunki', 18.92, -26.3, 2.05, { dist: '220 ly', type: 'B2 (Main Sequence)', meaning: 'Foreyoke (Babylonian)', constellation: 'Sagittarius' });
addStar('Menkent', 14.11, -36.4, 2.06, { dist: '61 ly', type: 'K0 (Giant)', meaning: 'Shoulder of Centaur (Arabic)', constellation: 'Centaurus' });
addStar('Mirach', 1.16, 35.6, 2.07, { dist: '200 ly', type: 'M0 (Giant)', meaning: 'The Girdle (Arabic)', constellation: 'Andromeda' });
addStar('Alpheratz', 0.14, 29.1, 2.07, { dist: '97 ly', type: 'B8 (Subgiant)', meaning: 'Horse Shoulder (Arabic)', constellation: 'Andromeda' });
addStar('Saiph', 5.80, -9.7, 2.07, { dist: '720 ly', type: 'B0 (Supergiant)', meaning: 'Sword of the Giant (Arabic)', constellation: 'Orion' });
addStar('Kochab', 14.84, 74.2, 2.07, { dist: '130 ly', type: 'K4 (Giant)', meaning: 'Star (Arabic)', constellation: 'Ursa Minor', exoplanets: 'Kochab b' });
addStar('Rasalhague', 17.58, 12.6, 2.08, { dist: '47 ly', type: 'A5 (Giant)', meaning: 'Head of Serpent Charmer (Arabic)', constellation: 'Ophiuchus' });
addStar('Algol', 3.14, 40.9, 2.09, { dist: '93 ly', type: 'B8 (Main Sequence)', meaning: 'The Demon Head (Arabic)', constellation: 'Perseus' });
addStar('Almach', 2.06, 42.3, 2.10, { dist: '350 ly', type: 'K3 (Giant)', meaning: 'Caracal (Arabic)', constellation: 'Andromeda' });
addStar('Denebola', 11.82, 14.6, 2.14, { dist: '36 ly', type: 'A3 (Main Sequence)', meaning: 'Lion Tail (Arabic)', constellation: 'Leo' });
addStar('Tsih', 0.94, 60.7, 2.15, { dist: '610 ly', type: 'B0 (Subgiant)', meaning: 'Whip (Chinese)', constellation: 'Cassiopeia' }); // Gamma Cas
addStar('Muhlifain', 12.69, -48.9, 2.20, { dist: '130 ly', type: 'A0 (Giant)', meaning: 'Oath (Arabic)', constellation: 'Centaurus' }); // Gamma Centauri
addStar('Alphecca', 15.58, 26.7, 2.22, { dist: '75 ly', type: 'A0 (Main Sequence)', meaning: 'Bright One of the Dish (Arabic)', constellation: 'Corona Borealis' });
addStar('Suhail', 9.13, -43.4, 2.23, { dist: '570 ly', type: 'K4 (Supergiant)', meaning: 'Noble (Arabic)', constellation: 'Vela' });
addStar('Sadr', 20.37, 40.3, 2.23, { dist: '1500 ly', type: 'F8 (Supergiant)', meaning: 'Breast (Arabic)', constellation: 'Cygnus' });
addStar('Mizar', 13.40, 54.9, 2.23, { dist: '78 ly', type: 'A2 (Main Sequence)', meaning: 'Groin (Arabic)', constellation: 'Ursa Major' });
addStar('Schedar', 0.67, 56.5, 2.24, { dist: '230 ly', type: 'K0 (Giant)', meaning: 'Breast (Arabic)', constellation: 'Cassiopeia' });
addStar('Eltanin', 17.94, 51.5, 2.24, { dist: '150 ly', type: 'K5 (Giant)', meaning: 'The Dragon (Arabic)', constellation: 'Draco' });
addStar('Mintaka', 5.53, -0.3, 2.25, { dist: '900 ly', type: 'O9 (Giant)', meaning: 'Belt (Arabic)', constellation: 'Orion' });
addStar('Caph', 0.15, 59.1, 2.28, { dist: '55 ly', type: 'F2 (Giant)', meaning: 'Palm (Arabic)', constellation: 'Cassiopeia' });
addStar('Dschubba', 16.00, -22.6, 2.29, { dist: '400 ly', type: 'B0 (Subgiant)', meaning: 'Forehead (Arabic)', constellation: 'Scorpius' });
addStar('Merak', 11.03, 56.4, 2.34, { dist: '79 ly', type: 'A1 (Main Sequence)', meaning: 'Loins (Arabic)', constellation: 'Ursa Major' });
addStar('Enif', 21.74, 9.9, 2.38, { dist: '670 ly', type: 'K2 (Supergiant)', meaning: 'Nose (Arabic)', constellation: 'Pegasus' });
addStar('Ankaa', 0.44, -42.3, 2.40, { dist: '77 ly', type: 'K0 (Giant)', meaning: 'Phoenix (Arabic)', constellation: 'Phoenix' });
addStar('Phecda', 11.90, 53.7, 2.41, { dist: '84 ly', type: 'A0 (Main Sequence)', meaning: 'Thigh (Arabic)', constellation: 'Ursa Major' });
addStar('Sabik', 17.17, -15.7, 2.43, { dist: '88 ly', type: 'A2 (Main Sequence)', meaning: 'Preceding One (Arabic)', constellation: 'Ophiuchus' });
addStar('Scheat', 23.06, 28.1, 2.44, { dist: '200 ly', type: 'M2 (Giant)', meaning: 'Shin (Arabic)', constellation: 'Pegasus' });
addStar('Alderamin', 21.31, 62.6, 2.45, { dist: '49 ly', type: 'A7 (Main Sequence)', meaning: 'Right Arm (Arabic)', constellation: 'Cepheus' });
addStar('Aludra', 7.40, -29.3, 2.45, { dist: '3000 ly', type: 'B5 (Supergiant)', meaning: 'Virginity (Arabic)', constellation: 'Canis Major' });
addStar('Markab', 23.08, 15.2, 2.49, { dist: '140 ly', type: 'B9 (Giant)', meaning: 'Saddle (Arabic)', constellation: 'Pegasus' });
addStar('Menkar', 3.04, 4.1, 2.54, { dist: '250 ly', type: 'M1 (Giant)', meaning: 'Nostril (Arabic)', constellation: 'Cetus' });
addStar('Zosma', 11.24, 20.5, 2.56, { dist: '58 ly', type: 'A4 (Main Sequence)', meaning: 'Girdle (Arabic)', constellation: 'Leo' });

// Add remaining needed for constellations if not in top list
// Ursa Major: Megrez
addStar('Megrez', 12.26, 57.0, 3.32, { constellation: 'Ursa Major', dist: '80 ly' });
// Ursa Minor: Pherkad, Epsilon, Zeta, Eta
addStar('Pherkad', 15.34, 71.8, 3.00, { constellation: 'Ursa Minor', dist: '480 ly' });
addStar('Epsilon UMi', 16.76, 82.0, 4.19, { constellation: 'Ursa Minor', dist: '300 ly' });
addStar('Zeta UMi', 15.73, 77.8, 4.29, { constellation: 'Ursa Minor', dist: '380 ly' });
addStar('Eta UMi', 16.29, 75.8, 4.95, { constellation: 'Ursa Minor', dist: '97 ly' });
// Orion: Meissa
addStar('Meissa', 5.58, 9.9, 3.39, { constellation: 'Orion', dist: '1100 ly' });
// Cassiopeia: Ruchbah
addStar('Ruchbah', 1.43, 60.2, 2.66, { constellation: 'Cassiopeia', dist: '99 ly' });

// New Stars (Exoplanet Hosts)
addStar('TRAPPIST-1', 23.1, -5.04, 18.8, { dist: '39 ly', type: 'M8 (Red Dwarf)', meaning: 'TRAPPIST Telescope', exoplanets: '7 planets (b,c,d,e,f,g,h)' });
addStar('Kepler-186', 19.9, 43.9, 12.5, { dist: '580 ly', type: 'M1 (Red Dwarf)', meaning: 'Kepler Mission', exoplanets: 'Kepler-186f (Habitable Zone)' });
addStar('Tau Ceti', 1.74, -15.9, 3.49, { dist: '11.9 ly', type: 'G8 (Main Sequence)', meaning: 'Monster (Arabic)', constellation: 'Cetus', exoplanets: '4 candidates' });


// Deep Sky Objects (Galaxies, Nebulae, Clusters)
const DSOs = [
    { name: 'Andromeda Galaxy (M31)', ra: 0.71, dec: 41.26, mag: 3.44, dist: '2,540,000 ly', type: 'Spiral Galaxy', desc: 'The nearest major galaxy to the Milky Way.' },
    { name: 'Triangulum Galaxy (M33)', ra: 1.56, dec: 30.66, mag: 5.72, dist: '3,000,000 ly', type: 'Spiral Galaxy', desc: 'The third-largest member of the Local Group.' },
    { name: 'Orion Nebula (M42)', ra: 5.59, dec: -5.39, mag: 4.0, dist: '1,344 ly', type: 'Diffuse Nebula', desc: 'A vast star-forming region in Orion\'s Sword.' },
    { name: 'Pleiades (M45)', ra: 3.79, dec: 24.11, mag: 1.6, dist: '444 ly', type: 'Open Cluster', desc: 'The Seven Sisters, a prominent star cluster.' },
    { name: 'Crab Nebula (M1)', ra: 5.57, dec: 22.01, mag: 8.4, dist: '6,500 ly', type: 'Supernova Remnant', desc: 'Remnant of the 1054 AD supernova.' },
    { name: 'Hercules Cluster (M13)', ra: 16.69, dec: 36.46, mag: 5.8, dist: '22,200 ly', type: 'Globular Cluster', desc: 'One of the brightest globulars in the northern sky.' },
    { name: 'Lagoon Nebula (M8)', ra: 18.06, dec: -24.38, mag: 6.0, dist: '4,100 ly', type: 'Emission Nebula', desc: 'A giant interstellar cloud in Sagittarius.' },
    { name: 'Sagittarius A*', ra: 17.76, dec: -29.00, mag: 100, dist: '26,000 ly', type: 'Supermassive Black Hole', desc: 'The center of our Milky Way Galaxy.' },
    { name: 'Large Magellanic Cloud', ra: 5.39, dec: -69.75, mag: 0.9, dist: '163,000 ly', type: 'Irregular Galaxy', desc: 'Satellite galaxy of the Milky Way.' },
    { name: 'Small Magellanic Cloud', ra: 0.88, dec: -72.8, mag: 2.7, dist: '200,000 ly', type: 'Irregular Galaxy', desc: 'Satellite galaxy of the Milky Way.' },
    { name: 'Whirlpool Galaxy (M51)', ra: 13.5, dec: 47.19, mag: 8.4, dist: '23,000,000 ly', type: 'Spiral Galaxy', desc: 'Famous interacting galaxy pair.' },
    { name: 'Sombrero Galaxy (M104)', ra: 12.66, dec: -11.62, mag: 8.0, dist: '29,000,000 ly', type: 'Spiral Galaxy', desc: 'Has a bright nucleus and a large central bulge.' },
    { name: 'Pinwheel Galaxy (M101)', ra: 14.05, dec: 54.35, mag: 7.86, dist: '21,000,000 ly', type: 'Spiral Galaxy', desc: 'A face-on spiral galaxy.' },
    { name: 'Virgo Cluster', ra: 12.45, dec: 12.7, mag: 9.0, dist: '54,000,000 ly', type: 'Galaxy Cluster', desc: 'A massive cluster of galaxies.' }
];

// Solar System Data (Elements for J2000)
// N: Long asc. node, i: Inclination, w: Arg perihelion, a: Semi-major axis, e: Eccentricity, M: Mean anomaly
const PlanetElements = {
    Mercury: { N: 48.33, i: 7.00, w: 29.12, a: 0.3871, e: 0.2056, M: 174.79, L_rate: 4.0923344368, w_rate: 0.00001 }, // approx
    Venus:   { N: 76.68, i: 3.39, w: 54.88, a: 0.7233, e: 0.0068, M: 50.41,  L_rate: 1.6021302244, w_rate: 0 },
    Mars:    { N: 49.56, i: 1.85, w: 286.5, a: 1.5237, e: 0.0934, M: 19.37,  L_rate: 0.5240207766, w_rate: 0 },
    Jupiter: { N: 100.4, i: 1.30, w: 273.8, a: 5.2034, e: 0.0484, M: 20.02,  L_rate: 0.0830853001, w_rate: 0 },
    Saturn:  { N: 113.7, i: 2.49, w: 339.3, a: 9.5371, e: 0.0541, M: 317.0,  L_rate: 0.0334442282, w_rate: 0 },
    Uranus:  { N: 74.00, i: 0.77, w: 96.66, a: 19.191, e: 0.0471, M: 142.5,  L_rate: 0.011725806, w_rate: 0 },
    Neptune: { N: 131.7, i: 1.77, w: 272.8, a: 30.069, e: 0.0086, M: 260.2,  L_rate: 0.005995147, w_rate: 0 }
};

// Constellation data
const constellations = [
    {
        name: 'Ursa Major',
        stars: ['Dubhe', 'Merak', 'Phecda', 'Megrez', 'Alioth', 'Mizar', 'Alkaid'],
        mythology: 'The Great Bear. One of the oldest and most recognizable patterns in the sky.',
        lines: [
            { from: 'Dubhe', to: 'Merak' },
            { from: 'Merak', to: 'Phecda' },
            { from: 'Phecda', to: 'Megrez' },
            { from: 'Megrez', to: 'Alioth' },
            { from: 'Alioth', to: 'Mizar' },
            { from: 'Mizar', to: 'Alkaid' },
            { from: 'Merak', to: 'Dubhe' } // Closing the box usually
        ]
    },
    {
        name: 'Ursa Minor',
        stars: ['Polaris', 'Kochab', 'Pherkad', 'Epsilon UMi', 'Zeta UMi', 'Eta UMi'],
        mythology: 'The Little Bear. Contains Polaris, the North Star.',
        lines: [
            { from: 'Polaris', to: 'Epsilon UMi' }, // Approximated chain
            { from: 'Epsilon UMi', to: 'Zeta UMi' },
            { from: 'Zeta UMi', to: 'Eta UMi' },
            { from: 'Eta UMi', to: 'Kochab' },
            { from: 'Kochab', to: 'Pherkad' },
            { from: 'Pherkad', to: 'Zeta UMi' }
        ]
    },
    {
        name: 'Orion',
        stars: ['Betelgeuse', 'Rigel', 'Bellatrix', 'Alnitak', 'Alnilam', 'Mintaka', 'Saiph', 'Meissa'],
        mythology: 'The Hunter. A prominent constellation located on the celestial equator.',
        lines: [
            { from: 'Meissa', to: 'Betelgeuse' },
            { from: 'Meissa', to: 'Bellatrix' },
            { from: 'Betelgeuse', to: 'Alnitak' },
            { from: 'Bellatrix', to: 'Mintaka' },
            { from: 'Mintaka', to: 'Alnilam' },
            { from: 'Alnilam', to: 'Alnitak' },
            { from: 'Mintaka', to: 'Rigel' },
            { from: 'Alnitak', to: 'Saiph' },
            { from: 'Alnilam', to: 'Saiph' } // Sometimes drawn like this
        ]
    },
    {
        name: 'Cassiopeia',
        stars: ['Tsih', 'Schedar', 'Caph', 'Ruchbah'], // Tsih is Gamma Cas
        mythology: 'The Queen. Easily recognizable by its W shape.',
        lines: [
            { from: 'Caph', to: 'Schedar' },
            { from: 'Schedar', to: 'Tsih' },
            { from: 'Tsih', to: 'Ruchbah' }
        ]
    },
    {
        name: 'Crux',
        stars: ['Acrux', 'Mimosa', 'Gacrux'],
        mythology: 'The Southern Cross. The smallest of the 88 modern constellations.',
        lines: [
            { from: 'Acrux', to: 'Gacrux' },
            { from: 'Mimosa', to: 'Gacrux' } // Approximate
        ]
    },
    {
        name: 'Canis Major',
        stars: ['Sirius', 'Mirzam', 'Wezen', 'Adhara', 'Aludra'],
        mythology: 'The Great Dog. Contains Sirius, the brightest star in the night sky.',
        lines: [
            { from: 'Sirius', to: 'Mirzam' },
            { from: 'Sirius', to: 'Wezen' },
            { from: 'Wezen', to: 'Adhara' },
            { from: 'Wezen', to: 'Aludra' }
        ]
    },
    {
        name: 'Scorpius',
        stars: ['Antares', 'Shaula', 'Sargas', 'Dschubba'],
        mythology: 'The Scorpion. Associated with the story of Orion.',
        lines: [
            { from: 'Antares', to: 'Dschubba' },
            { from: 'Antares', to: 'Sargas' },
            { from: 'Sargas', to: 'Shaula' }
        ]
    },
    {
        name: 'Gemini',
        stars: ['Castor', 'Pollux', 'Alhena'],
        mythology: 'The Twins. Represents Castor and Pollux (Polydeuces).',
        lines: [
            { from: 'Castor', to: 'Pollux' },
            { from: 'Pollux', to: 'Alhena' }
        ]
    },
     {
        name: 'Leo',
        stars: ['Regulus', 'Denebola', 'Algieba', 'Zosma'],
        mythology: 'The Lion. Represents the Nemean Lion killed by Hercules.',
        lines: [
            { from: 'Regulus', to: 'Algieba' },
            { from: 'Algieba', to: 'Zosma' },
            { from: 'Zosma', to: 'Denebola' },
            { from: 'Regulus', to: 'Denebola' } // Base
        ]
    },
    {
        name: 'Pegasus',
        stars: ['Markab', 'Scheat', 'Enif', 'Alpheratz'], // Alpheratz shared with Andromeda
        mythology: 'The Winged Horse. Born from the blood of Medusa.',
        lines: [
            { from: 'Markab', to: 'Scheat' },
            { from: 'Scheat', to: 'Alpheratz' },
            { from: 'Alpheratz', to: 'Markab' },
            { from: 'Markab', to: 'Enif' } // Nose
        ]
    }
];


// --- Astronomy Math ---

const Astronomy = {
    degToRad: (deg) => deg * (Math.PI / 180),
    radToDeg: (rad) => rad * (180 / Math.PI),
    getJulianDate: (date) => (date.getTime() / 86400000) - (date.getTimezoneOffset() / 1440) + 2440587.5,
    getGST: (jd) => {
        const T = (jd - 2451545.0) / 36525.0;
        let gst = 280.46061837 + 360.98564736629 * (jd - 2451545.0) + T*T*(0.000387933 - T/38710000.0);
        return gst % 360;
    },
    getLST: (gst, longitude) => (gst + longitude) % 360,
    equatorialToHorizontal: (ra, dec, lat, lst) => {
        const decRad = Astronomy.degToRad(dec);
        const latRad = Astronomy.degToRad(lat);
        let H = lst - ra;
        if (H < 0) H += 360;
        const HRad = Astronomy.degToRad(H);
        const sinAlt = Math.sin(decRad) * Math.sin(latRad) + Math.cos(decRad) * Math.cos(latRad) * Math.cos(HRad);
        const altRad = Math.asin(sinAlt);
        const cosAz = (Math.sin(decRad) - Math.sin(latRad) * sinAlt) / (Math.cos(latRad) * Math.cos(altRad));
        let azRad = Math.acos(Math.max(-1, Math.min(1, cosAz)));
        if (Math.sin(HRad) > 0) azRad = 2 * Math.PI - azRad;
        return { alt: Astronomy.radToDeg(altRad), az: Astronomy.radToDeg(azRad) };
    },
    // Convert RA/Dec/Dist to Cartesian (X, Y, Z) where Z is up (North Pole)
    // X points to RA=0, Y points to RA=90
    sphericalToCartesian: (raDeg, decDeg, dist) => {
        const ra = Astronomy.degToRad(raDeg);
        const dec = Astronomy.degToRad(decDeg);
        // x = r * cos(dec) * cos(ra)
        // y = r * cos(dec) * sin(ra)
        // z = r * sin(dec)
        return {
            x: dist * Math.cos(dec) * Math.cos(ra),
            y: dist * Math.cos(dec) * Math.sin(ra),
            z: dist * Math.sin(dec)
        };
    },

    // Low-precision planetary position calculator
    // Returns RA (deg), Dec (deg)
    calculatePlanetPos: (planet, date) => {
        const d = Astronomy.getJulianDate(date) - 2451545.0; // days since J2000
        const elem = PlanetElements[planet];
        if (!elem) return null;

        const N = Astronomy.degToRad(elem.N);
        const i = Astronomy.degToRad(elem.i);
        const w = Astronomy.degToRad(elem.w);
        const a = elem.a;
        const e = elem.e;

        let M = elem.M + elem.L_rate * d; // Mean Anomaly
        M = M % 360;
        const M_rad = Astronomy.degToRad(M);

        // Solve Kepler: E - e*sin(E) = M
        let E = M_rad + e * Math.sin(M_rad) * (1.0 + e * Math.cos(M_rad));
        for(let iter=0; iter<5; iter++) {
            E = E - (E - e * Math.sin(E) - M_rad) / (1 - e * Math.cos(E));
        }

        const xv = a * (Math.cos(E) - e);
        const yv = a * (Math.sqrt(1.0 - e*e) * Math.sin(E));

        const v = Math.atan2(yv, xv);
        const r = Math.sqrt(xv*xv + yv*yv);

        // Heliocentric coords
        const xh = r * (Math.cos(N) * Math.cos(v+w) - Math.sin(N) * Math.sin(v+w) * Math.cos(i));
        const yh = r * (Math.sin(N) * Math.cos(v+w) + Math.cos(N) * Math.sin(v+w) * Math.cos(i));
        const zh = r * (Math.sin(v+w) * Math.sin(i));

        // Earth coords (Simple approximation using circular orbit for Earth, for relative pos)
        // For better accuracy, we should calculate Earth properly too, but this is a constellation viewer.
        // Let's use the same method for Earth:
        const d_earth = d;
        const M_e = (357.529 + 0.98560028 * d_earth) % 360;
        const M_e_rad = Astronomy.degToRad(M_e);
        const L_e = (280.466 + 0.98564736 * d_earth) % 360; // Mean longitude
        const L_e_rad = Astronomy.degToRad(L_e);
        const e_e = 0.0167;
        const r_e = 1.00014 * (1 - e_e * e_e) / (1 + e_e * Math.cos(M_e_rad)); // Approx dist
        // Earth Helocentric Coords
        const xe = r_e * Math.cos(L_e_rad);
        const ye = r_e * Math.sin(L_e_rad);
        const ze = 0;

        // Geocentric coords
        let xg = xh - xe;
        let yg = yh - ye;
        let zg = zh - ze;

        // Equatorial coords (rotate by obliquity of ecliptic ~23.44)
        const obl = Astronomy.degToRad(23.44);
        const x_eq = xg;
        const y_eq = yg * Math.cos(obl) - zg * Math.sin(obl);
        const z_eq = yg * Math.sin(obl) + zg * Math.cos(obl);

        const ra_rad = Math.atan2(y_eq, x_eq);
        const dec_rad = Math.atan2(z_eq, Math.sqrt(x_eq*x_eq + y_eq*y_eq));

        let ra = Astronomy.radToDeg(ra_rad);
        if (ra < 0) ra += 360;
        const dec = Astronomy.radToDeg(dec_rad);

        return { ra, dec, dist: Math.sqrt(xg*xg + yg*yg + zg*zg) };
    }
};

// --- 3D Camera & Math Helper ---
class Vector3 {
    constructor(x, y, z) { this.x = x; this.y = y; this.z = z; }
    add(v) { return new Vector3(this.x + v.x, this.y + v.y, this.z + v.z); }
    sub(v) { return new Vector3(this.x - v.x, this.y - v.y, this.z - v.z); }
    scale(s) { return new Vector3(this.x * s, this.y * s, this.z * s); }
    dot(v) { return this.x * v.x + this.y * v.y + this.z * v.z; }
    cross(v) {
        return new Vector3(
            this.y * v.z - this.z * v.y,
            this.z * v.x - this.x * v.z,
            this.x * v.y - this.y * v.x
        );
    }
    normalize() {
        const m = Math.sqrt(this.x*this.x + this.y*this.y + this.z*this.z);
        return m > 0 ? this.scale(1/m) : new Vector3(0,0,0);
    }
}

// --- Rendering & App Logic ---

class SkyApp {
    constructor() {
        this.container = document.getElementById('star-map');
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.container.appendChild(this.canvas);

        this.initUI();

        this.width = this.container.clientWidth;
        this.height = this.container.clientHeight;

        // Earth Mode State
        this.mode = 'EARTH'; // 'EARTH' or 'GALAXY'
        this.latitude = 40.7128;
        this.longitude = -74.0060;
        this.date = new Date();
        this.scale = 1.0;

        // Galaxy Mode State
        this.camera = {
            pos: new Vector3(0, 0, 0),
            vel: new Vector3(0, 0, 0),
            yaw: 0, // Radians, rotation around Z (Azimuth)
            pitch: 0, // Radians, Up/Down
            roll: 0, // Radians, banking
            fov: 60, // Degrees
            baseSpeed: 1.0, // light years per tick/sec
            warpFactor: 0, // 0 to 1, visual effect intensity
        };
        this.lastYaw = 0;
        this.keys = {};
        this.isAnimating = false; // Flag to disable physics during animation

        this.renderedStars = [];
        this.backgroundStars = [];

        this.initStars();

        window.addEventListener('resize', () => this.resize());
        this.setupControls();
        this.resize();
        this.startLoop();
    }

    initUI() {
        // Popup Element
        this.popup = document.createElement('div');
        this.popup.id = 'star-popup';
        this.popup.style.display = 'none';
        this.popup.style.position = 'absolute';
        this.popup.style.backgroundColor = 'rgba(20, 20, 35, 0.95)';
        this.popup.style.border = '1px solid #444466';
        this.popup.style.padding = '10px';
        this.popup.style.borderRadius = '5px';
        this.popup.style.color = '#fff';
        this.popup.style.pointerEvents = 'none';
        this.popup.style.zIndex = '100';
        this.popup.style.boxShadow = '0 0 10px rgba(0,0,0,0.5)';
        this.popup.style.maxWidth = '250px';
        this.popup.style.fontSize = '12px';
        this.container.appendChild(this.popup);

        // Search Results container
        this.searchResults = document.createElement('div');
        this.searchResults.id = 'search-results';
        document.querySelector('#search-input').parentNode.appendChild(this.searchResults);
    }

    initStars() {
        // Parse distances and calculate 3D positions
        for (const [name, data] of stars) {
            let dist = 1000; // Default fallback
            if (data.dist) {
                const match = data.dist.match(/([\d\.,]+)/); // match commas too
                if (match) dist = parseFloat(match[1].replace(/,/g, ''));
                if (data.dist.includes('million')) dist *= 1000000;
            }
            data.distanceLy = dist;

            // Calculate 3D position (Earth = 0,0,0)
            data.pos3d = Astronomy.sphericalToCartesian(data.ra, data.dec, dist);
        }

        // Initialize Background Stars (Procedural Universe)
        // We want a dense field for "traversal" feel.
        const bgCount = 50000;
        this.backgroundStars = [];
        const types = Object.keys(SpectralColors).filter(k => k.length === 1); // OBAFGKM

        // Generate Milky Way Disk approximation + Halo
        for (let i = 0; i < bgCount; i++) {
            // Mix of Disk and Sphere for better visual
            const isDisk = Math.random() > 0.2;
            let x, y, z;

            if (isDisk) {
                // Disk
                const rNorm = Math.random();
                const r = 50000 * rNorm * rNorm; // Bias to center
                const theta = Math.random() * Math.PI * 2;
                const h = (Math.random() - 0.5) * 1000;
                // Galactic center coords
                const gx = r * Math.cos(theta);
                const gy = r * Math.sin(theta);
                const gz = h;
                // Shift to Earth (Sun is approx 26k ly from center)
                x = gx + 26000;
                y = gy;
                z = gz;
            } else {
                // Halo / Sphere
                const dist = 10 * Math.pow(5000, Math.random());
                const theta = Math.random() * Math.PI * 2;
                const phi = Math.acos(2 * Math.random() - 1);
                x = dist * Math.sin(phi) * Math.cos(theta);
                y = dist * Math.sin(phi) * Math.sin(theta);
                z = dist * Math.cos(phi);
            }

            const dist = Math.sqrt(x*x + y*y + z*z);

            // Assign random spectral type
            const r = Math.random();
            let type = 'M';
            if (r > 0.99) type = 'O';
            else if (r > 0.95) type = 'B';
            else if (r > 0.90) type = 'A';
            else if (r > 0.80) type = 'F';
            else if (r > 0.70) type = 'G';
            else if (r > 0.50) type = 'K';

            this.backgroundStars.push({
                pos3d: {x,y,z},
                mag: 2 + Math.random() * 10,
                dist,
                colorCode: type,
                color: SpectralColors[type],
                isProcedural: true
            });
        }

        // Add procedural distant galaxies (Universe Scale)
        for (let i = 0; i < 1000; i++) {
             const dist = 200000 + Math.random() * 10000000; // 200k to 10M ly
             const theta = Math.random() * Math.PI * 2;
             const phi = Math.acos(2 * Math.random() - 1);
             const x = dist * Math.sin(phi) * Math.cos(theta);
             const y = dist * Math.sin(phi) * Math.sin(theta);
             const z = dist * Math.cos(phi);

             this.backgroundStars.push({
                 pos3d: {x,y,z},
                 dist,
                 color: '#aaddff',
                 isGalaxy: true,
                 isProcedural: true,
                 mag: 5
             });
        }

        // Initialize DSOs 3D positions and clone for Galaxy View interaction
        this.galaxyDSOs = DSOs.map(dso => {
             let dist = 10000;
             const match = dso.dist.match(/([\d\.,]+)/);
             if (match) dist = parseFloat(match[1].replace(/,/g, ''));
             if (dso.dist.includes('million')) dist *= 1000000;

             const coords = Astronomy.sphericalToCartesian(dso.ra * 15, dso.dec, dist);
             const pos3d = new Vector3(coords.x, coords.y, coords.z);

             // Random Velocity for "Navigating" effect (slow drift)
             const vel = new Vector3(
                 (Math.random()-0.5) * 5,
                 (Math.random()-0.5) * 5,
                 (Math.random()-0.5) * 5
             );

             // Update original DSOs with pos3d for Earth View too
             dso.distanceLy = dist;
             dso.pos3d = coords; // Keep as plain object for others if needed, or use Vector3 consistently.
             // Currently Earth View uses simple projection which expects {x,y,z}, works with both.

             return { ...dso, distanceLy: dist, pos3d, vel };
        });
    }

    setupControls() {
        // UI Controls
        const latInput = document.getElementById('location-lat');
        const lonInput = document.getElementById('location-lon');
        const dateInput = document.getElementById('datetime');
        const setNowBtn = document.getElementById('btn-set-now');
        const useLocBtn = document.getElementById('btn-use-location');
        const searchInput = document.getElementById('search-input');

        // Mode Toggles
        const btnEarth = document.getElementById('btn-mode-earth');
        const btnGalaxy = document.getElementById('btn-mode-galaxy');

        // Galaxy Controls
        const flySpeed = document.getElementById('fly-speed');
        const speedVal = document.getElementById('speed-val');
        const resetView = document.getElementById('btn-reset-view');
        const travelBtn = document.getElementById('btn-travel-to');

        this.updateInputs();

        // Mode Switching
        const setModeUI = (m) => {
            this.mode = m;
            if (m === 'EARTH') {
                document.getElementById('earth-controls').style.display = 'block';
                document.getElementById('galaxy-controls').style.display = 'none';
                document.getElementById('galaxy-hud').style.display = 'none';
                btnEarth.classList.add('active');
                btnGalaxy.classList.remove('active');
            } else {
                document.getElementById('earth-controls').style.display = 'none';
                document.getElementById('galaxy-controls').style.display = 'block';
                document.getElementById('galaxy-hud').style.display = 'block';
                btnEarth.classList.remove('active');
                btnGalaxy.classList.add('active');
            }
        };

        // Transition Logic
        this.transitionToGalaxy = () => {
             if (this.mode === 'GALAXY') return;

             // 1. Switch UI immediately or fade? Let's switch to Galaxy Mode
             // But set camera to look at Earth from close up
             setModeUI('GALAXY');

             // Start Position: 20 ly away, looking at Earth (0,0,0)
             this.camera.pos = new Vector3(0, -20, 10);
             this.camera.yaw = Math.PI / 2; // Look at +Y? No, if pos is -Y, looking +Y is towards Earth.
             // Forward vector from (0, -20, 10) to (0,0,0) is (0, 20, -10).
             // Normalize: (0, 0.89, -0.44).
             // asin(-0.44) = pitch
             this.camera.pitch = Math.asin(-0.44);
             // atan2(0.89, 0) = PI/2 (90 deg) = Yaw. Correct.
             this.camera.yaw = Math.PI / 2;

             this.camera.vel = new Vector3(0,0,0);

             // Animate "Launch" - Move backwards quickly
             const target = new Vector3(0, -1000, 500);
             this.animateCameraTo(target, new Vector3(0,0,0));
        };

        this.transitionToEarth = () => {
             if (this.mode === 'EARTH') return;

             // Fly to Earth
             const earthPos = new Vector3(0,0,0);
             // Animate to Earth, then switch UI
             this.animateCameraTo(earthPos, null, () => {
                 setModeUI('EARTH');
             });
        };

        btnEarth.addEventListener('click', () => this.transitionToEarth());
        btnGalaxy.addEventListener('click', () => this.transitionToGalaxy());

        // Earth Inputs
        latInput.addEventListener('change', (e) => this.latitude = parseFloat(e.target.value));
        lonInput.addEventListener('change', (e) => this.longitude = parseFloat(e.target.value));
        dateInput.addEventListener('change', (e) => this.date = new Date(e.target.value));

        setNowBtn.addEventListener('click', () => {
            this.date = new Date();
            this.updateInputs();
        });

        useLocBtn.addEventListener('click', () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition((pos) => {
                    this.latitude = pos.coords.latitude;
                    this.longitude = pos.coords.longitude;
                    this.updateInputs();
                });
            }
        });

        // Galaxy Inputs
        flySpeed.addEventListener('input', (e) => {
            this.camera.baseSpeed = parseFloat(e.target.value);
            speedVal.textContent = this.camera.baseSpeed.toFixed(1);
        });

        resetView.addEventListener('click', () => {
            this.animateCameraTo(new Vector3(0,0,0));
        });

        travelBtn.addEventListener('click', () => {
            if (this.selectedObject) {
                // If it's a star or DSO
                const s = this.selectedObject.data;
                if (s && s.pos3d) {
                    if (this.mode === 'EARTH') setModeUI('GALAXY');
                    const target = new Vector3(s.pos3d.x, s.pos3d.y, s.pos3d.z);
                    const dir = target.normalize();
                    // Go to 0.05 ly away for stars to see orbits, or farther if it's a big DSO
                    const standoffDist = s.distanceLy > 100000 ? 50000 : 0.05;
                    const standOff = target.sub(dir.scale(standoffDist));

                    this.animateCameraTo(standOff, target);
                }
            }
        });

        // Search
        searchInput.addEventListener('input', (e) => this.handleSearch(e.target.value));
        searchInput.addEventListener('blur', () => setTimeout(() => this.searchResults.style.display = 'none', 200));
        searchInput.addEventListener('focus', (e) => this.handleSearch(e.target.value));

        // Input Handling
        this.canvas.addEventListener('wheel', (e) => {
            e.preventDefault();
            if (this.mode === 'EARTH') {
                this.scale *= (e.deltaY > 0 ? 0.9 : 1.1);
                this.scale = Math.max(0.5, Math.min(this.scale, 5));
            } else {
                const speed = this.camera.baseSpeed * 5;
                const dir = this.getCameraDirection();
                const move = dir.scale(e.deltaY > 0 ? -speed : speed);
                this.camera.pos = this.camera.pos.add(move);
            }
        });

        this.canvas.addEventListener('mousemove', (e) => this.handleInputMove(e));
        this.canvas.addEventListener('mousedown', (e) => this.mouseDown = true);
        this.canvas.addEventListener('mouseup', (e) => this.mouseDown = false);
        this.canvas.addEventListener('click', (e) => this.handleClick(e));

        // Keyboard for flying
        window.addEventListener('keydown', (e) => this.keys[e.code] = true);
        window.addEventListener('keyup', (e) => this.keys[e.code] = false);
    }

    animateCameraTo(targetPos, lookAtPos = null, onComplete = null) {
        this.isAnimating = true; // Disable physics

        const startPos = this.camera.pos;
        const startYaw = this.camera.yaw;
        const startPitch = this.camera.pitch;

        let endYaw = startYaw;
        let endPitch = startPitch;

        if (lookAtPos) {
            // Vector from New Camera Pos (targetPos) to Object (lookAtPos)
            const forward = lookAtPos.sub(targetPos).normalize();

            // Calculate Yaw/Pitch from forward vector
            endPitch = Math.asin(forward.z);
            endYaw = Math.atan2(forward.y, forward.x);
        }

        let startTime = null;
        const duration = 2000; // 2 seconds

        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);

            // Ease in out cubic
            const ease = progress < 0.5 ? 4 * progress * progress * progress : 1 - Math.pow(-2 * progress + 2, 3) / 2;

            this.camera.pos = new Vector3(
                startPos.x + (targetPos.x - startPos.x) * ease,
                startPos.y + (targetPos.y - startPos.y) * ease,
                startPos.z + (targetPos.z - startPos.z) * ease
            );

            // Warp Effect Intensity (Peak at 0.5)
            // 0 -> 1 -> 0
            if (progress < 0.5) {
                this.camera.warpFactor = progress * 2;
            } else {
                this.camera.warpFactor = (1 - progress) * 2;
            }

            // Interpolate angles properly (shortest path logic omitted for brevity, usually small change)
            this.camera.yaw = startYaw + (endYaw - startYaw) * ease;
            this.camera.pitch = startPitch + (endPitch - startPitch) * ease;

            // Update HUD manually during animation since physics is disabled
            const hudEl = document.getElementById('galaxy-hud');
            if (hudEl) {
                hudEl.innerHTML = `<span style="color:yellow">Warping...</span>`;
            }

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                this.isAnimating = false; // Re-enable physics
                this.camera.warpFactor = 0; // Reset warp
                this.camera.vel = new Vector3(0,0,0); // Stop momentum
                this.updatePhysics(); // Update HUD immediately
                if (onComplete) onComplete();
            }
        };
        requestAnimationFrame(animate);
    }

    handleSearch(term) {
        this.searchResults.innerHTML = '';
        if (!term || term.length < 2) {
            this.searchResults.style.display = 'none';
            return;
        }

        const results = [];
        const lowerTerm = term.toLowerCase();

        // Stars
        for (const [name, data] of stars) {
            if (name.toLowerCase().includes(lowerTerm)) {
                results.push({ type: 'Star', name, data });
            }
        }
        // Planets
        Object.keys(PlanetElements).forEach(p => {
             if (p.toLowerCase().includes(lowerTerm)) {
                 results.push({ type: 'Planet', name: p, data: {} });
             }
        });
        // DSOs
        DSOs.forEach(dso => {
            if (dso.name.toLowerCase().includes(lowerTerm)) {
                results.push({ type: 'DSO', name: dso.name, data: dso });
            }
        });
        // Constellations
        constellations.forEach(c => {
            if (c.name.toLowerCase().includes(lowerTerm)) {
                results.push({ type: 'Constellation', name: c.name, data: c });
            }
        });

        if (results.length > 0) {
            this.searchResults.style.display = 'block';
            results.slice(0, 10).forEach(res => {
                const div = document.createElement('div');
                div.className = 'search-result-item';
                div.textContent = `${res.name} (${res.type})`;
                div.addEventListener('click', () => {
                   this.selectObject(res);
                });
                this.searchResults.appendChild(div);
            });
        } else {
            this.searchResults.style.display = 'none';
        }
    }

    selectObject(obj) {
        stars.forEach(s => s.highlighted = false);
        constellations.forEach(c => c.highlighted = false);
        DSOs.forEach(d => d.highlighted = false);

        this.selectedObject = obj;
        document.getElementById('travel-controls').style.display = 'none';

        if (obj.type === 'Star') {
            const s = stars.get(obj.name);
            if (s) {
                s.highlighted = true;
                this.selectedObject = { type: 'Star', name: obj.name, data: s };
                document.getElementById('travel-controls').style.display = 'block';
                this.showInfoPanel(obj.name, s);
            }
        } else if (obj.type === 'Planet') {
             this.showInfoPanel(obj.name, { type: 'Planet' }, false);
        } else if (obj.type === 'DSO') {
            obj.data.highlighted = true;
            document.getElementById('travel-controls').style.display = 'block';
            this.showInfoPanel(obj.name, obj.data);
        } else if (obj.type === 'Constellation') {
            obj.data.highlighted = true;
            obj.data.stars.forEach(sName => {
                const s = stars.get(sName);
                if (s) s.highlighted = true;
            });
            this.showInfoPanel(obj.name, obj.data, true);
        }
    }

    updateInputs() {
        document.getElementById('location-lat').value = this.latitude;
        document.getElementById('location-lon').value = this.longitude;
        const d = this.date;
        const pad = (n) => n < 10 ? '0' + n : n;
        const str = `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
        document.getElementById('datetime').value = str;
    }

    resize() {
        this.width = this.container.clientWidth;
        this.height = this.container.clientHeight;
        this.canvas.width = this.width;
        this.canvas.height = this.height;
    }

    // --- 3D Logic ---

    getCameraDirection() {
        const cosP = Math.cos(this.camera.pitch);
        return new Vector3(
            cosP * Math.cos(this.camera.yaw),
            cosP * Math.sin(this.camera.yaw),
            Math.sin(this.camera.pitch)
        );
    }

    getCameraRight() {
        // Forward
        const f = this.getCameraDirection();
        // Up (Global Z)
        let u = new Vector3(0,0,1);
        // Right = f x u
        // If f is vertical (0,0,1), this is singular.
        if (Math.abs(f.z) > 0.99) u = new Vector3(1,0,0);

        const r = f.cross(u).normalize();

        // Apply Roll
        if (this.camera.roll !== 0) {
            const cos = Math.cos(this.camera.roll);
            const sin = Math.sin(this.camera.roll);
            const up_base = r.cross(f); // The 'up' vector before roll

            // Rotate r around f
            return new Vector3(
                r.x * cos + up_base.x * sin,
                r.y * cos + up_base.y * sin,
                r.z * cos + up_base.z * sin
            );
        }
        return r;
    }

    getCameraUp() {
        const f = this.getCameraDirection();
        const r = this.getCameraRight();
        return r.cross(f).normalize();
    }

    project3D(pos3d) {
        // Handle if pos3d is a plain object {x,y,z} or Vector3
        let px, py, pz;
        if (pos3d instanceof Vector3) {
            px = pos3d.x; py = pos3d.y; pz = pos3d.z;
        } else {
            px = pos3d.x; py = pos3d.y; pz = pos3d.z;
        }

        const dx = px - this.camera.pos.x;
        const dy = py - this.camera.pos.y;
        const dz = pz - this.camera.pos.z;

        const f = this.getCameraDirection();
        const r = this.getCameraRight();
        const u = this.getCameraUp();

        // Project onto basis manually to avoid vector allocation in tight loops
        const z = dx*f.x + dy*f.y + dz*f.z;
        if (z <= 0) return null; // Behind camera

        const x = dx*r.x + dy*r.y + dz*r.z;
        const y = dx*u.x + dy*u.y + dz*u.z;

        // Perspective projection
        // FOV 60 deg -> tan(30) = 0.577
        const scale = (this.height / 2) / Math.tan(Astronomy.degToRad(this.camera.fov / 2));

        const sx = (x / z) * scale + this.width / 2;
        const sy = -(y / z) * scale + this.height / 2; // Invert Y for screen

        return { x: sx, y: sy, z: z, dist: Math.sqrt(dx*dx + dy*dy + dz*dz) };
    }

    handleInputMove(e) {
        // Handle hovering
        const rect = this.canvas.getBoundingClientRect();
        const mx = e.clientX - rect.left;
        const my = e.clientY - rect.top;

        // Mouse Look in 3D mode (if dragging)
        if (this.mode === 'GALAXY' && this.mouseDown) {
            const sensitivity = 0.005;
            this.camera.yaw -= e.movementX * sensitivity;
            this.camera.pitch -= e.movementY * sensitivity;
            // Clamp pitch
            this.camera.pitch = Math.max(-Math.PI/2 + 0.1, Math.min(Math.PI/2 - 0.1, this.camera.pitch));
            return;
        }

        const hit = this.findHit(mx, my);
        if (hit) {
            this.canvas.style.cursor = 'pointer';
            this.showPopup(mx, my, hit);
        } else {
            this.canvas.style.cursor = 'default';
            this.hidePopup();
        }
    }

    updatePhysics() {
        if (this.mode !== 'GALAXY') return;
        if (this.isAnimating) return; // Skip physics during warp

        // Speed Modifiers
        let speed = this.camera.baseSpeed;
        if (this.keys['ShiftLeft']) speed *= 10; // Sprint
        if (this.keys['ControlLeft']) speed *= 100; // Hyperdrive

        // Target Velocity based on input
        const f = this.getCameraDirection();
        const r = this.getCameraRight();
        const u = new Vector3(0,0,1); // Global Up for Space/Ctrl vertical movement?
        // Actually Space usually is Up relative to camera or global?
        // Let's use Camera Up for free flight feel
        const camU = this.getCameraUp();

        let targetVel = new Vector3(0,0,0);

        if (this.keys['KeyW']) targetVel = targetVel.add(f);
        if (this.keys['KeyS']) targetVel = targetVel.sub(f);
        if (this.keys['KeyA']) targetVel = targetVel.sub(r);
        if (this.keys['KeyD']) targetVel = targetVel.add(r);
        if (this.keys['Space']) targetVel = targetVel.add(camU); // Up
        if (this.keys['KeyC']) targetVel = targetVel.sub(camU);  // Down (Control is used for speed, so use C)

        if (targetVel.dot(targetVel) > 0) {
            targetVel = targetVel.normalize().scale(speed);
        }

        // Smooth Acceleration (Lerp velocity)
        const inertia = 0.1; // 0.0 = no inertia (instant), 1.0 = no change
        this.camera.vel = new Vector3(
            this.camera.vel.x + (targetVel.x - this.camera.vel.x) * inertia,
            this.camera.vel.y + (targetVel.y - this.camera.vel.y) * inertia,
            this.camera.vel.z + (targetVel.z - this.camera.vel.z) * inertia
        );

        this.camera.pos = this.camera.pos.add(this.camera.vel);

        // Banking/Roll Physics
        // Calculate Yaw Delta
        const yawDelta = this.camera.yaw - this.lastYaw;
        this.lastYaw = this.camera.yaw;

        // Target Roll depends on yaw change (banking into turn)
        // Invert sign depending on desired feel (usually roll right for right turn?)
        // If I turn right (yaw decreases? or increases?), I bank right.
        // Yaw increases CCW (left). So if yaw increases, bank left (roll > 0?)
        // Let's test: Yaw increase -> Roll positive.
        const targetRoll = -yawDelta * 30.0; // Scale factor

        // Smoothly interpolate roll
        this.camera.roll += (targetRoll - this.camera.roll) * 0.1;


        // Update Galaxy DSOs positions (Galaxies navigating)
        if (this.galaxyDSOs) {
            this.galaxyDSOs.forEach(dso => {
                if (dso.vel) {
                     // Scale velocity by time? Currently just per frame.
                     // Galaxies move very slowly in reality, but for effect we make them drift.
                     dso.pos3d = dso.pos3d.add(dso.vel.scale(0.01));
                }
            });
        }

        // Update HUD
        const p = this.camera.pos;

        // Find nearest star
        let nearest = null;
        let minD = Infinity;
        // Check named stars only for performance in HUD
        for (const [name, data] of stars) {
             const d = Math.sqrt(
                 (p.x - data.pos3d.x)**2 +
                 (p.y - data.pos3d.y)**2 +
                 (p.z - data.pos3d.z)**2
             );
             if (d < minD) {
                 minD = d;
                 nearest = name;
             }
        }

        const hudText = `Pos: ${p.x.toFixed(0)}, ${p.y.toFixed(0)}, ${p.z.toFixed(0)} ly`;
        const nearestText = nearest ? ` | Nearest: ${nearest} (${minD.toFixed(1)} ly)` : '';

        const hudEl = document.getElementById('galaxy-hud');
        if (hudEl) {
            hudEl.innerHTML = hudText + nearestText;
        }
    }

    // --- Draw ---

    draw() {
        if (this.mode === 'GALAXY') this.updatePhysics();

        const ctx = this.ctx;
        ctx.clearRect(0, 0, this.width, this.height);

        if (this.mode === 'EARTH') {
            this.drawEarthView(ctx);
        } else {
            this.drawGalaxyView(ctx);
        }
    }

    drawEarthView(ctx) {
        const jd = Astronomy.getJulianDate(this.date);
        const gst = Astronomy.getGST(jd);
        const lst = Astronomy.getLST(gst, this.longitude);

        const cx = this.width / 2;
        const cy = this.height / 2;
        const horizonRadius = Math.min(this.width, this.height) / 2 * 0.9 * this.scale;

        // Draw Horizon
        ctx.beginPath();
        ctx.arc(cx, cy, horizonRadius, 0, Math.PI * 2);
        ctx.strokeStyle = '#303050';
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.fillStyle = '#0b0b15';
        ctx.fill();

        // Milky Way Band Approximation (Static)
        // Just a faint gradient band across the sky
        ctx.save();
        ctx.beginPath();
        ctx.arc(cx, cy, horizonRadius, 0, Math.PI * 2);
        ctx.clip();

        // Calculate Milky Way orientation (roughly)
        // Galactic Center is at RA 17h 45m (266 deg), Dec -29
        // Convert to Horizon coords
        const mwPos = Astronomy.equatorialToHorizontal(266, -29, this.latitude, lst);
        // Draw a wide gradient band through the center point
        // This is a very rough visual hack
        if (mwPos.alt > -90) {
            // Only draw if roughly visible context
        }
        ctx.restore();


        // Markers
        ctx.fillStyle = '#90caf9';
        ctx.font = '16px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('N', cx, cy - horizonRadius - 15);
        ctx.fillText('S', cx, cy + horizonRadius + 15);
        ctx.fillText('E', cx - horizonRadius - 15, cy);
        ctx.fillText('W', cx + horizonRadius + 15, cy);

        this.renderedStars = [];

        // Project Function for Earth View (Stereographic)
        const project = (alt, az) => {
            const zenithDist = 90 - alt;
            if (zenithDist < 0) return null;
            const r = (zenithDist / 90) * horizonRadius;
            const angle = Astronomy.degToRad(az - 90);
            return {
                x: cx - r * Math.cos(angle),
                y: cy + r * Math.sin(angle)
            };
        };

        // Draw Background stars
        ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
        this.backgroundStars.forEach(bg => {
             const pos = Astronomy.equatorialToHorizontal(bg.ra, bg.dec, this.latitude, lst);
             if (pos.alt >= 0) {
                 const xy = project(pos.alt, pos.az);
                 if (xy) ctx.fillRect(xy.x, xy.y, 1, 1);
             }
        });

        // Draw DSOs
        DSOs.forEach(dso => {
            const pos = Astronomy.equatorialToHorizontal(dso.ra * 15, dso.dec, this.latitude, lst);
            if (pos.alt >= 0) {
                const xy = project(pos.alt, pos.az);
                if (xy) {
                    this.renderedStars.push({ name: dso.name, ...dso, ...xy, isDSO: true });
                }
            }
        });

        // Draw Planets
        Object.keys(PlanetElements).forEach(planet => {
             const coords = Astronomy.calculatePlanetPos(planet, this.date);
             if (coords) {
                 const pos = Astronomy.equatorialToHorizontal(coords.ra, coords.dec, this.latitude, lst);
                 if (pos.alt >= 0) {
                     const xy = project(pos.alt, pos.az);
                     if (xy) {
                         // Add to list for interaction
                         this.renderedStars.push({ name: planet, ...coords, ...xy, isPlanet: true });
                     }
                 }
             }
        });

        // Main Stars
        for (const [name, data] of stars) {
            const pos = Astronomy.equatorialToHorizontal(data.ra, data.dec, this.latitude, lst);
            if (pos.alt >= 0) {
                const xy = project(pos.alt, pos.az);
                if (xy) {
                    this.renderedStars.push({ name, ...data, ...xy, isStar: true });
                }
            }
        }

        this.drawConstellationsAndStars(ctx);
    }

    drawGalaxyView(ctx) {
        this.tick = (this.tick || 0) + 1;
        this.renderedStars = [];

        // Draw a tiny crosshair to verify rendering (center)
        ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
        ctx.fillRect(this.width/2 - 2, this.height/2 - 2, 4, 4);

        // Advanced Sun Renderer
        const drawSun = (x, y, r, color, glowColor, seed = 0) => {
            // Base Glow
            const grad = ctx.createRadialGradient(x, y, r * 0.2, x, y, r * 1.5);
            grad.addColorStop(0, '#ffffff'); // Core
            grad.addColorStop(0.2, color);   // Surface
            grad.addColorStop(0.5, glowColor); // Corona
            grad.addColorStop(1, 'rgba(0,0,0,0)'); // Fade

            ctx.fillStyle = grad;
            ctx.beginPath();
            ctx.arc(x, y, r * 1.5, 0, Math.PI * 2);
            ctx.fill();

            // "Flames" / Surface animation
            // We simulate this by drawing rotated noise-like polygons
            ctx.save();
            ctx.translate(x, y);
            ctx.globalCompositeOperation = 'lighter';

            const count = 3;
            for(let i=0; i<count; i++) {
                ctx.rotate(this.tick * 0.005 * (i+1) + seed);
                ctx.fillStyle = glowColor;
                ctx.globalAlpha = 0.3;
                ctx.beginPath();
                const steps = 12;
                for(let j=0; j<=steps; j++) {
                    const theta = (j/steps) * Math.PI * 2;
                    // Wobbly radius
                    const rad = r * (0.8 + 0.2 * Math.sin(theta * 5 + this.tick * 0.1 + i));
                    ctx.lineTo(rad * Math.cos(theta), rad * Math.sin(theta));
                }
                ctx.fill();
            }
            ctx.restore();
            ctx.globalCompositeOperation = 'source-over'; // Reset
            ctx.globalAlpha = 1.0;
        };

        // 1. Draw Background/Procedural Stars first (Furthest)

        // Calculate Warp Intensity
        const speed = this.camera.vel.length();
        const warpIntensity = this.camera.warpFactor + Math.min(speed, 5.0) * 0.05;
        const cx = this.width / 2;
        const cy = this.height / 2;

        this.backgroundStars.forEach(bg => {
            const proj = this.project3D(bg.pos3d);
            if (!proj) return;

            if (bg.isGalaxy) {
                 // Draw as fuzzy dot
                 ctx.fillStyle = bg.color;
                 ctx.globalAlpha = 0.8;
                 ctx.fillRect(proj.x, proj.y, 2, 2);
                 ctx.globalAlpha = 1.0;
                 return;
            }

            // Normal star
            let alpha = Math.min(1, 1000 / proj.dist);
            if (alpha < 0.1) alpha = 0.1;

            // If we are VERY close to a procedural star (< 1 ly)
            if (proj.dist < 1) {
                 const sunRadius = Math.max(50, 1000 / proj.dist);
                 drawSun(proj.x, proj.y, sunRadius, bg.color, bg.color, bg.pos3d.x);
                 this.renderedStars.push({ name: 'Unknown Star', ...bg, ...proj, isStar: true, isProcedural: true });

                 // Draw Procedural Orbits if extremely close
                 if (proj.dist < 0.1) {
                     this.drawProceduralSystem(ctx, proj.x, proj.y, proj.dist, bg.pos3d.x);
                 }
                 return;
            }

            // Optimization: Use fillRect for small stars
            const size = (2000 / proj.dist);
            ctx.fillStyle = bg.color;
            ctx.globalAlpha = alpha;

            if (warpIntensity > 0.05) {
                // Draw Streak
                // Vector from center
                const vx = proj.x - cx;
                const vy = proj.y - cy;
                const distFromCenter = Math.sqrt(vx*vx + vy*vy);

                // Scale streak by distance from center (perspective warp)
                // and warpIntensity
                const streakLen = Math.min(distFromCenter * warpIntensity, 200);

                if (streakLen > 2) {
                    ctx.beginPath();
                    ctx.moveTo(proj.x, proj.y);
                    // Draw inwards? No, moving forward stars go OUT.
                    // So tail is inwards.
                    const tailX = proj.x - (vx / distFromCenter) * streakLen;
                    const tailY = proj.y - (vy / distFromCenter) * streakLen;
                    ctx.lineTo(tailX, tailY);
                    ctx.lineWidth = Math.max(1, size);
                    ctx.strokeStyle = bg.color;
                    ctx.stroke();
                } else {
                     ctx.fillRect(proj.x, proj.y, Math.max(1, size), Math.max(1, size));
                }
            } else {
                if (size < 2) {
                    ctx.fillRect(proj.x, proj.y, Math.max(1, size), Math.max(1, size));
                } else {
                    ctx.beginPath();
                    ctx.arc(proj.x, proj.y, size, 0, Math.PI * 2);
                    ctx.fill();
                }
            }
            ctx.globalAlpha = 1.0;
        });


        // 2. Draw DSOs (Galaxies) - Use this.galaxyDSOs if available (Galaxy Mode), else static DSOs (Earth Mode uses DSOs global)
        const targetDSOs = this.galaxyDSOs || DSOs;
        targetDSOs.forEach(dso => {
            if (dso.pos3d) {
                const proj = this.project3D(dso.pos3d);
                if (proj) {
                    this.renderedStars.push({ name: dso.name, ...dso, ...proj, isDSO: true });
                }
            }
        });

        // 3. Draw Earth
        const earthProj = this.project3D(new Vector3(0,0,0));
        if (earthProj) {
             if (earthProj.dist < 10) {
                 // Draw Blue Marble
                 const r = 200 / earthProj.dist;
                 drawSun(earthProj.x, earthProj.y, r, '#00aaff', '#0055aa');
             } else {
                 ctx.fillStyle = '#00aaff';
                 ctx.beginPath();
                 ctx.arc(earthProj.x, earthProj.y, Math.max(2, 500/earthProj.dist), 0, Math.PI*2);
                 ctx.fill();
             }
             ctx.fillStyle = '#fff';
             ctx.fillText('Earth', earthProj.x, earthProj.y + 10);
        }

        // 4. Draw Main Named Stars
        for (const [name, data] of stars) {
            const proj = this.project3D(data.pos3d);
            if (proj) {
                // Determine color
                let color = SpectralColors[data.colorCode] || '#ffffff';

                // If close
                if (proj.dist < 10) {
                     // Extreme Close Up
                     const visualSize = Math.max(3, 100 / proj.dist);

                     if (visualSize > 10) {
                         drawSun(proj.x, proj.y, visualSize, color, color);
                     } else {
                         // Normal star draw
                     }

                     // Draw Procedural Orbits if extremely close (even for named stars)
                     if (proj.dist < 0.1) {
                        this.drawProceduralSystem(ctx, proj.x, proj.y, proj.dist, data.ra);
                     }
                }

                this.renderedStars.push({ name, ...data, ...proj, isStar: true, color });
            }
        }

        this.drawConstellationsAndStars(ctx);
    }

    drawProceduralSystem(ctx, sx, sy, distToStar, seed) {
         // distToStar is distance from camera to star in ly.
         // If we are < 0.1 ly, we are inside the system.
         // Draw orbits.

         // Use a consistent seeded random
         const random = (s) => {
             const x = Math.sin(s) * 10000;
             return x - Math.floor(x);
         };

         ctx.strokeStyle = 'rgba(255,255,255,0.3)';
         ctx.lineWidth = 1;

         // Generate deterministic planets based on seed
         const numPlanets = 3 + Math.floor(random(seed) * 5);

         for(let i=0; i<numPlanets; i++) {
             // Fake orbit radius in Ly (very small)
             // We scale it up for visualization so it's visible when "inside" the system
             // Let's say the system view spans 0.0001 Ly.
             // We need to project the 3D orbit, but here we cheat and draw 2D ellipses facing camera
             // because full 3D orbital mechanics + projection in this simple engine is complex.
             // However, to make it "navigate interactively", we should try to project if possible.
             // But for now, 2D overlay centered on star is "good enough" for the requested effect.

             const orbitRadiusScreen = (this.height / 3) * ((i+1) / numPlanets) * (0.01 / distToStar);

             if (orbitRadiusScreen > this.width * 2) continue;
             if (orbitRadiusScreen < 10) continue;

             ctx.beginPath();
             ctx.ellipse(sx, sy, orbitRadiusScreen, orbitRadiusScreen * 0.4, this.tick * 0.001, 0, Math.PI*2);
             ctx.stroke();

             // Draw Planet
             const speed = 0.005 / (i+1);
             const angle = this.tick * speed + random(seed+i) * 10;
             // Ellipse parametric
             const ex = orbitRadiusScreen * Math.cos(angle);
             const ey = orbitRadiusScreen * 0.4 * Math.sin(angle);

             // Rotate ellipse point by same rotation as ellipse
             const rot = this.tick * 0.001;
             const px = sx + ex * Math.cos(rot) - ey * Math.sin(rot);
             const py = sy + ex * Math.sin(rot) + ey * Math.cos(rot);

             ctx.fillStyle = i % 2 === 0 ? '#ffccaa' : '#aaccff';
             ctx.beginPath();
             ctx.arc(px, py, 4 + (100/distToStar)*0.1, 0, Math.PI*2);
             ctx.fill();
         }
    }

    drawConstellationsAndStars(ctx) {
        // Draw Lines
        ctx.strokeStyle = '#444466';
        ctx.lineWidth = 1;
        constellations.forEach(constellation => {
            constellation.lines.forEach(line => {
                const s1 = this.renderedStars.find(s => s.name === line.from);
                const s2 = this.renderedStars.find(s => s.name === line.to);

                if (s1 && s2) {
                    ctx.beginPath();
                    ctx.moveTo(s1.x, s1.y);
                    ctx.lineTo(s2.x, s2.y);

                    if (constellation.highlighted) {
                        ctx.strokeStyle = '#ffd700';
                        ctx.lineWidth = 2;
                    } else {
                        ctx.strokeStyle = '#444466';
                        ctx.lineWidth = 1;
                    }
                    ctx.stroke();
                }
            });
        });

        // Draw Objects (Overlay Layer for Named/Significant Objects)
        // Note: Procedural stars are already drawn in drawGalaxyView background step,
        // but if they are close (added to renderedStars), they might be redrawn here?
        // Let's filter duplications or just handle labels here.

        this.renderedStars.forEach(obj => {
            // Skip pure procedural background rendering if we did it manually,
            // but we added them to list for interaction.
            // If it's a "Sun" (close up), we already drew the gradient. We just need label/interaction hit area.

            // If we already drew a big sun, don't draw a small dot on top.
            const isCloseUp = (this.mode === 'GALAXY' && obj.dist < 10 && (100/obj.dist) > 10);
            if (isCloseUp && (obj.isStar || obj.isDSO)) {
                 // Just Label
                 if (obj.highlighted || !obj.isProcedural) {
                    ctx.fillStyle = '#aaaaaa';
                    ctx.font = '10px Arial';
                    ctx.fillText(obj.name, obj.x, obj.y + (100/obj.dist) + 10);
                 }
                 return;
            }

            let r = 2;
            let color = obj.color || '#ffffff';

            if (obj.isPlanet) {
                color = '#ffccaa';
                r = 4;
                ctx.fillStyle = '#ffaa88';
                ctx.font = '11px Arial';
                ctx.fillText(obj.name, obj.x + 8, obj.y + 3);
            } else if (obj.isDSO) {
                color = '#00ffcc';
                r = 3;
                if (this.mode === 'GALAXY') {
                    r = Math.max(2, (10000000 / obj.dist)); // Larger Galaxies (10m factor)
                    r = Math.min(r, 800); // Cap
                }
            } else {
                // Star
                const mag = obj.mag || 4;
                if (this.mode === 'EARTH') {
                     r = Math.max(0.5, 3 - mag * 0.5);
                } else {
                    r = Math.max(1, (1000 / obj.dist) * (3 - mag * 0.5));
                    r = Math.min(r, 6);
                }
            }

            if (obj.highlighted) {
                r = Math.max(r * 1.5, 4);
                color = '#ffd700';
                ctx.shadowBlur = 10;
                ctx.shadowColor = '#ffd700';
            } else {
                ctx.shadowBlur = 0;
            }

            ctx.beginPath();

            if (obj.isDSO) {
                 // Draw Galaxy Shape (Elliptical Glow)
                 ctx.save();
                 ctx.translate(obj.x, obj.y);
                 ctx.rotate(0.5); // Tilt

                 // Gradient for galaxy
                 const grad = ctx.createRadialGradient(0, 0, r*0.2, 0, 0, r*2);
                 grad.addColorStop(0, '#ffffff');
                 grad.addColorStop(0.4, color);
                 grad.addColorStop(1, 'rgba(0,0,0,0)');
                 ctx.fillStyle = grad;

                 ctx.scale(1.5, 0.8); // Aspect ratio
                 ctx.beginPath();
                 ctx.arc(0, 0, r*2, 0, Math.PI*2);
                 ctx.fill();
                 ctx.restore();
            } else {
                 ctx.arc(obj.x, obj.y, r, 0, Math.PI * 2);
                 ctx.fillStyle = color;
                 ctx.fill();
            }

            ctx.shadowBlur = 0;

            if (obj.highlighted || (obj.mag < 1.5 && !obj.isPlanet && !obj.isProcedural)) {
                ctx.fillStyle = '#aaaaaa';
                ctx.font = '10px Arial';
                ctx.fillText(obj.name, obj.x + 5, obj.y + 5);
            }
        });
    }

    handleClick(e) {
        const rect = this.canvas.getBoundingClientRect();
        const mx = e.clientX - rect.left;
        const my = e.clientY - rect.top;

        const hit = this.findHit(mx, my);
        if (hit) {
            this.selectObject({ type: hit.isDSO ? 'DSO' : (hit.isPlanet ? 'Planet' : 'Star'), name: hit.name, data: hit });
        }
    }

    findHit(mx, my) {
        let minDist = 15;
        let best = null;
        for (const obj of this.renderedStars) {
            const dist = Math.hypot(obj.x - mx, obj.y - my);
            if (dist < minDist) {
                minDist = dist;
                best = obj;
            }
        }
        return best;
    }

    showPopup(x, y, obj) {
        this.popup.style.display = 'block';
        this.popup.style.left = (x + 15) + 'px';
        this.popup.style.top = (y + 15) + 'px';

        let html = `<strong>${obj.name}</strong><br>`;
        if (obj.isPlanet) {
             html += `Type: Planet<br>`;
        } else {
            if (obj.mag) html += `Mag: ${obj.mag}<br>`;
            if (obj.constellation) html += `Const: ${obj.constellation}<br>`;
            if (obj.distanceLy) html += `Dist: ${Math.round(obj.distanceLy)} ly<br>`;
            if (obj.type && obj.isDSO) html += `Type: ${obj.type}<br>`;
        }
        this.popup.innerHTML = html;
    }

    hidePopup() {
        this.popup.style.display = 'none';
    }

    showInfoPanel(name, data, isConstellation = false) {
        const infoPanel = document.getElementById('constellation-info');
        let html = `<h2>${name}</h2>`;

        if (isConstellation) {
             html += `<p><strong>Mythology:</strong> ${data.mythology}</p>`;
             html += `<p><strong>Stars:</strong> ${data.stars.join(', ')}</p>`;
             html += `<p style="font-size:0.8em; margin-top:10px; color:#aaa;">In Galaxy View, notice how this shape distorts as you move away from Earth, revealing that these stars are actually at vastly different distances.</p>`;
        } else if (data.type === 'Planet') {
             html += `<p><strong>Type:</strong> Planet</p>`;
             html += `<p>Planets wander against the background stars. Their position changes daily.</p>`;
        } else if (data.isDSO || (data.type && data.type.includes('Galaxy'))) {
             html += `<p><strong>Type:</strong> ${data.type}</p>`;
             html += `<p><strong>Distance:</strong> ${data.dist}</p>`;
             html += `<p>${data.desc}</p>`;
        } else {
            html += `<p><strong>Meaning:</strong> ${data.meaning || 'N/A'}</p>`;
            html += `<p><strong>Magnitude:</strong> ${data.mag}</p>`;
            html += `<p><strong>Distance:</strong> ${data.dist || 'Unknown'}</p>`;
            html += `<p><strong>Type:</strong> ${data.type || 'Unknown'}</p>`;
            if (data.exoplanets) {
                html += `<p style="color:#00ff99;"><strong>Exoplanets:</strong> ${data.exoplanets}</p>`;
            }
            if (data.constellation) {
                html += `<p><strong>Constellation:</strong> ${data.constellation}</p>`;
            }
        }
        infoPanel.innerHTML = html;
    }

    startLoop() {
        const loop = () => {
            this.draw();
            requestAnimationFrame(loop);
        };
        loop();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new SkyApp();
});
