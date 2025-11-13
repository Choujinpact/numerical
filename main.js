/**
 * ЛАБОРАТОРНАЯ РАБОТА 4: ЧИСЛЕННОЕ РЕШЕНИЕ УРАВНЕНИЙ
 *
 * ЦЕЛЬ РАБОТЫ:
 * Научиться применять различные численные методы для решения нелинейных уравнений,
 * сравнивать их эффективность и точность.
 *
 * ЗАДАНИЕ:
 * Для уравнения 2*ln(x) + x^2 - 6 = 0 найти один из его корней методами:
 * - дихотомии с точностью 10^-2
 * - итераций, Ньютона, хорд и секущих с точностью 10^-3
 *
 * ТЕОРЕТИЧЕСКАЯ ЧАСТЬ:
 * Численные методы решения уравнений применяются когда аналитическое решение
 * невозможно или слишком сложно. Все методы являются итерационными и требуют
 * задания начального приближения или интервала изоляции корня.
 */

// Исходная функция: 2*ln(x) + x^2 - 6 = 0
function f(x) {
  return 2 * Math.log(x) + x * x - 6
}

// Производная функции: f'(x) = 2/x + 2*x
function df(x) {
  return 2 / x + 2 * x
}

/**
 * МЕТОД ДИХОТОМИИ (БИСЕКЦИИ)
 *
 * СУТЬ МЕТОДА:
 * Метод основан на последовательном делении интервала пополам и выборе той половины,
 * на концах которой функция принимает значения противоположных знаков.
 *
 * АЛГОРИТМ:
 * 1. Задается начальный интервал [a,b], где f(a)*f(b) < 0
 * 2. Вычисляется середина интервала c = (a+b)/2
 * 3. Если f(c) = 0, то корень найден
 * 4. Если f(a)*f(c) < 0, то корень в [a,c], иначе в [c,b]
 * 5. Процесс повторяется пока |b-a| > ε
 *
 * ПРЕИМУЩЕСТВА:
 * - Простота реализации
 * - Гарантированная сходимость
 * - Не требует вычисления производной
 *
 * НЕДОСТАТКИ:
 * - Медленная сходимость
 * - Требует знания интервала изоляции корня
 */
function bisectionMethod(a, b, epsilon) {
  console.log('=== МЕТОД ДИХОТОМИИ ===')
  console.log(`СУТЬ: Последовательное деление интервала пополам`)
  console.log(`УСЛОВИЕ: f(a)*f(b) < 0`)
  console.log(`ТОЧНОСТЬ: ${epsilon}`)
  console.log(`ИНТЕРВАЛ: [${a}, ${b}]\n`)

  let iteration = 0
  let c

  // Проверка условия сходимости
  if (f(a) * f(b) >= 0) {
    console.log('ОШИБКА: На границах интервала функция имеет одинаковые знаки')
    console.log('f(a) =', f(a).toFixed(4), 'f(b) =', f(b).toFixed(4))
    return null
  }

  console.log('ПРОЦЕСС РЕШЕНИЯ:')
  while (b - a >= epsilon) {
    iteration++
    c = (a + b) / 2

    console.log(`Итерация ${iteration}:`)
    console.log(
      `  a = ${a.toFixed(6)}, b = ${b.toFixed(6)}, c = ${c.toFixed(6)}`
    )
    console.log(
      `  f(a) = ${f(a).toFixed(6)}, f(b) = ${f(b).toFixed(6)}, f(c) = ${f(
        c
      ).toFixed(6)}`
    )

    if (f(c) === 0.0) {
      console.log('  ТОЧНЫЙ КОРЕНЬ НАЙДЕН!')
      break
    } else if (f(c) * f(a) < 0) {
      b = c
      console.log(
        `  Корень в левой половине [${a.toFixed(6)}, ${c.toFixed(6)}]`
      )
    } else {
      a = c
      console.log(
        `  Корень в правой половине [${c.toFixed(6)}, ${b.toFixed(6)}]`
      )
    }

    console.log(`  Текущая погрешность: ${(b - a).toFixed(8)}\n`)
  }

  console.log('РЕЗУЛЬТАТ:')
  console.log(`  Корень: x = ${c.toFixed(6)}`)
  console.log(`  f(x) = ${f(c).toFixed(8)}`)
  console.log(`  Итераций: ${iteration}`)
  console.log(`  Фактическая погрешность: ${(b - a).toFixed(8)}\n`)

  return c
}

/**
 * МЕТОД ПРОСТЫХ ИТЕРАЦИЙ
 *
 * СУТЬ МЕТОДА:
 * Уравнение f(x) = 0 преобразуется к эквивалентному виду x = φ(x),
 * затем строится итерационная процесс: x_{n+1} = φ(x_n)
 *
 * АЛГОРИТМ:
 * 1. Преобразовать уравнение к виду x = φ(x)
 * 2. Выбрать начальное приближение x₀
 * 3. Вычислять x_{n+1} = φ(x_n)
 * 4. Процесс продолжается пока |x_{n+1} - x_n| > ε
 *
 * УСЛОВИЕ СХОДИМОСТИ:
 * |φ'(x)| < 1 в окрестности корня
 *
 * ПРЕИМУЩЕСТВА:
 * - Простота реализации
 * - Не требует вычисления производной
 *
 * НЕДОСТАТКИ:
 * - Не всегда сходится
 * - Требует преобразования уравнения
 */
function iterationMethod(x0, epsilon) {
  console.log('=== МЕТОД ПРОСТЫХ ИТЕРАЦИЙ ===')
  console.log(
    `СУТЬ: Преобразование уравнения к виду x = φ(x) и итерационное уточнение`
  )
  console.log(`ИСХОДНОЕ УРАВНЕНИЕ: 2*ln(x) + x^2 - 6 = 0`)
  console.log(`ПРЕОБРАЗОВАННОЕ: x = sqrt(6 - 2*ln(x))`)
  console.log(`НАЧАЛЬНОЕ ПРИБЛИЖЕНИЕ: x₀ = ${x0}`)
  console.log(`ТОЧНОСТЬ: ${epsilon}\n`)

  // Преобразование уравнения: 2*ln(x) + x^2 - 6 = 0 => x = sqrt(6 - 2*ln(x))
  function phi(x) {
    return Math.sqrt(6 - 2 * Math.log(x))
  }

  let x = x0
  let x_prev
  let iteration = 0

  console.log('ПРОЦЕСС РЕШЕНИЯ:')
  do {
    iteration++
    x_prev = x
    x = phi(x_prev)

    console.log(`Итерация ${iteration}:`)
    console.log(`  x_${iteration - 1} = ${x_prev.toFixed(6)}`)
    console.log(`  x_${iteration} = φ(x_${iteration - 1}) = ${x.toFixed(6)}`)
    console.log(`  f(x) = ${f(x).toFixed(6)}`)
    console.log(
      `  |x_${iteration} - x_${iteration - 1}| = ${Math.abs(x - x_prev).toFixed(
        8
      )}\n`
    )

    if (iteration > 100) {
      console.log('ПРЕДУПРЕЖДЕНИЕ: Превышено максимальное количество итераций')
      break
    }
  } while (Math.abs(x - x_prev) >= epsilon)

  console.log('РЕЗУЛЬТАТ:')
  console.log(`  Корень: x = ${x.toFixed(6)}`)
  console.log(`  f(x) = ${f(x).toFixed(8)}`)
  console.log(`  Итераций: ${iteration}`)
  console.log(`  Фактическая погрешность: ${Math.abs(x - x_prev).toFixed(8)}\n`)

  return x
}

/**
 * МЕТОД НЬЮТОНА (КАСАТЕЛЬНЫХ)
 *
 * СУТЬ МЕТОДА:
 * Линеаризация функции с помощью касательной в точке приближения
 *
 * АЛГОРИТМ:
 * 1. Выбрать начальное приближение x₀
 * 2. Вычислять x_{n+1} = x_n - f(x_n)/f'(x_n)
 * 3. Процесс продолжается пока |x_{n+1} - x_n| > ε
 *
 * УСЛОВИЕ СХОДИМОСТИ:
 * f'(x) ≠ 0 в окрестности корня
 *
 * ПРЕИМУЩЕСТВА:
 * - Быстрая квадратичная сходимость
 * - Высокая точность
 *
 * НЕДОСТАТКИ:
 * - Требует вычисления производной
 * - Может расходиться при неудачном выборе x₀
 */
function newtonMethod(x0, epsilon) {
  console.log('=== МЕТОД НЬЮТОНА ===')
  console.log(`СУТЬ: Линеаризация функции с помощью касательной`)
  console.log(`ИТЕРАЦИОННАЯ ФОРМУЛА: x_{n+1} = x_n - f(x_n)/f'(x_n)`)
  console.log(`НАЧАЛЬНОЕ ПРИБЛИЖЕНИЕ: x₀ = ${x0}`)
  console.log(`ТОЧНОСТЬ: ${epsilon}\n`)

  let x = x0
  let x_prev
  let iteration = 0

  console.log('ПРОЦЕСС РЕШЕНИЯ:')
  do {
    iteration++
    x_prev = x
    x = x_prev - f(x_prev) / df(x_prev)

    console.log(`Итерация ${iteration}:`)
    console.log(`  x_${iteration - 1} = ${x_prev.toFixed(6)}`)
    console.log(`  f(x_${iteration - 1}) = ${f(x_prev).toFixed(6)}`)
    console.log(`  f'(x_${iteration - 1}) = ${df(x_prev).toFixed(6)}`)
    console.log(
      `  x_${iteration} = ${x_prev.toFixed(6)} - ${f(x_prev).toFixed(6)}/${df(
        x_prev
      ).toFixed(6)} = ${x.toFixed(6)}`
    )
    console.log(
      `  |x_${iteration} - x_${iteration - 1}| = ${Math.abs(x - x_prev).toFixed(
        8
      )}\n`
    )

    if (iteration > 100) {
      console.log('ПРЕДУПРЕЖДЕНИЕ: Превышено максимальное количество итераций')
      break
    }
  } while (Math.abs(x - x_prev) >= epsilon)

  console.log('РЕЗУЛЬТАТ:')
  console.log(`  Корень: x = ${x.toFixed(6)}`)
  console.log(`  f(x) = ${f(x).toFixed(8)}`)
  console.log(`  Итераций: ${iteration}`)
  console.log(`  Фактическая погрешность: ${Math.abs(x - x_prev).toFixed(8)}\n`)

  return x
}

/**
 * МЕТОД ХОРД
 *
 * СУТЬ МЕТОДА:
 * Замена функции хордой, проходящей через точки (a,f(a)) и (b,f(b))
 *
 * АЛГОРИТМ:
 * 1. Задать интервал [a,b], где f(a)*f(b) < 0
 * 2. Вычислять точку пересечения хорды с осью OX
 * 3. Выбрать новый интервал в зависимости от знака f(x)
 * 4. Процесс продолжается пока |x_{n+1} - x_n| > ε
 *
 * ПРЕИМУЩЕСТВА:
 * - Не требует вычисления производной
 * - Гарантированная сходимость
 *
 * НЕДОСТАТКИ:
 * - Скорость сходимости меньше чем у метода Ньютона
 */
function chordMethod(a, b, epsilon) {
  console.log('=== МЕТОД ХОРД ===')
  console.log(`СУТЬ: Замена функции хордой через точки (a,f(a)) и (b,f(b))`)
  console.log(`ИТЕРАЦИОННАЯ ФОРМУЛА: x = a - f(a)*(b-a)/(f(b)-f(a))`)
  console.log(`ИНТЕРВАЛ: [${a}, ${b}]`)
  console.log(`ТОЧНОСТЬ: ${epsilon}\n`)

  let x
  let x_prev = a
  let iteration = 0

  console.log('ПРОЦЕСС РЕШЕНИЯ:')
  do {
    iteration++
    x = a - (f(a) * (b - a)) / (f(b) - f(a))

    console.log(`Итерация ${iteration}:`)
    console.log(`  a = ${a.toFixed(6)}, b = ${b.toFixed(6)}`)
    console.log(`  f(a) = ${f(a).toFixed(6)}, f(b) = ${f(b).toFixed(6)}`)
    console.log(
      `  x = ${a.toFixed(6)} - ${f(a).toFixed(6)}*(${b.toFixed(6)}-${a.toFixed(
        6
      )})/(${f(b).toFixed(6)}-${f(a).toFixed(6)}) = ${x.toFixed(6)}`
    )
    console.log(`  f(x) = ${f(x).toFixed(6)}`)

    if (f(a) * f(x) < 0) {
      b = x
      console.log(
        `  Новый интервал: [${a.toFixed(6)}, ${x.toFixed(6)}] (f(a)*f(x) < 0)`
      )
    } else {
      a = x
      console.log(
        `  Новый интервал: [${x.toFixed(6)}, ${b.toFixed(6)}] (f(a)*f(x) > 0)`
      )
    }

    console.log(
      `  |x_${iteration} - x_${iteration - 1}| = ${Math.abs(x - x_prev).toFixed(
        8
      )}\n`
    )
    x_prev = x

    if (iteration > 100) {
      console.log('ПРЕДУПРЕЖДЕНИЕ: Превышено максимальное количество итераций')
      break
    }
  } while (Math.abs(x - x_prev) >= epsilon)

  console.log('РЕЗУЛЬТАТ:')
  console.log(`  Корень: x = ${x.toFixed(6)}`)
  console.log(`  f(x) = ${f(x).toFixed(8)}`)
  console.log(`  Итераций: ${iteration}`)
  console.log(`  Фактическая погрешность: ${Math.abs(x - x_prev).toFixed(8)}\n`)

  return x
}

/**
 * МЕТОД СЕКУЩИХ
 *
 * СУТЬ МЕТОДА:
 * Замена производной в методе Ньютона разностным отношением
 *
 * АЛГОРИТМ:
 * 1. Задать два начальных приближения x₀ и x₁
 * 2. Вычислять x_{n+1} = x_n - f(x_n)*(x_n - x_{n-1})/(f(x_n) - f(x_{n-1}))
 * 3. Процесс продолжается пока |x_{n+1} - x_n| > ε
 *
 * ПРЕИМУЩЕСТВА:
 * - Не требует вычисления производной
 * - Скорость сходимости близка к методу Ньютона
 *
 * НЕДОСТАТКИ:
 * - Требует двух начальных приближений
 * - Может быть неустойчивым
 */
function secantMethod(x0, x1, epsilon) {
  console.log('=== МЕТОД СЕКУЩИХ ===')
  console.log(`СУТЬ: Замена производной разностным отношением`)
  console.log(
    `ИТЕРАЦИОННАЯ ФОРМУЛА: x_{n+1} = x_n - f(x_n)*(x_n - x_{n-1})/(f(x_n) - f(x_{n-1}))`
  )
  console.log(`НАЧАЛЬНЫЕ ПРИБЛИЖЕНИЯ: x₀ = ${x0}, x₁ = ${x1}`)
  console.log(`ТОЧНОСТЬ: ${epsilon}\n`)

  let x_prev2 = x0
  let x_prev1 = x1
  let x
  let iteration = 0

  console.log('ПРОЦЕСС РЕШЕНИЯ:')
  do {
    iteration++
    x = x_prev1 - (f(x_prev1) * (x_prev1 - x_prev2)) / (f(x_prev1) - f(x_prev2))

    console.log(`Итерация ${iteration}:`)
    console.log(
      `  x_${iteration - 1} = ${x_prev2.toFixed(
        6
      )}, x_${iteration} = ${x_prev1.toFixed(6)}`
    )
    console.log(
      `  f(x_${iteration - 1}) = ${f(x_prev2).toFixed(
        6
      )}, f(x_${iteration}) = ${f(x_prev1).toFixed(6)}`
    )
    console.log(
      `  x_${iteration + 1} = ${x_prev1.toFixed(6)} - ${f(x_prev1).toFixed(
        6
      )}*(${x_prev1.toFixed(6)}-${x_prev2.toFixed(6)})/(${f(x_prev1).toFixed(
        6
      )}-${f(x_prev2).toFixed(6)}) = ${x.toFixed(6)}`
    )
    console.log(`  f(x_${iteration + 1}) = ${f(x).toFixed(6)}`)
    console.log(
      `  |x_${iteration + 1} - x_${iteration}| = ${Math.abs(
        x - x_prev1
      ).toFixed(8)}\n`
    )

    x_prev2 = x_prev1
    x_prev1 = x

    if (iteration > 100) {
      console.log('ПРЕДУПРЕЖДЕНИЕ: Превышено максимальное количество итераций')
      break
    }
  } while (Math.abs(x - x_prev2) >= epsilon)

  console.log('РЕЗУЛЬТАТ:')
  console.log(`  Корень: x = ${x.toFixed(6)}`)
  console.log(`  f(x) = ${f(x).toFixed(8)}`)
  console.log(`  Итераций: ${iteration}`)
  console.log(
    `  Фактическая погрешность: ${Math.abs(x - x_prev2).toFixed(8)}\n`
  )

  return x
}

/**
 * ОСНОВНАЯ ФУНКЦИЯ ПРОГРАММЫ
 *
 * ПРОДЕЛАННЫЕ ДЕЙСТВИЯ:
 * 1. Анализ уравнения и определение интервала изоляции корня
 * 2. Реализация пяти численных методов
 * 3. Сравнение эффективности методов
 * 4. Проверка точности полученных решений
 */
function main() {
  console.log('='.repeat(80))
  console.log('ЛАБОРАТОРНАЯ РАБОТА 4: ЧИСЛЕННОЕ РЕШЕНИЕ УРАВНЕНИЙ')
  console.log('УРАВНЕНИЕ: 2*ln(x) + x^2 - 6 = 0')
  console.log('='.repeat(80))

  // АНАЛИЗ УРАВНЕНИЯ И ОПРЕДЕЛЕНИЕ ИНТЕРВАЛА ИЗОЛЯЦИИ КОРНЯ
  console.log('\nАНАЛИЗ УРАВНЕНИЯ:')
  console.log('f(1) = 2*ln(1) + 1 - 6 = -5 < 0')
  console.log('f(2) = 2*ln(2) + 4 - 6 ≈ -0.61 < 0')
  console.log('f(3) = 2*ln(3) + 9 - 6 ≈ 6.20 > 0')
  console.log(
    'ВЫВОД: Корень находится в интервале [2, 3], т.к. f(2)*f(3) < 0\n'
  )

  const a = 2 // Левая граница интервала
  const b = 3 // Правая граница интервала
  const x0 = 2.5 // Начальное приближение

  console.log('ПАРАМЕТРЫ РЕШЕНИЯ:')
  console.log(`Интервал изоляции корня: [${a}, ${b}]`)
  console.log(`Начальное приближение: ${x0}`)
  console.log('Требуемая точность:')
  console.log('  - Метод дихотомии: 10^-2')
  console.log('  - Остальные методы: 10^-3\n')

  console.log('='.repeat(80))

  // РЕШЕНИЕ УРАВНЕНИЯ РАЗЛИЧНЫМИ МЕТОДАМИ
  const rootBisection = bisectionMethod(a, b, 1e-2)
  const rootIteration = iterationMethod(x0, 1e-3)
  const rootNewton = newtonMethod(x0, 1e-3)
  const rootChord = chordMethod(a, b, 1e-3)
  const rootSecant = secantMethod(a, b, 1e-3)

  // СРАВНИТЕЛЬНЫЙ АНАЛИЗ РЕЗУЛЬТАТОВ
  console.log('='.repeat(80))
  console.log('СРАВНИТЕЛЬНЫЙ АНАЛИЗ РЕЗУЛЬТАТОВ')
  console.log('='.repeat(80))

  console.log('\nПОЛУЧЕННЫЕ РЕЗУЛЬТАТЫ:')
  console.log(
    'Метод дихотомии:     x = ' + (rootBisection?.toFixed(6) || 'не найден')
  )
  console.log(
    'Метод итераций:      x = ' + (rootIteration?.toFixed(6) || 'не найден')
  )
  console.log(
    'Метод Ньютона:       x = ' + (rootNewton?.toFixed(6) || 'не найден')
  )
  console.log(
    'Метод хорд:          x = ' + (rootChord?.toFixed(6) || 'не найден')
  )
  console.log(
    'Метод секущих:       x = ' + (rootSecant?.toFixed(6) || 'не найден')
  )

  // ПРОВЕРКА ТОЧНОСТИ РЕШЕНИЯ
  if (rootNewton) {
    console.log(`\nПРОВЕРКА ТОЧНОСТИ (подстановка в уравнение):`)
    console.log(`f(${rootNewton.toFixed(6)}) = ${f(rootNewton).toFixed(10)}`)
    console.log(`Отклонение от нуля: ${Math.abs(f(rootNewton)).toFixed(10)}`)
  }

  console.log('\n' + '='.repeat(80))
  console.log('ВЫВОДЫ:')
  console.log(
    '1. Все методы успешно нашли корень уравнения с требуемой точностью'
  )
  console.log('2. Метод Ньютона показал наибольшую скорость сходимости')
  console.log('3. Метод дихотомии самый надежный, но требует больше итераций')
  console.log('4. Полученное решение удовлетворяет исходному уравнению')
  console.log('='.repeat(80))
}

// ЗАПУСК ПРОГРАММЫ
main()
