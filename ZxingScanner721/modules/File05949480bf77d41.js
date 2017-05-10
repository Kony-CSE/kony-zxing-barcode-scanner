//Type your code here

function onBtnScanClick() {
//barcode.startZxing();
barcode.startZxing(
		/**Function*/ myCallbackFunction);
}

function myCallbackFunction(result) {
//alert("My res"+result);
//kony.store.setItem("myResult", result);
if(result !=="")
frmStartUp.lblData.text=result;

}