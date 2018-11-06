/** データ型: number **/

/** Learn **/

// Document: https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Number

function func02a() {
  // number: 数値
  // 例: 1, 2, 3
  const a = 5;
  const b = 2;
  Logger.log(typeof a);
  const c = a + b;
  Logger.log(c);
  const d = a - b;
  Logger.log(d);
  const e = a * b;
  Logger.log(e);
  const f = a / b;
  Logger.log(f);
  const g = a % b;
  Logger.log(g);
}

function func02b() {
  // () を使うと処理の優先度が高くなる
  const a = 5;
  const b = 2;
  const c = a + b * 2;
  Logger.log(c);
  const d = (a + b) * 2;
  Logger.log(d);
}

/** Training **/

function func02c() {

  const a = 10;
  const b = 20;
  const c = 30;

  // 定数 sum に a, b, c の合計を計算して代入

  Logger.log(sum);// 60 と出力されれば OK
}

function func02d() {

  const a = 10;
  const b = 20;
  const c = 30;

  // 定数 avg に a, b, c の平均を計算して代入

  Logger.log(avg);// 20 と出力されれば OK
}

function func02e() {
  const year = 365;
  const week = 7;

  // 定数 diff に 1 年で前年と比べて何曜日ずれるか代入（year と week を使用。1 年が 365 日の場合）
  
  Logger.log(diff);
}
