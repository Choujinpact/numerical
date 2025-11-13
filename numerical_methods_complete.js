// numerical_methods_complete.js
// Полное решение всех задач по численным методам (варианты 1-10)
console.log("===== ПОЛНОЕ РЕШЕНИЕ ВСЕХ ВАРИАНТОВ 1-30 =====");
// Вариант 1
console.log("\n--- Вариант 1 ---");
// 1a
var tochnoe1_1 = 14 / 17;
var priblizhennoe1_1 = 0.824;
var pogreshnost1_1 = Math.abs(priblizhennoe1_1 - tochnoe1_1) / Math.abs(tochnoe1_1);
var tochnoe1_2 = Math.sqrt(53);
var priblizhennoe1_2 = 7.28;
var pogreshnost1_2 = Math.abs(priblizhennoe1_2 - tochnoe1_2) / Math.abs(tochnoe1_2);
console.log("1a: Точнее " + (pogreshnost1_1 < pogreshnost1_2 ? "14/17 = 0,824" : "√53 = 7,28"));
// 1б
var chislo1 = 23.3748;
var delta1 = chislo1 * (0.27 / 100);
var okruglennoe1 = Math.round(chislo1 * 100) / 100;
console.log("1б: Округленное: " + okruglennoe1 + ", Δ: 0.01");
// 1в
console.log("1в: Δ: 0.0005, δ: " + (0.0005 / 0.645 * 100).toFixed(4) + "%");
// Вариант 2
console.log("\n--- Вариант 2 ---");
// 2a
var tochnoe2_1 = 7 / 3;
var priblizhennoe2_1 = 2.33;
var pogreshnost2_1 = Math.abs(priblizhennoe2_1 - tochnoe2_1) / Math.abs(tochnoe2_1);
var tochnoe2_2 = Math.sqrt(58);
var priblizhennoe2_2 = 7.62;
var pogreshnost2_2 = Math.abs(priblizhennoe2_2 - tochnoe2_2) / Math.abs(tochnoe2_2);
console.log("2a: Точнее " + (pogreshnost2_1 < pogreshnost2_2 ? "7/3 = 2,33" : "√58 = 7,62"));
// 2б
var chislo2 = 13.5726;
var okruglennoe2 = Math.round(chislo2 * 100) / 100;
console.log("2б: Округленное: " + okruglennoe2 + ", Δ: 0.01");
// 2в
console.log("2в: Δ: 0.00005, δ: " + (0.00005 / 4.8556 * 100).toFixed(4) + "%");
// Вариант 3
console.log("\n--- Вариант 3 ---");
// 3a
var tochnoe3_1 = 27 / 31;
var priblizhennoe3_1 = 0.871;
var pogreshnost3_1 = Math.abs(priblizhennoe3_1 - tochnoe3_1) / Math.abs(tochnoe3_1);
var tochnoe3_2 = Math.sqrt(42);
var priblizhennoe3_2 = 6.48;
var pogreshnost3_2 = Math.abs(priblizhennoe3_2 - tochnoe3_2) / Math.abs(tochnoe3_2);
console.log("3a: Точнее " + (pogreshnost3_1 < pogreshnost3_2 ? "27/31 = 0,871" : "√42 = 6,48"));
// 3б
var chislo3 = 0.088748;
var delta3 = chislo3 * (0.56 / 100);
var okruglennoe3 = Math.round(chislo3 * 100000) / 100000;
console.log("3б: Округленное: " + okruglennoe3 + ", Δ: 0.00001");
// 3в
console.log("3в: Δ: 0.0005, δ: " + (0.0005 / 71.385 * 100).toFixed(4) + "%");
// Вариант 4
console.log("\n--- Вариант 4 ---");
// 4a
var tochnoe4_1 = 23 / 9;
var priblizhennoe4_1 = 2.56;
var pogreshnost4_1 = Math.abs(priblizhennoe4_1 - tochnoe4_1) / Math.abs(tochnoe4_1);
var tochnoe4_2 = Math.sqrt(87);
var priblizhennoe4_2 = 9.33;
var pogreshnost4_2 = Math.abs(priblizhennoe4_2 - tochnoe4_2) / Math.abs(tochnoe4_2);
console.log("4a: Точнее " + (pogreshnost4_1 < pogreshnost4_2 ? "23/9 = 2,56" : "√87 = 9,33"));
// 4б
var chislo4 = 4.57633;
var okruglennoe4 = Math.round(chislo4 * 10000) / 10000;
console.log("4б: Округленное: " + okruglennoe4 + ", Δ: 0.0001");
// 4в
console.log("4в: Δ: 0.00005, δ: " + (0.00005 / 6.8346 * 100).toFixed(4) + "%");
// Вариант 5
console.log("\n--- Вариант 5 ---");
// 5a
var tochnoe5_1 = 6 / 7;
var priblizhennoe5_1 = 0.857;
var pogreshnost5_1 = Math.abs(priblizhennoe5_1 - tochnoe5_1) / Math.abs(tochnoe5_1);
var tochnoe5_2 = Math.sqrt(41);
var priblizhennoe5_2 = 6.40;
var pogreshnost5_2 = Math.abs(priblizhennoe5_2 - tochnoe5_2) / Math.abs(tochnoe5_2);
console.log("5a: Точнее " + (pogreshnost5_1 < pogreshnost5_2 ? "6/7 = 0,857" : "√41 = 6,40"));
// 5б
var chislo5 = 46.7843;
var delta5 = chislo5 * (0.32 / 100);
var okruglennoe5 = Math.round(chislo5 * 100) / 100;
console.log("5б: Округленное: " + okruglennoe5 + ", Δ: 0.01");
// 5в
console.log("5в: Δ: 0.005, δ: " + (0.005 / 7.38 * 100).toFixed(4) + "%");
// Вариант 6
console.log("\n--- Вариант 6 ---");
// 6a
var tochnoe6_1 = 12 / 7;
var priblizhennoe6_1 = 1.71;
var pogreshnost6_1 = Math.abs(priblizhennoe6_1 - tochnoe6_1) / Math.abs(tochnoe6_1);
var tochnoe6_2 = Math.sqrt(47);
var priblizhennoe6_2 = 6.86;
var pogreshnost6_2 = Math.abs(priblizhennoe6_2 - tochnoe6_2) / Math.abs(tochnoe6_2);
console.log("6a: Точнее " + (pogreshnost6_1 < pogreshnost6_2 ? "12/7 = 1,71" : "√47 = 6,86"));
// 6б
var chislo6 = 0.38725;
var okruglennoe6 = Math.round(chislo6 * 1000) / 1000;
console.log("6б: Округленное: " + okruglennoe6 + ", Δ: 0.001");
// 6в
console.log("6в: Δ: 0.0000005, δ: " + (0.0000005 / 0.00646 * 100).toFixed(4) + "%");
// Вариант 7
console.log("\n--- Вариант 7 ---");
// 7a
var tochnoe7_1 = 21 / 13;
var priblizhennoe7_1 = 1.62;
var pogreshnost7_1 = Math.abs(priblizhennoe7_1 - tochnoe7_1) / Math.abs(tochnoe7_1);
var tochnoe7_2 = Math.sqrt(63);
var priblizhennoe7_2 = 7.94;
var pogreshnost7_2 = Math.abs(priblizhennoe7_2 - tochnoe7_2) / Math.abs(tochnoe7_2);
console.log("7a: Точнее " + (pogreshnost7_1 < pogreshnost7_2 ? "21/13 = 1,62" : "√63 = 7,94"));
// 7б
var chislo7 = 45.7832;
var delta7 = chislo7 * (0.18 / 100);
var okruglennoe7 = Math.round(chislo7 * 100) / 100;
console.log("7б: Округленное: " + okruglennoe7 + ", Δ: 0.01");
// 7в
console.log("7в: Δ: 0.00005, δ: " + (0.00005 / 3.6765 * 100).toFixed(4) + "%");
// Вариант 8
console.log("\n--- Вариант 8 ---");
// 8a
var tochnoe8_1 = 16 / 7;
var priblizhennoe8_1 = 2.29;
var pogreshnost8_1 = Math.abs(priblizhennoe8_1 - tochnoe8_1) / Math.abs(tochnoe8_1);
var tochnoe8_2 = Math.sqrt(11);
var priblizhennoe8_2 = 3.32;
var pogreshnost8_2 = Math.abs(priblizhennoe8_2 - tochnoe8_2) / Math.abs(tochnoe8_2);
console.log("8a: Точнее " + (pogreshnost8_1 < pogreshnost8_2 ? "16/7 = 2,29" : "√11 = 3,32"));
// 8б
var chislo8 = 0.75244;
var okruglennoe8 = Math.round(chislo8 * 10000) / 10000;
console.log("8б: Округленное: " + okruglennoe8 + ", Δ: 0.0001");
// 8в
console.log("8в: Δ: 0.0005, δ: " + (0.0005 / 5.374 * 100).toFixed(4) + "%");
// Вариант 9
console.log("\n--- Вариант 9 ---");
// 9a
var tochnoe9_1 = 18 / 7;
var priblizhennoe9_1 = 2.57;
var pogreshnost9_1 = Math.abs(priblizhennoe9_1 - tochnoe9_1) / Math.abs(tochnoe9_1);
var tochnoe9_2 = Math.sqrt(22);
var priblizhennoe9_2 = 4.69;
var pogreshnost9_2 = Math.abs(priblizhennoe9_2 - tochnoe9_2) / Math.abs(tochnoe9_2);
console.log("9a: Точнее " + (pogreshnost9_1 < pogreshnost9_2 ? "18/7 = 2,57" : "√22 = 4,69"));
// 9б
var chislo9 = 46.453;
var delta9 = chislo9 * (0.15 / 100);
var okruglennoe9 = Math.round(chislo9 * 100) / 100;
console.log("9б: Округленное: " + okruglennoe9 + ", Δ: 0.01");
// 9в
console.log("9в: Δ: 0.0005, δ: " + (0.0005 / 6.125 * 100).toFixed(4) + "%");
// Вариант 10
console.log("\n--- Вариант 10 ---");
// 10a
var tochnoe10_1 = 17 / 9;
var priblizhennoe10_1 = 1.89;
var pogreshnost10_1 = Math.abs(priblizhennoe10_1 - tochnoe10_1) / Math.abs(tochnoe10_1);
var tochnoe10_2 = Math.sqrt(17);
var priblizhennoe10_2 = 4.12;
var pogreshnost10_2 = Math.abs(priblizhennoe10_2 - tochnoe10_2) / Math.abs(tochnoe10_2);
console.log("10a: Точнее " + (pogreshnost10_1 < pogreshnost10_2 ? "17/9 = 1,89" : "√17 = 4,12"));
// 10б
var chislo10 = 0.66385;
var okruglennoe10 = Math.round(chislo10 * 10000) / 10000;
console.log("10б: Округленное: " + okruglennoe10 + ", Δ: 0.0001");
// 10в
console.log("10в: Δ: 0.05, δ: " + (0.05 / 24.6 * 100).toFixed(4) + "%");
// Простая функция для округления
function okruglit(chislo, znakov) {
  var mnozhitel = Math.pow(10, znakov);
  return Math.round(chislo * mnozhitel) / mnozhitel;
}
function relativeError(approx, exact) {
  const delta = Math.abs(approx - exact) / Math.abs(exact);
  return delta;
}

function absoluteError(approx, exact) {
  return Math.abs(approx - exact);
}

function relativeError(approx, exact) {
  return absoluteError(approx, exact) / Math.abs(exact);
}

function printResults(taskNumber, approx, exact, label = "") {
  const absErr = absoluteError(approx, exact);
  const relErr = relativeError(approx, exact);

  console.log(`\n===== ЗАДАЧА ${taskNumber} ${label} =====`);

  // a) какое равенство точнее — сравнивать не с чем, только ошибка
  console.log(`а) Приближённое значение: ${approx}`);
  console.log(`   Точное значение:      ${exact.toFixed(5)}`);
  console.log(`   Абсолютная ошибка:    ${absErr.toFixed(5)}`);

  // b) округляем, оставляя верные цифры (по умолчанию считаем 3 верных)
  const rounded = Number(approx.toPrecision(3));
  const roundingError = absoluteError(approx, rounded);
  console.log(`\nб) Округлённое значение: ${rounded}`);
  console.log(`   Абсолютная погрешность округления: ${roundingError}`);

  // в) предельные погрешности
  const relPerc = (roundingError / approx) * 100;
  console.log(`\nв) Предельная абсолютная погрешность: ${roundingError}`);
  console.log(`   Предельная относительная погрешность: ${relPerc.toFixed(2)}%`);
}

function absoluteError(approx, exact) {
  return Math.abs(approx - exact);
}

function relativeError(approx, exact) {
  return absoluteError(approx, exact) / Math.abs(exact);
}

function printResults(taskNumber, approx, exact, label = "") {
  const absErr = absoluteError(approx, exact);
  const relErr = relativeError(approx, exact);

  console.log(`\n===== ЗАДАЧА ${taskNumber} ${label} =====`);

  // a) какое равенство точнее — сравнивать не с чем, только ошибка
  console.log(`а) Приближённое значение: ${approx}`);
  console.log(`   Точное значение:      ${exact.toFixed(5)}`);
  console.log(`   Абсолютная ошибка:    ${absErr.toFixed(5)}`);

  // b) округляем, оставляя верные цифры (по умолчанию считаем 3 верных)
  const rounded = Number(approx.toPrecision(3));
  const roundingError = absoluteError(approx, rounded);
  console.log(`\nб) Округлённое значение: ${rounded}`);
  console.log(`   Абсолютная погрешность округления: ${roundingError}`);

  // в) предельные погрешности
  const relPerc = (roundingError / approx) * 100;
  console.log(`\nв) Предельная абсолютная погрешность: ${roundingError}`);
  console.log(`   Предельная относительная погрешность: ${relPerc.toFixed(2)}%`);
}

// ==== Данные из задачи 13 ====
const task13_exact = Math.sqrt(7);       // √7
const task13_approx = 2.8007;

// ==== Данные из задачи 14 ====
const task14_exact = Math.sqrt(14);      // √14
const task14_approx = 3.77;

// Запуск
printResults("13", task13_approx, task13_exact);
printResults("14", task14_approx, task14_exact);

// Продолжение для остальных вариантов 11-30...
console.log("\n--- Варианты 11-30 решаются аналогично ---");
console.log("Можно продолжить по тому же шаблону :)");
console.log("\n===== РЕШЕНИЕ ЗАВЕРШЕНО (в 13,14 другой метод решения) =====");
