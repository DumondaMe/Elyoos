'use strict';

var getStatistic = function (statistics, type) {
    var result = null;
    angular.forEach(statistics, function (statisticElement) {
        if (type === statisticElement.type) {
            result = statisticElement;
        }
    });
    return result;
};

var addCountToNewStatistic = function (elements, oldStatisticCount, newStatisticType) {
    if (oldStatisticCount > 0 && newStatisticType) {
        angular.forEach(elements, function (statisticElement) {
            if (newStatisticType === statisticElement.type) {
                statisticElement.count = statisticElement.count + oldStatisticCount;
            }
        });
    }
};

module.exports = [
    function () {

        var statistic, service = this;

        service.setStatistic = function (newStatistic) {
            statistic = newStatistic;
        };

        service.getTypes = function (excludedGroup) {
            var types = [];
            angular.forEach(statistic, function (statisticElement) {
                if (excludedGroup !== statisticElement.type) {
                    types.push(statisticElement.type);
                }
            });
            return types;
        };

        service.removeType = function (type, newType) {
            var elementToRemove = getStatistic(statistic, type);
            addCountToNewStatistic(statistic, elementToRemove.count, newType);
            if (elementToRemove) {
                statistic.splice(statistic.indexOf(elementToRemove), 1);
            }
        };

        service.removeContact = function (statistic) {
            if (statistic.count > 0) {
                statistic.count = statistic.count - 1;
            }
        };

        service.moveContact = function (previousStatistic, newGroupName) {
            var newStatistic = getStatistic(statistic, newGroupName);
            service.removeContact(previousStatistic);
            newStatistic.count = newStatistic.count + 1;
            if (newStatistic.hasOwnProperty('reloadContact')) {
                newStatistic.reloadContact();
            }
        };
    }];
