'use strict';

module.exports = ['UserDetail', '$stateParams', '$mdMedia', 'ContactStatisticTypes', 'UserDetailContacts', 'UserDetailContactings', 'ToolbarService',
    function (UserDetail, $stateParams, $mdMedia, ContactStatisticTypes, UserDetailContacts, UserDetailContactings, ToolbarService) {
        var ctrl = this;

        ctrl.commands = {};
        ctrl.contactPreviewEvents = {};
        ctrl.contactingPreviewEvents = {};
        ctrl.$mdMedia = $mdMedia;
        ctrl.UserDetailContacts = UserDetailContacts;
        ctrl.UserDetailContactings = UserDetailContactings;

        ctrl.userDetail = UserDetail.get({userId: $stateParams.userId}, function () {
            ContactStatisticTypes.setStatistic(ctrl.userDetail.contactTypeStatistic);
            ctrl.numberOfGroups = ctrl.userDetail.contactTypeStatistic.length;
            ctrl.userName = ctrl.userDetail.user.forename;
            ToolbarService.setTitle(ctrl.userName + "'s Profil");
        });

        ctrl.showContactOverview = function () {
            ctrl.showOverviewContact = true;
            ctrl.showOverviewContacting = false;
            ToolbarService.setTitle(ctrl.userName + "'s Kontakte");
            if (ctrl.contactingPreviewEvents.hasOwnProperty('detailClosed')) {
                ctrl.contactingPreviewEvents.detailClosed();
            }
        };

        ctrl.showContactingOverview = function () {
            ctrl.showOverviewContacting = true;
            ctrl.showOverviewContact = false;
            ToolbarService.setTitle(ctrl.userName + "'s Follower");
            if (ctrl.contactPreviewEvents.hasOwnProperty('detailClosed')) {
                ctrl.contactPreviewEvents.detailClosed();
            }
        };

        ctrl.close = function () {
            ctrl.showOverviewContact = false;
            ctrl.showOverviewContacting = false;
        };

    }];

