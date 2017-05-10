#!/bin/sh
export PATH="$PATH:$5"
java -XstartOnFirstThread -Dfile.encoding=UTF-8 -Dinput.file=$1 -Dglobal.file=$4 -cp $3 org.eclipse.core.launcher.Main -data $2 -application com.pat.tool.keditor.konyapplication
exit $?