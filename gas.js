function doGet(e) { // 村人or人狼の判定
    console.log("start: doGet");

    let spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    Logger.log("spreadsheet: " + spreadsheet.getId());
    let sheet = spreadsheet.getActiveSheet();
    Logger.log("sheet: " + sheet.getSheetId());

    let value = sheet.getRange(1, 1).getValue(); // 村人カウント
    Logger.log("value: " + value);

    let result = 1;
    if (value == -1) { // 人狼決定済
        Logger.log("human");
    } else if (Math.random() < 1 / (4 - value)) { // 未判定の村人の数に応じた乱数判定
        Logger.log("wolf");
        result = -1;
        value = -1; // 人狼決定済フラグを立てる
    } else {
        Logger.log("human");
        value += 1; // 村人カウントを更新
    }
    Logger.log("result: " + result);

    sheet.getRange(1, 1).setValue(value);

    Logger.log("end  : doGet");
    let output = ContentService.createTextOutput();
    output.setMimeType(ContentService.MimeType.TEXT);
    output.setContent(result);
    return output;
}

function doPost(e) { // リセット
    Logger.log("start: doPost");

    let spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    Logger.log("spreadsheet: " + spreadsheet.getId());
    let sheet = spreadsheet.getActiveSheet();
    Logger.log("sheet: " + sheet.getSheetId());

    sheet.getRange(1, 1).setValue(0);

    Logger.log("end  : doPost");
    return;
}