import { getSettingsFromLocalStorage } from './utils.js';
const wordArray = [
    "aventura", "mariposa", "complejo", "felicidad", "fantastico", "elefante",
    "misterio", "tecnologia", "creatividad", "universidad", "maravilla", "increible",
    "esperanza", "naturaleza", "personalidad", "imposible", "interesante", "silencioso",
    "generacion", "estupendo", "pintoresco", "profundidad", "sorprendente", "contagioso",
    "oportunidad", "inolvidable", "curiosidad", "imaginario", "deslumbrante", "ciudadano",
    "pasion", "recomendacion", "delicioso", "encantador", "inspiracion", "espectacular",
    "adrenalina", "crecimiento", "enriquecedor", "efervescencia", "vulnerabilidad",
    "extraordinario", "resplandor", "perspectiva", "atractivo", "consistencia", "enigmatico",
    "marioneta", "sentimiento", "travesia", "atmosfera", "realidad", "adversidad",
    "magnifico", "similitud", "paralelo", "infinito", "aprendizaje", "colaboracion",
    "independencia", "trascendencia", "equilibrio", "pintura", "alucinante", "revolucion",
    "inteligencia", "espontaneo", "satisfaccion", "transformacion", "cuestionamiento",
    "autenticidad", "conciencia", "integridad", "colosal", "inquietud", "desarrollo",
    "magico", "innovacion", "experiencia", "profundo", "autonomia", "celebracion", "sublime",
    "ternura", "entusiasmo", "espiritu", "cosmos", "conexion", "brillante", "historia",
    "compasion", "invencible", "abundancia", "interaccion", "genuino", "espacial",
    "recuerdo", "sublimidad", "solidaridad", "perspicacia", "esencia", "influencia",
    "apasionado", "relevancia", "insignificante", "contradiccion", "inmortal", "creativo",
    "imaginacion", "incertidumbre", "inexplicable", "cualidad", "maravilloso", "espectro",
    "complicidad", "interminable", "trascendental", "indomable", "autenticidad", "valentia",
    "singularidad", "proposito", "aventurero", "reflexion", "consciencia", "nostalgia",
    "serenidad", "innovador", "fascinante", "inspirador", "inigualable", "memoria",
    "vulnerable", "delicadeza", "amistad", "intrepido", "intuicion", "paradigma", "ausencia",
    "navegante", "melodia", "desafio", "inquietante", "esplendor", "efervescencia",
    "sensibilidad", "deslumbrante", "infinito", "contemplacion", "mariposa", "belleza",
    "conciencia", "armonia", "emocion", "trascendencia", "conexion", "vivencia", "plenitud",
    "impresionante", "encanto", "irrepetible", "vibrante", "originalidad", "imaginario",
    "fascinacion", "resistencia", "profundidad", "inolvidable", "intensidad", "percepcion",
    "integridad", "sorprendente", "espontaneo", "espiritu", "despertar", "creatividad",
    "autenticidad", "impacto", "caminante", "persistencia", "universo", "naturaleza",
    "inspiracion", "maravilla", "experiencia", "aventura", "libertad", "cambiar",
    "desarrollo", "cuestionamiento", "extraordinario", "posibilidad", "abundancia",
    "compartir", "despertar", "esencia", "riqueza", "compromiso", "epoca", "sabiduria",
    "belleza", "sinceridad", "tranquilidad", "ternura", "aventurero", "curiosidad",
    "cariño", "entusiasmo", "pasión", "honestidad", "entendimiento", "empatía",
    "amistad", "respeto", "solidaridad", "lealtad", "bondad", "compasión", "tolerancia",
    "generosidad", "gratitud", "dignidad", "humildad", "valentía", "cortesía", "paciencia",
    "sabiduría", "creatividad", "imaginación", "inspiración", "innovación", "perseverancia",
    "determinación", "esfuerzo", "disciplina", "responsabilidad", "confianza", "optimismo",
    "alegría", "felicidad", "plenitud", "satisfacción", "contento", "tranquilidad",
    "serenidad", "paz", "armonía", "equilibrio", "fortaleza", "resiliencia", "adaptabilidad",
    "flexibilidad", "prudencia", "sabiduría", "inteligencia", "razonamiento", "lógica",
    "objetividad", "pensamiento", "análisis", "reflexión", "meditación", "comprensión",
    "conocimiento", "aprendizaje", "curiosidad", "descubrimiento", "exploración",
    "aventura", "viaje", "peregrinación", "expedición", "misión", "meta", "objetivo",
    "propósito", "aspiración", "sueño", "deseo", "esperanza", "anhelo", "ideal",
    "inspiración", "motivación", "determinación", "perseverancia", "esfuerzo", "trabajo",
    "dedicación", "compromiso", "responsabilidad", "integridad", "honestidad", "sinceridad",
    "transparencia", "autenticidad", "coherencia", "ética", "moralidad", "justicia",
    "equidad", "igualdad", "libertad", "derechos", "dignidad", "respeto", "tolerancia",
    "diversidad", "inclusión", "solidaridad", "empatía", "compasión", "humanidad",
    "bondad", "generosidad", "gratitud", "aprecio", "valoración", "reconocimiento",
    "consideración", "atención", "cuidado", "protección", "seguridad", "confianza",
    "apoyo", "alianza", "colaboración", "cooperación", "unidad", "conexión", "relación",
    "vínculo", "interacción", "comunicación", "diálogo", "conversación", "escucha",
    "entendimiento", "comprensión", "conocimiento", "sabiduría", "inteligencia", "razón",
    "lógica", "pensamiento", "reflexión", "meditación", "contemplación", "observación",
    "percepción", "sensación", "intuición", "instinto", "impulso", "deseo", "anhelo",
    "esperanza", "ilusión", "fantasía", "imaginación", "creatividad", "innovación",
    "originalidad", "genialidad", "talento", "habilidad", "destreza", "maestría",
    "experiencia", "práctica", "entrenamiento", "preparación", "planificación", "organización",
    "gestión", "administración", "coordinación", "ejecución", "realización", "logro",
    "éxito", "triunfo", "victoria", "conquista", "superación", "avance", "progreso",
    "desarrollo", "crecimiento", "evolución", "transformación", "cambio", "revolución",
    "innovación", "mejora", "optimización", "eficiencia", "productividad", "rentabilidad",
    "sostenibilidad", "responsabilidad", "compromiso", "ética", "integridad", "honestidad",
    "transparencia", "coherencia", "autenticidad", "valores", "principios", "moralidad",
    "justicia", "equidad", "igualdad", "libertad", "derechos", "dignidad", "respeto",
    "tolerancia", "diversidad", "inclusión", "solidaridad", "humanidad", "bondad",
    "generosidad", "gratitud", "aprecio", "valoración", "reconocimiento", "consideración",
    "atención", "cuidado", "protección", "seguridad", "confianza", "apoyo", "alianza",
    "colaboración", "cooperación", "unidad", "conexión", "relación", "vínculo", "interacción",
    "comunicación", "diálogo", "conversación", "escucha", "entendimiento", "comprensión",
    "conocimiento", "sabiduría", "inteligencia", "razón", "lógica", "pensamiento", "reflexión",
    "meditación", "contemplación", "observación", "percepción", "sensación", "intuición",
    "instinto", "impulso", "deseo", "anhelo", "esperanza", "ilusión", "fantasía", "imaginación",
    "creatividad", "innovación", "originalidad", "genialidad", "talento", "habilidad", "destreza",
    "maestría", "experiencia", "práctica", "entrenamiento", "preparación", "planificación",
    "organización", "gestión", "administración", "coordinación", "ejecución", "realización",
    "logro", "éxito", "triunfo", "victoria", "conquista", "superación", "avance", "progreso",
    "desarrollo", "crecimiento", "evolución", "transformación", "cambio", "revolución",
    "innovación", "mejora", "optimización", "eficiencia", "productividad", "rentabilidad",
    "sostenibilidad", "responsabilidad", "compromiso", "ética", "integridad", "honestidad",
    "transparencia", "coherencia", "autenticidad", "valores", "principios", "moralidad",
    "justicia", "equidad", "igualdad", "libertad", "derechos", "dignidad", "respeto",
    "tolerancia", "diversidad", "inclusión", "solidaridad", "humanidad", "bondad",
    "generosidad", "gratitud", "aprecio", "valoración", "reconocimiento", "consideración",
    "atención", "cuidado", "protección", "seguridad", "confianza", "apoyo", "alianza",
    "colaboración", "cooperación", "unidad", "conexión", "relación", "vínculo", "interacción",
    "comunicación", "diálogo", "conversación", "escucha", "entendimiento", "comprensión",
    "conocimiento", "sabiduría", "inteligencia", "razón", "lógica", "pensamiento", "reflexión",
    "meditación", "contemplación", "observación", "percepción", "sensación", "intuición",
    "instinto", "impulso", "deseo", "anhelo", "esperanza", "ilusión", "fantasía", "imaginación",
    "creatividad", "innovación", "originalidad", "genialidad", "talento", "habilidad", "destreza",
    "maestría", "experiencia", "práctica", "entrenamiento", "preparación", "planificación",
    "organización", "gestión", "administración", "coordinación", "ejecución", "realización",
    "logro", "éxito", "triunfo", "victoria", "conquista", "superación", "avance", "progreso",
    "desarrollo", "crecimiento", "evolución", "transformación", "cambio", "revolución",
    "innovación", "mejora", "optimización", "eficiencia", "productividad", "rentabilidad",
    "sostenibilidad", "responsabilidad", "compromiso", "ética", "integridad", "honestidad",
    "transparencia", "coherencia", "autenticidad", "valores", "principios", "moralidad",
    "justicia", "equidad", "igualdad", "libertad", "derechos", "dignidad", "respeto",
    "tolerancia", "diversidad", "inclusión", "solidaridad", "humanidad", "bondad",
    "generosidad", "gratitud", "aprecio", "valoración", "reconocimiento", "consideración",
    "atención", "cuidado", "protección", "seguridad", "confianza", "apoyo", "alianza",
    "colaboración", "cooperación", "unidad", "conexión", "relación", "vínculo", "interacción",
    "comunicación", "diálogo", "conversación", "escucha", "entendimiento", "comprensión",
    "conocimiento", "sabiduría", "inteligencia", "razón", "lógica", "pensamiento", "reflexión",
    "meditación", "contemplación", "observación", "percepción", "sensación", "intuición",
    "instinto", "impulso", "deseo", "anhelo", "esperanza", "ilusión", "fantasía", "imaginación",
    "creatividad", "innovación", "originalidad", "genialidad", "talento", "habilidad", "destreza",
    "maestría", "experiencia", "práctica", "entrenamiento", "preparación", "planificación",
    "organización", "gestión", "administración", "coordinación", "ejecución", "realización",
    "logro", "éxito", "triunfo", "victoria", "conquista", "superación", "avance", "progreso",
    "desarrollo", "crecimiento", "evolución", "transformación", "cambio", "revolución",
    "innovación", "mejora", "optimización", "eficiencia", "productividad", "rentabilidad",
    "sostenibilidad", "responsabilidad", "compromiso", "ética", "integridad", "honestidad",
    "transparencia", "coherencia", "autenticidad", "valores", "principios", "moralidad",
    "justicia", "equidad", "igualdad", "libertad", "derechos", "dignidad", "respeto",
    "tolerancia", "diversidad", "inclusión", "solidaridad", "humanidad", "bondad",
    "generosidad", "gratitud", "aprecio", "valoración", "reconocimiento", "consideración",
    "atención", "cuidado", "protección", "seguridad", "confianza", "apoyo", "alianza",
    "colaboración", "cooperación", "unidad", "conexión", "relación", "vínculo", "interacción",
    "comunicación", "diálogo", "conversación", "escucha", "entendimiento", "comprensión",
    "conocimiento", "sabiduría", "inteligencia", "razón", "lógica", "pensamiento", "reflexión",
    "meditación", "contemplación", "observación", "percepción", "sensación", "intuición",
    "instinto", "impulso", "deseo", "anhelo", "esperanza", "ilusión", "fantasía", "imaginación",
    "creatividad", "innovación", "originalidad", "genialidad", "talento", "habilidad", "destreza",
    "maestría", "experiencia", "práctica", "entrenamiento", "preparación", "planificación",
    "organización", "gestión", "administración", "coordinación", "ejecución", "realización",
    "logro", "éxito", "triunfo", "victoria", "conquista", "superación", "avance", "progreso",
    "desarrollo", "crecimiento", "evolución", "transformación", "cambio", "revolución",
    "innovación", "mejora", "optimización", "eficiencia", "productividad", "rentabilidad",
    "sostenibilidad", "responsabilidad", "compromiso", "ética", "integridad", "honestidad",
    "transparencia", "coherencia", "autenticidad", "valores", "principios", "moralidad",
    "justicia", "equidad", "igualdad", "libertad", "derechos", "dignidad", "respeto",
    "tolerancia", "diversidad", "inclusión", "solidaridad", "humanidad", "bondad",
    "generosidad", "gratitud", "aprecio", "valoración", "reconocimiento"
];

export const getWordsArrayBySettingsOrPlatform = () => {

    const gameSettings = getSettingsFromLocalStorage();
    //check if its windows or mac os
    if (navigator.userAgent.includes('Win') && gameSettings?.['enable-accents']) {
        return wordArray;
    }
    return removeAccentsFromWordsArray();
}

const removeAccentsFromWordsArray = () => {
    return wordArray.filter(word => !hasAccent(word));
}

const hasAccent = (word) => {
    const specialChars = /[áéíóúÁÉÍÓÚ]/;
    return specialChars.test(word);
}