/** データ型: Boolean **/

/** Learn **/

// Document: https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Boolean

function func04a() {
  // Boolean: 真偽値
  // 例: true, false
  const a = true;
  Logger.log(a);
  const b = false;
  Logger.log(b);
  const c = (1 === 1);
  Logger.log(c);
  const d = (1 === '1');
  Logger.log(d);
  const e = typeof a;
  Logger.log(e);
  const f = (typeof a === 'boolean');
  Logger.log(f);
}

function func04b() {
  const a = 3;

  Logger.log(a < 3);
  Logger.log(a <= 3);
  Logger.log(a == 3);
  Logger.log(a >= 3);
  Logger.log(a > 3);
}

function func04c() {
  const a = 3;

  if (typeof a === 'number') {
    Logger.log('a is number.');
  } else {
    Logger.log('a is not number.');
  }
}

function func04d() {
  const a = ('a' === 234);

  if (typeof a === 'number') {
    Logger.log('a is number.');
  } else if (typeof a === 'string') {
    Logger.log('a is string.');
  } else if (typeof a === 'boolean') {
    Logger.log('a is boolean.');
  }
}

/** Training **/

function func04e() {

  if (a > 3) {
    Logger.log('a is larger than three.');// このメッセージが出力されれば OK
  }
}

function func04f() {

  if (a < 0) {
    Logger.log('a is smaller than zero');
  } else if (a < 10) {
    Logger.log('a is smaller than ten');// このメッセージが出力されれば OK
  } else {
    Logger.log('a is not smaller than ten');
  }
}
