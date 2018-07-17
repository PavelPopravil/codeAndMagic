!function () {
    'use strict';

    var fileApp = {

        setFileReader: function () {
            var fileReader = new FileReader();
            var app = this;

            fileReader.addEventListener('load', function () {
                if (this.readyState === 2) {
                    app.imgBlock.src = this.result;
                }
            });

            fileReader.readAsDataURL(app.file);
        },

        setHandlers: function () {
            var app = this;
            this.fileInp.addEventListener('change', function (e) {
                app.file = this.files[0];
                var fileName = app.file.name.toLowerCase();
                var fileFormat = fileName.substr(fileName.lastIndexOf('.') + 1);
                var isCorrectFile = app.data.formats.some(function (item) {
                    return fileFormat === item;
                });

                if (isCorrectFile) {
                    app.setFileReader();
                }
            });
        },

        init: function () {
            this.block = document.querySelector('.upload');
            if (!this.block) {
                return false;
            }
            this.imgBlock = this.block.querySelector('.setup-user-pic');
            this.fileInp =  this.block.querySelector('.upload input[type=file]');
            this.data = {
                formats: ['jpeg', 'jpg', 'png', 'gif']
            };
            this.setHandlers();
        }
    };

    window.addEventListener('load', function () {
        fileApp.init();
    });
}();