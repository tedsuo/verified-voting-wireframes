#!/usr/bin/env node
var hogan = require('hogan.js')
  , fs    = require('fs')
  , less  = require('less');

var layout, pages;

// compile layout template
layout = fs.readFileSync(__dirname + '/../templates/layout.mustache', 'utf-8');
layout = hogan.compile(layout, { sectionTags: [{o:'_i', c:'i'}] });

// retrieve pages
fs.readdir(__dirname + '/../templates/pages',function(err,pages){
  pages.forEach(function (name) {

    if (!name.match(/\.mustache$/)) return;

    var version = name.charAt(name.length-10),
        context = {};

    fs.readFile(__dirname  + '/../templates/pages/' + name, 'utf-8', function(err,page){
      context[name.replace(/\.mustache$/, '')] = 'active';
      context._i = true;
      page = hogan.compile(page, { sectionTags: [{o:'_i', c:'i'}] });
      page = layout.render(context, {
        body: page,
        version: version
      })
      fs.writeFileSync(__dirname + '/../' + name.replace(/mustache$/, 'html'), page, 'utf-8');
    })
  });
});


// retrieve less files
fs.readdir(__dirname + '/../less', function(err,less_files){
  less_files.forEach(function (name) {

    if(!name.match(/\.less$/)) return;
    if(name.match(/variables\.less$/)) return;

    fs.readFile(__dirname + '/../less/'+name,'utf-8',function(err,data){
      
    });
  });
});