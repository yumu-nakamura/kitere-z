
## 構築環境
- node `18.16.0`
- 11ty `^2.0.1`（ejs, scss）
- vite `^4.4.7`（ts, js）

## コマンド

### 1. 開発
- ローカルサーバーが ポート`8888`で立ち上がります。
- `NODE_ENV !== 'production'`です。
```sh
npm run dev
```

### 2. 画像圧縮
- `dev`コマンドや`build`コマンドでは実行されません。画像を変更した場合は都度実行してください。
```sh
npm run img
```

### 3. 本番用データ出力
- 本番用のデータを`dist`に出力します。`img`コマンドは実行されません。
- `NODE_ENV === 'production'`です。
```sh
npm run build
```
