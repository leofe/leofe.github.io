(function(srcList) {
    for (var i = 0; i < srcList.length; i++) {
        var resource = srcList[i].replace(/http:|https:/, 'https:');
        var head = document.getElementsByTagName('head')[0];
        var rsTag = document.createElement('link');
        rsTag.setAttribute('rel', 'prefetch');
        rsTag.setAttribute('href', resource);
        head.appendChild(rsTag);
    }
})([
    'https://leofe.github.io/2018/07/13/2018-07-13-pwa/'
])