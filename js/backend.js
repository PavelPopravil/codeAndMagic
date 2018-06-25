var backend = {
    load: function (method, url, onSuccuess, onError) {
        var xhr = new XMLHttpRequest();
        xhr.responseType = 'json';
        xhr.addEventListener('load', function () {
            if (this.status === 200) {
                onSuccuess(this.response);
            } else {
                onError('Error: '  + xhr.status);
            }
        });

        xhr.addEventListener('error', function () {
            onError('Соединение с серевером прервано, код ошибки - ' + xhr.status);
        });

        xhr.addEventListener('timeout', function () {
            onError('Ответ сервера превысил ' + xhr.timeout/1000 + ' секунд');
        });

        xhr.timeout = 10000;
        xhr.open(method, url);
        xhr.send();
    },

    upload: function () {

    }
};