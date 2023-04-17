window.addEventListener('load', init);

const URL = "https://script.google.com/macros/s/AKfycbx6INplA3MY8-sKucIl_0vh6PDhfd6OEKfjk5fmWsW4iIXik9ImA2LlA5R-FV29npgm/exec";

function init() {
    document.getElementById("text").textContent = "あなたの正体は？";
}

function onNext() {
    fetch(URL, {
        method: "GET",
    }).then(response => {
        return response.json();
    }).then(data => {
        console.log("data: " + data);
        if (data == 1) {
            document.getElementById("text").textContent = "あなたは村人です";
        } else {
            document.getElementById("text").textContent = "あなたは人狼です";
        }
    }).catch(error => {
        console.log("API通信に失敗しました");
        console.log(error);
    });

}

function onReset() {
    fetch(URL, {
        method: "POST",
        mode: "no-cors",
    }).then();
    init();
}