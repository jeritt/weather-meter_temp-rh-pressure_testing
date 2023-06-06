function convertCtoF () {
    tempCelsius = Math.idiv(weatherbit.temperature(), 100)
    tempFarenheit = tempCelsius * 1.8 + 32
}
input.onButtonPressed(Button.A, function () {
    convertCtoF()
    convertRH()
    convertmBar()
    serial.writeValue("Temp F", tempFarenheit)
    serial.writeValue("Humidity %", RH)
    serial.writeValue("Pressure mBar", mBar)
})
function convertRH () {
    RH = Math.idiv(weatherbit.humidity(), 1024)
}
function convertmBar () {
    mBar = Math.idiv(weatherbit.pressure(), 25600)
}
let mBar = 0
let RH = 0
let tempFarenheit = 0
let tempCelsius = 0
weatherbit.startWeatherMonitoring()
basic.forever(function () {
	
})
