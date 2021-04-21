
interface TranslateKeys {
    submit: string
    reveal: string
    hide: string
    next: string

}


const STRINGS: Record<'es' | 'en', TranslateKeys> = {
    'es': {
        submit: "Someter",
        reveal: "Revelar Respuestas",
        hide: "Esconder Respuestas",
        next: "Proxima Pregunta"
    },
    'en': {
        submit: "Submit",
        reveal: "Reveal Answers",
        hide: "Hide Answers",
        next: "Next Question"
    }
}


export function translateString(inES: boolean, key: keyof typeof STRINGS['es']) {
    if (inES) {
        return STRINGS['es'][key]
    }
    return STRINGS['en'][key]
}