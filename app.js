angular.module('treehouseCourse', [])
    .controller('stageCtrl', function ($scope, $http) {
        var otherPeople = [
            {
                "name": "Jane",
                "profession": "Designer",
                "hometown": "New York, NY"
            },
            {
                "name": "Jerry",
                "profession": "Salesman",
                "hometown": "Detroit, MI"
            }
        ]

        $http.get('people.json').success(function(people) {
            $scope.people = people;
        });

        $scope.add = function () {
            $scope.people.push(otherPeople.pop());
        }

        $scope.remove = function (person) {
            otherPeople.push(person);
            $scope.people = _.without($scope.people, person);
        }

        $scope.edit = function (person) {
            $scope.editingPerson = person;
        }

        $scope.save = function (person) {
            $http.post('people.json', person)
                .success(function (response) {
                    alert('Saved!');
                })
                .error(function (err) {
                    alert('Error: '+err);
                });
        }
    });







