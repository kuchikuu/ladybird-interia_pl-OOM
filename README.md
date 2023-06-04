Webpage: http://interia.pl

Date: 2023-06-01

Loading unchanged webpage: (I guess we're stuck in an) infinite loop that buillds up data in RAM, resulting in a system crash.

Loading stops at loading https://sgp2021.iplsc.com/build/images/ad-placeholder.svg

Loading the .svg directly in a browser works fine.


nohead.html:
```
   <!-- PROBLEM (number 1) HERE Below: Eats the whole ram - crashes the system--> 
   <link href="interia_files/7b7747ec045ae606eb720a1222f56098-layout.798b93e9.css" media="all" rel="stylesheet" type="text/css">
   <!-- PROBLEM (number 2) HERE Below: Without: loads perfectly. With: hangs--> 
   <link href="interia_files/7b7747ec045ae606eb720a1222f56098-news.c10c265b.css" media="all" rel="stylesheet" type="text/css">
```


Problem number 1:

minimal bug-making code available in mini/ directory


interia_files/7b7747ec045ae606eb720a1222f56098-layout.798b93e9.css
CSS blocks causing problems:

```
.section-content,.wz-section{
    display:grid;

	justify-content:space-between
}
.content-main,.content-main-wideo{
    display:grid;

    justify-content:space-between
}
```

If "display:grid;" is uncommented, ladybird eats the whole ram and the OS hangs.

Looking into the serenity Base/res folder, the webpage
Base/res/html/misc/display-grid.html
crashes.
