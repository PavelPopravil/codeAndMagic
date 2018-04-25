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
        inputValidation: function () {
            
        }
    };

})();