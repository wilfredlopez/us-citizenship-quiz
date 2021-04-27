
//https://www.uscis.gov/sites/default/files/document/questions-and-answers/100q.pdf

import { shuffle } from '../utils/shuffle'

const mapLowerTrim = (a: string) => a.toLowerCase().trim()
const mapProperCase = (a: string) => a[0].toUpperCase() + a.substr(1)

export type QuestionType = 'select' | 'input' | 'multi'

const question_types: readonly QuestionType[] = ["select", "input", "multi"] as const

export interface QuestionContructor {
    text: string,
    number: number,
    correctAnswers?: string[]
    options?: string[]
    type?: QuestionType
    tip?: string
}
export class Question {
    private _answers: string[]
    private _options: string[]
    private _type: QuestionType
    private _number: number
    text: string
    tip: string

    get type() {
        return this._type
    }
    set type(type: QuestionType) {
        if (question_types.includes(type)) {
            this._type = type
        }
    }

    get options() {
        return this._options.map(mapProperCase)
    }

    get answers() {
        return [...this._answers].map(mapProperCase)
    }

    get number() {
        return this._number
    }

    constructor({
        text,
        correctAnswers = [],
        options = [],
        type = 'select',
        tip = '',
        number
    }: QuestionContructor) {
        this.text = text
        this._answers = correctAnswers.map(mapLowerTrim)
        this._options = options.map(mapLowerTrim)
        //make options be in random order.
        this._options = shuffle(this.options)
        this._type = type
        this.tip = tip
        this._number = number
    }
    /**
     *
     * @param {string} option
     * @returns
     */
    isCorrectAnswer(option: string) {
        return this._answers.includes(option.toLowerCase().trim())
    }
}




