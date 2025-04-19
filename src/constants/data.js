import { boqueron, santa_ana, izalco } from "./images" 

const destinies = [
    {
        title: "Volcán de San Salvador",
        description: "El Volcán de San Salvador, también conocido como Quezaltepeque, se ubica al oeste de la capital, San Salvador. Tiene una altitud de 1,960 metros y su cráter principal, llamado El Boquerón, tiene aproximadamente 1.5 km de diámetro. Su última erupción ocurrió en 1917, formando un pequeño cráter dentro del Boquerón, llamado “Boqueroncito”. Actualmente es un sitio turístico muy visitado por sus senderos, clima fresco y vistas panorámicas de la ciudad.",
        photo: boqueron
    },
    {
        title: "Volcán de Santa Ana",
        description: "El Volcán de Santa Ana, también conocido como Ilamatepeq, es el más alto de El Salvador con 2,381 metros de altitud. Ubicado en el departamento de Santa Ana, forma parte del Parque Nacional Los Volcanes. Su cráter principal alberga una laguna verde turquesa de origen volcánico, rica en azufre. Es uno de los destinos de senderismo más populares del país. Su última erupción significativa fue en 2005, y desde entonces mantiene vigilancia constante debido a su actividad fumarólica.",
        photo: santa_ana
    },
    {
        title: "Volcán de Izalco",
        description: "Conocido como el Faro del Pacífico, el Volcán de Izalco es uno de los más icónicos de El Salvador. Nació en 1770 y se mantuvo en erupción casi continua por más de 190 años. Tiene una forma cónica perfecta y alcanza una altitud de aproximadamente 1,950 metros. Está ubicado en el departamento de Sonsonate, dentro del Parque Nacional Los Volcanes, y es muy popular entre los excursionistas por su impresionante paisaje volcánico y vistas panorámicas desde la cima.",
        photo: izalco
    }
]

const busesFeatures = [
    "Asientos reclinables y espaciosos con excelente soporte lumbar.",
    "Aire acondicionado de última generación para un ambiente fresco y agradable.",
    "Conectividad Wi-Fi y puertos USB individuales para mantenerte conectado en todo momento.",
    "Pantallas individuales y sistema de entretenimiento a bordo, ideal para trayectos largos.",
    "Iluminación LED ambiental para un viaje más relajante.",
    " Baños higiénicos y amplios compartimentos para equipaje."
]

const services = [
    {
        title: "Clase Estándar",
        type: "primary",
        features: [
            "Asientos reclinables y confortables.",
                "Aire acondicionado.",
                "Compartimento seguro para mochilas y equipo.",
                "Wi-Fi y USB.",
                "Agua embotellada.",
        ]
    },
    {
        title: "Clase Confort/Plus",
        type: "secondary",
        features: [
            " Más espacio para piernas.",
            "Kit de bienvenida (toalla húmeda, snacks, bebida energética o isotónica).",
            "Soporte para bastones de trekking o equipo ligero.",
            "Información impresa o digital sobre la ruta, clima y consejos del guía.",
            "Cargadores para dispositivos personales.",
        ]
    },
    {
        title: "Clase Premium/Aventura Pro",
        type: "tertiary",
        features: [
            "Asientos extra anchos tipo cama.",
            "Almohada y manta para trayectos largos.",
            "Acceso exclusivo a entretenimiento.",
            "Desayuno o merienda saludable pre-entrenamiento.",
            "Bolsa de hidratación de cortesía o termo reutilizable.",
            "Guía personal a bordo que explica rutas o da tips de montaña",
        ]
    }
]

const bundles = [
    {
        title: 'Paquete: "Base Camp"',
        description: "Ideal para quienes viajan por primera vez a una zona volcánica",
        type: "bundle",
        features: [
            "Traslado ida y vuelta.",
            "Guía local certificado.",
            "Refrigerio + hidratación.",
            "Seguro básico de accidentes.",
            "Mapa de rutas y puntos seguros.",
        ]
    },
    {
        title: 'Paquete: "Summit Pro"',
        description: "Para escaladores experimentados.",
        type: "bundle",
        features: [
            "Transporte con compartimiento especial para equipo (picos, cuerdas, etc.).",
            "Acceso anticipado a zonas de salida de ruta.",
            " Guía de alta montaña.",
            "Check-in personalizado de equipo.",
            " Alerta meteorológica vía WhatsApp en tiempo real."
        ]
    },
    {
        title: 'Paquete: "Trekking Relax"',
        description: "Pensado para turistas que quieren hacer caminatas suaves.",
        type: "bundle",
        features: [
            "Ruta guiada con nivel bajo-medio.",
            " Paradas panorámicas para fotos.",
            "Refrigerio y picnic.",
            "Asistencia médica ligera (curitas, vendajes, oxígeno).",
        ]
    },
    {
        title: 'Paquete: "Mindful Hike"',
        description: "Ideal para desconectarte del estrés del dia a dia.",
        type: "bundle",
        features: [
            "Ruta corta + meditación guiada al aire libre.",
            "Infusiones naturales.",
            "Música relajante en trayecto de vuelta.",
            "Snacks saludables.",
        ]
    }
]


export {
    destinies,
    busesFeatures,
    services,
    bundles
}