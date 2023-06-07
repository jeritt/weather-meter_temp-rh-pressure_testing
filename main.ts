input.onButtonPressed(Button.A, function () {
    convertTemp()
    convertRH()
    serial.writeValue("Temp (C)", tempCelsius)
    serial.writeValue("Humidity (%)", RH)
    serial.writeValue("Dewpoint (C)", BME280.Dewpoint())
    serial.writeValue("Pressure (hPa)", BME280.pressure(BME280_P.hPa))
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
weatherbit.startWeatherMonitoring()
basic.forever(function () {
	
})
