function addWidgetsfrmStartUp() {
    frmStartUp.setDefaultUnit(kony.flex.DP);
    var btnScan = new kony.ui.Button({
        "focusSkin": "slButtonGlossRed",
        "height": "50dp",
        "id": "btnScan",
        "isVisible": true,
        "left": "49dp",
        "onClick": AS_Button_4800f645957845969bd637742ccaa97c,
        "skin": "slButtonGlossBlue",
        "text": "scan barcode",
        "top": "164dp",
        "width": "260dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblData = new kony.ui.Label({
        "id": "lblData",
        "isVisible": true,
        "left": "59dp",
        "skin": "slLabel",
        "text": "Label",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "50dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    frmStartUp.add(btnScan, lblData);
};

function frmStartUpGlobals() {
    frmStartUp = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmStartUp,
        "enabledForIdleTimeout": false,
        "id": "frmStartUp",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": true,
        "skin": "slForm"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "footerOverlap": false,
        "headerOverlap": false,
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
        "retainScrollPosition": false,
        "titleBar": true,
        "titleBarSkin": "slTitleBar",
        "windowSoftInputMode": constants.FORM_ADJUST_PAN
    });
    frmStartUp.info = {
        "kuid": "9af619fbe00c49f88c9f9387ad593d8f"
    };
};