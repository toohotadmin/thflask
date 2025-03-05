# Toohot Personal Website (thflask)
Your own personal porn stash

## Why?
You are tired of dealing with a barage of ads and suspect javascript when surfing streaming sites.  With this front end and our reasonably prices API you can build your own personal porn archive which allows you save the content you love with little or no overhead.

## How?
We have built custom search, embed, and extract scrapers for 20+ different streaming sites.  We also have our own website https://toohot.info which runs on the exact same code being offered here.  Feel free to have a look at our site, and if you are interested in building your own private database feel free to download and run this server locally.

## Requirements
* RapidAPI Account
* Subscribe to https://rapidapi.com/toohot/api/toohotpornsearch
* RapidAPI Key
* docker v28+
* web browser
* bash (for install script)
* tested on OSx and Ubuntu24

## Install
* clone this repo `git clone https://github.com/toohotadmin/thflask`
* change to thflask dir `cd thflask`
* add `.env` file 
```
MYSQL_ROOT=root_password
RAPID_KEY=rapidapi_key
```
* run `bash install.sh`

## Usage
* connect browser to http://localhost:8000
* To add sites click 'Login'
* login with `admin` and `your_mysql_root_password`
* click 'Toggle' to search 20+ streaming sites
* click 'View Video' and then 'Save' to save your video
