// --- Data Definitions ---

const stars = new Map();

// Helper to add star
function addStar(name, raHours, decDeg, mag, details = {}) {
    stars.set(name, {
        ra: raHours * 15, // Convert to degrees
        dec: decDeg,
        mag,
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
    { name: 'Sagittarius A*', ra: 17.76, dec: -29.00, mag: 100, dist: '26,000 ly', type: 'Supermassive Black Hole', desc: 'The center of our Milky Way Galaxy.' }
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
            yaw: 0, // Radians, rotation around Z (Azimuth)
            pitch: 0, // Radians, Up/Down
            fov: 60, // Degrees
            speed: 1.0 // light years per tick/sec
        };
        this.keys = {};

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

        // Initialize Background Stars
        // For 3D, we want them scattered in a large volume
        const bgCount = 5000;
        this.backgroundStars = [];
        for (let i = 0; i < bgCount; i++) {
            // Random direction
            const ra = Math.random() * 360;
            const dec = Math.asin(2 * Math.random() - 1) * (180 / Math.PI);
            // Random distance - put them far away for background effect,
            // but also some closer to feel density?
            // Let's put them in a shell 2000-5000 ly to act as "distant stars"
            const dist = 2000 + Math.random() * 3000;
            const mag = 4 + Math.random() * 3;
            const pos3d = Astronomy.sphericalToCartesian(ra, dec, dist);

            this.backgroundStars.push({ ra, dec, mag, dist, pos3d });
        }

        // Initialize DSOs 3D positions
        DSOs.forEach(dso => {
             let dist = 10000;
             const match = dso.dist.match(/([\d\.,]+)/);
             if (match) dist = parseFloat(match[1].replace(/,/g, ''));
             if (dso.dist.includes('million')) dist *= 1000000;
             dso.distanceLy = dist;
             dso.pos3d = Astronomy.sphericalToCartesian(dso.ra * 15, dso.dec, dist);
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
        const setMode = (m) => {
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

        btnEarth.addEventListener('click', () => setMode('EARTH'));
        btnGalaxy.addEventListener('click', () => setMode('GALAXY'));

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
            this.camera.speed = parseFloat(e.target.value);
            speedVal.textContent = this.camera.speed.toFixed(1);
        });

        resetView.addEventListener('click', () => {
            this.animateCameraTo(new Vector3(0,0,0));
        });

        travelBtn.addEventListener('click', () => {
            if (this.selectedObject) {
                // If it's a star or DSO
                const s = this.selectedObject.data;
                if (s && s.pos3d) {
                    setMode('GALAXY');
                    const target = new Vector3(s.pos3d.x, s.pos3d.y, s.pos3d.z);
                    const dir = target.normalize();
                    // Go to 2 ly away (or farther if it's a big DSO)
                    const standoffDist = s.distanceLy > 100000 ? 50000 : 2;
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
                const speed = this.camera.speed * 5;
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

    animateCameraTo(targetPos, lookAtPos = null) {
        // Simple interpolation could go here, for now just teleport
        this.camera.pos = targetPos;
        if (lookAtPos) {
            // Calculate yaw/pitch to look at lookAtPos
            const delta = lookAtPos.sub(this.camera.pos);
            const len = Math.sqrt(delta.x*delta.x + delta.y*delta.y + delta.z*delta.z);
            if (len > 0) {
                this.camera.pitch = Math.asin(delta.z / len);
                this.camera.yaw = Math.atan2(delta.y, delta.x);
            }
        }
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
        const u = new Vector3(0,0,1);
        // Right = f x u
        // If f is vertical (0,0,1), this is singular.
        if (Math.abs(f.z) > 0.99) return new Vector3(1,0,0); // Hack
        return f.cross(u).normalize();
    }

    getCameraUp() {
        const f = this.getCameraDirection();
        const r = this.getCameraRight();
        return r.cross(f).normalize();
    }

    project3D(pos3d) {
        const rel = pos3d.sub(this.camera.pos);

        const f = this.getCameraDirection();
        const r = this.getCameraRight();
        const u = this.getCameraUp();

        // Project onto basis
        const z = rel.dot(f); // Depth
        if (z <= 0) return null; // Behind camera

        const x = rel.dot(r);
        const y = rel.dot(u);

        // Perspective projection
        // FOV 60 deg -> tan(30) = 0.577
        const scale = (this.height / 2) / Math.tan(Astronomy.degToRad(this.camera.fov / 2));

        const sx = (x / z) * scale + this.width / 2;
        const sy = -(y / z) * scale + this.height / 2; // Invert Y for screen

        return { x: sx, y: sy, z: z, dist: Math.sqrt(rel.dot(rel)) };
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

        const speed = this.camera.speed;
        const f = this.getCameraDirection();
        const r = this.getCameraRight();

        if (this.keys['KeyW']) this.camera.pos = this.camera.pos.add(f.scale(speed));
        if (this.keys['KeyS']) this.camera.pos = this.camera.pos.sub(f.scale(speed));
        if (this.keys['KeyA']) this.camera.pos = this.camera.pos.sub(r.scale(speed));
        if (this.keys['KeyD']) this.camera.pos = this.camera.pos.add(r.scale(speed));
        if (this.keys['Space']) this.camera.pos = this.camera.pos.add(new Vector3(0,0,1).scale(speed));
        if (this.keys['ShiftLeft']) this.camera.pos = this.camera.pos.sub(new Vector3(0,0,1).scale(speed));

        // Update HUD
        const p = this.camera.pos;
        document.getElementById('cam-pos').textContent = `${p.x.toFixed(1)}, ${p.y.toFixed(1)}, ${p.z.toFixed(1)}`;
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
        this.renderedStars = [];

        // Draw Earth Marker if visible
        const earthProj = this.project3D(new Vector3(0,0,0));
        if (earthProj) {
             ctx.fillStyle = '#00aaff';
             ctx.beginPath();
             ctx.arc(earthProj.x, earthProj.y, Math.max(2, 500/earthProj.dist), 0, Math.PI*2);
             ctx.fill();
             ctx.fillText('Earth', earthProj.x, earthProj.y + 10);
        }

        // Draw Background Stars
        ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
        this.backgroundStars.forEach(bg => {
            const proj = this.project3D(bg.pos3d);
            if (proj) {
                // Dim by distance
                const alpha = Math.min(1, 10000 / (proj.dist*proj.dist));
                ctx.fillStyle = `rgba(255,255,255,${alpha})`;
                ctx.fillRect(proj.x, proj.y, 1, 1);
            }
        });

        // Draw DSOs
        DSOs.forEach(dso => {
            if (dso.pos3d) {
                const proj = this.project3D(dso.pos3d);
                if (proj) {
                    this.renderedStars.push({ name: dso.name, ...dso, ...proj, isDSO: true });
                }
            }
        });

        // Draw Main Stars
        for (const [name, data] of stars) {
            const proj = this.project3D(data.pos3d);
            if (proj) {
                this.renderedStars.push({ name, ...data, ...proj, isStar: true });
            }
        }

        this.drawConstellationsAndStars(ctx);
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

        // Draw Objects
        this.renderedStars.forEach(obj => {
            let r = 2;
            let color = '#ffffff';

            if (obj.isPlanet) {
                color = '#ffccaa'; // Planets orange-ish
                r = 4;
                // Label planets always
                ctx.fillStyle = '#ffaa88';
                ctx.font = '11px Arial';
                ctx.fillText(obj.name, obj.x + 8, obj.y + 3);
            } else if (obj.isDSO) {
                color = '#00ffcc'; // Nebula/Galaxy cyan
                r = 3;
                if (this.mode === 'GALAXY') {
                    // Scale based on size/distance?
                    r = Math.max(2, (50000 / obj.dist) * 5); // Rough scaling
                    r = Math.min(r, 15);
                }
            } else {
                // Star
                const mag = obj.mag || 4;
                if (this.mode === 'EARTH') {
                     r = Math.max(0.5, 3 - mag * 0.5);
                } else {
                    r = Math.max(1, (1000 / obj.dist) * (3 - mag * 0.5));
                    r = Math.min(r, 10);
                }
                // Color based on spectral type? Too complex for now, mostly white.
                if (obj.name === 'Betelgeuse' || obj.name === 'Antares') color = '#ffddaa';
                if (obj.name === 'Rigel' || obj.name === 'Vega') color = '#aaddff';
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
                 // Draw oval/shape for DSO
                 ctx.ellipse(obj.x, obj.y, r*1.5, r, 0, 0, Math.PI*2);
            } else {
                 ctx.arc(obj.x, obj.y, r, 0, Math.PI * 2);
            }

            ctx.fillStyle = color;
            ctx.fill();
            ctx.shadowBlur = 0;

            if (obj.highlighted || (obj.mag < 1.5 && !obj.isPlanet)) {
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
            if (data.distanceLy) {
                const parsecs = (data.distanceLy / 3.26).toFixed(1);
                html += `<p><strong>Distance:</strong> ${data.distanceLy.toFixed(1)} ly (${parsecs} pc)</p>`;
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
