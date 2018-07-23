(function () {
    'use strict';

    var Key_codes = {
        esc: 27,
        ent: 13
    };

    window.util = {
        isEscEvent: function (e) {
            return e.keyCode === Key_codes.esc;
        },
        isEntEvent: function (e) {
            return e.keyCode === Key_codes.ent;
        },
        getMaxValue: function (arr) {
            return Math.max.apply(null, arr);
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

})();