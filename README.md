# （アプリ名） ｜ カイロウドウケツ

> このリポジトリは **カイロウドウケツのアプリ用テンプレート** (`kairo-doketsu-template-vanilla`) から作られています。
> Vanilla HTML / CSS / JavaScript（ビルド不要）で作る、軽量な静的アプリの雛形です。

## このアプリについて
（アプリの説明をここに書く）

---

## 開発のはじめかた

ビルド不要なので、**`index.html` をブラウザで開くだけ**で動きます。

ローカルでサーバー経由で確認したいとき（カメラやfetch等を使う場合に推奨）:

```bash
# どちらでもOK（Node があれば）
npx serve .
# または Python があれば
python -m http.server 8000
```

書き換える主なファイル:

| ファイル | 役割 |
|---|---|
| `index.html` | 画面の構造 |
| `style.css`  | 見た目（ブランド配色・フォントは `:root` に定義済み） |
| `js/main.js` | 動き |

`docs/` の要件定義・設計書も、アプリに合わせて埋めていきます。

---

## 公開する（Cloudflare Pages）

このリポジトリを Cloudflare Pages に接続すると、`git push` するたびに自動デプロイされます。

1. Cloudflare ダッシュボード →「Workers & Pages」→「Create application」→「Pages」→「Connect to Git」
2. このリポジトリを選択
3. ビルド設定（**Vanilla なのでビルドなし**）:
   - **Framework preset**: `None`
   - **Build command**: （空欄）
   - **Build output directory**: `/`
4. デプロイ後、「Custom domains」で `<アプリ名>.kairo-doketsu.com` を割り当て

> アプリのURLは `https://<アプリ名>.kairo-doketsu.com/`（サブドメイン方式）になります。

---

## リポジトリの公開範囲（Public / Private）

このテンプレートは既定で **Public** を想定しています（note記事から読者にコードを共有できるため）。

- **Public のとき**: 誰でもコードを閲覧できます。**APIキー・パスワード等の秘密情報は絶対にコミットしない**でください（`.env` は `.gitignore` 済み。本番の鍵は Cloudflare Pages の「環境変数」に設定する）。
- **Private でも公開できます**: ホスティングに Cloudflare Pages を使うため、**リポジトリが Private でもアプリの一般公開は可能**です（GitHub Pages と違い Pro 契約は不要）。Cloudflare の GitHub 連携時に、対象リポジトリへのアクセスを許可するだけです。

公開範囲の切り替え・運用ルールは **[CONTRIBUTING.md](./CONTRIBUTING.md)** を参照してください。

---

## ブランド
- カラー: 青 `#2A7FFF` / 黄 `#FFDD55` / クリーム `#FFFBF0` / インク `#16315C`
- フォント: Fredoka（英）/ Zen Maru Gothic（和）
- 配色・フォントの基準は `style.css` の `:root`。ポータル `www.kairo-doketsu.com` と統一しています。
