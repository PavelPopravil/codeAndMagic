(function () {
    'use strict';

    var ESC_CODE = 27;
    var ENT_CODE = 13;

    window.util = {
        isEscEvent: function (e) {
            return e.keyCode === ESC_CODE;
        },
        isEntEvent: function (e) {
            return e.keyCode === ENT_CODE;
        },
        getMaxValue: function (arr) {
            var max = 0;
            for (var i = 0; i < arr.length; i++) {
                if (arr[i] > max) {
                    max = arr[i];
                }
            }
            return max;
        },
        createObjFromArrays: function (arr1, arr2) {
            var objArr = {};
            arr1.forEach(function (item, i) {
                objArr[item] = arr2[i];
            });
            return objArr;
        },
        randomVal: function (arr) {
            return arr[Math.round(Math.random() * (arr.length - 1))];
        },
        inputValidation: function (inputObj) {
            inputObj.element.addEventListener('input',function (e) {
                var trg = e.target;
                var valLength = trg.value.length;
                var maxLength = this.getAttribute('maxlength') || inputObj.maxLength;
                var minLength = this.getAttribute('minlength') || inputObj.minLength;

                if (!valLength) {
                    trg.setCustomValidity(inputObj.noValueinputObjMessage);
                } else if (valLength > maxLength) {
                    trg.setCustomValidity('Должно быть не более ' + maxLength + ' символа.');
                } else if (valLength < minLength) {
                    trg.setCustomValidity('Должно быть не менее ' + minLength + ' символа.');
                } else {
                    trg.setCustomValidity('');
                }
            });
        }
    };

    function dataCallback(data) {
        console.log(data);
    }

    function addScript(src) {
        var newScirpt = document.createElement('script');
        newScirpt.src = src;
        document.body.append(newScirpt);
    }

    addScript('http://rawgit.com/PavelPopravil/codeAndMagic/master/js/data.js?callback=dataCallback')

})();