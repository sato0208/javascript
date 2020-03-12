// JavaScriptの章1

// 変数の宣言
// var hello = "Hello World";
// alertで画面が表示される
// alert(hello);

// 変数には数字、文字列が入れられる
// var init1 = 1;
// var init2 = -10;
// var init3 = 3.14;
// var str1 = 'Hello';
// var str2 = 'World';
// alert(str1 + str2);

// 四則演算
// alert(4 + 3);
// alert(8 - 5);
// alert(2 * 6);
// alert(10 / 2);

// 文字の連結
// alert('Hello' + 'World');

// 条件分岐
// var orange = 100;
// var apple = 120;

// if(orange < apple){
// 	alert('みかんの値段がりんごより安い');
// }
// else if(orange == apple){
// 	alert('みかんとりんごが同じ値段');
// }
// else{
// 	alert('みかんの値段がりんごより高い');
// }

// 結果が真である場合のみ繰り返される
// var max = 100;
// var num = 1;
// var count = 0;

// while(num < max){
// 	num = num * 4;
// 	count = count + 1;
// }
// alert('2をかけ続けて' + max + 'を変えるのに必要だった回数は' + count + '回です');

// 変数iの宣言（この時は何も入っていない）
// var i;
// var num = 0;
// for(初期値；　条件色；　増減地；){繰り返し処理}
// for(i = 1; i < 11; i++){
// 	num = num + i;

// }
// alert('1から10まで足し算した結果は' + num + 'です');

// 練習問題1
// alert(1 + 1);
// alert(1 - 1);
// alert(1 * 2);
// alert(1 / 1);


// JavaScript2章
// funcion 関数名（引数）{処理内容　return戻り値；}
// メイン部分
// var alertString;
// alertString = addString("WebCamp");
// 作成した関数を呼び出す
// alert(alertString);
// 作成した関数
// function 関数名　{（引数）『処理』return戻り値;}
// function addString(strA){
// 	var addStr = "Hello " + strA;
// 	return addStr;
// }


// 入力ダイアログで値を入力する
// var promprStr = prompt('何か好きな文字を入力してください。');
// 入力された値がpromoptSrに格納されアラートウィンドウに表示される
// alert(promprStr);

// var user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');
// alert('あなたの選んだ手は'　+ user_hand + 'です。');

// function getJShand(){
	// この行では、乱数を生成する関数を設定
// 	var js_had_num = Math.floor(Math.random()* 3);
// ランダム生成された数値を基に条件分岐させ、グー・チョキ・パーを出し分け
// 	if(js_hand_num == 0){
// 		fs_hand = "グー";
// 	}else if(js_hand_num == 1){
// 		js_hand ="チョキ";
// 	}else if(js_hand_num == 2){
// 		js_hand ="パー";
// 	}
// 最後に関数の戻り値として、グー・チョキ・パーの文字列を返します。
// 	return js_hand;
// }


// じゃんけんの手を入力してもらうプロンプト欄を生成
var user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');
// じゃんけんの手をランダムに生成する関数を呼び出す。
while((user_hand != "グー")&&(user_hand != "チョキ")&&(user_hand != "パー")&&(user_hand != null)){
	alert("グー・チョキ・パーのいずれかを入力してください");
	user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。')
}

var js_hand = getJShand();
// ユーザーの手とjavascriptのじゃんけんの手を比べる関数を呼び出し、結果をjudgeに入れる
var judge = winLose(user_hand, js_hand);
// 結果を出力する
alert('あなたの選んだ手は' + user_hand + 'です。\nJavaScriptの選んだ手は' + js_hand + 'です。\n結果は' + judge + 'です。');
// ランダムでじゃんけん結果を作成する関数
function getJShand(){
	var js_hand_num = Math.floor(Math.random() * 3);
	var hand_name;

	if(js_hand_num == 0){
		hand_name ="グー";
	}else if(js_hand_num == 1){
		hand_name ="チョキ";
	}else if(js_hand_num == 2){
		hand_name ="パー";
	}
	return hand_name;
}
// ユーザーの手とjavascriptのじゃんけんの手を比べる関数
function winLose(user,js){
	var winLoseStr;

	if(user == 'グー'){
		if(js == 'グー'){
			winLoseStr = "あいこ";
		}else if(js == 'チョキ'){
			winLoseStr = "勝ち";
		}else if(js == "パー"){
			winLoseStr ="負け";
		}
	}else if(user == "チョキ"){
		if(js == "グー"){
			winLoseStr = "負け";
		}else if(js == "チョキ"){
			winLoseStr = "あいこ";
		}else if(js == "パー"){
			winLoseStr = "勝ち";
		}
	}else if(user == "パー"){
		if(js == "グー"){
			winLoseStr = "勝ち";
		}else if(js == "チョキ"){
			winLoseStr = "負け";
		}else if(js == "パー"){
			winLoseStr = "あいこ";
		}
	}else{
		winLose = "グー・チョキ・パーのいずれかを入力してください";
	}
	return winLoseStr;
}
















































