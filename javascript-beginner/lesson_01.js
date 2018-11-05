/** 変数、定数 **/

/** Learn **/

function func01a() {
  // var: 変数
  var a = 1;
  Logger.log(a);
  a = 2;
  Logger.log(a);

  var b = 'BBB';
  Logger.log(b);
  b = 'bbb';
  Logger.log(b);
}

function func01b() {
  // const: 定数
  const a = 1;
  Logger.log(a);
  a = 2;
  Logger.log(a);

  const b = 'BBB';
  Logger.log(b);
  b = 'bbb';
  Logger.log(b);
}

/** Lesson **/

function func01c() {

  Logger.log(a);// 20 が表示されれば OK

  a = 10;

  Logger.log(a);// 10 が表示されれば OK
}

function func01d() {

  Logger.log(a);// abc が表示されれば OK

  a = 'def';
  
  Logger.log(a);// abc が表示されれば OK
}
