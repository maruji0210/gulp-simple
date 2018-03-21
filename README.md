# gulp-simple
[![Build Status](https://travis-ci.org/mur6/gulp-simple.svg?branch=master)](https://travis-ci.org/mur6/gulp-simple)

## 使い方
### インストール
```sh
$ npm install
```
### 実行方法
1. ブラウザが起動します。
2. `src/ejs`以下がウォッチされ、HTMLに変換されてから、`dist`以下に配置されます。
3. `src/assets`以下もウォッチされ、`src/assets`以下の全てのファイルが、`dist`直下にコピーされます。
4. ~~ブラウザが自動的にリロードされます。~~ <= なぜかうまくいかない。
```sh
$ ./node_modules/.bin/gulp
```
## 参考サイト
- https://qiita.com/fgkm/items/7f0fb0d398889cf196e2
- https://qiita.com/harapeko_wktk/items/a9446efce650b7fcc276
- https://liginc.co.jp/web/html-css/html/144170