function fixWindDir () {
    if (weatherbit.windDirection() != "???") {
        currentWindDirection = weatherbit.windDirection()
    }
}
input.onButtonPressed(Button.A, function () {
    convertTemp()
    convertRH()
    fixWindDir()
    serial.writeLine(timeanddate.dateTime())
    serial.writeValue("Temp (C)", tempCelsius)
    serial.writeValue("Humidity (%)", RH)
    serial.writeValue("Dew Point", BME280.Dewpoint())
    serial.writeValue("Pressure (hPa)", BME280.pressure(BME280_P.hPa))
    serial.writeValue("Wind Speed (mph)", Math.trunc(weatherbit.windSpeed()))
    serial.writeLine("Wind Direction: " + currentWindDirection)
})
function convertTemp () {
    tempCelsius = Math.idiv(weatherbit.temperature(), 100)
    tempFarenheit = tempCelsius * 1.8 + 32
}
function convertRH () {
    RH = Math.idiv(weatherbit.humidity(), 1024)
}
let tempFarenheit = 0
let RH = 0
let tempCelsius = 0
let currentWindDirection = ""
timeanddate.setDate(6, 6, 2023)
timeanddate.set24HourTime(14, 53, 0)
serial.redirectToUSB()
weatherbit.startWeatherMonitoring()
weatherbit.startWindMonitoring()
