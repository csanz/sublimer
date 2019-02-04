# sublimer [![Build Status](https://api.travis-ci.org/csanz/sublimer.svg?branch=master)](https://travis-ci.org/csanz/sublimer)
simple CLI tool for faster editing lint rules using sublime and standard

![Screenshot](https://raw.githubusercontent.com/csanz/sublimer/master/misc/sublimer.png?bust=1)

## installation

Install `standard` and `sublimer`

``` bash
  $ [sudo] npm install standard -g
  $ [sudo] npm install sublimer -g
```

Do a quick test

``` bash
  $ sublimer
```

It will most likely tell you that you are missing the `EDITOR` environment variable. 

If you are missing it then continue below setting it up. 

### MAC

Update `~/.bashrc`

    vi ~/.bashrc
    export EDITOR=[PATH TO EDITOR]

For example here is how you do Sumblime Text 3

    export EDITOR=/Applications/Sublime Text 3.app/Contents/SharedSupport/bin/subl

Then source the file 

    source ~/.bashrc
    echo $EDITOR

It should output the path, now you can start using sublimer, see usage

### WINDOWS

For windows you need to open up `System Properties` and add

    EDITOR
    "C:\Program Files\Sublime Text 3\subl.exe"

Make sure to include the double quotes around the path.

Also, make sure you are running Git Bash [here](https://git-scm.com/downloads)

Close and open your terminal, test the new variable

    echo $EDITOR

It should output the path, now you can start using sublimer, see usage

## Usage

Navigate to the app and run `sublimer`

``` bash
  $ cd APP_DIRECTORY
  $ sublimer
```

The app will call standard and then pass the results to sublimer and propt you to edit.  

Once you click enter the app will open sublime and take you to the file and the line number you need to edit. 

