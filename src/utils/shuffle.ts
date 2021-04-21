export function shuffle<T>(array: T[]): T[] {
    array = array.slice()

    function getRandomInt(from = 0, upTo = 100): number {
        return from + Math.floor(Math.random() * (upTo - from))
    }
    for (let i = 0; i < array.length; i++) {
        const randomIndex = getRandomInt(i, array.length) as number
            ;[array[i], array[randomIndex]] = [array[randomIndex], array[i]]
    }

    return array
}