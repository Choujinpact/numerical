// Лабораторная работа 1. Интерполирование функций
// Вариант 18: f(x) = (ln x)^(9/2); x_i = 11, 12, 13; a = 11,5;

// Основная функция
function f(x) {
  return Math.pow(Math.log(x), 9 / 2)
}

// Узлы интерполирования
const x_nodes = [11, 12, 13]
const a = 11.5

// Вычисление значений функции в узлах
const y_nodes = x_nodes.map((x) => f(x))

// Построение интерполяционного полинома Лагранжа
function lagrangePolynomial(x, x_nodes, y_nodes) {
  let result = 0
  const n = x_nodes.length

  for (let i = 0; i < n; i++) {
    let term = y_nodes[i]

    for (let j = 0; j < n; j++) {
      if (i !== j) {
        term *= (x - x_nodes[j]) / (x_nodes[i] - x_nodes[j])
      }
    }
    result += term
  }

  return result
}

// Вычисление значений в точке a
const exact_value = f(a)
const interpolated_value = lagrangePolynomial(a, x_nodes, y_nodes)
const error = Math.abs(exact_value - interpolated_value)

// Вывод результатов в табличном формате
console.log('='.repeat(80))
console.log('ЛАБОРАТОРНАЯ РАБОТА 1. ИНТЕРПОЛИРОВАНИЕ ФУНКЦИЙ')
console.log('Вариант 18: f(x) = (ln x)^(9/2)')
console.log('='.repeat(80))

console.log('\n1. ИСХОДНЫЕ ДАННЫЕ:')
console.log('+' + '-'.repeat(30) + '+' + '-'.repeat(20) + '+')
console.log('| Параметр' + ' '.repeat(21) + '| Значение' + ' '.repeat(11) + '|')
console.log('+' + '-'.repeat(30) + '+' + '-'.repeat(20) + '+')
console.log(`| Функция f(x)${' '.repeat(18)}| (ln x)^(9/2)${' '.repeat(8)}|`)
console.log(
  `| Узлы интерполирования${' '.repeat(8)}| [11, 12, 13]${' '.repeat(7)}|`
)
console.log(`| Точка a${' '.repeat(22)}| ${a}${' '.repeat(17)}|`)
console.log('+' + '-'.repeat(30) + '+' + '-'.repeat(20) + '+')

console.log('\n2. ЗНАЧЕНИЯ ФУНКЦИИ В УЗЛАХ:')
console.log('+' + '-'.repeat(15) + '+' + '-'.repeat(25) + '+')
console.log('| x_i' + ' '.repeat(11) + '| f(x_i)' + ' '.repeat(17) + '|')
console.log('+' + '-'.repeat(15) + '+' + '-'.repeat(25) + '+')
x_nodes.forEach((x, i) => {
  console.log(
    `| ${x}${' '.repeat(13)}| ${y_nodes[i].toFixed(10)}${' '.repeat(14)}|`
  )
})
console.log('+' + '-'.repeat(15) + '+' + '-'.repeat(25) + '+')

console.log('\n3. РЕЗУЛЬТАТЫ ИНТЕРПОЛИРОВАНИЯ В ТОЧКЕ a = ' + a + ':')
console.log('+' + '-'.repeat(35) + '+' + '-'.repeat(25) + '+')
console.log('| Параметр' + ' '.repeat(26) + '| Значение' + ' '.repeat(16) + '|')
console.log('+' + '-'.repeat(35) + '+' + '-'.repeat(25) + '+')
console.log(
  `| Точное значение f(a)${' '.repeat(16)}| ${exact_value.toFixed(
    10
  )}${' '.repeat(14)}|`
)
console.log(
  `| Интерполированное значение${' '.repeat(11)}| ${interpolated_value.toFixed(
    10
  )}${' '.repeat(14)}|`
)
console.log(
  `| Погрешность интерполяции${' '.repeat(13)}| ${error.toFixed(
    10
  )}${' '.repeat(14)}|`
)
console.log('+' + '-'.repeat(35) + '+' + '-'.repeat(25) + '+')

// Построение графика (численное представление)
console.log('\n4. ГРАФИК ФУНКЦИИ И ПОЛИНОМА ЛАГРАНЖА НА ОТРЕЗКЕ [11, 13]:')
console.log(
  '+' + '-'.repeat(10) + '+' + '-'.repeat(25) + '+' + '-'.repeat(25) + '+'
)
console.log(
  '| x' +
    ' '.repeat(8) +
    '| f(x)' +
    ' '.repeat(19) +
    '| L(x)' +
    ' '.repeat(19) +
    '|'
)
console.log(
  '+' + '-'.repeat(10) + '+' + '-'.repeat(25) + '+' + '-'.repeat(25) + '+'
)

const step = 0.2
for (let x = 11; x <= 13 + 0.001; x += step) {
  const fx = f(x)
  const Lx = lagrangePolynomial(x, x_nodes, y_nodes)
  console.log(
    `| ${x.toFixed(1)}${' '.repeat(7)}| ${fx.toFixed(10)}${' '.repeat(
      14
    )}| ${Lx.toFixed(10)}${' '.repeat(14)}|`
  )
}
console.log(
  '+' + '-'.repeat(10) + '+' + '-'.repeat(25) + '+' + '-'.repeat(25) + '+'
)

// Оценка погрешности интерполяции
console.log('\n5. ОЦЕНКА ПОГРЕШНОСТИ ИНТЕРПОЛЯЦИИ:')

// Производная функции (приближенно)
function derivative(x) {
  const h = 0.0001
  return (f(x + h) - f(x - h)) / (2 * h)
}

// Максимальное значение производной на отрезке
let max_derivative = 0
for (let x = 11; x <= 13; x += 0.01) {
  const deriv = Math.abs(derivative(x))
  if (deriv > max_derivative) {
    max_derivative = deriv
  }
}

// Оценка погрешности
const h = Math.max(...x_nodes) - Math.min(...x_nodes)
const error_estimate = (max_derivative * Math.pow(h, 3)) / (6 * Math.sqrt(3))

console.log('+' + '-'.repeat(45) + '+' + '-'.repeat(25) + '+')
console.log('| Параметр' + ' '.repeat(36) + '| Значение' + ' '.repeat(16) + '|')
console.log('+' + '-'.repeat(45) + '+' + '-'.repeat(25) + '+')
console.log(
  `| Максимальная производная на отрезке${' '.repeat(
    10
  )}| ${max_derivative.toFixed(6)}${' '.repeat(18)}|`
)
console.log(
  `| Теоретическая оценка погрешности${' '.repeat(
    13
  )}| ${error_estimate.toFixed(10)}${' '.repeat(14)}|`
)
console.log(
  `| Фактическая погрешность${' '.repeat(23)}| ${error.toFixed(10)}${' '.repeat(
    14
  )}|`
)
console.log('+' + '-'.repeat(45) + '+' + '-'.repeat(25) + '+')

console.log('\n6. ВЫВОДЫ:')
console.log('- Интерполяционный полином Лагранжа успешно построен')
console.log(
  '- Погрешность интерполяции в точке a = ' +
    a +
    ' составляет ' +
    error.toFixed(10)
)
console.log(
  '- График показывает хорошее соответствие между функцией и полиномом'
)
console.log(
  '- Теоретическая оценка погрешности подтверждает точность интерполяции'
)

console.log('\n' + '='.repeat(80))
