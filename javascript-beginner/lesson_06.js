/** データ型: Object **/

/** Learn **/

// Document: https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Object

function func06a() {
  const user = {
    id: 123,
    name: 'tanabee',
    tags: [
      'JavaScript',
      'iOS',
      'VR'
    ]
  };

  Logger.log(user);
  Logger.log(user.name);
  Logger.log(user.tags);
  Logger.log(user.tags[1]);

  user.tags.forEach(function (tag) {
    Logger.log(user.name + ' like ' + tag);
  });
}

function func06b() {
  const score = {};
  score.japanese = 70;
  score.mathematics = 100;
  score.geography = 80;
  score.science = 90;
  score.english = 70;

  Logger.log(score);
  Logger.log(score.values());
}

/** Training **/

function func06c() {
  const score = {
    japanese: 70,
    mathematics: 100,
    geography: 80,
    science: 90,
    english: 70
  };

  Logger.log(total);// 410 と出力されれば OK
  Logger.log(avg);// 82 と出力されれば OK
}
