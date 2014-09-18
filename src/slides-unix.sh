#!/bin/bash

TMPFILE=$1.__tmp__
SRCDIR=`dirname $1`
PREVIEWFILE=$1.preview.html
MARKDOWNCMD=/Users/hudamin/projects/git/git-myscripts/markdown/bin/slides/mac/markdown
ROOT=/Users/hudamin/projects/git/git-myscripts/markdown/bin/slides
TPL=tpl

REVEAL="_reveal"

if [ "$2" == "noreveal" ]; then
    REVEAL=""
fi

cat "$1" "$ROOT/file_empty_line" > "$TMPFILE"

$MARKDOWNCMD "$TMPFILE" | cat "$ROOT/$TPL/header${REVEAL}.tpl.html" - "$ROOT/$TPL/footer${REVEAL}.tpl.html" \
    > "$PREVIEWFILE" \
    && mkdir -p $SRCDIR/lib \
    && cp -r $ROOT/lib/* $SRCDIR/lib \
    && open "$PREVIEWFILE"

rm "$TMPFILE"
