#!/bin/bash
# sh slides-mac.sh <file> [--no-preview]

TMPFILE=$1.__tmp__
SRCDIR=`dirname $1`
PREVIEWFILE=$1.html
LIBDIR=__reveal-lib
ROOT=$MARKDOWN_SLIDES_ROOT
MARKDOWNCMD=$MARKDOWN_SLIDES_CMD
TPL=tpl
ISPREVIEW=1

if [ "$2" == "--no-preview" -o "$3" == "--no-preview" ]; then
    ISPREVIEW=0
fi

cat "$1" "$ROOT/file_empty_line" > "$TMPFILE"

$MARKDOWNCMD "$TMPFILE" | cat "$ROOT/$TPL/header.tpl.html" - "$ROOT/$TPL/footer.tpl.html" \
    > "$PREVIEWFILE" \
    && mkdir -p $SRCDIR/$LIBDIR \
    && cp -r $ROOT/lib/* $SRCDIR/$LIBDIR \
    && (( $ISPREVIEW )) && open "$PREVIEWFILE"

rm "$TMPFILE"

