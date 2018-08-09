(function(srcList) {
    for (var i = 0; i < srcList.length; i++) {
        // var resource = srcList[i].replace(/http:|https:/, 'https:');
        var name = srcList[i];
        var arr = name.split('-');
        var resource = '//leofe.github.io/' + arr[0] + '/' + arr[1] + '/' + arr[2]+ '/' + name+'/index.html';
        var head = document.getElementsByTagName('head')[0];
        var rsTag = document.createElement('link');
        rsTag.setAttribute('rel', 'prefetch');

        rsTag.setAttribute('href', resource);
        head.appendChild(rsTag);
    }
})([
    '2018-01-01-book',
    '2018-01-09-yanglei1',
    '2018-01-16-yanglei3',
    '2018-01-17-yanglei4',
    '2018-07-13-pwa'
])