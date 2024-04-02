
//https://www.uscis.gov/sites/default/files/document/questions-and-answers/100q.pdf

import { shuffle } from '../utils/shuffle'

const mapLowerTrim = (a: string) => a.toLowerCase().trim()
const mapProperCase = (a: string) => a[0].toUpperCase() + a.substr(1)

export type QuestionType = 'select' | 'input' | 'multi'

const question_types: readonly QuestionType[] = ["select", "input", "multi"] as const

export interface QuestionContructor {
    category?: string
    text: string,
    number: number,
    correctAnswers?: string[]
    options: string[]
    type?: QuestionType
    tip?: string
    findCorrectAnswers?: (sns:string)=>boolean
}
export class Question {
    private _answers: string[]
    private _options: string[]
    private _type: QuestionType
    private _number: number
    category: string
    text: string
    tip: string
    findCorrectAnswers?: (sns:string)=>boolean
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
        number,
        category = 'General',
        findCorrectAnswers
    }: QuestionContructor) {
        this.text = text
        this._answers = correctAnswers.map(mapLowerTrim)
        this._options = options.map(mapLowerTrim)
        //make options be in random order.
        this._options = shuffle(this.options)
        this._type = type
        this.tip = tip
        this.category = category
        this._number = number
        this.findCorrectAnswers = findCorrectAnswers
    }
    /**
     *
     * @param {string} option
     * @returns
     */
    isCorrectAnswer(option: string) {
        if(this.findCorrectAnswers){
            return this.findCorrectAnswers(option)
        }
        return this._answers.includes(option.toLowerCase().trim())
    }
}




