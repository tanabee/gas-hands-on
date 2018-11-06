/** 関数 **/

/** Learn **/

function add(a, b) {
  return a + b;
}

function func07a() {
  var x = add(5, 8);
  Logger.log(x);
}

/** Training **/


function func07b() {
  // TODO: avg 関数を作成
  const x = avg(5, 9);
  Logger.log(x);// 7 と出力されれば OK
  Logger.log(avg(10, 20));// 15 と出力されれば OK
}

function func07c() {
  // TODO: sum 関数を作成
  const x = sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  Logger.log(x);// 55 と出力されれば OK
  Logger.log(sum([70, 80]));// 150 と出力されれば OK

  const score = {
    japanese: 70,
    mathematics: 100,
    geography: 80,
    science: 90,
    english: 70
  };
  Logger.log(sum(score.values()));
}
