/** データ型: Array **/

/** Learn **/

function func05a() {
  const a = [1, 2, 3];
  Logger.log(a);
  Logger.log(a.length);
  Logger.log(a[0]);
  Logger.log(a[2]);
}

function func05b() {
  var a = [1, 2, 3];
  a.push(4);
  Logger.log(a);
  Logger.log(a.length);
  a.pop();
  Logger.log(a);
  Logger.log(a.length);
  Logger.log(a.indexOf('3'));
  Logger.log(a.indexOf('4'));
}

function func05c() {
  const arr = ['東京', '大阪', '愛知', '福岡'];
  Logger.log(a.indexOf('東京'));
  Logger.log(a.indexOf('名古屋'));
}

function func05d() {
  const arr = ['iOS', 'Android', 'Web'];
  // for 文
  for (const i = 0; i < arr.length; i++) {
    Logger.log(i);
    Logger.log(arr[i]);
  }
}

function func05e() {
  const arr = ['iOS', 'Android', 'Web'];
  arr.forEach(function (value, index) {
    Logger.log(index);
    Logger.log(value);
  });
}

function func05f() {
  const arr = [1, 2, 3, 4, 5, 6, 7];

  const b = a.filter(function (value) {
    return value % 2 !== 0;
  }).map(function (value) {
    return value + ' is odd number.'
  });

  Logger.log(b);
}

/** Training **/

function func05g() {

  var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  var total = 0;

  // forEach 関数を使って arr の数字の総和を total に代入

  Logger.log(total);// 55 と出力されれば OK
}

function func05h() {

  var arr = [1, 22, 13, 15, 18, 9, 6];

  // filter 関数を使って arr から偶数だけの配列を作る

  Logger.log(arr);// [22, 18, 6] と出力されれば OK
}

function func05i() {

  const arr = [1, 22, 13, 15, 18, 9, 6];
  var total = 0;

  // filter, forEach 関数を使って arr から偶数だけの総和を計算する

  Logger.log(total);// 46 と出力されれば OK
}

function func05j() {
  // Link: https://docs.google.com/spreadsheets/d/1gWI98XMLhtI3BRtgk5sMCAgC-mWLb-KA-degLehgjSw/edit#gid=209724583

  var rows = SpreadsheetApp
    .openById('1gWI98XMLhtI3BRtgk5sMCAgC-mWLb-KA-degLehgjSw')
    .getSheetByName('シート1')
    .getDataRange()
    .getValues();

  Logger.log(rows.length);
  Logger.log(rows[0]);
  Logger.log(rows[rows.length - 1]);

  // TODO: 東京都だけのデータを新しい配列に抽出する
}
