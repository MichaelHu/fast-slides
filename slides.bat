@echo off
setlocal enabledelayedexpansion

set TMPFILE=%1.__tmp__
set SRCDIR=
set PREVIEWFILE=%1.preview.html
set MARKDOWNCMD=C:\slides\win\markdown.exe
set ROOT=C:\slides
set REVEAL=_reveal

for /f %%i in ("%TMPFILE%") do set SRCDIR=%%~pi
if "%2" == "noreveal" set REVEAL=""

rem echo !SRCDIR!
rem echo !REVEAL!

type %1 %ROOT%\file_empty_line > %TMPFILE%

%MARKDOWNCMD% "%TMPFILE%" > "%ROOT%\tmp\__tmp__.md.html" 
type "%ROOT%\tpl\header!REVEAL!.tpl.html" "%ROOT%\tmp\__tmp__.md.html" "%ROOT%\tpl\footer!REVEAL!.tpl.html" > "%PREVIEWFILE%" 
mkdir "!SRCDIR!\lib"
xcopy /e /y /q "%ROOT%\lib" "!SRCDIR!\lib"
rem must no double-quotes
start %PREVIEWFILE%

del "%TMPFILE%"
endlocal
@echo on
