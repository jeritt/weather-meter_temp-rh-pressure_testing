function convertPressure () {
    hPa = Math.idiv(weatherbit.pressure(), 25600)
}
input.onButtonPressed(Button.A, function () {
    convertTemp()
    convertRH()
    convertPressure()
    serial.writeValue("Temp F", tempCelsius)
    serial.writeValue("Humidity %", RH)
    serial.writeValue("hPa", hPa)
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
let hPa = 0
weatherbit.startWeatherMonitoring()
basic.forever(function () {
	
})
