'use strict';

module.exports = ['SourceImportModification', 'ArrayHelper', function (SourceImportModification, ArrayHelper) {
    var ctrl = this;

    ctrl.loadAddressBookEvent = function () {
        ctrl.loadAddressBook();
    };

    ctrl.loadAddressBook = function () {
        delete ctrl.errorMessage;
        ctrl.importStarted = true;
        ctrl.basicAuthContacts = ctrl.service.get({password: ctrl.password, username: ctrl.username}, function () {
            SourceImportModification.addSourceDescription(ctrl.basicAuthContacts.addresses, ctrl.serviceName);
            ctrl.contacts.addresses = ArrayHelper.uniqueArray(ctrl.contacts.addresses.concat(ctrl.basicAuthContacts.addresses), 'email');
            ctrl.importStarted = false;
            ctrl.finish(ctrl.serviceName);
        }, function (resp) {
            ctrl.importStarted = false;
            if (resp.status === 401) {
                ctrl.errorMessage = 'Passwort oder E-Mail-Addresse ist nicht korrekt.';
            } else {
                ctrl.errorMessage = 'Es ist ein unbekannter Fehler aufgetreten. ' +
                    'Versuche es später noch einmal oder erfasse eine Fehlermeldung.';
            }
        });
    };
}];

