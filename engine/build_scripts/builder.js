var fs = require('fs-extra');
var path = require('path');
var pageTemplate = require('./page_template');
var pageTemplateBlog = require('./page_template_blog');
var pageTemplateWork = require('./page_template_work');

// All paths are relative to package.json.
var pagesPath = './pages';
var pagesMetaPath = '../data';
// var copyFolders = ['./images', './css', './js'];
// var outputPath = './build';

var outputPathBlog = '../blog';

var pagesPathWork = './pages_work';
var pagesMetaPathWork = '../data';
// var copyFoldersWork = ['./images', './css', './js'];
var outputPathWork = '../works';

// First delete everything in the build directory.
console.log('Cleaning previous build...');
try {
  for (var file of fs.readdirSync(outputPathBlog)){
    fs.removeSync(path.join(outputPathBlog, file));
  }
  for (var fileWork of fs.readdirSync(outputPathWork)){
    fs.removeSync(path.join(outputPathWork, fileWork));
  }
}
catch (err){
  console.log('Error during cleanup: '+err);
  process.exit(1);
}

// Then read everything in the pages and pages_meta directories.
var pages = {}, pagesMeta = {}, pagesWork = {}, pagesMetaWork = {};

console.log('Loading pages...');
try {
  for(var page of fs.readdirSync(pagesPath)){
    pages[page] = fs.readFileSync(path.join(pagesPath,page),'utf8');
  }
  for(var pageWork of fs.readdirSync(pagesPathWork)){
    pagesWork[pageWork] = fs.readFileSync(path.join(pagesPathWork,pageWork),'utf8');
  }
}
catch (err){
  console.log('Error during page loading: '+err);
  process.exit(1);
}

console.log('Loading pages metadata...');
try {
  for(var pageMeta of fs.readdirSync(pagesMetaPath)){
    pagesMeta[pageMeta] = fs.readFileSync(path.join(pagesMetaPath,pageMeta),'utf8');
  }
  for(var pageMetaWork of fs.readdirSync(pagesMetaPathWork)){
    pagesMetaWork[pageMetaWork] = fs.readFileSync(path.join(pagesMetaPathWork,pageMetaWork),'utf8');
  }
}
catch (err){
  console.log('Error during metadata loading: '+err);
  process.exit(1);
}

// Generate each page from the data provided, using the template.
console.log('Generating pages...');
try {
  var i = 0;
  for(var page of Object.entries(pages)) {
    var pageName = page[0].slice(0, page[0].lastIndexOf('.'));
    //var metaData = pagesMeta.hasOwnProperty(pageName+'.json')
      // ? JSON.parse(pagesMeta[pageName+'.json'])
    var metaDatas = pagesMeta.hasOwnProperty('data_blog.json')
      ? JSON.parse(pagesMeta['data_blog.json'])
      : {};
      console.log('metaDatas +++++++++++++++++++++++++++++: '+metaDatas);
      console.log('page +++++++++++++++++++++++++++++: '+page);
      console.log('i +++++++++++++++++++++++++++++: '+i);
      var metaData = metaDatas[i].meta;
      var metaDataData = metaDatas[i].data;
      console.log('metaData +++++++++++++++++++++++++++++: '+metaData);
    metaData.title = metaData.title || pageName;
    var pageContent = page[1];
    fs.writeFileSync(
      path.join(outputPathBlog,pageName+'.html'),
      pageTemplateBlog.generatePage(pageContent, metaData, metaDataData));

    i++;
  }
  var j = 0;
  for(var pageWork of Object.entries(pagesWork)) {
    var pageNameWork = pageWork[0].slice(0, pageWork[0].lastIndexOf('.'));
    //var metaData = pagesMeta.hasOwnProperty(pageName+'.json')
      // ? JSON.parse(pagesMeta[pageName+'.json'])
    var metaDatasWork = pagesMetaWork.hasOwnProperty('data_works.json')
      ? JSON.parse(pagesMetaWork['data_works.json'])
      : {};
      console.log('metaDatasWork +++++++++++++++++++++++++++++: '+metaDatasWork);
      console.log('pageWork +++++++++++++++++++++++++++++: '+pageWork);
      console.log('j +++++++++++++++++++++++++++++: '+j);
      var metaDataWork = metaDatasWork[j].meta;
      var metaDataWorkData = metaDatasWork[j].data;
      console.log('metaDataWork +++++++++++++++++++++++++++++: '+metaDataWork.title);
      console.log('metaDataWorkData +++++++++++++++++++++++++++++: '+metaDataWorkData.title);
    metaDataWork.title = metaDataWork.title || pageNameWork;
    var pageContentWork = pageWork[1];
    fs.writeFileSync(
      path.join(outputPathWork,pageNameWork+'.html'),
      pageTemplateWork.generatePage(pageContentWork, metaDataWork, metaDataWorkData));

    j++;
  }
}
catch (err){
  console.log('Error during page generation: '+err);
  process.exit(1);
}

/*
// Copy folders with assets into build folder.
console.log('Copying folders...');
try {
  for(var copyFolder of copyFolders){
    fs.copySync(copyFolder, path.join(outputPath,copyFolder));
  }
  for(var copyFolderWork of copyFoldersWork){
    fs.copySync(copyFolderWork, path.join(outputPathWork,copyFolderWork));
  }
}
catch (err){
  console.log('Error during folder copying: '+err);
  process.exit(1);
}
*/

// Process complete.
console.log('Done!');
