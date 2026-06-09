# 開発・運用ガイド（CONTRIBUTING）

カイロウドウケツのアプリを作る・公開するときの共通ルールです。

## 開発フロー

1. このテンプレートの「Use this template」で新しいリポジトリを作る（リポジトリ名は **kebab-case のアプリ名**。例: `todo-app`）
2. ローカルにクローン → `index.html` / `style.css` / `js/main.js` を編集
3. `docs/` の要件・設計を埋める
4. `git push origin main`
5. Cloudflare Pages が自動デプロイ（接続済みの場合）

ブランチ運用は最初はシンプルに:
- `main` … 本番（カスタムドメイン）
- それ以外のブランチ … Cloudflare のプレビューURLが自動発行される

---

## リポジトリの公開範囲（Public / Private）

### 既定は Public
note記事と相互リンクして読者にコードを見せる前提のため、**Public** を基本にします。

Public で必ず守ること:
- **秘密情報をコミットしない**（APIキー・トークン・パスワード・個人情報）
  - 鍵が必要なら `.env`（`.gitignore` 済み）に置き、本番値は **Cloudflare Pages の環境変数**に設定する
  - リポジトリには `.env.example`（キー名だけ）を置く
- 著作権・ライセンスに注意（他人の素材を無断で含めない）

### Private にもできる
ホスティングが **Cloudflare Pages** なので、**リポジトリが Private でもアプリは一般公開できます**
（GitHub Pages は Private だと Pro が必要ですが、本構成は Cloudflare Pages のため無料で可）。

切り替え方:
- GitHub: リポジトリ → **Settings → General → Danger Zone → Change repository visibility**
- 初回に Private にすると、Cloudflare の GitHub App に「このリポジトリへのアクセス」を許可する必要があります
  （Cloudflare 接続時、または GitHub の **Settings → Applications → Cloudflare Pages → Configure** で対象リポジトリを追加）

### 迷ったら
- 記事で見せる学習用アプリ → **Public**
- 試作中・見せたくないコードを含む → **Private**（あとで Public に変更可）

---

## セキュリティの基本（全アプリ共通）
- 個人情報・機微情報を**扱わない設計**を基本にする
- 認証が必要なら自前でパスワードを持たず OAuth 等の外部委譲を使う
- 外部APIを叩くアプリは、課金上限・レート制限を必ず設定する

---

## ブランド規約
- 配色・フォントは `style.css` の `:root` を基準（ポータルと統一）
- フッターの**アフィリエイト表記とプライバシー/利用規約リンクは削除しない**（景表法ステマ規制対応）
