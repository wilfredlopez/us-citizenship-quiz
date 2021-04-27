import { GOOD_SOUND_URL, WRONG_SOUND_URL } from '../constants/constants'



export interface SoundEffectPlayerOptions {
    goodEffectURL?: string
    wrongEffectURL?: string
    rootID?: string
}

// export type SoundEffectPlayerKeys = 'good' | 'wrong'
export type SoundEffectPlayerKeys = typeof SoundEffectPlayer['GOOD_KEY'] | typeof SoundEffectPlayer['WRONG_KEY']

const ROOT_SYMBOL = Symbol('sound_effect_player_root')


export class SoundEffectPlayer {
    private static GOOD_KEY = 'good' as const
    private static WRONG_KEY = 'wrong' as const
    private goodEffectURL: string
    private wrongEffectURL: string
    private sounds: Partial<Record<SoundEffectPlayerKeys, HTMLAudioElement>> = {}
    private rootID: string
    constructor({
        goodEffectURL = GOOD_SOUND_URL,
        wrongEffectURL = WRONG_SOUND_URL,
        rootID = 'SOUND_EFFECTS_DIV'
    }: SoundEffectPlayerOptions = {}) {
        this.goodEffectURL = goodEffectURL
        this.wrongEffectURL = wrongEffectURL
        this.rootID = rootID
    }


    private setSoundUrl(src: string, key: SoundEffectPlayerKeys) {
        const sound = this.sounds[key]
        if (sound) {
            sound.src = src
        }
        return this
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

    /*________________________________
            PUBLIC METHODS
    ---------------------------------*/

    init() {
        if (this.isRootInDocument()) {
            return this
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
        this.sounds[SoundEffectPlayer.GOOD_KEY] = goodAudio
        this.sounds[SoundEffectPlayer.WRONG_KEY] = wrongAudio
        return this
    }

    play(soundId: SoundEffectPlayerKeys) {
        this.sounds[soundId]?.play().catch(e => console.error(e))
    }
    /**
     * values must fall between 0 and 1, where 0 is effectively muted and 1 is the loudest possible value.
     * @param vol 
     * @returns 
     */
    setVolume(vol: number) {
        for (const key in this.sounds) {
            const sound = this.sounds[key as SoundEffectPlayerKeys]
            if (sound?.volume !== undefined) {
                sound.volume = vol
            }
        }
        return this
    }

    setGoodSoundUrl(src: string) {
        return this.setSoundUrl(src, SoundEffectPlayer.GOOD_KEY)
    }

    setWrongSoundUrl(src: string) {
        return this.setSoundUrl(src, SoundEffectPlayer.WRONG_KEY)
    }
}