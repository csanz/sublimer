# sublimer [![Build Status](https://api.travis-ci.org/csanz/sublimer.svg?branch=master)](https://travis-ci.org/csanz/sublimer)
simple CLI tool for faster editing lint rules using sublime and standard

![Screenshot](https://raw.githubusercontent.com/csanz/sublimer/master/misc/sublimer.png?bust=1)

## installation

First thing you need to do is create a shortcut for sublime [here](https://gist.github.com/csanz/13b72f3f021d08b012e01fa8ad442abc) then you can install the app

``` bash
  $ [sudo] npm install sublimer -g
```

## Usage

``` bash
  $ cd APP_DIRECTORY
  $ sublimer
```

The app will call standard and then pass the results to sublimer and propt you to edit.  

Once you click enter the app will open sublime and take you to the file and the line number you need to edit. 

That's it

Enjoy! 