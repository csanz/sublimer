# TODO

* Add support for $EDITOR and $VISUAL so you can pop inside other editors via @bcomnes

``` bash
  $ cd APP_DIRECTORY
  $ sublimer --editorPath [PATH] --lineDelimeter [+/:] --addSpace [N/Y]
```  

Standard output: fileName.js:NUMBER:ROW (this works inside sublime)

Expected input to work inside other editors (e.g. VIM): fileName.js +NUMBER

* Pass in something like this `grep -rnw './bin' -e 'toolSlug'` and start to edit. 