/** データ型: String **/

/** Learn **/

// Document: https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String

function func03a() {
  // String: 文字列
  // 例: "JavaScript", 'Google Apps Script'
  const a = "JavaScript";
  Logger.log(typeof a);
  const b = 'Google Apps Script';
  const c = b + ' is a scripting language based on ' + a
  Logger.log(c);
}

function func03b() {
  // String.prototype.replace()
  // https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String/replace
  const text1 = 'abcdefghi';
  const text2 = text1.replace('def', 'xyz');
  Logger.log(text2);
}

function func03c() {
  // String.prototype.indexOf()
  // https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf
  const text1 = 'JavaScript（ジャバスクリプト）とは、プログラミング言語のひとつである。Javaと名前が似ているが、全く異なるプログラミング言語である。';
  Logger.log(text1.indexOf('プログラミング言語'));

  const text2 = 'JavaScriptはプロトタイプベースのオブジェクト指向スクリプト言語であるが、クラスなどのクラスベースに見られる機能も取り込んでいる。';
  Logger.log(text2.indexOf('プログラミング言語'));
}

/** Training **/

function func03d() {

  var name = '織田　信長';

  // replace メソッドを使って全角スペースを半角スペースに置き換え

  Logger.log(name);// '織田 信長' と出力されれば OK
}

function func03e() {

  // 定数 text を定義

  const index = text.indexOf('b');

  Logger.log(index);// 2 と出力されれば OK
}

