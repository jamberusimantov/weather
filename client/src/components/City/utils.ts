export const timeToString = (seconds = 0) => {
    const dateTime = new Date((seconds) * 1000).toString();
    return dateTime.substr(0, dateTime.indexOf('G'))
}
export const time = (seconds = 0) => {
    const date = timeToString(seconds)
    return date.substring(date.indexOf(':') - 2, date.lastIndexOf(':'))
}
export const shortDate = (seconds = 0) => {
    const date = timeToString(seconds)
    return date.substr(date.indexOf(' '), date.indexOf('202') - 4)
}

export const getMetric = {
    temp: (temp: number, unit: string) =>
        unit === "Imperial" ? `${~~(temp * 9 / 5 + 32)}°F` : `${~~temp}°C`,
    distance: (distance: number, unit: string) =>
        unit === "Imperial" ? `${~~(distance * 0.621371)}mi` : `${~~distance}km`,
    speed: (speed: number, unit: string) =>
        unit === "Imperial" ? `${~~(speed * 2.24)}mph` : `${~~speed}ms`,
}