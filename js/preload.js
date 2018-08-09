
(function(srcList) {
    for (var i = 0; i < srcList.length; i++) {
        // var resource = srcList[i].replace(/http:|https:/, 'https:');
        var name = srcList[i];
        var arr = name.split('-');
        var resource = '//leofe.github.io/' + arr[0] + '/' + arr[1] + '/' + arr[2]+ '/' + name+'/';
        var head = document.getElementsByTagName('head')[0];
        var rsTag = document.createElement('link');
        rsTag.setAttribute('rel', 'prefetch');

        rsTag.setAttribute('href', resource);
        head.appendChild(rsTag);
    }
})(['2018-01-01-book','2018-01-09-yanglei1','2018-01-09-yanglei2','2018-01-16-yanglei3','2018-01-17-yanglei4','2018-01-23-yanglei5','2018-01-24-yanglei6','2018-01-25-yanglei7','2018-02-05-yanglei8','2018-03-13-yanglei9','2018-04-04-yanglei10','2018-04-13-yanglei11','2018-04-13-yanglei12','2018-06-17-git','2018-07-13-pwa'])
        