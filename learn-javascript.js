/** 変数、定数 **/

function func1() {
  // var: 変数
  var a = 1;
  Logger.log(a);
  a = 2;
  Logger.log(a);

  // const: 定数
  const b = 1;
  Logger.log(b);
  b = 2;
  Logger.log(b);
}

/** データ型 **/

// Number
function func2() {
  // Number: 数値
  // 例: 1, 2, 3
  var a = 1;
  var b = 2;
  var c = a + b;
  Logger.log(c);
  var d = a - b;
  Logger.log(d);
  var e = a * b;
  Logger.log(e);
  var f = a / b;
  Logger.log(f);
}

// String
function func3() {
  // String: 文字列
  // 例: "JavaScript", 'Google Apps Script'
  var a = "JavaScript";
  var b = 'Google Apps Script';
  var c = b + ' is a scripting language based on ' + a
  Logger.log(c);
}

// Boolean
function func4() {
  // Boolean: 真偽値
  // 例: true, false
  var a = (1 === 1);
  Logger.log(a);
  var b = false;
  Logger.log(b);

  if (b === true) {
    Logger.log('b is true.');
  } else {
    Logger.log('b is not true.');
  }
}

// undefined
function func5() {
  // undefined: 未定義
  var a;
  Logger.log(a);
}

// Array
function func6() {
  var a = [1, 2, 3];
  Logger.log(a);
  a.push(4);
  Logger.log(a);
  a.pop();
  Logger.log(a);

  a.forEach(function (value, index) {
    Logger.log(index);
    Logger.log(value);
  });

  var b = a.filter(function (value) {
    return value % 2 !== 0;
  }).map(function (value) {
    return value + ' is odd number.'
  });

  Logger.log(b);
}

// Object
function func7() {
  var obj = {
    id: 123,
    name: 'tanabe',
    tags: [
      'JavaScript',
      'iOS',
      'VR'
    ]
  };

  Logger.log(obj);
  Logger.log(obj.name);

  obj.tags.forEach(function (tag) {
    Logger.log(obj.name + ' like ' + tag);
  });
}

/** 関数 **/

function add(a, b) {
  return a + b;
}

function func8() {
  var x = add(5, 8);
  Logger.log(x);
}

/** for 文 **/

function func9() {
  var a = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  // for 文
  var sum1 = 0;
  Logger.log(a.length);
  for (var i = 0; i < a.length; i++) {
    sum1 += a[i];
  }
  Logger.log(sum1);

  // forEach
  var sum2 = 0;
  a.forEach(function (value) {
    sum2 += value;
  });
  Logger.log(sum2);

  // reduce
  var sum3 = a.reduce(function (a, b) {
    return a + b;
  });
  Logger.log(sum3);

}
