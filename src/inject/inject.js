// Should throw this in a DB eventually
// Make sure complex comes before simple,
// ex: "Explore from here" before "Explore"

const translationMap = {
  "YOUR FAVORITES": {"jp": "あなたのお気に入り"},
  "SUGGESTED FOR YOU": {"jp": "あなたへオススメ"},
  "RECENT ACTIVITY": {"jp": "最近チェックしたコンテンツ"},
  "SEE ALL": {"jp": "全部見る"},

  "Remove Fields & Filters": {"jp": "フィールドを取り消す"},
  "No filters selected.": {"jp": "フィルター無し。"},
  "Not Enough Fields": {"jp": "フィールド数が足りません。"},
  "Select some dimensions or measures.": {"jp": "ディメンションやメジャーを選択してください。"},
  "This chart requires more than one dimension, or a combination of dimensions and measures.": {"jp": " 視覚化するにはディメンション一つ、あるいはディメンションとメジャーを付け足してください。"},
  "All Fields": {"jp": "全フィールド"},
  "Dimensions": {"jp": "ディメンション"},
  "Measures": {"jp": "メジャー"},
  "Pivot": {"jp": "ピボット"},
  "Custom Filter": {"jp": "カスタムフィルター"},
  "Filters": {"jp": "フィルター"},
  "Filter": {"jp": "フィルター"},
  "FILTER": {"jp": "フィルター"},
  "visualization": {"jp": "視覚化"},
  "data": {"jp": "データ"},
  "Results": {"jp": "結果"},
  "Calculations": {"jp": "計算"},
  "Row Limit": {"jp": "行リミット"},
  "Totals": {"jp": "合計"},
  "Row Totals": {"jp": "行合計"},
  "Edit": {"jp": "編集"},
  "Plot": {"jp": "プロット"},
  "Series": {"jp": "シリーズ"},
  "Values": {"jp": "値"},
  "Run": {"jp": "実行"},
  "Save as a Look": {"jp": "レポートとして保存する"},
  "Save to Dashboard": {"jp": "ダッシュボードに保存する"},
  "Download": {"jp": "ダウンロード"},
  "Send": {"jp": "送信"},
  "Save & Schedule": {"jp": "保存してスケジュール設定"},
  "Shared": {"jp": "共有"},
  "Share": {"jp": "共有"},
  "Get dashboard LookML": {"jp": "ダッシュボードLookML"},
  "Get Derived Table LookML": {"jp": "デライブドテーブルLookML"},
  "Clear Cache & Refresh": {"jp": "キャッシュをクリア"},


  "Chat":  {"jp": "チャット"},
  "Online":  {"jp": "オンライン"},
  "Offline": {"jp": "オフライン"},
  "Docs":  {"jp": "ドキュメンテーション"},
  "Discourse": {"jp": "フォーラム"},
  "Page Timing": {"jp": "ページタイミング"},
  "Keyboard Shortcuts": {"jp": "ショートカット"},
  "Release Notes": {"jp": "リリースノート"},

  // Seperation between nav/spaces and Explore

  "Browse": {"jp": "ブラウズ"},
  "Explore": {"jp": "探索"},
  "Browse ": {"jp": "ブラウズ"}, // Dupe with space
  "Explore ": {"jp": "探索"}, // Dupe with space
  "Development Mode": {"jp": "開発モードに切り替え"},
  "Develop": {"jp": "開発"},
  "Develop ": {"jp": "開発"}, // Dupe with space
  "Search": {"jp": "検索"},
  "Help": {"jp": "ヘルプ"},
  "Admin": {"jp": "アドミン"},
  "Home": {"jp": "ホーム"},
  "Popular": {"jp": "人気"},
  "Favorites": {"jp": "お気に入り"},
  "Recently Viewed": {"jp": "最近チェックしたコンテンツ"},
  "LookML Dashboards": {"jp": "LookMLダッシュボード"},
  "Users": {"jp": "ユーザー"},
  "Unused Content": {"jp": "使用されていないコンテンツ"},
  "Trash": {"jp": "ゴミ箱"},
  "Find an Explore": {"jp": "探索ページを検索"},
  "SQL Runner": {"jp": "SQLランナー"},
  "Content Validator": {"jp": "コンテンツチェッカー"},
  "Manage LookML Projects": {"jp": "プロジェクト管理"},

  // Admin panel
  "General Settings": {"jp": "設定"},
  "Labs": {"jp": "ベータ・ラボ"},
  "Legacy Features": {"jp": "レガシー機能"},
  "Users": {"jp": "ユーザー"},
  "Groups": {"jp": "グループ"},
  "Roles": {"jp": "ロール"},
  "Content Access": {"jp": "コンテンツアクセス"},
  "User Attributes": {"jp": "ユーザーフラグ"},
  "Connections": {"jp": "接続"},
  "Queries": {"jp": "クエリ"},
  "Persistent Derived Tables": {"jp": "体現ビュー"},
  "Datagroups": {"jp": "データグループ"},
  "Plans": {"jp": "プラン"},
  "History": {"jp": "スケジュール履歴"},
  "External Emails": {"jp": "社外メールアドレス"},
  "Actions": {"jp": "アクション"},
  "API": {"jp": "API"},
  "Embed": {"jp": "埋め込み"},
  "SMTP": {"jp": "SMTP"},
  "Two-Factor": {"jp": "TFA"},
  "Google": {"jp": "Google"},
  "LDAP": {"jp": "LDAP"},
  "SAML": {"jp": "SAML"},
  "Persistent Sessions": {"jp": "セッション"},
  "Backup": {"jp": "バックアップ"},
  "Load Balancing": {"jp": "ロードバランス"},
  "Log": {"jp": "ログ"},
  "Usage": {"jp": "利用分析"}
}

// Select and replace spaces, main navigation and explore page
function replaceOnDocument(pattern, string){
  // lk-explore-dataflux *:not(script):not(noscript):not(style)
  Array.from(document.querySelectorAll(`
      .spaces-nav *:not(script):not(noscript):not(style),
      #lk-nav-main *:not(script):not(noscript):not(style),
      lk-nav *:not(script):not(noscript):not(style),
      lk-segmented-switch *:not(script):not(noscript):not(style),
      .explore-empty-state *:not(script):not(noscript):not(style),
      lk-explore-header *:not(script):not(noscript):not(style),
      lk-vis-error-pane *:not(script):not(noscript):not(style),
      .titlebar *:not(script):not(noscript):not(style)
      `
    ))
    .forEach(someNode => Array.from(someNode.childNodes)
      .filter(childNode => childNode.nodeType == 3)
      .forEach(textNode => textNode.textContent = textNode.textContent.replace(pattern, string)));
}

function translate () {
  chrome.storage.sync.get({
    "language": "jp"
  }, function(items) {
    let lang = items.language
    for(const word in translationMap){
      const translationRegex = new RegExp(word, "gi")
      var translation = "jp"
      if (lang === "en"){
        translation = word;
      }else{
        translation = translationMap[word][lang];
      }
      replaceOnDocument(translationRegex, translation);
    }
  });
}

translateThrottled = _.throttle(translate, 5000) // Lot's of XHR, make sure we don't murder the page

chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
    if (document.readyState === "complete") {
      clearInterval(readyStateCheckInterval);
      chrome.extension.onMessage.addListener(function(msg, sender, sendResponse) {
        if (msg.action === 'translate') {
          translateThrottled()
        }
      });
  	}
  }, 10);
});
