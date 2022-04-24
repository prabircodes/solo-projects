let dispNumber = document.getElementById('disp-number')
let dispLength = document.getElementById('disp-length')
let dispVolume = document.getElementById('disp-volume')
let dispMass = document.getElementById('disp-mass')
let num = 15

dispNumber.textContent = num

let feetToMeter = 3.28084
let meterToFeet = 0.3048
let feets = num * feetToMeter
let meters = num * meterToFeet

dispLength.textContent =
  num +
  ' meters' +
  ' = ' +
  feets +
  ' feet ' +
  ' | ' +
  num +
  ' feet ' +
  ' = ' +
  meters +
  ' meters'

let literToGallons = 0.264172
let gallonToLiter = 3.78541
let gallons = num * literToGallons
let liters = num * gallonToLiter

dispVolume.textContent =
  num +
  ' liters ' +
  '= ' +
  gallons +
  ' gallons ' +
  ' | ' +
  num +
  ' gallons ' +
  '= ' +
  liters +
  ' liters'

let kiloToPound = 2.20462
let poundToKilos = 0.453592
let pound = num * kiloToPound
let kilos = num * poundToKilos

dispMass.textContent =
  num +
  ' kilos ' +
  '= ' +
  pound +
  ' pounds ' +
  '| ' +
  num +
  ' pounds ' +
  '= ' +
  kilos +
  ' kilos'
