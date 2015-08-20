'use strict';

var goToPageDetail = function (pageId, $state, $scope) {
    $scope.uploadRunning = false;
    $state.go('page.detail', {
        label: $scope.category.selectedCategoryType,
        pageId: pageId
    });
};

var getPageId = function (pageId, resp) {
    if (!pageId) {
        return resp.pageId;
    }
    return pageId;
};

var uploadPage = function ($scope, $state, errorToast, fileUpload, api, pageId, PromiseModal) {
    var json = $scope.page[$scope.category.selectedCategoryType](), imageToUpload;

    if (!$scope.uploadRunning) {
        $scope.uploadRunning = true;
        if ($scope.imagePreviewData) {
            imageToUpload = $scope.imagePreviewData;
        }

        fileUpload.uploadFileAndJson(imageToUpload, json, api).
            success(function (resp) {
                var modalScope = $scope.$new(false);
                pageId = getPageId(pageId, resp);
                if ($scope.mode.edit) {
                    goToPageDetail(pageId, $state, $scope);
                } else {
                    modalScope.recommendation = {
                        pageId: pageId
                    };
                    PromiseModal.getModal({
                        scope: modalScope,
                        title: $scope.category.title,
                        templateUrl: 'app/modules/recommendation/modalAddRecommendation.html',
                        placement: 'center',
                        backdrop: 'static'
                    }).show().then(function () {
                        $scope.uploadRunning = false;
                        goToPageDetail(pageId, $state, $scope);
                    }, function () {
                        $scope.uploadRunning = false;
                    });
                }
            }).
            error(function () {
                $scope.uploadRunning = false;
                errorToast.showError('Fehler! Seite konnte nicht hochgeladen werden');
            });
    }
};

module.exports = ['$scope', '$state', '$stateParams', 'errorToast', 'Languages', 'fileUpload', 'moment', 'PageCategories', 'PromiseModal',
    function ($scope, $state, $stateParams, errorToast, Languages, fileUpload, moment, PageCategories, PromiseModal) {

        var imageDefaultPath = 'app/img/default.jpg';
        $scope.page.imagePreview = imageDefaultPath;
        $scope.commonSection = {};
        $scope.editChanged = false;
        $scope.editChangedTitle = false;
        $scope.uploadRunning = false;

        $scope.$on('image.cropper.image.preview', function (event, data, dataToSend) {
            $scope.page.imagePreview = data.toDataURL("image/jpeg", 1.0);
            $scope.imagePreviewData = dataToSend;
        });

        $scope.$watch('category.selectedCategory', function (newValue) {
            if (newValue) {
                $scope.category.selectedCategoryType = PageCategories.getPageType(newValue);
            }
        });

        if ($scope.mode.edit) {
            $scope.$watchCollection('page', function (newValue) {
                if (newValue && $scope.commonSection.toCompare) {
                    if (!angular.equals($scope.commonSection.toCompare, newValue)) {
                        $scope.editChanged = true;
                    } else {
                        $scope.editChanged = false;
                    }
                }
            });

            $scope.$watch('category.title', function (newValue) {
                if (newValue && $scope.commonSection.toCompareTitle) {
                    if ($scope.commonSection.toCompareTitle !== $scope.category.title) {
                        $scope.editChangedTitle = true;
                    } else {
                        $scope.editChangedTitle = false;
                    }
                }
            });
        }

        $scope.createPage = function () {
            uploadPage($scope, $state, errorToast, fileUpload, 'api/user/page/create', $stateParams.pageId, PromiseModal);

        };

        $scope.editPage = function () {
            uploadPage($scope, $state, errorToast, fileUpload, 'api/user/page/edit', $stateParams.pageId, PromiseModal);
        };
    }];
