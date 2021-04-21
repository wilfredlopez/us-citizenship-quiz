export function getPercent(currentTotal: number, total = 100) {
    if (currentTotal === 0 || total === 0) {
        return 0
    }
    return (currentTotal / total) * 100
}
