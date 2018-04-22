( function() {

    var levelIndices = [ 0, 0, 0, 0, 0 ];

    function normalizeItem(item){
        var $item = $(item)
            , tag = $item[0].tagName
            , txt = $item.text()
            , tmpArr
            ;

        switch(tag){
            case 'H2':
                levelIndices[0]++;
                if(!/^\s*[一二三四五六七八九十]+、/.test(txt)){
                    $item.text(toCHNNumber(levelIndices[0]) + '、' + $item.text());
                }
                levelIndices[1] = 0;
                levelIndices[2] = 0;
                levelIndices[3] = 0;
                levelIndices[4] = 0;
                break;
            case 'H3':
                if(!/^\s*[1-9][0-9]*\.[1-9][0-9]*\s+/.test(txt)){
                    levelIndices[1]++;
                    tmpArr = levelIndices.slice( 0, 2 );
                    if ( tmpArr.indexOf( 0 ) < 0 ) {
                        $item.text(
                            tmpArr.join('.') + ' '
                            + $item.text()
                        );
                        levelIndices[2] = 0;
                        levelIndices[3] = 0;
                        levelIndices[4] = 0;
                    }
                    else {
                        levelIndices[1]--;
                    }
                }
                break;
            case 'H4':
                if(!/^\s*(?:[1-9][0-9]*\.){2}[1-9][0-9]*\s+/.test(txt)){
                    levelIndices[2]++;
                    tmpArr = levelIndices.slice( 0, 3 );
                    if ( tmpArr.indexOf( 0 ) < 0 ) {
                        $item.text(
                            tmpArr.join('.') + ' '
                            + $item.text()
                        );
                        levelIndices[3] = 0;
                        levelIndices[4] = 0;
                    }
                    else {
                        levelIndices[2]--;
                    }
                }
                break;
            case 'H5':
                if(!/^\s*(?:[1-9][0-9]*\.){3}[1-9][0-9]*\s+/.test(txt)){
                    levelIndices[3]++;
                    tmpArr = levelIndices.slice( 0, 4 );
                    if ( tmpArr.indexOf( 0 ) < 0 ) {
                        $item.text(
                            tmpArr.join('.') + ' '
                            + $item.text()
                        );
                        levelIndices[4] = 0;
                    }
                    else {
                        levelIndices[3]--;
                    }
                }
                break;
            case 'H6':
                if(!/^\s*(?:[1-9][0-9]*\.){4}[1-9][0-9]*\s+/.test(txt)){
                    levelIndices[4]++;
                    tmpArr = levelIndices.slice( 0 );
                    if ( tmpArr.indexOf( 0 ) < 0 ) {
                        $item.text(
                            tmpArr.join('.') + ' '
                            + $item.text()
                        );
                    }
                    else {
                        levelIndices[4]--;
                    }
                }
                break;
        }
    }

    function toCHNNumber(num){
        var ret = ''
            , decade
            , unit
            , decadeArr = [
                ''
                , '十'
                , '二十'
                , '三十'
                , '四十'
                , '五十'
                , '六十'
                , '七十'
                , '八十'
                , '九十'
            ]
            , unitArr = [
                ''
                , '一'
                , '二'
                , '三'
                , '四'
                , '五'
                , '六'
                , '七'
                , '八'
                , '九'
            ]
            ;

        if(!num || num >= 100){
            return num;
        }
        decade = Math.floor(num / 10);
        unit = num % 10;
        ret += decadeArr[decade] + unitArr[unit];

        return ret;
    }

    $( 'h2' )
        .add( 'h3' )
        .add( 'h4' )
        .add( 'h5' )
        .add( 'h6' )
        .each( function( i, item ){
            normalizeItem( item );
        } );


} )();
