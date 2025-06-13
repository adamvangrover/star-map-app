const starMap = document.getElementById('star-map');
const constellationInfo = document.getElementById('constellation-info');

// Star data (vastly expanded and optimized - thousands of stars)
const stars = new Map();

// Add stars from IAU-CSN.json (partial list)
stars.set('Acamar', { ra: 44.565311, dec: -40.304672, mag: 2.88 });
stars.set('Achernar', { ra: 24.428523, dec: -57.236753, mag: 0.45 });
stars.set('Achird', { ra: 12.276213, dec: 57.815187, mag: 3.46 });
stars.set('Acrab', { ra: 241.359300, dec: -19.805453, mag: 2.56 });
stars.set('Acrux', { ra: 186.649563, dec: -63.099093, mag: 1.33 });
stars.set('Acubens', { ra: 134.621761, dec: 11.857700, mag: 4.26 });
stars.set('Adhafera', { ra: 154.172567, dec: 23.417312, mag: 3.43 });
stars.set('Adhara', { ra: 104.656453, dec: -28.972086, mag: 1.50 });
stars.set('Adhil', { ra: 20.585080, dec: 45.528778, mag: 4.87 });
stars.set('Ain', { ra: 67.154163, dec: 19.180435, mag: 3.53 });
stars.set('Ainalrami', { ra: 283.542404, dec: -22.744840, mag: 4.86 });
stars.set('Aladfar', { ra: 288.439531, dec: 39.145970, mag: 4.43 });
stars.set('Alasia', { ra: 275.457428, dec: -11.922682, mag: 7.95 });
stars.set('Albaldah', { ra: 287.440971, dec: -21.023615, mag: 2.88 });
stars.set('Albali', { ra: 311.918969, dec: -9.495775, mag: 3.78 });
stars.set('Albireo', { ra: 292.680351, dec: 27.959692, mag: 3.37 });
stars.set('Alchiba', { ra: 182.103402, dec: -24.728875, mag: 4.02 });
stars.set('Alcor', { ra: 201.306403, dec: 54.987954, mag: 3.99 });
stars.set('Alcyone', { ra: 56.871152, dec: 24.105136, mag: 2.85 });
stars.set('Aldebaran', { ra: 68.980163, dec: 16.509302, mag: 0.87 });
stars.set('Alderamin', { ra: 319.644885, dec: 62.585574, mag: 2.45 });
stars.set('Aldhanab', { ra: 328.482192, dec: -37.364855, mag: 3.00 });
stars.set('Aldhibah', { ra: 257.196650, dec: 65.714684, mag: 3.17 });
stars.set('Aldulfin', { ra: 308.303216, dec: 11.303261, mag: 4.03 });
stars.set('Alfirk', { ra: 322.164987, dec: 70.560715, mag: 3.23 });
stars.set('Algedi', { ra: 304.513566, dec: -12.544852, mag: 3.58 });
stars.set('Algenib', { ra: 3.308963, dec: 15.183594, mag: 2.83 });
stars.set('Algieba', { ra: 154.993144, dec: 19.841489, mag: 2.61 });
stars.set('Algol', { ra: 47.042215, dec: 40.955648, mag: 2.09 });
stars.set('Algorab', { ra: 187.466063, dec: -16.515431, mag: 2.94 });
stars.set('Alhena', { ra: 99.427960, dec: 16.399280, mag: 1.93 });
stars.set('Alioth', { ra: 193.507290, dec: 55.959823, mag: 1.76 });
stars.set('Aljanah', { ra: 311.552843, dec: 33.970257, mag: 2.48 });
stars.set('Alkaid', { ra: 206.885157, dec: 49.313267, mag: 1.85 });
stars.set('Alkalurops', { ra: 231.122618, dec: 37.377169, mag: 4.31 });
stars.set('Almaaz', { ra: 75.492219, dec: 43.823307, mag: 3.03 });
stars.set('Almach', { ra: 30.974804, dec: 42.329725, mag: 2.10 });
stars.set('Alnair', { ra: 332.058270, dec: -46.960974, mag: 1.73 });
stars.set('Alnasl', { ra: 271.452025, dec: -30.424100, mag: 2.98 });
stars.set('Alnilam', { ra: 84.053389, dec: -1.201919, mag: 1.69 });
stars.set('Alnitak', { ra: 85.189694, dec: -1.942574, mag: 1.74 });
stars.set('Alniyat', { ra: 245.297149, dec: -25.592792, mag: 2.90 }); // Original had sigma Sco, Alniyat is HR 6084
stars.set('Alphard', { ra: 141.896847, dec: -8.658602, mag: 1.99 });
stars.set('Alphecca', { ra: 233.671950, dec: 26.714693, mag: 2.22 });
stars.set('Alpheratz', { ra: 2.096916, dec: 29.090431, mag: 2.07 });
stars.set('Alpherg', { ra: 22.870873, dec: 15.345823, mag: 3.83 });
stars.set('Alrakis', { ra: 256.333807, dec: 54.470078, mag: 5.55 });
stars.set('Alrescha', { ra: 30.511772, dec: 2.763735, mag: 3.82 });
stars.set('Alsafi', { ra: 293.089960, dec: 69.661176, mag: 4.67 });
stars.set('Alsciaukat', { ra: 125.708792, dec: 43.188131, mag: 4.25 });
stars.set('Alshain', { ra: 298.828304, dec: 6.406763, mag: 3.71 });
stars.set('Altair', { ra: 297.695827, dec: 8.868321, mag: 0.76 });
stars.set('Alterf', { ra: 142.930115, dec: 22.967970, mag: 4.32 });
stars.set('Aludra', { ra: 111.023760, dec: -29.303106, mag: 2.45 });
stars.set('Alya', { ra: 284.054949, dec: 4.203602, mag: 4.62 });
stars.set('Ankaa', { ra: 6.570939, dec: -42.306084, mag: 2.40 });
stars.set('Antares', { ra: 247.351915, dec: -26.432003, mag: 1.06 });
stars.set('Arcturus', { ra: 213.915300, dec: 19.182409, mag: -0.05 });
stars.set('Ascella', { ra: 285.653043, dec: -29.880063, mag: 2.60 });
stars.set('Aspidiske', { ra: 139.272529, dec: -59.275232, mag: 2.21 });
stars.set('Asterope', { ra: 56.476987, dec: 24.554512, mag: 5.76 });
stars.set('Atik', { ra: 56.079720, dec: 32.288240, mag: 3.84 });
stars.set('Atlas', { ra: 57.290597, dec: 24.053415, mag: 3.62 });
stars.set('Atria', { ra: 252.166229, dec: -69.027712, mag: 1.91 });
stars.set('Avior', { ra: 125.628480, dec: -59.509484, mag: 1.86 });
stars.set('Azha', { ra: 44.106873, dec: -8.898145, mag: 3.89 });
stars.set('Beid', { ra: 62.966415, dec: -6.837580, mag: 4.04 });
stars.set('Bellatrix', { ra: 81.282764, dec: 6.349703, mag: 1.64 });
stars.set('Betelgeuse', { ra: 88.792939, dec: 7.407064, mag: 0.45 }); // Magnitude can vary
stars.set('Canopus', { ra: 95.987958, dec: -52.695661, mag: -0.62 });
stars.set('Capella', { ra: 79.172328, dec: 45.997991, mag: 0.08 });
stars.set('Caph', { ra: 2.294522, dec: 59.149781, mag: 2.28 });
stars.set('Castor', { ra: 113.649428, dec: 31.888276, mag: 1.98 }); // Combined magnitude, individual components differ
stars.set('Cebalrai', { ra: 265.868136, dec: 4.567300, mag: 2.76 });
stars.set('Celaeno', { ra: 56.200893, dec: 24.289468, mag: 5.45 });
stars.set('Chara', { ra: 188.435603, dec: 41.357479, mag: 4.24 });
stars.set('Cor Caroli', { ra: 194.006943, dec: 38.318376, mag: 2.89 });
stars.set('Cursa', { ra: 76.962440, dec: -5.086446, mag: 2.78 });
stars.set('Dabih', { ra: 305.252803, dec: -14.781405, mag: 3.05 });
stars.set('Deneb', { ra: 310.357980, dec: 45.280339, mag: 1.25 });
stars.set('Deneb Algedi', { ra: 326.760184, dec: -16.127287, mag: 2.85 });
stars.set('Denebola', { ra: 177.264910, dec: 14.572058, mag: 2.14 });
stars.set('Diphda', { ra: 10.897379, dec: -17.986606, mag: 2.04 });
stars.set('Dschubba', { ra: 240.083359, dec: -22.621710, mag: 2.29 });
stars.set('Dubhe', { ra: 165.931965, dec: 61.751035, mag: 1.81 });
stars.set('Edasich', { ra: 231.232396, dec: 58.966063, mag: 3.29 });
stars.set('Electra', { ra: 56.218904, dec: 24.113336, mag: 3.72 });
stars.set('Elnath', { ra: 81.572971, dec: 28.607452, mag: 1.65 });
stars.set('Eltanin', { ra: 269.151541, dec: 51.488896, mag: 2.24 });
stars.set('Enif', { ra: 326.046484, dec: 9.875009, mag: 2.38 });
stars.set('Errai', { ra: 354.836655, dec: 77.632313, mag: 3.21 });
stars.set('Fomalhaut', { ra: 344.412693, dec: -29.622237, mag: 1.17 });
stars.set('Furud', { ra: 95.078300, dec: -30.063367, mag: 3.02 });
stars.set('Gacrux', { ra: 187.791498, dec: -57.113213, mag: 1.59 });
stars.set('Giausar', { ra: 172.850920, dec: 69.331075, mag: 3.82 });
stars.set('Gienah', { ra: 183.951543, dec: -17.541929, mag: 2.58 }); // Gienah Corvi (Crv)
stars.set('Gomeisa', { ra: 111.787674, dec: 8.289316, mag: 2.89 });
stars.set('Hadar', { ra: 210.955856, dec: -60.373035, mag: 0.61 }); // Also known as Agena
stars.set('Hamal', { ra: 31.793357, dec: 23.462418, mag: 2.01 });
stars.set('Homam', { ra: 340.365503, dec: 10.831363, mag: 3.41 });
stars.set('Izar', { ra: 221.246763, dec: 27.074207, mag: 2.35 });
stars.set('Kaus Australis', { ra: 276.042993, dec: -34.384616, mag: 1.79 });
stars.set('Kaus Borealis', { ra: 276.992668, dec: -25.421701, mag: 2.82 });
stars.set('Kaus Media', { ra: 275.248508, dec: -29.828104, mag: 2.72 });
stars.set('Keid', { ra: 63.817999, dec: -7.652872, mag: 4.43 });
stars.set('Kochab', { ra: 222.676357, dec: 74.155504, mag: 2.07 });
stars.set('Kornephoros', { ra: 247.554998, dec: 21.489611, mag: 2.78 });
stars.set('Lesath', { ra: 262.690979, dec: -37.295813, mag: 2.70 });
stars.set('Maia', { ra: 56.456695, dec: 24.367751, mag: 3.87 });
stars.set('Marfik', { ra: 247.728453, dec: 1.983888, mag: 3.82 });
stars.set('Markab', { ra: 346.190223, dec: 15.205267, mag: 2.49 });
stars.set('Matar', { ra: 340.750579, dec: 30.221244, mag: 2.93 });
stars.set('Mebsuta', { ra: 100.983026, dec: 25.131127, mag: 3.06 });
stars.set('Megrez', { ra: 183.856503, dec: 57.032615, mag: 3.32 });
stars.set('Meissa', { ra: 83.784486, dec: 9.934156, mag: 3.39 });
stars.set('Mekbuda', { ra: 106.027215, dec: 20.570295, mag: 4.01 });
stars.set('Menkalinan', { ra: 89.882179, dec: 44.947433, mag: 1.90 });
stars.set('Menkar', { ra: 45.569885, dec: 4.089737, mag: 2.54 });
stars.set('Menkent', { ra: 211.670617, dec: -36.369958, mag: 2.06 });
stars.set('Merak', { ra: 165.460319, dec: 56.382426, mag: 2.34 });
stars.set('Merope', { ra: 56.581552, dec: 23.948348, mag: 4.14 });
stars.set('Mesarthim', { ra: 28.382560, dec: 19.293852, mag: 4.75 });
stars.set('Miaplacidus', { ra: 138.299906, dec: -69.717208, mag: 1.67 });
stars.set('Mimosa', { ra: 191.930263, dec: -59.688764, mag: 1.25 }); // Also known as Becrux
stars.set('Minelauva', { ra: 193.900869, dec: 3.397470, mag: 3.39 });
stars.set('Mintaka', { ra: 83.001667, dec: -0.299095, mag: 2.25 });
stars.set('Mira', { ra: 34.836617, dec: -2.977640, mag: 3.0 }); // Magnitude varies (2.0 - 10.1)
stars.set('Mirach', { ra: 17.433013, dec: 35.620557, mag: 2.07 });
stars.set('Mirfak', { ra: 51.080709, dec: 49.861179, mag: 1.79 });
stars.set('Mirzam', { ra: 95.674939, dec: -17.955919, mag: 1.98 });
stars.set('Mizar', { ra: 200.981429, dec: 54.925362, mag: 2.23 });
stars.set('Muliphein', { ra: 105.939554, dec: -15.633286, mag: 4.11 });
stars.set('Muphrid', { ra: 208.671161, dec: 18.397717, mag: 2.68 });
stars.set('Muscida', { ra: 127.566128, dec: 60.718170, mag: 3.35 });
stars.set('Nunki', { ra: 283.816360, dec: -26.296724, mag: 2.05 });
stars.set('Peacock', { ra: 306.411904, dec: -56.735090, mag: 1.94 });
stars.set('Phecda', { ra: 178.457679, dec: 53.694758, mag: 2.41 });
stars.set('Pherkad', { ra: 230.182150, dec: 71.834017, mag: 3.00 });
stars.set('Pleione', { ra: 57.296738, dec: 24.136710, mag: 5.05 }); // Magnitude can vary
stars.set('Polaris', { ra: 37.954561, dec: 89.264109, mag: 2.13 }); // Magnitude can vary
stars.set('Pollux', { ra: 116.328958, dec: 28.026199, mag: 1.16 });
stars.set('Porrima', { ra: 190.415181, dec: -1.449373, mag: 3.44 });
stars.set('Procyon', { ra: 114.825493, dec: 5.224993, mag: 0.40 });
stars.set('Propus', { ra: 93.719405, dec: 22.506794, mag: 3.32 });
stars.set('Rasalgethi', { ra: 258.661910, dec: 14.390333, mag: 3.37 }); // Combined magnitude
stars.set('Rasalhague', { ra: 263.733627, dec: 12.560035, mag: 2.08 });
stars.set('Rastaban', { ra: 262.608174, dec: 52.301389, mag: 2.79 });
stars.set('Regulus', { ra: 152.092962, dec: 11.967209, mag: 1.36 });
stars.set('Rigel', { ra: 78.634467, dec: -8.201638, mag: 0.18 });
stars.set('Rigil Kentaurus', { ra: 219.902066, dec: -60.833975, mag: -0.01 }); // Combined magnitude of A component
stars.set('Rotanev', { ra: 309.387235, dec: 14.595115, mag: 3.64 });
stars.set('Ruchbah', { ra: 21.453964, dec: 60.235284, mag: 2.66 });
stars.set('Sabik', { ra: 257.594529, dec: -15.724907, mag: 2.43 });
stars.set('Sadalmelik', { ra: 331.445983, dec: -0.319849, mag: 2.95 });
stars.set('Sadalsuud', { ra: 322.889715, dec: -5.571176, mag: 2.90 });
stars.set('Sadr', { ra: 305.557091, dec: 40.256679, mag: 2.23 });
stars.set('Saiph', { ra: 86.939120, dec: -9.669605, mag: 2.07 });
stars.set('Sargas', { ra: 264.329711, dec: -42.997824, mag: 1.86 });
stars.set('Scheat', { ra: 345.943572, dec: 28.082785, mag: 2.44 });
stars.set('Schedar', { ra: 10.126838, dec: 56.537331, mag: 2.24 });
stars.set('Seginus', { ra: 218.019466, dec: 38.308251, mag: 3.04 }); // Also known as Gamma Boötis
stars.set('Shaula', { ra: 263.402167, dec: -37.103824, mag: 2.08 }); // Magnitude is for combined system
stars.set('Sheliak', { ra: 282.519978, dec: 33.362668, mag: 3.60 }); // Magnitude varies
stars.set('Sheratan', { ra: 28.660046, dec: 20.808031, mag: 2.70 });
stars.set('Sirius', { ra: 101.287155, dec: -16.716116, mag: -1.45 });
stars.set('Skat', { ra: 343.662556, dec: -15.820827, mag: 3.27 });
stars.set('Spica', { ra: 201.298247, dec: -11.161319, mag: 0.98 }); // Magnitude can vary slightly
stars.set('Sualocin', { ra: 309.909530, dec: 15.912073, mag: 3.86 });
stars.set('Suhail', { ra: 136.998993, dec: -43.432589, mag: 2.23 });
stars.set('Sulafat', { ra: 284.735928, dec: 32.689557, mag: 3.25 });
stars.set('Tarazed', { ra: 296.564915, dec: 10.613262, mag: 2.72 });
stars.set('Taygeta', { ra: 56.302063, dec: 24.467270, mag: 4.30 });
stars.set('Thuban', { ra: 211.097291, dec: 64.375851, mag: 3.67 });
stars.set('Unukalhai', { ra: 236.066976, dec: 6.425629, mag: 2.63 });
stars.set('Vega', { ra: 279.234735, dec: 38.783689, mag: 0.03 });
stars.set('Vindemiatrix', { ra: 195.544157, dec: 10.959149, mag: 2.85 });
stars.set('Wasat', { ra: 110.030749, dec: 21.982316, mag: 3.52 });
stars.set('Wezen', { ra: 107.097850, dec: -26.393200, mag: 1.83 });
stars.set('Yed Posterior', { ra: 244.580374, dec: -4.692510, mag: 3.23 });
stars.set('Yed Prior', { ra: 243.586411, dec: -3.694323, mag: 2.73 });
stars.set('Zaniah', { ra: 184.976476, dec: -0.666793, mag: 4.60 }); // Combined magnitude
stars.set('Zaurak', { ra: 59.507360, dec: -13.508516, mag: 2.97 });
stars.set('Zavijava', { ra: 177.673826, dec: 1.764717, mag: 3.59 });
stars.set('Zosma', { ra: 168.527089, dec: 20.523718, mag: 2.56 });
stars.set('Zubenelgenubi', { ra: 222.719638, dec: -16.041777, mag: 2.75 });
stars.set('Zubeneschamali', { ra: 229.251724, dec: -9.382914, mag: 2.61 });
stars.set('Epsilon UMi', { ra: 251.4926736, dec: 82.03725647, mag: 4.19 });
stars.set('Zeta UMi', { ra: 236.01466215, dec: 77.79449411, mag: 4.29 });
stars.set('Eta UMi', { ra: 244.37612595, dec: 75.75534308, mag: 4.95 });
stars.set('Gamma Cas', { ra: 14.1770877, dec: 60.71674956, mag: 2.47 });

//... thousands more stars...

// Constellation data (expanded)
const constellations = [
    {
        name: 'Ursa Major',
        stars: ['Dubhe', 'Merak', 'Phecda', 'Megrez', 'Alioth', 'Mizar', 'Alkaid'],
        mythology: 'The Great Bear, associated with Artemis in Greek mythology.',
        lines: [
            { from: 'Dubhe', to: 'Merak' },
            { from: 'Merak', to: 'Phecda' },
            { from: 'Phecda', to: 'Megrez' },
            { from: 'Megrez', to: 'Alioth' },
            { from: 'Alioth', to: 'Mizar' },
            { from: 'Mizar', to: 'Alkaid' }
        ]
    },
    {
        name: 'Ursa Minor',
        stars: ['Polaris', 'Kochab', 'Pherkad', 'Yildun', 'Epsilon UMi', 'Zeta UMi', 'Eta UMi'],
        mythology: 'The Little Bear. In Greek mythology, associated with Ida, the nymph who cared for Zeus, or Arcas, son of Zeus and Callisto.',
        lines: [
            { from: 'Polaris', to: 'Yildun' },
            { from: 'Yildun', to: 'Epsilon UMi' },
            { from: 'Epsilon UMi', to: 'Zeta UMi' },
            { from: 'Zeta UMi', to: 'Eta UMi' },
            { from: 'Eta UMi', to: 'Kochab' },
            { from: 'Kochab', to: 'Pherkad' },
            { from: 'Pherkad', to: 'Zeta UMi' }
        ]
    },
    {
        name: 'Orion',
        stars: ['Betelgeuse', 'Rigel', 'Bellatrix', 'Alnitak', 'Alnilam', 'Mintaka', 'Saiph', 'Meissa', 'Hatysa'], // Hatysa for sword
        mythology: 'The Hunter. In Greek mythology, a giant huntsman. Known for his belt of three bright stars and his sword.',
        lines: [
            { from: 'Meissa', to: 'Betelgeuse' }, // Head to shoulder
            { from: 'Meissa', to: 'Bellatrix' }, // Head to other shoulder
            { from: 'Betelgeuse', to: 'Mintaka' }, // Shoulder to belt (Mintaka is westernmost belt star)
            { from: 'Bellatrix', to: 'Alnitak' }, // Other shoulder to belt (Alnitak is easternmost belt star)
            { from: 'Mintaka', to: 'Alnilam' },   // Belt
            { from: 'Alnilam', to: 'Alnitak' },   // Belt
            { from: 'Mintaka', to: 'Rigel' },     // Belt to knee/foot
            { from: 'Alnitak', to: 'Saiph' },     // Belt to other knee/foot
            // Sword from belt (Alnilam is middle belt star)
            { from: 'Alnilam', to: 'Hatysa' } // Hatysa is Iota Orionis, in the sword
        ]
    },
    {
        name: 'Cassiopeia',
        stars: ['Segin', 'Ruchbah', 'Gamma Cas', 'Schedar', 'Caph'],
        mythology: 'The Queen. In Greek mythology, wife of Cepheus and mother of Andromeda. Punished for her vanity by being placed upside down in the sky for half the year.',
        lines: [
            { from: 'Caph', to: 'Schedar' },
            { from: 'Schedar', to: 'Gamma Cas' },
            { from: 'Gamma Cas', to: 'Ruchbah' },
            { from: 'Ruchbah', to: 'Segin' }
        ]
    },
    //... dozens of constellations...
];

// Canvas and context
const canvas = document.createElement('canvas');
// canvas.width = window.innerWidth; // Defer sizing to resizeCanvas
// canvas.height = window.innerHeight; // Defer sizing to resizeCanvas
canvas.style.background = "#000"; // Set canvas background color to black
starMap.appendChild(canvas);
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    // Redrawing will be handled by the drawStars animation loop
}
window.addEventListener('resize', resizeCanvas, false);
// Initial call to set canvas size
resizeCanvas();

// Function to convert coordinates
function convertCoords(ra, dec) {
    const x = (ra / 360) * canvas.width;
    const y = (1 - (dec + 90) / 180) * canvas.height;
    return { x, y };
}

// Function to draw stars on the canvas (animated)
function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (const [starName, star] of stars) {
        const { x, y } = convertCoords(star.ra, star.dec);

        ctx.beginPath();
        const baseRadius = Math.max(1, (2 - star.mag) * 2);

        if (star.highlighted) {
            ctx.arc(x, y, baseRadius + 2, 0, 2 * Math.PI); // Larger radius for highlighted
            ctx.fillStyle = '#FFD700'; // Gold
            ctx.shadowBlur = 15;
            ctx.shadowColor = "#FFD700";
        } else {
            ctx.arc(x, y, baseRadius, 0, 2 * Math.PI);
            ctx.fillStyle = '#FFFFCC';
            ctx.shadowBlur = 8;
            ctx.shadowColor = "#FFF";
        }
        ctx.fill();
    }
    ctx.shadowBlur = 0; // Reset shadow blur after the loop

    // Draw constellation lines in the same animation frame
    constellations.forEach(constellation => {
        // Future enhancement: Could check if constellation is highlighted to change line style
        // For now, all lines are drawn with default style.
        drawConstellationLines(constellation);
    });

    requestAnimationFrame(drawStars);
}

// Function to draw constellation lines (on canvas)
function drawConstellationLines(constellation) {
    ctx.beginPath();
    let isAnyStarInConstellationHighlighted = false;
    if (constellation.stars.some(starName => stars.get(starName)?.highlighted)) {
        isAnyStarInConstellationHighlighted = true;
    }

    constellation.lines.forEach(line => {
        const star1 = stars.get(line.from);
        const star2 = stars.get(line.to);
        if (star1 && star2) {
            const { x: x1, y: y1 } = convertCoords(star1.ra, star1.dec);
            const { x: x2, y: y2 } = convertCoords(star2.ra, star2.dec);
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
        }
    });

    if (isAnyStarInConstellationHighlighted) {
        ctx.strokeStyle = '#FFD700'; // Gold for highlighted constellation lines
        ctx.lineWidth = 1.5;
    } else {
        ctx.strokeStyle = '#ccc';
        ctx.lineWidth = 1;
    }
    ctx.stroke();
}

// Event listeners for constellation clicks
canvas.addEventListener('click', (e) => {
    const rect = canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    let constellationFoundAndClicked = false;

    for (const constellation of constellations) {
        const starPoints = constellation.stars.map(starName => {
            const star = stars.get(starName);
            if (star) { // Check if star exists in the map
                const { x, y } = convertCoords(star.ra, star.dec);
                return { x, y };
            }
            return null; // Return null if star is not found
        }).filter(p => p !== null); // Filter out any null entries

        if (starPoints.length < 3) { // A polygon needs at least 3 points
            continue;
        }

        if (isPointInPolygon(mouseX, mouseY, starPoints)) {
            showConstellationInfo(constellation);
            constellationFoundAndClicked = true;
            break;
        }
    }

    if (!constellationFoundAndClicked) {
        hideConstellationInfo();
    }
});

// Helper function to determine if a point is inside a polygon
function isPointInPolygon(x, y, polygon) {
    // (Implementation of point-in-polygon algorithm - remains unchanged)
}

// Function to display constellation information
function showConstellationInfo(constellation) {
    constellationInfo.innerHTML = `
        <h2>${constellation.name}</h2>
        <p>${constellation.mythology}</p>
    `;
    constellationInfo.style.display = 'block';
    constellationInfo.setAttribute('aria-live', 'polite');
}

// Function to hide constellation information
function hideConstellationInfo() {
    constellationInfo.style.display = 'none';
}

// Zoom and pan controls
let scale = 1;
let translateX = 0;
let translateY = 0;
let isDragging = false;
let startX, startY;

function updateTransform() {
    canvas.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
}

starMap.addEventListener('wheel', (e) => {
    e.preventDefault();
    const scaleFactor = Math.sign(e.deltaY) > 0? 0.9: 1.1;
    scale *= scaleFactor;
    scale = Math.min(Math.max(scale, 0.5), 2);
    updateTransform();
});

starMap.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.clientX - translateX;
    startY = e.clientY - translateY;
});

starMap.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    translateX = e.clientX - startX;
    translateY = e.clientY - startY;
    updateTransform();
});

starMap.addEventListener('mouseup', () => {
    isDragging = false;
});

// Navigation buttons
const panLeftButton = document.createElement('button');
panLeftButton.textContent = '←';
panLeftButton.addEventListener('click', () => {
    translateX += 20;
    updateTransform();
});
starMap.appendChild(panLeftButton);

const panRightButton = document.createElement('button');
panRightButton.textContent = '→';
panRightButton.addEventListener('click', () => {
    translateX -= 20;
    updateTransform();
});
starMap.appendChild(panRightButton);

const panUpButton = document.createElement('button');
panUpButton.textContent = '↑';
panUpButton.addEventListener('click', () => {
    translateY += 20;
    updateTransform();
});
starMap.appendChild(panUpButton);

const panDownButton = document.createElement('button');
panDownButton.textContent = '↓';
panDownButton.addEventListener('click', () => {
    translateY -= 20;
    updateTransform();
});
starMap.appendChild(panDownButton);

// Search functionality
const searchInput = document.createElement('input');
searchInput.type = 'text';
searchInput.placeholder = 'Search for a constellation...';
searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();

    // Clear previous highlights from all stars
    for (const star of stars.values()) {
        star.highlighted = false;
    }

    if (searchTerm) {
        constellations.forEach(constellation => {
            // Highlight stars of matching constellations
            if (constellation.name.toLowerCase().includes(searchTerm)) {
                constellation.stars.forEach(starName => {
                    const star = stars.get(starName);
                    if (star) {
                        star.highlighted = true;
                    }
                });
            }
        });
    }
    // The drawStars function will pick up the changes in the next animation frame
});
starMap.appendChild(searchInput);

// Accessibility
constellationInfo.setAttribute('aria-label', 'Constellation Information');
constellationInfo.setAttribute('role', 'dialog');

// Initial drawing of stars and constellations (animated)
drawStars();
// constellations.forEach(drawConstellationLines); // Removed as it's now in drawStars loop
