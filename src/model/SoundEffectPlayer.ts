import { GOOD_SOUND_URL, WRONG_SOUND_URL } from '../constants/constants'



export interface SoundEffectPlayerOptions {
    goodEffectURL?: string
    wrongEffectURL?: string
    rootID?: string
}

export type SoundEffectPlayerKeys = 'good' | 'wrong'

const ROOT_SYMBOL = Symbol('sound_effect_player_root')



export class SoundEffectPlayer {
    goodEffectURL: string
    wrongEffectURL: string
    sounds: Partial<Record<SoundEffectPlayerKeys, HTMLAudioElement>> = {}
    rootID: string
    constructor({
        goodEffectURL = GOOD_SOUND_URL,
        wrongEffectURL = WRONG_SOUND_URL,
        rootID = 'SOUND_EFFECTS_DIV'
    }: SoundEffectPlayerOptions = {}) {
        this.goodEffectURL = goodEffectURL
        this.wrongEffectURL = wrongEffectURL
        this.rootID = rootID
    }

    private isRootInDocument() {
        const div = document.getElementById(this.rootID) as (HTMLDivElement & { [ROOT_SYMBOL]: Symbol }) | null
        if (div === undefined || div === null) {
            return false
        }
        if (div[ROOT_SYMBOL] === ROOT_SYMBOL) {
            return true
        }

        return false


    }

    init() {
        if (this.isRootInDocument()) {
            return
        }
        //create
        const root = document.createElement('div') as HTMLDivElement & { [ROOT_SYMBOL]: Symbol }
        root.id = this.rootID
        //unique symbol to make sure when finding it.
        root[ROOT_SYMBOL] = ROOT_SYMBOL
        const goodAudio = document.createElement('audio') as HTMLAudioElement
        const wrongAudio = document.createElement('audio') as HTMLAudioElement
        //set
        goodAudio.src = this.goodEffectURL
        wrongAudio.src = this.wrongEffectURL

        //append
        root.appendChild(goodAudio)
        root.appendChild(wrongAudio)
        document.body.appendChild(root)
        this.sounds['good'] = goodAudio
        this.sounds['wrong'] = wrongAudio
    }

    play(soundId: SoundEffectPlayerKeys) {
        this.sounds[soundId]?.play().catch(e => console.error(e))
    }
}