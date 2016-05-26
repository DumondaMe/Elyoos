'use strict';

module.exports =
    ['$scope', 'Home', '$mdSidenav', 'HomeScrollRequest', 'ToolbarService', 'ElyModal', 'SearchService', 'SearchHome',
        function ($scope, Home, $mdSidenav, HomeScrollRequest, ToolbarService, ElyModal, SearchService, SearchHome) {
            var ctrl = this;
            ctrl.home = {pinwall: []};
            ctrl.noPinwall = false;
            ctrl.loadRunning = true;
            ctrl.showSearch = false;

            ctrl.openSideNavRight = function () {
                $mdSidenav('rightHomeNav').open();
            };

            HomeScrollRequest.reset();

            //toolbar search ----
            SearchService.register(ctrl, SearchHome.query, SearchHome.query);

            ctrl.requestStarted = function () {
                ctrl.loadRunning = true;
            };

            ctrl.requestFinished = function (resp) {
                ctrl.loadRunning = false;
                ctrl.showSearch = true;
                ctrl.searchResult = resp;
            };

            ctrl.abortSearch = function () {
                ctrl.loadRunning = false;
                ctrl.showSearch = false;
            };
            //---------------------

            ctrl.nextPinwallInfo = function () {
                HomeScrollRequest.nextRequest(ctrl.home.pinwall).then(function (pinwall) {
                    ctrl.home = pinwall;
                    ctrl.loadRunning = false;
                    if (pinwall.pinwall.length === 0) {
                        ctrl.noPinwall = true;
                    }
                });
            };
            ctrl.nextPinwallInfo();

            $scope.isSideNavOpen = false;

            $scope.$watch('isSideNavOpen', function (isOpen) {
                if (isOpen) {
                    ToolbarService.disable();
                } else {
                    ToolbarService.enable();
                }
            });
        }];
