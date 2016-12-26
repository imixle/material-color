/**
 * Created by dhales on 26/12/16.
 */

var elixier = require('laravel-elixir');

elixier(function (mix) {
    mix.less('./src/less/material-color.less', './dist/css/material-color.css')
});