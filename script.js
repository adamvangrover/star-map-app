// --- Data Definitions ---

const stars = new Map();

// Helper to add star
// RA in degrees (or convert if hours passed? sticking to degrees for simplicity in data)
// Note: 1h = 15 deg.
// Data below: RA is in hours (decimal), Dec in degrees.
// We will convert RA to degrees in the addStar function or during init.
// Let's assume input RA is in Hours, Dec in Degrees.
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
addStar('Rigil Kentaurus', 14.66, -60.8, -0.01, { dist: '4.3 ly', type: 'G2 (Main Sequence)', meaning: 'Foot of the Centaur (Arabic)', constellation: 'Centaurus' });
addStar('Vega', 18.62, 38.8, 0.03, { dist: '25 ly', type: 'A0 (Main Sequence)', meaning: 'Falling Eagle (Arabic)', constellation: 'Lyra' });
addStar('Capella', 5.27, 46.0, 0.08, { dist: '42 ly', type: 'G5 (Giant)', meaning: 'Little She-Goat (Latin)', constellation: 'Auriga' });
addStar('Rigel', 5.24, -8.2, 0.12, { dist: '860 ly', type: 'B8 (Supergiant)', meaning: 'Foot (Arabic)', constellation: 'Orion' });
addStar('Procyon', 7.65, 5.2, 0.38, { dist: '11.4 ly', type: 'F5 (Main Sequence)', meaning: 'Before the Dog (Greek)', constellation: 'Canis Minor' });
addStar('Achernar', 1.63, -57.2, 0.46, { dist: '144 ly', type: 'B3 (Main Sequence)', meaning: 'End of the River (Arabic)', constellation: 'Eridanus' });
addStar('Betelgeuse', 5.92, 7.4, 0.50, { dist: '640 ly', type: 'M1 (Red Supergiant)', meaning: 'Armpit of the Giant (Arabic)', constellation: 'Orion' }); // Mag varies
addStar('Hadar', 14.06, -60.4, 0.61, { dist: '350 ly', type: 'B1 (Giant)', meaning: 'Ground (Arabic)', constellation: 'Centaurus' });
addStar('Acrux', 12.44, -63.1, 0.76, { dist: '320 ly', type: 'B0.5 (Main Sequence)', meaning: 'Cross (Latin)', constellation: 'Crux' });
addStar('Altair', 19.85, 8.9, 0.77, { dist: '16.8 ly', type: 'A7 (Main Sequence)', meaning: 'The Eagle (Arabic)', constellation: 'Aquila' });
addStar('Aldebaran', 4.60, 16.5, 0.85, { dist: '65 ly', type: 'K5 (Giant)', meaning: 'The Follower (Arabic)', constellation: 'Taurus' });
addStar('Antares', 16.49, -26.4, 0.96, { dist: '600 ly', type: 'M1 (Supergiant)', meaning: 'Rival of Mars (Greek)', constellation: 'Scorpius' });
addStar('Spica', 13.42, -11.2, 1.04, { dist: '260 ly', type: 'B1 (Main Sequence)', meaning: 'Ear of Wheat (Latin)', constellation: 'Virgo' });
addStar('Pollux', 7.76, 28.0, 1.14, { dist: '34 ly', type: 'K0 (Giant)', meaning: 'Twin Brother (Greek)', constellation: 'Gemini' });
addStar('Fomalhaut', 22.96, -29.6, 1.16, { dist: '25 ly', type: 'A3 (Main Sequence)', meaning: 'Mouth of the Fish (Arabic)', constellation: 'Piscis Austrinus' });
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
addStar('Hamal', 2.12, 23.5, 2.01, { dist: '66 ly', type: 'K2 (Giant)', meaning: 'Head of the Ram (Arabic)', constellation: 'Aries' });
addStar('Algieba', 10.33, 19.8, 2.01, { dist: '130 ly', type: 'K0 (Giant)', meaning: 'The Forehead (Arabic)', constellation: 'Leo' });
addStar('Deneb Kaitos', 0.72, -18.0, 2.04, { dist: '96 ly', type: 'K0 (Giant)', meaning: 'Tail of Sea Monster (Arabic)', constellation: 'Cetus' });
addStar('Nunki', 18.92, -26.3, 2.05, { dist: '220 ly', type: 'B2 (Main Sequence)', meaning: 'Foreyoke (Babylonian)', constellation: 'Sagittarius' });
addStar('Menkent', 14.11, -36.4, 2.06, { dist: '61 ly', type: 'K0 (Giant)', meaning: 'Shoulder of Centaur (Arabic)', constellation: 'Centaurus' });
addStar('Mirach', 1.16, 35.6, 2.07, { dist: '200 ly', type: 'M0 (Giant)', meaning: 'The Girdle (Arabic)', constellation: 'Andromeda' });
addStar('Alpheratz', 0.14, 29.1, 2.07, { dist: '97 ly', type: 'B8 (Subgiant)', meaning: 'Horse Shoulder (Arabic)', constellation: 'Andromeda' });
addStar('Saiph', 5.80, -9.7, 2.07, { dist: '720 ly', type: 'B0 (Supergiant)', meaning: 'Sword of the Giant (Arabic)', constellation: 'Orion' });
addStar('Kochab', 14.84, 74.2, 2.07, { dist: '130 ly', type: 'K4 (Giant)', meaning: 'Star (Arabic)', constellation: 'Ursa Minor' });
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
addStar('Megrez', 12.26, 57.0, 3.32, { constellation: 'Ursa Major' });
// Ursa Minor: Pherkad, Epsilon, Zeta, Eta
addStar('Pherkad', 15.34, 71.8, 3.00, { constellation: 'Ursa Minor' });
addStar('Epsilon UMi', 16.76, 82.0, 4.19, { constellation: 'Ursa Minor' });
addStar('Zeta UMi', 15.73, 77.8, 4.29, { constellation: 'Ursa Minor' });
addStar('Eta UMi', 16.29, 75.8, 4.95, { constellation: 'Ursa Minor' });
// Orion: Meissa
addStar('Meissa', 5.58, 9.9, 3.39, { constellation: 'Orion' });
// Cassiopeia: Ruchbah
addStar('Ruchbah', 1.43, 60.2, 2.66, { constellation: 'Cassiopeia' });


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
    }
};

// --- Rendering & App Logic ---

class SkyApp {
    constructor() {
        this.container = document.getElementById('star-map');
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.container.appendChild(this.canvas);

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
        this.popup.style.pointerEvents = 'none'; // Let clicks pass through if needed, but mainly for display
        this.popup.style.zIndex = '100';
        this.popup.style.boxShadow = '0 0 10px rgba(0,0,0,0.5)';
        this.popup.style.maxWidth = '200px';
        this.popup.style.fontSize = '12px';
        this.container.appendChild(this.popup);

        // Search Results container
        this.searchResults = document.createElement('div');
        this.searchResults.id = 'search-results';
        document.querySelector('.control-group').appendChild(this.searchResults); // Append to parent of search input

        this.width = this.container.clientWidth;
        this.height = this.container.clientHeight;

        this.latitude = 40.7128;
        this.longitude = -74.0060;
        this.date = new Date();
        this.scale = 1.0;

        // Cache visible stars for interaction
        this.renderedStars = [];
        this.backgroundStars = [];
        this.initBackgroundStars(2000);

        window.addEventListener('resize', () => this.resize());
        this.setupControls();
        this.resize();
        this.startLoop();
    }

    initBackgroundStars(count) {
        for (let i = 0; i < count; i++) {
            // Uniform distribution on sphere
            const dec = Math.asin(2 * Math.random() - 1) * (180 / Math.PI);
            const ra = Math.random() * 360;
            const mag = 4 + Math.random() * 2.5; // Mag 4 to 6.5
            this.backgroundStars.push({ ra, dec, mag });
        }
    }

    setupControls() {
        const latInput = document.getElementById('location-lat');
        const lonInput = document.getElementById('location-lon');
        const dateInput = document.getElementById('datetime');
        const setNowBtn = document.getElementById('btn-set-now');
        const useLocBtn = document.getElementById('btn-use-location');
        const searchInput = document.getElementById('search-input');

        this.updateInputs();

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

        // Enhanced Search
        searchInput.addEventListener('input', (e) => this.handleSearch(e.target.value));
        searchInput.addEventListener('blur', () => {
             // Delay hiding to allow clicks
             setTimeout(() => this.searchResults.style.display = 'none', 200);
        });
        searchInput.addEventListener('focus', (e) => this.handleSearch(e.target.value));


        this.canvas.addEventListener('wheel', (e) => {
            e.preventDefault();
            this.scale *= (e.deltaY > 0 ? 0.9 : 1.1);
            this.scale = Math.max(0.5, Math.min(this.scale, 5));
        });

        this.canvas.addEventListener('mousemove', (e) => this.handleHover(e));
        this.canvas.addEventListener('click', (e) => this.handleClick(e));
    }

    handleSearch(term) {
        this.searchResults.innerHTML = '';
        if (!term || term.length < 2) {
            this.searchResults.style.display = 'none';
            return;
        }

        const results = [];
        const lowerTerm = term.toLowerCase();

        // Search Stars
        for (const [name, data] of stars) {
            if (name.toLowerCase().includes(lowerTerm)) {
                results.push({ type: 'Star', name, data });
            }
        }
        // Search Constellations
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
        // Clear highlights
        stars.forEach(s => s.highlighted = false);
        constellations.forEach(c => c.highlighted = false);

        if (obj.type === 'Star') {
            const s = stars.get(obj.name);
            if (s) s.highlighted = true;
            this.showInfoPanel(obj.name, s);
        } else {
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

    project(alt, az) {
        const zenithDist = 90 - alt;
        if (zenithDist < 0) return null;
        const maxRadius = Math.min(this.width, this.height) / 2 * 0.9 * this.scale;
        const r = (zenithDist / 90) * maxRadius;
        const angle = Astronomy.degToRad(az - 90);
        const cx = this.width / 2;
        const cy = this.height / 2;
        const x = cx - r * Math.cos(angle);
        const y = cy + r * Math.sin(angle);
        return { x, y };
    }

    draw() {
        const ctx = this.ctx;
        ctx.clearRect(0, 0, this.width, this.height);

        const jd = Astronomy.getJulianDate(this.date);
        const gst = Astronomy.getGST(jd);
        const lst = Astronomy.getLST(gst, this.longitude);

        const cx = this.width / 2;
        const cy = this.height / 2;
        const horizonRadius = Math.min(this.width, this.height) / 2 * 0.9 * this.scale;

        ctx.beginPath();
        ctx.arc(cx, cy, horizonRadius, 0, Math.PI * 2);
        ctx.strokeStyle = '#303050';
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.fillStyle = '#0b0b15';
        ctx.fill();

        ctx.fillStyle = '#90caf9';
        ctx.font = '16px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('N', cx, cy - horizonRadius - 15);
        ctx.fillText('S', cx, cy + horizonRadius + 15);
        ctx.fillText('E', cx - horizonRadius - 15, cy);
        ctx.fillText('W', cx + horizonRadius + 15, cy);

        // Draw background stars
        ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
        this.backgroundStars.forEach(bg => {
             const pos = Astronomy.equatorialToHorizontal(bg.ra, bg.dec, this.latitude, lst);
             if (pos.alt >= 0) {
                 const xy = this.project(pos.alt, pos.az);
                 if (xy) {
                     // Simple faint dot
                     ctx.fillRect(xy.x, xy.y, 1, 1);
                 }
             }
        });

        this.renderedStars = [];

        for (const [name, data] of stars) {
            const pos = Astronomy.equatorialToHorizontal(data.ra, data.dec, this.latitude, lst);
            if (pos.alt >= 0) {
                const xy = this.project(pos.alt, pos.az);
                if (xy) {
                    this.renderedStars.push({ name, ...data, ...xy });
                }
            }
        }

        ctx.strokeStyle = '#444466';
        ctx.lineWidth = 1;
        constellations.forEach(constellation => {
            let drawnLines = false;
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
                    drawnLines = true;
                }
            });
        });

        this.renderedStars.forEach(star => {
            const mag = star.mag || 4;
            let r = Math.max(0.5, 3 - mag * 0.5);
            if (star.highlighted) r *= 1.5;

            ctx.beginPath();
            ctx.arc(star.x, star.y, r, 0, Math.PI * 2);

            if (star.highlighted) {
                ctx.fillStyle = '#ffd700';
                ctx.shadowBlur = 10;
                ctx.shadowColor = '#ffd700';
            } else {
                ctx.fillStyle = '#ffffff';
                ctx.shadowBlur = 0;
            }
            ctx.fill();
            ctx.shadowBlur = 0;

            if (mag < 1.5 || star.highlighted) {
                ctx.fillStyle = '#aaaaaa';
                ctx.font = '10px Arial';
                ctx.fillText(star.name, star.x + 5, star.y + 5);
            }
        });
    }

    handleHover(e) {
        const rect = this.canvas.getBoundingClientRect();
        const mx = e.clientX - rect.left;
        const my = e.clientY - rect.top;

        const hit = this.findHit(mx, my);
        if (hit) {
            this.canvas.style.cursor = 'pointer';
            this.showPopup(mx, my, hit);
        } else {
            this.canvas.style.cursor = 'default';
            this.hidePopup();
        }
    }

    handleClick(e) {
        const rect = this.canvas.getBoundingClientRect();
        const mx = e.clientX - rect.left;
        const my = e.clientY - rect.top;

        const hit = this.findHit(mx, my);
        if (hit) {
            this.selectObject({ type: 'Star', name: hit.name, data: hit }); // Simple selection
        }
    }

    findHit(mx, my) {
        let minDist = 10;
        let best = null;
        for (const star of this.renderedStars) {
            const dist = Math.hypot(star.x - mx, star.y - my);
            if (dist < minDist) {
                minDist = dist;
                best = star;
            }
        }
        return best;
    }

    showPopup(x, y, star) {
        this.popup.style.display = 'block';
        this.popup.style.left = (x + 15) + 'px';
        this.popup.style.top = (y + 15) + 'px';

        let html = `<strong>${star.name}</strong><br>`;
        html += `Mag: ${star.mag}<br>`;
        if(star.constellation) html += `Const: ${star.constellation}<br>`;
        if(star.type) html += `Type: ${star.type}<br>`;
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
        } else {
            html += `<p><strong>Meaning:</strong> ${data.meaning || 'N/A'}</p>`;
            html += `<p><strong>Magnitude:</strong> ${data.mag}</p>`;
            html += `<p><strong>Distance:</strong> ${data.dist || 'Unknown'}</p>`;
            html += `<p><strong>Type:</strong> ${data.type || 'Unknown'}</p>`;
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
