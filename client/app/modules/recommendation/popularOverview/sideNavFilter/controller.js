'use strict';

module.exports = ['Topics', 'Languages', 'RecommendationTypes', 'PopularPageRecommendationFilters', '$timeout', '$mdMedia', '$mdSidenav',
    function (Topics, Languages, RecommendationTypes, PopularPageRecommendationFilters, $timeout, $mdMedia, $mdSidenav) {
        var ctrl = this;

        ctrl.$mdMedia = $mdMedia;
        ctrl.filters = PopularPageRecommendationFilters.getFilters();

        ctrl.topics = Topics.topics;
        ctrl.languages = Languages.languages;
        ctrl.recommendationTypes = RecommendationTypes.recommendationTypes;
        ctrl.actualFilterSetting = angular.copy(ctrl.filters);
        ctrl.actualFilterSettingEqual = true;

        ctrl.dataChanged = function () {
            if ($mdMedia('gt-md')) {
                ctrl.filter();
            } else {
                ctrl.actualFilterSettingEqual = angular.equals(ctrl.filters, ctrl.actualFilterSetting);
            }
        };

        ctrl.resetFilters = function () {
            ctrl.filters = {onlyContact: false};
            ctrl.filter();
        };

        ctrl.filter = function () {
            $mdSidenav('rightFilterRecommendationNav').close();
            $timeout(function () {
                PopularPageRecommendationFilters.filtersChanged(ctrl.filters);
                ctrl.actualFilterSetting = angular.copy(ctrl.filters);
                ctrl.actualFilterSettingEqual = true;
            }, 300);
        };
    }];
