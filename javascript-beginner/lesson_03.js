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

  Logger.log(a);// 20 が表示されれば OK

  a = 10;

  Logger.log(a);// 10 が表示されれば OK
}

function func03e() {

  Logger.log(a);// abc が表示されれば OK

  a = 'def';
  
  Logger.log(a);// abc が表示されれば OK
}

