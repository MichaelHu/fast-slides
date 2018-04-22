( function() {

    var themes = [
      'black'
      , 'beige'
      , 'blood'
      , 'league'
      , 'moon'
      , 'night'
      , 'serif'
      , 'simple'
      , 'sky'
      , 'solarized'
      , 'white'
    ];
    var curThemeIndex = 0, len = themes.length;
    var transitions = [
        'none'
        , 'fade'
        , 'slide'
        , 'convex'
        , 'concave'
        , 'zoom'
    ];
    var curTransition = /[?&]transition=([^&]+)/.test( location.search )
        ? RegExp.$1 
        : ''
        ;

    $( document ).on( 'keydown', function( e ) {

        var tagName = e.target.tagName;
        var T_KEY = 84, R_KEY = 82, P_KEY = 80;
        var keyCode = e.keyCode;

        if ( /input|textarea/i.test( tagName ) ) {
            return;
        }

        console.log( keyCode );

        if ( ! e.altKey ) {
            return;
        }

        if ( T_KEY == keyCode ) {
            changeTheme();
        }
        else if ( R_KEY == keyCode ) {
            changeTransition();
        }
        else if ( P_KEY == keyCode ) {
            togglePdfStyle();
        }

    } );
    
    function changeTheme() {
        var $link = $( '#theme' );

        curThemeIndex = ( curThemeIndex + 1 ) % len;
        $link.attr( 
            'href'
            , '__reveal-lib/reveal/css/theme/' + themes[ curThemeIndex ] + '.css'
        );
    }

    function changeTransition() {
        var index = transitions.indexOf( curTransition );
        var search = location.search;
        
        index = ( index + 1 ) % transitions.length; 

        if ( /[?&]transition=[^&]*/.test( search ) ) {
            search = search.replace( /([?&]transition=)[^&]*/, '$1' + transitions[ index ] ); 
        }
        else {
            search = 
                search
                + ( 
                    search.length > 0
                    ? '&'
                    : '?'
                ) 
                + 'transition=' + transitions[ index ];
        }

        location.href = location.origin
            + location.pathname
            + search
            + location.hash
            ;
    }

    function togglePdfStyle() {
        var search = location.search;

        if ( /[?&]print-pdf/.test( search ) ) {
            search = search.replace( /[?&]print-pdf/, '' ); 
        }
        else {
            console.log( search );
            search = 
                search
                + ( 
                    search.length > 0
                    ? '&'
                    : '?'
                ) 
                + 'print-pdf';
        }

        location.href = location.origin
            + location.pathname
            + search
            + location.hash
            ;
    }

} )();
