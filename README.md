## klippy.js
<p>Do you remember Microsoft&#39;s Office 97 helper &quot;Clippy&quot;? Well, I just &quot;found&quot; <em><strong>Klippy</strong></em>, a real look alike <em><strong>Clippy</strong></em>.</p>

<p>I put together a little js-plugin that serves as a &quot;Cookie acceptance info&quot;. <em><strong>Klippy</strong></em> will happily show up on your page over and over again, always with the same smile, to let your visitors know whether or not you&#39;re using cookies on you site.</p>

<p><img alt="Klippy, your litte helper" class="responsive" src="http://dimitrigogios.com/properties/images/klippy-cookie-example.png" /></p>

<h2>Get Klippy</h2>

<p>Getting <em><strong>Klippy</strong></em> on any web project is really easy. Expecting that the web project already uses jQuery, then there are&nbsp;2 steps that you need to do in order to get <em><strong>Klippy</strong></em>.</p>

<ul class="list-unstyled">
    <li>Include <strong>klippy.js</strong>&nbsp;in the header&nbsp;</li>
    <li>Place a div with the cookie-info and then give the div&nbsp;the class <strong>klippy</strong></li>
</ul>

<p>Optionally you can give an expiration time by adding a data-attribute - <strong>data-expire</strong>. The number should be in whole days, ex. data-expire=&quot;7&quot;<br/>
If the data attribute is not set, then the default value is 7 days until the klippy-cookie expires!</p>

<p>Code examples as shown below:</p>

<pre>
<code class="language-html">&lt;!-- include this path in the header of your web project --&gt;
&lt;script src="http://dimitrigogios.com/properties/js/klippy.js"&gt;&lt;/script&gt;</code></pre>

<pre>
<code class="language-html">&lt;body&gt;

    &lt;!-- place just before body-tag ending --&gt;
    &lt;div class="klippy" style="display:none;" data-expire="7"&gt;
        &lt;!-- below is the cookie text that you want to be shown --&gt;
        do you accept that the only use for cookies on this site, is to show this!
    &lt;/div&gt;
&lt;/body&gt;</code></pre>

<p>The good thing about <em><strong>Klippy</strong></em>&nbsp;is, he knows whether or not if you have<em><strong> jQuery.cookie</strong></em> included in the web project. If you don&#39;t have it included, <em><strong>Klippy</strong></em> will include it for you.</p>

#### Se live demo <a href="http://dimitrigogios.com/dservice/#Frontend-scripts-by-dimitri-gogios" target="_blank">here</a>

## License
The MIT License (MIT)

**Copyright (c) 2016 DimitriGogios**

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

The software is provided "as is", without warranty of any kind, express or
implied, including but not limited to the warranties of merchantability,
fitness for a particular purpose and noninfringement. In no event shall the
authors or copyright holders be liable for any claim, damages or other
liability, whether in an action of contract, tort or otherwise, arising from,
out of or in connection with the software or the use or other dealings in the
software.