angular.module('treehouseCourse', [])
    .controller('stageCtrl', function ($scope, api) {
        $scope.message = {
            text: "",
            lastSaved: null
        }

        $scope.$watch('message.text', function (newValue, oldValue) {
            if (newValue) {
                api.saveMessage($scope.message);
            }
        });
    })
    .factory('api', function () {
        return {
            saveMessage: function (message) {
                console.log('saving', message);
                message.lastSaved = Date.now();
            }
        }
    });