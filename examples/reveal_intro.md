@s
# Reveal.js
### HTML Presentations Made Easy
<small>Created by <a href="http://hakim.se">Hakim El Hattab</a> / <a href="http://twitter.com/hakimel">@hakimel</a></small>

<small>[ Slides Produced markdown_slides by MichaelHu ]</small>


@s
## Heads Up

reveal.js is a framework for easily creating beautiful presentations using HTML. You'll need a browser with
support for CSS 3D transforms to see it in its full glory.

<aside class="notes">Oh hey, these are some notes. They'll be hidden in your presentation, but you can see them if you open the speaker notes window (hit 's' on your keyboard).
</aside>

<!-- Example of nested vertical slides -->
@vs
## Vertical Slides
Slides can be nested inside of other slides,
try pressing <a href="#" class="navigate-down">down</a>.

<a href="#" class="image navigate-down">
<img width="178" height="238" src="https://s3.amazonaws.com/hakim-static/reveal-js/arrow.png" alt="Down arrow">
</a>



@vs
## Basement Level 1
Press down or up to navigate.



@vs
## Basement Level 2

Cornify

<a class="test" href="http://cornify.com">
<img width="280" height="326" src="https://s3.amazonaws.com/hakim-static/reveal-js/cornify.gif" alt="Unicorn">
</a>


@vs
## Basement Level 3
<p>That's it, time to go back up.</p>
<a href="#/2" class="image">
<img width="178" height="238" src="https://s3.amazonaws.com/hakim-static/reveal-js/arrow.png" alt="Up arrow" style="-webkit-transform: rotate(180deg);">
</a>



@s
## Slides
Not a coder? No problem. There's a fully-featured visual editor for authoring these, try it out at <a href="http://slid.es" target="_blank">http://slid.es</a>.



@s
## Point of View

Press <strong>ESC</strong> to enter the slide overview.

Hold down alt and click on any element to zoom in on it using <a href="http://lab.hakim.se/zoom-js">zoom.js</a>. Alt + click anywhere to zoom back out.



@s
## Works in Mobile Safari
Try it out! You can swipe through the slides and pinch your way to the overview.


@s
## Marvelous Unordered List

* No order here
* Or here
* Or here
* Or here


@s
## Fantastic Ordered List
1. One is smaller than...
1. Two is smaller than...
1. Three!


@s
## Markdown support

For those of you who like that sort of thing. Instructions and a bit more info available [here](https://github.com/hakimel/reveal.js#markdown).

    <section data-markdown>
      ## Markdown support

      For those of you who like that sort of thing.
      Instructions and a bit more info available 
      [here](https://github.com/hakimel/reveal.js#markdown).
    </section>

@s id="transitions"
## Transition Styles
You can select from different transitions, like: <br>
<a href="?transition=cube#/transitions">Cube</a> -
<a href="?transition=page#/transitions">Page</a> -
<a href="?transition=concave#/transitions">Concave</a> -
<a href="?transition=zoom#/transitions">Zoom</a> -
<a href="?transition=linear#/transitions">Linear</a> -
<a href="?transition=fade#/transitions">Fade</a> -
<a href="?transition=none#/transitions">None</a> -
<a href="?#/transitions">Default</a>

@s id="themes"
## Themes

Reveal.js comes with a few themes built in: <br>
<a href="?#/themes">Default</a> -
<a href="?theme=sky#/themes">Sky</a> -
<a href="?theme=beige#/themes">Beige</a> -
<a href="?theme=simple#/themes">Simple</a> -
<a href="?theme=serif#/themes">Serif</a> -
<a href="?theme=night#/themes">Night</a> <br>
<a href="?theme=moon#/themes">Moon</a> -
<a href="?theme=solarized#/themes">Solarized</a>

<small>
* Theme demos are loaded after the presentation which leads to flicker. In production you should load your theme in the `<head>` using a `<link>`.
</small>


    
@s
## Global State
Set `data-state="something"` on a slide and `"something"`
will be added as a class to the document element when the slide is open. This lets you
apply broader style changes, like switching the background.


@s data-state="customevent"
## Custom Events
Additionally custom events can be triggered on a per slide basis by binding to the <code>data-state</code> name.

    Reveal.addEventListener( 'customevent', function() {
        console.log( '"customevent" has fired' );
    } );



@vs data-background="#007777"
## Slide Backgrounds
Set `data-background="#007777"` on a slide to change the full page background to the given color. All CSS color formats are supported.

<a href="#" class="image navigate-down">
<img width="178" height="238" src="https://s3.amazonaws.com/hakim-static/reveal-js/arrow.png" alt="Down arrow">
</a>


@vs data-background="https://s3.amazonaws.com/hakim-static/reveal-js/arrow.png"
## Image Backgrounds
    <section data-background="image.png">

@vs data-background="https://s3.amazonaws.com/hakim-static/reveal-js/arrow.png" data-background-repeat="repeat" data-background-size="100px"
## Repeated Image Backgrounds
    <section data-background="image.png" data-background-repeat="repeat" data-background-size="100px">


@s data-transition="linear" data-background="#4d7e65" data-background-transition="slide"
## Background Transitions
Pass reveal.js the `backgroundTransition: 'slide'` config argument to make backgrounds slide rather than fade.


@s data-transition="linear" data-background="#8c4738" data-background-transition="slide"
## Background Transition Override
You can override background transitions per slide by using `data-background-transition="slide"`.

@s
## Clever Quotes
These guys come in two forms, inline: <q cite="http://searchservervirtualization.techtarget.com/definition/Our-Favorite-Technology-Quotations">
&ldquo;The nice thing about standards is that there are so many to choose from&rdquo;</q> and block:

> &ldquo;For years there has been a theory that millions of monkeys typing at random on millions of typewriters would
> reproduce the entire works of Shakespeare. The Internet has proven this theory to be untrue.&rdquo;


@s
## Pretty Code

    function linkify( selector ) {
      if( supports3DTransforms ) {

        var nodes = document.querySelectorAll( selector );

        for( var i = 0, len = nodes.length; i &lt; len; i++ ) {
          var node = nodes[i];

          if( !node.className ) {
            node.className += ' roll';
          }
        }
      }
    }

Courtesy of <a href="http://softwaremaniacs.org/soft/highlight/en/description/">highlight.js</a>.


@s
## Intergalactic Interconnections
You can link between slides internally,
<a href="#/2/3">like this</a>.
    <a href="#/2/3">like this</a>.




@vs id="fragments"
## Fragmented Views
Hit the next arrow...

<p class="fragment">... to step through ...</p>

<ol>
<li class="fragment"><code>any type</code></li>
<li class="fragment"><em>of view</em></li>
<li class="fragment"><strong>fragments</strong></li>
</ol>

<aside class="notes">This slide has fragments which are also stepped through in the notes window.
</aside>



@vs
## Fragment Styles

<p>There's a few styles of fragments, like:</p>
<p class="fragment grow">grow</p>
<p class="fragment shrink">shrink</p>
<p class="fragment roll-in">roll-in</p>
<p class="fragment fade-out">fade-out</p>
<p class="fragment highlight-red">highlight-red</p>
<p class="fragment highlight-green">highlight-green</p>
<p class="fragment highlight-blue">highlight-blue</p>
<p class="fragment current-visible">current-visible</p>
<p class="fragment highlight-current-blue">highlight-current-blue</p>


@s
## Spectacular image!

<a class="image" href="http://lab.hakim.se/meny/" target="_blank">
<img width="320" height="299" src="http://s3.amazonaws.com/hakim-static/portfolio/images/meny.png" alt="Meny">
</a>




@s
## Export to PDF

Presentations can be <a href="https://github.com/hakimel/reveal.js#pdf-export">exported to PDF</a>, below is an example that's been uploaded to SlideShare.

<iframe id="slideshare" src="http://www.slideshare.net/slideshow/embed_code/13872948" width="455" height="356" style="margin:0;overflow:hidden;border:1px solid #CCC;border-width:1px 1px 0;margin-bottom:5px" allowfullscreen> </iframe>

<script>document.getElementById('slideshare').attributeName = 'allowfullscreen';</script>



@s
## Take a Moment</h2>
Press b or period on your keyboard to enter the 'paused' mode. This mode is helpful when you want to take distracting slides off the screen
during a presentation.



@s
## Stellar Links
* <a href="http://slid.es">Try the online editor</a>
* <a href="https://github.com/hakimel/reveal.js">Source code on GitHub</a>
* <a href="http://twitter.com/hakimel">Follow me on Twitter</a>




@s
## THE END
### BY Hakim El Hattab / hakim.se

