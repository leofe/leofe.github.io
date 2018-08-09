var glob = require('glob');
var fs = require('fs');
var fileNames = [];

(function() {
    glob('source/_posts/**.md', (err, files) => {
        files.forEach((file) => {
            var fileName = file.split('.')[0].split('/')[2];
            fileNames.push(`'${getFileUrl(fileName)}'`);
        })
        addHtml();
        getPage(files.length);
        createFile();
    })
    //添加必要功能
    function addHtml() {
        fileNames.push(`'//leofe.github.io/about/'`);
        fileNames.push(`'//leofe.github.io/comment/'`);
    }
    //创建文章预缓存
    function getFileUrl(name) {
        var arr = name.split('-');
        var url = `//leofe.github.io/${arr[0]}/${arr[1]}/${arr[2]}/${name}/`;
        return url;
    }
    // 创建页数预缓存
    function getPage(size) {
        let pageNum = Math.ceil(size/10);
        for(var i = 1; i < pageNum; i++) {
            fileNames.push(`'//leofe.github.io/page/${i+1}/'`);
        }
    }
    function createFile() {
        var html = `
(function(srcList) {
    for (var i = 0; i < srcList.length; i++) {
        var name = srcList[i];
        var arr = name.split('-');
        var resource = '//leofe.github.io/' + arr[0] + '/' + arr[1] + '/' + arr[2]+ '/' + name+'/';
        var head = document.getElementsByTagName('head')[0];
        var rsTag = document.createElement('link');
        rsTag.setAttribute('rel', 'prefetch');

        rsTag.setAttribute('href', resource);
        head.appendChild(rsTag);
    }
})([
    ${fileNames.join(`,
    `)}
])
        `;
        fs.writeFile('themes/hexo-theme-xups/source/js/preload.js', html, (err) => {});
        console.log('预缓存文件创建完成');
    }
})()