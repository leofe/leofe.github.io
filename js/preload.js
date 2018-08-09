
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
    '//leofe.github.io/2018/01/01/2018-01-01-book/',
    '//leofe.github.io/2018/01/09/2018-01-09-yanglei1/',
    '//leofe.github.io/2018/01/09/2018-01-09-yanglei2/',
    '//leofe.github.io/2018/01/16/2018-01-16-yanglei3/',
    '//leofe.github.io/2018/01/17/2018-01-17-yanglei4/',
    '//leofe.github.io/2018/01/23/2018-01-23-yanglei5/',
    '//leofe.github.io/2018/01/24/2018-01-24-yanglei6/',
    '//leofe.github.io/2018/01/25/2018-01-25-yanglei7/',
    '//leofe.github.io/2018/02/05/2018-02-05-yanglei8/',
    '//leofe.github.io/2018/03/13/2018-03-13-yanglei9/',
    '//leofe.github.io/2018/04/04/2018-04-04-yanglei10/',
    '//leofe.github.io/2018/04/13/2018-04-13-yanglei11/',
    '//leofe.github.io/2018/04/13/2018-04-13-yanglei12/',
    '//leofe.github.io/2018/06/17/2018-06-17-git/',
    '//leofe.github.io/2018/07/13/2018-07-13-pwa/',
    '//leofe.github.io/about/',
    '//leofe.github.io/comment/',
    '//leofe.github.io/page/2/'
])
        