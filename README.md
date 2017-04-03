# 概要
主に東工大ポータルに自動ログインするために作成されたGoogle Chromeの拡張機能です。
この拡張機能は自由にカスタマイズできますので、自由に改造して使ってください。
なお、絶対に使用しないでください。

#注意
この拡張機能はパスワードを平文でおきますので超危険です。
絶対にこの拡張機能を使用しないでください。

# 使い方

まず、pass_sample.jsを参考にpass.jsを作ってください。

次にchromeでchrome://extensions/を開きます。
デベロッパーモードにチェックを入れて、「パッケージ化されていない拡張機能を読み込む...」をクリックして
HackTitechのフォルダを選択します。

これで準備は完了です。

# 機能
東工大ポータル

https://portal.nap.gsic.titech.ac.jp/GetAccess/Login?Template=userpass_key&AUTHMETHOD=UserPassword
にアクセスするとパスワードとマトリックスを入力して自動ログインします。



WirelessLAN TokyoTechに自動ログイン

https://wlanauth.noc.titech.ac.jp/fs/customwebauth/techauth.html
にアクセスするとパスワードを入力して自動ログインします。
※これは完全マッチで動作するので、正確にこのアドレスにアクセスしないと動きません。



# ライセンス
MIT
