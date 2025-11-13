// Пункт а) Определить, какое равенство точнее
function comparePrecision() {
  const left1 = 13 / 17
  const right1 = 0.765
  const error1 = Math.abs(left1 - right1)

  const left2 = Math.sqrt(31)
  const right2 = 5.57
  const error2 = Math.abs(left2 - right2)

  console.log('а) Какое равенство точнее?')
  console.log(`13/17 = 0,765: ошибка = ${error1.toFixed(6)}`)
  console.log(`√31 = 5,57: ошибка = ${error2.toFixed(6)}`)

  if (error1 < error2) {
    console.log('Первое равенство точнее')
  } else {
    console.log('Второе равенство точнее')
  }
  console.log()
}

// Пункт б) Округлить сомнительные цифры числа, оставив верные знаки
function roundWithPrecision() {
  const number = 3.6878
  const error = 0.0013

  // Определяем количество верных знаков после запятой
  const decimalPlaces = -Math.floor(Math.log10(error))
  const rounded = Number(number.toFixed(decimalPlaces))

  console.log('б) Округление сомнительных цифр:')
  console.log(`Исходное число: ${number}`)
  console.log(`Погрешность: ${error}`)
  console.log(`Количество верных знаков после запятой: ${decimalPlaces}`)
  console.log(`Округленное число: ${rounded}`)
  console.log(`Абсолютная погрешность: ${error}`)
  console.log()
}

// Пункт в) Найти предельные абсолютную и относительную погрешности
function calculateLimitingErrors() {
  const number = 8.74

  // Для числа с верными цифрами, абсолютная погрешность = 0.5 * 10^(-n)
  // где n - количество знаков после запятой
  const decimalPlaces = 2
  const absoluteError = 0.5 * Math.pow(10, -decimalPlaces)
  const relativeError = (absoluteError / number) * 100

  console.log('в) Предельные погрешности:')
  console.log(`Число: ${number}`)
  console.log(`Предельная абсолютная погрешность: ${absoluteError}`)
  console.log(
    `Предельная относительная погрешность: ${relativeError.toFixed(4)}%`
  )
}

// Выполняем все расчеты
console.log('Решение задания:')
console.log('='.repeat(50))
comparePrecision()
roundWithPrecision()
calculateLimitingErrors()
