# kony-zxing-barcode-scanner
Integration of Zxing Barcode Scanner with Kony in 7.2.1 Visualizer
Please follow the below steps for AAR Integration.

AAR Integration Steps

***Step 1*** 
Generate an AAR file which works independently.
While generating the AAR file from Android Studio please check the below things.

applicationId in build.gradle is commented.
android:icon attribute is removed in Manifest
android:name attribute is removed in manifest before generating AAR.
Intent filters in Manifest file are commented.
Eg: <intent-filter>
		<action android:name="android.intent.action.MAIN" />
		<category android:name="android.intent.category.LAUNCHER" />
		</intent-filter>

***Step 2***
Create a Java project in Eclipse
Add Android.jar, KonyWidgets.jar and classes.jar
Classes.jar will be available in the AAR file. Open Archive the AAR and copy the Classes.jar
Write a java class in a Static method to invoke an activity in the AAR file.

In case if your Android Studio Project have few more dependencies use android precompile task to add them.
