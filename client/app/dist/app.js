(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
angular.module('elyoosApp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('app/modules/auth/login.html',
    "<div id=\"loginform\">\n" +
    "    <div id=\"error-message\" class=\"alert alert-danger\" role=\"alert\" ng-if=\"error\">\n" +
    "        {{error}}\n" +
    "    </div>\n" +
    "    <form class=\"form-horizontal\" name=\"loginForm\" role=\"form\" novalidate=\"novalidate\">\n" +
    "        <div class=\"form-group\">\n" +
    "            <label for=\"id_username\" class=\"col-sm-2 control-label\">Email</label>\n" +
    "\n" +
    "            <div class=\"col-sm-10\">\n" +
    "                <input type=\"email\" name=\"username\" ng-model=\"loginuser.email\"\n" +
    "                       class=\"form-control\" id=\"id_username\" autofocus=\"autofocus\"\n" +
    "                       placeholder=\"Email\" required>\n" +
    "                <span class=\"error\" ng-show=\"loginForm.inputEmail.$error.email\">\n" +
    "    Keine gültige E-Mail Adresse!</span>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "            <label for=\"id_password\" class=\"col-sm-2 control-label\">Passwort</label>\n" +
    "\n" +
    "            <div class=\"col-sm-10\">\n" +
    "                <input type=\"password\" ng-model=\"loginuser.password\" class=\"form-control\"\n" +
    "                       id=\"id_password\" name=\"password\"\n" +
    "                       placeholder=\"Passwort\" required>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "            <div class=\"col-sm-offset-2 col-sm-10\">\n" +
    "                <button id=\"login\" type=\"submit\" class=\"btn btn-default\" ng-click=\"login()\"\n" +
    "                        ng-disabled=\"loginForm.$invalid\">\n" +
    "                    Anmelden\n" +
    "                </button>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </form>\n" +
    "</div>"
  );


  $templateCache.put('app/modules/auth/register.html',
    "<div id=\"content-settings-profile\">\n" +
    "    <div id=\"centerCol\">\n" +
    "        <div id=\"inner-centerCol\">\n" +
    "            <div id=\"manage-profile\">\n" +
    "                <form class=\"form-horizontal\" name=\"profileForm\" role=\"form\" novalidate>\n" +
    "                    <div class=\"form-group\">\n" +
    "                        <label for=\"inputEmail\" class=\"col-sm-4 control-label\">E-Mail</label>\n" +
    "\n" +
    "                        <div class=\"col-sm-8\">\n" +
    "                            <input name=\"inputEmail\" ng-model=\"userDataToChange.email\"\n" +
    "                                   class=\"form-control\"\n" +
    "                                   id=\"inputEmail\"\n" +
    "                                   placeholder=\"Email\">\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"form-group\">\n" +
    "                        <label for=\"inputPassword\" class=\"col-sm-4 control-label\">Passwort</label>\n" +
    "\n" +
    "                        <div class=\"col-sm-8\">\n" +
    "                            <input name=\"inputEmail\" ng-model=\"userDataToChange.password\"\n" +
    "                                   class=\"form-control\"\n" +
    "                                   id=\"inputPassword\">\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"form-group\"\n" +
    "                         ng-class=\"{'has-error': profileForm.inputForename.$invalid && (visitedForename || submitFailed)}\">\n" +
    "                        <label for=\"inputForenameId\" class=\"col-sm-4 control-label\">Vorname\n" +
    "                        </label>\n" +
    "\n" +
    "                        <div class=\"col-sm-8\">\n" +
    "                            <input name=\"inputForename\" ng-model=\"userDataToChange.forename\"\n" +
    "                                   class=\"form-control\"\n" +
    "                                   id=\"inputForenameId\" ng-blur=\"visitedForename = true\"\n" +
    "                                   placeholder=\"Vorname\" required ng-maxlength=\"30\">\n" +
    "\n" +
    "                            <div class=\"alert-input alert-danger\"\n" +
    "                                 ng-show=\"profileForm.inputForename.$error.required && (visitedForename || submitFailed)\">\n" +
    "                                <span>Es wird ein Vorname benötigt</span>\n" +
    "                            </div>\n" +
    "                            <div class=\"alert-input alert-danger\"\n" +
    "                                 ng-show=\"profileForm.inputForename.$error.maxlength && (visitedForename || submitFailed)\">\n" +
    "                                <span>Der Vorname darf nicht länger als 30 Zeichen sein</span>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"form-group\"\n" +
    "                         ng-class=\"{'has-error': profileForm.inputSurename.$invalid && (visitedSurename || submitFailed)}\">\n" +
    "                        <label for=\"inputSurename\" class=\"col-sm-4 control-label\">Nachname</label>\n" +
    "\n" +
    "                        <div class=\"col-sm-8\">\n" +
    "                            <input name=\"inputSurename\" ng-model=\"userDataToChange.surname\"\n" +
    "                                   class=\"form-control\"\n" +
    "                                   id=\"inputSurename\" ng-blur=\"visitedSurename = true\"\n" +
    "                                   placeholder=\"Nachname\" required ng-maxlength=\"50\">\n" +
    "\n" +
    "                            <div class=\"alert-input alert-danger\"\n" +
    "                                 ng-show=\"profileForm.inputSurename.$error.required && (visitedSurename || submitFailed)\">\n" +
    "                                <span>Es wird ein Nachname benötigt</span>\n" +
    "                            </div>\n" +
    "                            <div class=\"alert-input alert-danger\"\n" +
    "                                 ng-show=\"profileForm.inputSurename.$error.maxlength && (visitedSurename || submitFailed)\">\n" +
    "                                <span>Der Nachname darf nicht länger als 50 Zeichen sein</span>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"form-group\"\n" +
    "                         ng-class=\"{'has-error': profileForm.inputBirthday.$invalid && (visitedBirthday || submitFailed)}\">\n" +
    "                        <label for=\"inputBirthday\" class=\"col-sm-4 control-label\">Geburtstag</label>\n" +
    "\n" +
    "                        <div class=\"col-sm-8\">\n" +
    "                            <input name=\"inputBirthday\" ng-model=\"userDataToChange.birthday\"\n" +
    "                                   class=\"form-control\"\n" +
    "                                   id=\"inputBirthday\" ng-blur=\"visitedBirthday = true\"\n" +
    "                                   placeholder=\"z.B {{getDateExample()}}\" required/>\n" +
    "\n" +
    "                            <div class=\"alert-input alert-danger\"\n" +
    "                                 ng-show=\"profileForm.inputBirthday.$error.required && (visitedBirthday || submitFailed)\">\n" +
    "                                <span>Bitte gib deinen Geburtstag an</span>\n" +
    "                            </div>\n" +
    "                            <div class=\"alert-input alert-danger\"\n" +
    "                                 ng-show=\"profileForm.inputBirthday.$error.date && (visitedBirthday || submitFailed)\">\n" +
    "                                <span>Gib einen gültigen Geburtstag ein (z.B. {{getDateExample()}})</span>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"form-group\"\n" +
    "                         ng-class=\"{'has-error': profileForm.inputCountry.$invalid && (visitedCountry || submitFailed)}\">\n" +
    "                        <label for=\"inputCountryId\" class=\"col-sm-4 control-label\">Land</label>\n" +
    "\n" +
    "                        <div class=\"col-sm-8\">\n" +
    "                            <button type=\"button\" class=\"btn btn-default\" ng-model=\"selectedCountryCode\"\n" +
    "                                    name=\"inputCountry\"\n" +
    "                                    id=\"inputCountryId\"\n" +
    "                                    bs-options=\"countryCode.country as countryCode.country for countryCode in countryCodes\"\n" +
    "                                    data-placeholder=\"Land\"\n" +
    "                                    bs-select>\n" +
    "                                Action <span class=\"caret\"></span>\n" +
    "                            </button>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"form-group\">\n" +
    "                        <label for=\"inputGender\" class=\"col-sm-4 control-label\">Geschlecht</label>\n" +
    "\n" +
    "                        <div class=\"col-sm-8\">\n" +
    "                            <div class=\"btn-group\" id=\"inputGender\">\n" +
    "                                <label class=\"btn btn-default\"\n" +
    "                                       ng-click=\"userDataToChange.female = true; profileForm.$setDirty()\"\n" +
    "                                       ng-class=\"{'active': userDataToChange.female == true}\">Frau</label>\n" +
    "                                <label class=\"btn btn-default\"\n" +
    "                                       ng-click=\"userDataToChange.female = false; profileForm.$setDirty()\"\n" +
    "                                       ng-class=\"{'active': userDataToChange.female == false}\">Mann</label>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"form-group\">\n" +
    "                        <div class=\"col-sm-offset-4 col-sm-8\">\n" +
    "                            <div>\n" +
    "                                <button id=\"submit-change-profile\" type=\"submit\"\n" +
    "                                        class=\"btn btn-default\"\n" +
    "                                        ng-click=\"submitProfileData()\">\n" +
    "                                    Profil erstellen\n" +
    "                                </button>\n" +
    "                            </div>\n" +
    "                            <div class=\"alert-input alert-danger\"\n" +
    "                                 ng-show=\"profileForm.$invalid && submitFailed\">\n" +
    "                                <span>Bitte fülle alle Werte korrekt aus</span>\n" +
    "                            </div>\n" +
    "                            <div class=\"alert-input alert-danger\"\n" +
    "                                 ng-show=\"profileForm.$invalid == false && submitFailedToServer\">\n" +
    "                                <span>Fehler auf dem Server. Die Werte konnten nicht gespeichert werden</span>\n" +
    "                            </div>\n" +
    "                            <div class=\"alert-input alert-success\"\n" +
    "                                 ng-show=\"successUserDataChange && profileForm.$pristine\">\n" +
    "                                <span>Profil erfolgreich erstellt</span>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </form>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>"
  );


  $templateCache.put('app/modules/contact/contactPreview/template.html',
    "<div class=\"contact-preview\">\r" +
    "\n" +
    "    <img ng-src=\"{{contact.profileUrl}}\" ng-click=\"openUserDetails()\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <div class=\"contact-preview-content\">\r" +
    "\n" +
    "        <div class=\"contact-preview-name\">\r" +
    "\n" +
    "            <div ng-click=\"openUserDetails()\">\r" +
    "\n" +
    "                {{contact.name}}\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"description-container\">\r" +
    "\n" +
    "                <div class=\"description\" ng-click=\"openModalUpdateType($scope)\" ng-show=\"!contact.blocked && contact.type\">\r" +
    "\n" +
    "                    ({{contact.type}})\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"blocked-description\" ng-show=\"contact.blocked\">\r" +
    "\n" +
    "                BLOCKIERT\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"command-icons\">\r" +
    "\n" +
    "            <button type=\"button\"\r" +
    "\n" +
    "                    class=\"btn btn-default btn-xs dropdown-toggle left\"\r" +
    "\n" +
    "                    data-toggle=\"dropdown\" aria-expanded=\"false\"\r" +
    "\n" +
    "                    bs-dropdown=\"contact.actions\"\r" +
    "\n" +
    "                    ng-show=\"!contact.blocked && contact.type\">\r" +
    "\n" +
    "                Aktionen <span class=\"caret\"></span>\r" +
    "\n" +
    "            </button>\r" +
    "\n" +
    "            <button type=\"button\" class=\"btn btn-default btn-xs left\"\r" +
    "\n" +
    "                    aria-expanded=\"false\"\r" +
    "\n" +
    "                    ng-show=\"!contact.blocked && !contact.type\"\r" +
    "\n" +
    "                    ng-click=\"openModalAddNewContact($scope)\">\r" +
    "\n" +
    "                <span class=\"glyphicon glyphicon-plus\" aria-hidden=\"true\"></span>\r" +
    "\n" +
    "                Als Kontakt hinzufügen\r" +
    "\n" +
    "            </button>\r" +
    "\n" +
    "            <button type=\"button\" class=\"btn btn-default btn-xs left\"\r" +
    "\n" +
    "                    aria-expanded=\"false\"\r" +
    "\n" +
    "                    ng-show=\"contact.blocked\"\r" +
    "\n" +
    "                    ng-click=\"unblockContact($scope)\">\r" +
    "\n" +
    "                Blockierung aufheben\r" +
    "\n" +
    "            </button>\r" +
    "\n" +
    "            <div class=\"command-connection-state\" ng-hide=\"contact.connected === 'none'\"\r" +
    "\n" +
    "                 data-trigger=\"hover\" data-delay=\"600\" data-title=\"{{tooltipConnectionState.title}}\"\r" +
    "\n" +
    "                 bs-tooltip>\r" +
    "\n" +
    "                <img ng-src=\"{{contact.connectionImage}}\">\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <!--<div class=\"command-connection-block\"\r" +
    "\n" +
    "                 ng-show=\"!contact.blocked && (contact.connected === 'none' || contact.connected === 'contactToUser')\"\r" +
    "\n" +
    "                 data-trigger=\"hover\" data-delay=\"600\" data-title=\"User blockieren\"\r" +
    "\n" +
    "                 bs-tooltip ng-click=\"blockContact($scope)\">\r" +
    "\n" +
    "                <img src=\"/app/img/block.png\">\r" +
    "\n" +
    "            </div>-->\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <!--<div class=\"select-user\" ng-show=\"enableSelect !== 'false'\">\r" +
    "\n" +
    "        <div class=\"s2\">\r" +
    "\n" +
    "            <input type=\"checkbox\" ng-model=\"contact.selected\">\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>-->\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('app/modules/contact/contacting.html',
    "<div id=\"content-page-contact\">\r" +
    "\n" +
    "    <div id=\"centerCol\">\r" +
    "\n" +
    "        <div id=\"inner-centerCol\">\r" +
    "\n" +
    "            <div ng-repeat=\"contact in users.contactingUsers\">\r" +
    "\n" +
    "                <div ng-if=\"showContactingInfo($index)\" class=\"contacting-info\">\r" +
    "\n" +
    "                    <div class=\"contacting-inner-info\">\r" +
    "\n" +
    "                        {{getContactingInfo($index)}}\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <ely-contact-preview enable-select=\"false\" contact=\"contact\"\r" +
    "\n" +
    "                                     privacy-settings=\"users.privacySettings\"\r" +
    "\n" +
    "                                     statistic=\"users.statistic\"></ely-contact-preview>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div ng-show=\"users.numberOfAllContactings > itemsPerPage\"\r" +
    "\n" +
    "                 class=\"pagination\">\r" +
    "\n" +
    "                <ely-pagination-next-previous total-items=\"users.numberOfAllContactings\"\r" +
    "\n" +
    "                                              items-per-page=\"{{itemsPerPage}}\"\r" +
    "\n" +
    "                                              get-pagination-set=\"getContacting\"\r" +
    "\n" +
    "                                              reset-counter=\"resetCounter\"></ely-pagination-next-previous>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div ng-show=\"users.numberOfAllContactings === 0 && users.contactingUsers.length === 0\">\r" +
    "\n" +
    "                <div class=\"no-contact-description\">\r" +
    "\n" +
    "                    <h3>Es hat Dich noch niemand als Kontakt hinzugefügt</h3>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div id=\"leftCol\">\r" +
    "\n" +
    "        <div id=\"inner-leftCol\">\r" +
    "\n" +
    "            <h5>Personen die mich als Kontakt hinzugefügt haben:</h5>\r" +
    "\n" +
    "            <ul id=\"contact-counter\" class=\"list-group\">\r" +
    "\n" +
    "                <li class=\"list-group-item\">\r" +
    "\n" +
    "                    <span class=\"badge\">{{users.numberOfContactingLastDay}}</span>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <div class=\"contact-description-count\">In den letzten 24h</div>\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "                <li class=\"list-group-item\">\r" +
    "\n" +
    "                    <span class=\"badge\">{{users.numberOfContactingLastWeek}}</span>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <div class=\"contact-description-count\">In der letzten Woche</div>\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "                <li class=\"list-group-item\">\r" +
    "\n" +
    "                    <span class=\"badge\">{{users.numberOfContactingLastMonth}}</span>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <div class=\"contact-description-count\">Im letzten Monat</div>\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "                <li class=\"list-group-item\">\r" +
    "\n" +
    "                    <span class=\"badge\">{{users.numberOfAllContactings}}</span>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <div class=\"contact-description-count\">Gesamt</div>\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "            </ul>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div id=\"leftColNav\" ng-include=\"'app/modules/contact/leftNavCol.html'\"></div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('app/modules/contact/leftNavCol.html',
    "<div class=\"nav-placeholder-top\"></div>\n" +
    "\n" +
    "<div class=\"nav-sub-element\" ui-sref=\"contact.myContacts\">\n" +
    "    <div class=\"button-leftNavCol-active-wrapper\">\n" +
    "        <div ui-sref-active=\"button-leftNavCol-active\" ui-sref=\"contact.myContacts\"></div>\n" +
    "    </div>\n" +
    "    <img src=\"app/img/address-book.png\">\n" +
    "</div>\n" +
    "<div class=\"nav-sub-element\" ui-sref=\"contact.contacting\">\n" +
    "    <div class=\"button-leftNavCol-active-wrapper\">\n" +
    "        <div ui-sref-active=\"button-leftNavCol-active\" ui-sref=\"contact.contacting\"></div>\n" +
    "    </div>\n" +
    "    <img src=\"app/img/followMe.png\">\n" +
    "</div>\n" +
    "<div class=\"nav-sub-element-last\" ui-sref=\"home\">\n" +
    "    <img src=\"app/img/home.png\">\n" +
    "</div>"
  );


  $templateCache.put('app/modules/contact/myContact.html',
    "<div id=\"content-page-contact\">\r" +
    "\n" +
    "    <div id=\"centerCol\">\r" +
    "\n" +
    "        <div id=\"inner-centerCol\">\r" +
    "\n" +
    "            <div ng-repeat=\"contact in users.contacts\">\r" +
    "\n" +
    "                <ely-contact-preview contact=\"contact\" statistic=\"users.statistic\"\r" +
    "\n" +
    "                                     privacy-settings=\"users.privacySettings\"\r" +
    "\n" +
    "                                     number-of-contacts=\"users.numberOfContacts\"></ely-contact-preview>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div ng-show=\"!isUserSearch && users.contactsForPagination > itemsPerPage\"\r" +
    "\n" +
    "                 class=\"pagination\">\r" +
    "\n" +
    "                <ely-pagination-next-previous total-items=\"users.contactsForPagination\"\r" +
    "\n" +
    "                                              items-per-page=\"{{itemsPerPage}}\"\r" +
    "\n" +
    "                                              get-pagination-set=\"paginationChanged\"></ely-pagination-next-previous>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div ng-show=\"users.numberOfContacts === 0 && users.contacts.length === 0\">\r" +
    "\n" +
    "                <div class=\"no-contact-description\">\r" +
    "\n" +
    "                    <h3>Du hast noch keine Kontakte</h3>\r" +
    "\n" +
    "                    {{help.content}}\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div id=\"leftCol\">\r" +
    "\n" +
    "        <div id=\"inner-leftCol\">\r" +
    "\n" +
    "            <ely-search-box description=\"Suche nach Personen...\" query=\"query\"\r" +
    "\n" +
    "                            get-query-suggestion=\"getUserSuggestion\"\r" +
    "\n" +
    "                            get-query=\"getUser\"></ely-search-box>\r" +
    "\n" +
    "            <ul id=\"contact-counter\" class=\"list-group\" ng-controller=\"DescriptionCounterCtrl\">\r" +
    "\n" +
    "                <div>\r" +
    "\n" +
    "                    <li class=\"list-group-item\"\r" +
    "\n" +
    "                        ng-class=\"{'group-selected': allContactsSelected}\">\r" +
    "\n" +
    "                        <span class=\"badge\">{{users.numberOfContacts}}</span>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <div class=\"contact-description-count\" ng-click=\"selectedAllContacts()\">\r" +
    "\n" +
    "                            Alle\r" +
    "\n" +
    "                            Kontakte\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </li>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div ng-repeat=\"statistic in users.statistic\">\r" +
    "\n" +
    "                    <li class=\"list-group-item\"\r" +
    "\n" +
    "                        ng-class=\"{'group-selected': statistic.selected}\">\r" +
    "\n" +
    "                        <span class=\"badge\">{{statistic.count}}</span>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <div class=\"contact-description-count\"\r" +
    "\n" +
    "                             ng-click=\"selectedStatisticType(statistic)\">{{statistic.type}}\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </li>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </ul>\r" +
    "\n" +
    "            <div id=\"privacy-link\">\r" +
    "\n" +
    "                <a ui-sref=\"settings.privacy\">Privatsphären Einstellungen verwalten...</a>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div id=\"help-my-contact\" data-animation=\"am-fade-and-scale\" data-placement=\"center\" data-backdrop=\"false\"\r" +
    "\n" +
    "                 bs-modal=\"help\">\r" +
    "\n" +
    "                <img src=\"/app/img/help.png\">\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div id=\"leftColNav\" ng-include=\"'app/modules/contact/leftNavCol.html'\"></div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('app/modules/contact/services/userActionsModalDescription.html',
    "<div class=\"modal\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\r" +
    "\n" +
    "    <div id=\"modal-dialog-set-privacy\" class=\"modal-dialog\">\r" +
    "\n" +
    "        <div class=\"modal-content\">\r" +
    "\n" +
    "            <div class=\"modal-header\" ng-show=\"title\"><h4 class=\"modal-title\" ng-bind=\"title\"></h4></div>\r" +
    "\n" +
    "            <div class=\"modal-body\">\r" +
    "\n" +
    "                <button type=\"button\" class=\"btn btn-default privacy-selection\"\r" +
    "\n" +
    "                        ng-model=\"contact.selectedPrivacySetting\" trigger=\"click\"\r" +
    "\n" +
    "                        bs-options=\"privacySetting.type as privacySetting.type for privacySetting in contact.privacySettings\"\r" +
    "\n" +
    "                        data-placeholder=\"\"\r" +
    "\n" +
    "                        bs-select>\r" +
    "\n" +
    "                    Action <span class=\"caret\"></span>\r" +
    "\n" +
    "                </button>\r" +
    "\n" +
    "                <div class=\"privacy-description\">\r" +
    "\n" +
    "                    Wähle eine Privatsphären Einstellung\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"modal-footer\">\r" +
    "\n" +
    "                <button type=\"button\" class=\"btn btn-default\" ng-click=\"$hide()\">Abbrechen</button>\r" +
    "\n" +
    "                <button type=\"button\" class=\"btn btn-default\" ng-click=\"send($scope, $hide)\">{{actionDescription}}</button>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('app/modules/contact/userDetail.html',
    "<div id=\"content-page-contact-details\">\r" +
    "\n" +
    "    <div id=\"centerCol\">\r" +
    "\n" +
    "        <div id=\"inner-centerCol\">\r" +
    "\n" +
    "            <div class=\"profile-detail-content-group\">\r" +
    "\n" +
    "                <div id=\"profile-image\">\r" +
    "\n" +
    "                    <img class=\"img-rounded img-responsive\" ng-src=\"{{contact.profileUrl}}\"/>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div id=\"profile-data\">\r" +
    "\n" +
    "                    <div id=\"profile-data-overview\">\r" +
    "\n" +
    "                        <div id=\"profile-data-name\">{{contact.name}}</div>\r" +
    "\n" +
    "                        <div id=\"profile-connection-state\" ng-hide=\"contact.connected === 'none'\" data-trigger=\"hover\" data-delay=\"600\"\r" +
    "\n" +
    "                             data-title=\"{{tooltipConnectionState.title}}\"\r" +
    "\n" +
    "                             bs-tooltip>\r" +
    "\n" +
    "                            <img ng-src=\"{{contact.connectionImage}}\">\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div id=\"profile-connection-type\">\r" +
    "\n" +
    "                            <div class=\"profile-inner-connection-type\" ng-click=\"openModalUpdateType($scope)\" ng-show=\"contact.type\">\r" +
    "\n" +
    "                                ({{contact.type}})\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"profile-data-description\">{{contact.country}}</div>\r" +
    "\n" +
    "                        <div class=\"profile-data-description\">{{contact.birthday}}</div>\r" +
    "\n" +
    "                        <div class=\"profile-data-description\">{{contact.street}}</div>\r" +
    "\n" +
    "                        <div class=\"profile-data-description\">{{contact.place}}</div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div id=\"profile-command\">\r" +
    "\n" +
    "                        <button type=\"button\" class=\"btn btn-default\"\r" +
    "\n" +
    "                                aria-expanded=\"false\"\r" +
    "\n" +
    "                                ng-show=\"!contact.type\"\r" +
    "\n" +
    "                                ng-click=\"openModalAddNewContact($scope)\">\r" +
    "\n" +
    "                            <span class=\"glyphicon glyphicon-plus\" aria-hidden=\"true\"></span>\r" +
    "\n" +
    "                            Als Kontakt hinzufügen\r" +
    "\n" +
    "                        </button>\r" +
    "\n" +
    "                        <button type=\"button\" class=\"btn btn-default\"\r" +
    "\n" +
    "                                aria-expanded=\"false\"\r" +
    "\n" +
    "                                ng-click=\"sendMessage(userId, contact.name)\">\r" +
    "\n" +
    "                            Nachricht senden\r" +
    "\n" +
    "                        </button>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"profile-detail-content-group\" ng-show=\"contacts.length > 0\">\r" +
    "\n" +
    "                <div id=\"profile-contacts-title-female\" ng-show=\"contact.female\">\r" +
    "\n" +
    "                    Sie hat {{numberOfContacts}} Kontakte ({{numberOfSameContacts}} gemeinsame Kontakte)\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div id=\"profile-contacts-title-male\" ng-show=\"!contact.female\">\r" +
    "\n" +
    "                    Er hat {{numberOfContacts}} Kontakte ({{numberOfSameContacts}} gemeinsame Kontakte)\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"profile-contacts-preview\" ng-repeat=\"user in contacts\" ng-click=\"openUserDetails(user.id)\">\r" +
    "\n" +
    "                    <div class=\"profile-contacts-preview-content\">\r" +
    "\n" +
    "                        <img ng-src=\"{{user.profileUrl}}\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <div class=\"profile-contacts-preview-name\">\r" +
    "\n" +
    "                            <div class=\"name\">{{user.name}}</div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"profile-contact-expander\" ng-show=\"contacts.length < numberOfContacts - 1\" ng-click=\"appendContacts()\"><img\r" +
    "\n" +
    "                        src=\"app/img/expand-down.png\"/></div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <div id=\"leftColNav\" ng-include=\"'app/modules/contact/leftNavCol.html'\"></div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('app/modules/directives/formTextInput/template.html',
    "<div class=\"form-group ely-form-text-input\" ng-class=\"{'has-error': showError && (visited || submitFailed)}\">\r" +
    "\n" +
    "    <label for=\"{{inputName}}\" class=\"col-sm-4 control-label\">{{label}}\r" +
    "\n" +
    "        <em ng-show=\"required !== 'true'\">(optional)</em>\r" +
    "\n" +
    "    </label>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <div class=\"col-sm-8\">\r" +
    "\n" +
    "        <input name=\"{{inputName}}\" ng-model=\"submitModel\"\r" +
    "\n" +
    "               class=\"form-control\" id=\"{{inputName}}\"\r" +
    "\n" +
    "               placeholder=\"{{inputPlaceholder}}\" ng-blur=\"visited = true\"\r" +
    "\n" +
    "               ng-maxlength=\"{{maxLength}}\" ng-required=\"{{required === 'true'}}\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <div class=\"ely-input-error-wrapper\">\r" +
    "\n" +
    "            <div class=\"ely-input-image-error\" ng-show=\"showError && (visited || submitFailed)\"\r" +
    "\n" +
    "                 data-template=\"app/modules/util/tooltip/tooltipError.html\" data-trigger=\"hover\"\r" +
    "\n" +
    "                 data-placement=\"left\"\r" +
    "\n" +
    "                 data-container=\"body\"\r" +
    "\n" +
    "                 bs-tooltip=\"errorDescription\">\r" +
    "\n" +
    "                <img src=\"app/img/error.png\"/>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('app/modules/directives/imageCropper/template.html',
    "<div class=\"cropper-outer-container\">\r" +
    "\n" +
    "    <img src=\"\" ng-show=\"image && image.trim() !== ''\">\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('app/modules/directives/paginationNextPrevious/template.html',
    "<div class=\"paginationNextPrevious\">\r" +
    "\n" +
    "    <div class=\"paginationNextPrevious-wrapper\">\r" +
    "\n" +
    "        <div class=\"paginationElement\" ng-class=\"{disabled: currentPagination === 1}\"\r" +
    "\n" +
    "             ng-click=\"clickPrevious()\">\r" +
    "\n" +
    "            <img src=\"app/img/arrow-previous.png\">\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"paginationElement\"\r" +
    "\n" +
    "             ng-class=\"{disabled: currentPagination === currentPaginationRange}\"\r" +
    "\n" +
    "             ng-click=\"clickNext()\">\r" +
    "\n" +
    "            <img src=\"app/img/arrow-next.png\">\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('app/modules/directives/searchBox/template.html',
    "<div class=\"searchBoxForm\">\r" +
    "\n" +
    "    <div class=\"input-group\">\r" +
    "\n" +
    "        <input class=\"form-control\" placeholder=\"{{description}}\" ng-model=\"query\"\r" +
    "\n" +
    "               ng-keypress=\"sendGetQuery($event)\"\r" +
    "\n" +
    "               bs-options=\"querySuggestion.name as querySuggestion.name for querySuggestion in getQuerySuggestion($viewValue)\"\r" +
    "\n" +
    "               data-trigger=\"focus\" bs-typeahead>\r" +
    "\n" +
    "        <span class=\"input-group-btn\">\r" +
    "\n" +
    "            <button class=\"btn btn-default\" type=\"button\" ng-click=\"getQuery(query)\"><span\r" +
    "\n" +
    "                    class=\"glyphicon glyphicon-search\" aria-hidden=\"true\"></span></button>\r" +
    "\n" +
    "        </span>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('app/modules/directives/sendButton/template.html',
    "<div class=\"ely-submit-button\">\r" +
    "\n" +
    "    <button type=\"submit\"\r" +
    "\n" +
    "            class=\"btn btn-default\"\r" +
    "\n" +
    "            ng-click=\"sendAllData()\"\r" +
    "\n" +
    "            ng-class=\"{disabled: categoryFinishedButtonDisabled}\">\r" +
    "\n" +
    "        {{buttonDescription}}\r" +
    "\n" +
    "    </button>\r" +
    "\n" +
    "    <div class=\"ely-submit-button-error\" ng-show=\"showError\">\r" +
    "\n" +
    "        <img src=\"app/img/error.png\" ng-show=\"showError\" data-template=\"app/modules/util/tooltip/tooltipError.html\" data-trigger=\"hover\"\r" +
    "\n" +
    "             data-placement=\"{{errorPlacement}}\" bs-tooltip=\"errorDescription\"/>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"ely-submit-button-success\" ng-show=\"showSuccess\">\r" +
    "\n" +
    "        <img src=\"app/img/success.png\" ng-show=\"showSuccess\"/>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('app/modules/directives/spin/template.html',
    "<div class=\"spin\">\r" +
    "\n" +
    "    <div id=\"spinner-content\"></div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('app/modules/directives/starRating/template.html',
    "<div class=\"ely-star-rating\" ng-mouseleave=\"resetToSelected()\">\r" +
    "\n" +
    "    <img ng-src=\"{{star0}}\" ng-mouseover=\"mouseOverStar(0)\" ng-mousedown=\"starSelected(1)\" ng-class=\"{'ely-star-rating-small': isSmall, 'ely-star-rating-x-small': isXSmall}\">\r" +
    "\n" +
    "    <img ng-src=\"{{star1}}\" ng-mouseover=\"mouseOverStar(1)\" ng-mousedown=\"starSelected(2)\" ng-class=\"{'ely-star-rating-small': isSmall, 'ely-star-rating-x-small': isXSmall}\">\r" +
    "\n" +
    "    <img ng-src=\"{{star2}}\" ng-mouseover=\"mouseOverStar(2)\" ng-mousedown=\"starSelected(3)\" ng-class=\"{'ely-star-rating-small': isSmall, 'ely-star-rating-x-small': isXSmall}\">\r" +
    "\n" +
    "    <img ng-src=\"{{star3}}\" ng-mouseover=\"mouseOverStar(3)\" ng-mousedown=\"starSelected(4)\" ng-class=\"{'ely-star-rating-small': isSmall, 'ely-star-rating-x-small': isXSmall}\">\r" +
    "\n" +
    "    <img ng-src=\"{{star4}}\" ng-mouseover=\"mouseOverStar(4)\" ng-mousedown=\"starSelected(5)\" ng-class=\"{'ely-star-rating-small': isSmall, 'ely-star-rating-x-small': isXSmall}\">\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('app/modules/home/home.html',
    "<div class=\"navigation\">\n" +
    "    <ely-home-nav-element description=\"Kontakte\" image-url=\"app/img/home/contact.png\"\n" +
    "                          nav-to=\"contact.myContacts\"></ely-home-nav-element>\n" +
    "    <ely-home-nav-element description=\"Nachrichten\" image-url=\"app/img/home/email.png\"\n" +
    "                          nav-to=\"message.threads\" event-description=\"messageText\"></ely-home-nav-element>\n" +
    "    <ely-home-nav-element description=\"Seiten\" image-url=\"app/img/home/page.png\"\n" +
    "                          nav-to=\"page.overview\"></ely-home-nav-element>\n" +
    "</div>"
  );


  $templateCache.put('app/modules/home/homeNavElement/template.html',
    "<div class=\"navigation-element\">\r" +
    "\n" +
    "    <a ui-sref={{navTo}}>\r" +
    "\n" +
    "        <div class=\"navigation-element-content\">\r" +
    "\n" +
    "            <img ng-src=\"{{imageUrl}}\"/>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <div class=\"navigation-element-description\">{{description}}</div>\r" +
    "\n" +
    "            <div class=\"navigation-element-info\">{{eventDescription}}</div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </a>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('app/modules/messages/conversation.html',
    "<div id=\"content-messages\">\r" +
    "\n" +
    "    <div ng-controller=\"ConversationActionsCtrl\">\r" +
    "\n" +
    "        <div id=\"centerCol\">\r" +
    "\n" +
    "            <div id=\"inner-centerCol\">\r" +
    "\n" +
    "                <div class=\"add-message\" ng-style=\"settings.textInputWrapperStyle\">\r" +
    "\n" +
    "                    <div class=\"input-group\">\r" +
    "\n" +
    "                    <textarea class=\"form-control\" placeholder=\"Nachricht\"\r" +
    "\n" +
    "                              ng-style=\"settings.textInputStyle\"\r" +
    "\n" +
    "                              ng-keyup=\"settings.checkHeightOfInput($event)\"\r" +
    "\n" +
    "                              ng-maxlength=\"1000\"\r" +
    "\n" +
    "                              ng-model=\"settings.newMessage\"></textarea>\r" +
    "\n" +
    "                    <span class=\"input-group-btn\">\r" +
    "\n" +
    "                        <button class=\"btn btn-default\" type=\"button\" ng-click=\"sendMessage()\"\r" +
    "\n" +
    "                                ng-style=\"settings.textInputStyle\"\r" +
    "\n" +
    "                                ng-class=\"{'disabled': settings.newMessage.trim() === ''}\">Senden\r" +
    "\n" +
    "                        </button>\r" +
    "\n" +
    "                    </span>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div ng-repeat=\"message in settings.thread.messages\" class=\"message-view\">\r" +
    "\n" +
    "                    <div class=\"message-inner-view\">\r" +
    "\n" +
    "                        <div class=\"message-view-image\">\r" +
    "\n" +
    "                            <img ng-src=\"{{message.profileUrl}}\" class=\"img-rounded\">\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"message-view-content\">\r" +
    "\n" +
    "                            <div class=\"message-view-title\">\r" +
    "\n" +
    "                                <div class=\"message-view-name\">\r" +
    "\n" +
    "                                    {{message.name}}\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                                <div class=\"message-view-timestamp\">\r" +
    "\n" +
    "                                    {{getFormattedDate(message.timestamp)}}\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <div class=\"message-view-text\">{{message.text}}</div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div ng-show=\"settings.thread.numberOfMessages > settings.itemsPerPage\"\r" +
    "\n" +
    "                     class=\"pagination\">\r" +
    "\n" +
    "                    <ely-pagination-next-previous total-items=\"settings.thread.numberOfMessages\"\r" +
    "\n" +
    "                                                  items-per-page=\"{{settings.itemsPerPage}}\"\r" +
    "\n" +
    "                                                  get-pagination-set=\"settings.getThread\"></ely-pagination-next-previous>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div id=\"leftCol\">\r" +
    "\n" +
    "            <div id=\"inner-leftCol\">\r" +
    "\n" +
    "                <div id=\"thread-description\">{{settings.thread.threadDescription}}</div>\r" +
    "\n" +
    "                <ul id=\"message-index\" class=\"list-group\">\r" +
    "\n" +
    "                    <div ng-repeat=\"thread in settings.threads.threads\"\r" +
    "\n" +
    "                         ng-if=\"thread.threadId !== settings.selectedThreadId\">\r" +
    "\n" +
    "                        <li class=\"list-group-item\"\r" +
    "\n" +
    "                            ng-click=\"settings.openThread(thread.threadId, thread.isGroupThread)\">\r" +
    "\n" +
    "                            <span class=\"badge\" ng-if=\"thread.hasNotReadMessages\">{{thread.numberOfUnreadMessages}}</span>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <div class=\"message-unread-count\" data-trigger=\"hover\" data-delay=\"1000\"\r" +
    "\n" +
    "                                 data-title=\"{{thread.description}}\"\r" +
    "\n" +
    "                                 bs-tooltip>{{thread.description}}\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </li>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </ul>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div id=\"leftColNav\" ng-include=\"'app/modules/messages/leftNavCol.html'\"></div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('app/modules/messages/leftNavCol.html',
    "<div class=\"nav-placeholder-top\"></div>\n" +
    "\n" +
    "<div class=\"nav-sub-element\" ui-sref=\"message.threads\">\n" +
    "    <div class=\"button-leftNavCol-active-wrapper\">\n" +
    "        <div ui-sref-active=\"button-leftNavCol-active\" ui-sref=\"message.threads\"></div>\n" +
    "    </div>\n" +
    "    <img src=\"app/img/threads.png\">\n" +
    "</div>\n" +
    "<div class=\"nav-sub-element-last\" ui-sref=\"home\">\n" +
    "    <img src=\"app/img/home.png\">\n" +
    "</div>"
  );


  $templateCache.put('app/modules/messages/threads.html',
    "<div id=\"content-threads\">\r" +
    "\n" +
    "    <div id=\"centerCol\">\r" +
    "\n" +
    "        <div id=\"inner-centerCol\">\r" +
    "\n" +
    "            <div ng-if=\"!search\">\r" +
    "\n" +
    "                <div ng-repeat=\"thread in threads.threads\" class=\"thread-preview\"\r" +
    "\n" +
    "                     ng-click=\"openThread(thread.threadId, thread.isGroupThread)\">\r" +
    "\n" +
    "                    <div class=\"thread-preview-image\">\r" +
    "\n" +
    "                        <img ng-src=\"{{thread.profileUrl}}\" class=\"img-circle\">\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"thread-preview-text\">\r" +
    "\n" +
    "                        <div class=\"thread-preview-description\">\r" +
    "\n" +
    "                            {{thread.description}}\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div ng-class=\"{'thread-preview-previewText': !thread.hasNotReadMessages, 'thread-preview-previewTextBold': thread.hasNotReadMessages}\">\r" +
    "\n" +
    "                            {{thread.previewText}}\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div ng-class=\"{'thread-preview-date': !thread.hasNotReadMessages, 'thread-preview-dateBold': thread.hasNotReadMessages}\">\r" +
    "\n" +
    "                        {{getFormattedDate(thread.lastUpdate)}}\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div ng-show=\"threads.numberOfThreads > itemsPerPage\"\r" +
    "\n" +
    "                     class=\"pagination\">\r" +
    "\n" +
    "                    <ely-pagination-next-previous total-items=\"threads.numberOfThreads\"\r" +
    "\n" +
    "                                                  items-per-page=\"{{itemsPerPage}}\"\r" +
    "\n" +
    "                                                  get-pagination-set=\"getThreads\"></ely-pagination-next-previous>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div ng-if=\"search.threads.length > 0\">\r" +
    "\n" +
    "                <div ng-repeat=\"thread in search.threads\" class=\"thread-preview\"\r" +
    "\n" +
    "                     ng-class=\"{'thread-preview-add-thread': !thread.previewText, 'thread-preview': thread.previewText}\"\r" +
    "\n" +
    "                     ng-click=\"openThread(thread.threadId, thread.isGroupThread)\">\r" +
    "\n" +
    "                    <div class=\"thread-preview-image\">\r" +
    "\n" +
    "                        <img ng-src=\"{{thread.profileUrl}}\" class=\"img-circle\">\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"thread-preview-text\">\r" +
    "\n" +
    "                        <div ng-class=\"{'thread-preview-description': thread.previewText, 'thread-preview-description-center': !thread.previewText}\">\r" +
    "\n" +
    "                            {{thread.description}}\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"thread-preview-previewText\" ng-if=\"thread.previewText\">\r" +
    "\n" +
    "                            {{thread.previewText}}\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div id=\"add-new-single-thread\" ng-if=\"!thread.previewText\">\r" +
    "\n" +
    "                        <button class=\"btn btn-default\" type=\"button\" ng-click=\"addNewSingleThread(thread.userId, thread.description)\">\r" +
    "\n" +
    "                            <span class=\"glyphicon glyphicon-plus\" aria-hidden=\"true\"></span> Konversation starten\r" +
    "\n" +
    "                        </button>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div ng-if=\"search.threads.length === 0\">\r" +
    "\n" +
    "                Es konnte leider keiner deiner Kontakte mit dem Namen {{query}} gefunden werden. Du kannst nur Nachrichten an Personen senden, welche du als Kontakt hinzugefügt hast.\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div id=\"leftCol\">\r" +
    "\n" +
    "        <div id=\"inner-leftCol\">\r" +
    "\n" +
    "            <ely-search-box description=\"Nachricht an...\" query=\"query\"\r" +
    "\n" +
    "                            get-query-suggestion=\"getSuggestion\"\r" +
    "\n" +
    "                            get-query=\"getThreadsOrContacts\"></ely-search-box>\r" +
    "\n" +
    "            <!--<div id=\"add-new-group-button\">\r" +
    "\n" +
    "                <button class=\"btn btn-default\" type=\"button\" ng-click=\"sendMessage()\">\r" +
    "\n" +
    "                    <span class=\"glyphicon glyphicon-plus\" aria-hidden=\"true\"></span> Neuer\r" +
    "\n" +
    "                    Gruppenchat\r" +
    "\n" +
    "                </button>\r" +
    "\n" +
    "            </div>-->\r" +
    "\n" +
    "            <ul id=\"message-index\" class=\"list-group\">\r" +
    "\n" +
    "                <div ng-repeat=\"thread in threads.threads\">\r" +
    "\n" +
    "                    <li class=\"list-group-item\"\r" +
    "\n" +
    "                        ng-click=\"openThread(thread.threadId, thread.isGroupThread)\">\r" +
    "\n" +
    "                        <span class=\"badge\" ng-if=\"thread.hasNotReadMessages\">{{thread.numberOfUnreadMessages}}</span>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <div class=\"message-unread-count\" data-trigger=\"hover\" data-delay=\"1000\"\r" +
    "\n" +
    "                             data-title=\"{{thread.description}}\"\r" +
    "\n" +
    "                             bs-tooltip>{{thread.description}}\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </li>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </ul>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div id=\"leftColNav\" ng-include=\"'app/modules/messages/leftNavCol.html'\"></div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('app/modules/navigation/loggedInHeader.html',
    "<div id=\"public-header\" ng-controller=\"LoggedInHeaderCtrl\">\r" +
    "\n" +
    "    <div>\r" +
    "\n" +
    "        <div class=\"rightHeaderNavElement\">\r" +
    "\n" +
    "            <ul>\r" +
    "\n" +
    "                <li>\r" +
    "\n" +
    "                    <img src=\"app/img/settingsNav.png\">\r" +
    "\n" +
    "                    <ul>\r" +
    "\n" +
    "                        <li class=\"first\"></li>\r" +
    "\n" +
    "                        <li ui-sref=\"settings.profile\">Einstellungen</li>\r" +
    "\n" +
    "                        <li ng-click=\"logout()\">Logout</li>\r" +
    "\n" +
    "                    </ul>\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "            </ul>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"leftHeaderNavElement\" ui-sref=\"settings.profile\">\r" +
    "\n" +
    "            <img ng-src=\"{{userHeaderInfo.profileImage}}\" class=\"img-circle\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <div id=\"header-user-name\">{{userHeaderInfo.name}}</div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('app/modules/navigation/publicHeader.html',
    "<div id=\"public-header\">\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('app/modules/page/createPage/commonBook.html',
    "<div ng-controller=\"PageCreateCommonBookCtrl\">\r" +
    "\n" +
    "    <ely-form-text-input label=\"Author\" input-name=\"inputAuthor\" input-placeholder=\"Author\"\r" +
    "\n" +
    "                         profile-form=\"commonForm\" submit-model=\"page.authors\"\r" +
    "\n" +
    "                         max-length=\"255\" required=\"true\"></ely-form-text-input>\r" +
    "\n" +
    "    <ely-form-text-input label=\"Erscheinungsdatum\" input-name=\"inputPublicationDate\" input-placeholder=\"Erscheinungsdatum\"\r" +
    "\n" +
    "                         profile-form=\"commonForm\" submit-model=\"page.publicationDate\"\r" +
    "\n" +
    "                         max-length=\"255\" required=\"true\"\r" +
    "\n" +
    "                         custom-error-description=\"Gib ein g&#252ltiges Datum an (z.B. {{getDateExample()}})\"></ely-form-text-input>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('app/modules/page/createPage/commonSection.html',
    "<div id=\"content-create-page-common\" ng-show=\"state.actual === 3\" ng-controller=\"PageCreateCommonSectionCtrl\">\r" +
    "\n" +
    "    <form name=\"commonForm\" class=\"form-horizontal\" role=\"form\" novalidate>\r" +
    "\n" +
    "        <div class=\"website-structure-header\">\r" +
    "\n" +
    "            <div class=\"website-structure-header-title\">\r" +
    "\n" +
    "                <h2>Allgemeines</h2>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div id=\"content-create-page-common-picture-area\">\r" +
    "\n" +
    "            <img ng-src=\"{{imagePreview}}\" class=\"content-create-page-common-picture\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <div>\r" +
    "\n" +
    "                <button type=\"button\" class=\"btn btn-default content-create-page-common-get-picture\"\r" +
    "\n" +
    "                        data-animation=\"am-fade-and-scale\" data-placement=\"center\"\r" +
    "\n" +
    "                        data-backdrop=\"static\"\r" +
    "\n" +
    "                        data-template=\"app/modules/util/file/previewFile.html\" bs-modal=\"modal\">\r" +
    "\n" +
    "                    Titelbild ausw&aumlhlen..\r" +
    "\n" +
    "                </button>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div id=\"content-create-page-common-area\">\r" +
    "\n" +
    "            <div id=\"content-create-page-common-inner-area\">\r" +
    "\n" +
    "                <div ng-include=\"'app/modules/page/createPage/commonBook.html'\" ng-show=\"category.seletedCategoryType === 'BookPage'\"></div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div id=\"content-create-page-common-description-area\">\r" +
    "\n" +
    "                    <textarea class=\"form-control\" placeholder=\"Beschreibung\"\r" +
    "\n" +
    "                              ng-maxlength=\"10000\"\r" +
    "\n" +
    "                              maxLength=\"10000\"\r" +
    "\n" +
    "                              ng-model=\"page.description\" required></textarea>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div>\r" +
    "\n" +
    "            <button type=\"submit\"\r" +
    "\n" +
    "                    class=\"btn btn-default content-create-page-common-commands\"\r" +
    "\n" +
    "                    ng-click=\"createPage()\"\r" +
    "\n" +
    "                    ng-class=\"{disabled: commonForm.$invalid}\">\r" +
    "\n" +
    "                Seite erstellen\r" +
    "\n" +
    "            </button>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </form>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('app/modules/page/createPage/pageCreate.html',
    "<div id=\"content-page-create\">\r" +
    "\n" +
    "    <div id=\"centerCol\">\r" +
    "\n" +
    "        <div id=\"inner-centerCol\">\r" +
    "\n" +
    "            <div class=\"website-structure-header\">\r" +
    "\n" +
    "                <div class=\"website-structure-header-title\">\r" +
    "\n" +
    "                    <h2>Kategorie ausw&aumlhlen</h2>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div id=\"content-create-category\" ng-controller=\"PageCreateSelectCategoryCtrl\">\r" +
    "\n" +
    "                <form class=\"form-horizontal\" name=\"categoryForm\" role=\"form\" novalidate>\r" +
    "\n" +
    "                    <div class=\"form-group\">\r" +
    "\n" +
    "                        <button type=\"button\" class=\"btn btn-default content-create-category-element\" ng-model=\"category.selectedCategory\"\r" +
    "\n" +
    "                                name=\"inputCategory\"\r" +
    "\n" +
    "                                id=\"inputCategoryId\"\r" +
    "\n" +
    "                                bs-options=\"category as category for category in categories\"\r" +
    "\n" +
    "                                data-placeholder=\"Kategorie ausw&aumlhlen\"\r" +
    "\n" +
    "                                ng-class=\"{disabled: !categoryFirstSelect}\"\r" +
    "\n" +
    "                                bs-select>\r" +
    "\n" +
    "                            <span class=\"caret\"></span>\r" +
    "\n" +
    "                        </button>\r" +
    "\n" +
    "                        <button type=\"button\" class=\"btn btn-default content-create-category-element\" ng-model=\"category.selectedLanguage\"\r" +
    "\n" +
    "                                name=\"inputLanguage\"\r" +
    "\n" +
    "                                id=\"inputLanguageId\"\r" +
    "\n" +
    "                                bs-options=\"language.description as language.description for language in languages\"\r" +
    "\n" +
    "                                data-placeholder=\"Sprache der Seite ausw&aumlhlen\"\r" +
    "\n" +
    "                                ng-class=\"{disabled: !categoryFirstSelect}\"\r" +
    "\n" +
    "                                bs-select>\r" +
    "\n" +
    "                            <span class=\"caret\"></span>\r" +
    "\n" +
    "                        </button>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"form-group content-create-category-element\">\r" +
    "\n" +
    "                        <input name=\"inputTitle\" ng-model=\"category.title\"\r" +
    "\n" +
    "                               class=\"form-control\" id=\"inputTitleId\"\r" +
    "\n" +
    "                               placeholder=\"Titel\"\r" +
    "\n" +
    "                               maxLength=\"100\">\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"form-group content-create-category-element\">\r" +
    "\n" +
    "                        <div>\r" +
    "\n" +
    "                            <button type=\"submit\"\r" +
    "\n" +
    "                                    class=\"btn btn-default category-select-finished\"\r" +
    "\n" +
    "                                    ng-click=\"categorySelectFinished()\"\r" +
    "\n" +
    "                                    ng-class=\"{disabled: categoryFinishedButtonDisabled}\"\r" +
    "\n" +
    "                                    ng-show=\"categoryFirstSelect\">\r" +
    "\n" +
    "                                Fertig\r" +
    "\n" +
    "                            </button>\r" +
    "\n" +
    "                            <button type=\"submit\"\r" +
    "\n" +
    "                                    class=\"btn btn-default category-select-finished\"\r" +
    "\n" +
    "                                    ng-click=\"categorySelectFinished()\"\r" +
    "\n" +
    "                                    ng-show=\"!categoryFirstSelect && state.actual === 1\">\r" +
    "\n" +
    "                                Titel umbenennen\r" +
    "\n" +
    "                            </button>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </form>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div id=\"content-create-page-suggestions\" ng-show=\"state.actual === 2\">\r" +
    "\n" +
    "                <div class=\"website-structure-header\">\r" +
    "\n" +
    "                    <div class=\"website-structure-header-title\">\r" +
    "\n" +
    "                        <h2>Existiert die Seite die Sie erstellen m&oumlchten bereits?</h2>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div id=\"page-preview-container\">\r" +
    "\n" +
    "                    <div ng-repeat=\"pagePreview in page.pageSuggestions.pages\">\r" +
    "\n" +
    "                        <ely-page-preview page-preview=\"pagePreview\"></ely-page-preview>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div id=\"content-create-page-suggestion-commands\">\r" +
    "\n" +
    "                    <button type=\"submit\"\r" +
    "\n" +
    "                            class=\"btn btn-default content-create-page-suggestion-commands-buttons\"\r" +
    "\n" +
    "                            ng-click=\"suggestionContinue()\">\r" +
    "\n" +
    "                        Weiter\r" +
    "\n" +
    "                    </button>\r" +
    "\n" +
    "                    <button type=\"submit\"\r" +
    "\n" +
    "                            class=\"btn btn-default content-create-page-suggestion-commands-buttons\"\r" +
    "\n" +
    "                            ng-click=\"abortCreatePage()\">\r" +
    "\n" +
    "                        Seite Erstellen Abbrechen\r" +
    "\n" +
    "                    </button>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div ng-include=\"'app/modules/page/createPage/commonSection.html'\"></div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div id=\"leftColNav\" ng-include=\"'app/modules/page/leftNavCol.html'\"></div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('app/modules/page/leftNavCol.html',
    "<div class=\"nav-placeholder-top\"></div>\n" +
    "\n" +
    "<div class=\"nav-sub-element\" ui-sref=\"page.overview\">\n" +
    "    <div class=\"button-leftNavCol-active-wrapper\">\n" +
    "        <div ui-sref-active=\"button-leftNavCol-active\" ui-sref=\"page.overview\"></div>\n" +
    "    </div>\n" +
    "    <img src=\"app/img/page/overview.png\">\n" +
    "</div>\n" +
    "<div class=\"nav-sub-element-last\" ui-sref=\"home\">\n" +
    "    <img src=\"app/img/home.png\">\n" +
    "</div>"
  );


  $templateCache.put('app/modules/page/pageDetail.html',
    "<div id=\"content-page-detail\">\r" +
    "\n" +
    "    <div id=\"centerCol\">\r" +
    "\n" +
    "        <div id=\"inner-centerCol\">\r" +
    "\n" +
    "            <div id=\"page-detail-rightCol\">\r" +
    "\n" +
    "                <div class=\"page-detail-select-contact-visible\">\r" +
    "\n" +
    "                    <input type=\"checkbox\" ng-model=\"contact\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <div class=\"page-detail-select-contact-visible-description\">\r" +
    "\n" +
    "                        Nur Kontakte\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"page-detail-user-recommendation-preview\" ng-show=\"pageDetail.recommendation.user\">\r" +
    "\n" +
    "                        <div class=\"page-detail-recommendation-preview-thumbnail\">\r" +
    "\n" +
    "                            <img ng-src=\"{{pageDetail.recommendation.user.profileUrl}}\" class=\"img-circle\">\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"page-detail-recommendation-preview-list\">\r" +
    "\n" +
    "                            <div class=\"page-detail-recommendation-preview-name\">\r" +
    "\n" +
    "                                Meine Bewertung\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <div class=\"page-detail-recommendation-preview-rating\">\r" +
    "\n" +
    "                                <ely-star-rating is-readonly=\"true\" is-small=\"true\"\r" +
    "\n" +
    "                                                 number-of-selected-stars-readonly=\"pageDetail.recommendation.user.rating\"></ely-star-rating>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"page-detail-recommendation-preview-comment\">\r" +
    "\n" +
    "                            {{pageDetail.recommendation.user.comment}}\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"page-detail-users-recommendation-preview\" ng-repeat=\"user in pageDetail.recommendation.users\">\r" +
    "\n" +
    "                        <div class=\"page-detail-recommendation-preview-thumbnail\">\r" +
    "\n" +
    "                            <img ng-src=\"{{user.profileUrl}}\" class=\"img-circle\">\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"page-detail-recommendation-preview-list\">\r" +
    "\n" +
    "                            <div class=\"page-detail-recommendation-preview-name\">\r" +
    "\n" +
    "                                {{user.name}}\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <div class=\"page-detail-recommendation-preview-rating\">\r" +
    "\n" +
    "                                <ely-star-rating is-readonly=\"true\" is-small=\"true\"\r" +
    "\n" +
    "                                                 number-of-selected-stars-readonly=\"user.rating\"></ely-star-rating>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"page-detail-recommendation-preview-comment\">\r" +
    "\n" +
    "                            {{user.comment}}\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div id=\"page-detail-header\">\r" +
    "\n" +
    "                <div id=\"page-detail-inner-header\">\r" +
    "\n" +
    "                    <div class=\"page-detail-header-image\">\r" +
    "\n" +
    "                        <img ng-src=\"{{pageDetail.page.titleUrl}}\">\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"page-detail-header-list\">\r" +
    "\n" +
    "                        <div class=\"page-detail-header-title\">\r" +
    "\n" +
    "                            {{pageDetail.page.title}}\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"page-detail-header-category\">\r" +
    "\n" +
    "                            Kategorie: {{category}}\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div ng-show=\"contributorsWithProfile.length > 0 || contributors.length > 0\">\r" +
    "\n" +
    "                            <div class=\"page-detail-contributor-title\">\r" +
    "\n" +
    "                                {{contributorPrefix}}\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <div class=\"page-detail-header-contributor-with-Profile\" ng-repeat=\"contributor in contributorsWithProfile\"\r" +
    "\n" +
    "                                 ng-click=\"openUserDetail(contributor.userId, contributor.isLoggedInUser)\">\r" +
    "\n" +
    "                                <div ng-if=\"contributor.isLoggedInUser\">Ich</div>\r" +
    "\n" +
    "                                <div ng-if=\"!contributor.isLoggedInUser\">{{contributor.name}}</div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <div class=\"page-detail-header-contributor\" ng-repeat=\"contributor in contributors\">\r" +
    "\n" +
    "                                {{contributor.name}}\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"page-detail-header-commands\" ng-controller=\"AddRemoveRecommendationCtrl\">\r" +
    "\n" +
    "                            <button class=\"btn btn-default\" type=\"button\"\r" +
    "\n" +
    "                                    ng-click=\"addNewRecommendation(pageDetail, pageId, label, pageDetail.page.title)\"\r" +
    "\n" +
    "                                    ng-hide=\"pageDetail.recommendation.user\">\r" +
    "\n" +
    "                                <span class=\"glyphicon glyphicon-plus\" aria-hidden=\"true\"></span> Bewerten\r" +
    "\n" +
    "                            </button>\r" +
    "\n" +
    "                            <button class=\"btn btn-default\" type=\"button\" ng-click=\"removeRecommendation(pageDetail, pageId, label)\"\r" +
    "\n" +
    "                                    ng-show=\"pageDetail.recommendation.user && pageDetail.recommendation.users\">Bewertung entfernen\r" +
    "\n" +
    "                            </button>\r" +
    "\n" +
    "                            <button class=\"btn btn-default\" type=\"button\" ng-click=\"editPage(pageId, label)\"\r" +
    "\n" +
    "                                    ng-show=\"pageDetail.administrators.isAdmin\"> Seite editieren\r" +
    "\n" +
    "                            </button>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"page-detail-header-rating-overviews\">\r" +
    "\n" +
    "                            <div class=\"page-detail-header-rating-overview\">\r" +
    "\n" +
    "                                <ely-star-rating is-readonly=\"true\" is-small=\"true\"\r" +
    "\n" +
    "                                                 number-of-selected-stars-readonly=\"pageDetail.recommendation.summary.contact.rating\"></ely-star-rating>\r" +
    "\n" +
    "                                <div class=\"page-detail-header-rating-overview-description\">\r" +
    "\n" +
    "                                    (Kontakte {{pageDetail.recommendation.summary.contact.numberOfRatings}})\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <div class=\"page-detail-header-rating-overview\">\r" +
    "\n" +
    "                                <ely-star-rating is-readonly=\"true\" is-small=\"true\"\r" +
    "\n" +
    "                                                 number-of-selected-stars-readonly=\"pageDetail.recommendation.summary.all.rating\"></ely-star-rating>\r" +
    "\n" +
    "                                <div class=\"page-detail-header-rating-overview-description\">\r" +
    "\n" +
    "                                    (Alle {{pageDetail.recommendation.summary.all.numberOfRatings}})\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"page-detail-section-separator\"></div>\r" +
    "\n" +
    "            <div id=\"page-detail-description\">\r" +
    "\n" +
    "                <div class=\"page-detail-section-title\">Beschreibung</div>\r" +
    "\n" +
    "                <div id=\"page-detail-description-text\" style=\"height: 100px\">{{pageDetail.page.description}}</div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"page-detail-reference-pages\">\r" +
    "\n" +
    "                <div class=\"page-detail-reference-title\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"page-detail-reference-preview\" ng-repeat=\"pagePreview in pageDetail.page.pageReference\">\r" +
    "\n" +
    "                    <div class=\"page-detail-reference-preview-content\">\r" +
    "\n" +
    "                        <img ng-src=\"{{pagePreview.previewUrl}}\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <div class=\"profile-contacts-preview-name\">\r" +
    "\n" +
    "                            <div class=\"name\">{{pagePreview.title}}</div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div id=\"leftColNav\" ng-include=\"'app/modules/page/leftNavCol.html'\"></div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('app/modules/page/pageOverview.html',
    "<div id=\"content-page-overview\">\r" +
    "\n" +
    "    <div id=\"centerCol\">\r" +
    "\n" +
    "        <div id=\"inner-centerCol\">\r" +
    "\n" +
    "            <div id=\"page-preview-container\">\r" +
    "\n" +
    "                <div ng-repeat=\"pagePreview in page.pages\" class=\"page-preview-container-inner\">\r" +
    "\n" +
    "                    <ely-page-preview page-preview=\"pagePreview\"></ely-page-preview>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div id=\"leftCol\">\r" +
    "\n" +
    "        <div id=\"inner-leftCol\">\r" +
    "\n" +
    "            <ely-search-box description=\"Suche nach Seite...\" query=\"query\"\r" +
    "\n" +
    "                            get-query-suggestion=\"getUserSuggestion\"\r" +
    "\n" +
    "                            get-query=\"searchPage\"></ely-search-box>\r" +
    "\n" +
    "            <button class=\"btn btn-default page-preview-add-page\" type=\"button\" ng-click=\"createNewPage()\">\r" +
    "\n" +
    "                <span class=\"glyphicon glyphicon-plus\" aria-hidden=\"true\"></span> Seite erstellen\r" +
    "\n" +
    "            </button>\r" +
    "\n" +
    "            <div id=\"page-overview-counter-description\">Filter:</div>\r" +
    "\n" +
    "            <ul id=\"page-overview-counter\" class=\"list-group\">\r" +
    "\n" +
    "                <div>\r" +
    "\n" +
    "                    <li class=\"list-group-item\"\r" +
    "\n" +
    "                        ng-class=\"{'group-selected': filterDisabled}\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <div class=\"page-overview-description\" ng-click=\"selectedAllPages()\">Alle Anzeigen\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </li>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div ng-repeat=\"filter in filters\">\r" +
    "\n" +
    "                    <li class=\"list-group-item\"\r" +
    "\n" +
    "                        ng-class=\"{'group-selected': filter.selected}\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <div class=\"contact-description-count\"\r" +
    "\n" +
    "                             ng-click=\"selectedFilter(filter)\">{{filter.description}}\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </li>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </ul>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div id=\"leftColNav\" ng-include=\"'app/modules/page/leftNavCol.html'\"></div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('app/modules/page/pagePreview/template.html',
    "<div class=\"page-preview\" ng-click=\"openDetail(pagePreview.pageId, pagePreview.label)\">\r" +
    "\n" +
    "    <div class=\"page-preview-image-container\">\r" +
    "\n" +
    "        <img ng-src=\"{{pagePreview.url}}\" class=\"page-preview-image\">\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"page-preview-title\">\r" +
    "\n" +
    "        {{pagePreview.title}}\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <ely-star-rating is-readonly=\"true\" is-x-small=\"true\" class=\"page-preview-rating\" ng-show=\"pagePreview.recommendation.summary.contact.numberOfRatings > 0\"\r" +
    "\n" +
    "                     number-of-selected-stars-readonly=\"pagePreview.recommendation.summary.contact.rating\"></ely-star-rating>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('app/modules/recommendation/home.html',
    "<div id=\"content-recommendation-home\">\r" +
    "\n" +
    "    <div id=\"centerCol\">\r" +
    "\n" +
    "        <div id=\"inner-centerCol\">\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div id=\"leftCol\">\r" +
    "\n" +
    "        <div id=\"inner-leftCol\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div id=\"leftColNav\" ng-include=\"'app/modules/recommendation/leftNavCol.html'\"></div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('app/modules/recommendation/leftNavCol.html',
    "<div class=\"nav-placeholder-top\"></div>\n" +
    "\n" +
    "<div class=\"nav-sub-element\" ui-sref=\"recommendation.home\">\n" +
    "    <div class=\"button-leftNavCol-active-wrapper\">\n" +
    "        <div ui-sref-active=\"button-leftNavCol-active\" ui-sref=\"recommendation.home\"></div>\n" +
    "    </div>\n" +
    "    <img src=\"app/img/recommendation/home.png\">\n" +
    "</div>\n" +
    "<div class=\"nav-sub-element-last\" ui-sref=\"home\">\n" +
    "    <img src=\"app/img/home.png\">\n" +
    "</div>"
  );


  $templateCache.put('app/modules/recommendation/modalAddRecommendation.html',
    "<div class=\"modal\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\" ng-controller=\"ModalAddRecommendationCtrl\">\r" +
    "\n" +
    "    <div id=\"modal-dialog-add-recommendation\" class=\"modal-dialog\">\r" +
    "\n" +
    "        <div class=\"modal-content\">\r" +
    "\n" +
    "            <div class=\"modal-header\">\r" +
    "\n" +
    "                <h4 class=\"modal-title\">Deine Bewertung für\r" +
    "\n" +
    "                    <div class=\"modal-dialog-add-recommendation-title\">{{title}}</div>\r" +
    "\n" +
    "                </h4>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"modal-body\">\r" +
    "\n" +
    "                <div class=\"modal-dialog-add-recommendation-description\">\r" +
    "\n" +
    "                    <textarea class=\"form-control\" ng-model=\"recommendationDescription\"></textarea>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"modal-footer\">\r" +
    "\n" +
    "                <ely-star-rating number-of-selected-stars=\"numberOfSelectedStars\"></ely-star-rating>\r" +
    "\n" +
    "                <div class=\"modal-dialog-add-recommendation-error\" ng-show=\"error\">{{error}}</div>\r" +
    "\n" +
    "                <button type=\"button\" class=\"btn btn-default\" ng-click=\"$hide()\">Abbrechen</button>\r" +
    "\n" +
    "                <button type=\"button\" class=\"btn btn-default\" ng-click=\"addRecommendation()\" ng-class=\"{disabled: numberOfSelectedStars === -1}\">\r" +
    "\n" +
    "                    Hinzufügen\r" +
    "\n" +
    "                </button>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('app/modules/settings/changePassword.html',
    "<div id=\"content-settings-password\">\r" +
    "\n" +
    "    <div id=\"centerCol\">\r" +
    "\n" +
    "        <div id=\"inner-centerCol\">\r" +
    "\n" +
    "            <div id=\"manage-profile\">\r" +
    "\n" +
    "                <form class=\"form-horizontal\" name=\"profileForm\" role=\"form\" novalidate>\r" +
    "\n" +
    "                    <div class=\"form-group\">\r" +
    "\n" +
    "                        <label for=\"inputPasswordActual\" class=\"col-sm-4 control-label\">Aktuelles\r" +
    "\n" +
    "                            Passwort\r" +
    "\n" +
    "                        </label>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <div class=\"col-sm-8\">\r" +
    "\n" +
    "                            <input name=\"inputPasswordActual\" ng-model=\"password.actualPassword\"\r" +
    "\n" +
    "                                   class=\"form-control\"\r" +
    "\n" +
    "                                   type=\"password\"\r" +
    "\n" +
    "                                   id=\"inputPasswordActual\"\r" +
    "\n" +
    "                                   required ng-maxlength=\"55\" ng-minlength=\"1\">\r" +
    "\n" +
    "                            <div class=\"alert-input alert-danger\"\r" +
    "\n" +
    "                                 ng-show=\"profileForm.inputPasswordActual.$error.minlength\">\r" +
    "\n" +
    "                                <span>Das Passwort muss mindestens 1 Zeichen lang sein</span>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <div class=\"alert-input alert-danger\"\r" +
    "\n" +
    "                                 ng-show=\"profileForm.inputPasswordActual.$error.maxlength\">\r" +
    "\n" +
    "                                <span>Das Passwort darf nicht länger als 55 Zeichen sein</span>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"form-group\">\r" +
    "\n" +
    "                        <label for=\"inputPassword\" class=\"col-sm-4 control-label\">Neu\r" +
    "\n" +
    "                        </label>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <div class=\"col-sm-8\">\r" +
    "\n" +
    "                            <input name=\"inputPassword\" ng-model=\"password.newPassword\"\r" +
    "\n" +
    "                                   class=\"form-control\"\r" +
    "\n" +
    "                                   type=\"password\"\r" +
    "\n" +
    "                                   id=\"inputPassword\"\r" +
    "\n" +
    "                                   required ng-maxlength=\"55\" ng-pattern=\"/^(?=.*[A-Z])(?=.*\\d)/\">\r" +
    "\n" +
    "                            <div class=\"alert-input alert-danger\"\r" +
    "\n" +
    "                                 ng-show=\"profileForm.inputPassword.$error.pattern\">\r" +
    "\n" +
    "                                <span>Das Passwort muss mindestens eine Zahl und einen Grossbuchstaben beinhalten</span>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <div class=\"alert-input alert-danger\"\r" +
    "\n" +
    "                                 ng-show=\"profileForm.inputPassword.$error.minlength\">\r" +
    "\n" +
    "                                <span>Das Passwort muss mindestens 8 Zeichen lang sein</span>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <div class=\"alert-input alert-danger\"\r" +
    "\n" +
    "                                 ng-show=\"profileForm.inputPassword.$error.maxlength\">\r" +
    "\n" +
    "                                <span>Das Passwort darf nicht länger als 55 Zeichen sein</span>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"form-group\">\r" +
    "\n" +
    "                        <label  id=\"label-password-confirm\" for=\"inputPasswordConfirm\" class=\"col-sm-4 control-label\">Neues\r" +
    "\n" +
    "                            Passwort erneut eingeben\r" +
    "\n" +
    "                        </label>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <div class=\"col-sm-8\">\r" +
    "\n" +
    "                            <input name=\"inputPasswordConfirm\"\r" +
    "\n" +
    "                                   ng-model=\"password.newPasswordConfirm\"\r" +
    "\n" +
    "                                   class=\"form-control\"\r" +
    "\n" +
    "                                   type=\"password\"\r" +
    "\n" +
    "                                   id=\"inputPasswordConfirm\"\r" +
    "\n" +
    "                                   required ng-maxlength=\"55\">\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"form-group\">\r" +
    "\n" +
    "                        <div class=\"col-sm-offset-4 col-sm-8\">\r" +
    "\n" +
    "                            <div>\r" +
    "\n" +
    "                                <button id=\"submit-change-profile\" type=\"submit\"\r" +
    "\n" +
    "                                        class=\"btn btn-default\"\r" +
    "\n" +
    "                                        ng-click=\"submitNewPassword()\">\r" +
    "\n" +
    "                                    Passwort ändern\r" +
    "\n" +
    "                                </button>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <div class=\"alert-input alert-danger\"\r" +
    "\n" +
    "                                 ng-show=\"profileForm.$invalid && submitFailed\">\r" +
    "\n" +
    "                                <span>Bitte fülle alle Werte korrekt aus</span>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <div class=\"alert-input alert-danger\"\r" +
    "\n" +
    "                                 ng-show=\"newPasswordNotEqual\">\r" +
    "\n" +
    "                                <span>Das neue Passwort stimmt nicht überein</span>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <div class=\"alert-input alert-danger\"\r" +
    "\n" +
    "                                 ng-show=\"profileForm.$invalid == false && submitFailedToServer\">\r" +
    "\n" +
    "                                <span>Fehler auf dem Server. Die Werte konnten nicht gespeichert werden</span>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <div class=\"alert-input alert-success\"\r" +
    "\n" +
    "                                 ng-show=\"successUserDataChange && profileForm.$pristine\">\r" +
    "\n" +
    "                                <span>Passwort erfolgreich geändert</span>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </form>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div id=\"leftColNav\" ng-include=\"'app/modules/settings/leftNavCol.html'\"></div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('app/modules/settings/leftNavCol.html',
    "<div class=\"nav-placeholder-top\"></div>\n" +
    "\n" +
    "<div class=\"nav-sub-element\" ui-sref=\"settings.profile\">\n" +
    "    <div class=\"button-leftNavCol-active-wrapper\">\n" +
    "        <div ui-sref-active=\"button-leftNavCol-active-white\" ui-sref=\"settings.profile\"></div>\n" +
    "    </div>\n" +
    "    <img src=\"app/img/defaultProfile.png\">\n" +
    "</div>\n" +
    "<div class=\"nav-sub-element\" ui-sref=\"settings.privacy\">\n" +
    "    <div class=\"button-leftNavCol-active-wrapper\">\n" +
    "        <div ui-sref-active=\"button-leftNavCol-active\" ui-sref=\"settings.privacy\"></div>\n" +
    "    </div>\n" +
    "    <img src=\"app/img/security.png\">\n" +
    "</div>\n" +
    "<div class=\"nav-sub-element-last\" ui-sref=\"home\">\n" +
    "    <img src=\"app/img/home.png\">\n" +
    "</div>"
  );


  $templateCache.put('app/modules/settings/popoverDeletePrivacy.html',
    "<div class=\"popover\" ng-controller=\"DeletePrivacyCtrl\">\r" +
    "\n" +
    "    <div class=\"arrow\"></div>\r" +
    "\n" +
    "    <div class=\"popover-content\">\r" +
    "\n" +
    "        <form name=\"popoverForm\">\r" +
    "\n" +
    "            <div class=\"popover-element-description\">\r" +
    "\n" +
    "                Kontakte <b>{{privacy.type}}</b> werden beim löschen der Privatsphären Einstellung verschoben nach:\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <button type=\"button\" class=\"btn btn-default popover-element-right\" ng-model=\"otherPrivacySettingType\"\r" +
    "\n" +
    "                    bs-options=\"privacyType for privacyType in otherPrivacySettingTypes\" bs-select>\r" +
    "\n" +
    "                Action <span class=\"caret\"></span>\r" +
    "\n" +
    "            </button>\r" +
    "\n" +
    "            <div class=\"popover-element-divider\"></div>\r" +
    "\n" +
    "            <div class=\"popover-element-right\">\r" +
    "\n" +
    "                <button type=\"submit\" class=\"btn btn-default\"\r" +
    "\n" +
    "                        ng-click=\"deletePrivacySetting()\">Löschen\r" +
    "\n" +
    "                </button>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"popover-element\">\r" +
    "\n" +
    "                <button type=\"submit\" class=\"btn btn-default\"\r" +
    "\n" +
    "                        ng-click=\"$hide()\">Abbrechen\r" +
    "\n" +
    "                </button>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </form>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('app/modules/settings/popoverRenamePrivacy.html',
    "<div class=\"popover\" ng-controller=\"RenamePrivacyCtrl\">\r" +
    "\n" +
    "    <div class=\"arrow\"></div>\r" +
    "\n" +
    "    <div class=\"popover-content\">\r" +
    "\n" +
    "        <form name=\"popoverForm\">\r" +
    "\n" +
    "            <div class=\"popover-element-description\">\r" +
    "\n" +
    "                Privatsphären Einstellung <b>{{privacy.type}}</b> umbennen in:\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"popover-element\">\r" +
    "\n" +
    "                <input type=\"text\" class=\"form-control\" ng-model=\"renameType\"\r" +
    "\n" +
    "                       bs-options=\"type for type in types\"\r" +
    "\n" +
    "                       bs-typeahead>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"popover-element\">\r" +
    "\n" +
    "                <button type=\"submit\" class=\"btn btn-default\"\r" +
    "\n" +
    "                        ng-class=\"{'disabled': renameType === privacy.type || renameType.trim() === '' || renameExists}\"\r" +
    "\n" +
    "                        ng-click=\"renamePrivacySetting()\">Ändern\r" +
    "\n" +
    "                </button>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"popover-element\">\r" +
    "\n" +
    "                <div class=\"alert-input alert-danger\"\r" +
    "\n" +
    "                     ng-if=\"renameExists && renameType !== privacy.type\">\r" +
    "\n" +
    "                    <span>Diese Privatspähren Einstellung existiert bereits.</span>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </form>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('app/modules/settings/privacy.html',
    "<div id=\"content-settings-security\">\n" +
    "    <div id=\"centerCol\">\n" +
    "        <div id=\"inner-centerCol\">\n" +
    "            <div class=\"website-structure-header\">\n" +
    "                <div class=\"website-structure-header-title\">\n" +
    "                    <h2>Privatsphäre Einstellung für {{selectedType.type}}</h2>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"content-privacy\">\n" +
    "                <div class=\"privacy-setting-row\">\n" +
    "                    <div class=\"select-privacy-settings\">\n" +
    "                        <input type=\"checkbox\" ng-model=\"selectedType.profileVisible\">\n" +
    "\n" +
    "                        <div class=\"select-privacy-settings-text\">\n" +
    "                            Mein Profil ist sichtbar\n" +
    "                        </div>\n" +
    "                        <div class=\"select-privacy-settings-description\" ng-show=\"privacySettings.noContactSelected\">\n" +
    "                            Wenn diese Funktion deaktiviert ist, können andere User die Du nicht zu deinen Kontakten hinzugefügt hast nur deinen Namen\n" +
    "                            sehen. Alle anderen Profildaten bleiben verborgen.\n" +
    "                        </div>\n" +
    "                        <div class=\"select-privacy-settings-description\" ng-show=\"!privacySettings.noContactSelected\">\n" +
    "                            Wenn diese Funktion deaktiviert ist, können andere User die Du der Gruppe {{selectedType.type}} hinzugefügt hast nur\n" +
    "                            deinen Namen sehen. Alle anderen Profildaten bleiben verborgen.\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"privacy-setting-row\">\n" +
    "                    <div class=\"select-privacy-settings\">\n" +
    "                        <input type=\"checkbox\" ng-model=\"selectedType.contactsVisible\" ng-disabled=\"!selectedType.profileVisible\">\n" +
    "\n" +
    "                        <div ng-class=\"{'select-privacy-settings-text': selectedType.profileVisible, 'select-privacy-settings-text-disabled': !selectedType.profileVisible}\">\n" +
    "                            Meine Kontakte sind sichtbar\n" +
    "                        </div>\n" +
    "                        <div class=\"select-privacy-settings-description\" ng-show=\"privacySettings.noContactSelected\">\n" +
    "                            Bestimmt ob User die Du nicht als Kontakte hinzugefügt hast deine Kontakte sehen können.\n" +
    "                        </div>\n" +
    "                        <div class=\"select-privacy-settings-description\" ng-show=\"!privacySettings.noContactSelected\">\n" +
    "                            Bestimmt ob User die Du der Gruppe {{selectedType.type}} hinzugefügt hast deine Kontake sehen können.\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"privacy-setting-row\">\n" +
    "                    <div class=\"select-privacy-settings\">\n" +
    "                        <input type=\"checkbox\" ng-model=\"selectedType.imageVisible\" ng-disabled=\"!selectedType.profileVisible\">\n" +
    "\n" +
    "                        <div ng-class=\"{'select-privacy-settings-text': selectedType.profileVisible, 'select-privacy-settings-text-disabled': !selectedType.profileVisible}\">\n" +
    "                            Mein Profilbild ist sichtbar\n" +
    "                        </div>\n" +
    "                        <div class=\"select-privacy-settings-description\" ng-show=\"privacySettings.noContactSelected\">\n" +
    "                            Bestimmt ob User die Du nicht als Kontakte hinzugefügt hast dein Profilbild sehen können.\n" +
    "                        </div>\n" +
    "                        <div class=\"select-privacy-settings-description\" ng-show=\"!privacySettings.noContactSelected\">\n" +
    "                            Bestimmt ob User die Du der Gruppe {{selectedType.type}} hinzugefügt hast dein Profilbild sehen können.\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"privacy-setting-row\">\n" +
    "                    <div class=\"select-privacy-settings\">\n" +
    "                        <input type=\"checkbox\" ng-model=\"selectedType.profileDataVisible\" ng-disabled=\"!selectedType.profileVisible\">\n" +
    "\n" +
    "                        <div ng-class=\"{'select-privacy-settings-text': selectedType.profileVisible, 'select-privacy-settings-text-disabled': !selectedType.profileVisible}\">\n" +
    "                            Meine Profildaten sind sichtbar\n" +
    "                        </div>\n" +
    "                        <div class=\"select-privacy-settings-description\" ng-show=\"privacySettings.noContactSelected\">\n" +
    "                            Bestimmt ob User die Du nicht als Kontakte hinzugefügt hast deine Profil Daten, wie z.B. deinen Geburtstag, sehen können.\n" +
    "                        </div>\n" +
    "                        <div class=\"select-privacy-settings-description\" ng-show=\"!privacySettings.noContactSelected\">\n" +
    "                            Bestimmt ob User die Du der Gruppe {{selectedType.type}} hinzugefügt hast deine Profil Daten, wie z.B. deinen Geburtstag,\n" +
    "                            sehen können.\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"privacy-setting-button-row\">\n" +
    "                    <ely-send-button button-description=\"Änderung übernehmen\" send-data=\"updatePrivacyType\"\n" +
    "                                     error-placement=\"right\" model=\"selectedType\"></ely-send-button>\n" +
    "                    <!--<button class=\"btn btn-default\" ng-class=\"{disabled: disableChangePrivacy}\"\n" +
    "                            type=\"submit\" ng-click=\"updatePrivacyType()\">Änderung übernehmen\n" +
    "                    </button>-->\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div id=\"leftCol\">\n" +
    "        <div id=\"inner-leftCol\">\n" +
    "            <ul class=\"list-group\">\n" +
    "                <div>\n" +
    "                    <li class=\"list-group-item\" ng-click=\"setPrivacyTypeNoContact()\"\n" +
    "                        ng-class=\"{'group-selected': privacySettings.noContactSelected}\">\n" +
    "\n" +
    "                        <div class=\"privacy-type-description\">Kein Kontakt</div>\n" +
    "                    </li>\n" +
    "                </div>\n" +
    "                <div ng-repeat=\"privacy in privacySettings.normal\">\n" +
    "                    <li class=\"list-group-item\"\n" +
    "                        ng-class=\"{'group-selected': selectedType.type === privacy.type}\">\n" +
    "                        <div class=\"list-group-item-container\">\n" +
    "                            <img ng-if=\"privacySettings.normal.length > 1\"\n" +
    "                                 class=\"list-group-item-icons\"\n" +
    "                                 src=\"app/img/delete.png\" trigger=\"click\"\n" +
    "                                 data-auto-close=\"true\"\n" +
    "                                 data-placement=\"bottom\"\n" +
    "                                 data-template=\"app/modules/settings/popoverDeletePrivacy.html\"\n" +
    "                                 bs-popover/>\n" +
    "                        </div>\n" +
    "                        <div class=\"list-group-item-container\">\n" +
    "                            <img class=\"list-group-item-icons\" src=\"app/img/edit.png\"\n" +
    "                                 trigger=\"click\"\n" +
    "                                 data-auto-close=\"true\"\n" +
    "                                 data-placement=\"bottom\"\n" +
    "                                 data-template=\"app/modules/settings/popoverRenamePrivacy.html\"\n" +
    "                                 bs-popover/>\n" +
    "                        </div>\n" +
    "                        <div class=\"privacy-type-description\"\n" +
    "                             ng-click=\"setPrivacyType(privacy.type)\">{{privacy.type}}\n" +
    "                        </div>\n" +
    "                    </li>\n" +
    "                </div>\n" +
    "                <div>\n" +
    "                    <div class=\"privacy-adding\" ng-if=\"!showNewPrivacySettingInput && privacySettings.normal.length < 10\">\n" +
    "                        <a href=\"#\" ng-click=\"showAddingNewPrivacySetting()\">Neuer Privatsphären Typ\n" +
    "                            hinzufügen...</a>\n" +
    "                    </div>\n" +
    "                    <div class=\"privacy-adding-input\" ng-if=\"showNewPrivacySettingInput\">\n" +
    "                        <input class=\"form-control\" placeholder=\"Privatsphären Typ\" ng-maxlength=\"30\"\n" +
    "                               ng-model=\"addingPrivacy.newPrivacyName\">\n" +
    "                        <button class=\"btn btn-default\" type=\"button\" ng-click=\"addPrivacySetting()\"\n" +
    "                                ng-class=\"{disabled: addingPrivacy.newPrivacyName.trim() === ''}\">\n" +
    "                            Hinzufügen\n" +
    "                        </button>\n" +
    "                        <button class=\"btn btn-default\" type=\"button\"\n" +
    "                                ng-click=\"abortAddingNewPrivacy()\">Abbrechen\n" +
    "                        </button>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div id=\"leftColNav\" ng-include=\"'app/modules/settings/leftNavCol.html'\"></div>\n" +
    "</div>"
  );


  $templateCache.put('app/modules/settings/profile.html',
    "<div id=\"content-settings-profile\">\r" +
    "\n" +
    "    <div id=\"centerCol\">\r" +
    "\n" +
    "        <div id=\"inner-centerCol\">\r" +
    "\n" +
    "            <div id=\"manage-profile-photo-container\">\r" +
    "\n" +
    "                <div>\r" +
    "\n" +
    "                    <img class=\"img-rounded img-responsive\"\r" +
    "\n" +
    "                         ng-src=\"{{userDataToChange.profileImage}}\"/>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <button id=\"change-profile-image\" type=\"button\" class=\"btn btn-default\"\r" +
    "\n" +
    "                        data-animation=\"am-fade-and-scale\" data-placement=\"center\"\r" +
    "\n" +
    "                        data-backdrop=\"static\"\r" +
    "\n" +
    "                        data-template=\"app/modules/util/file/uploadFile.html\" bs-modal=\"modal\">\r" +
    "\n" +
    "                    Foto ändern..\r" +
    "\n" +
    "                </button>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div id=\"manage-profile\">\r" +
    "\n" +
    "                <form class=\"form-horizontal\" name=\"profileForm\" role=\"form\" novalidate>\r" +
    "\n" +
    "                    <div class=\"form-group\">\r" +
    "\n" +
    "                        <label for=\"inputEmail\" class=\"col-sm-4 control-label\">E-Mail</label>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <div class=\"col-sm-8\">\r" +
    "\n" +
    "                            <input name=\"inputEmail\" ng-model=\"userDataToChange.email\"\r" +
    "\n" +
    "                                   class=\"form-control\"\r" +
    "\n" +
    "                                   id=\"inputEmail\"\r" +
    "\n" +
    "                                   ng-disabled=\"true\">\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"form-group\">\r" +
    "\n" +
    "                        <div class=\"col-sm-4\"></div>\r" +
    "\n" +
    "                        <div class=\"col-sm-5\">\r" +
    "\n" +
    "                            <a ui-sref=\"settings.profile.changePassword\">\r" +
    "\n" +
    "                                <button id=\"change-profile-password\" type=\"button\"\r" +
    "\n" +
    "                                        class=\"btn btn-default\">\r" +
    "\n" +
    "                                    Passwort ändern..\r" +
    "\n" +
    "                                </button>\r" +
    "\n" +
    "                            </a>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <ely-form-text-input label=\"Vorname\" input-name=\"inputForename\" input-placeholder=\"Vorname\"\r" +
    "\n" +
    "                                         profile-form=\"profileForm\" submit-model=\"userDataToChange.forename\"\r" +
    "\n" +
    "                                         max-length=\"30\" required=\"true\"></ely-form-text-input>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <ely-form-text-input label=\"Nachname\" input-name=\"inputSurename\" input-placeholder=\"Nachname\"\r" +
    "\n" +
    "                                         profile-form=\"profileForm\" submit-model=\"userDataToChange.surname\"\r" +
    "\n" +
    "                                         max-length=\"50\" required=\"true\"></ely-form-text-input>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <ely-form-text-input label=\"Geburtstag\" input-name=\"inputBirthday\" input-placeholder=\"z.B {{getDateExample()}}\"\r" +
    "\n" +
    "                                         profile-form=\"profileForm\" submit-model=\"userDataToChange.birthday\"\r" +
    "\n" +
    "                                         required=\"true\"\r" +
    "\n" +
    "                                         custom-error-description=\"Gib einen gültigen Geburtstag ein (z.B. {{getDateExample()}})\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    </ely-form-text-input>\r" +
    "\n" +
    "                    <ely-form-text-input label=\"Strasse\" input-name=\"inputStreet\" input-placeholder=\"Strasse\"\r" +
    "\n" +
    "                                         profile-form=\"profileForm\" submit-model=\"userDataToChange.street\"\r" +
    "\n" +
    "                                         max-length=\"80\"></ely-form-text-input>\r" +
    "\n" +
    "                    <ely-form-text-input label=\"Ort\" input-name=\"inputPlace\" input-placeholder=\"Ort\"\r" +
    "\n" +
    "                                         profile-form=\"profileForm\" submit-model=\"userDataToChange.place\"\r" +
    "\n" +
    "                                         max-length=\"80\"></ely-form-text-input>\r" +
    "\n" +
    "                    <div class=\"form-group\"\r" +
    "\n" +
    "                         ng-class=\"{'has-error': profileForm.inputCountry.$invalid && (visitedCountry || submitFailed)}\">\r" +
    "\n" +
    "                        <label for=\"inputCountryId\" class=\"col-sm-4 control-label\">Land</label>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <div class=\"col-sm-8\">\r" +
    "\n" +
    "                            <button type=\"button\" class=\"btn btn-default\" ng-model=\"selectedCountryCode\"\r" +
    "\n" +
    "                                    name=\"inputCountry\"\r" +
    "\n" +
    "                                    id=\"inputCountryId\"\r" +
    "\n" +
    "                                    bs-options=\"countryCode.country as countryCode.country for countryCode in countryCodes\"\r" +
    "\n" +
    "                                    data-placeholder=\"Land\"\r" +
    "\n" +
    "                                    bs-select>\r" +
    "\n" +
    "                                Action <span class=\"caret\"></span>\r" +
    "\n" +
    "                            </button>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"form-group\">\r" +
    "\n" +
    "                        <label for=\"inputGender\" class=\"col-sm-4 control-label\">Geschlecht</label>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <div class=\"col-sm-8\">\r" +
    "\n" +
    "                            <div class=\"btn-group\" id=\"inputGender\">\r" +
    "\n" +
    "                                <label class=\"btn btn-default\"\r" +
    "\n" +
    "                                       ng-click=\"userDataToChange.female = true; profileForm.$setDirty()\"\r" +
    "\n" +
    "                                       ng-class=\"{'active': userDataToChange.female === true}\">Frau</label>\r" +
    "\n" +
    "                                <label class=\"btn btn-default\"\r" +
    "\n" +
    "                                       ng-click=\"userDataToChange.female = false; profileForm.$setDirty()\"\r" +
    "\n" +
    "                                       ng-class=\"{'active': userDataToChange.female === false}\">Mann</label>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"form-group\">\r" +
    "\n" +
    "                        <div class=\"col-sm-offset-4 col-sm-8\">\r" +
    "\n" +
    "                            <div>\r" +
    "\n" +
    "                                <ely-send-button button-description=\"Profil ändern\" send-data=\"submitProfileData\"\r" +
    "\n" +
    "                                                 error-placement=\"right\" model=\"userDataToChange\" ></ely-send-button>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </form>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div id=\"leftColNav\" ng-include=\"'app/modules/settings/leftNavCol.html'\"></div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('app/modules/util/dialog/yesNoDialog.html',
    "<div class=\"modal\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\r" +
    "\n" +
    "    <div id=\"modal-yes-no-dialog\" class=\"modal-dialog\">\r" +
    "\n" +
    "        <div class=\"modal-content\">\r" +
    "\n" +
    "            <div class=\"modal-header\" ng-show=\"title\"><h4 class=\"modal-title\" ng-bind=\"title\"></h4></div>\r" +
    "\n" +
    "            <div class=\"modal-body\" ng-bind=\"content\"></div>\r" +
    "\n" +
    "            <div class=\"modal-footer\">\r" +
    "\n" +
    "                <button type=\"button\" class=\"btn btn-default\" ng-click=\"abort()\">Nein</button>\r" +
    "\n" +
    "                <button type=\"button\" class=\"btn btn-default\" ng-click=\"confirm()\">Ja</button>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('app/modules/util/file/previewFile.html',
    "<div class=\"modal\" tabindex=\"-1\" role=\"dialog\" ng-controller=\"FileCtrl\">\r" +
    "\n" +
    "    <div class=\"modal-dialog\" id=\"modal-preview-file\">\r" +
    "\n" +
    "        <div class=\"modal-content\">\r" +
    "\n" +
    "            <div class=\"modal-body\">\r" +
    "\n" +
    "                <div class=\"cropArea\">\r" +
    "\n" +
    "                    <ely-image-cropper ng-if=\"!uploadRunning\"\r" +
    "\n" +
    "                                       reset=\"resetImage\"\r" +
    "\n" +
    "                                       image=\"imageForUploadPreview\"\r" +
    "\n" +
    "                                       image-result-data=\"imageResultData\"\r" +
    "\n" +
    "                                       original-size=\"checkOriginalSize\" min-width=\"300\" min-height=\"200\"></ely-image-cropper>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"cropArea-orientation\">\r" +
    "\n" +
    "                    <div class=\"btn-group-vertical\" role=\"group\">\r" +
    "\n" +
    "                        <button type=\"button\" class=\"btn btn-default cropArea-orientation-img\" ng-class=\"{'active': isLandscape === false}\"><img\r" +
    "\n" +
    "                                src=\"app/img/portraitFormat.png\" ng-click=\"setFormat(0.75, false)\"></button>\r" +
    "\n" +
    "                        <button type=\"button\" class=\"btn btn-default cropArea-orientation-img\" ng-class=\"{'active': isLandscape === true}\"><img\r" +
    "\n" +
    "                                src=\"app/img/landscapeFormat.png\" ng-click=\"setFormat(1.25, true)\"></button>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <ely-spin ng-if=\"uploadRunning\"></ely-spin>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"modal-footer\">\r" +
    "\n" +
    "                <span class=\"btn btn-default btn-file\" ng-class=\"{disabled: uploadRunning}\">\r" +
    "\n" +
    "                    Bild auswählen...<input type=\"file\" ely-file-model=\"imageForUpload\"\r" +
    "\n" +
    "                                            accept=\".jpg, .png, jpeg\">\r" +
    "\n" +
    "                </span>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <div class=\"upload-file-error\" ng-show=\"uploadError\">\r" +
    "\n" +
    "                    {{uploadError}}\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <button type=\"button\" class=\"btn btn-default\"\r" +
    "\n" +
    "                        ng-class=\"{disabled: uploadRunning}\" ng-click=\"$hide()\">Abbrechen\r" +
    "\n" +
    "                </button>\r" +
    "\n" +
    "                <button type=\"button\" class=\"btn btn-default\"\r" +
    "\n" +
    "                        ng-class=\"{disabled: !imageForUploadPreview || uploadRunning || uploadError}\"\r" +
    "\n" +
    "                        ng-click=\"getPreview()\">\r" +
    "\n" +
    "                    Auswählen\r" +
    "\n" +
    "                </button>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('app/modules/util/file/uploadFile.html',
    "<div class=\"modal\" tabindex=\"-1\" role=\"dialog\" ng-controller=\"FileCtrl\">\r" +
    "\n" +
    "    <div class=\"modal-dialog\">\r" +
    "\n" +
    "        <div class=\"modal-content\">\r" +
    "\n" +
    "            <div class=\"modal-body\">\r" +
    "\n" +
    "                <div class=\"cropArea\">\r" +
    "\n" +
    "                    <ely-image-cropper ng-if=\"!uploadRunning\"\r" +
    "\n" +
    "                                       reset=\"resetImage\"\r" +
    "\n" +
    "                                       image=\"imageForUploadPreview\"\r" +
    "\n" +
    "                                       image-result-data=\"imageResultData\"\r" +
    "\n" +
    "                                       ratio=\"1\"></ely-image-cropper>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <ely-spin ng-if=\"uploadRunning\"></ely-spin>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"modal-footer\">\r" +
    "\n" +
    "                <span class=\"btn btn-default btn-file\" ng-class=\"{disabled: uploadRunning}\">\r" +
    "\n" +
    "                    Bild auswählen...<input type=\"file\" ely-file-model=\"imageForUpload\"\r" +
    "\n" +
    "                                            accept=\".jpg, .png, jpeg\">\r" +
    "\n" +
    "                </span>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <div class=\"upload-file-error\" ng-show=\"uploadError\">\r" +
    "\n" +
    "                    {{uploadError}}\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <button type=\"button\" class=\"btn btn-default\"\r" +
    "\n" +
    "                        ng-class=\"{disabled: uploadRunning}\" ng-click=\"$hide()\">Abbrechen\r" +
    "\n" +
    "                </button>\r" +
    "\n" +
    "                <button type=\"button\" class=\"btn btn-default\"\r" +
    "\n" +
    "                        ng-class=\"{disabled: !imageForUploadPreview || uploadRunning}\"\r" +
    "\n" +
    "                        ng-click=\"startUpload()\">\r" +
    "\n" +
    "                    Hochladen\r" +
    "\n" +
    "                </button>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('app/modules/util/tooltip/tooltipError.html',
    "<div class=\"tooltip in ely-tooltip-error\" ng-show=\"title\">\r" +
    "\n" +
    "    <div class=\"tooltip-arrow\"></div>\r" +
    "\n" +
    "    <div class=\"tooltip-inner\" ng-bind=\"title\"></div>\r" +
    "\n" +
    "</div>"
  );

}]);

},{}],2:[function(require,module,exports){
/*
 AngularJS v1.3.15
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(N,f,W){'use strict';f.module("ngAnimate",["ng"]).directive("ngAnimateChildren",function(){return function(X,C,g){g=g.ngAnimateChildren;f.isString(g)&&0===g.length?C.data("$$ngAnimateChildren",!0):X.$watch(g,function(f){C.data("$$ngAnimateChildren",!!f)})}}).factory("$$animateReflow",["$$rAF","$document",function(f,C){return function(g){return f(function(){g()})}}]).config(["$provide","$animateProvider",function(X,C){function g(f){for(var n=0;n<f.length;n++){var g=f[n];if(1==g.nodeType)return g}}
function ba(f,n){return g(f)==g(n)}var t=f.noop,n=f.forEach,da=C.$$selectors,aa=f.isArray,ea=f.isString,ga=f.isObject,r={running:!0},u;X.decorator("$animate",["$delegate","$$q","$injector","$sniffer","$rootElement","$$asyncCallback","$rootScope","$document","$templateRequest","$$jqLite",function(O,N,M,Y,y,H,P,W,Z,Q){function R(a,c){var b=a.data("$$ngAnimateState")||{};c&&(b.running=!0,b.structural=!0,a.data("$$ngAnimateState",b));return b.disabled||b.running&&b.structural}function D(a){var c,b=N.defer();
b.promise.$$cancelFn=function(){c&&c()};P.$$postDigest(function(){c=a(function(){b.resolve()})});return b.promise}function I(a){if(ga(a))return a.tempClasses&&ea(a.tempClasses)&&(a.tempClasses=a.tempClasses.split(/\s+/)),a}function S(a,c,b){b=b||{};var d={};n(b,function(e,a){n(a.split(" "),function(a){d[a]=e})});var h=Object.create(null);n((a.attr("class")||"").split(/\s+/),function(e){h[e]=!0});var f=[],l=[];n(c&&c.classes||[],function(e,a){var b=h[a],c=d[a]||{};!1===e?(b||"addClass"==c.event)&&
l.push(a):!0===e&&(b&&"removeClass"!=c.event||f.push(a))});return 0<f.length+l.length&&[f.join(" "),l.join(" ")]}function T(a){if(a){var c=[],b={};a=a.substr(1).split(".");(Y.transitions||Y.animations)&&c.push(M.get(da[""]));for(var d=0;d<a.length;d++){var f=a[d],k=da[f];k&&!b[f]&&(c.push(M.get(k)),b[f]=!0)}return c}}function U(a,c,b,d){function h(e,a){var b=e[a],c=e["before"+a.charAt(0).toUpperCase()+a.substr(1)];if(b||c)return"leave"==a&&(c=b,b=null),u.push({event:a,fn:b}),J.push({event:a,fn:c}),
!0}function k(c,l,w){var E=[];n(c,function(a){a.fn&&E.push(a)});var m=0;n(E,function(c,f){var p=function(){a:{if(l){(l[f]||t)();if(++m<E.length)break a;l=null}w()}};switch(c.event){case "setClass":l.push(c.fn(a,e,A,p,d));break;case "animate":l.push(c.fn(a,b,d.from,d.to,p));break;case "addClass":l.push(c.fn(a,e||b,p,d));break;case "removeClass":l.push(c.fn(a,A||b,p,d));break;default:l.push(c.fn(a,p,d))}});l&&0===l.length&&w()}var l=a[0];if(l){d&&(d.to=d.to||{},d.from=d.from||{});var e,A;aa(b)&&(e=
b[0],A=b[1],e?A?b=e+" "+A:(b=e,c="addClass"):(b=A,c="removeClass"));var w="setClass"==c,E=w||"addClass"==c||"removeClass"==c||"animate"==c,p=a.attr("class")+" "+b;if(x(p)){var ca=t,m=[],J=[],g=t,s=[],u=[],p=(" "+p).replace(/\s+/g,".");n(T(p),function(a){!h(a,c)&&w&&(h(a,"addClass"),h(a,"removeClass"))});return{node:l,event:c,className:b,isClassBased:E,isSetClassOperation:w,applyStyles:function(){d&&a.css(f.extend(d.from||{},d.to||{}))},before:function(a){ca=a;k(J,m,function(){ca=t;a()})},after:function(a){g=
a;k(u,s,function(){g=t;a()})},cancel:function(){m&&(n(m,function(a){(a||t)(!0)}),ca(!0));s&&(n(s,function(a){(a||t)(!0)}),g(!0))}}}}}function G(a,c,b,d,h,k,l,e){function A(e){var l="$animate:"+e;J&&J[l]&&0<J[l].length&&H(function(){b.triggerHandler(l,{event:a,className:c})})}function w(){A("before")}function E(){A("after")}function p(){p.hasBeenRun||(p.hasBeenRun=!0,k())}function g(){if(!g.hasBeenRun){m&&m.applyStyles();g.hasBeenRun=!0;l&&l.tempClasses&&n(l.tempClasses,function(a){u.removeClass(b,
a)});var w=b.data("$$ngAnimateState");w&&(m&&m.isClassBased?B(b,c):(H(function(){var e=b.data("$$ngAnimateState")||{};fa==e.index&&B(b,c,a)}),b.data("$$ngAnimateState",w)));A("close");e()}}var m=U(b,a,c,l);if(!m)return p(),w(),E(),g(),t;a=m.event;c=m.className;var J=f.element._data(m.node),J=J&&J.events;d||(d=h?h.parent():b.parent());if(z(b,d))return p(),w(),E(),g(),t;d=b.data("$$ngAnimateState")||{};var L=d.active||{},s=d.totalActive||0,q=d.last;h=!1;if(0<s){s=[];if(m.isClassBased)"setClass"==q.event?
(s.push(q),B(b,c)):L[c]&&(v=L[c],v.event==a?h=!0:(s.push(v),B(b,c)));else if("leave"==a&&L["ng-leave"])h=!0;else{for(var v in L)s.push(L[v]);d={};B(b,!0)}0<s.length&&n(s,function(a){a.cancel()})}!m.isClassBased||m.isSetClassOperation||"animate"==a||h||(h="addClass"==a==b.hasClass(c));if(h)return p(),w(),E(),A("close"),e(),t;L=d.active||{};s=d.totalActive||0;if("leave"==a)b.one("$destroy",function(a){a=f.element(this);var e=a.data("$$ngAnimateState");e&&(e=e.active["ng-leave"])&&(e.cancel(),B(a,"ng-leave"))});
u.addClass(b,"ng-animate");l&&l.tempClasses&&n(l.tempClasses,function(a){u.addClass(b,a)});var fa=K++;s++;L[c]=m;b.data("$$ngAnimateState",{last:m,active:L,index:fa,totalActive:s});w();m.before(function(e){var l=b.data("$$ngAnimateState");e=e||!l||!l.active[c]||m.isClassBased&&l.active[c].event!=a;p();!0===e?g():(E(),m.after(g))});return m.cancel}function q(a){if(a=g(a))a=f.isFunction(a.getElementsByClassName)?a.getElementsByClassName("ng-animate"):a.querySelectorAll(".ng-animate"),n(a,function(a){a=
f.element(a);(a=a.data("$$ngAnimateState"))&&a.active&&n(a.active,function(a){a.cancel()})})}function B(a,c){if(ba(a,y))r.disabled||(r.running=!1,r.structural=!1);else if(c){var b=a.data("$$ngAnimateState")||{},d=!0===c;!d&&b.active&&b.active[c]&&(b.totalActive--,delete b.active[c]);if(d||!b.totalActive)u.removeClass(a,"ng-animate"),a.removeData("$$ngAnimateState")}}function z(a,c){if(r.disabled)return!0;if(ba(a,y))return r.running;var b,d,g;do{if(0===c.length)break;var k=ba(c,y),l=k?r:c.data("$$ngAnimateState")||
{};if(l.disabled)return!0;k&&(g=!0);!1!==b&&(k=c.data("$$ngAnimateChildren"),f.isDefined(k)&&(b=k));d=d||l.running||l.last&&!l.last.isClassBased}while(c=c.parent());return!g||!b&&d}u=Q;y.data("$$ngAnimateState",r);var $=P.$watch(function(){return Z.totalPendingRequests},function(a,c){0===a&&($(),P.$$postDigest(function(){P.$$postDigest(function(){r.running=!1})}))}),K=0,V=C.classNameFilter(),x=V?function(a){return V.test(a)}:function(){return!0};return{animate:function(a,c,b,d,h){d=d||"ng-inline-animate";
h=I(h)||{};h.from=b?c:null;h.to=b?b:c;return D(function(b){return G("animate",d,f.element(g(a)),null,null,t,h,b)})},enter:function(a,c,b,d){d=I(d);a=f.element(a);c=c&&f.element(c);b=b&&f.element(b);R(a,!0);O.enter(a,c,b);return D(function(h){return G("enter","ng-enter",f.element(g(a)),c,b,t,d,h)})},leave:function(a,c){c=I(c);a=f.element(a);q(a);R(a,!0);return D(function(b){return G("leave","ng-leave",f.element(g(a)),null,null,function(){O.leave(a)},c,b)})},move:function(a,c,b,d){d=I(d);a=f.element(a);
c=c&&f.element(c);b=b&&f.element(b);q(a);R(a,!0);O.move(a,c,b);return D(function(h){return G("move","ng-move",f.element(g(a)),c,b,t,d,h)})},addClass:function(a,c,b){return this.setClass(a,c,[],b)},removeClass:function(a,c,b){return this.setClass(a,[],c,b)},setClass:function(a,c,b,d){d=I(d);a=f.element(a);a=f.element(g(a));if(R(a))return O.$$setClassImmediately(a,c,b,d);var h,k=a.data("$$animateClasses"),l=!!k;k||(k={classes:{}});h=k.classes;c=aa(c)?c:c.split(" ");n(c,function(a){a&&a.length&&(h[a]=
!0)});b=aa(b)?b:b.split(" ");n(b,function(a){a&&a.length&&(h[a]=!1)});if(l)return d&&k.options&&(k.options=f.extend(k.options||{},d)),k.promise;a.data("$$animateClasses",k={classes:h,options:d});return k.promise=D(function(e){var l=a.parent(),b=g(a),c=b.parentNode;if(!c||c.$$NG_REMOVED||b.$$NG_REMOVED)e();else{b=a.data("$$animateClasses");a.removeData("$$animateClasses");var c=a.data("$$ngAnimateState")||{},d=S(a,b,c.active);return d?G("setClass",d,a,l,null,function(){d[0]&&O.$$addClassImmediately(a,
d[0]);d[1]&&O.$$removeClassImmediately(a,d[1])},b.options,e):e()}})},cancel:function(a){a.$$cancelFn()},enabled:function(a,c){switch(arguments.length){case 2:if(a)B(c);else{var b=c.data("$$ngAnimateState")||{};b.disabled=!0;c.data("$$ngAnimateState",b)}break;case 1:r.disabled=!a;break;default:a=!r.disabled}return!!a}}}]);C.register("",["$window","$sniffer","$timeout","$$animateReflow",function(r,C,M,Y){function y(){b||(b=Y(function(){c=[];b=null;x={}}))}function H(a,e){b&&b();c.push(e);b=Y(function(){n(c,
function(a){a()});c=[];b=null;x={}})}function P(a,e){var b=g(a);a=f.element(b);k.push(a);b=Date.now()+e;b<=h||(M.cancel(d),h=b,d=M(function(){X(k);k=[]},e,!1))}function X(a){n(a,function(a){(a=a.data("$$ngAnimateCSS3Data"))&&n(a.closeAnimationFns,function(a){a()})})}function Z(a,e){var b=e?x[e]:null;if(!b){var c=0,d=0,f=0,g=0;n(a,function(a){if(1==a.nodeType){a=r.getComputedStyle(a)||{};c=Math.max(Q(a[z+"Duration"]),c);d=Math.max(Q(a[z+"Delay"]),d);g=Math.max(Q(a[K+"Delay"]),g);var e=Q(a[K+"Duration"]);
0<e&&(e*=parseInt(a[K+"IterationCount"],10)||1);f=Math.max(e,f)}});b={total:0,transitionDelay:d,transitionDuration:c,animationDelay:g,animationDuration:f};e&&(x[e]=b)}return b}function Q(a){var e=0;a=ea(a)?a.split(/\s*,\s*/):[];n(a,function(a){e=Math.max(parseFloat(a)||0,e)});return e}function R(b,e,c,d){b=0<=["ng-enter","ng-leave","ng-move"].indexOf(c);var f,p=e.parent(),h=p.data("$$ngAnimateKey");h||(p.data("$$ngAnimateKey",++a),h=a);f=h+"-"+g(e).getAttribute("class");var p=f+" "+c,h=x[p]?++x[p].total:
0,m={};if(0<h){var n=c+"-stagger",m=f+" "+n;(f=!x[m])&&u.addClass(e,n);m=Z(e,m);f&&u.removeClass(e,n)}u.addClass(e,c);var n=e.data("$$ngAnimateCSS3Data")||{},k=Z(e,p);f=k.transitionDuration;k=k.animationDuration;if(b&&0===f&&0===k)return u.removeClass(e,c),!1;c=d||b&&0<f;b=0<k&&0<m.animationDelay&&0===m.animationDuration;e.data("$$ngAnimateCSS3Data",{stagger:m,cacheKey:p,running:n.running||0,itemIndex:h,blockTransition:c,closeAnimationFns:n.closeAnimationFns||[]});p=g(e);c&&(I(p,!0),d&&e.css(d));
b&&(p.style[K+"PlayState"]="paused");return!0}function D(a,e,b,c,d){function f(){e.off(D,h);u.removeClass(e,k);u.removeClass(e,t);z&&M.cancel(z);G(e,b);var a=g(e),c;for(c in s)a.style.removeProperty(s[c])}function h(a){a.stopPropagation();var b=a.originalEvent||a;a=b.$manualTimeStamp||b.timeStamp||Date.now();b=parseFloat(b.elapsedTime.toFixed(3));Math.max(a-H,0)>=C&&b>=x&&c()}var m=g(e);a=e.data("$$ngAnimateCSS3Data");if(-1!=m.getAttribute("class").indexOf(b)&&a){var k="",t="";n(b.split(" "),function(a,
b){var e=(0<b?" ":"")+a;k+=e+"-active";t+=e+"-pending"});var s=[],q=a.itemIndex,v=a.stagger,r=0;if(0<q){r=0;0<v.transitionDelay&&0===v.transitionDuration&&(r=v.transitionDelay*q);var y=0;0<v.animationDelay&&0===v.animationDuration&&(y=v.animationDelay*q,s.push(B+"animation-play-state"));r=Math.round(100*Math.max(r,y))/100}r||(u.addClass(e,k),a.blockTransition&&I(m,!1));var F=Z(e,a.cacheKey+" "+k),x=Math.max(F.transitionDuration,F.animationDuration);if(0===x)u.removeClass(e,k),G(e,b),c();else{!r&&
d&&0<Object.keys(d).length&&(F.transitionDuration||(e.css("transition",F.animationDuration+"s linear all"),s.push("transition")),e.css(d));var q=Math.max(F.transitionDelay,F.animationDelay),C=1E3*q;0<s.length&&(v=m.getAttribute("style")||"",";"!==v.charAt(v.length-1)&&(v+=";"),m.setAttribute("style",v+" "));var H=Date.now(),D=V+" "+$,q=1E3*(r+1.5*(q+x)),z;0<r&&(u.addClass(e,t),z=M(function(){z=null;0<F.transitionDuration&&I(m,!1);0<F.animationDuration&&(m.style[K+"PlayState"]="");u.addClass(e,k);
u.removeClass(e,t);d&&(0===F.transitionDuration&&e.css("transition",F.animationDuration+"s linear all"),e.css(d),s.push("transition"))},1E3*r,!1));e.on(D,h);a.closeAnimationFns.push(function(){f();c()});a.running++;P(e,q);return f}}else c()}function I(a,b){a.style[z+"Property"]=b?"none":""}function S(a,b,c,d){if(R(a,b,c,d))return function(a){a&&G(b,c)}}function T(a,b,c,d,f){if(b.data("$$ngAnimateCSS3Data"))return D(a,b,c,d,f);G(b,c);d()}function U(a,b,c,d,f){var g=S(a,b,c,f.from);if(g){var h=g;H(b,
function(){h=T(a,b,c,d,f.to)});return function(a){(h||t)(a)}}y();d()}function G(a,b){u.removeClass(a,b);var c=a.data("$$ngAnimateCSS3Data");c&&(c.running&&c.running--,c.running&&0!==c.running||a.removeData("$$ngAnimateCSS3Data"))}function q(a,b){var c="";a=aa(a)?a:a.split(/\s+/);n(a,function(a,d){a&&0<a.length&&(c+=(0<d?" ":"")+a+b)});return c}var B="",z,$,K,V;N.ontransitionend===W&&N.onwebkittransitionend!==W?(B="-webkit-",z="WebkitTransition",$="webkitTransitionEnd transitionend"):(z="transition",
$="transitionend");N.onanimationend===W&&N.onwebkitanimationend!==W?(B="-webkit-",K="WebkitAnimation",V="webkitAnimationEnd animationend"):(K="animation",V="animationend");var x={},a=0,c=[],b,d=null,h=0,k=[];return{animate:function(a,b,c,d,f,g){g=g||{};g.from=c;g.to=d;return U("animate",a,b,f,g)},enter:function(a,b,c){c=c||{};return U("enter",a,"ng-enter",b,c)},leave:function(a,b,c){c=c||{};return U("leave",a,"ng-leave",b,c)},move:function(a,b,c){c=c||{};return U("move",a,"ng-move",b,c)},beforeSetClass:function(a,
b,c,d,f){f=f||{};b=q(c,"-remove")+" "+q(b,"-add");if(f=S("setClass",a,b,f.from))return H(a,d),f;y();d()},beforeAddClass:function(a,b,c,d){d=d||{};if(b=S("addClass",a,q(b,"-add"),d.from))return H(a,c),b;y();c()},beforeRemoveClass:function(a,b,c,d){d=d||{};if(b=S("removeClass",a,q(b,"-remove"),d.from))return H(a,c),b;y();c()},setClass:function(a,b,c,d,f){f=f||{};c=q(c,"-remove");b=q(b,"-add");return T("setClass",a,c+" "+b,d,f.to)},addClass:function(a,b,c,d){d=d||{};return T("addClass",a,q(b,"-add"),
c,d.to)},removeClass:function(a,b,c,d){d=d||{};return T("removeClass",a,q(b,"-remove"),c,d.to)}}}])}])})(window,window.angular);
//# sourceMappingURL=angular-animate.min.js.map

},{}],3:[function(require,module,exports){
/*
 AngularJS v1.3.15
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(p,f,n){'use strict';f.module("ngCookies",["ng"]).factory("$cookies",["$rootScope","$browser",function(e,b){var c={},g={},h,k=!1,l=f.copy,m=f.isUndefined;b.addPollFn(function(){var a=b.cookies();h!=a&&(h=a,l(a,g),l(a,c),k&&e.$apply())})();k=!0;e.$watch(function(){var a,d,e;for(a in g)m(c[a])&&b.cookies(a,n);for(a in c)d=c[a],f.isString(d)||(d=""+d,c[a]=d),d!==g[a]&&(b.cookies(a,d),e=!0);if(e)for(a in d=b.cookies(),c)c[a]!==d[a]&&(m(d[a])?delete c[a]:c[a]=d[a])});return c}]).factory("$cookieStore",
["$cookies",function(e){return{get:function(b){return(b=e[b])?f.fromJson(b):b},put:function(b,c){e[b]=f.toJson(c)},remove:function(b){delete e[b]}}}])})(window,window.angular);
//# sourceMappingURL=angular-cookies.min.js.map

},{}],4:[function(require,module,exports){
'use strict';

require('./angular.min.js');
module.exports = angular;
},{"./angular.min.js":8}],5:[function(require,module,exports){
/*
 AngularJS v1.3.15
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(I,d,B){'use strict';function D(f,q){q=q||{};d.forEach(q,function(d,h){delete q[h]});for(var h in f)!f.hasOwnProperty(h)||"$"===h.charAt(0)&&"$"===h.charAt(1)||(q[h]=f[h]);return q}var w=d.$$minErr("$resource"),C=/^(\.[a-zA-Z_$][0-9a-zA-Z_$]*)+$/;d.module("ngResource",["ng"]).provider("$resource",function(){var f=this;this.defaults={stripTrailingSlashes:!0,actions:{get:{method:"GET"},save:{method:"POST"},query:{method:"GET",isArray:!0},remove:{method:"DELETE"},"delete":{method:"DELETE"}}};
this.$get=["$http","$q",function(q,h){function t(d,g){this.template=d;this.defaults=s({},f.defaults,g);this.urlParams={}}function v(x,g,l,m){function c(b,k){var c={};k=s({},g,k);r(k,function(a,k){u(a)&&(a=a());var d;if(a&&a.charAt&&"@"==a.charAt(0)){d=b;var e=a.substr(1);if(null==e||""===e||"hasOwnProperty"===e||!C.test("."+e))throw w("badmember",e);for(var e=e.split("."),n=0,g=e.length;n<g&&d!==B;n++){var h=e[n];d=null!==d?d[h]:B}}else d=a;c[k]=d});return c}function F(b){return b.resource}function e(b){D(b||
{},this)}var G=new t(x,m);l=s({},f.defaults.actions,l);e.prototype.toJSON=function(){var b=s({},this);delete b.$promise;delete b.$resolved;return b};r(l,function(b,k){var g=/^(POST|PUT|PATCH)$/i.test(b.method);e[k]=function(a,y,m,x){var n={},f,l,z;switch(arguments.length){case 4:z=x,l=m;case 3:case 2:if(u(y)){if(u(a)){l=a;z=y;break}l=y;z=m}else{n=a;f=y;l=m;break}case 1:u(a)?l=a:g?f=a:n=a;break;case 0:break;default:throw w("badargs",arguments.length);}var t=this instanceof e,p=t?f:b.isArray?[]:new e(f),
A={},v=b.interceptor&&b.interceptor.response||F,C=b.interceptor&&b.interceptor.responseError||B;r(b,function(b,a){"params"!=a&&"isArray"!=a&&"interceptor"!=a&&(A[a]=H(b))});g&&(A.data=f);G.setUrlParams(A,s({},c(f,b.params||{}),n),b.url);n=q(A).then(function(a){var c=a.data,g=p.$promise;if(c){if(d.isArray(c)!==!!b.isArray)throw w("badcfg",k,b.isArray?"array":"object",d.isArray(c)?"array":"object");b.isArray?(p.length=0,r(c,function(a){"object"===typeof a?p.push(new e(a)):p.push(a)})):(D(c,p),p.$promise=
g)}p.$resolved=!0;a.resource=p;return a},function(a){p.$resolved=!0;(z||E)(a);return h.reject(a)});n=n.then(function(a){var b=v(a);(l||E)(b,a.headers);return b},C);return t?n:(p.$promise=n,p.$resolved=!1,p)};e.prototype["$"+k]=function(a,b,c){u(a)&&(c=b,b=a,a={});a=e[k].call(this,a,this,b,c);return a.$promise||a}});e.bind=function(b){return v(x,s({},g,b),l)};return e}var E=d.noop,r=d.forEach,s=d.extend,H=d.copy,u=d.isFunction;t.prototype={setUrlParams:function(f,g,l){var m=this,c=l||m.template,h,
e,q=m.urlParams={};r(c.split(/\W/),function(b){if("hasOwnProperty"===b)throw w("badname");!/^\d+$/.test(b)&&b&&(new RegExp("(^|[^\\\\]):"+b+"(\\W|$)")).test(c)&&(q[b]=!0)});c=c.replace(/\\:/g,":");g=g||{};r(m.urlParams,function(b,k){h=g.hasOwnProperty(k)?g[k]:m.defaults[k];d.isDefined(h)&&null!==h?(e=encodeURIComponent(h).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"%20").replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+"),c=c.replace(new RegExp(":"+
k+"(\\W|$)","g"),function(b,a){return e+a})):c=c.replace(new RegExp("(/?):"+k+"(\\W|$)","g"),function(b,a,c){return"/"==c.charAt(0)?c:a+c})});m.defaults.stripTrailingSlashes&&(c=c.replace(/\/+$/,"")||"/");c=c.replace(/\/\.(?=\w+($|\?))/,".");f.url=c.replace(/\/\\\./,"/.");r(g,function(b,c){m.urlParams[c]||(f.params=f.params||{},f.params[c]=b)})}};return v}]})})(window,window.angular);
//# sourceMappingURL=angular-resource.min.js.map

},{}],6:[function(require,module,exports){
/*
 AngularJS v1.3.15
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(n,h,p){'use strict';function E(a){var e=[];r(e,h.noop).chars(a);return e.join("")}function g(a){var e={};a=a.split(",");var d;for(d=0;d<a.length;d++)e[a[d]]=!0;return e}function F(a,e){function d(a,b,d,l){b=h.lowercase(b);if(s[b])for(;f.last()&&t[f.last()];)c("",f.last());u[b]&&f.last()==b&&c("",b);(l=v[b]||!!l)||f.push(b);var m={};d.replace(G,function(a,b,e,c,d){m[b]=q(e||c||d||"")});e.start&&e.start(b,m,l)}function c(a,b){var c=0,d;if(b=h.lowercase(b))for(c=f.length-1;0<=c&&f[c]!=b;c--);
if(0<=c){for(d=f.length-1;d>=c;d--)e.end&&e.end(f[d]);f.length=c}}"string"!==typeof a&&(a=null===a||"undefined"===typeof a?"":""+a);var b,k,f=[],m=a,l;for(f.last=function(){return f[f.length-1]};a;){l="";k=!0;if(f.last()&&w[f.last()])a=a.replace(new RegExp("([\\W\\w]*)<\\s*\\/\\s*"+f.last()+"[^>]*>","i"),function(a,b){b=b.replace(H,"$1").replace(I,"$1");e.chars&&e.chars(q(b));return""}),c("",f.last());else{if(0===a.indexOf("\x3c!--"))b=a.indexOf("--",4),0<=b&&a.lastIndexOf("--\x3e",b)===b&&(e.comment&&
e.comment(a.substring(4,b)),a=a.substring(b+3),k=!1);else if(x.test(a)){if(b=a.match(x))a=a.replace(b[0],""),k=!1}else if(J.test(a)){if(b=a.match(y))a=a.substring(b[0].length),b[0].replace(y,c),k=!1}else K.test(a)&&((b=a.match(z))?(b[4]&&(a=a.substring(b[0].length),b[0].replace(z,d)),k=!1):(l+="<",a=a.substring(1)));k&&(b=a.indexOf("<"),l+=0>b?a:a.substring(0,b),a=0>b?"":a.substring(b),e.chars&&e.chars(q(l)))}if(a==m)throw L("badparse",a);m=a}c()}function q(a){if(!a)return"";A.innerHTML=a.replace(/</g,
"&lt;");return A.textContent}function B(a){return a.replace(/&/g,"&amp;").replace(M,function(a){var d=a.charCodeAt(0);a=a.charCodeAt(1);return"&#"+(1024*(d-55296)+(a-56320)+65536)+";"}).replace(N,function(a){return"&#"+a.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}function r(a,e){var d=!1,c=h.bind(a,a.push);return{start:function(a,k,f){a=h.lowercase(a);!d&&w[a]&&(d=a);d||!0!==C[a]||(c("<"),c(a),h.forEach(k,function(d,f){var k=h.lowercase(f),g="img"===a&&"src"===k||"background"===
k;!0!==O[k]||!0===D[k]&&!e(d,g)||(c(" "),c(f),c('="'),c(B(d)),c('"'))}),c(f?"/>":">"))},end:function(a){a=h.lowercase(a);d||!0!==C[a]||(c("</"),c(a),c(">"));a==d&&(d=!1)},chars:function(a){d||c(B(a))}}}var L=h.$$minErr("$sanitize"),z=/^<((?:[a-zA-Z])[\w:-]*)((?:\s+[\w:-]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)\s*(>?)/,y=/^<\/\s*([\w:-]+)[^>]*>/,G=/([\w:-]+)(?:\s*=\s*(?:(?:"((?:[^"])*)")|(?:'((?:[^'])*)')|([^>\s]+)))?/g,K=/^</,J=/^<\//,H=/\x3c!--(.*?)--\x3e/g,x=/<!DOCTYPE([^>]*?)>/i,
I=/<!\[CDATA\[(.*?)]]\x3e/g,M=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,N=/([^\#-~| |!])/g,v=g("area,br,col,hr,img,wbr");n=g("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr");p=g("rp,rt");var u=h.extend({},p,n),s=h.extend({},n,g("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,script,section,table,ul")),t=h.extend({},p,g("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var"));
n=g("animate,animateColor,animateMotion,animateTransform,circle,defs,desc,ellipse,font-face,font-face-name,font-face-src,g,glyph,hkern,image,linearGradient,line,marker,metadata,missing-glyph,mpath,path,polygon,polyline,radialGradient,rect,set,stop,svg,switch,text,title,tspan,use");var w=g("script,style"),C=h.extend({},v,s,t,u,n),D=g("background,cite,href,longdesc,src,usemap,xlink:href");n=g("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,target,title,type,valign,value,vspace,width");
p=g("accent-height,accumulate,additive,alphabetic,arabic-form,ascent,attributeName,attributeType,baseProfile,bbox,begin,by,calcMode,cap-height,class,color,color-rendering,content,cx,cy,d,dx,dy,descent,display,dur,end,fill,fill-rule,font-family,font-size,font-stretch,font-style,font-variant,font-weight,from,fx,fy,g1,g2,glyph-name,gradientUnits,hanging,height,horiz-adv-x,horiz-origin-x,ideographic,k,keyPoints,keySplines,keyTimes,lang,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mathematical,max,min,offset,opacity,orient,origin,overline-position,overline-thickness,panose-1,path,pathLength,points,preserveAspectRatio,r,refX,refY,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,rotate,rx,ry,slope,stemh,stemv,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,systemLanguage,target,text-anchor,to,transform,type,u1,u2,underline-position,underline-thickness,unicode,unicode-range,units-per-em,values,version,viewBox,visibility,width,widths,x,x-height,x1,x2,xlink:actuate,xlink:arcrole,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,xml:space,xmlns,xmlns:xlink,y,y1,y2,zoomAndPan");
var O=h.extend({},D,p,n),A=document.createElement("pre");h.module("ngSanitize",[]).provider("$sanitize",function(){this.$get=["$$sanitizeUri",function(a){return function(e){var d=[];F(e,r(d,function(c,b){return!/^unsafe/.test(a(c,b))}));return d.join("")}}]});h.module("ngSanitize").filter("linky",["$sanitize",function(a){var e=/((ftp|https?):\/\/|(www\.)|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"\u201d\u2019]/,d=/^mailto:/;return function(c,b){function k(a){a&&g.push(E(a))}function f(a,c){g.push("<a ");
h.isDefined(b)&&g.push('target="',b,'" ');g.push('href="',a.replace(/"/g,"&quot;"),'">');k(c);g.push("</a>")}if(!c)return c;for(var m,l=c,g=[],n,p;m=l.match(e);)n=m[0],m[2]||m[4]||(n=(m[3]?"http://":"mailto:")+n),p=m.index,k(l.substr(0,p)),f(n,m[0].replace(d,"")),l=l.substring(p+m[0].length);k(l);return a(g.join(""))}}])})(window,window.angular);
//# sourceMappingURL=angular-sanitize.min.js.map

},{}],7:[function(require,module,exports){
/**
 * State-based routing for AngularJS
 * @version v0.2.13
 * @link http://angular-ui.github.com/
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
"undefined" != typeof module && "undefined" != typeof exports && module.exports === exports && (module.exports = "ui.router"), function (a, b, c) {
    "use strict";
    function d(a, b) {
        return M(new (M(function () {
        }, {prototype: a})), b)
    }

    function e(a) {
        return L(arguments, function (b) {
            b !== a && L(b, function (b, c) {
                a.hasOwnProperty(c) || (a[c] = b)
            })
        }), a
    }

    function f(a, b) {
        var c = [];
        for (var d in a.path) {
            if (a.path[d] !== b.path[d]) {
                break;
            }
            c.push(a.path[d])
        }
        return c
    }

    function g(a) {
        if (Object.keys) {
            return Object.keys(a);
        }
        var c = [];
        return b.forEach(a, function (a, b) {
            c.push(b)
        }), c
    }

    function h(a, b) {
        if (Array.prototype.indexOf) {
            return a.indexOf(b, Number(arguments[2]) || 0);
        }
        var c = a.length >>> 0, d = Number(arguments[2]) || 0;
        for (d = 0 > d ? Math.ceil(d) : Math.floor(d), 0 > d && (d += c); c > d; d++)if (d in a && a[d] === b) {
            return d;
        }
        return -1
    }

    function i(a, b, c, d) {
        var e, i = f(c, d), j = {}, k = [];
        for (var l in i)if (i[l].params && (e = g(i[l].params), e.length)) {
            for (var m in e)h(k, e[m]) >= 0 || (k.push(e[m]), j[e[m]] = a[e[m]]);
        }
        return M({}, j, b)
    }

    function j(a, b, c) {
        if (!c) {
            c = [];
            for (var d in a)c.push(d)
        }
        for (var e = 0; e < c.length; e++) {
            var f = c[e];
            if (a[f] != b[f]) {
                return !1
            }
        }
        return !0
    }

    function k(a, b) {
        var c = {};
        return L(a, function (a) {
            c[a] = b[a]
        }), c
    }

    function l(a) {
        var b = {}, c = Array.prototype.concat.apply(Array.prototype, Array.prototype.slice.call(arguments, 1));
        for (var d in a)-1 == h(c, d) && (b[d] = a[d]);
        return b
    }

    function m(a, b) {
        var c = K(a), d = c ? [] : {};
        return L(a, function (a, e) {
            b(a, e) && (d[c ? d.length : e] = a)
        }), d
    }

    function n(a, b) {
        var c = K(a) ? [] : {};
        return L(a, function (a, d) {
            c[d] = b(a, d)
        }), c
    }

    function o(a, b) {
        var d = 1, f = 2, i = {}, j = [], k = i, m = M(a.when(i), {$$promises: i, $$values: i});
        this.study = function (i) {
            function n(a, c) {
                if (s[c] !== f) {
                    if (r.push(c), s[c] === d) {
                        throw r.splice(0, h(r, c)), new Error("Cyclic dependency: " + r.join(" -> "));
                    }
                    if (s[c] = d, I(a)) {
                        q.push(c, [function () {
                            return b.get(a)
                        }], j);
                    } else {
                        var e = b.annotate(a);
                        L(e, function (a) {
                            a !== c && i.hasOwnProperty(a) && n(i[a], a)
                        }), q.push(c, a, e)
                    }
                    r.pop(), s[c] = f
                }
            }

            function o(a) {
                return J(a) && a.then && a.$$promises
            }

            if (!J(i)) {
                throw new Error("'invocables' must be an object");
            }
            var p = g(i || {}), q = [], r = [], s = {};
            return L(i, n), i = r = s = null, function (d, f, g) {
                function h() {
                    --u || (v || e(t, f.$$values), r.$$values = t, r.$$promises = r.$$promises || !0, delete r.$$inheritedValues, n.resolve(t))
                }

                function i(a) {
                    r.$$failure = a, n.reject(a)
                }

                function j(c, e, f) {
                    function j(a) {
                        l.reject(a), i(a)
                    }

                    function k() {
                        if (!G(r.$$failure)) {
                            try {
                                l.resolve(b.invoke(e, g, t)), l.promise.then(function (a) {
                                    t[c] = a, h()
                                }, j)
                            } catch (a) {
                                j(a)
                            }
                        }
                    }

                    var l = a.defer(), m = 0;
                    L(f, function (a) {
                        s.hasOwnProperty(a) && !d.hasOwnProperty(a) && (m++, s[a].then(function (b) {
                            t[a] = b, --m || k()
                        }, j))
                    }), m || k(), s[c] = l.promise
                }

                if (o(d) && g === c && (g = f, f = d, d = null), d) {
                    if (!J(d)) {
                        throw new Error("'locals' must be an object")
                    }
                } else {
                    d = k;
                }
                if (f) {
                    if (!o(f)) {
                        throw new Error("'parent' must be a promise returned by $resolve.resolve()")
                    }
                } else {
                    f = m;
                }
                var n = a.defer(), r = n.promise, s = r.$$promises = {}, t = M({}, d), u = 1 + q.length / 3, v = !1;
                if (G(f.$$failure)) {
                    return i(f.$$failure), r;
                }
                f.$$inheritedValues && e(t, l(f.$$inheritedValues, p)), M(s, f.$$promises), f.$$values ? (v = e(t, l(f.$$values, p)), r.$$inheritedValues = l(f.$$values, p), h()) : (f.$$inheritedValues && (r.$$inheritedValues = l(f.$$inheritedValues, p)), f.then(h, i));
                for (var w = 0, x = q.length; x > w; w += 3)d.hasOwnProperty(q[w]) ? h() : j(q[w], q[w + 1], q[w + 2]);
                return r
            }
        }, this.resolve = function (a, b, c, d) {
            return this.study(a)(b, c, d)
        }
    }

    function p(a, b, c) {
        this.fromConfig = function (a, b, c) {
            return G(a.template) ? this.fromString(a.template, b) : G(a.templateUrl) ? this.fromUrl(a.templateUrl, b) : G(a.templateProvider) ? this.fromProvider(a.templateProvider, b, c) : null
        }, this.fromString = function (a, b) {
            return H(a) ? a(b) : a
        }, this.fromUrl = function (c, d) {
            return H(c) && (c = c(d)), null == c ? null : a.get(c, {
                cache: b,
                headers: {Accept: "text/html"}
            }).then(function (a) {
                return a.data
            })
        }, this.fromProvider = function (a, b, d) {
            return c.invoke(a, null, d || {params: b})
        }
    }

    function q(a, b, e) {
        function f(b, c, d, e) {
            if (q.push(b), o[b]) {
                return o[b];
            }
            if (!/^\w+(-+\w+)*(?:\[\])?$/.test(b)) {
                throw new Error("Invalid parameter name '" + b + "' in pattern '" + a + "'");
            }
            if (p[b]) {
                throw new Error("Duplicate parameter name '" + b + "' in pattern '" + a + "'");
            }
            return p[b] = new O.Param(b, c, d, e), p[b]
        }

        function g(a, b, c) {
            var d = ["", ""], e = a.replace(/[\\\[\]\^$*+?.()|{}]/g, "\\$&");
            if (!b) {
                return e;
            }
            switch (c) {
                case!1:
                    d = ["(", ")"];
                    break;
                case!0:
                    d = ["?(", ")?"];
                    break;
                default:
                    d = ["(" + c + "|", ")?"]
            }
            return e + d[0] + b + d[1]
        }

        function h(c, e) {
            var f, g, h, i, j;
            return f = c[2] || c[3], j = b.params[f], h = a.substring(m, c.index), g = e ? c[4] : c[4] || ("*" == c[1] ? ".*" : null), i = O.type(g || "string") || d(O.type("string"), {pattern: new RegExp(g)}), {
                id: f,
                regexp: g,
                segment: h,
                type: i,
                cfg: j
            }
        }

        b = M({params: {}}, J(b) ? b : {});
        var i, j = /([:*])([\w\[\]]+)|\{([\w\[\]]+)(?:\:((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g, k = /([:]?)([\w\[\]-]+)|\{([\w\[\]-]+)(?:\:((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g, l = "^", m = 0, n = this.segments = [], o = e ? e.params : {}, p = this.params = e ? e.params.$$new() : new O.ParamSet, q = [];
        this.source = a;
        for (var r, s, t; (i = j.exec(a)) && (r = h(i, !1), !(r.segment.indexOf("?") >= 0));)s = f(r.id, r.type, r.cfg, "path"), l += g(r.segment, s.type.pattern.source, s.squash), n.push(r.segment), m = j.lastIndex;
        t = a.substring(m);
        var u = t.indexOf("?");
        if (u >= 0) {
            var v = this.sourceSearch = t.substring(u);
            if (t = t.substring(0, u), this.sourcePath = a.substring(0, m + u), v.length > 0) {
                for (m = 0; i = k.exec(v);)r = h(i, !0), s = f(r.id, r.type, r.cfg, "search"), m = j.lastIndex
            }
        } else {
            this.sourcePath = a, this.sourceSearch = "";
        }
        l += g(t) + (b.strict === !1 ? "/?" : "") + "$", n.push(t), this.regexp = new RegExp(l, b.caseInsensitive ? "i" : c), this.prefix = n[0], this.$$paramNames = q
    }

    function r(a) {
        M(this, a)
    }

    function s() {
        function a(a) {
            return null != a ? a.toString().replace(/\//g, "%2F") : a
        }

        function e(a) {
            return null != a ? a.toString().replace(/%2F/g, "/") : a
        }

        function f(a) {
            return this.pattern.test(a)
        }

        function i() {
            return {strict: t, caseInsensitive: p}
        }

        function j(a) {
            return H(a) || K(a) && H(a[a.length - 1])
        }

        function k() {
            for (; x.length;) {
                var a = x.shift();
                if (a.pattern) {
                    throw new Error("You cannot override a type's .pattern at runtime.");
                }
                b.extend(v[a.name], o.invoke(a.def))
            }
        }

        function l(a) {
            M(this, a || {})
        }

        O = this;
        var o, p = !1, t = !0, u = !1, v = {}, w = !0, x = [], y = {
            string: {
                encode: a,
                decode: e,
                is: f,
                pattern: /[^/]*/
            },
            "int": {
                encode: a, decode: function (a) {
                    return parseInt(a, 10)
                }, is: function (a) {
                    return G(a) && this.decode(a.toString()) === a
                }, pattern: /\d+/
            },
            bool: {
                encode: function (a) {
                    return a ? 1 : 0
                }, decode: function (a) {
                    return 0 !== parseInt(a, 10)
                }, is: function (a) {
                    return a === !0 || a === !1
                }, pattern: /0|1/
            },
            date: {
                encode: function (a) {
                    return this.is(a) ? [a.getFullYear(), ("0" + (a.getMonth() + 1)).slice(-2), ("0" + a.getDate()).slice(-2)].join("-") : c
                },
                decode: function (a) {
                    if (this.is(a)) {
                        return a;
                    }
                    var b = this.capture.exec(a);
                    return b ? new Date(b[1], b[2] - 1, b[3]) : c
                },
                is: function (a) {
                    return a instanceof Date && !isNaN(a.valueOf())
                },
                equals: function (a, b) {
                    return this.is(a) && this.is(b) && a.toISOString() === b.toISOString()
                },
                pattern: /[0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2][0-9]|3[0-1])/,
                capture: /([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/
            },
            json: {
                encode: b.toJson,
                decode: b.fromJson,
                is: b.isObject,
                equals: b.equals,
                pattern: /[^/]*/
            },
            any: {
                encode: b.identity,
                decode: b.identity,
                is: b.identity,
                equals: b.equals,
                pattern: /.*/
            }
        };
        s.$$getDefaultValue = function (a) {
            if (!j(a.value)) {
                return a.value;
            }
            if (!o) {
                throw new Error("Injectable functions cannot be called at configuration time");
            }
            return o.invoke(a.value)
        }, this.caseInsensitive = function (a) {
            return G(a) && (p = a), p
        }, this.strictMode = function (a) {
            return G(a) && (t = a), t
        }, this.defaultSquashPolicy = function (a) {
            if (!G(a)) {
                return u;
            }
            if (a !== !0 && a !== !1 && !I(a)) {
                throw new Error("Invalid squash policy: " + a + ". Valid policies: false, true, arbitrary-string");
            }
            return u = a, a
        }, this.compile = function (a, b) {
            return new q(a, M(i(), b))
        }, this.isMatcher = function (a) {
            if (!J(a)) {
                return !1;
            }
            var b = !0;
            return L(q.prototype, function (c, d) {
                H(c) && (b = b && G(a[d]) && H(a[d]))
            }), b
        }, this.type = function (a, b, c) {
            if (!G(b)) {
                return v[a];
            }
            if (v.hasOwnProperty(a)) {
                throw new Error("A type named '" + a + "' has already been defined.");
            }
            return v[a] = new r(M({name: a}, b)), c && (x.push({name: a, def: c}), w || k()), this
        }, L(y, function (a, b) {
            v[b] = new r(M({name: b}, a))
        }), v = d(v, {}), this.$get = ["$injector", function (a) {
            return o = a, w = !1, k(), L(y, function (a, b) {
                v[b] || (v[b] = new r(a))
            }), this
        }], this.Param = function (a, b, d, e) {
            function f(a) {
                var b = J(a) ? g(a) : [], c = -1 === h(b, "value") && -1 === h(b, "type") && -1 === h(b, "squash") && -1 === h(b, "array");
                return c && (a = {value: a}), a.$$fn = j(a.value) ? a.value : function () {
                    return a.value
                }, a
            }

            function i(b, c, d) {
                if (b.type && c) {
                    throw new Error("Param '" + a + "' has two type configurations.");
                }
                return c ? c : b.type ? b.type instanceof r ? b.type : new r(b.type) : "config" === d ? v.any : v.string
            }

            function k() {
                var b = {array: "search" === e ? "auto" : !1}, c = a.match(/\[\]$/) ? {array: !0} : {};
                return M(b, c, d).array
            }

            function l(a, b) {
                var c = a.squash;
                if (!b || c === !1) {
                    return !1;
                }
                if (!G(c) || null == c) {
                    return u;
                }
                if (c === !0 || I(c)) {
                    return c;
                }
                throw new Error("Invalid squash policy: '" + c + "'. Valid policies: false, true, or arbitrary string")
            }

            function p(a, b, d, e) {
                var f, g, i = [{from: "", to: d || b ? c : ""}, {from: null, to: d || b ? c : ""}];
                return f = K(a.replace) ? a.replace : [], I(e) && f.push({
                    from: e,
                    to: c
                }), g = n(f, function (a) {
                    return a.from
                }), m(i, function (a) {
                    return -1 === h(g, a.from)
                }).concat(f)
            }

            function q() {
                if (!o) {
                    throw new Error("Injectable functions cannot be called at configuration time");
                }
                return o.invoke(d.$$fn)
            }

            function s(a) {
                function b(a) {
                    return function (b) {
                        return b.from === a
                    }
                }

                function c(a) {
                    var c = n(m(w.replace, b(a)), function (a) {
                        return a.to
                    });
                    return c.length ? c[0] : a
                }

                return a = c(a), G(a) ? w.type.decode(a) : q()
            }

            function t() {
                return "{Param:" + a + " " + b + " squash: '" + z + "' optional: " + y + "}"
            }

            var w = this;
            d = f(d), b = i(d, b, e);
            var x = k();
            b = x ? b.$asArray(x, "search" === e) : b, "string" !== b.name || x || "path" !== e || d.value !== c || (d.value = "");
            var y = d.value !== c, z = l(d, y), A = p(d, x, y, z);
            M(this, {
                id: a,
                type: b,
                location: e,
                array: x,
                squash: z,
                replace: A,
                isOptional: y,
                value: s,
                dynamic: c,
                config: d,
                toString: t
            })
        }, l.prototype = {
            $$new: function () {
                return d(this, M(new l, {$$parent: this}))
            }, $$keys: function () {
                for (var a = [], b = [], c = this, d = g(l.prototype); c;)b.push(c), c = c.$$parent;
                return b.reverse(), L(b, function (b) {
                    L(g(b), function (b) {
                        -1 === h(a, b) && -1 === h(d, b) && a.push(b)
                    })
                }), a
            }, $$values: function (a) {
                var b = {}, c = this;
                return L(c.$$keys(), function (d) {
                    b[d] = c[d].value(a && a[d])
                }), b
            }, $$equals: function (a, b) {
                var c = !0, d = this;
                return L(d.$$keys(), function (e) {
                    var f = a && a[e], g = b && b[e];
                    d[e].type.equals(f, g) || (c = !1)
                }), c
            }, $$validates: function (a) {
                var b, c, d, e = !0, f = this;
                return L(this.$$keys(), function (g) {
                    d = f[g], c = a[g], b = !c && d.isOptional, e = e && (b || !!d.type.is(c))
                }), e
            }, $$parent: c
        }, this.ParamSet = l
    }

    function t(a, d) {
        function e(a) {
            var b = /^\^((?:\\[^a-zA-Z0-9]|[^\\\[\]\^$*+?.()|{}]+)*)/.exec(a.source);
            return null != b ? b[1].replace(/\\(.)/g, "$1") : ""
        }

        function f(a, b) {
            return a.replace(/\$(\$|\d{1,2})/, function (a, c) {
                return b["$" === c ? 0 : Number(c)]
            })
        }

        function g(a, b, c) {
            if (!c) {
                return !1;
            }
            var d = a.invoke(b, b, {$match: c});
            return G(d) ? d : !0
        }

        function h(d, e, f, g) {
            function h(a, b, c) {
                return "/" === p ? a : b ? p.slice(0, -1) + a : c ? p.slice(1) + a : a
            }

            function m(a) {
                function b(a) {
                    var b = a(f, d);
                    return b ? (I(b) && d.replace().url(b), !0) : !1
                }

                if (!a || !a.defaultPrevented) {
                    var e = o && d.url() === o;
                    if (o = c, e) {
                        return !0;
                    }
                    var g, h = j.length;
                    for (g = 0; h > g; g++)if (b(j[g])) {
                        return;
                    }
                    k && b(k)
                }
            }

            function n() {
                return i = i || e.$on("$locationChangeSuccess", m)
            }

            var o, p = g.baseHref(), q = d.url();
            return l || n(), {
                sync: function () {
                    m()
                }, listen: function () {
                    return n()
                }, update: function (a) {
                    return a ? void(q = d.url()) : void(d.url() !== q && (d.url(q), d.replace()))
                }, push: function (a, b, e) {
                    d.url(a.format(b || {})), o = e && e.$$avoidResync ? d.url() : c, e && e.replace && d.replace()
                }, href: function (c, e, f) {
                    if (!c.validates(e)) {
                        return null;
                    }
                    var g = a.html5Mode();
                    b.isObject(g) && (g = g.enabled);
                    var i = c.format(e);
                    if (f = f || {}, g || null === i || (i = "#" + a.hashPrefix() + i), i = h(i, g, f.absolute), !f.absolute || !i) {
                        return i;
                    }
                    var j = !g && i ? "/" : "", k = d.port();
                    return k = 80 === k || 443 === k ? "" : ":" + k, [d.protocol(), "://", d.host(), k, j, i].join("")
                }
            }
        }

        var i, j = [], k = null, l = !1;
        this.rule = function (a) {
            if (!H(a)) {
                throw new Error("'rule' must be a function");
            }
            return j.push(a), this
        }, this.otherwise = function (a) {
            if (I(a)) {
                var b = a;
                a = function () {
                    return b
                }
            } else if (!H(a)) {
                throw new Error("'rule' must be a function");
            }
            return k = a, this
        }, this.when = function (a, b) {
            var c, h = I(b);
            if (I(a) && (a = d.compile(a)), !h && !H(b) && !K(b)) {
                throw new Error("invalid 'handler' in when()");
            }
            var i = {
                matcher: function (a, b) {
                    return h && (c = d.compile(b), b = ["$match", function (a) {
                        return c.format(a)
                    }]), M(function (c, d) {
                        return g(c, b, a.exec(d.path(), d.search()))
                    }, {prefix: I(a.prefix) ? a.prefix : ""})
                }, regex: function (a, b) {
                    if (a.global || a.sticky) {
                        throw new Error("when() RegExp must not be global or sticky");
                    }
                    return h && (c = b, b = ["$match", function (a) {
                        return f(c, a)
                    }]), M(function (c, d) {
                        return g(c, b, a.exec(d.path()))
                    }, {prefix: e(a)})
                }
            }, j = {matcher: d.isMatcher(a), regex: a instanceof RegExp};
            for (var k in j)if (j[k]) {
                return this.rule(i[k](a, b));
            }
            throw new Error("invalid 'what' in when()")
        }, this.deferIntercept = function (a) {
            a === c && (a = !0), l = a
        }, this.$get = h, h.$inject = ["$location", "$rootScope", "$injector", "$browser"]
    }

    function u(a, e) {
        function f(a) {
            return 0 === a.indexOf(".") || 0 === a.indexOf("^")
        }

        function l(a, b) {
            if (!a) {
                return c;
            }
            var d = I(a), e = d ? a : a.name, g = f(e);
            if (g) {
                if (!b) {
                    throw new Error("No reference point given for path '" + e + "'");
                }
                b = l(b);
                for (var h = e.split("."), i = 0, j = h.length, k = b; j > i; i++)if ("" !== h[i] || 0 !== i) {
                    if ("^" !== h[i]) {
                        break;
                    }
                    if (!k.parent) {
                        throw new Error("Path '" + e + "' not valid for state '" + b.name + "'");
                    }
                    k = k.parent
                } else {
                    k = b;
                }
                h = h.slice(i).join("."), e = k.name + (k.name && h ? "." : "") + h
            }
            var m = y[e];
            return !m || !d && (d || m !== a && m.self !== a) ? c : m
        }

        function m(a, b) {
            z[a] || (z[a] = []), z[a].push(b)
        }

        function o(a) {
            for (var b = z[a] || []; b.length;)p(b.shift())
        }

        function p(b) {
            b = d(b, {
                self: b, resolve: b.resolve || {}, toString: function () {
                    return this.name
                }
            });
            var c = b.name;
            if (!I(c) || c.indexOf("@") >= 0) {
                throw new Error("State must have a valid name");
            }
            if (y.hasOwnProperty(c)) {
                throw new Error("State '" + c + "'' is already defined");
            }
            var e = -1 !== c.indexOf(".") ? c.substring(0, c.lastIndexOf(".")) : I(b.parent) ? b.parent : J(b.parent) && I(b.parent.name) ? b.parent.name : "";
            if (e && !y[e]) {
                return m(e, b.self);
            }
            for (var f in B)H(B[f]) && (b[f] = B[f](b, B.$delegates[f]));
            return y[c] = b, !b[A] && b.url && a.when(b.url, ["$match", "$stateParams", function (a, c) {
                x.$current.navigable == b && j(a, c) || x.transitionTo(b, a, {
                    inherit: !0,
                    location: !1
                })
            }]), o(c), b
        }

        function q(a) {
            return a.indexOf("*") > -1
        }

        function r(a) {
            var b = a.split("."), c = x.$current.name.split(".");
            if ("**" === b[0] && (c = c.slice(h(c, b[1])), c.unshift("**")), "**" === b[b.length - 1] && (c.splice(h(c, b[b.length - 2]) + 1, Number.MAX_VALUE), c.push("**")), b.length != c.length) {
                return !1;
            }
            for (var d = 0, e = b.length; e > d; d++)"*" === b[d] && (c[d] = "*");
            return c.join("") === b.join("")
        }

        function s(a, b) {
            return I(a) && !G(b) ? B[a] : H(b) && I(a) ? (B[a] && !B.$delegates[a] && (B.$delegates[a] = B[a]), B[a] = b, this) : this
        }

        function t(a, b) {
            return J(a) ? b = a : b.name = a, p(b), this
        }

        function u(a, e, f, h, m, o, p) {
            function s(b, c, d, f) {
                var g = a.$broadcast("$stateNotFound", b, c, d);
                if (g.defaultPrevented) {
                    return p.update(), B;
                }
                if (!g.retry) {
                    return null;
                }
                if (f.$retry) {
                    return p.update(), C;
                }
                var h = x.transition = e.when(g.retry);
                return h.then(function () {
                    return h !== x.transition ? u : (b.options.$retry = !0, x.transitionTo(b.to, b.toParams, b.options))
                }, function () {
                    return B
                }), p.update(), h
            }

            function t(a, c, d, g, i, j) {
                var l = d ? c : k(a.params.$$keys(), c), n = {$stateParams: l};
                i.resolve = m.resolve(a.resolve, n, i.resolve, a);
                var o = [i.resolve.then(function (a) {
                    i.globals = a
                })];
                return g && o.push(g), L(a.views, function (c, d) {
                    var e = c.resolve && c.resolve !== a.resolve ? c.resolve : {};
                    e.$template = [function () {
                        return f.load(d, {view: c, locals: n, params: l, notify: j.notify}) || ""
                    }], o.push(m.resolve(e, n, i.resolve, a).then(function (f) {
                        if (H(c.controllerProvider) || K(c.controllerProvider)) {
                            var g = b.extend({}, e, n);
                            f.$$controller = h.invoke(c.controllerProvider, null, g)
                        } else {
                            f.$$controller = c.controller;
                        }
                        f.$$state = a, f.$$controllerAs = c.controllerAs, i[d] = f
                    }))
                }), e.all(o).then(function () {
                    return i
                })
            }

            var u = e.reject(new Error("transition superseded")), z = e.reject(new Error("transition prevented")), B = e.reject(new Error("transition aborted")), C = e.reject(new Error("transition failed"));
            return w.locals = {resolve: null, globals: {$stateParams: {}}}, x = {
                params: {},
                current: w.self,
                $current: w,
                transition: null
            }, x.reload = function () {
                return x.transitionTo(x.current, o, {reload: !0, inherit: !1, notify: !0})
            }, x.go = function (a, b, c) {
                return x.transitionTo(a, b, M({inherit: !0, relative: x.$current}, c))
            }, x.transitionTo = function (b, c, f) {
                c = c || {}, f = M({
                    location: !0,
                    inherit: !1,
                    relative: null,
                    notify: !0,
                    reload: !1,
                    $retry: !1
                }, f || {});
                var g, j = x.$current, m = x.params, n = j.path, q = l(b, f.relative);
                if (!G(q)) {
                    var r = {to: b, toParams: c, options: f}, y = s(r, j.self, m, f);
                    if (y) {
                        return y;
                    }
                    if (b = r.to, c = r.toParams, f = r.options, q = l(b, f.relative), !G(q)) {
                        if (!f.relative) {
                            throw new Error("No such state '" + b + "'");
                        }
                        throw new Error("Could not resolve '" + b + "' from state '" + f.relative + "'")
                    }
                }
                if (q[A]) {
                    throw new Error("Cannot transition to abstract state '" + b + "'");
                }
                if (f.inherit && (c = i(o, c || {}, x.$current, q)), !q.params.$$validates(c)) {
                    return C;
                }
                c = q.params.$$values(c), b = q;
                var B = b.path, D = 0, E = B[D], F = w.locals, H = [];
                if (!f.reload) {
                    for (; E && E === n[D] && E.ownParams.$$equals(c, m);)F = H[D] = E.locals, D++, E = B[D];
                }
                if (v(b, j, F, f)) {
                    return b.self.reloadOnSearch !== !1 && p.update(), x.transition = null, e.when(x.current);
                }
                if (c = k(b.params.$$keys(), c || {}), f.notify && a.$broadcast("$stateChangeStart", b.self, c, j.self, m).defaultPrevented) {
                    return p.update(), z;
                }
                for (var I = e.when(F), J = D; J < B.length; J++, E = B[J])F = H[J] = d(F), I = t(E, c, E === b, I, F, f);
                var K = x.transition = I.then(function () {
                    var d, e, g;
                    if (x.transition !== K) {
                        return u;
                    }
                    for (d = n.length - 1; d >= D; d--)g = n[d], g.self.onExit && h.invoke(g.self.onExit, g.self, g.locals.globals), g.locals = null;
                    for (d = D; d < B.length; d++)e = B[d], e.locals = H[d], e.self.onEnter && h.invoke(e.self.onEnter, e.self, e.locals.globals);
                    return x.transition !== K ? u : (x.$current = b, x.current = b.self, x.params = c, N(x.params, o), x.transition = null, f.location && b.navigable && p.push(b.navigable.url, b.navigable.locals.globals.$stateParams, {
                        $$avoidResync: !0,
                        replace: "replace" === f.location
                    }), f.notify && a.$broadcast("$stateChangeSuccess", b.self, c, j.self, m), p.update(!0), x.current)
                }, function (d) {
                    return x.transition !== K ? u : (x.transition = null, g = a.$broadcast("$stateChangeError", b.self, c, j.self, m, d), g.defaultPrevented || p.update(), e.reject(d))
                });
                return K
            }, x.is = function (a, b, d) {
                d = M({relative: x.$current}, d || {});
                var e = l(a, d.relative);
                return G(e) ? x.$current !== e ? !1 : b ? j(e.params.$$values(b), o) : !0 : c
            }, x.includes = function (a, b, d) {
                if (d = M({relative: x.$current}, d || {}), I(a) && q(a)) {
                    if (!r(a)) {
                        return !1;
                    }
                    a = x.$current.name
                }
                var e = l(a, d.relative);
                return G(e) ? G(x.$current.includes[e.name]) ? b ? j(e.params.$$values(b), o, g(b)) : !0 : !1 : c
            }, x.href = function (a, b, d) {
                d = M({lossy: !0, inherit: !0, absolute: !1, relative: x.$current}, d || {});
                var e = l(a, d.relative);
                if (!G(e)) {
                    return null;
                }
                d.inherit && (b = i(o, b || {}, x.$current, e));
                var f = e && d.lossy ? e.navigable : e;
                return f && f.url !== c && null !== f.url ? p.href(f.url, k(e.params.$$keys(), b || {}), {absolute: d.absolute}) : null
            }, x.get = function (a, b) {
                if (0 === arguments.length) {
                    return n(g(y), function (a) {
                        return y[a].self
                    });
                }
                var c = l(a, b || x.$current);
                return c && c.self ? c.self : null
            }, x
        }

        function v(a, b, c, d) {
            return a !== b || (c !== b.locals || d.reload) && a.self.reloadOnSearch !== !1 ? void 0 : !0
        }

        var w, x, y = {}, z = {}, A = "abstract", B = {
            parent: function (a) {
                if (G(a.parent) && a.parent) {
                    return l(a.parent);
                }
                var b = /^(.+)\.[^.]+$/.exec(a.name);
                return b ? l(b[1]) : w
            }, data: function (a) {
                return a.parent && a.parent.data && (a.data = a.self.data = M({}, a.parent.data, a.data)), a.data
            }, url: function (a) {
                var b = a.url, c = {params: a.params || {}};
                if (I(b)) {
                    return "^" == b.charAt(0) ? e.compile(b.substring(1), c) : (a.parent.navigable || w).url.concat(b, c);
                }
                if (!b || e.isMatcher(b)) {
                    return b;
                }
                throw new Error("Invalid url '" + b + "' in state '" + a + "'")
            }, navigable: function (a) {
                return a.url ? a : a.parent ? a.parent.navigable : null
            }, ownParams: function (a) {
                var b = a.url && a.url.params || new O.ParamSet;
                return L(a.params || {}, function (a, c) {
                    b[c] || (b[c] = new O.Param(c, null, a, "config"))
                }), b
            }, params: function (a) {
                return a.parent && a.parent.params ? M(a.parent.params.$$new(), a.ownParams) : new O.ParamSet
            }, views: function (a) {
                var b = {};
                return L(G(a.views) ? a.views : {"": a}, function (c, d) {
                    d.indexOf("@") < 0 && (d += "@" + a.parent.name), b[d] = c
                }), b
            }, path: function (a) {
                return a.parent ? a.parent.path.concat(a) : []
            }, includes: function (a) {
                var b = a.parent ? M({}, a.parent.includes) : {};
                return b[a.name] = !0, b
            }, $delegates: {}
        };
        w = p({
            name: "",
            url: "^",
            views: null,
            "abstract": !0
        }), w.navigable = null, this.decorator = s, this.state = t, this.$get = u, u.$inject = ["$rootScope", "$q", "$view", "$injector", "$resolve", "$stateParams", "$urlRouter", "$location", "$urlMatcherFactory"]
    }

    function v() {
        function a(a, b) {
            return {
                load: function (c, d) {
                    var e, f = {
                        template: null,
                        controller: null,
                        view: null,
                        locals: null,
                        notify: !0,
                        async: !0,
                        params: {}
                    };
                    return d = M(f, d), d.view && (e = b.fromConfig(d.view, d.params, d.locals)), e && d.notify && a.$broadcast("$viewContentLoading", d), e
                }
            }
        }

        this.$get = a, a.$inject = ["$rootScope", "$templateFactory"]
    }

    function w() {
        var a = !1;
        this.useAnchorScroll = function () {
            a = !0
        }, this.$get = ["$anchorScroll", "$timeout", function (b, c) {
            return a ? b : function (a) {
                c(function () {
                    a[0].scrollIntoView()
                }, 0, !1)
            }
        }]
    }

    function x(a, c, d, e) {
        function f() {
            return c.has ? function (a) {
                return c.has(a) ? c.get(a) : null
            } : function (a) {
                try {
                    return c.get(a)
                } catch (b) {
                    return null
                }
            }
        }

        function g(a, b) {
            var c = function () {
                return {
                    enter: function (a, b, c) {
                        b.after(a), c()
                    }, leave: function (a, b) {
                        a.remove(), b()
                    }
                }
            };
            if (j) {
                return {
                    enter: function (a, b, c) {
                        var d = j.enter(a, null, b, c);
                        d && d.then && d.then(c)
                    }, leave: function (a, b) {
                        var c = j.leave(a, b);
                        c && c.then && c.then(b)
                    }
                };
            }
            if (i) {
                var d = i && i(b, a);
                return {
                    enter: function (a, b, c) {
                        d.enter(a, null, b), c()
                    }, leave: function (a, b) {
                        d.leave(a), b()
                    }
                }
            }
            return c()
        }

        var h = f(), i = h("$animator"), j = h("$animate"), k = {
            restrict: "ECA",
            terminal: !0,
            priority: 400,
            transclude: "element",
            compile: function (c, f, h) {
                return function (c, f, i) {
                    function j() {
                        l && (l.remove(), l = null), n && (n.$destroy(), n = null), m && (r.leave(m, function () {
                            l = null
                        }), l = m, m = null)
                    }

                    function k(g) {
                        var k, l = z(c, i, f, e), s = l && a.$current && a.$current.locals[l];
                        if (g || s !== o) {
                            k = c.$new(), o = a.$current.locals[l];
                            var t = h(k, function (a) {
                                r.enter(a, f, function () {
                                    n && n.$emit("$viewContentAnimationEnded"), (b.isDefined(q) && !q || c.$eval(q)) && d(a)
                                }), j()
                            });
                            m = t, n = k, n.$emit("$viewContentLoaded"), n.$eval(p)
                        }
                    }

                    var l, m, n, o, p = i.onload || "", q = i.autoscroll, r = g(i, c);
                    c.$on("$stateChangeSuccess", function () {
                        k(!1)
                    }), c.$on("$viewContentLoading", function () {
                        k(!1)
                    }), k(!0)
                }
            }
        };
        return k
    }

    function y(a, b, c, d) {
        return {
            restrict: "ECA", priority: -400, compile: function (e) {
                var f = e.html();
                return function (e, g, h) {
                    var i = c.$current, j = z(e, h, g, d), k = i && i.locals[j];
                    if (k) {
                        g.data("$uiView", {
                            name: j,
                            state: k.$$state
                        }), g.html(k.$template ? k.$template : f);
                        var l = a(g.contents());
                        if (k.$$controller) {
                            k.$scope = e;
                            var m = b(k.$$controller, k);
                            k.$$controllerAs && (e[k.$$controllerAs] = m), g.data("$ngControllerController", m), g.children().data("$ngControllerController", m)
                        }
                        l(e)
                    }
                }
            }
        }
    }

    function z(a, b, c, d) {
        var e = d(b.uiView || b.name || "")(a), f = c.inheritedData("$uiView");
        return e.indexOf("@") >= 0 ? e : e + "@" + (f ? f.state.name : "")
    }

    function A(a, b) {
        var c, d = a.match(/^\s*({[^}]*})\s*$/);
        if (d && (a = b + "(" + d[1] + ")"), c = a.replace(/\n/g, " ").match(/^([^(]+?)\s*(\((.*)\))?$/), !c || 4 !== c.length) {
            throw new Error("Invalid state ref '" + a + "'");
        }
        return {state: c[1], paramExpr: c[3] || null}
    }

    function B(a) {
        var b = a.parent().inheritedData("$uiView");
        return b && b.state && b.state.name ? b.state : void 0
    }

    function C(a, c) {
        var d = ["location", "inherit", "reload"];
        return {
            restrict: "A",
            require: ["?^uiSrefActive", "?^uiSrefActiveEq"],
            link: function (e, f, g, h) {
                var i = A(g.uiSref, a.current.name), j = null, k = B(f) || a.$current, l = null, m = "A" === f.prop("tagName"), n = "FORM" === f[0].nodeName, o = n ? "action" : "href", p = !0, q = {
                    relative: k,
                    inherit: !0
                }, r = e.$eval(g.uiSrefOpts) || {};
                b.forEach(d, function (a) {
                    a in r && (q[a] = r[a])
                });
                var s = function (c) {
                    if (c && (j = b.copy(c)), p) {
                        l = a.href(i.state, j, q);
                        var d = h[1] || h[0];
                        return d && d.$$setStateInfo(i.state, j), null === l ? (p = !1, !1) : void g.$set(o, l)
                    }
                };
                i.paramExpr && (e.$watch(i.paramExpr, function (a) {
                    a !== j && s(a)
                }, !0), j = b.copy(e.$eval(i.paramExpr))), s(), n || f.bind("click", function (b) {
                    var d = b.which || b.button;
                    if (!(d > 1 || b.ctrlKey || b.metaKey || b.shiftKey || f.attr("target"))) {
                        var e = c(function () {
                            a.go(i.state, j, q)
                        });
                        b.preventDefault();
                        var g = m && !l ? 1 : 0;
                        b.preventDefault = function () {
                            g-- <= 0 && c.cancel(e)
                        }
                    }
                })
            }
        }
    }

    function D(a, b, c) {
        return {
            restrict: "A", controller: ["$scope", "$element", "$attrs", function (b, d, e) {
                function f() {
                    g() ? d.addClass(j) : d.removeClass(j)
                }

                function g() {
                    return "undefined" != typeof e.uiSrefActiveEq ? h && a.is(h.name, i) : h && a.includes(h.name, i)
                }

                var h, i, j;
                j = c(e.uiSrefActiveEq || e.uiSrefActive || "", !1)(b), this.$$setStateInfo = function (b, c) {
                    h = a.get(b, B(d)), i = c, f()
                }, b.$on("$stateChangeSuccess", f)
            }]
        }
    }

    function E(a) {
        var b = function (b) {
            return a.is(b)
        };
        return b.$stateful = !0, b
    }

    function F(a) {
        var b = function (b) {
            return a.includes(b)
        };
        return b.$stateful = !0, b
    }

    var G = b.isDefined, H = b.isFunction, I = b.isString, J = b.isObject, K = b.isArray, L = b.forEach, M = b.extend, N = b.copy;
    b.module("ui.router.util", ["ng"]), b.module("ui.router.router", ["ui.router.util"]), b.module("ui.router.state", ["ui.router.router", "ui.router.util"]), b.module("ui.router", ["ui.router.state"]), b.module("ui.router.compat", ["ui.router"]), o.$inject = ["$q", "$injector"], b.module("ui.router.util").service("$resolve", o), p.$inject = ["$http", "$templateCache", "$injector"], b.module("ui.router.util").service("$templateFactory", p);
    var O;
    q.prototype.concat = function (a, b) {
        var c = {
            caseInsensitive: O.caseInsensitive(),
            strict: O.strictMode(),
            squash: O.defaultSquashPolicy()
        };
        return new q(this.sourcePath + a + this.sourceSearch, M(c, b), this)
    }, q.prototype.toString = function () {
        return this.source
    }, q.prototype.exec = function (a, b) {
        function c(a) {
            function b(a) {
                return a.split("").reverse().join("")
            }

            function c(a) {
                return a.replace(/\\-/, "-")
            }

            var d = b(a).split(/-(?!\\)/), e = n(d, b);
            return n(e, c).reverse()
        }

        var d = this.regexp.exec(a);
        if (!d) {
            return null;
        }
        b = b || {};
        var e, f, g, h = this.parameters(), i = h.length, j = this.segments.length - 1, k = {};
        if (j !== d.length - 1) {
            throw new Error("Unbalanced capture group in route '" + this.source + "'");
        }
        for (e = 0; j > e; e++) {
            g = h[e];
            var l = this.params[g], m = d[e + 1];
            for (f = 0; f < l.replace; f++)l.replace[f].from === m && (m = l.replace[f].to);
            m && l.array === !0 && (m = c(m)), k[g] = l.value(m)
        }
        for (; i > e; e++)g = h[e], k[g] = this.params[g].value(b[g]);
        return k
    }, q.prototype.parameters = function (a) {
        return G(a) ? this.params[a] || null : this.$$paramNames
    }, q.prototype.validates = function (a) {
        return this.params.$$validates(a)
    }, q.prototype.format = function (a) {
        function b(a) {
            return encodeURIComponent(a).replace(/-/g, function (a) {
                return "%5C%" + a.charCodeAt(0).toString(16).toUpperCase()
            })
        }

        a = a || {};
        var c = this.segments, d = this.parameters(), e = this.params;
        if (!this.validates(a)) {
            return null;
        }
        var f, g = !1, h = c.length - 1, i = d.length, j = c[0];
        for (f = 0; i > f; f++) {
            var k = h > f, l = d[f], m = e[l], o = m.value(a[l]), p = m.isOptional && m.type.equals(m.value(), o), q = p ? m.squash : !1, r = m.type.encode(o);
            if (k) {
                var s = c[f + 1];
                if (q === !1) {
                    null != r && (j += K(r) ? n(r, b).join("-") : encodeURIComponent(r)), j += s;
                } else if (q === !0) {
                    var t = j.match(/\/$/) ? /\/?(.*)/ : /(.*)/;
                    j += s.match(t)[1]
                } else {
                    I(q) && (j += q + s)
                }
            } else {
                if (null == r || p && q !== !1) {
                    continue;
                }
                K(r) || (r = [r]), r = n(r, encodeURIComponent).join("&" + l + "="), j += (g ? "&" : "?") + (l + "=" + r), g = !0
            }
        }
        return j
    }, r.prototype.is = function () {
        return !0
    }, r.prototype.encode = function (a) {
        return a
    }, r.prototype.decode = function (a) {
        return a
    }, r.prototype.equals = function (a, b) {
        return a == b
    }, r.prototype.$subPattern = function () {
        var a = this.pattern.toString();
        return a.substr(1, a.length - 2)
    }, r.prototype.pattern = /.*/, r.prototype.toString = function () {
        return "{Type:" + this.name + "}"
    }, r.prototype.$asArray = function (a, b) {
        function d(a, b) {
            function d(a, b) {
                return function () {
                    return a[b].apply(a, arguments)
                }
            }

            function e(a) {
                return K(a) ? a : G(a) ? [a] : []
            }

            function f(a) {
                switch (a.length) {
                    case 0:
                        return c;
                    case 1:
                        return "auto" === b ? a[0] : a;
                    default:
                        return a
                }
            }

            function g(a) {
                return !a
            }

            function h(a, b) {
                return function (c) {
                    c = e(c);
                    var d = n(c, a);
                    return b === !0 ? 0 === m(d, g).length : f(d)
                }
            }

            function i(a) {
                return function (b, c) {
                    var d = e(b), f = e(c);
                    if (d.length !== f.length) {
                        return !1;
                    }
                    for (var g = 0; g < d.length; g++)if (!a(d[g], f[g])) {
                        return !1;
                    }
                    return !0
                }
            }

            this.encode = h(d(a, "encode")), this.decode = h(d(a, "decode")), this.is = h(d(a, "is"), !0), this.equals = i(d(a, "equals")), this.pattern = a.pattern, this.$arrayMode = b
        }

        if (!a) {
            return this;
        }
        if ("auto" === a && !b) {
            throw new Error("'auto' array mode is for query parameters only");
        }
        return new d(this, a)
    }, b.module("ui.router.util").provider("$urlMatcherFactory", s), b.module("ui.router.util").run(["$urlMatcherFactory", function () {
    }]), t.$inject = ["$locationProvider", "$urlMatcherFactoryProvider"], b.module("ui.router.router").provider("$urlRouter", t), u.$inject = ["$urlRouterProvider", "$urlMatcherFactoryProvider"], b.module("ui.router.state").value("$stateParams", {}).provider("$state", u), v.$inject = [], b.module("ui.router.state").provider("$view", v), b.module("ui.router.state").provider("$uiViewScroll", w), x.$inject = ["$state", "$injector", "$uiViewScroll", "$interpolate"], y.$inject = ["$compile", "$controller", "$state", "$interpolate"], b.module("ui.router.state").directive("uiView", x), b.module("ui.router.state").directive("uiView", y), C.$inject = ["$state", "$timeout"], D.$inject = ["$state", "$stateParams", "$interpolate"], b.module("ui.router.state").directive("uiSref", C).directive("uiSrefActive", D).directive("uiSrefActiveEq", D), E.$inject = ["$state"], F.$inject = ["$state"], b.module("ui.router.state").filter("isState", E).filter("includedByState", F)
}(window, window.angular);
},{}],8:[function(require,module,exports){
/*
 AngularJS v1.3.15
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(Q,W,t){'use strict';function R(b){return function(){var a=arguments[0],c;c="["+(b?b+":":"")+a+"] http://errors.angularjs.org/1.3.15/"+(b?b+"/":"")+a;for(a=1;a<arguments.length;a++){c=c+(1==a?"?":"&")+"p"+(a-1)+"=";var d=encodeURIComponent,e;e=arguments[a];e="function"==typeof e?e.toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof e?"undefined":"string"!=typeof e?JSON.stringify(e):e;c+=d(e)}return Error(c)}}function Sa(b){if(null==b||Ta(b))return!1;var a=b.length;return b.nodeType===
qa&&a?!0:C(b)||H(b)||0===a||"number"===typeof a&&0<a&&a-1 in b}function r(b,a,c){var d,e;if(b)if(G(b))for(d in b)"prototype"==d||"length"==d||"name"==d||b.hasOwnProperty&&!b.hasOwnProperty(d)||a.call(c,b[d],d,b);else if(H(b)||Sa(b)){var f="object"!==typeof b;d=0;for(e=b.length;d<e;d++)(f||d in b)&&a.call(c,b[d],d,b)}else if(b.forEach&&b.forEach!==r)b.forEach(a,c,b);else for(d in b)b.hasOwnProperty(d)&&a.call(c,b[d],d,b);return b}function Ed(b,a,c){for(var d=Object.keys(b).sort(),e=0;e<d.length;e++)a.call(c,
b[d[e]],d[e]);return d}function mc(b){return function(a,c){b(c,a)}}function Fd(){return++ob}function nc(b,a){a?b.$$hashKey=a:delete b.$$hashKey}function w(b){for(var a=b.$$hashKey,c=1,d=arguments.length;c<d;c++){var e=arguments[c];if(e)for(var f=Object.keys(e),g=0,h=f.length;g<h;g++){var l=f[g];b[l]=e[l]}}nc(b,a);return b}function aa(b){return parseInt(b,10)}function Ob(b,a){return w(Object.create(b),a)}function E(){}function ra(b){return b}function ea(b){return function(){return b}}function x(b){return"undefined"===
typeof b}function y(b){return"undefined"!==typeof b}function J(b){return null!==b&&"object"===typeof b}function C(b){return"string"===typeof b}function Y(b){return"number"===typeof b}function ga(b){return"[object Date]"===Ca.call(b)}function G(b){return"function"===typeof b}function Ua(b){return"[object RegExp]"===Ca.call(b)}function Ta(b){return b&&b.window===b}function Va(b){return b&&b.$evalAsync&&b.$watch}function Wa(b){return"boolean"===typeof b}function oc(b){return!(!b||!(b.nodeName||b.prop&&
b.attr&&b.find))}function Gd(b){var a={};b=b.split(",");var c;for(c=0;c<b.length;c++)a[b[c]]=!0;return a}function va(b){return z(b.nodeName||b[0]&&b[0].nodeName)}function Xa(b,a){var c=b.indexOf(a);0<=c&&b.splice(c,1);return a}function Da(b,a,c,d){if(Ta(b)||Va(b))throw Ja("cpws");if(a){if(b===a)throw Ja("cpi");c=c||[];d=d||[];if(J(b)){var e=c.indexOf(b);if(-1!==e)return d[e];c.push(b);d.push(a)}if(H(b))for(var f=a.length=0;f<b.length;f++)e=Da(b[f],null,c,d),J(b[f])&&(c.push(b[f]),d.push(e)),a.push(e);
else{var g=a.$$hashKey;H(a)?a.length=0:r(a,function(b,c){delete a[c]});for(f in b)b.hasOwnProperty(f)&&(e=Da(b[f],null,c,d),J(b[f])&&(c.push(b[f]),d.push(e)),a[f]=e);nc(a,g)}}else if(a=b)H(b)?a=Da(b,[],c,d):ga(b)?a=new Date(b.getTime()):Ua(b)?(a=new RegExp(b.source,b.toString().match(/[^\/]*$/)[0]),a.lastIndex=b.lastIndex):J(b)&&(e=Object.create(Object.getPrototypeOf(b)),a=Da(b,e,c,d));return a}function sa(b,a){if(H(b)){a=a||[];for(var c=0,d=b.length;c<d;c++)a[c]=b[c]}else if(J(b))for(c in a=a||{},
b)if("$"!==c.charAt(0)||"$"!==c.charAt(1))a[c]=b[c];return a||b}function ha(b,a){if(b===a)return!0;if(null===b||null===a)return!1;if(b!==b&&a!==a)return!0;var c=typeof b,d;if(c==typeof a&&"object"==c)if(H(b)){if(!H(a))return!1;if((c=b.length)==a.length){for(d=0;d<c;d++)if(!ha(b[d],a[d]))return!1;return!0}}else{if(ga(b))return ga(a)?ha(b.getTime(),a.getTime()):!1;if(Ua(b))return Ua(a)?b.toString()==a.toString():!1;if(Va(b)||Va(a)||Ta(b)||Ta(a)||H(a)||ga(a)||Ua(a))return!1;c={};for(d in b)if("$"!==
d.charAt(0)&&!G(b[d])){if(!ha(b[d],a[d]))return!1;c[d]=!0}for(d in a)if(!c.hasOwnProperty(d)&&"$"!==d.charAt(0)&&a[d]!==t&&!G(a[d]))return!1;return!0}return!1}function Ya(b,a,c){return b.concat(Za.call(a,c))}function pc(b,a){var c=2<arguments.length?Za.call(arguments,2):[];return!G(a)||a instanceof RegExp?a:c.length?function(){return arguments.length?a.apply(b,Ya(c,arguments,0)):a.apply(b,c)}:function(){return arguments.length?a.apply(b,arguments):a.call(b)}}function Hd(b,a){var c=a;"string"===typeof b&&
"$"===b.charAt(0)&&"$"===b.charAt(1)?c=t:Ta(a)?c="$WINDOW":a&&W===a?c="$DOCUMENT":Va(a)&&(c="$SCOPE");return c}function $a(b,a){if("undefined"===typeof b)return t;Y(a)||(a=a?2:null);return JSON.stringify(b,Hd,a)}function qc(b){return C(b)?JSON.parse(b):b}function wa(b){b=A(b).clone();try{b.empty()}catch(a){}var c=A("<div>").append(b).html();try{return b[0].nodeType===pb?z(c):c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,function(a,b){return"<"+z(b)})}catch(d){return z(c)}}function rc(b){try{return decodeURIComponent(b)}catch(a){}}
function sc(b){var a={},c,d;r((b||"").split("&"),function(b){b&&(c=b.replace(/\+/g,"%20").split("="),d=rc(c[0]),y(d)&&(b=y(c[1])?rc(c[1]):!0,tc.call(a,d)?H(a[d])?a[d].push(b):a[d]=[a[d],b]:a[d]=b))});return a}function Pb(b){var a=[];r(b,function(b,d){H(b)?r(b,function(b){a.push(Ea(d,!0)+(!0===b?"":"="+Ea(b,!0)))}):a.push(Ea(d,!0)+(!0===b?"":"="+Ea(b,!0)))});return a.length?a.join("&"):""}function qb(b){return Ea(b,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function Ea(b,a){return encodeURIComponent(b).replace(/%40/gi,
"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%20/g,a?"%20":"+")}function Id(b,a){var c,d,e=rb.length;b=A(b);for(d=0;d<e;++d)if(c=rb[d]+a,C(c=b.attr(c)))return c;return null}function Jd(b,a){var c,d,e={};r(rb,function(a){a+="app";!c&&b.hasAttribute&&b.hasAttribute(a)&&(c=b,d=b.getAttribute(a))});r(rb,function(a){a+="app";var e;!c&&(e=b.querySelector("["+a.replace(":","\\:")+"]"))&&(c=e,d=e.getAttribute(a))});c&&(e.strictDi=null!==Id(c,"strict-di"),
a(c,d?[d]:[],e))}function uc(b,a,c){J(c)||(c={});c=w({strictDi:!1},c);var d=function(){b=A(b);if(b.injector()){var d=b[0]===W?"document":wa(b);throw Ja("btstrpd",d.replace(/</,"&lt;").replace(/>/,"&gt;"));}a=a||[];a.unshift(["$provide",function(a){a.value("$rootElement",b)}]);c.debugInfoEnabled&&a.push(["$compileProvider",function(a){a.debugInfoEnabled(!0)}]);a.unshift("ng");d=ab(a,c.strictDi);d.invoke(["$rootScope","$rootElement","$compile","$injector",function(a,b,c,d){a.$apply(function(){b.data("$injector",
d);c(b)(a)})}]);return d},e=/^NG_ENABLE_DEBUG_INFO!/,f=/^NG_DEFER_BOOTSTRAP!/;Q&&e.test(Q.name)&&(c.debugInfoEnabled=!0,Q.name=Q.name.replace(e,""));if(Q&&!f.test(Q.name))return d();Q.name=Q.name.replace(f,"");ca.resumeBootstrap=function(b){r(b,function(b){a.push(b)});return d()};G(ca.resumeDeferredBootstrap)&&ca.resumeDeferredBootstrap()}function Kd(){Q.name="NG_ENABLE_DEBUG_INFO!"+Q.name;Q.location.reload()}function Ld(b){b=ca.element(b).injector();if(!b)throw Ja("test");return b.get("$$testability")}
function vc(b,a){a=a||"_";return b.replace(Md,function(b,d){return(d?a:"")+b.toLowerCase()})}function Nd(){var b;wc||((ta=Q.jQuery)&&ta.fn.on?(A=ta,w(ta.fn,{scope:Ka.scope,isolateScope:Ka.isolateScope,controller:Ka.controller,injector:Ka.injector,inheritedData:Ka.inheritedData}),b=ta.cleanData,ta.cleanData=function(a){var c;if(Qb)Qb=!1;else for(var d=0,e;null!=(e=a[d]);d++)(c=ta._data(e,"events"))&&c.$destroy&&ta(e).triggerHandler("$destroy");b(a)}):A=T,ca.element=A,wc=!0)}function Rb(b,a,c){if(!b)throw Ja("areq",
a||"?",c||"required");return b}function sb(b,a,c){c&&H(b)&&(b=b[b.length-1]);Rb(G(b),a,"not a function, got "+(b&&"object"===typeof b?b.constructor.name||"Object":typeof b));return b}function La(b,a){if("hasOwnProperty"===b)throw Ja("badname",a);}function xc(b,a,c){if(!a)return b;a=a.split(".");for(var d,e=b,f=a.length,g=0;g<f;g++)d=a[g],b&&(b=(e=b)[d]);return!c&&G(b)?pc(e,b):b}function tb(b){var a=b[0];b=b[b.length-1];var c=[a];do{a=a.nextSibling;if(!a)break;c.push(a)}while(a!==b);return A(c)}function ia(){return Object.create(null)}
function Od(b){function a(a,b,c){return a[b]||(a[b]=c())}var c=R("$injector"),d=R("ng");b=a(b,"angular",Object);b.$$minErr=b.$$minErr||R;return a(b,"module",function(){var b={};return function(f,g,h){if("hasOwnProperty"===f)throw d("badname","module");g&&b.hasOwnProperty(f)&&(b[f]=null);return a(b,f,function(){function a(c,d,e,f){f||(f=b);return function(){f[e||"push"]([c,d,arguments]);return u}}if(!g)throw c("nomod",f);var b=[],d=[],e=[],q=a("$injector","invoke","push",d),u={_invokeQueue:b,_configBlocks:d,
_runBlocks:e,requires:g,name:f,provider:a("$provide","provider"),factory:a("$provide","factory"),service:a("$provide","service"),value:a("$provide","value"),constant:a("$provide","constant","unshift"),animation:a("$animateProvider","register"),filter:a("$filterProvider","register"),controller:a("$controllerProvider","register"),directive:a("$compileProvider","directive"),config:q,run:function(a){e.push(a);return this}};h&&q(h);return u})}})}function Pd(b){w(b,{bootstrap:uc,copy:Da,extend:w,equals:ha,
element:A,forEach:r,injector:ab,noop:E,bind:pc,toJson:$a,fromJson:qc,identity:ra,isUndefined:x,isDefined:y,isString:C,isFunction:G,isObject:J,isNumber:Y,isElement:oc,isArray:H,version:Qd,isDate:ga,lowercase:z,uppercase:ub,callbacks:{counter:0},getTestability:Ld,$$minErr:R,$$csp:bb,reloadWithDebugInfo:Kd});cb=Od(Q);try{cb("ngLocale")}catch(a){cb("ngLocale",[]).provider("$locale",Rd)}cb("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:Sd});a.provider("$compile",yc).directive({a:Td,
input:zc,textarea:zc,form:Ud,script:Vd,select:Wd,style:Xd,option:Yd,ngBind:Zd,ngBindHtml:$d,ngBindTemplate:ae,ngClass:be,ngClassEven:ce,ngClassOdd:de,ngCloak:ee,ngController:fe,ngForm:ge,ngHide:he,ngIf:ie,ngInclude:je,ngInit:ke,ngNonBindable:le,ngPluralize:me,ngRepeat:ne,ngShow:oe,ngStyle:pe,ngSwitch:qe,ngSwitchWhen:re,ngSwitchDefault:se,ngOptions:te,ngTransclude:ue,ngModel:ve,ngList:we,ngChange:xe,pattern:Ac,ngPattern:Ac,required:Bc,ngRequired:Bc,minlength:Cc,ngMinlength:Cc,maxlength:Dc,ngMaxlength:Dc,
ngValue:ye,ngModelOptions:ze}).directive({ngInclude:Ae}).directive(vb).directive(Ec);a.provider({$anchorScroll:Be,$animate:Ce,$browser:De,$cacheFactory:Ee,$controller:Fe,$document:Ge,$exceptionHandler:He,$filter:Fc,$interpolate:Ie,$interval:Je,$http:Ke,$httpBackend:Le,$location:Me,$log:Ne,$parse:Oe,$rootScope:Pe,$q:Qe,$$q:Re,$sce:Se,$sceDelegate:Te,$sniffer:Ue,$templateCache:Ve,$templateRequest:We,$$testability:Xe,$timeout:Ye,$window:Ze,$$rAF:$e,$$asyncCallback:af,$$jqLite:bf})}])}function db(b){return b.replace(cf,
function(a,b,d,e){return e?d.toUpperCase():d}).replace(df,"Moz$1")}function Gc(b){b=b.nodeType;return b===qa||!b||9===b}function Hc(b,a){var c,d,e=a.createDocumentFragment(),f=[];if(Sb.test(b)){c=c||e.appendChild(a.createElement("div"));d=(ef.exec(b)||["",""])[1].toLowerCase();d=ja[d]||ja._default;c.innerHTML=d[1]+b.replace(ff,"<$1></$2>")+d[2];for(d=d[0];d--;)c=c.lastChild;f=Ya(f,c.childNodes);c=e.firstChild;c.textContent=""}else f.push(a.createTextNode(b));e.textContent="";e.innerHTML="";r(f,function(a){e.appendChild(a)});
return e}function T(b){if(b instanceof T)return b;var a;C(b)&&(b=N(b),a=!0);if(!(this instanceof T)){if(a&&"<"!=b.charAt(0))throw Tb("nosel");return new T(b)}if(a){a=W;var c;b=(c=gf.exec(b))?[a.createElement(c[1])]:(c=Hc(b,a))?c.childNodes:[]}Ic(this,b)}function Ub(b){return b.cloneNode(!0)}function wb(b,a){a||xb(b);if(b.querySelectorAll)for(var c=b.querySelectorAll("*"),d=0,e=c.length;d<e;d++)xb(c[d])}function Jc(b,a,c,d){if(y(d))throw Tb("offargs");var e=(d=yb(b))&&d.events,f=d&&d.handle;if(f)if(a)r(a.split(" "),
function(a){if(y(c)){var d=e[a];Xa(d||[],c);if(d&&0<d.length)return}b.removeEventListener(a,f,!1);delete e[a]});else for(a in e)"$destroy"!==a&&b.removeEventListener(a,f,!1),delete e[a]}function xb(b,a){var c=b.ng339,d=c&&zb[c];d&&(a?delete d.data[a]:(d.handle&&(d.events.$destroy&&d.handle({},"$destroy"),Jc(b)),delete zb[c],b.ng339=t))}function yb(b,a){var c=b.ng339,c=c&&zb[c];a&&!c&&(b.ng339=c=++hf,c=zb[c]={events:{},data:{},handle:t});return c}function Vb(b,a,c){if(Gc(b)){var d=y(c),e=!d&&a&&!J(a),
f=!a;b=(b=yb(b,!e))&&b.data;if(d)b[a]=c;else{if(f)return b;if(e)return b&&b[a];w(b,a)}}}function Ab(b,a){return b.getAttribute?-1<(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+a+" "):!1}function Bb(b,a){a&&b.setAttribute&&r(a.split(" "),function(a){b.setAttribute("class",N((" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").replace(" "+N(a)+" "," ")))})}function Cb(b,a){if(a&&b.setAttribute){var c=(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");
r(a.split(" "),function(a){a=N(a);-1===c.indexOf(" "+a+" ")&&(c+=a+" ")});b.setAttribute("class",N(c))}}function Ic(b,a){if(a)if(a.nodeType)b[b.length++]=a;else{var c=a.length;if("number"===typeof c&&a.window!==a){if(c)for(var d=0;d<c;d++)b[b.length++]=a[d]}else b[b.length++]=a}}function Kc(b,a){return Db(b,"$"+(a||"ngController")+"Controller")}function Db(b,a,c){9==b.nodeType&&(b=b.documentElement);for(a=H(a)?a:[a];b;){for(var d=0,e=a.length;d<e;d++)if((c=A.data(b,a[d]))!==t)return c;b=b.parentNode||
11===b.nodeType&&b.host}}function Lc(b){for(wb(b,!0);b.firstChild;)b.removeChild(b.firstChild)}function Mc(b,a){a||wb(b);var c=b.parentNode;c&&c.removeChild(b)}function jf(b,a){a=a||Q;if("complete"===a.document.readyState)a.setTimeout(b);else A(a).on("load",b)}function Nc(b,a){var c=Eb[a.toLowerCase()];return c&&Oc[va(b)]&&c}function kf(b,a){var c=b.nodeName;return("INPUT"===c||"TEXTAREA"===c)&&Pc[a]}function lf(b,a){var c=function(c,e){c.isDefaultPrevented=function(){return c.defaultPrevented};var f=
a[e||c.type],g=f?f.length:0;if(g){if(x(c.immediatePropagationStopped)){var h=c.stopImmediatePropagation;c.stopImmediatePropagation=function(){c.immediatePropagationStopped=!0;c.stopPropagation&&c.stopPropagation();h&&h.call(c)}}c.isImmediatePropagationStopped=function(){return!0===c.immediatePropagationStopped};1<g&&(f=sa(f));for(var l=0;l<g;l++)c.isImmediatePropagationStopped()||f[l].call(b,c)}};c.elem=b;return c}function bf(){this.$get=function(){return w(T,{hasClass:function(b,a){b.attr&&(b=b[0]);
return Ab(b,a)},addClass:function(b,a){b.attr&&(b=b[0]);return Cb(b,a)},removeClass:function(b,a){b.attr&&(b=b[0]);return Bb(b,a)}})}}function Ma(b,a){var c=b&&b.$$hashKey;if(c)return"function"===typeof c&&(c=b.$$hashKey()),c;c=typeof b;return c="function"==c||"object"==c&&null!==b?b.$$hashKey=c+":"+(a||Fd)():c+":"+b}function eb(b,a){if(a){var c=0;this.nextUid=function(){return++c}}r(b,this.put,this)}function mf(b){return(b=b.toString().replace(Qc,"").match(Rc))?"function("+(b[1]||"").replace(/[\s\r\n]+/,
" ")+")":"fn"}function ab(b,a){function c(a){return function(b,c){if(J(b))r(b,mc(a));else return a(b,c)}}function d(a,b){La(a,"service");if(G(b)||H(b))b=q.instantiate(b);if(!b.$get)throw Fa("pget",a);return p[a+"Provider"]=b}function e(a,b){return function(){var c=s.invoke(b,this);if(x(c))throw Fa("undef",a);return c}}function f(a,b,c){return d(a,{$get:!1!==c?e(a,b):b})}function g(a){var b=[],c;r(a,function(a){function d(a){var b,c;b=0;for(c=a.length;b<c;b++){var e=a[b],f=q.get(e[0]);f[e[1]].apply(f,
e[2])}}if(!n.get(a)){n.put(a,!0);try{C(a)?(c=cb(a),b=b.concat(g(c.requires)).concat(c._runBlocks),d(c._invokeQueue),d(c._configBlocks)):G(a)?b.push(q.invoke(a)):H(a)?b.push(q.invoke(a)):sb(a,"module")}catch(e){throw H(a)&&(a=a[a.length-1]),e.message&&e.stack&&-1==e.stack.indexOf(e.message)&&(e=e.message+"\n"+e.stack),Fa("modulerr",a,e.stack||e.message||e);}}});return b}function h(b,c){function d(a,e){if(b.hasOwnProperty(a)){if(b[a]===l)throw Fa("cdep",a+" <- "+k.join(" <- "));return b[a]}try{return k.unshift(a),
b[a]=l,b[a]=c(a,e)}catch(f){throw b[a]===l&&delete b[a],f;}finally{k.shift()}}function e(b,c,f,g){"string"===typeof f&&(g=f,f=null);var k=[],h=ab.$$annotate(b,a,g),l,q,p;q=0;for(l=h.length;q<l;q++){p=h[q];if("string"!==typeof p)throw Fa("itkn",p);k.push(f&&f.hasOwnProperty(p)?f[p]:d(p,g))}H(b)&&(b=b[l]);return b.apply(c,k)}return{invoke:e,instantiate:function(a,b,c){var d=Object.create((H(a)?a[a.length-1]:a).prototype||null);a=e(a,d,b,c);return J(a)||G(a)?a:d},get:d,annotate:ab.$$annotate,has:function(a){return p.hasOwnProperty(a+
"Provider")||b.hasOwnProperty(a)}}}a=!0===a;var l={},k=[],n=new eb([],!0),p={$provide:{provider:c(d),factory:c(f),service:c(function(a,b){return f(a,["$injector",function(a){return a.instantiate(b)}])}),value:c(function(a,b){return f(a,ea(b),!1)}),constant:c(function(a,b){La(a,"constant");p[a]=b;u[a]=b}),decorator:function(a,b){var c=q.get(a+"Provider"),d=c.$get;c.$get=function(){var a=s.invoke(d,c);return s.invoke(b,null,{$delegate:a})}}}},q=p.$injector=h(p,function(a,b){ca.isString(b)&&k.push(b);
throw Fa("unpr",k.join(" <- "));}),u={},s=u.$injector=h(u,function(a,b){var c=q.get(a+"Provider",b);return s.invoke(c.$get,c,t,a)});r(g(b),function(a){s.invoke(a||E)});return s}function Be(){var b=!0;this.disableAutoScrolling=function(){b=!1};this.$get=["$window","$location","$rootScope",function(a,c,d){function e(a){var b=null;Array.prototype.some.call(a,function(a){if("a"===va(a))return b=a,!0});return b}function f(b){if(b){b.scrollIntoView();var c;c=g.yOffset;G(c)?c=c():oc(c)?(c=c[0],c="fixed"!==
a.getComputedStyle(c).position?0:c.getBoundingClientRect().bottom):Y(c)||(c=0);c&&(b=b.getBoundingClientRect().top,a.scrollBy(0,b-c))}else a.scrollTo(0,0)}function g(){var a=c.hash(),b;a?(b=h.getElementById(a))?f(b):(b=e(h.getElementsByName(a)))?f(b):"top"===a&&f(null):f(null)}var h=a.document;b&&d.$watch(function(){return c.hash()},function(a,b){a===b&&""===a||jf(function(){d.$evalAsync(g)})});return g}]}function af(){this.$get=["$$rAF","$timeout",function(b,a){return b.supported?function(a){return b(a)}:
function(b){return a(b,0,!1)}}]}function nf(b,a,c,d){function e(a){try{a.apply(null,Za.call(arguments,1))}finally{if(m--,0===m)for(;F.length;)try{F.pop()()}catch(b){c.error(b)}}}function f(a,b){(function da(){r(Z,function(a){a()});L=b(da,a)})()}function g(){h();l()}function h(){a:{try{B=u.state;break a}catch(a){}B=void 0}B=x(B)?null:B;ha(B,O)&&(B=O);O=B}function l(){if(D!==n.url()||I!==B)D=n.url(),I=B,r(X,function(a){a(n.url(),B)})}function k(a){try{return decodeURIComponent(a)}catch(b){return a}}
var n=this,p=a[0],q=b.location,u=b.history,s=b.setTimeout,M=b.clearTimeout,v={};n.isMock=!1;var m=0,F=[];n.$$completeOutstandingRequest=e;n.$$incOutstandingRequestCount=function(){m++};n.notifyWhenNoOutstandingRequests=function(a){r(Z,function(a){a()});0===m?a():F.push(a)};var Z=[],L;n.addPollFn=function(a){x(L)&&f(100,s);Z.push(a);return a};var B,I,D=q.href,S=a.find("base"),P=null;h();I=B;n.url=function(a,c,e){x(e)&&(e=null);q!==b.location&&(q=b.location);u!==b.history&&(u=b.history);if(a){var f=
I===e;if(D===a&&(!d.history||f))return n;var g=D&&Ga(D)===Ga(a);D=a;I=e;!d.history||g&&f?(g||(P=a),c?q.replace(a):g?(c=q,e=a.indexOf("#"),a=-1===e?"":a.substr(e+1),c.hash=a):q.href=a):(u[c?"replaceState":"pushState"](e,"",a),h(),I=B);return n}return P||q.href.replace(/%27/g,"'")};n.state=function(){return B};var X=[],ba=!1,O=null;n.onUrlChange=function(a){if(!ba){if(d.history)A(b).on("popstate",g);A(b).on("hashchange",g);ba=!0}X.push(a);return a};n.$$checkUrlChange=l;n.baseHref=function(){var a=S.attr("href");
return a?a.replace(/^(https?\:)?\/\/[^\/]*/,""):""};var fa={},y="",ka=n.baseHref();n.cookies=function(a,b){var d,e,f,g;if(a)b===t?p.cookie=encodeURIComponent(a)+"=;path="+ka+";expires=Thu, 01 Jan 1970 00:00:00 GMT":C(b)&&(d=(p.cookie=encodeURIComponent(a)+"="+encodeURIComponent(b)+";path="+ka).length+1,4096<d&&c.warn("Cookie '"+a+"' possibly not set or overflowed because it was too large ("+d+" > 4096 bytes)!"));else{if(p.cookie!==y)for(y=p.cookie,d=y.split("; "),fa={},f=0;f<d.length;f++)e=d[f],g=
e.indexOf("="),0<g&&(a=k(e.substring(0,g)),fa[a]===t&&(fa[a]=k(e.substring(g+1))));return fa}};n.defer=function(a,b){var c;m++;c=s(function(){delete v[c];e(a)},b||0);v[c]=!0;return c};n.defer.cancel=function(a){return v[a]?(delete v[a],M(a),e(E),!0):!1}}function De(){this.$get=["$window","$log","$sniffer","$document",function(b,a,c,d){return new nf(b,d,a,c)}]}function Ee(){this.$get=function(){function b(b,d){function e(a){a!=p&&(q?q==a&&(q=a.n):q=a,f(a.n,a.p),f(a,p),p=a,p.n=null)}function f(a,b){a!=
b&&(a&&(a.p=b),b&&(b.n=a))}if(b in a)throw R("$cacheFactory")("iid",b);var g=0,h=w({},d,{id:b}),l={},k=d&&d.capacity||Number.MAX_VALUE,n={},p=null,q=null;return a[b]={put:function(a,b){if(k<Number.MAX_VALUE){var c=n[a]||(n[a]={key:a});e(c)}if(!x(b))return a in l||g++,l[a]=b,g>k&&this.remove(q.key),b},get:function(a){if(k<Number.MAX_VALUE){var b=n[a];if(!b)return;e(b)}return l[a]},remove:function(a){if(k<Number.MAX_VALUE){var b=n[a];if(!b)return;b==p&&(p=b.p);b==q&&(q=b.n);f(b.n,b.p);delete n[a]}delete l[a];
g--},removeAll:function(){l={};g=0;n={};p=q=null},destroy:function(){n=h=l=null;delete a[b]},info:function(){return w({},h,{size:g})}}}var a={};b.info=function(){var b={};r(a,function(a,e){b[e]=a.info()});return b};b.get=function(b){return a[b]};return b}}function Ve(){this.$get=["$cacheFactory",function(b){return b("templates")}]}function yc(b,a){function c(a,b){var c=/^\s*([@&]|=(\*?))(\??)\s*(\w*)\s*$/,d={};r(a,function(a,e){var f=a.match(c);if(!f)throw la("iscp",b,e,a);d[e]={mode:f[1][0],collection:"*"===
f[2],optional:"?"===f[3],attrName:f[4]||e}});return d}var d={},e=/^\s*directive\:\s*([\w\-]+)\s+(.*)$/,f=/(([\w\-]+)(?:\:([^;]+))?;?)/,g=Gd("ngSrc,ngSrcset,src,srcset"),h=/^(?:(\^\^?)?(\?)?(\^\^?)?)?/,l=/^(on[a-z]+|formaction)$/;this.directive=function p(a,e){La(a,"directive");C(a)?(Rb(e,"directiveFactory"),d.hasOwnProperty(a)||(d[a]=[],b.factory(a+"Directive",["$injector","$exceptionHandler",function(b,e){var f=[];r(d[a],function(d,g){try{var h=b.invoke(d);G(h)?h={compile:ea(h)}:!h.compile&&h.link&&
(h.compile=ea(h.link));h.priority=h.priority||0;h.index=g;h.name=h.name||a;h.require=h.require||h.controller&&h.name;h.restrict=h.restrict||"EA";J(h.scope)&&(h.$$isolateBindings=c(h.scope,h.name));f.push(h)}catch(k){e(k)}});return f}])),d[a].push(e)):r(a,mc(p));return this};this.aHrefSanitizationWhitelist=function(b){return y(b)?(a.aHrefSanitizationWhitelist(b),this):a.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=function(b){return y(b)?(a.imgSrcSanitizationWhitelist(b),this):a.imgSrcSanitizationWhitelist()};
var k=!0;this.debugInfoEnabled=function(a){return y(a)?(k=a,this):k};this.$get=["$injector","$interpolate","$exceptionHandler","$templateRequest","$parse","$controller","$rootScope","$document","$sce","$animate","$$sanitizeUri",function(a,b,c,s,M,v,m,F,Z,L,B){function I(a,b){try{a.addClass(b)}catch(c){}}function D(a,b,c,d,e){a instanceof A||(a=A(a));r(a,function(b,c){b.nodeType==pb&&b.nodeValue.match(/\S+/)&&(a[c]=A(b).wrap("<span></span>").parent()[0])});var f=S(a,b,a,c,d,e);D.$$addScopeClass(a);
var g=null;return function(b,c,d){Rb(b,"scope");d=d||{};var e=d.parentBoundTranscludeFn,h=d.transcludeControllers;d=d.futureParentElement;e&&e.$$boundTransclude&&(e=e.$$boundTransclude);g||(g=(d=d&&d[0])?"foreignobject"!==va(d)&&d.toString().match(/SVG/)?"svg":"html":"html");d="html"!==g?A(Xb(g,A("<div>").append(a).html())):c?Ka.clone.call(a):a;if(h)for(var k in h)d.data("$"+k+"Controller",h[k].instance);D.$$addScopeInfo(d,b);c&&c(d,b);f&&f(b,d,d,e);return d}}function S(a,b,c,d,e,f){function g(a,
c,d,e){var f,k,l,q,p,s,M;if(m)for(M=Array(c.length),q=0;q<h.length;q+=3)f=h[q],M[f]=c[f];else M=c;q=0;for(p=h.length;q<p;)k=M[h[q++]],c=h[q++],f=h[q++],c?(c.scope?(l=a.$new(),D.$$addScopeInfo(A(k),l)):l=a,s=c.transcludeOnThisElement?P(a,c.transclude,e,c.elementTranscludeOnThisElement):!c.templateOnThisElement&&e?e:!e&&b?P(a,b):null,c(f,l,k,d,s)):f&&f(a,k.childNodes,t,e)}for(var h=[],k,l,q,p,m,s=0;s<a.length;s++){k=new Yb;l=X(a[s],[],k,0===s?d:t,e);(f=l.length?fa(l,a[s],k,b,c,null,[],[],f):null)&&
f.scope&&D.$$addScopeClass(k.$$element);k=f&&f.terminal||!(q=a[s].childNodes)||!q.length?null:S(q,f?(f.transcludeOnThisElement||!f.templateOnThisElement)&&f.transclude:b);if(f||k)h.push(s,f,k),p=!0,m=m||f;f=null}return p?g:null}function P(a,b,c,d){return function(d,e,f,g,h){d||(d=a.$new(!1,h),d.$$transcluded=!0);return b(d,e,{parentBoundTranscludeFn:c,transcludeControllers:f,futureParentElement:g})}}function X(a,b,c,d,g){var h=c.$attr,k;switch(a.nodeType){case qa:ka(b,xa(va(a)),"E",d,g);for(var l,
q,p,m=a.attributes,s=0,M=m&&m.length;s<M;s++){var u=!1,L=!1;l=m[s];k=l.name;q=N(l.value);l=xa(k);if(p=U.test(l))k=k.replace(Sc,"").substr(8).replace(/_(.)/g,function(a,b){return b.toUpperCase()});var B=l.replace(/(Start|End)$/,"");x(B)&&l===B+"Start"&&(u=k,L=k.substr(0,k.length-5)+"end",k=k.substr(0,k.length-6));l=xa(k.toLowerCase());h[l]=k;if(p||!c.hasOwnProperty(l))c[l]=q,Nc(a,l)&&(c[l]=!0);Oa(a,b,q,l,p);ka(b,l,"A",d,g,u,L)}a=a.className;J(a)&&(a=a.animVal);if(C(a)&&""!==a)for(;k=f.exec(a);)l=xa(k[2]),
ka(b,l,"C",d,g)&&(c[l]=N(k[3])),a=a.substr(k.index+k[0].length);break;case pb:za(b,a.nodeValue);break;case 8:try{if(k=e.exec(a.nodeValue))l=xa(k[1]),ka(b,l,"M",d,g)&&(c[l]=N(k[2]))}catch(v){}}b.sort(da);return b}function ba(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw la("uterdir",b,c);a.nodeType==qa&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return A(d)}function O(a,b,c){return function(d,e,f,g,h){e=ba(e[0],
b,c);return a(d,e,f,g,h)}}function fa(a,d,e,f,g,k,l,p,m){function s(a,b,c,d){if(a){c&&(a=O(a,c,d));a.require=K.require;a.directiveName=da;if(P===K||K.$$isolateScope)a=Y(a,{isolateScope:!0});l.push(a)}if(b){c&&(b=O(b,c,d));b.require=K.require;b.directiveName=da;if(P===K||K.$$isolateScope)b=Y(b,{isolateScope:!0});p.push(b)}}function L(a,b,c,d){var e,f="data",g=!1,k=c,l;if(C(b)){l=b.match(h);b=b.substring(l[0].length);l[3]&&(l[1]?l[3]=null:l[1]=l[3]);"^"===l[1]?f="inheritedData":"^^"===l[1]&&(f="inheritedData",
k=c.parent());"?"===l[2]&&(g=!0);e=null;d&&"data"===f&&(e=d[b])&&(e=e.instance);e=e||k[f]("$"+b+"Controller");if(!e&&!g)throw la("ctreq",b,a);return e||null}H(b)&&(e=[],r(b,function(b){e.push(L(a,b,c,d))}));return e}function B(a,c,f,g,h){function k(a,b,c){var d;Va(a)||(c=b,b=a,a=t);E&&(d=F);c||(c=E?X.parent():X);return h(a,b,d,c,Wb)}var m,s,u,I,F,gb,X,O;d===f?(O=e,X=e.$$element):(X=A(f),O=new Yb(X,e));P&&(I=c.$new(!0));h&&(gb=k,gb.$$boundTransclude=h);S&&(Z={},F={},r(S,function(a){var b={$scope:a===
P||a.$$isolateScope?I:c,$element:X,$attrs:O,$transclude:gb};u=a.controller;"@"==u&&(u=O[a.name]);b=v(u,b,!0,a.controllerAs);F[a.name]=b;E||X.data("$"+a.name+"Controller",b.instance);Z[a.name]=b}));if(P){D.$$addScopeInfo(X,I,!0,!(ma&&(ma===P||ma===P.$$originalDirective)));D.$$addScopeClass(X,!0);g=Z&&Z[P.name];var ba=I;g&&g.identifier&&!0===P.bindToController&&(ba=g.instance);r(I.$$isolateBindings=P.$$isolateBindings,function(a,d){var e=a.attrName,f=a.optional,g,h,k,l;switch(a.mode){case "@":O.$observe(e,
function(a){ba[d]=a});O.$$observers[e].$$scope=c;O[e]&&(ba[d]=b(O[e])(c));break;case "=":if(f&&!O[e])break;h=M(O[e]);l=h.literal?ha:function(a,b){return a===b||a!==a&&b!==b};k=h.assign||function(){g=ba[d]=h(c);throw la("nonassign",O[e],P.name);};g=ba[d]=h(c);f=function(a){l(a,ba[d])||(l(a,g)?k(c,a=ba[d]):ba[d]=a);return g=a};f.$stateful=!0;f=a.collection?c.$watchCollection(O[e],f):c.$watch(M(O[e],f),null,h.literal);I.$on("$destroy",f);break;case "&":h=M(O[e]),ba[d]=function(a){return h(c,a)}}})}Z&&
(r(Z,function(a){a()}),Z=null);g=0;for(m=l.length;g<m;g++)s=l[g],$(s,s.isolateScope?I:c,X,O,s.require&&L(s.directiveName,s.require,X,F),gb);var Wb=c;P&&(P.template||null===P.templateUrl)&&(Wb=I);a&&a(Wb,f.childNodes,t,h);for(g=p.length-1;0<=g;g--)s=p[g],$(s,s.isolateScope?I:c,X,O,s.require&&L(s.directiveName,s.require,X,F),gb)}m=m||{};for(var I=-Number.MAX_VALUE,F,S=m.controllerDirectives,Z,P=m.newIsolateScopeDirective,ma=m.templateDirective,fa=m.nonTlbTranscludeDirective,ka=!1,x=!1,E=m.hasElementTranscludeDirective,
w=e.$$element=A(d),K,da,V,fb=f,za,z=0,Q=a.length;z<Q;z++){K=a[z];var Oa=K.$$start,U=K.$$end;Oa&&(w=ba(d,Oa,U));V=t;if(I>K.priority)break;if(V=K.scope)K.templateUrl||(J(V)?(Na("new/isolated scope",P||F,K,w),P=K):Na("new/isolated scope",P,K,w)),F=F||K;da=K.name;!K.templateUrl&&K.controller&&(V=K.controller,S=S||{},Na("'"+da+"' controller",S[da],K,w),S[da]=K);if(V=K.transclude)ka=!0,K.$$tlb||(Na("transclusion",fa,K,w),fa=K),"element"==V?(E=!0,I=K.priority,V=w,w=e.$$element=A(W.createComment(" "+da+": "+
e[da]+" ")),d=w[0],T(g,Za.call(V,0),d),fb=D(V,f,I,k&&k.name,{nonTlbTranscludeDirective:fa})):(V=A(Ub(d)).contents(),w.empty(),fb=D(V,f));if(K.template)if(x=!0,Na("template",ma,K,w),ma=K,V=G(K.template)?K.template(w,e):K.template,V=Tc(V),K.replace){k=K;V=Sb.test(V)?Uc(Xb(K.templateNamespace,N(V))):[];d=V[0];if(1!=V.length||d.nodeType!==qa)throw la("tplrt",da,"");T(g,w,d);Q={$attr:{}};V=X(d,[],Q);var aa=a.splice(z+1,a.length-(z+1));P&&y(V);a=a.concat(V).concat(aa);R(e,Q);Q=a.length}else w.html(V);if(K.templateUrl)x=
!0,Na("template",ma,K,w),ma=K,K.replace&&(k=K),B=of(a.splice(z,a.length-z),w,e,g,ka&&fb,l,p,{controllerDirectives:S,newIsolateScopeDirective:P,templateDirective:ma,nonTlbTranscludeDirective:fa}),Q=a.length;else if(K.compile)try{za=K.compile(w,e,fb),G(za)?s(null,za,Oa,U):za&&s(za.pre,za.post,Oa,U)}catch(pf){c(pf,wa(w))}K.terminal&&(B.terminal=!0,I=Math.max(I,K.priority))}B.scope=F&&!0===F.scope;B.transcludeOnThisElement=ka;B.elementTranscludeOnThisElement=E;B.templateOnThisElement=x;B.transclude=fb;
m.hasElementTranscludeDirective=E;return B}function y(a){for(var b=0,c=a.length;b<c;b++)a[b]=Ob(a[b],{$$isolateScope:!0})}function ka(b,e,f,g,h,k,l){if(e===h)return null;h=null;if(d.hasOwnProperty(e)){var q;e=a.get(e+"Directive");for(var m=0,s=e.length;m<s;m++)try{q=e[m],(g===t||g>q.priority)&&-1!=q.restrict.indexOf(f)&&(k&&(q=Ob(q,{$$start:k,$$end:l})),b.push(q),h=q)}catch(M){c(M)}}return h}function x(b){if(d.hasOwnProperty(b))for(var c=a.get(b+"Directive"),e=0,f=c.length;e<f;e++)if(b=c[e],b.multiElement)return!0;
return!1}function R(a,b){var c=b.$attr,d=a.$attr,e=a.$$element;r(a,function(d,e){"$"!=e.charAt(0)&&(b[e]&&b[e]!==d&&(d+=("style"===e?";":" ")+b[e]),a.$set(e,d,!0,c[e]))});r(b,function(b,f){"class"==f?(I(e,b),a["class"]=(a["class"]?a["class"]+" ":"")+b):"style"==f?(e.attr("style",e.attr("style")+";"+b),a.style=(a.style?a.style+";":"")+b):"$"==f.charAt(0)||a.hasOwnProperty(f)||(a[f]=b,d[f]=c[f])})}function of(a,b,c,d,e,f,g,h){var k=[],l,q,p=b[0],m=a.shift(),M=Ob(m,{templateUrl:null,transclude:null,
replace:null,$$originalDirective:m}),u=G(m.templateUrl)?m.templateUrl(b,c):m.templateUrl,L=m.templateNamespace;b.empty();s(Z.getTrustedResourceUrl(u)).then(function(s){var B,v;s=Tc(s);if(m.replace){s=Sb.test(s)?Uc(Xb(L,N(s))):[];B=s[0];if(1!=s.length||B.nodeType!==qa)throw la("tplrt",m.name,u);s={$attr:{}};T(d,b,B);var D=X(B,[],s);J(m.scope)&&y(D);a=D.concat(a);R(c,s)}else B=p,b.html(s);a.unshift(M);l=fa(a,B,c,e,b,m,f,g,h);r(d,function(a,c){a==B&&(d[c]=b[0])});for(q=S(b[0].childNodes,e);k.length;){s=
k.shift();v=k.shift();var F=k.shift(),O=k.shift(),D=b[0];if(!s.$$destroyed){if(v!==p){var Z=v.className;h.hasElementTranscludeDirective&&m.replace||(D=Ub(B));T(F,A(v),D);I(A(D),Z)}v=l.transcludeOnThisElement?P(s,l.transclude,O):O;l(q,s,D,d,v)}}k=null});return function(a,b,c,d,e){a=e;b.$$destroyed||(k?k.push(b,c,d,a):(l.transcludeOnThisElement&&(a=P(b,l.transclude,e)),l(q,b,c,d,a)))}}function da(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function Na(a,
b,c,d){if(b)throw la("multidir",b.name,c.name,a,wa(d));}function za(a,c){var d=b(c,!0);d&&a.push({priority:0,compile:function(a){a=a.parent();var b=!!a.length;b&&D.$$addBindingClass(a);return function(a,c){var e=c.parent();b||D.$$addBindingClass(e);D.$$addBindingInfo(e,d.expressions);a.$watch(d,function(a){c[0].nodeValue=a})}}})}function Xb(a,b){a=z(a||"html");switch(a){case "svg":case "math":var c=W.createElement("div");c.innerHTML="<"+a+">"+b+"</"+a+">";return c.childNodes[0].childNodes;default:return b}}
function Q(a,b){if("srcdoc"==b)return Z.HTML;var c=va(a);if("xlinkHref"==b||"form"==c&&"action"==b||"img"!=c&&("src"==b||"ngSrc"==b))return Z.RESOURCE_URL}function Oa(a,c,d,e,f){var h=Q(a,e);f=g[e]||f;var k=b(d,!0,h,f);if(k){if("multiple"===e&&"select"===va(a))throw la("selmulti",wa(a));c.push({priority:100,compile:function(){return{pre:function(a,c,g){c=g.$$observers||(g.$$observers={});if(l.test(e))throw la("nodomevents");var m=g[e];m!==d&&(k=m&&b(m,!0,h,f),d=m);k&&(g[e]=k(a),(c[e]||(c[e]=[])).$$inter=
!0,(g.$$observers&&g.$$observers[e].$$scope||a).$watch(k,function(a,b){"class"===e&&a!=b?g.$updateClass(a,b):g.$set(e,a)}))}}}})}}function T(a,b,c){var d=b[0],e=b.length,f=d.parentNode,g,h;if(a)for(g=0,h=a.length;g<h;g++)if(a[g]==d){a[g++]=c;h=g+e-1;for(var k=a.length;g<k;g++,h++)h<k?a[g]=a[h]:delete a[g];a.length-=e-1;a.context===d&&(a.context=c);break}f&&f.replaceChild(c,d);a=W.createDocumentFragment();a.appendChild(d);A(c).data(A(d).data());ta?(Qb=!0,ta.cleanData([d])):delete A.cache[d[A.expando]];
d=1;for(e=b.length;d<e;d++)f=b[d],A(f).remove(),a.appendChild(f),delete b[d];b[0]=c;b.length=1}function Y(a,b){return w(function(){return a.apply(null,arguments)},a,b)}function $(a,b,d,e,f,g){try{a(b,d,e,f,g)}catch(h){c(h,wa(d))}}var Yb=function(a,b){if(b){var c=Object.keys(b),d,e,f;d=0;for(e=c.length;d<e;d++)f=c[d],this[f]=b[f]}else this.$attr={};this.$$element=a};Yb.prototype={$normalize:xa,$addClass:function(a){a&&0<a.length&&L.addClass(this.$$element,a)},$removeClass:function(a){a&&0<a.length&&
L.removeClass(this.$$element,a)},$updateClass:function(a,b){var c=Vc(a,b);c&&c.length&&L.addClass(this.$$element,c);(c=Vc(b,a))&&c.length&&L.removeClass(this.$$element,c)},$set:function(a,b,d,e){var f=this.$$element[0],g=Nc(f,a),h=kf(f,a),f=a;g?(this.$$element.prop(a,b),e=g):h&&(this[h]=b,f=h);this[a]=b;e?this.$attr[a]=e:(e=this.$attr[a])||(this.$attr[a]=e=vc(a,"-"));g=va(this.$$element);if("a"===g&&"href"===a||"img"===g&&"src"===a)this[a]=b=B(b,"src"===a);else if("img"===g&&"srcset"===a){for(var g=
"",h=N(b),k=/(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/,k=/\s/.test(h)?k:/(,)/,h=h.split(k),k=Math.floor(h.length/2),l=0;l<k;l++)var q=2*l,g=g+B(N(h[q]),!0),g=g+(" "+N(h[q+1]));h=N(h[2*l]).split(/\s/);g+=B(N(h[0]),!0);2===h.length&&(g+=" "+N(h[1]));this[a]=b=g}!1!==d&&(null===b||b===t?this.$$element.removeAttr(e):this.$$element.attr(e,b));(a=this.$$observers)&&r(a[f],function(a){try{a(b)}catch(d){c(d)}})},$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers=ia()),e=d[a]||(d[a]=[]);e.push(b);
m.$evalAsync(function(){!e.$$inter&&c.hasOwnProperty(a)&&b(c[a])});return function(){Xa(e,b)}}};var V=b.startSymbol(),ma=b.endSymbol(),Tc="{{"==V||"}}"==ma?ra:function(a){return a.replace(/\{\{/g,V).replace(/}}/g,ma)},U=/^ngAttr[A-Z]/;D.$$addBindingInfo=k?function(a,b){var c=a.data("$binding")||[];H(b)?c=c.concat(b):c.push(b);a.data("$binding",c)}:E;D.$$addBindingClass=k?function(a){I(a,"ng-binding")}:E;D.$$addScopeInfo=k?function(a,b,c,d){a.data(c?d?"$isolateScopeNoTemplate":"$isolateScope":"$scope",
b)}:E;D.$$addScopeClass=k?function(a,b){I(a,b?"ng-isolate-scope":"ng-scope")}:E;return D}]}function xa(b){return db(b.replace(Sc,""))}function Vc(b,a){var c="",d=b.split(/\s+/),e=a.split(/\s+/),f=0;a:for(;f<d.length;f++){for(var g=d[f],h=0;h<e.length;h++)if(g==e[h])continue a;c+=(0<c.length?" ":"")+g}return c}function Uc(b){b=A(b);var a=b.length;if(1>=a)return b;for(;a--;)8===b[a].nodeType&&qf.call(b,a,1);return b}function Fe(){var b={},a=!1,c=/^(\S+)(\s+as\s+(\w+))?$/;this.register=function(a,c){La(a,
"controller");J(a)?w(b,a):b[a]=c};this.allowGlobals=function(){a=!0};this.$get=["$injector","$window",function(d,e){function f(a,b,c,d){if(!a||!J(a.$scope))throw R("$controller")("noscp",d,b);a.$scope[b]=c}return function(g,h,l,k){var n,p,q;l=!0===l;k&&C(k)&&(q=k);if(C(g)){k=g.match(c);if(!k)throw rf("ctrlfmt",g);p=k[1];q=q||k[3];g=b.hasOwnProperty(p)?b[p]:xc(h.$scope,p,!0)||(a?xc(e,p,!0):t);sb(g,p,!0)}if(l)return l=(H(g)?g[g.length-1]:g).prototype,n=Object.create(l||null),q&&f(h,q,n,p||g.name),w(function(){d.invoke(g,
n,h,p);return n},{instance:n,identifier:q});n=d.instantiate(g,h,p);q&&f(h,q,n,p||g.name);return n}}]}function Ge(){this.$get=["$window",function(b){return A(b.document)}]}function He(){this.$get=["$log",function(b){return function(a,c){b.error.apply(b,arguments)}}]}function Zb(b,a){if(C(b)){var c=b.replace(sf,"").trim();if(c){var d=a("Content-Type");(d=d&&0===d.indexOf(Wc))||(d=(d=c.match(tf))&&uf[d[0]].test(c));d&&(b=qc(c))}}return b}function Xc(b){var a=ia(),c,d,e;if(!b)return a;r(b.split("\n"),
function(b){e=b.indexOf(":");c=z(N(b.substr(0,e)));d=N(b.substr(e+1));c&&(a[c]=a[c]?a[c]+", "+d:d)});return a}function Yc(b){var a=J(b)?b:t;return function(c){a||(a=Xc(b));return c?(c=a[z(c)],void 0===c&&(c=null),c):a}}function Zc(b,a,c,d){if(G(d))return d(b,a,c);r(d,function(d){b=d(b,a,c)});return b}function Ke(){var b=this.defaults={transformResponse:[Zb],transformRequest:[function(a){return J(a)&&"[object File]"!==Ca.call(a)&&"[object Blob]"!==Ca.call(a)&&"[object FormData]"!==Ca.call(a)?$a(a):
a}],headers:{common:{Accept:"application/json, text/plain, */*"},post:sa($b),put:sa($b),patch:sa($b)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN"},a=!1;this.useApplyAsync=function(b){return y(b)?(a=!!b,this):a};var c=this.interceptors=[];this.$get=["$httpBackend","$browser","$cacheFactory","$rootScope","$q","$injector",function(d,e,f,g,h,l){function k(a){function c(a){var b=w({},a);b.data=a.data?Zc(a.data,a.headers,a.status,e.transformResponse):a.data;a=a.status;return 200<=a&&300>a?
b:h.reject(b)}function d(a){var b,c={};r(a,function(a,d){G(a)?(b=a(),null!=b&&(c[d]=b)):c[d]=a});return c}if(!ca.isObject(a))throw R("$http")("badreq",a);var e=w({method:"get",transformRequest:b.transformRequest,transformResponse:b.transformResponse},a);e.headers=function(a){var c=b.headers,e=w({},a.headers),f,g,c=w({},c.common,c[z(a.method)]);a:for(f in c){a=z(f);for(g in e)if(z(g)===a)continue a;e[f]=c[f]}return d(e)}(a);e.method=ub(e.method);var f=[function(a){var d=a.headers,e=Zc(a.data,Yc(d),
t,a.transformRequest);x(e)&&r(d,function(a,b){"content-type"===z(b)&&delete d[b]});x(a.withCredentials)&&!x(b.withCredentials)&&(a.withCredentials=b.withCredentials);return n(a,e).then(c,c)},t],g=h.when(e);for(r(u,function(a){(a.request||a.requestError)&&f.unshift(a.request,a.requestError);(a.response||a.responseError)&&f.push(a.response,a.responseError)});f.length;){a=f.shift();var k=f.shift(),g=g.then(a,k)}g.showSuccess=function(a){g.then(function(b){a(b.data,b.status,b.headers,e)});return g};g.error=
function(a){g.then(null,function(b){a(b.data,b.status,b.headers,e)});return g};return g}function n(c,f){function l(b,c,d,e){function f(){m(c,b,d,e)}I&&(200<=b&&300>b?I.put(P,[b,c,Xc(d),e]):I.remove(P));a?g.$applyAsync(f):(f(),g.$$phase||g.$apply())}function m(a,b,d,e){b=Math.max(b,0);(200<=b&&300>b?L.resolve:L.reject)({data:a,status:b,headers:Yc(d),config:c,statusText:e})}function n(a){m(a.data,a.status,sa(a.headers()),a.statusText)}function u(){var a=k.pendingRequests.indexOf(c);-1!==a&&k.pendingRequests.splice(a,
1)}var L=h.defer(),B=L.promise,I,D,S=c.headers,P=p(c.url,c.params);k.pendingRequests.push(c);B.then(u,u);!c.cache&&!b.cache||!1===c.cache||"GET"!==c.method&&"JSONP"!==c.method||(I=J(c.cache)?c.cache:J(b.cache)?b.cache:q);I&&(D=I.get(P),y(D)?D&&G(D.then)?D.then(n,n):H(D)?m(D[1],D[0],sa(D[2]),D[3]):m(D,200,{},"OK"):I.put(P,B));x(D)&&((D=$c(c.url)?e.cookies()[c.xsrfCookieName||b.xsrfCookieName]:t)&&(S[c.xsrfHeaderName||b.xsrfHeaderName]=D),d(c.method,P,f,l,S,c.timeout,c.withCredentials,c.responseType));
return B}function p(a,b){if(!b)return a;var c=[];Ed(b,function(a,b){null===a||x(a)||(H(a)||(a=[a]),r(a,function(a){J(a)&&(a=ga(a)?a.toISOString():$a(a));c.push(Ea(b)+"="+Ea(a))}))});0<c.length&&(a+=(-1==a.indexOf("?")?"?":"&")+c.join("&"));return a}var q=f("$http"),u=[];r(c,function(a){u.unshift(C(a)?l.get(a):l.invoke(a))});k.pendingRequests=[];(function(a){r(arguments,function(a){k[a]=function(b,c){return k(w(c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){r(arguments,function(a){k[a]=
function(b,c,d){return k(w(d||{},{method:a,url:b,data:c}))}})})("post","put","patch");k.defaults=b;return k}]}function vf(){return new Q.XMLHttpRequest}function Le(){this.$get=["$browser","$window","$document",function(b,a,c){return wf(b,vf,b.defer,a.angular.callbacks,c[0])}]}function wf(b,a,c,d,e){function f(a,b,c){var f=e.createElement("script"),n=null;f.type="text/javascript";f.src=a;f.async=!0;n=function(a){f.removeEventListener("load",n,!1);f.removeEventListener("error",n,!1);e.body.removeChild(f);
f=null;var g=-1,u="unknown";a&&("load"!==a.type||d[b].called||(a={type:"error"}),u=a.type,g="error"===a.type?404:200);c&&c(g,u)};f.addEventListener("load",n,!1);f.addEventListener("error",n,!1);e.body.appendChild(f);return n}return function(e,h,l,k,n,p,q,u){function s(){m&&m();F&&F.abort()}function M(a,d,e,f,g){L!==t&&c.cancel(L);m=F=null;a(d,e,f,g);b.$$completeOutstandingRequest(E)}b.$$incOutstandingRequestCount();h=h||b.url();if("jsonp"==z(e)){var v="_"+(d.counter++).toString(36);d[v]=function(a){d[v].data=
a;d[v].called=!0};var m=f(h.replace("JSON_CALLBACK","angular.callbacks."+v),v,function(a,b){M(k,a,d[v].data,"",b);d[v]=E})}else{var F=a();F.open(e,h,!0);r(n,function(a,b){y(a)&&F.setRequestHeader(b,a)});F.onload=function(){var a=F.statusText||"",b="response"in F?F.response:F.responseText,c=1223===F.status?204:F.status;0===c&&(c=b?200:"file"==Aa(h).protocol?404:0);M(k,c,b,F.getAllResponseHeaders(),a)};e=function(){M(k,-1,null,null,"")};F.onerror=e;F.onabort=e;q&&(F.withCredentials=!0);if(u)try{F.responseType=
u}catch(Z){if("json"!==u)throw Z;}F.send(l||null)}if(0<p)var L=c(s,p);else p&&G(p.then)&&p.then(s)}}function Ie(){var b="{{",a="}}";this.startSymbol=function(a){return a?(b=a,this):b};this.endSymbol=function(b){return b?(a=b,this):a};this.$get=["$parse","$exceptionHandler","$sce",function(c,d,e){function f(a){return"\\\\\\"+a}function g(f,g,u,s){function M(c){return c.replace(k,b).replace(n,a)}function v(a){try{var b=a;a=u?e.getTrusted(u,b):e.valueOf(b);var c;if(s&&!y(a))c=a;else if(null==a)c="";
else{switch(typeof a){case "string":break;case "number":a=""+a;break;default:a=$a(a)}c=a}return c}catch(g){c=ac("interr",f,g.toString()),d(c)}}s=!!s;for(var m,F,r=0,L=[],B=[],I=f.length,D=[],S=[];r<I;)if(-1!=(m=f.indexOf(b,r))&&-1!=(F=f.indexOf(a,m+h)))r!==m&&D.push(M(f.substring(r,m))),r=f.substring(m+h,F),L.push(r),B.push(c(r,v)),r=F+l,S.push(D.length),D.push("");else{r!==I&&D.push(M(f.substring(r)));break}if(u&&1<D.length)throw ac("noconcat",f);if(!g||L.length){var P=function(a){for(var b=0,c=
L.length;b<c;b++){if(s&&x(a[b]))return;D[S[b]]=a[b]}return D.join("")};return w(function(a){var b=0,c=L.length,e=Array(c);try{for(;b<c;b++)e[b]=B[b](a);return P(e)}catch(g){a=ac("interr",f,g.toString()),d(a)}},{exp:f,expressions:L,$$watchDelegate:function(a,b,c){var d;return a.$watchGroup(B,function(c,e){var f=P(c);G(b)&&b.call(this,f,c!==e?d:f,a);d=f},c)}})}}var h=b.length,l=a.length,k=new RegExp(b.replace(/./g,f),"g"),n=new RegExp(a.replace(/./g,f),"g");g.startSymbol=function(){return b};g.endSymbol=
function(){return a};return g}]}function Je(){this.$get=["$rootScope","$window","$q","$$q",function(b,a,c,d){function e(e,h,l,k){var n=a.setInterval,p=a.clearInterval,q=0,u=y(k)&&!k,s=(u?d:c).defer(),M=s.promise;l=y(l)?l:0;M.then(null,null,e);M.$$intervalId=n(function(){s.notify(q++);0<l&&q>=l&&(s.resolve(q),p(M.$$intervalId),delete f[M.$$intervalId]);u||b.$apply()},h);f[M.$$intervalId]=s;return M}var f={};e.cancel=function(b){return b&&b.$$intervalId in f?(f[b.$$intervalId].reject("canceled"),a.clearInterval(b.$$intervalId),
delete f[b.$$intervalId],!0):!1};return e}]}function Rd(){this.$get=function(){return{id:"en-us",NUMBER_FORMATS:{DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{minInt:1,minFrac:0,maxFrac:3,posPre:"",posSuf:"",negPre:"-",negSuf:"",gSize:3,lgSize:3},{minInt:1,minFrac:2,maxFrac:2,posPre:"\u00a4",posSuf:"",negPre:"(\u00a4",negSuf:")",gSize:3,lgSize:3}],CURRENCY_SYM:"$"},DATETIME_FORMATS:{MONTH:"January February March April May June July August September October November December".split(" "),SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),AMPMS:["AM","PM"],medium:"MMM d, y h:mm:ss a","short":"M/d/yy h:mm a",fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",mediumDate:"MMM d, y",shortDate:"M/d/yy",mediumTime:"h:mm:ss a",shortTime:"h:mm a",ERANAMES:["Before Christ","Anno Domini"],ERAS:["BC","AD"]},pluralCat:function(b){return 1===b?"one":"other"}}}}function bc(b){b=b.split("/");for(var a=b.length;a--;)b[a]=qb(b[a]);
return b.join("/")}function ad(b,a){var c=Aa(b);a.$$protocol=c.protocol;a.$$host=c.hostname;a.$$port=aa(c.port)||xf[c.protocol]||null}function bd(b,a){var c="/"!==b.charAt(0);c&&(b="/"+b);var d=Aa(b);a.$$path=decodeURIComponent(c&&"/"===d.pathname.charAt(0)?d.pathname.substring(1):d.pathname);a.$$search=sc(d.search);a.$$hash=decodeURIComponent(d.hash);a.$$path&&"/"!=a.$$path.charAt(0)&&(a.$$path="/"+a.$$path)}function ya(b,a){if(0===a.indexOf(b))return a.substr(b.length)}function Ga(b){var a=b.indexOf("#");
return-1==a?b:b.substr(0,a)}function Fb(b){return b.replace(/(#.+)|#$/,"$1")}function cc(b){return b.substr(0,Ga(b).lastIndexOf("/")+1)}function dc(b,a){this.$$html5=!0;a=a||"";var c=cc(b);ad(b,this);this.$$parse=function(a){var b=ya(c,a);if(!C(b))throw Gb("ipthprfx",a,c);bd(b,this);this.$$path||(this.$$path="/");this.$$compose()};this.$$compose=function(){var a=Pb(this.$$search),b=this.$$hash?"#"+qb(this.$$hash):"";this.$$url=bc(this.$$path)+(a?"?"+a:"")+b;this.$$absUrl=c+this.$$url.substr(1)};this.$$parseLinkUrl=
function(d,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;(f=ya(b,d))!==t?(g=f,g=(f=ya(a,f))!==t?c+(ya("/",f)||f):b+g):(f=ya(c,d))!==t?g=c+f:c==d+"/"&&(g=c);g&&this.$$parse(g);return!!g}}function ec(b,a){var c=cc(b);ad(b,this);this.$$parse=function(d){d=ya(b,d)||ya(c,d);var e;"#"===d.charAt(0)?(e=ya(a,d),x(e)&&(e=d)):e=this.$$html5?d:"";bd(e,this);d=this.$$path;var f=/^\/[A-Z]:(\/.*)/;0===e.indexOf(b)&&(e=e.replace(b,""));f.exec(e)||(d=(e=f.exec(d))?e[1]:d);this.$$path=d;this.$$compose()};
this.$$compose=function(){var c=Pb(this.$$search),e=this.$$hash?"#"+qb(this.$$hash):"";this.$$url=bc(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=b+(this.$$url?a+this.$$url:"")};this.$$parseLinkUrl=function(a,c){return Ga(b)==Ga(a)?(this.$$parse(a),!0):!1}}function cd(b,a){this.$$html5=!0;ec.apply(this,arguments);var c=cc(b);this.$$parseLinkUrl=function(d,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;b==Ga(d)?f=d:(g=ya(c,d))?f=b+a+g:c===d+"/"&&(f=c);f&&this.$$parse(f);return!!f};this.$$compose=
function(){var c=Pb(this.$$search),e=this.$$hash?"#"+qb(this.$$hash):"";this.$$url=bc(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=b+a+this.$$url}}function Hb(b){return function(){return this[b]}}function dd(b,a){return function(c){if(x(c))return this[b];this[b]=a(c);this.$$compose();return this}}function Me(){var b="",a={enabled:!1,requireBase:!0,rewriteLinks:!0};this.hashPrefix=function(a){return y(a)?(b=a,this):b};this.html5Mode=function(b){return Wa(b)?(a.enabled=b,this):J(b)?(Wa(b.enabled)&&(a.enabled=
b.enabled),Wa(b.requireBase)&&(a.requireBase=b.requireBase),Wa(b.rewriteLinks)&&(a.rewriteLinks=b.rewriteLinks),this):a};this.$get=["$rootScope","$browser","$sniffer","$rootElement","$window",function(c,d,e,f,g){function h(a,b,c){var e=k.url(),f=k.$$state;try{d.url(a,b,c),k.$$state=d.state()}catch(g){throw k.url(e),k.$$state=f,g;}}function l(a,b){c.$broadcast("$locationChangeSuccess",k.absUrl(),a,k.$$state,b)}var k,n;n=d.baseHref();var p=d.url(),q;if(a.enabled){if(!n&&a.requireBase)throw Gb("nobase");
q=p.substring(0,p.indexOf("/",p.indexOf("//")+2))+(n||"/");n=e.history?dc:cd}else q=Ga(p),n=ec;k=new n(q,"#"+b);k.$$parseLinkUrl(p,p);k.$$state=d.state();var u=/^\s*(javascript|mailto):/i;f.on("click",function(b){if(a.rewriteLinks&&!b.ctrlKey&&!b.metaKey&&!b.shiftKey&&2!=b.which&&2!=b.button){for(var e=A(b.target);"a"!==va(e[0]);)if(e[0]===f[0]||!(e=e.parent())[0])return;var h=e.prop("href"),l=e.attr("href")||e.attr("xlink:href");J(h)&&"[object SVGAnimatedString]"===h.toString()&&(h=Aa(h.animVal).href);
u.test(h)||!h||e.attr("target")||b.isDefaultPrevented()||!k.$$parseLinkUrl(h,l)||(b.preventDefault(),k.absUrl()!=d.url()&&(c.$apply(),g.angular["ff-684208-preventDefault"]=!0))}});Fb(k.absUrl())!=Fb(p)&&d.url(k.absUrl(),!0);var s=!0;d.onUrlChange(function(a,b){c.$evalAsync(function(){var d=k.absUrl(),e=k.$$state,f;k.$$parse(a);k.$$state=b;f=c.$broadcast("$locationChangeStart",a,d,b,e).defaultPrevented;k.absUrl()===a&&(f?(k.$$parse(d),k.$$state=e,h(d,!1,e)):(s=!1,l(d,e)))});c.$$phase||c.$digest()});
c.$watch(function(){var a=Fb(d.url()),b=Fb(k.absUrl()),f=d.state(),g=k.$$replace,q=a!==b||k.$$html5&&e.history&&f!==k.$$state;if(s||q)s=!1,c.$evalAsync(function(){var b=k.absUrl(),d=c.$broadcast("$locationChangeStart",b,a,k.$$state,f).defaultPrevented;k.absUrl()===b&&(d?(k.$$parse(a),k.$$state=f):(q&&h(b,g,f===k.$$state?null:k.$$state),l(a,f)))});k.$$replace=!1});return k}]}function Ne(){var b=!0,a=this;this.debugEnabled=function(a){return y(a)?(b=a,this):b};this.$get=["$window",function(c){function d(a){a instanceof
Error&&(a.stack?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=c.console||{},e=b[a]||b.log||E;a=!1;try{a=!!e.apply}catch(l){}return a?function(){var a=[];r(arguments,function(b){a.push(d(b))});return e.apply(b,a)}:function(a,b){e(a,null==b?"":b)}}return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),debug:function(){var c=e("debug");return function(){b&&c.apply(a,
arguments)}}()}}]}function ua(b,a){if("__defineGetter__"===b||"__defineSetter__"===b||"__lookupGetter__"===b||"__lookupSetter__"===b||"__proto__"===b)throw na("isecfld",a);return b}function oa(b,a){if(b){if(b.constructor===b)throw na("isecfn",a);if(b.window===b)throw na("isecwindow",a);if(b.children&&(b.nodeName||b.prop&&b.attr&&b.find))throw na("isecdom",a);if(b===Object)throw na("isecobj",a);}return b}function fc(b){return b.constant}function hb(b,a,c,d,e){oa(b,e);oa(a,e);c=c.split(".");for(var f,
g=0;1<c.length;g++){f=ua(c.shift(),e);var h=0===g&&a&&a[f]||b[f];h||(h={},b[f]=h);b=oa(h,e)}f=ua(c.shift(),e);oa(b[f],e);return b[f]=d}function Pa(b){return"constructor"==b}function ed(b,a,c,d,e,f,g){ua(b,f);ua(a,f);ua(c,f);ua(d,f);ua(e,f);var h=function(a){return oa(a,f)},l=g||Pa(b)?h:ra,k=g||Pa(a)?h:ra,n=g||Pa(c)?h:ra,p=g||Pa(d)?h:ra,q=g||Pa(e)?h:ra;return function(f,g){var h=g&&g.hasOwnProperty(b)?g:f;if(null==h)return h;h=l(h[b]);if(!a)return h;if(null==h)return t;h=k(h[a]);if(!c)return h;if(null==
h)return t;h=n(h[c]);if(!d)return h;if(null==h)return t;h=p(h[d]);return e?null==h?t:h=q(h[e]):h}}function yf(b,a){return function(c,d){return b(c,d,oa,a)}}function zf(b,a,c){var d=a.expensiveChecks,e=d?Af:Bf,f=e[b];if(f)return f;var g=b.split("."),h=g.length;if(a.csp)f=6>h?ed(g[0],g[1],g[2],g[3],g[4],c,d):function(a,b){var e=0,f;do f=ed(g[e++],g[e++],g[e++],g[e++],g[e++],c,d)(a,b),b=t,a=f;while(e<h);return f};else{var l="";d&&(l+="s = eso(s, fe);\nl = eso(l, fe);\n");var k=d;r(g,function(a,b){ua(a,
c);var e=(b?"s":'((l&&l.hasOwnProperty("'+a+'"))?l:s)')+"."+a;if(d||Pa(a))e="eso("+e+", fe)",k=!0;l+="if(s == null) return undefined;\ns="+e+";\n"});l+="return s;";a=new Function("s","l","eso","fe",l);a.toString=ea(l);k&&(a=yf(a,c));f=a}f.sharedGetter=!0;f.assign=function(a,c,d){return hb(a,d,b,c,b)};return e[b]=f}function gc(b){return G(b.valueOf)?b.valueOf():Cf.call(b)}function Oe(){var b=ia(),a=ia();this.$get=["$filter","$sniffer",function(c,d){function e(a){var b=a;a.sharedGetter&&(b=function(b,
c){return a(b,c)},b.literal=a.literal,b.constant=a.constant,b.assign=a.assign);return b}function f(a,b){for(var c=0,d=a.length;c<d;c++){var e=a[c];e.constant||(e.inputs?f(e.inputs,b):-1===b.indexOf(e)&&b.push(e))}return b}function g(a,b){return null==a||null==b?a===b:"object"===typeof a&&(a=gc(a),"object"===typeof a)?!1:a===b||a!==a&&b!==b}function h(a,b,c,d){var e=d.$$inputs||(d.$$inputs=f(d.inputs,[])),h;if(1===e.length){var k=g,e=e[0];return a.$watch(function(a){var b=e(a);g(b,k)||(h=d(a),k=b&&
gc(b));return h},b,c)}for(var l=[],q=0,p=e.length;q<p;q++)l[q]=g;return a.$watch(function(a){for(var b=!1,c=0,f=e.length;c<f;c++){var k=e[c](a);if(b||(b=!g(k,l[c])))l[c]=k&&gc(k)}b&&(h=d(a));return h},b,c)}function l(a,b,c,d){var e,f;return e=a.$watch(function(a){return d(a)},function(a,c,d){f=a;G(b)&&b.apply(this,arguments);y(a)&&d.$$postDigest(function(){y(f)&&e()})},c)}function k(a,b,c,d){function e(a){var b=!0;r(a,function(a){y(a)||(b=!1)});return b}var f,g;return f=a.$watch(function(a){return d(a)},
function(a,c,d){g=a;G(b)&&b.call(this,a,c,d);e(a)&&d.$$postDigest(function(){e(g)&&f()})},c)}function n(a,b,c,d){var e;return e=a.$watch(function(a){return d(a)},function(a,c,d){G(b)&&b.apply(this,arguments);e()},c)}function p(a,b){if(!b)return a;var c=a.$$watchDelegate,c=c!==k&&c!==l?function(c,d){var e=a(c,d);return b(e,c,d)}:function(c,d){var e=a(c,d),f=b(e,c,d);return y(e)?f:e};a.$$watchDelegate&&a.$$watchDelegate!==h?c.$$watchDelegate=a.$$watchDelegate:b.$stateful||(c.$$watchDelegate=h,c.inputs=
[a]);return c}var q={csp:d.csp,expensiveChecks:!1},u={csp:d.csp,expensiveChecks:!0};return function(d,f,g){var m,r,t;switch(typeof d){case "string":t=d=d.trim();var L=g?a:b;m=L[t];m||(":"===d.charAt(0)&&":"===d.charAt(1)&&(r=!0,d=d.substring(2)),g=g?u:q,m=new hc(g),m=(new ib(m,c,g)).parse(d),m.constant?m.$$watchDelegate=n:r?(m=e(m),m.$$watchDelegate=m.literal?k:l):m.inputs&&(m.$$watchDelegate=h),L[t]=m);return p(m,f);case "function":return p(d,f);default:return p(E,f)}}}]}function Qe(){this.$get=
["$rootScope","$exceptionHandler",function(b,a){return fd(function(a){b.$evalAsync(a)},a)}]}function Re(){this.$get=["$browser","$exceptionHandler",function(b,a){return fd(function(a){b.defer(a)},a)}]}function fd(b,a){function c(a,b,c){function d(b){return function(c){e||(e=!0,b.call(a,c))}}var e=!1;return[d(b),d(c)]}function d(){this.$$state={status:0}}function e(a,b){return function(c){b.call(a,c)}}function f(c){!c.processScheduled&&c.pending&&(c.processScheduled=!0,b(function(){var b,d,e;e=c.pending;
c.processScheduled=!1;c.pending=t;for(var f=0,g=e.length;f<g;++f){d=e[f][0];b=e[f][c.status];try{G(b)?d.resolve(b(c.value)):1===c.status?d.resolve(c.value):d.reject(c.value)}catch(h){d.reject(h),a(h)}}}))}function g(){this.promise=new d;this.resolve=e(this,this.resolve);this.reject=e(this,this.reject);this.notify=e(this,this.notify)}var h=R("$q",TypeError);d.prototype={then:function(a,b,c){var d=new g;this.$$state.pending=this.$$state.pending||[];this.$$state.pending.push([d,a,b,c]);0<this.$$state.status&&
f(this.$$state);return d.promise},"catch":function(a){return this.then(null,a)},"finally":function(a,b){return this.then(function(b){return k(b,!0,a)},function(b){return k(b,!1,a)},b)}};g.prototype={resolve:function(a){this.promise.$$state.status||(a===this.promise?this.$$reject(h("qcycle",a)):this.$$resolve(a))},$$resolve:function(b){var d,e;e=c(this,this.$$resolve,this.$$reject);try{if(J(b)||G(b))d=b&&b.then;G(d)?(this.promise.$$state.status=-1,d.call(b,e[0],e[1],this.notify)):(this.promise.$$state.value=
b,this.promise.$$state.status=1,f(this.promise.$$state))}catch(g){e[1](g),a(g)}},reject:function(a){this.promise.$$state.status||this.$$reject(a)},$$reject:function(a){this.promise.$$state.value=a;this.promise.$$state.status=2;f(this.promise.$$state)},notify:function(c){var d=this.promise.$$state.pending;0>=this.promise.$$state.status&&d&&d.length&&b(function(){for(var b,e,f=0,g=d.length;f<g;f++){e=d[f][0];b=d[f][3];try{e.notify(G(b)?b(c):c)}catch(h){a(h)}}})}};var l=function(a,b){var c=new g;b?c.resolve(a):
c.reject(a);return c.promise},k=function(a,b,c){var d=null;try{G(c)&&(d=c())}catch(e){return l(e,!1)}return d&&G(d.then)?d.then(function(){return l(a,b)},function(a){return l(a,!1)}):l(a,b)},n=function(a,b,c,d){var e=new g;e.resolve(a);return e.promise.then(b,c,d)},p=function u(a){if(!G(a))throw h("norslvr",a);if(!(this instanceof u))return new u(a);var b=new g;a(function(a){b.resolve(a)},function(a){b.reject(a)});return b.promise};p.defer=function(){return new g};p.reject=function(a){var b=new g;
b.reject(a);return b.promise};p.when=n;p.all=function(a){var b=new g,c=0,d=H(a)?[]:{};r(a,function(a,e){c++;n(a).then(function(a){d.hasOwnProperty(e)||(d[e]=a,--c||b.resolve(d))},function(a){d.hasOwnProperty(e)||b.reject(a)})});0===c&&b.resolve(d);return b.promise};return p}function $e(){this.$get=["$window","$timeout",function(b,a){var c=b.requestAnimationFrame||b.webkitRequestAnimationFrame,d=b.cancelAnimationFrame||b.webkitCancelAnimationFrame||b.webkitCancelRequestAnimationFrame,e=!!c,f=e?function(a){var b=
c(a);return function(){d(b)}}:function(b){var c=a(b,16.66,!1);return function(){a.cancel(c)}};f.supported=e;return f}]}function Pe(){function b(a){function b(){this.$$watchers=this.$$nextSibling=this.$$childHead=this.$$childTail=null;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$id=++ob;this.$$ChildScope=null}b.prototype=a;return b}var a=10,c=R("$rootScope"),d=null,e=null;this.digestTtl=function(b){arguments.length&&(a=b);return a};this.$get=["$injector","$exceptionHandler",
"$parse","$browser",function(f,g,h,l){function k(a){a.currentScope.$$destroyed=!0}function n(){this.$id=++ob;this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this.$root=this;this.$$destroyed=!1;this.$$listeners={};this.$$listenerCount={};this.$$isolateBindings=null}function p(a){if(v.$$phase)throw c("inprog",v.$$phase);v.$$phase=a}function q(a,b,c){do a.$$listenerCount[c]-=b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];
while(a=a.$parent)}function u(){}function s(){for(;t.length;)try{t.shift()()}catch(a){g(a)}e=null}function M(){null===e&&(e=l.defer(function(){v.$apply(s)}))}n.prototype={constructor:n,$new:function(a,c){var d;c=c||this;a?(d=new n,d.$root=this.$root):(this.$$ChildScope||(this.$$ChildScope=b(this)),d=new this.$$ChildScope);d.$parent=c;d.$$prevSibling=c.$$childTail;c.$$childHead?(c.$$childTail.$$nextSibling=d,c.$$childTail=d):c.$$childHead=c.$$childTail=d;(a||c!=this)&&d.$on("$destroy",k);return d},
$watch:function(a,b,c){var e=h(a);if(e.$$watchDelegate)return e.$$watchDelegate(this,b,c,e);var f=this.$$watchers,g={fn:b,last:u,get:e,exp:a,eq:!!c};d=null;G(b)||(g.fn=E);f||(f=this.$$watchers=[]);f.unshift(g);return function(){Xa(f,g);d=null}},$watchGroup:function(a,b){function c(){h=!1;k?(k=!1,b(e,e,g)):b(e,d,g)}var d=Array(a.length),e=Array(a.length),f=[],g=this,h=!1,k=!0;if(!a.length){var l=!0;g.$evalAsync(function(){l&&b(e,e,g)});return function(){l=!1}}if(1===a.length)return this.$watch(a[0],
function(a,c,f){e[0]=a;d[0]=c;b(e,a===c?e:d,f)});r(a,function(a,b){var k=g.$watch(a,function(a,f){e[b]=a;d[b]=f;h||(h=!0,g.$evalAsync(c))});f.push(k)});return function(){for(;f.length;)f.shift()()}},$watchCollection:function(a,b){function c(a){e=a;var b,d,g,h;if(!x(e)){if(J(e))if(Sa(e))for(f!==p&&(f=p,u=f.length=0,l++),a=e.length,u!==a&&(l++,f.length=u=a),b=0;b<a;b++)h=f[b],g=e[b],d=h!==h&&g!==g,d||h===g||(l++,f[b]=g);else{f!==n&&(f=n={},u=0,l++);a=0;for(b in e)e.hasOwnProperty(b)&&(a++,g=e[b],h=
f[b],b in f?(d=h!==h&&g!==g,d||h===g||(l++,f[b]=g)):(u++,f[b]=g,l++));if(u>a)for(b in l++,f)e.hasOwnProperty(b)||(u--,delete f[b])}else f!==e&&(f=e,l++);return l}}c.$stateful=!0;var d=this,e,f,g,k=1<b.length,l=0,q=h(a,c),p=[],n={},m=!0,u=0;return this.$watch(q,function(){m?(m=!1,b(e,e,d)):b(e,g,d);if(k)if(J(e))if(Sa(e)){g=Array(e.length);for(var a=0;a<e.length;a++)g[a]=e[a]}else for(a in g={},e)tc.call(e,a)&&(g[a]=e[a]);else g=e})},$digest:function(){var b,f,h,k,q,n,r=a,t,O=[],M,y;p("$digest");l.$$checkUrlChange();
this===v&&null!==e&&(l.defer.cancel(e),s());d=null;do{n=!1;for(t=this;m.length;){try{y=m.shift(),y.scope.$eval(y.expression,y.locals)}catch(w){g(w)}d=null}a:do{if(k=t.$$watchers)for(q=k.length;q--;)try{if(b=k[q])if((f=b.get(t))!==(h=b.last)&&!(b.eq?ha(f,h):"number"===typeof f&&"number"===typeof h&&isNaN(f)&&isNaN(h)))n=!0,d=b,b.last=b.eq?Da(f,null):f,b.fn(f,h===u?f:h,t),5>r&&(M=4-r,O[M]||(O[M]=[]),O[M].push({msg:G(b.exp)?"fn: "+(b.exp.name||b.exp.toString()):b.exp,newVal:f,oldVal:h}));else if(b===
d){n=!1;break a}}catch(A){g(A)}if(!(k=t.$$childHead||t!==this&&t.$$nextSibling))for(;t!==this&&!(k=t.$$nextSibling);)t=t.$parent}while(t=k);if((n||m.length)&&!r--)throw v.$$phase=null,c("infdig",a,O);}while(n||m.length);for(v.$$phase=null;F.length;)try{F.shift()()}catch(x){g(x)}},$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;if(this!==v){for(var b in this.$$listenerCount)q(this,this.$$listenerCount[b],b);a.$$childHead==this&&(a.$$childHead=
this.$$nextSibling);a.$$childTail==this&&(a.$$childTail=this.$$prevSibling);this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling);this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling);this.$destroy=this.$digest=this.$apply=this.$evalAsync=this.$applyAsync=E;this.$on=this.$watch=this.$watchGroup=function(){return E};this.$$listeners={};this.$parent=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=this.$root=this.$$watchers=null}}},$eval:function(a,
b){return h(a)(this,b)},$evalAsync:function(a,b){v.$$phase||m.length||l.defer(function(){m.length&&v.$digest()});m.push({scope:this,expression:a,locals:b})},$$postDigest:function(a){F.push(a)},$apply:function(a){try{return p("$apply"),this.$eval(a)}catch(b){g(b)}finally{v.$$phase=null;try{v.$digest()}catch(c){throw g(c),c;}}},$applyAsync:function(a){function b(){c.$eval(a)}var c=this;a&&t.push(b);M()},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||
(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){var d=c.indexOf(b);-1!==d&&(c[d]=null,q(e,1,a))}},$emit:function(a,b){var c=[],d,e=this,f=!1,h={name:a,targetScope:e,stopPropagation:function(){f=!0},preventDefault:function(){h.defaultPrevented=!0},defaultPrevented:!1},k=Ya([h],arguments,1),l,q;do{d=e.$$listeners[a]||c;h.currentScope=e;l=0;for(q=d.length;l<q;l++)if(d[l])try{d[l].apply(null,k)}catch(p){g(p)}else d.splice(l,1),l--,q--;if(f)return h.currentScope=
null,h;e=e.$parent}while(e);h.currentScope=null;return h},$broadcast:function(a,b){var c=this,d=this,e={name:a,targetScope:this,preventDefault:function(){e.defaultPrevented=!0},defaultPrevented:!1};if(!this.$$listenerCount[a])return e;for(var f=Ya([e],arguments,1),h,l;c=d;){e.currentScope=c;d=c.$$listeners[a]||[];h=0;for(l=d.length;h<l;h++)if(d[h])try{d[h].apply(null,f)}catch(k){g(k)}else d.splice(h,1),h--,l--;if(!(d=c.$$listenerCount[a]&&c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=
c.$$nextSibling);)c=c.$parent}e.currentScope=null;return e}};var v=new n,m=v.$$asyncQueue=[],F=v.$$postDigestQueue=[],t=v.$$applyAsyncQueue=[];return v}]}function Sd(){var b=/^\s*(https?|ftp|mailto|tel|file):/,a=/^\s*((https?|ftp|file|blob):|data:image\/)/;this.aHrefSanitizationWhitelist=function(a){return y(a)?(b=a,this):b};this.imgSrcSanitizationWhitelist=function(b){return y(b)?(a=b,this):a};this.$get=function(){return function(c,d){var e=d?a:b,f;f=Aa(c).href;return""===f||f.match(e)?c:"unsafe:"+
f}}}function Df(b){if("self"===b)return b;if(C(b)){if(-1<b.indexOf("***"))throw Ba("iwcard",b);b=gd(b).replace("\\*\\*",".*").replace("\\*","[^:/.?&;]*");return new RegExp("^"+b+"$")}if(Ua(b))return new RegExp("^"+b.source+"$");throw Ba("imatcher");}function hd(b){var a=[];y(b)&&r(b,function(b){a.push(Df(b))});return a}function Te(){this.SCE_CONTEXTS=pa;var b=["self"],a=[];this.resourceUrlWhitelist=function(a){arguments.length&&(b=hd(a));return b};this.resourceUrlBlacklist=function(b){arguments.length&&
(a=hd(b));return a};this.$get=["$injector",function(c){function d(a,b){return"self"===a?$c(b):!!a.exec(b.href)}function e(a){var b=function(a){this.$$unwrapTrustedValue=function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};return b}var f=function(a){throw Ba("unsafe");};c.has("$sanitize")&&(f=c.get("$sanitize"));var g=e(),h={};h[pa.HTML]=e(g);h[pa.CSS]=e(g);h[pa.URL]=
e(g);h[pa.JS]=e(g);h[pa.RESOURCE_URL]=e(h[pa.URL]);return{trustAs:function(a,b){var c=h.hasOwnProperty(a)?h[a]:null;if(!c)throw Ba("icontext",a,b);if(null===b||b===t||""===b)return b;if("string"!==typeof b)throw Ba("itype",a);return new c(b)},getTrusted:function(c,e){if(null===e||e===t||""===e)return e;var g=h.hasOwnProperty(c)?h[c]:null;if(g&&e instanceof g)return e.$$unwrapTrustedValue();if(c===pa.RESOURCE_URL){var g=Aa(e.toString()),p,q,u=!1;p=0;for(q=b.length;p<q;p++)if(d(b[p],g)){u=!0;break}if(u)for(p=
0,q=a.length;p<q;p++)if(d(a[p],g)){u=!1;break}if(u)return e;throw Ba("insecurl",e.toString());}if(c===pa.HTML)return f(e);throw Ba("unsafe");},valueOf:function(a){return a instanceof g?a.$$unwrapTrustedValue():a}}}]}function Se(){var b=!0;this.enabled=function(a){arguments.length&&(b=!!a);return b};this.$get=["$parse","$sceDelegate",function(a,c){if(b&&8>Qa)throw Ba("iequirks");var d=sa(pa);d.isEnabled=function(){return b};d.trustAs=c.trustAs;d.getTrusted=c.getTrusted;d.valueOf=c.valueOf;b||(d.trustAs=
d.getTrusted=function(a,b){return b},d.valueOf=ra);d.parseAs=function(b,c){var e=a(c);return e.literal&&e.constant?e:a(c,function(a){return d.getTrusted(b,a)})};var e=d.parseAs,f=d.getTrusted,g=d.trustAs;r(pa,function(a,b){var c=z(b);d[db("parse_as_"+c)]=function(b){return e(a,b)};d[db("get_trusted_"+c)]=function(b){return f(a,b)};d[db("trust_as_"+c)]=function(b){return g(a,b)}});return d}]}function Ue(){this.$get=["$window","$document",function(b,a){var c={},d=aa((/android (\d+)/.exec(z((b.navigator||
{}).userAgent))||[])[1]),e=/Boxee/i.test((b.navigator||{}).userAgent),f=a[0]||{},g,h=/^(Moz|webkit|ms)(?=[A-Z])/,l=f.body&&f.body.style,k=!1,n=!1;if(l){for(var p in l)if(k=h.exec(p)){g=k[0];g=g.substr(0,1).toUpperCase()+g.substr(1);break}g||(g="WebkitOpacity"in l&&"webkit");k=!!("transition"in l||g+"Transition"in l);n=!!("animation"in l||g+"Animation"in l);!d||k&&n||(k=C(f.body.style.webkitTransition),n=C(f.body.style.webkitAnimation))}return{history:!(!b.history||!b.history.pushState||4>d||e),hasEvent:function(a){if("input"===
a&&11>=Qa)return!1;if(x(c[a])){var b=f.createElement("div");c[a]="on"+a in b}return c[a]},csp:bb(),vendorPrefix:g,transitions:k,animations:n,android:d}}]}function We(){this.$get=["$templateCache","$http","$q",function(b,a,c){function d(e,f){d.totalPendingRequests++;var g=a.defaults&&a.defaults.transformResponse;H(g)?g=g.filter(function(a){return a!==Zb}):g===Zb&&(g=null);return a.get(e,{cache:b,transformResponse:g})["finally"](function(){d.totalPendingRequests--}).then(function(a){return a.data},
function(a){if(!f)throw la("tpload",e);return c.reject(a)})}d.totalPendingRequests=0;return d}]}function Xe(){this.$get=["$rootScope","$browser","$location",function(b,a,c){return{findBindings:function(a,b,c){a=a.getElementsByClassName("ng-binding");var g=[];r(a,function(a){var d=ca.element(a).data("$binding");d&&r(d,function(d){c?(new RegExp("(^|\\s)"+gd(b)+"(\\s|\\||$)")).test(d)&&g.push(a):-1!=d.indexOf(b)&&g.push(a)})});return g},findModels:function(a,b,c){for(var g=["ng-","data-ng-","ng\\:"],
h=0;h<g.length;++h){var l=a.querySelectorAll("["+g[h]+"model"+(c?"=":"*=")+'"'+b+'"]');if(l.length)return l}},getLocation:function(){return c.url()},setLocation:function(a){a!==c.url()&&(c.url(a),b.$digest())},whenStable:function(b){a.notifyWhenNoOutstandingRequests(b)}}}]}function Ye(){this.$get=["$rootScope","$browser","$q","$$q","$exceptionHandler",function(b,a,c,d,e){function f(f,l,k){var n=y(k)&&!k,p=(n?d:c).defer(),q=p.promise;l=a.defer(function(){try{p.resolve(f())}catch(a){p.reject(a),e(a)}finally{delete g[q.$$timeoutId]}n||
b.$apply()},l);q.$$timeoutId=l;g[l]=p;return q}var g={};f.cancel=function(b){return b&&b.$$timeoutId in g?(g[b.$$timeoutId].reject("canceled"),delete g[b.$$timeoutId],a.defer.cancel(b.$$timeoutId)):!1};return f}]}function Aa(b){Qa&&($.setAttribute("href",b),b=$.href);$.setAttribute("href",b);return{href:$.href,protocol:$.protocol?$.protocol.replace(/:$/,""):"",host:$.host,search:$.search?$.search.replace(/^\?/,""):"",hash:$.hash?$.hash.replace(/^#/,""):"",hostname:$.hostname,port:$.port,pathname:"/"===
$.pathname.charAt(0)?$.pathname:"/"+$.pathname}}function $c(b){b=C(b)?Aa(b):b;return b.protocol===id.protocol&&b.host===id.host}function Ze(){this.$get=ea(Q)}function Fc(b){function a(c,d){if(J(c)){var e={};r(c,function(b,c){e[c]=a(c,b)});return e}return b.factory(c+"Filter",d)}this.register=a;this.$get=["$injector",function(a){return function(b){return a.get(b+"Filter")}}];a("currency",jd);a("date",kd);a("filter",Ef);a("json",Ff);a("limitTo",Gf);a("lowercase",Hf);a("number",ld);a("orderBy",md);a("uppercase",
If)}function Ef(){return function(b,a,c){if(!H(b))return b;var d;switch(typeof a){case "function":break;case "boolean":case "number":case "string":d=!0;case "object":a=Jf(a,c,d);break;default:return b}return b.filter(a)}}function Jf(b,a,c){var d=J(b)&&"$"in b;!0===a?a=ha:G(a)||(a=function(a,b){if(J(a)||J(b))return!1;a=z(""+a);b=z(""+b);return-1!==a.indexOf(b)});return function(e){return d&&!J(e)?Ha(e,b.$,a,!1):Ha(e,b,a,c)}}function Ha(b,a,c,d,e){var f=null!==b?typeof b:"null",g=null!==a?typeof a:
"null";if("string"===g&&"!"===a.charAt(0))return!Ha(b,a.substring(1),c,d);if(H(b))return b.some(function(b){return Ha(b,a,c,d)});switch(f){case "object":var h;if(d){for(h in b)if("$"!==h.charAt(0)&&Ha(b[h],a,c,!0))return!0;return e?!1:Ha(b,a,c,!1)}if("object"===g){for(h in a)if(e=a[h],!G(e)&&!x(e)&&(f="$"===h,!Ha(f?b:b[h],e,c,f,f)))return!1;return!0}return c(b,a);case "function":return!1;default:return c(b,a)}}function jd(b){var a=b.NUMBER_FORMATS;return function(b,d,e){x(d)&&(d=a.CURRENCY_SYM);x(e)&&
(e=a.PATTERNS[1].maxFrac);return null==b?b:nd(b,a.PATTERNS[1],a.GROUP_SEP,a.DECIMAL_SEP,e).replace(/\u00A4/g,d)}}function ld(b){var a=b.NUMBER_FORMATS;return function(b,d){return null==b?b:nd(b,a.PATTERNS[0],a.GROUP_SEP,a.DECIMAL_SEP,d)}}function nd(b,a,c,d,e){if(!isFinite(b)||J(b))return"";var f=0>b;b=Math.abs(b);var g=b+"",h="",l=[],k=!1;if(-1!==g.indexOf("e")){var n=g.match(/([\d\.]+)e(-?)(\d+)/);n&&"-"==n[2]&&n[3]>e+1?b=0:(h=g,k=!0)}if(k)0<e&&1>b&&(h=b.toFixed(e),b=parseFloat(h));else{g=(g.split(od)[1]||
"").length;x(e)&&(e=Math.min(Math.max(a.minFrac,g),a.maxFrac));b=+(Math.round(+(b.toString()+"e"+e)).toString()+"e"+-e);var g=(""+b).split(od),k=g[0],g=g[1]||"",p=0,q=a.lgSize,u=a.gSize;if(k.length>=q+u)for(p=k.length-q,n=0;n<p;n++)0===(p-n)%u&&0!==n&&(h+=c),h+=k.charAt(n);for(n=p;n<k.length;n++)0===(k.length-n)%q&&0!==n&&(h+=c),h+=k.charAt(n);for(;g.length<e;)g+="0";e&&"0"!==e&&(h+=d+g.substr(0,e))}0===b&&(f=!1);l.push(f?a.negPre:a.posPre,h,f?a.negSuf:a.posSuf);return l.join("")}function Ib(b,a,
c){var d="";0>b&&(d="-",b=-b);for(b=""+b;b.length<a;)b="0"+b;c&&(b=b.substr(b.length-a));return d+b}function U(b,a,c,d){c=c||0;return function(e){e=e["get"+b]();if(0<c||e>-c)e+=c;0===e&&-12==c&&(e=12);return Ib(e,a,d)}}function Jb(b,a){return function(c,d){var e=c["get"+b](),f=ub(a?"SHORT"+b:b);return d[f][e]}}function pd(b){var a=(new Date(b,0,1)).getDay();return new Date(b,0,(4>=a?5:12)-a)}function qd(b){return function(a){var c=pd(a.getFullYear());a=+new Date(a.getFullYear(),a.getMonth(),a.getDate()+
(4-a.getDay()))-+c;a=1+Math.round(a/6048E5);return Ib(a,b)}}function ic(b,a){return 0>=b.getFullYear()?a.ERAS[0]:a.ERAS[1]}function kd(b){function a(a){var b;if(b=a.match(c)){a=new Date(0);var f=0,g=0,h=b[8]?a.setUTCFullYear:a.setFullYear,l=b[8]?a.setUTCHours:a.setHours;b[9]&&(f=aa(b[9]+b[10]),g=aa(b[9]+b[11]));h.call(a,aa(b[1]),aa(b[2])-1,aa(b[3]));f=aa(b[4]||0)-f;g=aa(b[5]||0)-g;h=aa(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));l.call(a,f,g,h,b)}return a}var c=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
return function(c,e,f){var g="",h=[],l,k;e=e||"mediumDate";e=b.DATETIME_FORMATS[e]||e;C(c)&&(c=Kf.test(c)?aa(c):a(c));Y(c)&&(c=new Date(c));if(!ga(c))return c;for(;e;)(k=Lf.exec(e))?(h=Ya(h,k,1),e=h.pop()):(h.push(e),e=null);f&&"UTC"===f&&(c=new Date(c.getTime()),c.setMinutes(c.getMinutes()+c.getTimezoneOffset()));r(h,function(a){l=Mf[a];g+=l?l(c,b.DATETIME_FORMATS):a.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return g}}function Ff(){return function(b,a){x(a)&&(a=2);return $a(b,a)}}function Gf(){return function(b,
a){Y(b)&&(b=b.toString());return H(b)||C(b)?(a=Infinity===Math.abs(Number(a))?Number(a):aa(a))?0<a?b.slice(0,a):b.slice(a):C(b)?"":[]:b}}function md(b){return function(a,c,d){function e(a,b){return b?function(b,c){return a(c,b)}:a}function f(a){switch(typeof a){case "number":case "boolean":case "string":return!0;default:return!1}}function g(a){return null===a?"null":"function"===typeof a.valueOf&&(a=a.valueOf(),f(a))||"function"===typeof a.toString&&(a=a.toString(),f(a))?a:""}function h(a,b){var c=
typeof a,d=typeof b;c===d&&"object"===c&&(a=g(a),b=g(b));return c===d?("string"===c&&(a=a.toLowerCase(),b=b.toLowerCase()),a===b?0:a<b?-1:1):c<d?-1:1}if(!Sa(a))return a;c=H(c)?c:[c];0===c.length&&(c=["+"]);c=c.map(function(a){var c=!1,d=a||ra;if(C(a)){if("+"==a.charAt(0)||"-"==a.charAt(0))c="-"==a.charAt(0),a=a.substring(1);if(""===a)return e(h,c);d=b(a);if(d.constant){var f=d();return e(function(a,b){return h(a[f],b[f])},c)}}return e(function(a,b){return h(d(a),d(b))},c)});return Za.call(a).sort(e(function(a,
b){for(var d=0;d<c.length;d++){var e=c[d](a,b);if(0!==e)return e}return 0},d))}}function Ia(b){G(b)&&(b={link:b});b.restrict=b.restrict||"AC";return ea(b)}function rd(b,a,c,d,e){var f=this,g=[],h=f.$$parentForm=b.parent().controller("form")||Kb;f.$error={};f.$$success={};f.$pending=t;f.$name=e(a.name||a.ngForm||"")(c);f.$dirty=!1;f.$pristine=!0;f.$valid=!0;f.$invalid=!1;f.$submitted=!1;h.$addControl(f);f.$rollbackViewValue=function(){r(g,function(a){a.$rollbackViewValue()})};f.$commitViewValue=function(){r(g,
function(a){a.$commitViewValue()})};f.$addControl=function(a){La(a.$name,"input");g.push(a);a.$name&&(f[a.$name]=a)};f.$$renameControl=function(a,b){var c=a.$name;f[c]===a&&delete f[c];f[b]=a;a.$name=b};f.$removeControl=function(a){a.$name&&f[a.$name]===a&&delete f[a.$name];r(f.$pending,function(b,c){f.$setValidity(c,null,a)});r(f.$error,function(b,c){f.$setValidity(c,null,a)});r(f.$$success,function(b,c){f.$setValidity(c,null,a)});Xa(g,a)};sd({ctrl:this,$element:b,set:function(a,b,c){var d=a[b];
d?-1===d.indexOf(c)&&d.push(c):a[b]=[c]},unset:function(a,b,c){var d=a[b];d&&(Xa(d,c),0===d.length&&delete a[b])},parentForm:h,$animate:d});f.$setDirty=function(){d.removeClass(b,Ra);d.addClass(b,Lb);f.$dirty=!0;f.$pristine=!1;h.$setDirty()};f.$setPristine=function(){d.setClass(b,Ra,Lb+" ng-submitted");f.$dirty=!1;f.$pristine=!0;f.$submitted=!1;r(g,function(a){a.$setPristine()})};f.$setUntouched=function(){r(g,function(a){a.$setUntouched()})};f.$setSubmitted=function(){d.addClass(b,"ng-submitted");
f.$submitted=!0;h.$setSubmitted()}}function jc(b){b.$formatters.push(function(a){return b.$isEmpty(a)?a:a.toString()})}function jb(b,a,c,d,e,f){var g=z(a[0].type);if(!e.android){var h=!1;a.on("compositionstart",function(a){h=!0});a.on("compositionend",function(){h=!1;l()})}var l=function(b){k&&(f.defer.cancel(k),k=null);if(!h){var e=a.val();b=b&&b.type;"password"===g||c.ngTrim&&"false"===c.ngTrim||(e=N(e));(d.$viewValue!==e||""===e&&d.$$hasNativeValidators)&&d.$setViewValue(e,b)}};if(e.hasEvent("input"))a.on("input",
l);else{var k,n=function(a,b,c){k||(k=f.defer(function(){k=null;b&&b.value===c||l(a)}))};a.on("keydown",function(a){var b=a.keyCode;91===b||15<b&&19>b||37<=b&&40>=b||n(a,this,this.value)});if(e.hasEvent("paste"))a.on("paste cut",n)}a.on("change",l);d.$render=function(){a.val(d.$isEmpty(d.$viewValue)?"":d.$viewValue)}}function Mb(b,a){return function(c,d){var e,f;if(ga(c))return c;if(C(c)){'"'==c.charAt(0)&&'"'==c.charAt(c.length-1)&&(c=c.substring(1,c.length-1));if(Nf.test(c))return new Date(c);b.lastIndex=
0;if(e=b.exec(c))return e.shift(),f=d?{yyyy:d.getFullYear(),MM:d.getMonth()+1,dd:d.getDate(),HH:d.getHours(),mm:d.getMinutes(),ss:d.getSeconds(),sss:d.getMilliseconds()/1E3}:{yyyy:1970,MM:1,dd:1,HH:0,mm:0,ss:0,sss:0},r(e,function(b,c){c<a.length&&(f[a[c]]=+b)}),new Date(f.yyyy,f.MM-1,f.dd,f.HH,f.mm,f.ss||0,1E3*f.sss||0)}return NaN}}function kb(b,a,c,d){return function(e,f,g,h,l,k,n){function p(a){return a&&!(a.getTime&&a.getTime()!==a.getTime())}function q(a){return y(a)?ga(a)?a:c(a):t}td(e,f,g,h);
jb(e,f,g,h,l,k);var u=h&&h.$options&&h.$options.timezone,s;h.$$parserName=b;h.$parsers.push(function(b){return h.$isEmpty(b)?null:a.test(b)?(b=c(b,s),"UTC"===u&&b.setMinutes(b.getMinutes()-b.getTimezoneOffset()),b):t});h.$formatters.push(function(a){if(a&&!ga(a))throw Nb("datefmt",a);if(p(a)){if((s=a)&&"UTC"===u){var b=6E4*s.getTimezoneOffset();s=new Date(s.getTime()+b)}return n("date")(a,d,u)}s=null;return""});if(y(g.min)||g.ngMin){var r;h.$validators.min=function(a){return!p(a)||x(r)||c(a)>=r};
g.$observe("min",function(a){r=q(a);h.$validate()})}if(y(g.max)||g.ngMax){var v;h.$validators.max=function(a){return!p(a)||x(v)||c(a)<=v};g.$observe("max",function(a){v=q(a);h.$validate()})}}}function td(b,a,c,d){(d.$$hasNativeValidators=J(a[0].validity))&&d.$parsers.push(function(b){var c=a.prop("validity")||{};return c.badInput&&!c.typeMismatch?t:b})}function ud(b,a,c,d,e){if(y(d)){b=b(d);if(!b.constant)throw R("ngModel")("constexpr",c,d);return b(a)}return e}function kc(b,a){b="ngClass"+b;return["$animate",
function(c){function d(a,b){var c=[],d=0;a:for(;d<a.length;d++){for(var e=a[d],n=0;n<b.length;n++)if(e==b[n])continue a;c.push(e)}return c}function e(a){if(!H(a)){if(C(a))return a.split(" ");if(J(a)){var b=[];r(a,function(a,c){a&&(b=b.concat(c.split(" ")))});return b}}return a}return{restrict:"AC",link:function(f,g,h){function l(a,b){var c=g.data("$classCounts")||{},d=[];r(a,function(a){if(0<b||c[a])c[a]=(c[a]||0)+b,c[a]===+(0<b)&&d.push(a)});g.data("$classCounts",c);return d.join(" ")}function k(b){if(!0===
a||f.$index%2===a){var k=e(b||[]);if(!n){var u=l(k,1);h.$addClass(u)}else if(!ha(b,n)){var s=e(n),u=d(k,s),k=d(s,k),u=l(u,1),k=l(k,-1);u&&u.length&&c.addClass(g,u);k&&k.length&&c.removeClass(g,k)}}n=sa(b)}var n;f.$watch(h[b],k,!0);h.$observe("class",function(a){k(f.$eval(h[b]))});"ngClass"!==b&&f.$watch("$index",function(c,d){var g=c&1;if(g!==(d&1)){var k=e(f.$eval(h[b]));g===a?(g=l(k,1),h.$addClass(g)):(g=l(k,-1),h.$removeClass(g))}})}}}]}function sd(b){function a(a,b){b&&!f[a]?(k.addClass(e,a),
f[a]=!0):!b&&f[a]&&(k.removeClass(e,a),f[a]=!1)}function c(b,c){b=b?"-"+vc(b,"-"):"";a(lb+b,!0===c);a(vd+b,!1===c)}var d=b.ctrl,e=b.$element,f={},g=b.set,h=b.unset,l=b.parentForm,k=b.$animate;f[vd]=!(f[lb]=e.hasClass(lb));d.$setValidity=function(b,e,f){e===t?(d.$pending||(d.$pending={}),g(d.$pending,b,f)):(d.$pending&&h(d.$pending,b,f),wd(d.$pending)&&(d.$pending=t));Wa(e)?e?(h(d.$error,b,f),g(d.$$success,b,f)):(g(d.$error,b,f),h(d.$$success,b,f)):(h(d.$error,b,f),h(d.$$success,b,f));d.$pending?(a(xd,
!0),d.$valid=d.$invalid=t,c("",null)):(a(xd,!1),d.$valid=wd(d.$error),d.$invalid=!d.$valid,c("",d.$valid));e=d.$pending&&d.$pending[b]?t:d.$error[b]?!1:d.$$success[b]?!0:null;c(b,e);l.$setValidity(b,e,d)}}function wd(b){if(b)for(var a in b)return!1;return!0}var Of=/^\/(.+)\/([a-z]*)$/,z=function(b){return C(b)?b.toLowerCase():b},tc=Object.prototype.hasOwnProperty,ub=function(b){return C(b)?b.toUpperCase():b},Qa,A,ta,Za=[].slice,qf=[].splice,Pf=[].push,Ca=Object.prototype.toString,Ja=R("ng"),ca=Q.angular||
(Q.angular={}),cb,ob=0;Qa=W.documentMode;E.$inject=[];ra.$inject=[];var H=Array.isArray,N=function(b){return C(b)?b.trim():b},gd=function(b){return b.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08")},bb=function(){if(y(bb.isActive_))return bb.isActive_;var b=!(!W.querySelector("[ng-csp]")&&!W.querySelector("[data-ng-csp]"));if(!b)try{new Function("")}catch(a){b=!0}return bb.isActive_=b},rb=["ng-","data-ng-","ng:","x-ng-"],Md=/[A-Z]/g,wc=!1,Qb,qa=1,pb=3,Qd={full:"1.3.15",major:1,
minor:3,dot:15,codeName:"locality-filtration"};T.expando="ng339";var zb=T.cache={},hf=1;T._data=function(b){return this.cache[b[this.expando]]||{}};var cf=/([\:\-\_]+(.))/g,df=/^moz([A-Z])/,Qf={mouseleave:"mouseout",mouseenter:"mouseover"},Tb=R("jqLite"),gf=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,Sb=/<|&#?\w+;/,ef=/<([\w:]+)/,ff=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ja={option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>",
"</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ja.optgroup=ja.option;ja.tbody=ja.tfoot=ja.colgroup=ja.caption=ja.thead;ja.th=ja.td;var Ka=T.prototype={ready:function(b){function a(){c||(c=!0,b())}var c=!1;"complete"===W.readyState?setTimeout(a):(this.on("DOMContentLoaded",a),T(Q).on("load",a))},toString:function(){var b=[];r(this,function(a){b.push(""+a)});return"["+b.join(", ")+"]"},eq:function(b){return 0<=
b?A(this[b]):A(this[this.length+b])},length:0,push:Pf,sort:[].sort,splice:[].splice},Eb={};r("multiple selected checked disabled readOnly required open".split(" "),function(b){Eb[z(b)]=b});var Oc={};r("input select option textarea button form details".split(" "),function(b){Oc[b]=!0});var Pc={ngMinlength:"minlength",ngMaxlength:"maxlength",ngMin:"min",ngMax:"max",ngPattern:"pattern"};r({data:Vb,removeData:xb},function(b,a){T[a]=b});r({data:Vb,inheritedData:Db,scope:function(b){return A.data(b,"$scope")||
Db(b.parentNode||b,["$isolateScope","$scope"])},isolateScope:function(b){return A.data(b,"$isolateScope")||A.data(b,"$isolateScopeNoTemplate")},controller:Kc,injector:function(b){return Db(b,"$injector")},removeAttr:function(b,a){b.removeAttribute(a)},hasClass:Ab,css:function(b,a,c){a=db(a);if(y(c))b.style[a]=c;else return b.style[a]},attr:function(b,a,c){var d=z(a);if(Eb[d])if(y(c))c?(b[a]=!0,b.setAttribute(a,d)):(b[a]=!1,b.removeAttribute(d));else return b[a]||(b.attributes.getNamedItem(a)||E).specified?
d:t;else if(y(c))b.setAttribute(a,c);else if(b.getAttribute)return b=b.getAttribute(a,2),null===b?t:b},prop:function(b,a,c){if(y(c))b[a]=c;else return b[a]},text:function(){function b(a,b){if(x(b)){var d=a.nodeType;return d===qa||d===pb?a.textContent:""}a.textContent=b}b.$dv="";return b}(),val:function(b,a){if(x(a)){if(b.multiple&&"select"===va(b)){var c=[];r(b.options,function(a){a.selected&&c.push(a.value||a.text)});return 0===c.length?null:c}return b.value}b.value=a},html:function(b,a){if(x(a))return b.innerHTML;
wb(b,!0);b.innerHTML=a},empty:Lc},function(b,a){T.prototype[a]=function(a,d){var e,f,g=this.length;if(b!==Lc&&(2==b.length&&b!==Ab&&b!==Kc?a:d)===t){if(J(a)){for(e=0;e<g;e++)if(b===Vb)b(this[e],a);else for(f in a)b(this[e],f,a[f]);return this}e=b.$dv;g=e===t?Math.min(g,1):g;for(f=0;f<g;f++){var h=b(this[f],a,d);e=e?e+h:h}return e}for(e=0;e<g;e++)b(this[e],a,d);return this}});r({removeData:xb,on:function a(c,d,e,f){if(y(f))throw Tb("onargs");if(Gc(c)){var g=yb(c,!0);f=g.events;var h=g.handle;h||(h=
g.handle=lf(c,f));for(var g=0<=d.indexOf(" ")?d.split(" "):[d],l=g.length;l--;){d=g[l];var k=f[d];k||(f[d]=[],"mouseenter"===d||"mouseleave"===d?a(c,Qf[d],function(a){var c=a.relatedTarget;c&&(c===this||this.contains(c))||h(a,d)}):"$destroy"!==d&&c.addEventListener(d,h,!1),k=f[d]);k.push(e)}}},off:Jc,one:function(a,c,d){a=A(a);a.on(c,function f(){a.off(c,d);a.off(c,f)});a.on(c,d)},replaceWith:function(a,c){var d,e=a.parentNode;wb(a);r(new T(c),function(c){d?e.insertBefore(c,d.nextSibling):e.replaceChild(c,
a);d=c})},children:function(a){var c=[];r(a.childNodes,function(a){a.nodeType===qa&&c.push(a)});return c},contents:function(a){return a.contentDocument||a.childNodes||[]},append:function(a,c){var d=a.nodeType;if(d===qa||11===d){c=new T(c);for(var d=0,e=c.length;d<e;d++)a.appendChild(c[d])}},prepend:function(a,c){if(a.nodeType===qa){var d=a.firstChild;r(new T(c),function(c){a.insertBefore(c,d)})}},wrap:function(a,c){c=A(c).eq(0).clone()[0];var d=a.parentNode;d&&d.replaceChild(c,a);c.appendChild(a)},
remove:Mc,detach:function(a){Mc(a,!0)},after:function(a,c){var d=a,e=a.parentNode;c=new T(c);for(var f=0,g=c.length;f<g;f++){var h=c[f];e.insertBefore(h,d.nextSibling);d=h}},addClass:Cb,removeClass:Bb,toggleClass:function(a,c,d){c&&r(c.split(" "),function(c){var f=d;x(f)&&(f=!Ab(a,c));(f?Cb:Bb)(a,c)})},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){return a.nextElementSibling},find:function(a,c){return a.getElementsByTagName?a.getElementsByTagName(c):[]},clone:Ub,
triggerHandler:function(a,c,d){var e,f,g=c.type||c,h=yb(a);if(h=(h=h&&h.events)&&h[g])e={preventDefault:function(){this.defaultPrevented=!0},isDefaultPrevented:function(){return!0===this.defaultPrevented},stopImmediatePropagation:function(){this.immediatePropagationStopped=!0},isImmediatePropagationStopped:function(){return!0===this.immediatePropagationStopped},stopPropagation:E,type:g,target:a},c.type&&(e=w(e,c)),c=sa(h),f=d?[e].concat(d):[e],r(c,function(c){e.isImmediatePropagationStopped()||c.apply(a,
f)})}},function(a,c){T.prototype[c]=function(c,e,f){for(var g,h=0,l=this.length;h<l;h++)x(g)?(g=a(this[h],c,e,f),y(g)&&(g=A(g))):Ic(g,a(this[h],c,e,f));return y(g)?g:this};T.prototype.bind=T.prototype.on;T.prototype.unbind=T.prototype.off});eb.prototype={put:function(a,c){this[Ma(a,this.nextUid)]=c},get:function(a){return this[Ma(a,this.nextUid)]},remove:function(a){var c=this[a=Ma(a,this.nextUid)];delete this[a];return c}};var Rc=/^function\s*[^\(]*\(\s*([^\)]*)\)/m,Rf=/,/,Sf=/^\s*(_?)(\S+?)\1\s*$/,
Qc=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,Fa=R("$injector");ab.$$annotate=function(a,c,d){var e;if("function"===typeof a){if(!(e=a.$inject)){e=[];if(a.length){if(c)throw C(d)&&d||(d=a.name||mf(a)),Fa("strictdi",d);c=a.toString().replace(Qc,"");c=c.match(Rc);r(c[1].split(Rf),function(a){a.replace(Sf,function(a,c,d){e.push(d)})})}a.$inject=e}}else H(a)?(c=a.length-1,sb(a[c],"fn"),e=a.slice(0,c)):sb(a,"fn",!0);return e};var Tf=R("$animate"),Ce=["$provide",function(a){this.$$selectors={};this.register=function(c,
d){var e=c+"-animation";if(c&&"."!=c.charAt(0))throw Tf("notcsel",c);this.$$selectors[c.substr(1)]=e;a.factory(e,d)};this.classNameFilter=function(a){1===arguments.length&&(this.$$classNameFilter=a instanceof RegExp?a:null);return this.$$classNameFilter};this.$get=["$$q","$$asyncCallback","$rootScope",function(a,d,e){function f(d){var f,g=a.defer();g.promise.$$cancelFn=function(){f&&f()};e.$$postDigest(function(){f=d(function(){g.resolve()})});return g.promise}function g(a,c){var d=[],e=[],f=ia();
r((a.attr("class")||"").split(/\s+/),function(a){f[a]=!0});r(c,function(a,c){var g=f[c];!1===a&&g?e.push(c):!0!==a||g||d.push(c)});return 0<d.length+e.length&&[d.length?d:null,e.length?e:null]}function h(a,c,d){for(var e=0,f=c.length;e<f;++e)a[c[e]]=d}function l(){n||(n=a.defer(),d(function(){n.resolve();n=null}));return n.promise}function k(a,c){if(ca.isObject(c)){var d=w(c.from||{},c.to||{});a.css(d)}}var n;return{animate:function(a,c,d){k(a,{from:c,to:d});return l()},enter:function(a,c,d,e){k(a,
e);d?d.after(a):c.prepend(a);return l()},leave:function(a,c){k(a,c);a.remove();return l()},move:function(a,c,d,e){return this.enter(a,c,d,e)},addClass:function(a,c,d){return this.setClass(a,c,[],d)},$$addClassImmediately:function(a,c,d){a=A(a);c=C(c)?c:H(c)?c.join(" "):"";r(a,function(a){Cb(a,c)});k(a,d);return l()},removeClass:function(a,c,d){return this.setClass(a,[],c,d)},$$removeClassImmediately:function(a,c,d){a=A(a);c=C(c)?c:H(c)?c.join(" "):"";r(a,function(a){Bb(a,c)});k(a,d);return l()},setClass:function(a,
c,d,e){var k=this,l=!1;a=A(a);var m=a.data("$$animateClasses");m?e&&m.options&&(m.options=ca.extend(m.options||{},e)):(m={classes:{},options:e},l=!0);e=m.classes;c=H(c)?c:c.split(" ");d=H(d)?d:d.split(" ");h(e,c,!0);h(e,d,!1);l&&(m.promise=f(function(c){var d=a.data("$$animateClasses");a.removeData("$$animateClasses");if(d){var e=g(a,d.classes);e&&k.$$setClassImmediately(a,e[0],e[1],d.options)}c()}),a.data("$$animateClasses",m));return m.promise},$$setClassImmediately:function(a,c,d,e){c&&this.$$addClassImmediately(a,
c);d&&this.$$removeClassImmediately(a,d);k(a,e);return l()},enabled:E,cancel:E}}]}],la=R("$compile");yc.$inject=["$provide","$$sanitizeUriProvider"];var Sc=/^((?:x|data)[\:\-_])/i,rf=R("$controller"),Wc="application/json",$b={"Content-Type":Wc+";charset=utf-8"},tf=/^\[|^\{(?!\{)/,uf={"[":/]$/,"{":/}$/},sf=/^\)\]\}',?\n/,ac=R("$interpolate"),Uf=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,xf={http:80,https:443,ftp:21},Gb=R("$location"),Vf={$$html5:!1,$$replace:!1,absUrl:Hb("$$absUrl"),url:function(a){if(x(a))return this.$$url;
var c=Uf.exec(a);(c[1]||""===a)&&this.path(decodeURIComponent(c[1]));(c[2]||c[1]||""===a)&&this.search(c[3]||"");this.hash(c[5]||"");return this},protocol:Hb("$$protocol"),host:Hb("$$host"),port:Hb("$$port"),path:dd("$$path",function(a){a=null!==a?a.toString():"";return"/"==a.charAt(0)?a:"/"+a}),search:function(a,c){switch(arguments.length){case 0:return this.$$search;case 1:if(C(a)||Y(a))a=a.toString(),this.$$search=sc(a);else if(J(a))a=Da(a,{}),r(a,function(c,e){null==c&&delete a[e]}),this.$$search=
a;else throw Gb("isrcharg");break;default:x(c)||null===c?delete this.$$search[a]:this.$$search[a]=c}this.$$compose();return this},hash:dd("$$hash",function(a){return null!==a?a.toString():""}),replace:function(){this.$$replace=!0;return this}};r([cd,ec,dc],function(a){a.prototype=Object.create(Vf);a.prototype.state=function(c){if(!arguments.length)return this.$$state;if(a!==dc||!this.$$html5)throw Gb("nostate");this.$$state=x(c)?null:c;return this}});var na=R("$parse"),Wf=Function.prototype.call,
Xf=Function.prototype.apply,Yf=Function.prototype.bind,mb=ia();r({"null":function(){return null},"true":function(){return!0},"false":function(){return!1},undefined:function(){}},function(a,c){a.constant=a.literal=a.sharedGetter=!0;mb[c]=a});mb["this"]=function(a){return a};mb["this"].sharedGetter=!0;var nb=w(ia(),{"+":function(a,c,d,e){d=d(a,c);e=e(a,c);return y(d)?y(e)?d+e:d:y(e)?e:t},"-":function(a,c,d,e){d=d(a,c);e=e(a,c);return(y(d)?d:0)-(y(e)?e:0)},"*":function(a,c,d,e){return d(a,c)*e(a,c)},
"/":function(a,c,d,e){return d(a,c)/e(a,c)},"%":function(a,c,d,e){return d(a,c)%e(a,c)},"===":function(a,c,d,e){return d(a,c)===e(a,c)},"!==":function(a,c,d,e){return d(a,c)!==e(a,c)},"==":function(a,c,d,e){return d(a,c)==e(a,c)},"!=":function(a,c,d,e){return d(a,c)!=e(a,c)},"<":function(a,c,d,e){return d(a,c)<e(a,c)},">":function(a,c,d,e){return d(a,c)>e(a,c)},"<=":function(a,c,d,e){return d(a,c)<=e(a,c)},">=":function(a,c,d,e){return d(a,c)>=e(a,c)},"&&":function(a,c,d,e){return d(a,c)&&e(a,c)},
"||":function(a,c,d,e){return d(a,c)||e(a,c)},"!":function(a,c,d){return!d(a,c)},"=":!0,"|":!0}),Zf={n:"\n",f:"\f",r:"\r",t:"\t",v:"\v","'":"'",'"':'"'},hc=function(a){this.options=a};hc.prototype={constructor:hc,lex:function(a){this.text=a;this.index=0;for(this.tokens=[];this.index<this.text.length;)if(a=this.text.charAt(this.index),'"'===a||"'"===a)this.readString(a);else if(this.isNumber(a)||"."===a&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdent(a))this.readIdent();else if(this.is(a,
"(){}[].,;:?"))this.tokens.push({index:this.index,text:a}),this.index++;else if(this.isWhitespace(a))this.index++;else{var c=a+this.peek(),d=c+this.peek(2),e=nb[c],f=nb[d];nb[a]||e||f?(a=f?d:e?c:a,this.tokens.push({index:this.index,text:a,operator:!0}),this.index+=a.length):this.throwError("Unexpected next character ",this.index,this.index+1)}return this.tokens},is:function(a,c){return-1!==c.indexOf(a)},peek:function(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},
isNumber:function(a){return"0"<=a&&"9">=a&&"string"===typeof a},isWhitespace:function(a){return" "===a||"\r"===a||"\t"===a||"\n"===a||"\v"===a||"\u00a0"===a},isIdent:function(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isExpOperator:function(a){return"-"===a||"+"===a||this.isNumber(a)},throwError:function(a,c,d){d=d||this.index;c=y(c)?"s "+c+"-"+this.index+" ["+this.text.substring(c,d)+"]":" "+d;throw na("lexerr",a,c,this.text);},readNumber:function(){for(var a="",c=this.index;this.index<
this.text.length;){var d=z(this.text.charAt(this.index));if("."==d||this.isNumber(d))a+=d;else{var e=this.peek();if("e"==d&&this.isExpOperator(e))a+=d;else if(this.isExpOperator(d)&&e&&this.isNumber(e)&&"e"==a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||e&&this.isNumber(e)||"e"!=a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}this.tokens.push({index:c,text:a,constant:!0,value:Number(a)})},readIdent:function(){for(var a=this.index;this.index<this.text.length;){var c=
this.text.charAt(this.index);if(!this.isIdent(c)&&!this.isNumber(c))break;this.index++}this.tokens.push({index:a,text:this.text.slice(a,this.index),identifier:!0})},readString:function(a){var c=this.index;this.index++;for(var d="",e=a,f=!1;this.index<this.text.length;){var g=this.text.charAt(this.index),e=e+g;if(f)"u"===g?(f=this.text.substring(this.index+1,this.index+5),f.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+f+"]"),this.index+=4,d+=String.fromCharCode(parseInt(f,16))):
d+=Zf[g]||g,f=!1;else if("\\"===g)f=!0;else{if(g===a){this.index++;this.tokens.push({index:c,text:e,constant:!0,value:d});return}d+=g}this.index++}this.throwError("Unterminated quote",c)}};var ib=function(a,c,d){this.lexer=a;this.$filter=c;this.options=d};ib.ZERO=w(function(){return 0},{sharedGetter:!0,constant:!0});ib.prototype={constructor:ib,parse:function(a){this.text=a;this.tokens=this.lexer.lex(a);a=this.statements();0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]);
a.literal=!!a.literal;a.constant=!!a.constant;return a},primary:function(){var a;this.expect("(")?(a=this.filterChain(),this.consume(")")):this.expect("[")?a=this.arrayDeclaration():this.expect("{")?a=this.object():this.peek().identifier&&this.peek().text in mb?a=mb[this.consume().text]:this.peek().identifier?a=this.identifier():this.peek().constant?a=this.constant():this.throwError("not a primary expression",this.peek());for(var c,d;c=this.expect("(","[",".");)"("===c.text?(a=this.functionCall(a,
d),d=null):"["===c.text?(d=a,a=this.objectIndex(a)):"."===c.text?(d=a,a=this.fieldAccess(a)):this.throwError("IMPOSSIBLE");return a},throwError:function(a,c){throw na("syntax",c.text,a,c.index+1,this.text,this.text.substring(c.index));},peekToken:function(){if(0===this.tokens.length)throw na("ueoe",this.text);return this.tokens[0]},peek:function(a,c,d,e){return this.peekAhead(0,a,c,d,e)},peekAhead:function(a,c,d,e,f){if(this.tokens.length>a){a=this.tokens[a];var g=a.text;if(g===c||g===d||g===e||g===
f||!(c||d||e||f))return a}return!1},expect:function(a,c,d,e){return(a=this.peek(a,c,d,e))?(this.tokens.shift(),a):!1},consume:function(a){if(0===this.tokens.length)throw na("ueoe",this.text);var c=this.expect(a);c||this.throwError("is unexpected, expecting ["+a+"]",this.peek());return c},unaryFn:function(a,c){var d=nb[a];return w(function(a,f){return d(a,f,c)},{constant:c.constant,inputs:[c]})},binaryFn:function(a,c,d,e){var f=nb[c];return w(function(c,e){return f(c,e,a,d)},{constant:a.constant&&
d.constant,inputs:!e&&[a,d]})},identifier:function(){for(var a=this.consume().text;this.peek(".")&&this.peekAhead(1).identifier&&!this.peekAhead(2,"(");)a+=this.consume().text+this.consume().text;return zf(a,this.options,this.text)},constant:function(){var a=this.consume().value;return w(function(){return a},{constant:!0,literal:!0})},statements:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.filterChain()),!this.expect(";"))return 1===a.length?a[0]:function(c,
d){for(var e,f=0,g=a.length;f<g;f++)e=a[f](c,d);return e}},filterChain:function(){for(var a=this.expression();this.expect("|");)a=this.filter(a);return a},filter:function(a){var c=this.$filter(this.consume().text),d,e;if(this.peek(":"))for(d=[],e=[];this.expect(":");)d.push(this.expression());var f=[a].concat(d||[]);return w(function(f,h){var l=a(f,h);if(e){e[0]=l;for(l=d.length;l--;)e[l+1]=d[l](f,h);return c.apply(t,e)}return c(l)},{constant:!c.$stateful&&f.every(fc),inputs:!c.$stateful&&f})},expression:function(){return this.assignment()},
assignment:function(){var a=this.ternary(),c,d;return(d=this.expect("="))?(a.assign||this.throwError("implies assignment but ["+this.text.substring(0,d.index)+"] can not be assigned to",d),c=this.ternary(),w(function(d,f){return a.assign(d,c(d,f),f)},{inputs:[a,c]})):a},ternary:function(){var a=this.logicalOR(),c;if(this.expect("?")&&(c=this.assignment(),this.consume(":"))){var d=this.assignment();return w(function(e,f){return a(e,f)?c(e,f):d(e,f)},{constant:a.constant&&c.constant&&d.constant})}return a},
logicalOR:function(){for(var a=this.logicalAND(),c;c=this.expect("||");)a=this.binaryFn(a,c.text,this.logicalAND(),!0);return a},logicalAND:function(){for(var a=this.equality(),c;c=this.expect("&&");)a=this.binaryFn(a,c.text,this.equality(),!0);return a},equality:function(){for(var a=this.relational(),c;c=this.expect("==","!=","===","!==");)a=this.binaryFn(a,c.text,this.relational());return a},relational:function(){for(var a=this.additive(),c;c=this.expect("<",">","<=",">=");)a=this.binaryFn(a,c.text,
this.additive());return a},additive:function(){for(var a=this.multiplicative(),c;c=this.expect("+","-");)a=this.binaryFn(a,c.text,this.multiplicative());return a},multiplicative:function(){for(var a=this.unary(),c;c=this.expect("*","/","%");)a=this.binaryFn(a,c.text,this.unary());return a},unary:function(){var a;return this.expect("+")?this.primary():(a=this.expect("-"))?this.binaryFn(ib.ZERO,a.text,this.unary()):(a=this.expect("!"))?this.unaryFn(a.text,this.unary()):this.primary()},fieldAccess:function(a){var c=
this.identifier();return w(function(d,e,f){d=f||a(d,e);return null==d?t:c(d)},{assign:function(d,e,f){var g=a(d,f);g||a.assign(d,g={},f);return c.assign(g,e)}})},objectIndex:function(a){var c=this.text,d=this.expression();this.consume("]");return w(function(e,f){var g=a(e,f),h=d(e,f);ua(h,c);return g?oa(g[h],c):t},{assign:function(e,f,g){var h=ua(d(e,g),c),l=oa(a(e,g),c);l||a.assign(e,l={},g);return l[h]=f}})},functionCall:function(a,c){var d=[];if(")"!==this.peekToken().text){do d.push(this.expression());
while(this.expect(","))}this.consume(")");var e=this.text,f=d.length?[]:null;return function(g,h){var l=c?c(g,h):y(c)?t:g,k=a(g,h,l)||E;if(f)for(var n=d.length;n--;)f[n]=oa(d[n](g,h),e);oa(l,e);if(k){if(k.constructor===k)throw na("isecfn",e);if(k===Wf||k===Xf||k===Yf)throw na("isecff",e);}l=k.apply?k.apply(l,f):k(f[0],f[1],f[2],f[3],f[4]);f&&(f.length=0);return oa(l,e)}},arrayDeclaration:function(){var a=[];if("]"!==this.peekToken().text){do{if(this.peek("]"))break;a.push(this.expression())}while(this.expect(","))
}this.consume("]");return w(function(c,d){for(var e=[],f=0,g=a.length;f<g;f++)e.push(a[f](c,d));return e},{literal:!0,constant:a.every(fc),inputs:a})},object:function(){var a=[],c=[];if("}"!==this.peekToken().text){do{if(this.peek("}"))break;var d=this.consume();d.constant?a.push(d.value):d.identifier?a.push(d.text):this.throwError("invalid key",d);this.consume(":");c.push(this.expression())}while(this.expect(","))}this.consume("}");return w(function(d,f){for(var g={},h=0,l=c.length;h<l;h++)g[a[h]]=
c[h](d,f);return g},{literal:!0,constant:c.every(fc),inputs:c})}};var Bf=ia(),Af=ia(),Cf=Object.prototype.valueOf,Ba=R("$sce"),pa={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},la=R("$compile"),$=W.createElement("a"),id=Aa(Q.location.href);Fc.$inject=["$provide"];jd.$inject=["$locale"];ld.$inject=["$locale"];var od=".",Mf={yyyy:U("FullYear",4),yy:U("FullYear",2,0,!0),y:U("FullYear",1),MMMM:Jb("Month"),MMM:Jb("Month",!0),MM:U("Month",2,1),M:U("Month",1,1),dd:U("Date",2),d:U("Date",
1),HH:U("Hours",2),H:U("Hours",1),hh:U("Hours",2,-12),h:U("Hours",1,-12),mm:U("Minutes",2),m:U("Minutes",1),ss:U("Seconds",2),s:U("Seconds",1),sss:U("Milliseconds",3),EEEE:Jb("Day"),EEE:Jb("Day",!0),a:function(a,c){return 12>a.getHours()?c.AMPMS[0]:c.AMPMS[1]},Z:function(a){a=-1*a.getTimezoneOffset();return a=(0<=a?"+":"")+(Ib(Math[0<a?"floor":"ceil"](a/60),2)+Ib(Math.abs(a%60),2))},ww:qd(2),w:qd(1),G:ic,GG:ic,GGG:ic,GGGG:function(a,c){return 0>=a.getFullYear()?c.ERANAMES[0]:c.ERANAMES[1]}},Lf=/((?:[^yMdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/,
Kf=/^\-?\d+$/;kd.$inject=["$locale"];var Hf=ea(z),If=ea(ub);md.$inject=["$parse"];var Td=ea({restrict:"E",compile:function(a,c){if(!c.href&&!c.xlinkHref&&!c.name)return function(a,c){if("a"===c[0].nodeName.toLowerCase()){var f="[object SVGAnimatedString]"===Ca.call(c.prop("href"))?"xlink:href":"href";c.on("click",function(a){c.attr(f)||a.preventDefault()})}}}}),vb={};r(Eb,function(a,c){if("multiple"!=a){var d=xa("ng-"+c);vb[d]=function(){return{restrict:"A",priority:100,link:function(a,f,g){a.$watch(g[d],
function(a){g.$set(c,!!a)})}}}}});r(Pc,function(a,c){vb[c]=function(){return{priority:100,link:function(a,e,f){if("ngPattern"===c&&"/"==f.ngPattern.charAt(0)&&(e=f.ngPattern.match(Of))){f.$set("ngPattern",new RegExp(e[1],e[2]));return}a.$watch(f[c],function(a){f.$set(c,a)})}}}});r(["src","srcset","href"],function(a){var c=xa("ng-"+a);vb[c]=function(){return{priority:99,link:function(d,e,f){var g=a,h=a;"href"===a&&"[object SVGAnimatedString]"===Ca.call(e.prop("href"))&&(h="xlinkHref",f.$attr[h]="xlink:href",
g=null);f.$observe(c,function(c){c?(f.$set(h,c),Qa&&g&&e.prop(g,f[h])):"href"===a&&f.$set(h,null)})}}}});var Kb={$addControl:E,$$renameControl:function(a,c){a.$name=c},$removeControl:E,$setValidity:E,$setDirty:E,$setPristine:E,$setSubmitted:E};rd.$inject=["$element","$attrs","$scope","$animate","$interpolate"];var yd=function(a){return["$timeout",function(c){return{name:"form",restrict:a?"EAC":"E",controller:rd,compile:function(d,e){d.addClass(Ra).addClass(lb);var f=e.name?"name":a&&e.ngForm?"ngForm":
!1;return{pre:function(a,d,e,k){if(!("action"in e)){var n=function(c){a.$apply(function(){k.$commitViewValue();k.$setSubmitted()});c.preventDefault()};d[0].addEventListener("submit",n,!1);d.on("$destroy",function(){c(function(){d[0].removeEventListener("submit",n,!1)},0,!1)})}var p=k.$$parentForm;f&&(hb(a,null,k.$name,k,k.$name),e.$observe(f,function(c){k.$name!==c&&(hb(a,null,k.$name,t,k.$name),p.$$renameControl(k,c),hb(a,null,k.$name,k,k.$name))}));d.on("$destroy",function(){p.$removeControl(k);
f&&hb(a,null,e[f],t,k.$name);w(k,Kb)})}}}}}]},Ud=yd(),ge=yd(!0),Nf=/\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/,$f=/^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,ag=/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,bg=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,zd=/^(\d{4})-(\d{2})-(\d{2})$/,Ad=/^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,lc=/^(\d{4})-W(\d\d)$/,Bd=/^(\d{4})-(\d\d)$/,
Cd=/^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,Dd={text:function(a,c,d,e,f,g){jb(a,c,d,e,f,g);jc(e)},date:kb("date",zd,Mb(zd,["yyyy","MM","dd"]),"yyyy-MM-dd"),"datetime-local":kb("datetimelocal",Ad,Mb(Ad,"yyyy MM dd HH mm ss sss".split(" ")),"yyyy-MM-ddTHH:mm:ss.sss"),time:kb("time",Cd,Mb(Cd,["HH","mm","ss","sss"]),"HH:mm:ss.sss"),week:kb("week",lc,function(a,c){if(ga(a))return a;if(C(a)){lc.lastIndex=0;var d=lc.exec(a);if(d){var e=+d[1],f=+d[2],g=d=0,h=0,l=0,k=pd(e),f=7*(f-1);c&&(d=c.getHours(),g=
c.getMinutes(),h=c.getSeconds(),l=c.getMilliseconds());return new Date(e,0,k.getDate()+f,d,g,h,l)}}return NaN},"yyyy-Www"),month:kb("month",Bd,Mb(Bd,["yyyy","MM"]),"yyyy-MM"),number:function(a,c,d,e,f,g){td(a,c,d,e);jb(a,c,d,e,f,g);e.$$parserName="number";e.$parsers.push(function(a){return e.$isEmpty(a)?null:bg.test(a)?parseFloat(a):t});e.$formatters.push(function(a){if(!e.$isEmpty(a)){if(!Y(a))throw Nb("numfmt",a);a=a.toString()}return a});if(y(d.min)||d.ngMin){var h;e.$validators.min=function(a){return e.$isEmpty(a)||
x(h)||a>=h};d.$observe("min",function(a){y(a)&&!Y(a)&&(a=parseFloat(a,10));h=Y(a)&&!isNaN(a)?a:t;e.$validate()})}if(y(d.max)||d.ngMax){var l;e.$validators.max=function(a){return e.$isEmpty(a)||x(l)||a<=l};d.$observe("max",function(a){y(a)&&!Y(a)&&(a=parseFloat(a,10));l=Y(a)&&!isNaN(a)?a:t;e.$validate()})}},url:function(a,c,d,e,f,g){jb(a,c,d,e,f,g);jc(e);e.$$parserName="url";e.$validators.url=function(a,c){var d=a||c;return e.$isEmpty(d)||$f.test(d)}},email:function(a,c,d,e,f,g){jb(a,c,d,e,f,g);jc(e);
e.$$parserName="email";e.$validators.email=function(a,c){var d=a||c;return e.$isEmpty(d)||ag.test(d)}},radio:function(a,c,d,e){x(d.name)&&c.attr("name",++ob);c.on("click",function(a){c[0].checked&&e.$setViewValue(d.value,a&&a.type)});e.$render=function(){c[0].checked=d.value==e.$viewValue};d.$observe("value",e.$render)},checkbox:function(a,c,d,e,f,g,h,l){var k=ud(l,a,"ngTrueValue",d.ngTrueValue,!0),n=ud(l,a,"ngFalseValue",d.ngFalseValue,!1);c.on("click",function(a){e.$setViewValue(c[0].checked,a&&
a.type)});e.$render=function(){c[0].checked=e.$viewValue};e.$isEmpty=function(a){return!1===a};e.$formatters.push(function(a){return ha(a,k)});e.$parsers.push(function(a){return a?k:n})},hidden:E,button:E,submit:E,reset:E,file:E},zc=["$browser","$sniffer","$filter","$parse",function(a,c,d,e){return{restrict:"E",require:["?ngModel"],link:{pre:function(f,g,h,l){l[0]&&(Dd[z(h.type)]||Dd.text)(f,g,h,l[0],c,a,d,e)}}}}],cg=/^(true|false|\d+)$/,ye=function(){return{restrict:"A",priority:100,compile:function(a,
c){return cg.test(c.ngValue)?function(a,c,f){f.$set("value",a.$eval(f.ngValue))}:function(a,c,f){a.$watch(f.ngValue,function(a){f.$set("value",a)})}}}},Zd=["$compile",function(a){return{restrict:"AC",compile:function(c){a.$$addBindingClass(c);return function(c,e,f){a.$$addBindingInfo(e,f.ngBind);e=e[0];c.$watch(f.ngBind,function(a){e.textContent=a===t?"":a})}}}}],ae=["$interpolate","$compile",function(a,c){return{compile:function(d){c.$$addBindingClass(d);return function(d,f,g){d=a(f.attr(g.$attr.ngBindTemplate));
c.$$addBindingInfo(f,d.expressions);f=f[0];g.$observe("ngBindTemplate",function(a){f.textContent=a===t?"":a})}}}}],$d=["$sce","$parse","$compile",function(a,c,d){return{restrict:"A",compile:function(e,f){var g=c(f.ngBindHtml),h=c(f.ngBindHtml,function(a){return(a||"").toString()});d.$$addBindingClass(e);return function(c,e,f){d.$$addBindingInfo(e,f.ngBindHtml);c.$watch(h,function(){e.html(a.getTrustedHtml(g(c))||"")})}}}}],xe=ea({restrict:"A",require:"ngModel",link:function(a,c,d,e){e.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),
be=kc("",!0),de=kc("Odd",0),ce=kc("Even",1),ee=Ia({compile:function(a,c){c.$set("ngCloak",t);a.removeClass("ng-cloak")}}),fe=[function(){return{restrict:"A",scope:!0,controller:"@",priority:500}}],Ec={},dg={blur:!0,focus:!0};r("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),function(a){var c=xa("ng-"+a);Ec[c]=["$parse","$rootScope",function(d,e){return{restrict:"A",compile:function(f,g){var h=
d(g[c],null,!0);return function(c,d){d.on(a,function(d){var f=function(){h(c,{$event:d})};dg[a]&&e.$$phase?c.$evalAsync(f):c.$apply(f)})}}}}]});var ie=["$animate",function(a){return{multiElement:!0,transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(c,d,e,f,g){var h,l,k;c.$watch(e.ngIf,function(c){c?l||g(function(c,f){l=f;c[c.length++]=W.createComment(" end ngIf: "+e.ngIf+" ");h={clone:c};a.enter(c,d.parent(),d)}):(k&&(k.remove(),k=null),l&&(l.$destroy(),l=null),h&&(k=
tb(h.clone),a.leave(k).then(function(){k=null}),h=null))})}}}],je=["$templateRequest","$anchorScroll","$animate","$sce",function(a,c,d,e){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:ca.noop,compile:function(f,g){var h=g.ngInclude||g.src,l=g.onload||"",k=g.autoscroll;return function(f,g,q,r,s){var t=0,v,m,F,w=function(){m&&(m.remove(),m=null);v&&(v.$destroy(),v=null);F&&(d.leave(F).then(function(){m=null}),m=F,F=null)};f.$watch(e.parseAsResourceUrl(h),function(e){var h=
function(){!y(k)||k&&!f.$eval(k)||c()},m=++t;e?(a(e,!0).then(function(a){if(m===t){var c=f.$new();r.template=a;a=s(c,function(a){w();d.enter(a,null,g).then(h)});v=c;F=a;v.$emit("$includeContentLoaded",e);f.$eval(l)}},function(){m===t&&(w(),f.$emit("$includeContentError",e))}),f.$emit("$includeContentRequested",e)):(w(),r.template=null)})}}}}],Ae=["$compile",function(a){return{restrict:"ECA",priority:-400,require:"ngInclude",link:function(c,d,e,f){/SVG/.test(d[0].toString())?(d.empty(),a(Hc(f.template,
W).childNodes)(c,function(a){d.append(a)},{futureParentElement:d})):(d.html(f.template),a(d.contents())(c))}}}],ke=Ia({priority:450,compile:function(){return{pre:function(a,c,d){a.$eval(d.ngInit)}}}}),we=function(){return{restrict:"A",priority:100,require:"ngModel",link:function(a,c,d,e){var f=c.attr(d.$attr.ngList)||", ",g="false"!==d.ngTrim,h=g?N(f):f;e.$parsers.push(function(a){if(!x(a)){var c=[];a&&r(a.split(h),function(a){a&&c.push(g?N(a):a)});return c}});e.$formatters.push(function(a){return H(a)?
a.join(f):t});e.$isEmpty=function(a){return!a||!a.length}}}},lb="ng-valid",vd="ng-invalid",Ra="ng-pristine",Lb="ng-dirty",xd="ng-pending",Nb=new R("ngModel"),eg=["$scope","$exceptionHandler","$attrs","$element","$parse","$animate","$timeout","$rootScope","$q","$interpolate",function(a,c,d,e,f,g,h,l,k,n){this.$modelValue=this.$viewValue=Number.NaN;this.$$rawModelValue=t;this.$validators={};this.$asyncValidators={};this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$untouched=!0;
this.$touched=!1;this.$pristine=!0;this.$dirty=!1;this.$valid=!0;this.$invalid=!1;this.$error={};this.$$success={};this.$pending=t;this.$name=n(d.name||"",!1)(a);var p=f(d.ngModel),q=p.assign,u=p,s=q,M=null,v,m=this;this.$$setOptions=function(a){if((m.$options=a)&&a.getterSetter){var c=f(d.ngModel+"()"),g=f(d.ngModel+"($$$p)");u=function(a){var d=p(a);G(d)&&(d=c(a));return d};s=function(a,c){G(p(a))?g(a,{$$$p:m.$modelValue}):q(a,m.$modelValue)}}else if(!p.assign)throw Nb("nonassign",d.ngModel,wa(e));
};this.$render=E;this.$isEmpty=function(a){return x(a)||""===a||null===a||a!==a};var F=e.inheritedData("$formController")||Kb,w=0;sd({ctrl:this,$element:e,set:function(a,c){a[c]=!0},unset:function(a,c){delete a[c]},parentForm:F,$animate:g});this.$setPristine=function(){m.$dirty=!1;m.$pristine=!0;g.removeClass(e,Lb);g.addClass(e,Ra)};this.$setDirty=function(){m.$dirty=!0;m.$pristine=!1;g.removeClass(e,Ra);g.addClass(e,Lb);F.$setDirty()};this.$setUntouched=function(){m.$touched=!1;m.$untouched=!0;g.setClass(e,
"ng-untouched","ng-touched")};this.$setTouched=function(){m.$touched=!0;m.$untouched=!1;g.setClass(e,"ng-touched","ng-untouched")};this.$rollbackViewValue=function(){h.cancel(M);m.$viewValue=m.$$lastCommittedViewValue;m.$render()};this.$validate=function(){if(!Y(m.$modelValue)||!isNaN(m.$modelValue)){var a=m.$$rawModelValue,c=m.$valid,d=m.$modelValue,e=m.$options&&m.$options.allowInvalid;m.$$runValidators(a,m.$$lastCommittedViewValue,function(f){e||c===f||(m.$modelValue=f?a:t,m.$modelValue!==d&&m.$$writeModelToScope())})}};
this.$$runValidators=function(a,c,d){function e(){var d=!0;r(m.$validators,function(e,f){var h=e(a,c);d=d&&h;g(f,h)});return d?!0:(r(m.$asyncValidators,function(a,c){g(c,null)}),!1)}function f(){var d=[],e=!0;r(m.$asyncValidators,function(f,h){var k=f(a,c);if(!k||!G(k.then))throw Nb("$asyncValidators",k);g(h,t);d.push(k.then(function(){g(h,!0)},function(a){e=!1;g(h,!1)}))});d.length?k.all(d).then(function(){h(e)},E):h(!0)}function g(a,c){l===w&&m.$setValidity(a,c)}function h(a){l===w&&d(a)}w++;var l=
w;(function(){var a=m.$$parserName||"parse";if(v===t)g(a,null);else return v||(r(m.$validators,function(a,c){g(c,null)}),r(m.$asyncValidators,function(a,c){g(c,null)})),g(a,v),v;return!0})()?e()?f():h(!1):h(!1)};this.$commitViewValue=function(){var a=m.$viewValue;h.cancel(M);if(m.$$lastCommittedViewValue!==a||""===a&&m.$$hasNativeValidators)m.$$lastCommittedViewValue=a,m.$pristine&&this.$setDirty(),this.$$parseAndValidate()};this.$$parseAndValidate=function(){var c=m.$$lastCommittedViewValue;if(v=
x(c)?t:!0)for(var d=0;d<m.$parsers.length;d++)if(c=m.$parsers[d](c),x(c)){v=!1;break}Y(m.$modelValue)&&isNaN(m.$modelValue)&&(m.$modelValue=u(a));var e=m.$modelValue,f=m.$options&&m.$options.allowInvalid;m.$$rawModelValue=c;f&&(m.$modelValue=c,m.$modelValue!==e&&m.$$writeModelToScope());m.$$runValidators(c,m.$$lastCommittedViewValue,function(a){f||(m.$modelValue=a?c:t,m.$modelValue!==e&&m.$$writeModelToScope())})};this.$$writeModelToScope=function(){s(a,m.$modelValue);r(m.$viewChangeListeners,function(a){try{a()}catch(d){c(d)}})};
this.$setViewValue=function(a,c){m.$viewValue=a;m.$options&&!m.$options.updateOnDefault||m.$$debounceViewValueCommit(c)};this.$$debounceViewValueCommit=function(c){var d=0,e=m.$options;e&&y(e.debounce)&&(e=e.debounce,Y(e)?d=e:Y(e[c])?d=e[c]:Y(e["default"])&&(d=e["default"]));h.cancel(M);d?M=h(function(){m.$commitViewValue()},d):l.$$phase?m.$commitViewValue():a.$apply(function(){m.$commitViewValue()})};a.$watch(function(){var c=u(a);if(c!==m.$modelValue){m.$modelValue=m.$$rawModelValue=c;v=t;for(var d=
m.$formatters,e=d.length,f=c;e--;)f=d[e](f);m.$viewValue!==f&&(m.$viewValue=m.$$lastCommittedViewValue=f,m.$render(),m.$$runValidators(c,f,E))}return c})}],ve=["$rootScope",function(a){return{restrict:"A",require:["ngModel","^?form","^?ngModelOptions"],controller:eg,priority:1,compile:function(c){c.addClass(Ra).addClass("ng-untouched").addClass(lb);return{pre:function(a,c,f,g){var h=g[0],l=g[1]||Kb;h.$$setOptions(g[2]&&g[2].$options);l.$addControl(h);f.$observe("name",function(a){h.$name!==a&&l.$$renameControl(h,
a)});a.$on("$destroy",function(){l.$removeControl(h)})},post:function(c,e,f,g){var h=g[0];if(h.$options&&h.$options.updateOn)e.on(h.$options.updateOn,function(a){h.$$debounceViewValueCommit(a&&a.type)});e.on("blur",function(e){h.$touched||(a.$$phase?c.$evalAsync(h.$setTouched):c.$apply(h.$setTouched))})}}}}}],fg=/(\s+|^)default(\s+|$)/,ze=function(){return{restrict:"A",controller:["$scope","$attrs",function(a,c){var d=this;this.$options=a.$eval(c.ngModelOptions);this.$options.updateOn!==t?(this.$options.updateOnDefault=
!1,this.$options.updateOn=N(this.$options.updateOn.replace(fg,function(){d.$options.updateOnDefault=!0;return" "}))):this.$options.updateOnDefault=!0}]}},le=Ia({terminal:!0,priority:1E3}),me=["$locale","$interpolate",function(a,c){var d=/{}/g,e=/^when(Minus)?(.+)$/;return{restrict:"EA",link:function(f,g,h){function l(a){g.text(a||"")}var k=h.count,n=h.$attr.when&&g.attr(h.$attr.when),p=h.offset||0,q=f.$eval(n)||{},u={},n=c.startSymbol(),s=c.endSymbol(),t=n+k+"-"+p+s,v=ca.noop,m;r(h,function(a,c){var d=
e.exec(c);d&&(d=(d[1]?"-":"")+z(d[2]),q[d]=g.attr(h.$attr[c]))});r(q,function(a,e){u[e]=c(a.replace(d,t))});f.$watch(k,function(c){c=parseFloat(c);var d=isNaN(c);d||c in q||(c=a.pluralCat(c-p));c===m||d&&isNaN(m)||(v(),v=f.$watch(u[c],l),m=c)})}}}],ne=["$parse","$animate",function(a,c){var d=R("ngRepeat"),e=function(a,c,d,e,k,n,p){a[d]=e;k&&(a[k]=n);a.$index=c;a.$first=0===c;a.$last=c===p-1;a.$middle=!(a.$first||a.$last);a.$odd=!(a.$even=0===(c&1))};return{restrict:"A",multiElement:!0,transclude:"element",
priority:1E3,terminal:!0,$$tlb:!0,compile:function(f,g){var h=g.ngRepeat,l=W.createComment(" end ngRepeat: "+h+" "),k=h.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);if(!k)throw d("iexp",h);var n=k[1],p=k[2],q=k[3],u=k[4],k=n.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/);if(!k)throw d("iidexp",n);var s=k[3]||k[1],y=k[2];if(q&&(!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(q)||/^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(q)))throw d("badident",
q);var v,m,w,x,E={$id:Ma};u?v=a(u):(w=function(a,c){return Ma(c)},x=function(a){return a});return function(a,f,g,k,n){v&&(m=function(c,d,e){y&&(E[y]=c);E[s]=d;E.$index=e;return v(a,E)});var u=ia();a.$watchCollection(p,function(g){var k,p,v=f[0],D,E=ia(),G,H,L,S,J,C,z;q&&(a[q]=g);if(Sa(g))J=g,p=m||w;else{p=m||x;J=[];for(z in g)g.hasOwnProperty(z)&&"$"!=z.charAt(0)&&J.push(z);J.sort()}G=J.length;z=Array(G);for(k=0;k<G;k++)if(H=g===J?k:J[k],L=g[H],S=p(H,L,k),u[S])C=u[S],delete u[S],E[S]=C,z[k]=C;else{if(E[S])throw r(z,
function(a){a&&a.scope&&(u[a.id]=a)}),d("dupes",h,S,L);z[k]={id:S,scope:t,clone:t};E[S]=!0}for(D in u){C=u[D];S=tb(C.clone);c.leave(S);if(S[0].parentNode)for(k=0,p=S.length;k<p;k++)S[k].$$NG_REMOVED=!0;C.scope.$destroy()}for(k=0;k<G;k++)if(H=g===J?k:J[k],L=g[H],C=z[k],C.scope){D=v;do D=D.nextSibling;while(D&&D.$$NG_REMOVED);C.clone[0]!=D&&c.move(tb(C.clone),null,A(v));v=C.clone[C.clone.length-1];e(C.scope,k,s,L,y,H,G)}else n(function(a,d){C.scope=d;var f=l.cloneNode(!1);a[a.length++]=f;c.enter(a,
null,A(v));v=f;C.clone=a;E[C.id]=C;e(C.scope,k,s,L,y,H,G)});u=E})}}}}],oe=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(c,d,e){c.$watch(e.ngShow,function(c){a[c?"removeClass":"addClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],he=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(c,d,e){c.$watch(e.ngHide,function(c){a[c?"addClass":"removeClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],pe=Ia(function(a,c,d){a.$watchCollection(d.ngStyle,
function(a,d){d&&a!==d&&r(d,function(a,d){c.css(d,"")});a&&c.css(a)})}),qe=["$animate",function(a){return{restrict:"EA",require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(c,d,e,f){var g=[],h=[],l=[],k=[],n=function(a,c){return function(){a.splice(c,1)}};c.$watch(e.ngSwitch||e.on,function(c){var d,e;d=0;for(e=l.length;d<e;++d)a.cancel(l[d]);d=l.length=0;for(e=k.length;d<e;++d){var s=tb(h[d].clone);k[d].$destroy();(l[d]=a.leave(s)).then(n(l,d))}h.length=0;k.length=0;(g=
f.cases["!"+c]||f.cases["?"])&&r(g,function(c){c.transclude(function(d,e){k.push(e);var f=c.element;d[d.length++]=W.createComment(" end ngSwitchWhen: ");h.push({clone:d});a.enter(d,f.parent(),f)})})})}}}],re=Ia({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,c,d,e,f){e.cases["!"+d.ngSwitchWhen]=e.cases["!"+d.ngSwitchWhen]||[];e.cases["!"+d.ngSwitchWhen].push({transclude:f,element:c})}}),se=Ia({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,
link:function(a,c,d,e,f){e.cases["?"]=e.cases["?"]||[];e.cases["?"].push({transclude:f,element:c})}}),ue=Ia({restrict:"EAC",link:function(a,c,d,e,f){if(!f)throw R("ngTransclude")("orphan",wa(c));f(function(a){c.empty();c.append(a)})}}),Vd=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(c,d){"text/ng-template"==d.type&&a.put(d.id,c[0].text)}}}],gg=R("ngOptions"),te=ea({restrict:"A",terminal:!0}),Wd=["$compile","$parse",function(a,c){var d=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
e={$setViewValue:E};return{restrict:"E",require:["select","?ngModel"],controller:["$element","$scope","$attrs",function(a,c,d){var l=this,k={},n=e,p;l.databound=d.ngModel;l.init=function(a,c,d){n=a;p=d};l.addOption=function(c,d){La(c,'"option value"');k[c]=!0;n.$viewValue==c&&(a.val(c),p.parent()&&p.remove());d&&d[0].hasAttribute("selected")&&(d[0].selected=!0)};l.removeOption=function(a){this.hasOption(a)&&(delete k[a],n.$viewValue===a&&this.renderUnknownOption(a))};l.renderUnknownOption=function(c){c=
"? "+Ma(c)+" ?";p.val(c);a.prepend(p);a.val(c);p.prop("selected",!0)};l.hasOption=function(a){return k.hasOwnProperty(a)};c.$on("$destroy",function(){l.renderUnknownOption=E})}],link:function(e,g,h,l){function k(a,c,d,e){d.$render=function(){var a=d.$viewValue;e.hasOption(a)?(C.parent()&&C.remove(),c.val(a),""===a&&v.prop("selected",!0)):x(a)&&v?c.val(""):e.renderUnknownOption(a)};c.on("change",function(){a.$apply(function(){C.parent()&&C.remove();d.$setViewValue(c.val())})})}function n(a,c,d){var e;
d.$render=function(){var a=new eb(d.$viewValue);r(c.find("option"),function(c){c.selected=y(a.get(c.value))})};a.$watch(function(){ha(e,d.$viewValue)||(e=sa(d.$viewValue),d.$render())});c.on("change",function(){a.$apply(function(){var a=[];r(c.find("option"),function(c){c.selected&&a.push(c.value)});d.$setViewValue(a)})})}function p(e,f,g){function h(a,c,d){T[x]=d;G&&(T[G]=c);return a(e,T)}function k(a){var c;if(u)if(I&&H(a)){c=new eb([]);for(var d=0;d<a.length;d++)c.put(h(I,null,a[d]),!0)}else c=
new eb(a);else I&&(a=h(I,null,a));return function(d,e){var f;f=I?I:B?B:z;return u?y(c.remove(h(f,d,e))):a===h(f,d,e)}}function l(){m||(e.$$postDigest(p),m=!0)}function n(a,c,d){a[c]=a[c]||0;a[c]+=d?1:-1}function p(){m=!1;var a={"":[]},c=[""],d,l,s,t,v;s=g.$viewValue;t=L(e)||[];var B=G?Object.keys(t).sort():t,x,A,H,z,O={};v=k(s);var N=!1,U,W;Q={};for(z=0;H=B.length,z<H;z++){x=z;if(G&&(x=B[z],"$"===x.charAt(0)))continue;A=t[x];d=h(J,x,A)||"";(l=a[d])||(l=a[d]=[],c.push(d));d=v(x,A);N=N||d;A=h(C,x,A);
A=y(A)?A:"";W=I?I(e,T):G?B[z]:z;I&&(Q[W]=x);l.push({id:W,label:A,selected:d})}u||(w||null===s?a[""].unshift({id:"",label:"",selected:!N}):N||a[""].unshift({id:"?",label:"",selected:!0}));x=0;for(B=c.length;x<B;x++){d=c[x];l=a[d];R.length<=x?(s={element:E.clone().attr("label",d),label:l.label},t=[s],R.push(t),f.append(s.element)):(t=R[x],s=t[0],s.label!=d&&s.element.attr("label",s.label=d));N=null;z=0;for(H=l.length;z<H;z++)d=l[z],(v=t[z+1])?(N=v.element,v.label!==d.label&&(n(O,v.label,!1),n(O,d.label,
!0),N.text(v.label=d.label),N.prop("label",v.label)),v.id!==d.id&&N.val(v.id=d.id),N[0].selected!==d.selected&&(N.prop("selected",v.selected=d.selected),Qa&&N.prop("selected",v.selected))):(""===d.id&&w?U=w:(U=F.clone()).val(d.id).prop("selected",d.selected).attr("selected",d.selected).prop("label",d.label).text(d.label),t.push(v={element:U,label:d.label,id:d.id,selected:d.selected}),n(O,d.label,!0),N?N.after(U):s.element.append(U),N=U);for(z++;t.length>z;)d=t.pop(),n(O,d.label,!1),d.element.remove()}for(;R.length>
x;){l=R.pop();for(z=1;z<l.length;++z)n(O,l[z].label,!1);l[0].element.remove()}r(O,function(a,c){0<a?q.addOption(c):0>a&&q.removeOption(c)})}var v;if(!(v=s.match(d)))throw gg("iexp",s,wa(f));var C=c(v[2]||v[1]),x=v[4]||v[6],A=/ as /.test(v[0])&&v[1],B=A?c(A):null,G=v[5],J=c(v[3]||""),z=c(v[2]?v[1]:x),L=c(v[7]),I=v[8]?c(v[8]):null,Q={},R=[[{element:f,label:""}]],T={};w&&(a(w)(e),w.removeClass("ng-scope"),w.remove());f.empty();f.on("change",function(){e.$apply(function(){var a=L(e)||[],c;if(u)c=[],r(f.val(),
function(d){d=I?Q[d]:d;c.push("?"===d?t:""===d?null:h(B?B:z,d,a[d]))});else{var d=I?Q[f.val()]:f.val();c="?"===d?t:""===d?null:h(B?B:z,d,a[d])}g.$setViewValue(c);p()})});g.$render=p;e.$watchCollection(L,l);e.$watchCollection(function(){var a=L(e),c;if(a&&H(a)){c=Array(a.length);for(var d=0,f=a.length;d<f;d++)c[d]=h(C,d,a[d])}else if(a)for(d in c={},a)a.hasOwnProperty(d)&&(c[d]=h(C,d,a[d]));return c},l);u&&e.$watchCollection(function(){return g.$modelValue},l)}if(l[1]){var q=l[0];l=l[1];var u=h.multiple,
s=h.ngOptions,w=!1,v,m=!1,F=A(W.createElement("option")),E=A(W.createElement("optgroup")),C=F.clone();h=0;for(var B=g.children(),G=B.length;h<G;h++)if(""===B[h].value){v=w=B.eq(h);break}q.init(l,w,C);u&&(l.$isEmpty=function(a){return!a||0===a.length});s?p(e,g,l):u?n(e,g,l):k(e,g,l,q)}}}}],Yd=["$interpolate",function(a){var c={addOption:E,removeOption:E};return{restrict:"E",priority:100,compile:function(d,e){if(x(e.value)){var f=a(d.text(),!0);f||e.$set("value",d.text())}return function(a,d,e){var k=
d.parent(),n=k.data("$selectController")||k.parent().data("$selectController");n&&n.databound||(n=c);f?a.$watch(f,function(a,c){e.$set("value",a);c!==a&&n.removeOption(c);n.addOption(a,d)}):n.addOption(e.value,d);d.on("$destroy",function(){n.removeOption(e.value)})}}}}],Xd=ea({restrict:"E",terminal:!1}),Bc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){e&&(d.required=!0,e.$validators.required=function(a,c){return!d.required||!e.$isEmpty(c)},d.$observe("required",function(){e.$validate()}))}}},
Ac=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f,g=d.ngPattern||d.pattern;d.$observe("pattern",function(a){C(a)&&0<a.length&&(a=new RegExp("^"+a+"$"));if(a&&!a.test)throw R("ngPattern")("noregexp",g,a,wa(c));f=a||t;e.$validate()});e.$validators.pattern=function(a){return e.$isEmpty(a)||x(f)||f.test(a)}}}}},Dc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f=-1;d.$observe("maxlength",function(a){a=aa(a);f=isNaN(a)?-1:a;e.$validate()});
e.$validators.maxlength=function(a,c){return 0>f||e.$isEmpty(c)||c.length<=f}}}}},Cc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f=0;d.$observe("minlength",function(a){f=aa(a)||0;e.$validate()});e.$validators.minlength=function(a,c){return e.$isEmpty(c)||c.length>=f}}}}};Q.angular.bootstrap?console.log("WARNING: Tried to load angular more than once."):(Nd(),Pd(ca),A(W).ready(function(){Jd(W,uc)}))})(window,document);!window.angular.$$csp()&&window.angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}</style>');
//# sourceMappingURL=angular.min.js.map

},{}],9:[function(require,module,exports){
/**
 * angular-strap
 * @version v2.2.1 - 2015-03-10
 * @link http://mgcrea.github.io/angular-strap
 * @author Olivier Louvignes (olivier@mg-crea.com)
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
!function(e,t,n){"use strict";angular.module("mgcrea.ngStrap",["mgcrea.ngStrap.modal","mgcrea.ngStrap.aside","mgcrea.ngStrap.alert","mgcrea.ngStrap.button","mgcrea.ngStrap.select","mgcrea.ngStrap.datepicker","mgcrea.ngStrap.timepicker","mgcrea.ngStrap.navbar","mgcrea.ngStrap.tooltip","mgcrea.ngStrap.popover","mgcrea.ngStrap.dropdown","mgcrea.ngStrap.typeahead","mgcrea.ngStrap.scrollspy","mgcrea.ngStrap.affix","mgcrea.ngStrap.tab","mgcrea.ngStrap.collapse"]),angular.module("mgcrea.ngStrap.affix",["mgcrea.ngStrap.helpers.dimensions","mgcrea.ngStrap.helpers.debounce"]).provider("$affix",function(){var e=this.defaults={offsetTop:"auto",inlineStyles:!0};this.$get=["$window","debounce","dimensions",function(t,n,a){function o(o,s){function l(e,t,n){var a=u(),o=c();return v>=a?"top":null!==e&&a+e<=t.top?"middle":null!==y&&t.top+n+$>=o-y?"bottom":"middle"}function u(){return p[0]===t?t.pageYOffset:p[0].scrollTop}function c(){return p[0]===t?t.document.body.scrollHeight:p[0].scrollHeight}var d={},f=angular.extend({},e,s),p=f.target,g="affix affix-top affix-bottom",m=!1,$=0,h=0,v=0,y=0,w=null,b=null,D=o.parent();if(f.offsetParent)if(f.offsetParent.match(/^\d+$/))for(var k=0;k<1*f.offsetParent-1;k++)D=D.parent();else D=angular.element(f.offsetParent);return d.init=function(){this.$parseOffsets(),h=a.offset(o[0]).top+$,m=!o[0].style.width,p.on("scroll",this.checkPosition),p.on("click",this.checkPositionWithEventLoop),r.on("resize",this.$debouncedOnResize),this.checkPosition(),this.checkPositionWithEventLoop()},d.destroy=function(){p.off("scroll",this.checkPosition),p.off("click",this.checkPositionWithEventLoop),r.off("resize",this.$debouncedOnResize)},d.checkPositionWithEventLoop=function(){setTimeout(d.checkPosition,1)},d.checkPosition=function(){var e=u(),t=a.offset(o[0]),n=a.height(o[0]),r=l(b,t,n);w!==r&&(w=r,o.removeClass(g).addClass("affix"+("middle"!==r?"-"+r:"")),"top"===r?(b=null,m&&o.css("width",""),f.inlineStyles&&(o.css("position",f.offsetParent?"":"relative"),o.css("top",""))):"bottom"===r?(b=f.offsetUnpin?-(1*f.offsetUnpin):t.top-e,m&&o.css("width",""),f.inlineStyles&&(o.css("position",f.offsetParent?"":"relative"),o.css("top",f.offsetParent?"":i[0].offsetHeight-y-n-h+"px"))):(b=null,m&&o.css("width",o[0].offsetWidth+"px"),f.inlineStyles&&(o.css("position","fixed"),o.css("top",$+"px"))))},d.$onResize=function(){d.$parseOffsets(),d.checkPosition()},d.$debouncedOnResize=n(d.$onResize,50),d.$parseOffsets=function(){var e=o.css("position");f.inlineStyles&&o.css("position",f.offsetParent?"":"relative"),f.offsetTop&&("auto"===f.offsetTop&&(f.offsetTop="+0"),f.offsetTop.match(/^[-+]\d+$/)?($=1*-f.offsetTop,v=f.offsetParent?a.offset(D[0]).top+1*f.offsetTop:a.offset(o[0]).top-a.css(o[0],"marginTop",!0)+1*f.offsetTop):v=1*f.offsetTop),f.offsetBottom&&(y=f.offsetParent&&f.offsetBottom.match(/^[-+]\d+$/)?c()-(a.offset(D[0]).top+a.height(D[0]))+1*f.offsetBottom+1:1*f.offsetBottom),f.inlineStyles&&o.css("position",e)},d.init(),d}var i=angular.element(t.document.body),r=angular.element(t);return o}]}).directive("bsAffix",["$affix","$window",function(e,t){return{restrict:"EAC",require:"^?bsAffixTarget",link:function(n,a,o,i){var r={scope:n,target:i?i.$element:angular.element(t)};angular.forEach(["offsetTop","offsetBottom","offsetParent","offsetUnpin","inlineStyles"],function(e){if(angular.isDefined(o[e])){var t=o[e];/true/i.test(t)&&(t=!0),/false/i.test(t)&&(t=!1),r[e]=t}});var s=e(a,r);n.$on("$destroy",function(){s&&s.destroy(),r=null,s=null})}}}]).directive("bsAffixTarget",function(){return{controller:["$element",function(e){this.$element=e}]}}),angular.module("mgcrea.ngStrap.aside",["mgcrea.ngStrap.modal"]).provider("$aside",function(){var e=this.defaults={animation:"am-fade-and-slide-right",prefixClass:"aside",prefixEvent:"aside",placement:"right",template:"aside/aside.tpl.html",contentTemplate:!1,container:!1,element:null,backdrop:!0,keyboard:!0,html:!1,show:!0};this.$get=["$modal",function(t){function n(n){var a={},o=angular.extend({},e,n);return a=t(o)}return n}]}).directive("bsAside",["$window","$sce","$aside",function(e,t,n){e.requestAnimationFrame||e.setTimeout;return{restrict:"EAC",scope:!0,link:function(e,a,o){var i={scope:e,element:a,show:!1};angular.forEach(["template","contentTemplate","placement","backdrop","keyboard","html","container","animation"],function(e){angular.isDefined(o[e])&&(i[e]=o[e])}),angular.forEach(["title","content"],function(n){o[n]&&o.$observe(n,function(a){e[n]=t.trustAsHtml(a)})}),o.bsAside&&e.$watch(o.bsAside,function(t){angular.isObject(t)?angular.extend(e,t):e.content=t},!0);var r=n(i);a.on(o.trigger||"click",r.toggle),e.$on("$destroy",function(){r&&r.destroy(),i=null,r=null})}}}]),angular.module("mgcrea.ngStrap.alert",["mgcrea.ngStrap.modal"]).provider("$alert",function(){var e=this.defaults={animation:"am-fade",prefixClass:"alert",prefixEvent:"alert",placement:null,template:"alert/alert.tpl.html",container:!1,element:null,backdrop:!1,keyboard:!0,show:!0,duration:!1,type:!1,dismissable:!0};this.$get=["$modal","$timeout",function(t,n){function a(a){var o={},i=angular.extend({},e,a);o=t(i),o.$scope.dismissable=!!i.dismissable,i.type&&(o.$scope.type=i.type);var r=o.show;return i.duration&&(o.show=function(){r(),n(function(){o.hide()},1e3*i.duration)}),o}return a}]}).directive("bsAlert",["$window","$sce","$alert",function(e,t,n){e.requestAnimationFrame||e.setTimeout;return{restrict:"EAC",scope:!0,link:function(e,a,o){var i={scope:e,element:a,show:!1};angular.forEach(["template","placement","keyboard","html","container","animation","duration","dismissable"],function(e){angular.isDefined(o[e])&&(i[e]=o[e])}),e.hasOwnProperty("title")||(e.title=""),angular.forEach(["title","content","type"],function(n){o[n]&&o.$observe(n,function(a){e[n]=t.trustAsHtml(a)})}),o.bsAlert&&e.$watch(o.bsAlert,function(t){angular.isObject(t)?angular.extend(e,t):e.content=t},!0);var r=n(i);a.on(o.trigger||"click",r.toggle),e.$on("$destroy",function(){r&&r.destroy(),i=null,r=null})}}}]),angular.module("mgcrea.ngStrap.button",[]).provider("$button",function(){var e=this.defaults={activeClass:"active",toggleEvent:"click"};this.$get=function(){return{defaults:e}}}).directive("bsCheckboxGroup",function(){return{restrict:"A",require:"ngModel",compile:function(e,t){e.attr("data-toggle","buttons"),e.removeAttr("ng-model");var n=e[0].querySelectorAll('input[type="checkbox"]');angular.forEach(n,function(e){var n=angular.element(e);n.attr("bs-checkbox",""),n.attr("ng-model",t.ngModel+"."+n.attr("value"))})}}}).directive("bsCheckbox",["$button","$$rAF",function(e,t){var n=e.defaults,a=/^(true|false|\d+)$/;return{restrict:"A",require:"ngModel",link:function(e,o,i,r){var s=n,l="INPUT"===o[0].nodeName,u=l?o.parent():o,c=angular.isDefined(i.trueValue)?i.trueValue:!0;a.test(i.trueValue)&&(c=e.$eval(i.trueValue));var d=angular.isDefined(i.falseValue)?i.falseValue:!1;a.test(i.falseValue)&&(d=e.$eval(i.falseValue));var f="boolean"!=typeof c||"boolean"!=typeof d;f&&(r.$parsers.push(function(e){return e?c:d}),r.$formatters.push(function(e){return angular.equals(e,c)}),e.$watch(i.ngModel,function(){r.$render()})),r.$render=function(){var e=angular.equals(r.$modelValue,c);t(function(){l&&(o[0].checked=e),u.toggleClass(s.activeClass,e)})},o.bind(s.toggleEvent,function(){e.$apply(function(){l||r.$setViewValue(!u.hasClass("active")),f||r.$render()})})}}}]).directive("bsRadioGroup",function(){return{restrict:"A",require:"ngModel",compile:function(e,t){e.attr("data-toggle","buttons"),e.removeAttr("ng-model");var n=e[0].querySelectorAll('input[type="radio"]');angular.forEach(n,function(e){angular.element(e).attr("bs-radio",""),angular.element(e).attr("ng-model",t.ngModel)})}}}).directive("bsRadio",["$button","$$rAF",function(e,t){var n=e.defaults,a=/^(true|false|\d+)$/;return{restrict:"A",require:"ngModel",link:function(e,o,i,r){var s,l=n,u="INPUT"===o[0].nodeName,c=u?o.parent():o;i.$observe("value",function(t){s=a.test(t)?e.$eval(t):t,r.$render()}),r.$render=function(){var e=angular.equals(r.$modelValue,s);t(function(){u&&(o[0].checked=e),c.toggleClass(l.activeClass,e)})},o.bind(l.toggleEvent,function(){e.$apply(function(){r.$setViewValue(s),r.$render()})})}}}]),angular.module("mgcrea.ngStrap.collapse",[]).provider("$collapse",function(){var e=this.defaults={animation:"am-collapse",disallowToggle:!1,activeClass:"in",startCollapsed:!1,allowMultiple:!1},t=this.controller=function(t,n,a){function o(e){for(var t=l.$targets.$active,n=0;n<t.length;n++)e<t[n]&&(t[n]=t[n]-1),t[n]===l.$targets.length&&(t[n]=l.$targets.length-1)}function i(e){var t=l.$targets.$active;return-1===t.indexOf(e)?!1:!0}function r(e){var t=l.$targets.$active.indexOf(e);-1!==t&&l.$targets.$active.splice(t,1)}function s(e){l.$options.allowMultiple||l.$targets.$active.splice(0,1),-1===l.$targets.$active.indexOf(e)&&l.$targets.$active.push(e)}var l=this;l.$options=angular.copy(e),angular.forEach(["animation","disallowToggle","activeClass","startCollapsed","allowMultiple"],function(e){angular.isDefined(a[e])&&(l.$options[e]=a[e])}),l.$toggles=[],l.$targets=[],l.$viewChangeListeners=[],l.$registerToggle=function(e){l.$toggles.push(e)},l.$registerTarget=function(e){l.$targets.push(e)},l.$unregisterToggle=function(e){var t=l.$toggles.indexOf(e);l.$toggles.splice(t,1)},l.$unregisterTarget=function(e){var t=l.$targets.indexOf(e);l.$targets.splice(t,1),l.$options.allowMultiple&&r(e),o(t),l.$viewChangeListeners.forEach(function(e){e()})},l.$targets.$active=l.$options.startCollapsed?[]:[0],l.$setActive=t.$setActive=function(e){angular.isArray(e)?l.$targets.$active=angular.copy(e):l.$options.disallowToggle?s(e):i(e)?r(e):s(e),l.$viewChangeListeners.forEach(function(e){e()})},l.$activeIndexes=function(){return l.$options.allowMultiple?l.$targets.$active:1===l.$targets.$active.length?l.$targets.$active[0]:-1}};this.$get=function(){var n={};return n.defaults=e,n.controller=t,n}}).directive("bsCollapse",["$window","$animate","$collapse",function(e,t,n){n.defaults;return{require:["?ngModel","bsCollapse"],controller:["$scope","$element","$attrs",n.controller],link:function(e,t,n,a){var o=a[0],i=a[1];o&&(i.$viewChangeListeners.push(function(){o.$setViewValue(i.$activeIndexes())}),o.$formatters.push(function(e){if(angular.isArray(e))i.$setActive(e);else{var t=i.$activeIndexes();angular.isArray(t)?-1===t.indexOf(1*e)&&i.$setActive(1*e):t!==1*e&&i.$setActive(1*e)}return e}))}}}]).directive("bsCollapseToggle",function(){return{require:["^?ngModel","^bsCollapse"],link:function(e,t,n,a){var o=(a[0],a[1]);t.attr("data-toggle","collapse"),o.$registerToggle(t),e.$on("$destroy",function(){o.$unregisterToggle(t)}),t.on("click",function(){var a=n.bsCollapseToggle||o.$toggles.indexOf(t);o.$setActive(1*a),e.$apply()})}}}).directive("bsCollapseTarget",["$animate",function(e){return{require:["^?ngModel","^bsCollapse"],link:function(t,n,a,o){function i(){var t=r.$targets.indexOf(n),a=r.$activeIndexes(),o="removeClass";angular.isArray(a)?-1!==a.indexOf(t)&&(o="addClass"):t===a&&(o="addClass"),e[o](n,r.$options.activeClass)}var r=(o[0],o[1]);n.addClass("collapse"),r.$options.animation&&n.addClass(r.$options.animation),r.$registerTarget(n),t.$on("$destroy",function(){r.$unregisterTarget(n)}),r.$viewChangeListeners.push(function(){i()}),i()}}}]),angular.module("mgcrea.ngStrap.datepicker",["mgcrea.ngStrap.helpers.dateParser","mgcrea.ngStrap.helpers.dateFormatter","mgcrea.ngStrap.tooltip"]).provider("$datepicker",function(){var e=this.defaults={animation:"am-fade",prefixClass:"datepicker",placement:"bottom-left",template:"datepicker/datepicker.tpl.html",trigger:"focus",container:!1,keyboard:!0,html:!1,delay:0,useNative:!1,dateType:"date",dateFormat:"shortDate",timezone:null,modelDateFormat:null,dayFormat:"dd",monthFormat:"MMM",yearFormat:"yyyy",monthTitleFormat:"MMMM yyyy",yearTitleFormat:"yyyy",strictFormat:!1,autoclose:!1,minDate:-1/0,maxDate:+1/0,startView:0,minView:0,startWeek:0,daysOfWeekDisabled:"",iconLeft:"glyphicon glyphicon-chevron-left",iconRight:"glyphicon glyphicon-chevron-right"};this.$get=["$window","$document","$rootScope","$sce","$dateFormatter","datepickerViews","$tooltip","$timeout",function(t,n,a,o,i,r,s,l){function u(t,n,a){function o(e){e.selected=u.$isSelected(e.date)}function i(){t[0].focus()}var u=s(t,angular.extend({},e,a)),f=a.scope,p=u.$options,g=u.$scope;p.startView&&(p.startView-=p.minView);var m=r(u);u.$views=m.views;var $=m.viewDate;g.$mode=p.startView,g.$iconLeft=p.iconLeft,g.$iconRight=p.iconRight;var h=u.$views[g.$mode];g.$select=function(e){u.select(e)},g.$selectPane=function(e){u.$selectPane(e)},g.$toggleMode=function(){u.setMode((g.$mode+1)%u.$views.length)},u.update=function(e){angular.isDate(e)&&!isNaN(e.getTime())&&(u.$date=e,h.update.call(h,e)),u.$build(!0)},u.updateDisabledDates=function(e){p.disabledDateRanges=e;for(var t=0,n=g.rows.length;n>t;t++)angular.forEach(g.rows[t],u.$setDisabledEl)},u.select=function(e,t){angular.isDate(n.$dateValue)||(n.$dateValue=new Date(e)),!g.$mode||t?(n.$setViewValue(angular.copy(e)),n.$render(),p.autoclose&&!t&&l(function(){u.hide(!0)})):(angular.extend($,{year:e.getFullYear(),month:e.getMonth(),date:e.getDate()}),u.setMode(g.$mode-1),u.$build())},u.setMode=function(e){g.$mode=e,h=u.$views[g.$mode],u.$build()},u.$build=function(e){e===!0&&h.built||(e!==!1||h.built)&&h.build.call(h)},u.$updateSelected=function(){for(var e=0,t=g.rows.length;t>e;e++)angular.forEach(g.rows[e],o)},u.$isSelected=function(e){return h.isSelected(e)},u.$setDisabledEl=function(e){e.disabled=h.isDisabled(e.date)},u.$selectPane=function(e){var t=h.steps,n=new Date(Date.UTC($.year+(t.year||0)*e,$.month+(t.month||0)*e,1));angular.extend($,{year:n.getUTCFullYear(),month:n.getUTCMonth(),date:n.getUTCDate()}),u.$build()},u.$onMouseDown=function(e){if(e.preventDefault(),e.stopPropagation(),d){var t=angular.element(e.target);"button"!==t[0].nodeName.toLowerCase()&&(t=t.parent()),t.triggerHandler("click")}},u.$onKeyDown=function(e){if(/(38|37|39|40|13)/.test(e.keyCode)&&!e.shiftKey&&!e.altKey){if(e.preventDefault(),e.stopPropagation(),13===e.keyCode)return g.$mode?g.$apply(function(){u.setMode(g.$mode-1)}):u.hide(!0);h.onKeyDown(e),f.$digest()}};var v=u.init;u.init=function(){return c&&p.useNative?(t.prop("type","date"),void t.css("-webkit-appearance","textfield")):(d&&(t.prop("type","text"),t.attr("readonly","true"),t.on("click",i)),void v())};var y=u.destroy;u.destroy=function(){c&&p.useNative&&t.off("click",i),y()};var w=u.show;u.show=function(){w(),l(function(){u.$isShown&&(u.$element.on(d?"touchstart":"mousedown",u.$onMouseDown),p.keyboard&&t.on("keydown",u.$onKeyDown))},0,!1)};var b=u.hide;return u.hide=function(e){u.$isShown&&(u.$element.off(d?"touchstart":"mousedown",u.$onMouseDown),p.keyboard&&t.off("keydown",u.$onKeyDown),b(e))},u}var c=(angular.element(t.document.body),/(ip(a|o)d|iphone|android)/gi.test(t.navigator.userAgent)),d="createTouch"in t.document&&c;return e.lang||(e.lang=i.getDefaultLocale()),u.defaults=e,u}]}).directive("bsDatepicker",["$window","$parse","$q","$dateFormatter","$dateParser","$datepicker",function(e,t,n,a,o,i){var r=(i.defaults,/(ip(a|o)d|iphone|android)/gi.test(e.navigator.userAgent));return{restrict:"EAC",require:"ngModel",link:function(e,t,n,s){function l(e){return e&&e.length?e:null}function u(e){if(angular.isDate(e)){var t=isNaN(f.$options.minDate)||e.getTime()>=f.$options.minDate,n=isNaN(f.$options.maxDate)||e.getTime()<=f.$options.maxDate,a=t&&n;s.$setValidity("date",a),s.$setValidity("min",t),s.$setValidity("max",n),a&&(s.$dateValue=e)}}function c(){return!s.$dateValue||isNaN(s.$dateValue.getTime())?"":g(s.$dateValue,d.dateFormat)}var d={scope:e,controller:s};angular.forEach(["placement","container","delay","trigger","keyboard","html","animation","template","autoclose","dateType","dateFormat","timezone","modelDateFormat","dayFormat","strictFormat","startWeek","startDate","useNative","lang","startView","minView","iconLeft","iconRight","daysOfWeekDisabled","id"],function(e){angular.isDefined(n[e])&&(d[e]=n[e])}),n.bsShow&&e.$watch(n.bsShow,function(e){f&&angular.isDefined(e)&&(angular.isString(e)&&(e=!!e.match(/true|,?(datepicker),?/i)),e===!0?f.show():f.hide())});var f=i(t,s,d);d=f.$options,r&&d.useNative&&(d.dateFormat="yyyy-MM-dd");var p=d.lang,g=function(e,t){return a.formatDate(e,t,p)},m=o({format:d.dateFormat,lang:p,strict:d.strictFormat});angular.forEach(["minDate","maxDate"],function(e){angular.isDefined(n[e])&&n.$observe(e,function(t){f.$options[e]=m.getDateForAttribute(e,t),!isNaN(f.$options[e])&&f.$build(!1),u(s.$dateValue)})}),e.$watch(n.ngModel,function(){f.update(s.$dateValue)},!0),angular.isDefined(n.disabledDates)&&e.$watch(n.disabledDates,function(e,t){e=l(e),t=l(t),e&&f.updateDisabledDates(e)}),s.$parsers.unshift(function(e){var t;if(!e)return s.$setValidity("date",!0),null;var n=m.parse(e,s.$dateValue);return!n||isNaN(n.getTime())?void s.$setValidity("date",!1):(u(n),"string"===d.dateType?(t=m.timezoneOffsetAdjust(n,d.timezone,!0),g(t,d.modelDateFormat||d.dateFormat)):(t=m.timezoneOffsetAdjust(s.$dateValue,d.timezone,!0),"number"===d.dateType?t.getTime():"unix"===d.dateType?t.getTime()/1e3:"iso"===d.dateType?t.toISOString():new Date(t)))}),s.$formatters.push(function(e){var t;return t=angular.isUndefined(e)||null===e?0/0:angular.isDate(e)?e:"string"===d.dateType?m.parse(e,null,d.modelDateFormat):new Date("unix"===d.dateType?1e3*e:e),s.$dateValue=m.timezoneOffsetAdjust(t,d.timezone),c()}),s.$render=function(){t.val(c())},e.$on("$destroy",function(){f&&f.destroy(),d=null,f=null})}}}]).provider("datepickerViews",function(){function e(e,t){for(var n=[];e.length>0;)n.push(e.splice(0,t));return n}function t(e,t){return(e%t+t)%t}this.defaults={dayFormat:"dd",daySplit:7};this.$get=["$dateFormatter","$dateParser","$sce",function(n,a,o){return function(i){var r=i.$scope,s=i.$options,l=s.lang,u=function(e,t){return n.formatDate(e,t,l)},c=a({format:s.dateFormat,lang:l,strict:s.strictFormat}),d=n.weekdaysShort(l),f=d.slice(s.startWeek).concat(d.slice(0,s.startWeek)),p=o.trustAsHtml('<th class="dow text-center">'+f.join('</th><th class="dow text-center">')+"</th>"),g=i.$date||(s.startDate?c.getDateForAttribute("startDate",s.startDate):new Date),m={year:g.getFullYear(),month:g.getMonth(),date:g.getDate()},$=[{format:s.dayFormat,split:7,steps:{month:1},update:function(e,t){!this.built||t||e.getFullYear()!==m.year||e.getMonth()!==m.month?(angular.extend(m,{year:i.$date.getFullYear(),month:i.$date.getMonth(),date:i.$date.getDate()}),i.$build()):e.getDate()!==m.date&&(m.date=i.$date.getDate(),i.$updateSelected())},build:function(){var n=new Date(m.year,m.month,1),a=n.getTimezoneOffset(),o=new Date(+n-864e5*t(n.getDay()-s.startWeek,7)),l=o.getTimezoneOffset(),d=c.timezoneOffsetAdjust(new Date,s.timezone).toDateString();l!==a&&(o=new Date(+o+6e4*(l-a)));for(var f,g=[],$=0;42>$;$++)f=c.daylightSavingAdjust(new Date(o.getFullYear(),o.getMonth(),o.getDate()+$)),g.push({date:f,isToday:f.toDateString()===d,label:u(f,this.format),selected:i.$date&&this.isSelected(f),muted:f.getMonth()!==m.month,disabled:this.isDisabled(f)});r.title=u(n,s.monthTitleFormat),r.showLabels=!0,r.labels=p,r.rows=e(g,this.split),this.built=!0},isSelected:function(e){return i.$date&&e.getFullYear()===i.$date.getFullYear()&&e.getMonth()===i.$date.getMonth()&&e.getDate()===i.$date.getDate()},isDisabled:function(e){var t=e.getTime();if(t<s.minDate||t>s.maxDate)return!0;if(-1!==s.daysOfWeekDisabled.indexOf(e.getDay()))return!0;if(s.disabledDateRanges)for(var n=0;n<s.disabledDateRanges.length;n++)if(t>=s.disabledDateRanges[n].start&&t<=s.disabledDateRanges[n].end)return!0;return!1},onKeyDown:function(e){if(i.$date){var t,n=i.$date.getTime();37===e.keyCode?t=new Date(n-864e5):38===e.keyCode?t=new Date(n-6048e5):39===e.keyCode?t=new Date(n+864e5):40===e.keyCode&&(t=new Date(n+6048e5)),this.isDisabled(t)||i.select(t,!0)}}},{name:"month",format:s.monthFormat,split:4,steps:{year:1},update:function(e){this.built&&e.getFullYear()===m.year?e.getMonth()!==m.month&&(angular.extend(m,{month:i.$date.getMonth(),date:i.$date.getDate()}),i.$updateSelected()):(angular.extend(m,{year:i.$date.getFullYear(),month:i.$date.getMonth(),date:i.$date.getDate()}),i.$build())},build:function(){for(var t,n=(new Date(m.year,0,1),[]),a=0;12>a;a++)t=new Date(m.year,a,1),n.push({date:t,label:u(t,this.format),selected:i.$isSelected(t),disabled:this.isDisabled(t)});r.title=u(t,s.yearTitleFormat),r.showLabels=!1,r.rows=e(n,this.split),this.built=!0},isSelected:function(e){return i.$date&&e.getFullYear()===i.$date.getFullYear()&&e.getMonth()===i.$date.getMonth()},isDisabled:function(e){var t=+new Date(e.getFullYear(),e.getMonth()+1,0);return t<s.minDate||e.getTime()>s.maxDate},onKeyDown:function(e){if(i.$date){var t=i.$date.getMonth(),n=new Date(i.$date);37===e.keyCode?n.setMonth(t-1):38===e.keyCode?n.setMonth(t-4):39===e.keyCode?n.setMonth(t+1):40===e.keyCode&&n.setMonth(t+4),this.isDisabled(n)||i.select(n,!0)}}},{name:"year",format:s.yearFormat,split:4,steps:{year:12},update:function(e,t){!this.built||t||parseInt(e.getFullYear()/20,10)!==parseInt(m.year/20,10)?(angular.extend(m,{year:i.$date.getFullYear(),month:i.$date.getMonth(),date:i.$date.getDate()}),i.$build()):e.getFullYear()!==m.year&&(angular.extend(m,{year:i.$date.getFullYear(),month:i.$date.getMonth(),date:i.$date.getDate()}),i.$updateSelected())},build:function(){for(var t,n=m.year-m.year%(3*this.split),a=[],o=0;12>o;o++)t=new Date(n+o,0,1),a.push({date:t,label:u(t,this.format),selected:i.$isSelected(t),disabled:this.isDisabled(t)});r.title=a[0].label+"-"+a[a.length-1].label,r.showLabels=!1,r.rows=e(a,this.split),this.built=!0},isSelected:function(e){return i.$date&&e.getFullYear()===i.$date.getFullYear()},isDisabled:function(e){var t=+new Date(e.getFullYear()+1,0,0);return t<s.minDate||e.getTime()>s.maxDate},onKeyDown:function(e){if(i.$date){var t=i.$date.getFullYear(),n=new Date(i.$date);37===e.keyCode?n.setYear(t-1):38===e.keyCode?n.setYear(t-4):39===e.keyCode?n.setYear(t+1):40===e.keyCode&&n.setYear(t+4),this.isDisabled(n)||i.select(n,!0)}}}];return{views:s.minView?Array.prototype.slice.call($,s.minView):$,viewDate:m}}}]}),angular.module("mgcrea.ngStrap.dropdown",["mgcrea.ngStrap.tooltip"]).provider("$dropdown",function(){var e=this.defaults={animation:"am-fade",prefixClass:"dropdown",prefixEvent:"dropdown",placement:"bottom-left",template:"dropdown/dropdown.tpl.html",trigger:"click",container:!1,keyboard:!0,html:!1,delay:0};this.$get=["$window","$rootScope","$tooltip","$timeout",function(t,n,a,o){function i(t,i){function l(e){return e.target!==t[0]?e.target!==t[0]&&u.hide():void 0}{var u={},c=angular.extend({},e,i);u.$scope=c.scope&&c.scope.$new()||n.$new()}u=a(t,c);var d=t.parent();u.$onKeyDown=function(e){if(/(38|40)/.test(e.keyCode)){e.preventDefault(),e.stopPropagation();var t=angular.element(u.$element[0].querySelectorAll("li:not(.divider) a"));if(t.length){var n;angular.forEach(t,function(e,t){s&&s.call(e,":focus")&&(n=t)}),38===e.keyCode&&n>0?n--:40===e.keyCode&&n<t.length-1?n++:angular.isUndefined(n)&&(n=0),t.eq(n)[0].focus()}}};var f=u.show;u.show=function(){f(),o(function(){c.keyboard&&u.$element.on("keydown",u.$onKeyDown),r.on("click",l)},0,!1),d.hasClass("dropdown")&&d.addClass("open")};var p=u.hide;u.hide=function(){u.$isShown&&(c.keyboard&&u.$element.off("keydown",u.$onKeyDown),r.off("click",l),d.hasClass("dropdown")&&d.removeClass("open"),p())};var g=u.destroy;return u.destroy=function(){r.off("click",l),g()},u}var r=angular.element(t.document.body),s=Element.prototype.matchesSelector||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector;return i}]}).directive("bsDropdown",["$window","$sce","$dropdown",function(e,t,n){return{restrict:"EAC",scope:!0,link:function(e,t,a){var o={scope:e};angular.forEach(["placement","container","delay","trigger","keyboard","html","animation","template","id"],function(e){angular.isDefined(a[e])&&(o[e]=a[e])}),a.bsDropdown&&e.$watch(a.bsDropdown,function(t){e.content=t},!0),a.bsShow&&e.$watch(a.bsShow,function(e){i&&angular.isDefined(e)&&(angular.isString(e)&&(e=!!e.match(/true|,?(dropdown),?/i)),e===!0?i.show():i.hide())});var i=n(t,o);e.$on("$destroy",function(){i&&i.destroy(),o=null,i=null})}}}]),angular.module("mgcrea.ngStrap.helpers.dateFormatter",[]).service("$dateFormatter",["$locale","dateFilter",function(e,t){function n(e){return/(h+)([:\.])?(m+)[ ]?(a?)/i.exec(e).slice(1)}this.getDefaultLocale=function(){return e.id},this.getDatetimeFormat=function(t){return e.DATETIME_FORMATS[t]||t},this.weekdaysShort=function(){return e.DATETIME_FORMATS.SHORTDAY},this.hoursFormat=function(e){return n(e)[0]},this.minutesFormat=function(e){return n(e)[2]},this.timeSeparator=function(e){return n(e)[1]},this.showAM=function(e){return!!n(e)[3]},this.formatDate=function(e,n,a,o){return t(e,n,o)}}]),angular.module("mgcrea.ngStrap.helpers.dateParser",[]).provider("$dateParser",["$localeProvider",function(){function e(){this.year=1970,this.month=0,this.day=1,this.hours=0,this.minutes=0,this.seconds=0,this.milliseconds=0}function t(){}function n(e){return!isNaN(parseFloat(e))&&isFinite(e)}function a(e,t){for(var n=e.length,a=t.toString().toLowerCase(),o=0;n>o;o++)if(e[o].toLowerCase()===a)return o;return-1}e.prototype.setMilliseconds=function(e){this.milliseconds=e},e.prototype.setSeconds=function(e){this.seconds=e},e.prototype.setMinutes=function(e){this.minutes=e},e.prototype.setHours=function(e){this.hours=e},e.prototype.getHours=function(){return this.hours},e.prototype.setDate=function(e){this.day=e},e.prototype.setMonth=function(e){this.month=e},e.prototype.setFullYear=function(e){this.year=e},e.prototype.fromDate=function(e){return this.year=e.getFullYear(),this.month=e.getMonth(),this.day=e.getDate(),this.hours=e.getHours(),this.minutes=e.getMinutes(),this.seconds=e.getSeconds(),this.milliseconds=e.getMilliseconds(),this},e.prototype.toDate=function(){return new Date(this.year,this.month,this.day,this.hours,this.minutes,this.seconds,this.milliseconds)};var o=e.prototype,i=this.defaults={format:"shortDate",strict:!1};this.$get=["$locale","dateFilter",function(r,s){var l=function(l){function u(e){var t,n=Object.keys(h),a=[],o=[],i=e;for(t=0;t<n.length;t++)if(e.split(n[t]).length>1){var r=i.search(n[t]);e=e.split(n[t]).join(""),h[n[t]]&&(a[r]=h[n[t]])}return angular.forEach(a,function(e){e&&o.push(e)}),o}function c(e){return e.replace(/\//g,"[\\/]").replace("/-/g","[-]").replace(/\./g,"[.]").replace(/\\s/g,"[\\s]")}function d(e){var t,n=Object.keys($),a=e;for(t=0;t<n.length;t++)a=a.split(n[t]).join("${"+t+"}");for(t=0;t<n.length;t++)a=a.split("${"+t+"}").join("("+$[n[t]]+")");return e=c(e),new RegExp("^"+a+"$",["i"])}var f,p,g=angular.extend({},i,l),m={},$={sss:"[0-9]{3}",ss:"[0-5][0-9]",s:g.strict?"[1-5]?[0-9]":"[0-9]|[0-5][0-9]",mm:"[0-5][0-9]",m:g.strict?"[1-5]?[0-9]":"[0-9]|[0-5][0-9]",HH:"[01][0-9]|2[0-3]",H:g.strict?"1?[0-9]|2[0-3]":"[01]?[0-9]|2[0-3]",hh:"[0][1-9]|[1][012]",h:g.strict?"[1-9]|1[012]":"0?[1-9]|1[012]",a:"AM|PM",EEEE:r.DATETIME_FORMATS.DAY.join("|"),EEE:r.DATETIME_FORMATS.SHORTDAY.join("|"),dd:"0[1-9]|[12][0-9]|3[01]",d:g.strict?"[1-9]|[1-2][0-9]|3[01]":"0?[1-9]|[1-2][0-9]|3[01]",MMMM:r.DATETIME_FORMATS.MONTH.join("|"),MMM:r.DATETIME_FORMATS.SHORTMONTH.join("|"),MM:"0[1-9]|1[012]",M:g.strict?"[1-9]|1[012]":"0?[1-9]|1[012]",yyyy:"[1]{1}[0-9]{3}|[2]{1}[0-9]{3}",yy:"[0-9]{2}",y:g.strict?"-?(0|[1-9][0-9]{0,3})":"-?0*[0-9]{1,4}"},h={sss:o.setMilliseconds,ss:o.setSeconds,s:o.setSeconds,mm:o.setMinutes,m:o.setMinutes,HH:o.setHours,H:o.setHours,hh:o.setHours,h:o.setHours,EEEE:t,EEE:t,dd:o.setDate,d:o.setDate,a:function(e){var t=this.getHours()%12;return this.setHours(e.match(/pm/i)?t+12:t)},MMMM:function(e){return this.setMonth(a(r.DATETIME_FORMATS.MONTH,e))},MMM:function(e){return this.setMonth(a(r.DATETIME_FORMATS.SHORTMONTH,e))},MM:function(e){return this.setMonth(1*e-1)},M:function(e){return this.setMonth(1*e-1)},yyyy:o.setFullYear,yy:function(e){return this.setFullYear(2e3+1*e)},y:o.setFullYear};return m.init=function(){m.$format=r.DATETIME_FORMATS[g.format]||g.format,f=d(m.$format),p=u(m.$format)},m.isValid=function(e){return angular.isDate(e)?!isNaN(e.getTime()):f.test(e)},m.parse=function(t,n,a,o){a&&(a=r.DATETIME_FORMATS[a]||a),angular.isDate(t)&&(t=s(t,a||m.$format,o));var i=a?d(a):f,l=a?u(a):p,c=i.exec(t);if(!c)return!1;for(var g=(new e).fromDate(n&&!isNaN(n.getTime())?n:new Date(1970,0,1,0)),$=0;$<c.length-1;$++)l[$]&&l[$].call(g,c[$+1]);var h=g.toDate();return parseInt(g.day,10)!==h.getDate()?!1:h},m.getDateForAttribute=function(e,t){var a;if("today"===t){var o=new Date;a=new Date(o.getFullYear(),o.getMonth(),o.getDate()+("maxDate"===e?1:0),0,0,0,"minDate"===e?0:-1)}else a=angular.isString(t)&&t.match(/^".+"$/)?new Date(t.substr(1,t.length-2)):n(t)?new Date(parseInt(t,10)):angular.isString(t)&&0===t.length?"minDate"===e?-1/0:+1/0:new Date(t);return a},m.getTimeForAttribute=function(e,t){var a;return a="now"===t?(new Date).setFullYear(1970,0,1):angular.isString(t)&&t.match(/^".+"$/)?new Date(t.substr(1,t.length-2)).setFullYear(1970,0,1):n(t)?new Date(parseInt(t,10)).setFullYear(1970,0,1):angular.isString(t)&&0===t.length?"minTime"===e?-1/0:+1/0:m.parse(t,new Date(1970,0,1,0))},m.daylightSavingAdjust=function(e){return e?(e.setHours(e.getHours()>12?e.getHours()+2:0),e):null},m.timezoneOffsetAdjust=function(e,t,n){return e?(t&&"UTC"===t&&(e=new Date(e.getTime()),e.setMinutes(e.getMinutes()+(n?-1:1)*e.getTimezoneOffset())),e):null},m.init(),m};return l}]}]),angular.module("mgcrea.ngStrap.helpers.debounce",[]).factory("debounce",["$timeout",function(e){return function(t,n,a){var o=null;return function(){var i=this,r=arguments,s=a&&!o;return o&&e.cancel(o),o=e(function(){o=null,a||t.apply(i,r)},n,!1),s&&t.apply(i,r),o}}}]).factory("throttle",["$timeout",function(e){return function(t,n,a){var o=null;return a||(a={}),function(){var i=this,r=arguments;o||(a.leading!==!1&&t.apply(i,r),o=e(function(){o=null,a.trailing!==!1&&t.apply(i,r)},n,!1))}}}]),angular.module("mgcrea.ngStrap.helpers.dimensions",[]).factory("dimensions",["$document","$window",function(){var t=(angular.element,{}),n=t.nodeName=function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()};t.css=function(t,n,a){var o;return o=t.currentStyle?t.currentStyle[n]:e.getComputedStyle?e.getComputedStyle(t)[n]:t.style[n],a===!0?parseFloat(o)||0:o},t.offset=function(t){var n=t.getBoundingClientRect(),a=t.ownerDocument;return{width:n.width||t.offsetWidth,height:n.height||t.offsetHeight,top:n.top+(e.pageYOffset||a.documentElement.scrollTop)-(a.documentElement.clientTop||0),left:n.left+(e.pageXOffset||a.documentElement.scrollLeft)-(a.documentElement.clientLeft||0)}},t.setOffset=function(e,n,a){var o,i,r,s,l,u,c,d=t.css(e,"position"),f=angular.element(e),p={};"static"===d&&(e.style.position="relative"),l=t.offset(e),r=t.css(e,"top"),u=t.css(e,"left"),c=("absolute"===d||"fixed"===d)&&(r+u).indexOf("auto")>-1,c?(o=t.position(e),s=o.top,i=o.left):(s=parseFloat(r)||0,i=parseFloat(u)||0),angular.isFunction(n)&&(n=n.call(e,a,l)),null!==n.top&&(p.top=n.top-l.top+s),null!==n.left&&(p.left=n.left-l.left+i),"using"in n?n.using.call(f,p):f.css({top:p.top+"px",left:p.left+"px"})},t.position=function(e){var o,i,r={top:0,left:0};return"fixed"===t.css(e,"position")?i=e.getBoundingClientRect():(o=a(e),i=t.offset(e),n(o,"html")||(r=t.offset(o)),r.top+=t.css(o,"borderTopWidth",!0),r.left+=t.css(o,"borderLeftWidth",!0)),{width:e.offsetWidth,height:e.offsetHeight,top:i.top-r.top-t.css(e,"marginTop",!0),left:i.left-r.left-t.css(e,"marginLeft",!0)}};var a=function(e){var a=e.ownerDocument,o=e.offsetParent||a;if(n(o,"#document"))return a.documentElement;for(;o&&!n(o,"html")&&"static"===t.css(o,"position");)o=o.offsetParent;return o||a.documentElement};return t.height=function(e,n){var a=e.offsetHeight;return n?a+=t.css(e,"marginTop",!0)+t.css(e,"marginBottom",!0):a-=t.css(e,"paddingTop",!0)+t.css(e,"paddingBottom",!0)+t.css(e,"borderTopWidth",!0)+t.css(e,"borderBottomWidth",!0),a
},t.width=function(e,n){var a=e.offsetWidth;return n?a+=t.css(e,"marginLeft",!0)+t.css(e,"marginRight",!0):a-=t.css(e,"paddingLeft",!0)+t.css(e,"paddingRight",!0)+t.css(e,"borderLeftWidth",!0)+t.css(e,"borderRightWidth",!0),a},t}]),angular.module("mgcrea.ngStrap.helpers.parseOptions",[]).provider("$parseOptions",function(){var e=this.defaults={regexp:/^\s*(.*?)(?:\s+as\s+(.*?))?(?:\s+group\s+by\s+(.*))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+(.*?)(?:\s+track\s+by\s+(.*?))?$/};this.$get=["$parse","$q",function(t,n){function a(a,o){function i(e,t){return e.map(function(e,n){var a,o,i={};return i[c]=e,a=u(t,i),o=p(t,i),{label:a,value:o,index:n}})}var r={},s=angular.extend({},e,o);r.$values=[];var l,u,c,d,f,p,g;return r.init=function(){r.$match=l=a.match(s.regexp),u=t(l[2]||l[1]),c=l[4]||l[6],d=l[5],f=t(l[3]||""),p=t(l[2]?l[1]:c),g=t(l[7])},r.valuesFn=function(e,t){return n.when(g(e,t)).then(function(t){return r.$values=t?i(t,e):{},r.$values})},r.displayValue=function(e){var t={};return t[c]=e,u(t)},r.init(),r}return a}]}),angular.version.minor<3&&angular.version.dot<14&&angular.module("ng").factory("$$rAF",["$window","$timeout",function(e,t){var n=e.requestAnimationFrame||e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame,a=e.cancelAnimationFrame||e.webkitCancelAnimationFrame||e.mozCancelAnimationFrame||e.webkitCancelRequestAnimationFrame,o=!!n,i=o?function(e){var t=n(e);return function(){a(t)}}:function(e){var n=t(e,16.66,!1);return function(){t.cancel(n)}};return i.supported=o,i}]),angular.module("mgcrea.ngStrap.modal",["mgcrea.ngStrap.helpers.dimensions"]).provider("$modal",function(){var e=this.defaults={animation:"am-fade",backdropAnimation:"am-fade",prefixClass:"modal",prefixEvent:"modal",placement:"top",template:"modal/modal.tpl.html",contentTemplate:!1,container:!1,element:null,backdrop:!0,keyboard:!0,html:!1,show:!0};this.$get=["$window","$rootScope","$compile","$q","$templateCache","$http","$animate","$timeout","$sce","dimensions",function(n,a,o,i,r,s,l,u,c){function d(t){function n(){w.$emit(d.prefixEvent+".show",u)}function i(){w.$emit(d.prefixEvent+".hide",u),v.removeClass(d.prefixClass+"-open"),d.animation&&v.removeClass(d.prefixClass+"-with-"+d.animation)}function r(e){e.target===e.currentTarget&&("static"===d.backdrop?u.focus():u.hide())}function s(e){e.preventDefault()}var u={},d=u.$options=angular.extend({},e,t);u.$promise=g(d.template);var w=u.$scope=d.scope&&d.scope.$new()||a.$new();d.element||d.container||(d.container="body"),u.$id=d.id||d.element&&d.element.attr("id")||"",m(["title","content"],function(e){d[e]&&(w[e]=c.trustAsHtml(d[e]))}),w.$hide=function(){w.$$postDigest(function(){u.hide()})},w.$show=function(){w.$$postDigest(function(){u.show()})},w.$toggle=function(){w.$$postDigest(function(){u.toggle()})},u.$isShown=w.$isShown=!1,d.contentTemplate&&(u.$promise=u.$promise.then(function(e){var n=angular.element(e);return g(d.contentTemplate).then(function(e){var a=p('[ng-bind="content"]',n[0]).removeAttr("ng-bind").html(e);return t.template||a.next().remove(),n[0].outerHTML})}));var b,D,k=angular.element('<div class="'+d.prefixClass+'-backdrop"/>');return k.css({position:"fixed",top:"0px",left:"0px",bottom:"0px",right:"0px","z-index":1038}),u.$promise.then(function(e){angular.isObject(e)&&(e=e.data),d.html&&(e=e.replace(y,'ng-bind-html="')),e=$.apply(e),b=o(e),u.init()}),u.init=function(){d.show&&w.$$postDigest(function(){u.show()})},u.destroy=function(){D&&(D.remove(),D=null),k&&(k.remove(),k=null),w.$destroy()},u.show=function(){if(!u.$isShown){var e,t;if(angular.isElement(d.container)?(e=d.container,t=d.container[0].lastChild?angular.element(d.container[0].lastChild):null):d.container?(e=p(d.container),t=e[0].lastChild?angular.element(e[0].lastChild):null):(e=null,t=d.element),D=u.$element=b(w,function(){}),!w.$emit(d.prefixEvent+".show.before",u).defaultPrevented){D.css({display:"block"}).addClass(d.placement),d.animation&&(d.backdrop&&k.addClass(d.backdropAnimation),D.addClass(d.animation)),d.backdrop&&l.enter(k,v,null);var a=l.enter(D,e,t,n);a&&a.then&&a.then(n),u.$isShown=w.$isShown=!0,f(w);var o=D[0];h(function(){o.focus()}),v.addClass(d.prefixClass+"-open"),d.animation&&v.addClass(d.prefixClass+"-with-"+d.animation),d.backdrop&&(D.on("click",r),k.on("click",r),k.on("wheel",s)),d.keyboard&&D.on("keyup",u.$onKeyUp)}}},u.hide=function(){if(u.$isShown&&!w.$emit(d.prefixEvent+".hide.before",u).defaultPrevented){var e=l.leave(D,i);e&&e.then&&e.then(i),d.backdrop&&l.leave(k),u.$isShown=w.$isShown=!1,f(w),d.backdrop&&(D.off("click",r),k.off("click",r),k.off("wheel",s)),d.keyboard&&D.off("keyup",u.$onKeyUp)}},u.toggle=function(){u.$isShown?u.hide():u.show()},u.focus=function(){D[0].focus()},u.$onKeyUp=function(e){27===e.which&&u.$isShown&&(u.hide(),e.stopPropagation())},u}function f(e){e.$$phase||e.$root&&e.$root.$$phase||e.$digest()}function p(e,n){return angular.element((n||t).querySelectorAll(e))}function g(e){return w[e]?w[e]:w[e]=s.get(e,{cache:r}).then(function(e){return e.data})}var m=angular.forEach,$=String.prototype.trim,h=n.requestAnimationFrame||n.setTimeout,v=angular.element(n.document.body),y=/ng-bind="/gi,w={};return d}]}).directive("bsModal",["$window","$sce","$modal",function(e,t,n){return{restrict:"EAC",scope:!0,link:function(e,a,o){var i={scope:e,element:a,show:!1};angular.forEach(["template","contentTemplate","placement","container","animation","id"],function(e){angular.isDefined(o[e])&&(i[e]=o[e])});var r=/^(false|0|)$/;angular.forEach(["keyboard","html"],function(e){angular.isDefined(o[e])&&(i[e]=!r.test(o[e]))}),angular.isDefined(o.backdrop)&&(i.backdrop=r.test(o.backdrop)?!1:o.backdrop),angular.forEach(["title","content"],function(n){o[n]&&o.$observe(n,function(a){e[n]=t.trustAsHtml(a)})}),o.bsModal&&e.$watch(o.bsModal,function(t){angular.isObject(t)?angular.extend(e,t):e.content=t},!0);var s=n(i);a.on(o.trigger||"click",s.toggle),e.$on("$destroy",function(){s&&s.destroy(),i=null,s=null})}}}]),angular.module("mgcrea.ngStrap.navbar",[]).provider("$navbar",function(){var e=this.defaults={activeClass:"active",routeAttr:"data-match-route",strict:!1};this.$get=function(){return{defaults:e}}}).directive("bsNavbar",["$window","$location","$navbar",function(e,t,n){var a=n.defaults;return{restrict:"A",link:function(e,n,o){var i=angular.copy(a);angular.forEach(Object.keys(a),function(e){angular.isDefined(o[e])&&(i[e]=o[e])}),e.$watch(function(){return t.path()},function(e){var t=n[0].querySelectorAll("li["+i.routeAttr+"]");angular.forEach(t,function(t){var n=angular.element(t),a=n.attr(i.routeAttr).replace("/","\\/");i.strict&&(a="^"+a+"$");var o=new RegExp(a,"i");o.test(e)?n.addClass(i.activeClass):n.removeClass(i.activeClass)})})}}}]),angular.module("mgcrea.ngStrap.popover",["mgcrea.ngStrap.tooltip"]).provider("$popover",function(){var e=this.defaults={animation:"am-fade",customClass:"",container:!1,target:!1,placement:"right",template:"popover/popover.tpl.html",contentTemplate:!1,trigger:"click",keyboard:!0,html:!1,title:"",content:"",delay:0,autoClose:!1};this.$get=["$tooltip",function(t){function n(n,a){var o=angular.extend({},e,a),i=t(n,o);return o.content&&(i.$scope.content=o.content),i}return n}]}).directive("bsPopover",["$window","$sce","$popover",function(e,t,n){var a=e.requestAnimationFrame||e.setTimeout;return{restrict:"EAC",scope:!0,link:function(e,o,i){var r={scope:e};angular.forEach(["template","contentTemplate","placement","container","target","delay","trigger","keyboard","html","animation","customClass","autoClose","id"],function(e){angular.isDefined(i[e])&&(r[e]=i[e])}),angular.forEach(["title","content"],function(n){i[n]&&i.$observe(n,function(o,i){e[n]=t.trustAsHtml(o),angular.isDefined(i)&&a(function(){s&&s.$applyPlacement()})})}),i.bsPopover&&e.$watch(i.bsPopover,function(t,n){angular.isObject(t)?angular.extend(e,t):e.content=t,angular.isDefined(n)&&a(function(){s&&s.$applyPlacement()})},!0),i.bsShow&&e.$watch(i.bsShow,function(e){s&&angular.isDefined(e)&&(angular.isString(e)&&(e=!!e.match(/true|,?(popover),?/i)),e===!0?s.show():s.hide())}),i.viewport&&e.$watch(i.viewport,function(e){s&&angular.isDefined(e)&&s.setViewport(e)});var s=n(o,r);e.$on("$destroy",function(){s&&s.destroy(),r=null,s=null})}}}]),angular.module("mgcrea.ngStrap.scrollspy",["mgcrea.ngStrap.helpers.debounce","mgcrea.ngStrap.helpers.dimensions"]).provider("$scrollspy",function(){var e=this.$$spies={},n=this.defaults={debounce:150,throttle:100,offset:100};this.$get=["$window","$document","$rootScope","dimensions","debounce","throttle",function(a,o,i,r,s,l){function u(e,t){return e[0].nodeName&&e[0].nodeName.toLowerCase()===t.toLowerCase()}function c(o){var c=angular.extend({},n,o);c.element||(c.element=p);var g=u(c.element,"body"),m=g?d:c.element,$=g?"window":c.id;if(e[$])return e[$].$$count++,e[$];var h,v,y,w,b,D,k,S,x={},T=x.$trackedElements=[],C=[];return x.init=function(){this.$$count=1,w=s(this.checkPosition,c.debounce),b=l(this.checkPosition,c.throttle),m.on("click",this.checkPositionWithEventLoop),d.on("resize",w),m.on("scroll",b),D=s(this.checkOffsets,c.debounce),h=i.$on("$viewContentLoaded",D),v=i.$on("$includeContentLoaded",D),D(),$&&(e[$]=x)},x.destroy=function(){this.$$count--,this.$$count>0||(m.off("click",this.checkPositionWithEventLoop),d.off("resize",w),m.off("scroll",b),h(),v(),$&&delete e[$])},x.checkPosition=function(){if(C.length){if(S=(g?a.pageYOffset:m.prop("scrollTop"))||0,k=Math.max(a.innerHeight,f.prop("clientHeight")),S<C[0].offsetTop&&y!==C[0].target)return x.$activateElement(C[0]);for(var e=C.length;e--;)if(!angular.isUndefined(C[e].offsetTop)&&null!==C[e].offsetTop&&y!==C[e].target&&!(S<C[e].offsetTop||C[e+1]&&S>C[e+1].offsetTop))return x.$activateElement(C[e])}},x.checkPositionWithEventLoop=function(){setTimeout(x.checkPosition,1)},x.$activateElement=function(e){if(y){var t=x.$getTrackedElement(y);t&&(t.source.removeClass("active"),u(t.source,"li")&&u(t.source.parent().parent(),"li")&&t.source.parent().parent().removeClass("active"))}y=e.target,e.source.addClass("active"),u(e.source,"li")&&u(e.source.parent().parent(),"li")&&e.source.parent().parent().addClass("active")},x.$getTrackedElement=function(e){return T.filter(function(t){return t.target===e})[0]},x.checkOffsets=function(){angular.forEach(T,function(e){var n=t.querySelector(e.target);e.offsetTop=n?r.offset(n).top:null,c.offset&&null!==e.offsetTop&&(e.offsetTop-=1*c.offset)}),C=T.filter(function(e){return null!==e.offsetTop}).sort(function(e,t){return e.offsetTop-t.offsetTop}),w()},x.trackElement=function(e,t){T.push({target:e,source:t})},x.untrackElement=function(e,t){for(var n,a=T.length;a--;)if(T[a].target===e&&T[a].source===t){n=a;break}T=T.splice(n,1)},x.activate=function(e){T[e].addClass("active")},x.init(),x}var d=angular.element(a),f=angular.element(o.prop("documentElement")),p=angular.element(a.document.body);return c}]}).directive("bsScrollspy",["$rootScope","debounce","dimensions","$scrollspy",function(e,t,n,a){return{restrict:"EAC",link:function(e,t,n){var o={scope:e};angular.forEach(["offset","target"],function(e){angular.isDefined(n[e])&&(o[e]=n[e])});var i=a(o);i.trackElement(o.target,t),e.$on("$destroy",function(){i&&(i.untrackElement(o.target,t),i.destroy()),o=null,i=null})}}}]).directive("bsScrollspyList",["$rootScope","debounce","dimensions","$scrollspy",function(){return{restrict:"A",compile:function(e){var t=e[0].querySelectorAll("li > a[href]");angular.forEach(t,function(e){var t=angular.element(e);t.parent().attr("bs-scrollspy","").attr("data-target",t.attr("href"))})}}}]),angular.module("mgcrea.ngStrap.select",["mgcrea.ngStrap.tooltip","mgcrea.ngStrap.helpers.parseOptions"]).provider("$select",function(){var e=this.defaults={animation:"am-fade",prefixClass:"select",prefixEvent:"$select",placement:"bottom-left",template:"select/select.tpl.html",trigger:"focus",container:!1,keyboard:!0,html:!1,delay:0,multiple:!1,allNoneButtons:!1,sort:!0,caretHtml:'&nbsp;<span class="caret"></span>',placeholder:"Choose among the following...",allText:"All",noneText:"None",maxLength:3,maxLengthHtml:"selected",iconCheckmark:"glyphicon glyphicon-ok"};this.$get=["$window","$document","$rootScope","$tooltip","$timeout",function(t,n,a,o,i){function r(t,n,a){var r={},s=angular.extend({},e,a);s.sort=s.sort.toString().match(/true|1/i),r=o(t,s);var u=r.$scope;u.$matches=[],u.$activeIndex=-1,u.$isMultiple=s.multiple,u.$showAllNoneButtons=s.allNoneButtons&&s.multiple,u.$iconCheckmark=s.iconCheckmark,u.$allText=s.allText,u.$noneText=s.noneText,u.$activate=function(e){u.$$postDigest(function(){r.activate(e)})},u.$select=function(e){u.$$postDigest(function(){r.select(e)})},u.$isVisible=function(){return r.$isVisible()},u.$isActive=function(e){return r.$isActive(e)},u.$selectAll=function(){for(var e=0;e<u.$matches.length;e++)u.$isActive(e)||u.$select(e)},u.$selectNone=function(){for(var e=0;e<u.$matches.length;e++)u.$isActive(e)&&u.$select(e)},r.update=function(e){u.$matches=e,r.$updateActiveIndex()},r.activate=function(e){return s.multiple?(r.$isActive(e)?u.$activeIndex.splice(u.$activeIndex.indexOf(e),1):u.$activeIndex.push(e),s.sort&&u.$activeIndex.sort()):u.$activeIndex=e,u.$activeIndex},r.select=function(e){var t=u.$matches[e].value;u.$apply(function(){r.activate(e),s.multiple?n.$setViewValue(u.$activeIndex.map(function(e){return u.$matches[e].value})):(n.$setViewValue(t),r.hide())}),u.$emit(s.prefixEvent+".select",t,e,r)},r.$updateActiveIndex=function(){n.$modelValue&&u.$matches.length?u.$activeIndex=s.multiple&&angular.isArray(n.$modelValue)?n.$modelValue.map(function(e){return r.$getIndex(e)}):r.$getIndex(n.$modelValue):u.$activeIndex>=u.$matches.length&&(u.$activeIndex=s.multiple?[]:0)},r.$isVisible=function(){return s.minLength&&n?u.$matches.length&&n.$viewValue.length>=s.minLength:u.$matches.length},r.$isActive=function(e){return s.multiple?-1!==u.$activeIndex.indexOf(e):u.$activeIndex===e},r.$getIndex=function(e){var t=u.$matches.length,n=t;if(t){for(n=t;n--&&u.$matches[n].value!==e;);if(!(0>n))return n}},r.$onMouseDown=function(e){if(e.preventDefault(),e.stopPropagation(),l){var t=angular.element(e.target);t.triggerHandler("click")}},r.$onKeyDown=function(e){return/(9|13|38|40)/.test(e.keyCode)?(e.preventDefault(),e.stopPropagation(),s.multiple&&9===e.keyCode?r.hide():s.multiple||13!==e.keyCode&&9!==e.keyCode?void(s.multiple||(38===e.keyCode&&u.$activeIndex>0?u.$activeIndex--:38===e.keyCode&&u.$activeIndex<0?u.$activeIndex=u.$matches.length-1:40===e.keyCode&&u.$activeIndex<u.$matches.length-1?u.$activeIndex++:angular.isUndefined(u.$activeIndex)&&(u.$activeIndex=0),u.$digest())):r.select(u.$activeIndex)):void 0};var c=r.show;r.show=function(){c(),s.multiple&&r.$element.addClass("select-multiple"),i(function(){r.$element.on(l?"touchstart":"mousedown",r.$onMouseDown),s.keyboard&&t.on("keydown",r.$onKeyDown)},0,!1)};var d=r.hide;return r.hide=function(){s.multiple||n.$modelValue||(u.$activeIndex=-1),r.$element.off(l?"touchstart":"mousedown",r.$onMouseDown),s.keyboard&&t.off("keydown",r.$onKeyDown),d(!0)},r}var s=(angular.element(t.document.body),/(ip(a|o)d|iphone|android)/gi.test(t.navigator.userAgent)),l="createTouch"in t.document&&s;return r.defaults=e,r}]}).directive("bsSelect",["$window","$parse","$q","$select","$parseOptions",function(e,t,n,a,o){var i=a.defaults;return{restrict:"EAC",require:"ngModel",link:function(e,t,n,r){var s={scope:e,placeholder:i.placeholder};if(angular.forEach(["placement","container","delay","trigger","keyboard","html","animation","template","placeholder","multiple","allNoneButtons","maxLength","maxLengthHtml","allText","noneText","iconCheckmark","autoClose","id","sort","caretHtml"],function(e){angular.isDefined(n[e])&&(s[e]=n[e])}),"select"===t[0].nodeName.toLowerCase()){var l=t;l.css("display","none"),t=angular.element('<button type="button" class="btn btn-default"></button>'),l.after(t)}var u=o(n.bsOptions),c=a(t,r,s),d=u.$match[7].replace(/\|.+/,"").trim();e.$watch(d,function(){u.valuesFn(e,r).then(function(e){c.update(e),r.$render()})},!0),e.$watch(n.ngModel,function(){c.$updateActiveIndex(),r.$render()},!0),r.$render=function(){var e,n;s.multiple&&angular.isArray(r.$modelValue)?(e=r.$modelValue.map(function(e){return n=c.$getIndex(e),angular.isDefined(n)?c.$scope.$matches[n].label:!1}).filter(angular.isDefined),e=e.length>(s.maxLength||i.maxLength)?e.length+" "+(s.maxLengthHtml||i.maxLengthHtml):e.join(", ")):(n=c.$getIndex(r.$modelValue),e=angular.isDefined(n)?c.$scope.$matches[n].label:!1),t.html((e?e:s.placeholder)+(s.caretHtml?s.caretHtml:i.caretHtml))},s.multiple&&(r.$isEmpty=function(e){return!e||0===e.length}),e.$on("$destroy",function(){c&&c.destroy(),s=null,c=null})}}}]),angular.module("mgcrea.ngStrap.tab",[]).provider("$tab",function(){var e=this.defaults={animation:"am-fade",template:"tab/tab.tpl.html",navClass:"nav-tabs",activeClass:"active"},t=this.controller=function(t,n,a){var o=this;o.$options=angular.copy(e),angular.forEach(["animation","navClass","activeClass"],function(e){angular.isDefined(a[e])&&(o.$options[e]=a[e])}),t.$navClass=o.$options.navClass,t.$activeClass=o.$options.activeClass,o.$panes=t.$panes=[],o.$activePaneChangeListeners=o.$viewChangeListeners=[],o.$push=function(e){o.$panes.push(e)},o.$remove=function(e){var t=o.$panes.indexOf(e),n=o.$panes.$active;o.$panes.splice(t,1),n>t?n--:t===n&&n===o.$panes.length&&n--,o.$setActive(n)},o.$panes.$active=0,o.$setActive=t.$setActive=function(e){o.$panes.$active=e,o.$activePaneChangeListeners.forEach(function(e){e()})}};this.$get=function(){var n={};return n.defaults=e,n.controller=t,n}}).directive("bsTabs",["$window","$animate","$tab","$parse",function(e,t,n,a){var o=n.defaults;return{require:["?ngModel","bsTabs"],transclude:!0,scope:!0,controller:["$scope","$element","$attrs",n.controller],templateUrl:function(e,t){return t.template||o.template},link:function(e,t,n,o){var i=o[0],r=o[1];if(i&&(console.warn("Usage of ngModel is deprecated, please use bsActivePane instead!"),r.$activePaneChangeListeners.push(function(){i.$setViewValue(r.$panes.$active)}),i.$formatters.push(function(e){return r.$setActive(1*e),e})),n.bsActivePane){var s=a(n.bsActivePane);r.$activePaneChangeListeners.push(function(){s.assign(e,r.$panes.$active)}),e.$watch(n.bsActivePane,function(e){r.$setActive(1*e)},!0)}}}}]).directive("bsPane",["$window","$animate","$sce",function(e,t,n){return{require:["^?ngModel","^bsTabs"],scope:!0,link:function(e,a,o,i){function r(){var n=s.$panes.indexOf(e),o=s.$panes.$active;t[n===o?"addClass":"removeClass"](a,s.$options.activeClass)}var s=(i[0],i[1]);a.addClass("tab-pane"),o.$observe("title",function(t){e.title=n.trustAsHtml(t)}),s.$options.animation&&a.addClass(s.$options.animation),o.$observe("disabled",function(t){e.disabled=e.$eval(t)}),s.$push(e),e.$on("$destroy",function(){s.$remove(e)}),s.$activePaneChangeListeners.push(function(){r()}),r()}}}]),angular.module("mgcrea.ngStrap.timepicker",["mgcrea.ngStrap.helpers.dateParser","mgcrea.ngStrap.helpers.dateFormatter","mgcrea.ngStrap.tooltip"]).provider("$timepicker",function(){var e=this.defaults={animation:"am-fade",prefixClass:"timepicker",placement:"bottom-left",template:"timepicker/timepicker.tpl.html",trigger:"focus",container:!1,keyboard:!0,html:!1,delay:0,useNative:!0,timeType:"date",timeFormat:"shortTime",timezone:null,modelTimeFormat:null,autoclose:!1,minTime:-1/0,maxTime:+1/0,length:5,hourStep:1,minuteStep:5,roundDisplay:!1,iconUp:"glyphicon glyphicon-chevron-up",iconDown:"glyphicon glyphicon-chevron-down",arrowBehavior:"pager"};this.$get=["$window","$document","$rootScope","$sce","$dateFormatter","$tooltip","$timeout",function(t,n,a,o,i,r,s){function l(t,n,a){function o(e){var t=6e4*g.minuteStep;return new Date(Math.floor(e.getTime()/t)*t)}function l(e,n){if(t[0].createTextRange){var a=t[0].createTextRange();a.collapse(!0),a.moveStart("character",e),a.moveEnd("character",n),a.select()}else t[0].setSelectionRange?t[0].setSelectionRange(e,n):angular.isUndefined(t[0].selectionStart)&&(t[0].selectionStart=e,t[0].selectionEnd=n)}function d(){t[0].focus()}var f=r(t,angular.extend({},e,a)),p=a.scope,g=f.$options,m=f.$scope,$=g.lang,h=function(e,t,n){return i.formatDate(e,t,$,n)},v=0,y=g.roundDisplay?o(new Date):new Date,w=n.$dateValue||y,b={hour:w.getHours(),meridian:w.getHours()<12,minute:w.getMinutes(),second:w.getSeconds(),millisecond:w.getMilliseconds()},D=i.getDatetimeFormat(g.timeFormat,$),k=i.hoursFormat(D),S=i.timeSeparator(D),x=i.minutesFormat(D),T=i.showAM(D);m.$iconUp=g.iconUp,m.$iconDown=g.iconDown,m.$select=function(e,t){f.select(e,t)},m.$moveIndex=function(e,t){f.$moveIndex(e,t)},m.$switchMeridian=function(e){f.switchMeridian(e)},f.update=function(e){angular.isDate(e)&&!isNaN(e.getTime())?(f.$date=e,angular.extend(b,{hour:e.getHours(),minute:e.getMinutes(),second:e.getSeconds(),millisecond:e.getMilliseconds()}),f.$build()):f.$isBuilt||f.$build()},f.select=function(e,t,a){(!n.$dateValue||isNaN(n.$dateValue.getTime()))&&(n.$dateValue=new Date(1970,0,1)),angular.isDate(e)||(e=new Date(e)),0===t?n.$dateValue.setHours(e.getHours()):1===t&&n.$dateValue.setMinutes(e.getMinutes()),n.$setViewValue(angular.copy(n.$dateValue)),n.$render(),g.autoclose&&!a&&s(function(){f.hide(!0)})},f.switchMeridian=function(e){if(n.$dateValue&&!isNaN(n.$dateValue.getTime())){var t=(e||n.$dateValue).getHours();n.$dateValue.setHours(12>t?t+12:t-12),n.$setViewValue(angular.copy(n.$dateValue)),n.$render()}},f.$build=function(){var e,t,n=m.midIndex=parseInt(g.length/2,10),a=[];for(e=0;e<g.length;e++)t=new Date(1970,0,1,b.hour-(n-e)*g.hourStep),a.push({date:t,label:h(t,k),selected:f.$date&&f.$isSelected(t,0),disabled:f.$isDisabled(t,0)});var o,i=[];for(e=0;e<g.length;e++)o=new Date(1970,0,1,0,b.minute-(n-e)*g.minuteStep),i.push({date:o,label:h(o,x),selected:f.$date&&f.$isSelected(o,1),disabled:f.$isDisabled(o,1)});var r=[];for(e=0;e<g.length;e++)r.push([a[e],i[e]]);m.rows=r,m.showAM=T,m.isAM=(f.$date||a[n].date).getHours()<12,m.timeSeparator=S,f.$isBuilt=!0},f.$isSelected=function(e,t){return f.$date?0===t?e.getHours()===f.$date.getHours():1===t?e.getMinutes()===f.$date.getMinutes():void 0:!1},f.$isDisabled=function(e,t){var n;return 0===t?n=e.getTime()+6e4*b.minute:1===t&&(n=e.getTime()+36e5*b.hour),n<1*g.minTime||n>1*g.maxTime},m.$arrowAction=function(e,t){"picker"===g.arrowBehavior?f.$setTimeByStep(e,t):f.$moveIndex(e,t)},f.$setTimeByStep=function(e,t){{var n=new Date(f.$date),a=n.getHours(),o=(h(n,k).length,n.getMinutes());h(n,x).length}0===t?n.setHours(a-parseInt(g.hourStep,10)*e):n.setMinutes(o-parseInt(g.minuteStep,10)*e),f.select(n,t,!0)},f.$moveIndex=function(e,t){var n;0===t?(n=new Date(1970,0,1,b.hour+e*g.length,b.minute),angular.extend(b,{hour:n.getHours()})):1===t&&(n=new Date(1970,0,1,b.hour,b.minute+e*g.length*g.minuteStep),angular.extend(b,{minute:n.getMinutes()})),f.$build()},f.$onMouseDown=function(e){if("input"!==e.target.nodeName.toLowerCase()&&e.preventDefault(),e.stopPropagation(),c){var t=angular.element(e.target);"button"!==t[0].nodeName.toLowerCase()&&(t=t.parent()),t.triggerHandler("click")}},f.$onKeyDown=function(e){if(/(38|37|39|40|13)/.test(e.keyCode)&&!e.shiftKey&&!e.altKey){if(e.preventDefault(),e.stopPropagation(),13===e.keyCode)return f.hide(!0);var t=new Date(f.$date),n=t.getHours(),a=h(t,k).length,o=t.getMinutes(),i=h(t,x).length,r=/(37|39)/.test(e.keyCode),s=2+1*T;r&&(37===e.keyCode?v=1>v?s-1:v-1:39===e.keyCode&&(v=s-1>v?v+1:0));var u=[0,a];0===v?(38===e.keyCode?t.setHours(n-parseInt(g.hourStep,10)):40===e.keyCode&&t.setHours(n+parseInt(g.hourStep,10)),a=h(t,k).length,u=[0,a]):1===v?(38===e.keyCode?t.setMinutes(o-parseInt(g.minuteStep,10)):40===e.keyCode&&t.setMinutes(o+parseInt(g.minuteStep,10)),i=h(t,x).length,u=[a+1,a+1+i]):2===v&&(r||f.switchMeridian(),u=[a+1+i+1,a+1+i+3]),f.select(t,v,!0),l(u[0],u[1]),p.$digest()}};var C=f.init;f.init=function(){return u&&g.useNative?(t.prop("type","time"),void t.css("-webkit-appearance","textfield")):(c&&(t.prop("type","text"),t.attr("readonly","true"),t.on("click",d)),void C())};var M=f.destroy;f.destroy=function(){u&&g.useNative&&t.off("click",d),M()};var E=f.show;f.show=function(){E(),s(function(){f.$element.on(c?"touchstart":"mousedown",f.$onMouseDown),g.keyboard&&t.on("keydown",f.$onKeyDown)},0,!1)};var A=f.hide;return f.hide=function(e){f.$isShown&&(f.$element.off(c?"touchstart":"mousedown",f.$onMouseDown),g.keyboard&&t.off("keydown",f.$onKeyDown),A(e))},f}var u=(angular.element(t.document.body),/(ip(a|o)d|iphone|android)/gi.test(t.navigator.userAgent)),c="createTouch"in t.document&&u;return e.lang||(e.lang=i.getDefaultLocale()),l.defaults=e,l}]}).directive("bsTimepicker",["$window","$parse","$q","$dateFormatter","$dateParser","$timepicker",function(e,t,n,a,o,i){{var r=i.defaults,s=/(ip(a|o)d|iphone|android)/gi.test(e.navigator.userAgent);e.requestAnimationFrame||e.setTimeout}return{restrict:"EAC",require:"ngModel",link:function(e,t,n,l){function u(e){if(angular.isDate(e)){var t=isNaN(d.minTime)||new Date(e.getTime()).setFullYear(1970,0,1)>=d.minTime,n=isNaN(d.maxTime)||new Date(e.getTime()).setFullYear(1970,0,1)<=d.maxTime,a=t&&n;l.$setValidity("date",a),l.$setValidity("min",t),l.$setValidity("max",n),a&&(l.$dateValue=e)}}function c(){return!l.$dateValue||isNaN(l.$dateValue.getTime())?"":m(l.$dateValue,d.timeFormat)}var d={scope:e,controller:l};angular.forEach(["placement","container","delay","trigger","keyboard","html","animation","template","autoclose","timeType","timeFormat","timezone","modelTimeFormat","useNative","hourStep","minuteStep","length","arrowBehavior","iconUp","iconDown","id"],function(e){angular.isDefined(n[e])&&(d[e]=n[e])});var f=/^(false|0|)$/;angular.forEach(["roundDisplay"],function(e){angular.isDefined(n[e])&&(d[e]=!f.test(n[e]))}),n.bsShow&&e.$watch(n.bsShow,function(e){p&&angular.isDefined(e)&&(angular.isString(e)&&(e=!!e.match(/true|,?(timepicker),?/i)),e===!0?p.show():p.hide())}),s&&(d.useNative||r.useNative)&&(d.timeFormat="HH:mm");var p=i(t,l,d);d=p.$options;var g=d.lang,m=function(e,t,n){return a.formatDate(e,t,g,n)},$=o({format:d.timeFormat,lang:g});angular.forEach(["minTime","maxTime"],function(e){angular.isDefined(n[e])&&n.$observe(e,function(t){p.$options[e]=$.getTimeForAttribute(e,t),!isNaN(p.$options[e])&&p.$build(),u(l.$dateValue)})}),e.$watch(n.ngModel,function(){p.update(l.$dateValue)},!0),l.$parsers.unshift(function(e){var t;if(!e)return l.$setValidity("date",!0),null;var n=angular.isDate(e)?e:$.parse(e,l.$dateValue);return!n||isNaN(n.getTime())?void l.$setValidity("date",!1):(u(n),"string"===d.timeType?(t=$.timezoneOffsetAdjust(n,d.timezone,!0),m(t,d.modelTimeFormat||d.timeFormat)):(t=$.timezoneOffsetAdjust(l.$dateValue,d.timezone,!0),"number"===d.timeType?t.getTime():"unix"===d.timeType?t.getTime()/1e3:"iso"===d.timeType?t.toISOString():new Date(t)))}),l.$formatters.push(function(e){var t;return t=angular.isUndefined(e)||null===e?0/0:angular.isDate(e)?e:"string"===d.timeType?$.parse(e,null,d.modelTimeFormat):new Date("unix"===d.timeType?1e3*e:e),l.$dateValue=$.timezoneOffsetAdjust(t,d.timezone),c()}),l.$render=function(){t.val(c())},e.$on("$destroy",function(){p&&p.destroy(),d=null,p=null})}}}]),angular.module("mgcrea.ngStrap.typeahead",["mgcrea.ngStrap.tooltip","mgcrea.ngStrap.helpers.parseOptions"]).provider("$typeahead",function(){var e=this.defaults={animation:"am-fade",prefixClass:"typeahead",prefixEvent:"$typeahead",placement:"bottom-left",template:"typeahead/typeahead.tpl.html",trigger:"focus",container:!1,keyboard:!0,html:!1,delay:0,minLength:1,filter:"filter",limit:6,autoSelect:!1,comparator:""};this.$get=["$window","$rootScope","$tooltip","$timeout",function(t,n,a,o){function i(t,n,i){var r={},s=angular.extend({},e,i);r=a(t,s);var l=i.scope,u=r.$scope;u.$resetMatches=function(){u.$matches=[],u.$activeIndex=s.autoSelect?0:-1},u.$resetMatches(),u.$activate=function(e){u.$$postDigest(function(){r.activate(e)})},u.$select=function(e){u.$$postDigest(function(){r.select(e)})},u.$isVisible=function(){return r.$isVisible()},r.update=function(e){u.$matches=e,u.$activeIndex>=e.length&&(u.$activeIndex=s.autoSelect?0:-1),/^(bottom|bottom-left|bottom-right)$/.test(s.placement)||o(r.$applyPlacement)},r.activate=function(e){u.$activeIndex=e},r.select=function(e){var t=u.$matches[e].value;n.$setViewValue(t),n.$render(),u.$resetMatches(),l&&l.$digest(),u.$emit(s.prefixEvent+".select",t,e,r)},r.$isVisible=function(){return s.minLength&&n?u.$matches.length&&angular.isString(n.$viewValue)&&n.$viewValue.length>=s.minLength:!!u.$matches.length},r.$getIndex=function(e){var t=u.$matches.length,n=t;if(t){for(n=t;n--&&u.$matches[n].value!==e;);if(!(0>n))return n}},r.$onMouseDown=function(e){e.preventDefault(),e.stopPropagation()},r.$onKeyDown=function(e){/(38|40|13)/.test(e.keyCode)&&(r.$isVisible()&&(e.preventDefault(),e.stopPropagation()),13===e.keyCode&&u.$matches.length?r.select(u.$activeIndex):38===e.keyCode&&u.$activeIndex>0?u.$activeIndex--:40===e.keyCode&&u.$activeIndex<u.$matches.length-1?u.$activeIndex++:angular.isUndefined(u.$activeIndex)&&(u.$activeIndex=0),u.$digest())};var c=r.show;r.show=function(){c(),o(function(){r.$element.on("mousedown",r.$onMouseDown),s.keyboard&&t.on("keydown",r.$onKeyDown)},0,!1)};var d=r.hide;return r.hide=function(){r.$element.off("mousedown",r.$onMouseDown),s.keyboard&&t.off("keydown",r.$onKeyDown),s.autoSelect||r.activate(-1),d()},r}angular.element(t.document.body);return i.defaults=e,i}]}).directive("bsTypeahead",["$window","$parse","$q","$typeahead","$parseOptions",function(e,t,a,o,i){var r=o.defaults;return{restrict:"EAC",require:"ngModel",link:function(e,t,a,s){var l={scope:e};angular.forEach(["placement","container","delay","trigger","keyboard","html","animation","template","filter","limit","minLength","watchOptions","selectMode","autoSelect","comparator","id"],function(e){angular.isDefined(a[e])&&(l[e]=a[e])}),t.attr("autocomplete","off");var u=l.filter||r.filter,c=l.limit||r.limit,d=l.comparator||r.comparator,f=a.bsOptions;u&&(f+=" | "+u+":$viewValue"),d&&(f+=":"+d),c&&(f+=" | limitTo:"+c);var p=i(f),g=o(t,s,l);if(l.watchOptions){var m=p.$match[7].replace(/\|.+/,"").replace(/\(.*\)/g,"").trim();e.$watch(m,function(){p.valuesFn(e,s).then(function(e){g.update(e),s.$render()})},!0)}e.$watch(a.ngModel,function(t){e.$modelValue=t,p.valuesFn(e,s).then(function(e){if(l.selectMode&&!e.length&&t.length>0)return void s.$setViewValue(s.$viewValue.substring(0,s.$viewValue.length-1));e.length>c&&(e=e.slice(0,c));var n=g.$isVisible();n&&g.update(e),(1!==e.length||e[0].value!==t)&&(!n&&g.update(e),s.$render())})}),s.$formatters.push(function(e){var t=p.displayValue(e);return t===n?"":t}),s.$render=function(){if(s.$isEmpty(s.$viewValue))return t.val("");var e=g.$getIndex(s.$modelValue),n=angular.isDefined(e)?g.$scope.$matches[e].label:s.$viewValue;n=angular.isObject(n)?p.displayValue(n):n,t.val(n?n.toString().replace(/<(?:.|\n)*?>/gm,"").trim():"")},e.$on("$destroy",function(){g&&g.destroy(),l=null,g=null})}}}]),angular.module("mgcrea.ngStrap.tooltip",["mgcrea.ngStrap.helpers.dimensions"]).provider("$tooltip",function(){var e=this.defaults={animation:"am-fade",customClass:"",prefixClass:"tooltip",prefixEvent:"tooltip",container:!1,target:!1,placement:"top",template:"tooltip/tooltip.tpl.html",contentTemplate:!1,trigger:"hover focus",keyboard:!1,html:!1,show:!1,title:"",type:"",delay:0,autoClose:!1,bsEnabled:!0,viewport:{selector:"body",padding:0}};this.$get=["$window","$rootScope","$compile","$q","$templateCache","$http","$animate","$sce","dimensions","$$rAF","$timeout",function(n,a,o,i,r,s,l,u,c,d,f){function p(i,r){function s(){N.$emit(H.prefixEvent+".show",P)}function p(){if(N.$emit(H.prefixEvent+".hide",P),z===B){if(W&&"focus"===H.trigger)return i[0].blur();O()}}function b(){var e=H.trigger.split(" ");angular.forEach(e,function(e){"click"===e?i.on("click",P.toggle):"manual"!==e&&(i.on("hover"===e?"mouseenter":"focus",P.enter),i.on("hover"===e?"mouseleave":"blur",P.leave),"button"===I&&"hover"!==e&&i.on(v?"touchstart":"mousedown",P.$onFocusElementMouseDown))
})}function D(){for(var e=H.trigger.split(" "),t=e.length;t--;){var n=e[t];"click"===n?i.off("click",P.toggle):"manual"!==n&&(i.off("hover"===n?"mouseenter":"focus",P.enter),i.off("hover"===n?"mouseleave":"blur",P.leave),"button"===I&&"hover"!==n&&i.off(v?"touchstart":"mousedown",P.$onFocusElementMouseDown))}}function k(){"focus"!==H.trigger?z.on("keyup",P.$onKeyUp):i.on("keyup",P.$onFocusKeyUp)}function S(){"focus"!==H.trigger?z.off("keyup",P.$onKeyUp):i.off("keyup",P.$onFocusKeyUp)}function x(){f(function(){z.on("click",C),w.on("click",P.hide),_=!0},0,!1)}function T(){_&&(z.off("click",C),w.off("click",P.hide),_=!1)}function C(e){e.stopPropagation()}function M(e){e=e||H.target||i;var a=e[0],o="BODY"===a.tagName,r=a.getBoundingClientRect(),s={};for(var l in r)s[l]=r[l];null===s.width&&(s=angular.extend({},s,{width:r.right-r.left,height:r.bottom-r.top}));var u=o?{top:0,left:0}:c.offset(a),d={scroll:o?t.documentElement.scrollTop||t.body.scrollTop:e.prop("scrollTop")||0},f=o?{width:t.documentElement.clientWidth,height:n.innerHeight}:null;return angular.extend({},s,d,f,u)}function E(e,t,n,a){var o,i=e.split("-");switch(i[0]){case"right":o={top:t.top+t.height/2-a/2,left:t.left+t.width};break;case"bottom":o={top:t.top+t.height,left:t.left+t.width/2-n/2};break;case"left":o={top:t.top+t.height/2-a/2,left:t.left-n};break;default:o={top:t.top-a,left:t.left+t.width/2-n/2}}if(!i[1])return o;if("top"===i[0]||"bottom"===i[0])switch(i[1]){case"left":o.left=t.left;break;case"right":o.left=t.left+t.width-n}else if("left"===i[0]||"right"===i[0])switch(i[1]){case"top":o.top=t.top-a;break;case"bottom":o.top=t.top+t.height}return o}function A(e,t){var n=z[0],a=n.offsetWidth,o=n.offsetHeight,i=parseInt(c.css(n,"margin-top"),10),r=parseInt(c.css(n,"margin-left"),10);isNaN(i)&&(i=0),isNaN(r)&&(r=0),e.top=e.top+i,e.left=e.left+r,c.setOffset(n,angular.extend({using:function(e){z.css({top:Math.round(e.top)+"px",left:Math.round(e.left)+"px"})}},e),0);var s=n.offsetWidth,l=n.offsetHeight;if("top"===t&&l!==o&&(e.top=e.top+o-l),!/top-left|top-right|bottom-left|bottom-right/.test(t)){var u=F(t,e,s,l);if(u.left?e.left+=u.left:e.top+=u.top,c.setOffset(n,e),/top|right|bottom|left/.test(t)){var d=/top|bottom/.test(t),f=d?2*u.left-a+s:2*u.top-o+l,p=d?"offsetWidth":"offsetHeight";V(f,n[p],d)}}}function F(e,t,n,a){var o={top:0,left:0},i=H.viewport&&m(H.viewport.selector||H.viewport);if(!i)return o;var r=H.viewport&&H.viewport.padding||0,s=M(i);if(/right|left/.test(e)){var l=t.top-r-s.scroll,u=t.top+r-s.scroll+a;l<s.top?o.top=s.top-l:u>s.top+s.height&&(o.top=s.top+s.height-u)}else{var c=t.left-r,d=t.left+r+n;c<s.left?o.left=s.left-c:d>s.width&&(o.left=s.left+s.width-d)}return o}function V(e,t,n){var a=m(".tooltip-arrow, .arrow",z[0]);a.css(n?"left":"top",50*(1-e/t)+"%").css(n?"top":"left","")}function O(){clearTimeout(R),P.$isShown&&null!==z&&(H.autoClose&&T(),H.keyboard&&S()),j&&(j.$destroy(),j=null),z&&(z.remove(),z=P.$element=null)}var P={},I=i[0].nodeName.toLowerCase(),H=P.$options=angular.extend({},e,r);P.$promise=$(H.template);var N=P.$scope=H.scope&&H.scope.$new()||a.$new();if(H.delay&&angular.isString(H.delay)){var L=H.delay.split(",").map(parseFloat);H.delay=L.length>1?{show:L[0],hide:L[1]}:L[0]}P.$id=H.id||i.attr("id")||"",H.title&&(N.title=u.trustAsHtml(H.title)),N.$setEnabled=function(e){N.$$postDigest(function(){P.setEnabled(e)})},N.$hide=function(){N.$$postDigest(function(){P.hide()})},N.$show=function(){N.$$postDigest(function(){P.show()})},N.$toggle=function(){N.$$postDigest(function(){P.toggle()})},P.$isShown=N.$isShown=!1;var R,Y;H.contentTemplate&&(P.$promise=P.$promise.then(function(e){var t=angular.element(e);return $(H.contentTemplate).then(function(e){var n=m('[ng-bind="content"]',t[0]);return n.length||(n=m('[ng-bind="title"]',t[0])),n.removeAttr("ng-bind").html(e),t[0].outerHTML})}));var q,z,K,U,j;P.$promise.then(function(e){angular.isObject(e)&&(e=e.data),H.html&&(e=e.replace(y,'ng-bind-html="')),e=h.apply(e),K=e,q=o(e),P.init()}),P.init=function(){H.delay&&angular.isNumber(H.delay)&&(H.delay={show:H.delay,hide:H.delay}),"self"===H.container?U=i:angular.isElement(H.container)?U=H.container:H.container&&(U=m(H.container)),b(),H.target&&(H.target=angular.isElement(H.target)?H.target:m(H.target)),H.show&&N.$$postDigest(function(){"focus"===H.trigger?i[0].focus():P.show()})},P.destroy=function(){D(),O(),N.$destroy()},P.enter=function(){return clearTimeout(R),Y="in",H.delay&&H.delay.show?void(R=setTimeout(function(){"in"===Y&&P.show()},H.delay.show)):P.show()},P.show=function(){if(H.bsEnabled&&!P.$isShown){N.$emit(H.prefixEvent+".show.before",P);var e,t;H.container?(e=U,t=U[0].lastChild?angular.element(U[0].lastChild):null):(e=null,t=i),z&&O(),j=P.$scope.$new(),z=P.$element=q(j,function(){}),z.css({top:"-9999px",left:"-9999px",display:"block",visibility:"hidden"}),H.animation&&z.addClass(H.animation),H.type&&z.addClass(H.prefixClass+"-"+H.type),H.customClass&&z.addClass(H.customClass),t?t.after(z):e.prepend(z),P.$isShown=N.$isShown=!0,g(N),P.$applyPlacement();var n=l.enter(z,e,t,s);n&&n.then&&n.then(s),g(N),d(function(){z&&z.css({visibility:"visible"})}),H.keyboard&&("focus"!==H.trigger&&P.focus(),k()),H.autoClose&&x()}},P.leave=function(){return clearTimeout(R),Y="out",H.delay&&H.delay.hide?void(R=setTimeout(function(){"out"===Y&&P.hide()},H.delay.hide)):P.hide()};var W,B;P.hide=function(e){if(P.$isShown){N.$emit(H.prefixEvent+".hide.before",P),W=e,B=z;var t=l.leave(z,p);t&&t.then&&t.then(p),P.$isShown=N.$isShown=!1,g(N),H.keyboard&&null!==z&&S(),H.autoClose&&null!==z&&T()}},P.toggle=function(){P.$isShown?P.leave():P.enter()},P.focus=function(){z[0].focus()},P.setEnabled=function(e){H.bsEnabled=e},P.setViewport=function(e){H.viewport=e},P.$applyPlacement=function(){if(z){var t=H.placement,n=/\s?auto?\s?/i,a=n.test(t);a&&(t=t.replace(n,"")||e.placement),z.addClass(H.placement);var o=M(),r=z.prop("offsetWidth"),s=z.prop("offsetHeight");if(a){var l=t,u=H.container?m(H.container):i.parent(),c=M(u);l.indexOf("bottom")>=0&&o.bottom+s>c.bottom?t=l.replace("bottom","top"):l.indexOf("top")>=0&&o.top-s<c.top&&(t=l.replace("top","bottom")),("right"===l||"bottom-left"===l||"top-left"===l)&&o.right+r>c.width?t="right"===l?"left":t.replace("left","right"):("left"===l||"bottom-right"===l||"top-right"===l)&&o.left-r<c.left&&(t="left"===l?"right":t.replace("right","left")),z.removeClass(l).addClass(t)}var d=E(t,o,r,s);A(d,t)}},P.$onKeyUp=function(e){27===e.which&&P.$isShown&&(P.hide(),e.stopPropagation())},P.$onFocusKeyUp=function(e){27===e.which&&(i[0].blur(),e.stopPropagation())},P.$onFocusElementMouseDown=function(e){e.preventDefault(),e.stopPropagation(),P.$isShown?i[0].blur():i[0].focus()};var _=!1;return P}function g(e){e.$$phase||e.$root&&e.$root.$$phase||e.$digest()}function m(e,n){return angular.element((n||t).querySelectorAll(e))}function $(e){return b[e]?b[e]:b[e]=s.get(e,{cache:r}).then(function(e){return e.data})}var h=String.prototype.trim,v="createTouch"in n.document,y=/ng-bind="/gi,w=angular.element(n.document),b={};return p}]}).directive("bsTooltip",["$window","$location","$sce","$tooltip","$$rAF",function(e,t,n,a,o){return{restrict:"EAC",scope:!0,link:function(e,t,i){var r={scope:e};angular.forEach(["template","contentTemplate","placement","container","delay","trigger","keyboard","html","animation","backdropAnimation","type","customClass","id"],function(e){angular.isDefined(i[e])&&(r[e]=i[e])}),t.attr("data-target")&&(r.target=t.attr("data-target")),e.hasOwnProperty("title")||(e.title=""),i.$observe("title",function(t){if(angular.isDefined(t)||!e.hasOwnProperty("title")){var a=e.title;e.title=n.trustAsHtml(t),angular.isDefined(a)&&o(function(){s&&s.$applyPlacement()})}}),i.bsTooltip&&e.$watch(i.bsTooltip,function(t,n){angular.isObject(t)?angular.extend(e,t):e.title=t,angular.isDefined(n)&&o(function(){s&&s.$applyPlacement()})},!0),i.bsShow&&e.$watch(i.bsShow,function(e){s&&angular.isDefined(e)&&(angular.isString(e)&&(e=!!e.match(/true|,?(tooltip),?/i)),e===!0?s.show():s.hide())}),i.bsEnabled&&e.$watch(i.bsEnabled,function(e){s&&angular.isDefined(e)&&(angular.isString(e)&&(e=!!e.match(/true|1|,?(tooltip),?/i)),s.setEnabled(e===!1?!1:!0))}),i.viewport&&e.$watch(i.viewport,function(e){s&&angular.isDefined(e)&&s.setViewport(e)});var s=a(t,r);e.$on("$destroy",function(){s&&s.destroy(),r=null,s=null})}}}])}(window,document);
},{}],10:[function(require,module,exports){
/**
 * angular-strap
 * @version v2.2.1 - 2015-03-10
 * @link http://mgcrea.github.io/angular-strap
 * @author Olivier Louvignes (olivier@mg-crea.com)
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
!function(){"use strict";angular.module("mgcrea.ngStrap.aside").run(["$templateCache",function(t){t.put("aside/aside.tpl.html",'<div class="aside" tabindex="-1" role="dialog"><div class="aside-dialog"><div class="aside-content"><div class="aside-header" ng-show="title"><button type="button" class="close" ng-click="$hide()">&times;</button><h4 class="aside-title" ng-bind="title"></h4></div><div class="aside-body" ng-bind="content"></div><div class="aside-footer"><button type="button" class="btn btn-default" ng-click="$hide()">Close</button></div></div></div></div>')}]),angular.module("mgcrea.ngStrap.alert").run(["$templateCache",function(t){t.put("alert/alert.tpl.html",'<div class="alert" ng-class="[type ? \'alert-\' + type : null]"><button type="button" class="close" ng-if="dismissable" ng-click="$hide()">&times;</button> <strong ng-bind="title"></strong>&nbsp;<span ng-bind-html="content"></span></div>')}]),angular.module("mgcrea.ngStrap.datepicker").run(["$templateCache",function(t){t.put("datepicker/datepicker.tpl.html",'<div class="dropdown-menu datepicker" ng-class="\'datepicker-mode-\' + $mode" style="max-width: 320px"><table style="table-layout: fixed; height: 100%; width: 100%"><thead><tr class="text-center"><th><button tabindex="-1" type="button" class="btn btn-default pull-left" ng-click="$selectPane(-1)"><i class="{{$iconLeft}}"></i></button></th><th colspan="{{ rows[0].length - 2 }}"><button tabindex="-1" type="button" class="btn btn-default btn-block text-strong" ng-click="$toggleMode()"><strong style="text-transform: capitalize" ng-bind="title"></strong></button></th><th><button tabindex="-1" type="button" class="btn btn-default pull-right" ng-click="$selectPane(+1)"><i class="{{$iconRight}}"></i></button></th></tr><tr ng-show="showLabels" ng-bind-html="labels"></tr></thead><tbody><tr ng-repeat="(i, row) in rows" height="{{ 100 / rows.length }}%"><td class="text-center" ng-repeat="(j, el) in row"><button tabindex="-1" type="button" class="btn btn-default" style="width: 100%" ng-class="{\'btn-primary\': el.selected, \'btn-info btn-today\': el.isToday && !el.selected}" ng-click="$select(el.date)" ng-disabled="el.disabled"><span ng-class="{\'text-muted\': el.muted}" ng-bind="el.label"></span></button></td></tr></tbody></table></div>')}]),angular.module("mgcrea.ngStrap.dropdown").run(["$templateCache",function(t){t.put("dropdown/dropdown.tpl.html",'<ul tabindex="-1" class="dropdown-menu" role="menu"><li role="presentation" ng-class="{divider: item.divider}" ng-repeat="item in content"><a role="menuitem" tabindex="-1" ng-href="{{item.href}}" ng-if="!item.divider && item.href" target="{{item.target || \'\'}}" ng-bind="item.text"></a> <a role="menuitem" tabindex="-1" href="javascript:void(0)" ng-if="!item.divider && item.click" ng-click="$eval(item.click);$hide()" ng-bind="item.text"></a></li></ul>')}]),angular.module("mgcrea.ngStrap.modal").run(["$templateCache",function(t){t.put("modal/modal.tpl.html",'<div class="modal" tabindex="-1" role="dialog" aria-hidden="true"><div class="modal-dialog"><div class="modal-content"><div class="modal-header" ng-show="title"><button type="button" class="close" aria-label="Close" ng-click="$hide()"><span aria-hidden="true">&times;</span></button><h4 class="modal-title" ng-bind="title"></h4></div><div class="modal-body" ng-bind="content"></div><div class="modal-footer"><button type="button" class="btn btn-default" ng-click="$hide()">Close</button></div></div></div></div>')}]),angular.module("mgcrea.ngStrap.popover").run(["$templateCache",function(t){t.put("popover/popover.tpl.html",'<div class="popover"><div class="arrow"></div><h3 class="popover-title" ng-bind="title" ng-show="title"></h3><div class="popover-content" ng-bind="content"></div></div>')}]),angular.module("mgcrea.ngStrap.select").run(["$templateCache",function(t){t.put("select/select.tpl.html",'<ul tabindex="-1" class="select dropdown-menu" ng-show="$isVisible()" role="select"><li ng-if="$showAllNoneButtons"><div class="btn-group" style="margin-bottom: 5px; margin-left: 5px"><button type="button" class="btn btn-default btn-xs" ng-click="$selectAll()">{{$allText}}</button> <button type="button" class="btn btn-default btn-xs" ng-click="$selectNone()">{{$noneText}}</button></div></li><li role="presentation" ng-repeat="match in $matches" ng-class="{active: $isActive($index)}"><a style="cursor: default" role="menuitem" tabindex="-1" ng-click="$select($index, $event)"><i class="{{$iconCheckmark}} pull-right" ng-if="$isMultiple && $isActive($index)"></i> <span ng-bind="match.label"></span></a></li></ul>')}]),angular.module("mgcrea.ngStrap.tab").run(["$templateCache",function(t){t.put("tab/tab.tpl.html",'<ul class="nav" ng-class="$navClass" role="tablist"><li role="presentation" ng-repeat="$pane in $panes track by $index" ng-class="[ $index == $panes.$active ? $activeClass : \'\', $pane.disabled ? \'disabled\' : \'\' ]"><a role="tab" data-toggle="tab" ng-click="!$pane.disabled && $setActive($index)" data-index="{{ $index }}" ng-bind-html="$pane.title" aria-controls="$pane.title"></a></li></ul><div ng-transclude class="tab-content"></div>')}]),angular.module("mgcrea.ngStrap.timepicker").run(["$templateCache",function(t){t.put("timepicker/timepicker.tpl.html",'<div class="dropdown-menu timepicker" style="min-width: 0px;width: auto"><table height="100%"><thead><tr class="text-center"><th><button tabindex="-1" type="button" class="btn btn-default pull-left" ng-click="$arrowAction(-1, 0)"><i class="{{ $iconUp }}"></i></button></th><th>&nbsp;</th><th><button tabindex="-1" type="button" class="btn btn-default pull-left" ng-click="$arrowAction(-1, 1)"><i class="{{ $iconUp }}"></i></button></th></tr></thead><tbody><tr ng-repeat="(i, row) in rows"><td class="text-center"><button tabindex="-1" style="width: 100%" type="button" class="btn btn-default" ng-class="{\'btn-primary\': row[0].selected}" ng-click="$select(row[0].date, 0)" ng-disabled="row[0].disabled"><span ng-class="{\'text-muted\': row[0].muted}" ng-bind="row[0].label"></span></button></td><td><span ng-bind="i == midIndex ? timeSeparator : \' \'"></span></td><td class="text-center"><button tabindex="-1" ng-if="row[1].date" style="width: 100%" type="button" class="btn btn-default" ng-class="{\'btn-primary\': row[1].selected}" ng-click="$select(row[1].date, 1)" ng-disabled="row[1].disabled"><span ng-class="{\'text-muted\': row[1].muted}" ng-bind="row[1].label"></span></button></td><td ng-if="showAM">&nbsp;</td><td ng-if="showAM"><button tabindex="-1" ng-show="i == midIndex - !isAM * 1" style="width: 100%" type="button" ng-class="{\'btn-primary\': !!isAM}" class="btn btn-default" ng-click="$switchMeridian()" ng-disabled="el.disabled">AM</button> <button tabindex="-1" ng-show="i == midIndex + 1 - !isAM * 1" style="width: 100%" type="button" ng-class="{\'btn-primary\': !isAM}" class="btn btn-default" ng-click="$switchMeridian()" ng-disabled="el.disabled">PM</button></td></tr></tbody><tfoot><tr class="text-center"><th><button tabindex="-1" type="button" class="btn btn-default pull-left" ng-click="$arrowAction(1, 0)"><i class="{{ $iconDown }}"></i></button></th><th>&nbsp;</th><th><button tabindex="-1" type="button" class="btn btn-default pull-left" ng-click="$arrowAction(1, 1)"><i class="{{ $iconDown }}"></i></button></th></tr></tfoot></table></div>')}]),angular.module("mgcrea.ngStrap.typeahead").run(["$templateCache",function(t){t.put("typeahead/typeahead.tpl.html",'<ul tabindex="-1" class="typeahead dropdown-menu" ng-show="$isVisible()" role="select"><li role="presentation" ng-repeat="match in $matches" ng-class="{active: $index == $activeIndex}"><a role="menuitem" tabindex="-1" ng-click="$select($index, $event)" ng-bind="match.label"></a></li></ul>')}]),angular.module("mgcrea.ngStrap.tooltip").run(["$templateCache",function(t){t.put("tooltip/tooltip.tpl.html",'<div class="tooltip in" ng-show="title"><div class="tooltip-arrow"></div><div class="tooltip-inner" ng-bind="title"></div></div>')}])}(window,document);
},{}],11:[function(require,module,exports){
(function (global){
//! moment.js
//! version : 2.9.0
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
(function(a){function b(a,b,c){switch(arguments.length){case 2:return null!=a?a:b;case 3:return null!=a?a:null!=b?b:c;default:throw new Error("Implement me")}}function c(a,b){return Bb.call(a,b)}function d(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1}}function e(a){vb.suppressDeprecationWarnings===!1&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+a)}function f(a,b){var c=!0;return o(function(){return c&&(e(a),c=!1),b.apply(this,arguments)},b)}function g(a,b){sc[a]||(e(b),sc[a]=!0)}function h(a,b){return function(c){return r(a.call(this,c),b)}}function i(a,b){return function(c){return this.localeData().ordinal(a.call(this,c),b)}}function j(a,b){var c,d,e=12*(b.year()-a.year())+(b.month()-a.month()),f=a.clone().add(e,"months");return 0>b-f?(c=a.clone().add(e-1,"months"),d=(b-f)/(f-c)):(c=a.clone().add(e+1,"months"),d=(b-f)/(c-f)),-(e+d)}function k(a,b,c){var d;return null==c?b:null!=a.meridiemHour?a.meridiemHour(b,c):null!=a.isPM?(d=a.isPM(c),d&&12>b&&(b+=12),d||12!==b||(b=0),b):b}function l(){}function m(a,b){b!==!1&&H(a),p(this,a),this._d=new Date(+a._d),uc===!1&&(uc=!0,vb.updateOffset(this),uc=!1)}function n(a){var b=A(a),c=b.year||0,d=b.quarter||0,e=b.month||0,f=b.week||0,g=b.day||0,h=b.hour||0,i=b.minute||0,j=b.second||0,k=b.millisecond||0;this._milliseconds=+k+1e3*j+6e4*i+36e5*h,this._days=+g+7*f,this._months=+e+3*d+12*c,this._data={},this._locale=vb.localeData(),this._bubble()}function o(a,b){for(var d in b)c(b,d)&&(a[d]=b[d]);return c(b,"toString")&&(a.toString=b.toString),c(b,"valueOf")&&(a.valueOf=b.valueOf),a}function p(a,b){var c,d,e;if("undefined"!=typeof b._isAMomentObject&&(a._isAMomentObject=b._isAMomentObject),"undefined"!=typeof b._i&&(a._i=b._i),"undefined"!=typeof b._f&&(a._f=b._f),"undefined"!=typeof b._l&&(a._l=b._l),"undefined"!=typeof b._strict&&(a._strict=b._strict),"undefined"!=typeof b._tzm&&(a._tzm=b._tzm),"undefined"!=typeof b._isUTC&&(a._isUTC=b._isUTC),"undefined"!=typeof b._offset&&(a._offset=b._offset),"undefined"!=typeof b._pf&&(a._pf=b._pf),"undefined"!=typeof b._locale&&(a._locale=b._locale),Kb.length>0)for(c in Kb)d=Kb[c],e=b[d],"undefined"!=typeof e&&(a[d]=e);return a}function q(a){return 0>a?Math.ceil(a):Math.floor(a)}function r(a,b,c){for(var d=""+Math.abs(a),e=a>=0;d.length<b;)d="0"+d;return(e?c?"+":"":"-")+d}function s(a,b){var c={milliseconds:0,months:0};return c.months=b.month()-a.month()+12*(b.year()-a.year()),a.clone().add(c.months,"M").isAfter(b)&&--c.months,c.milliseconds=+b-+a.clone().add(c.months,"M"),c}function t(a,b){var c;return b=M(b,a),a.isBefore(b)?c=s(a,b):(c=s(b,a),c.milliseconds=-c.milliseconds,c.months=-c.months),c}function u(a,b){return function(c,d){var e,f;return null===d||isNaN(+d)||(g(b,"moment()."+b+"(period, number) is deprecated. Please use moment()."+b+"(number, period)."),f=c,c=d,d=f),c="string"==typeof c?+c:c,e=vb.duration(c,d),v(this,e,a),this}}function v(a,b,c,d){var e=b._milliseconds,f=b._days,g=b._months;d=null==d?!0:d,e&&a._d.setTime(+a._d+e*c),f&&pb(a,"Date",ob(a,"Date")+f*c),g&&nb(a,ob(a,"Month")+g*c),d&&vb.updateOffset(a,f||g)}function w(a){return"[object Array]"===Object.prototype.toString.call(a)}function x(a){return"[object Date]"===Object.prototype.toString.call(a)||a instanceof Date}function y(a,b,c){var d,e=Math.min(a.length,b.length),f=Math.abs(a.length-b.length),g=0;for(d=0;e>d;d++)(c&&a[d]!==b[d]||!c&&C(a[d])!==C(b[d]))&&g++;return g+f}function z(a){if(a){var b=a.toLowerCase().replace(/(.)s$/,"$1");a=lc[a]||mc[b]||b}return a}function A(a){var b,d,e={};for(d in a)c(a,d)&&(b=z(d),b&&(e[b]=a[d]));return e}function B(b){var c,d;if(0===b.indexOf("week"))c=7,d="day";else{if(0!==b.indexOf("month"))return;c=12,d="month"}vb[b]=function(e,f){var g,h,i=vb._locale[b],j=[];if("number"==typeof e&&(f=e,e=a),h=function(a){var b=vb().utc().set(d,a);return i.call(vb._locale,b,e||"")},null!=f)return h(f);for(g=0;c>g;g++)j.push(h(g));return j}}function C(a){var b=+a,c=0;return 0!==b&&isFinite(b)&&(c=b>=0?Math.floor(b):Math.ceil(b)),c}function D(a,b){return new Date(Date.UTC(a,b+1,0)).getUTCDate()}function E(a,b,c){return jb(vb([a,11,31+b-c]),b,c).week}function F(a){return G(a)?366:365}function G(a){return a%4===0&&a%100!==0||a%400===0}function H(a){var b;a._a&&-2===a._pf.overflow&&(b=a._a[Db]<0||a._a[Db]>11?Db:a._a[Eb]<1||a._a[Eb]>D(a._a[Cb],a._a[Db])?Eb:a._a[Fb]<0||a._a[Fb]>24||24===a._a[Fb]&&(0!==a._a[Gb]||0!==a._a[Hb]||0!==a._a[Ib])?Fb:a._a[Gb]<0||a._a[Gb]>59?Gb:a._a[Hb]<0||a._a[Hb]>59?Hb:a._a[Ib]<0||a._a[Ib]>999?Ib:-1,a._pf._overflowDayOfYear&&(Cb>b||b>Eb)&&(b=Eb),a._pf.overflow=b)}function I(b){return null==b._isValid&&(b._isValid=!isNaN(b._d.getTime())&&b._pf.overflow<0&&!b._pf.empty&&!b._pf.invalidMonth&&!b._pf.nullInput&&!b._pf.invalidFormat&&!b._pf.userInvalidated,b._strict&&(b._isValid=b._isValid&&0===b._pf.charsLeftOver&&0===b._pf.unusedTokens.length&&b._pf.bigHour===a)),b._isValid}function J(a){return a?a.toLowerCase().replace("_","-"):a}function K(a){for(var b,c,d,e,f=0;f<a.length;){for(e=J(a[f]).split("-"),b=e.length,c=J(a[f+1]),c=c?c.split("-"):null;b>0;){if(d=L(e.slice(0,b).join("-")))return d;if(c&&c.length>=b&&y(e,c,!0)>=b-1)break;b--}f++}return null}function L(a){var b=null;if(!Jb[a]&&Lb)try{b=vb.locale(),require("./locale/"+a),vb.locale(b)}catch(c){}return Jb[a]}function M(a,b){var c,d;return b._isUTC?(c=b.clone(),d=(vb.isMoment(a)||x(a)?+a:+vb(a))-+c,c._d.setTime(+c._d+d),vb.updateOffset(c,!1),c):vb(a).local()}function N(a){return a.match(/\[[\s\S]/)?a.replace(/^\[|\]$/g,""):a.replace(/\\/g,"")}function O(a){var b,c,d=a.match(Pb);for(b=0,c=d.length;c>b;b++)d[b]=rc[d[b]]?rc[d[b]]:N(d[b]);return function(e){var f="";for(b=0;c>b;b++)f+=d[b]instanceof Function?d[b].call(e,a):d[b];return f}}function P(a,b){return a.isValid()?(b=Q(b,a.localeData()),nc[b]||(nc[b]=O(b)),nc[b](a)):a.localeData().invalidDate()}function Q(a,b){function c(a){return b.longDateFormat(a)||a}var d=5;for(Qb.lastIndex=0;d>=0&&Qb.test(a);)a=a.replace(Qb,c),Qb.lastIndex=0,d-=1;return a}function R(a,b){var c,d=b._strict;switch(a){case"Q":return _b;case"DDDD":return bc;case"YYYY":case"GGGG":case"gggg":return d?cc:Tb;case"Y":case"G":case"g":return ec;case"YYYYYY":case"YYYYY":case"GGGGG":case"ggggg":return d?dc:Ub;case"S":if(d)return _b;case"SS":if(d)return ac;case"SSS":if(d)return bc;case"DDD":return Sb;case"MMM":case"MMMM":case"dd":case"ddd":case"dddd":return Wb;case"a":case"A":return b._locale._meridiemParse;case"x":return Zb;case"X":return $b;case"Z":case"ZZ":return Xb;case"T":return Yb;case"SSSS":return Vb;case"MM":case"DD":case"YY":case"GG":case"gg":case"HH":case"hh":case"mm":case"ss":case"ww":case"WW":return d?ac:Rb;case"M":case"D":case"d":case"H":case"h":case"m":case"s":case"w":case"W":case"e":case"E":return Rb;case"Do":return d?b._locale._ordinalParse:b._locale._ordinalParseLenient;default:return c=new RegExp($(Z(a.replace("\\","")),"i"))}}function S(a){a=a||"";var b=a.match(Xb)||[],c=b[b.length-1]||[],d=(c+"").match(jc)||["-",0,0],e=+(60*d[1])+C(d[2]);return"+"===d[0]?e:-e}function T(a,b,c){var d,e=c._a;switch(a){case"Q":null!=b&&(e[Db]=3*(C(b)-1));break;case"M":case"MM":null!=b&&(e[Db]=C(b)-1);break;case"MMM":case"MMMM":d=c._locale.monthsParse(b,a,c._strict),null!=d?e[Db]=d:c._pf.invalidMonth=b;break;case"D":case"DD":null!=b&&(e[Eb]=C(b));break;case"Do":null!=b&&(e[Eb]=C(parseInt(b.match(/\d{1,2}/)[0],10)));break;case"DDD":case"DDDD":null!=b&&(c._dayOfYear=C(b));break;case"YY":e[Cb]=vb.parseTwoDigitYear(b);break;case"YYYY":case"YYYYY":case"YYYYYY":e[Cb]=C(b);break;case"a":case"A":c._meridiem=b;break;case"h":case"hh":c._pf.bigHour=!0;case"H":case"HH":e[Fb]=C(b);break;case"m":case"mm":e[Gb]=C(b);break;case"s":case"ss":e[Hb]=C(b);break;case"S":case"SS":case"SSS":case"SSSS":e[Ib]=C(1e3*("0."+b));break;case"x":c._d=new Date(C(b));break;case"X":c._d=new Date(1e3*parseFloat(b));break;case"Z":case"ZZ":c._useUTC=!0,c._tzm=S(b);break;case"dd":case"ddd":case"dddd":d=c._locale.weekdaysParse(b),null!=d?(c._w=c._w||{},c._w.d=d):c._pf.invalidWeekday=b;break;case"w":case"ww":case"W":case"WW":case"d":case"e":case"E":a=a.substr(0,1);case"gggg":case"GGGG":case"GGGGG":a=a.substr(0,2),b&&(c._w=c._w||{},c._w[a]=C(b));break;case"gg":case"GG":c._w=c._w||{},c._w[a]=vb.parseTwoDigitYear(b)}}function U(a){var c,d,e,f,g,h,i;c=a._w,null!=c.GG||null!=c.W||null!=c.E?(g=1,h=4,d=b(c.GG,a._a[Cb],jb(vb(),1,4).year),e=b(c.W,1),f=b(c.E,1)):(g=a._locale._week.dow,h=a._locale._week.doy,d=b(c.gg,a._a[Cb],jb(vb(),g,h).year),e=b(c.w,1),null!=c.d?(f=c.d,g>f&&++e):f=null!=c.e?c.e+g:g),i=kb(d,e,f,h,g),a._a[Cb]=i.year,a._dayOfYear=i.dayOfYear}function V(a){var c,d,e,f,g=[];if(!a._d){for(e=X(a),a._w&&null==a._a[Eb]&&null==a._a[Db]&&U(a),a._dayOfYear&&(f=b(a._a[Cb],e[Cb]),a._dayOfYear>F(f)&&(a._pf._overflowDayOfYear=!0),d=fb(f,0,a._dayOfYear),a._a[Db]=d.getUTCMonth(),a._a[Eb]=d.getUTCDate()),c=0;3>c&&null==a._a[c];++c)a._a[c]=g[c]=e[c];for(;7>c;c++)a._a[c]=g[c]=null==a._a[c]?2===c?1:0:a._a[c];24===a._a[Fb]&&0===a._a[Gb]&&0===a._a[Hb]&&0===a._a[Ib]&&(a._nextDay=!0,a._a[Fb]=0),a._d=(a._useUTC?fb:eb).apply(null,g),null!=a._tzm&&a._d.setUTCMinutes(a._d.getUTCMinutes()-a._tzm),a._nextDay&&(a._a[Fb]=24)}}function W(a){var b;a._d||(b=A(a._i),a._a=[b.year,b.month,b.day||b.date,b.hour,b.minute,b.second,b.millisecond],V(a))}function X(a){var b=new Date;return a._useUTC?[b.getUTCFullYear(),b.getUTCMonth(),b.getUTCDate()]:[b.getFullYear(),b.getMonth(),b.getDate()]}function Y(b){if(b._f===vb.ISO_8601)return void ab(b);b._a=[],b._pf.empty=!0;var c,d,e,f,g,h=""+b._i,i=h.length,j=0;for(e=Q(b._f,b._locale).match(Pb)||[],c=0;c<e.length;c++)f=e[c],d=(h.match(R(f,b))||[])[0],d&&(g=h.substr(0,h.indexOf(d)),g.length>0&&b._pf.unusedInput.push(g),h=h.slice(h.indexOf(d)+d.length),j+=d.length),rc[f]?(d?b._pf.empty=!1:b._pf.unusedTokens.push(f),T(f,d,b)):b._strict&&!d&&b._pf.unusedTokens.push(f);b._pf.charsLeftOver=i-j,h.length>0&&b._pf.unusedInput.push(h),b._pf.bigHour===!0&&b._a[Fb]<=12&&(b._pf.bigHour=a),b._a[Fb]=k(b._locale,b._a[Fb],b._meridiem),V(b),H(b)}function Z(a){return a.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(a,b,c,d,e){return b||c||d||e})}function $(a){return a.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function _(a){var b,c,e,f,g;if(0===a._f.length)return a._pf.invalidFormat=!0,void(a._d=new Date(0/0));for(f=0;f<a._f.length;f++)g=0,b=p({},a),null!=a._useUTC&&(b._useUTC=a._useUTC),b._pf=d(),b._f=a._f[f],Y(b),I(b)&&(g+=b._pf.charsLeftOver,g+=10*b._pf.unusedTokens.length,b._pf.score=g,(null==e||e>g)&&(e=g,c=b));o(a,c||b)}function ab(a){var b,c,d=a._i,e=fc.exec(d);if(e){for(a._pf.iso=!0,b=0,c=hc.length;c>b;b++)if(hc[b][1].exec(d)){a._f=hc[b][0]+(e[6]||" ");break}for(b=0,c=ic.length;c>b;b++)if(ic[b][1].exec(d)){a._f+=ic[b][0];break}d.match(Xb)&&(a._f+="Z"),Y(a)}else a._isValid=!1}function bb(a){ab(a),a._isValid===!1&&(delete a._isValid,vb.createFromInputFallback(a))}function cb(a,b){var c,d=[];for(c=0;c<a.length;++c)d.push(b(a[c],c));return d}function db(b){var c,d=b._i;d===a?b._d=new Date:x(d)?b._d=new Date(+d):null!==(c=Mb.exec(d))?b._d=new Date(+c[1]):"string"==typeof d?bb(b):w(d)?(b._a=cb(d.slice(0),function(a){return parseInt(a,10)}),V(b)):"object"==typeof d?W(b):"number"==typeof d?b._d=new Date(d):vb.createFromInputFallback(b)}function eb(a,b,c,d,e,f,g){var h=new Date(a,b,c,d,e,f,g);return 1970>a&&h.setFullYear(a),h}function fb(a){var b=new Date(Date.UTC.apply(null,arguments));return 1970>a&&b.setUTCFullYear(a),b}function gb(a,b){if("string"==typeof a)if(isNaN(a)){if(a=b.weekdaysParse(a),"number"!=typeof a)return null}else a=parseInt(a,10);return a}function hb(a,b,c,d,e){return e.relativeTime(b||1,!!c,a,d)}function ib(a,b,c){var d=vb.duration(a).abs(),e=Ab(d.as("s")),f=Ab(d.as("m")),g=Ab(d.as("h")),h=Ab(d.as("d")),i=Ab(d.as("M")),j=Ab(d.as("y")),k=e<oc.s&&["s",e]||1===f&&["m"]||f<oc.m&&["mm",f]||1===g&&["h"]||g<oc.h&&["hh",g]||1===h&&["d"]||h<oc.d&&["dd",h]||1===i&&["M"]||i<oc.M&&["MM",i]||1===j&&["y"]||["yy",j];return k[2]=b,k[3]=+a>0,k[4]=c,hb.apply({},k)}function jb(a,b,c){var d,e=c-b,f=c-a.day();return f>e&&(f-=7),e-7>f&&(f+=7),d=vb(a).add(f,"d"),{week:Math.ceil(d.dayOfYear()/7),year:d.year()}}function kb(a,b,c,d,e){var f,g,h=fb(a,0,1).getUTCDay();return h=0===h?7:h,c=null!=c?c:e,f=e-h+(h>d?7:0)-(e>h?7:0),g=7*(b-1)+(c-e)+f+1,{year:g>0?a:a-1,dayOfYear:g>0?g:F(a-1)+g}}function lb(b){var c,d=b._i,e=b._f;return b._locale=b._locale||vb.localeData(b._l),null===d||e===a&&""===d?vb.invalid({nullInput:!0}):("string"==typeof d&&(b._i=d=b._locale.preparse(d)),vb.isMoment(d)?new m(d,!0):(e?w(e)?_(b):Y(b):db(b),c=new m(b),c._nextDay&&(c.add(1,"d"),c._nextDay=a),c))}function mb(a,b){var c,d;if(1===b.length&&w(b[0])&&(b=b[0]),!b.length)return vb();for(c=b[0],d=1;d<b.length;++d)b[d][a](c)&&(c=b[d]);return c}function nb(a,b){var c;return"string"==typeof b&&(b=a.localeData().monthsParse(b),"number"!=typeof b)?a:(c=Math.min(a.date(),D(a.year(),b)),a._d["set"+(a._isUTC?"UTC":"")+"Month"](b,c),a)}function ob(a,b){return a._d["get"+(a._isUTC?"UTC":"")+b]()}function pb(a,b,c){return"Month"===b?nb(a,c):a._d["set"+(a._isUTC?"UTC":"")+b](c)}function qb(a,b){return function(c){return null!=c?(pb(this,a,c),vb.updateOffset(this,b),this):ob(this,a)}}function rb(a){return 400*a/146097}function sb(a){return 146097*a/400}function tb(a){vb.duration.fn[a]=function(){return this._data[a]}}function ub(a){"undefined"==typeof ender&&(wb=zb.moment,zb.moment=a?f("Accessing Moment through the global scope is deprecated, and will be removed in an upcoming release.",vb):vb)}for(var vb,wb,xb,yb="2.9.0",zb="undefined"==typeof global||"undefined"!=typeof window&&window!==global.window?this:global,Ab=Math.round,Bb=Object.prototype.hasOwnProperty,Cb=0,Db=1,Eb=2,Fb=3,Gb=4,Hb=5,Ib=6,Jb={},Kb=[],Lb="undefined"!=typeof module&&module&&module.exports,Mb=/^\/?Date\((\-?\d+)/i,Nb=/(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,Ob=/^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/,Pb=/(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|x|X|zz?|ZZ?|.)/g,Qb=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,Rb=/\d\d?/,Sb=/\d{1,3}/,Tb=/\d{1,4}/,Ub=/[+\-]?\d{1,6}/,Vb=/\d+/,Wb=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,Xb=/Z|[\+\-]\d\d:?\d\d/gi,Yb=/T/i,Zb=/[\+\-]?\d+/,$b=/[\+\-]?\d+(\.\d{1,3})?/,_b=/\d/,ac=/\d\d/,bc=/\d{3}/,cc=/\d{4}/,dc=/[+-]?\d{6}/,ec=/[+-]?\d+/,fc=/^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,gc="YYYY-MM-DDTHH:mm:ssZ",hc=[["YYYYYY-MM-DD",/[+-]\d{6}-\d{2}-\d{2}/],["YYYY-MM-DD",/\d{4}-\d{2}-\d{2}/],["GGGG-[W]WW-E",/\d{4}-W\d{2}-\d/],["GGGG-[W]WW",/\d{4}-W\d{2}/],["YYYY-DDD",/\d{4}-\d{3}/]],ic=[["HH:mm:ss.SSSS",/(T| )\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss",/(T| )\d\d:\d\d:\d\d/],["HH:mm",/(T| )\d\d:\d\d/],["HH",/(T| )\d\d/]],jc=/([\+\-]|\d\d)/gi,kc=("Date|Hours|Minutes|Seconds|Milliseconds".split("|"),{Milliseconds:1,Seconds:1e3,Minutes:6e4,Hours:36e5,Days:864e5,Months:2592e6,Years:31536e6}),lc={ms:"millisecond",s:"second",m:"minute",h:"hour",d:"day",D:"date",w:"week",W:"isoWeek",M:"month",Q:"quarter",y:"year",DDD:"dayOfYear",e:"weekday",E:"isoWeekday",gg:"weekYear",GG:"isoWeekYear"},mc={dayofyear:"dayOfYear",isoweekday:"isoWeekday",isoweek:"isoWeek",weekyear:"weekYear",isoweekyear:"isoWeekYear"},nc={},oc={s:45,m:45,h:22,d:26,M:11},pc="DDD w W M D d".split(" "),qc="M D H h m s w W".split(" "),rc={M:function(){return this.month()+1},MMM:function(a){return this.localeData().monthsShort(this,a)},MMMM:function(a){return this.localeData().months(this,a)},D:function(){return this.date()},DDD:function(){return this.dayOfYear()},d:function(){return this.day()},dd:function(a){return this.localeData().weekdaysMin(this,a)},ddd:function(a){return this.localeData().weekdaysShort(this,a)},dddd:function(a){return this.localeData().weekdays(this,a)},w:function(){return this.week()},W:function(){return this.isoWeek()},YY:function(){return r(this.year()%100,2)},YYYY:function(){return r(this.year(),4)},YYYYY:function(){return r(this.year(),5)},YYYYYY:function(){var a=this.year(),b=a>=0?"+":"-";return b+r(Math.abs(a),6)},gg:function(){return r(this.weekYear()%100,2)},gggg:function(){return r(this.weekYear(),4)},ggggg:function(){return r(this.weekYear(),5)},GG:function(){return r(this.isoWeekYear()%100,2)},GGGG:function(){return r(this.isoWeekYear(),4)},GGGGG:function(){return r(this.isoWeekYear(),5)},e:function(){return this.weekday()},E:function(){return this.isoWeekday()},a:function(){return this.localeData().meridiem(this.hours(),this.minutes(),!0)},A:function(){return this.localeData().meridiem(this.hours(),this.minutes(),!1)},H:function(){return this.hours()},h:function(){return this.hours()%12||12},m:function(){return this.minutes()},s:function(){return this.seconds()},S:function(){return C(this.milliseconds()/100)},SS:function(){return r(C(this.milliseconds()/10),2)},SSS:function(){return r(this.milliseconds(),3)},SSSS:function(){return r(this.milliseconds(),3)},Z:function(){var a=this.utcOffset(),b="+";return 0>a&&(a=-a,b="-"),b+r(C(a/60),2)+":"+r(C(a)%60,2)},ZZ:function(){var a=this.utcOffset(),b="+";return 0>a&&(a=-a,b="-"),b+r(C(a/60),2)+r(C(a)%60,2)},z:function(){return this.zoneAbbr()},zz:function(){return this.zoneName()},x:function(){return this.valueOf()},X:function(){return this.unix()},Q:function(){return this.quarter()}},sc={},tc=["months","monthsShort","weekdays","weekdaysShort","weekdaysMin"],uc=!1;pc.length;)xb=pc.pop(),rc[xb+"o"]=i(rc[xb],xb);for(;qc.length;)xb=qc.pop(),rc[xb+xb]=h(rc[xb],2);rc.DDDD=h(rc.DDD,3),o(l.prototype,{set:function(a){var b,c;for(c in a)b=a[c],"function"==typeof b?this[c]=b:this["_"+c]=b;this._ordinalParseLenient=new RegExp(this._ordinalParse.source+"|"+/\d{1,2}/.source)},_months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),months:function(a){return this._months[a.month()]},_monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),monthsShort:function(a){return this._monthsShort[a.month()]},monthsParse:function(a,b,c){var d,e,f;for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),d=0;12>d;d++){if(e=vb.utc([2e3,d]),c&&!this._longMonthsParse[d]&&(this._longMonthsParse[d]=new RegExp("^"+this.months(e,"").replace(".","")+"$","i"),this._shortMonthsParse[d]=new RegExp("^"+this.monthsShort(e,"").replace(".","")+"$","i")),c||this._monthsParse[d]||(f="^"+this.months(e,"")+"|^"+this.monthsShort(e,""),this._monthsParse[d]=new RegExp(f.replace(".",""),"i")),c&&"MMMM"===b&&this._longMonthsParse[d].test(a))return d;if(c&&"MMM"===b&&this._shortMonthsParse[d].test(a))return d;if(!c&&this._monthsParse[d].test(a))return d}},_weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdays:function(a){return this._weekdays[a.day()]},_weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysShort:function(a){return this._weekdaysShort[a.day()]},_weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),weekdaysMin:function(a){return this._weekdaysMin[a.day()]},weekdaysParse:function(a){var b,c,d;for(this._weekdaysParse||(this._weekdaysParse=[]),b=0;7>b;b++)if(this._weekdaysParse[b]||(c=vb([2e3,1]).day(b),d="^"+this.weekdays(c,"")+"|^"+this.weekdaysShort(c,"")+"|^"+this.weekdaysMin(c,""),this._weekdaysParse[b]=new RegExp(d.replace(".",""),"i")),this._weekdaysParse[b].test(a))return b},_longDateFormat:{LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY LT",LLLL:"dddd, MMMM D, YYYY LT"},longDateFormat:function(a){var b=this._longDateFormat[a];return!b&&this._longDateFormat[a.toUpperCase()]&&(b=this._longDateFormat[a.toUpperCase()].replace(/MMMM|MM|DD|dddd/g,function(a){return a.slice(1)}),this._longDateFormat[a]=b),b},isPM:function(a){return"p"===(a+"").toLowerCase().charAt(0)},_meridiemParse:/[ap]\.?m?\.?/i,meridiem:function(a,b,c){return a>11?c?"pm":"PM":c?"am":"AM"},_calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},calendar:function(a,b,c){var d=this._calendar[a];return"function"==typeof d?d.apply(b,[c]):d},_relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},relativeTime:function(a,b,c,d){var e=this._relativeTime[c];return"function"==typeof e?e(a,b,c,d):e.replace(/%d/i,a)},pastFuture:function(a,b){var c=this._relativeTime[a>0?"future":"past"];return"function"==typeof c?c(b):c.replace(/%s/i,b)},ordinal:function(a){return this._ordinal.replace("%d",a)},_ordinal:"%d",_ordinalParse:/\d{1,2}/,preparse:function(a){return a},postformat:function(a){return a},week:function(a){return jb(a,this._week.dow,this._week.doy).week},_week:{dow:0,doy:6},firstDayOfWeek:function(){return this._week.dow},firstDayOfYear:function(){return this._week.doy},_invalidDate:"Invalid date",invalidDate:function(){return this._invalidDate}}),vb=function(b,c,e,f){var g;return"boolean"==typeof e&&(f=e,e=a),g={},g._isAMomentObject=!0,g._i=b,g._f=c,g._l=e,g._strict=f,g._isUTC=!1,g._pf=d(),lb(g)},vb.suppressDeprecationWarnings=!1,vb.createFromInputFallback=f("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.",function(a){a._d=new Date(a._i+(a._useUTC?" UTC":""))}),vb.min=function(){var a=[].slice.call(arguments,0);return mb("isBefore",a)},vb.max=function(){var a=[].slice.call(arguments,0);return mb("isAfter",a)},vb.utc=function(b,c,e,f){var g;return"boolean"==typeof e&&(f=e,e=a),g={},g._isAMomentObject=!0,g._useUTC=!0,g._isUTC=!0,g._l=e,g._i=b,g._f=c,g._strict=f,g._pf=d(),lb(g).utc()},vb.unix=function(a){return vb(1e3*a)},vb.duration=function(a,b){var d,e,f,g,h=a,i=null;return vb.isDuration(a)?h={ms:a._milliseconds,d:a._days,M:a._months}:"number"==typeof a?(h={},b?h[b]=a:h.milliseconds=a):(i=Nb.exec(a))?(d="-"===i[1]?-1:1,h={y:0,d:C(i[Eb])*d,h:C(i[Fb])*d,m:C(i[Gb])*d,s:C(i[Hb])*d,ms:C(i[Ib])*d}):(i=Ob.exec(a))?(d="-"===i[1]?-1:1,f=function(a){var b=a&&parseFloat(a.replace(",","."));return(isNaN(b)?0:b)*d},h={y:f(i[2]),M:f(i[3]),d:f(i[4]),h:f(i[5]),m:f(i[6]),s:f(i[7]),w:f(i[8])}):null==h?h={}:"object"==typeof h&&("from"in h||"to"in h)&&(g=t(vb(h.from),vb(h.to)),h={},h.ms=g.milliseconds,h.M=g.months),e=new n(h),vb.isDuration(a)&&c(a,"_locale")&&(e._locale=a._locale),e},vb.version=yb,vb.defaultFormat=gc,vb.ISO_8601=function(){},vb.momentProperties=Kb,vb.updateOffset=function(){},vb.relativeTimeThreshold=function(b,c){return oc[b]===a?!1:c===a?oc[b]:(oc[b]=c,!0)},vb.lang=f("moment.lang is deprecated. Use moment.locale instead.",function(a,b){return vb.locale(a,b)}),vb.locale=function(a,b){var c;return a&&(c="undefined"!=typeof b?vb.defineLocale(a,b):vb.localeData(a),c&&(vb.duration._locale=vb._locale=c)),vb._locale._abbr},vb.defineLocale=function(a,b){return null!==b?(b.abbr=a,Jb[a]||(Jb[a]=new l),Jb[a].set(b),vb.locale(a),Jb[a]):(delete Jb[a],null)},vb.langData=f("moment.langData is deprecated. Use moment.localeData instead.",function(a){return vb.localeData(a)}),vb.localeData=function(a){var b;if(a&&a._locale&&a._locale._abbr&&(a=a._locale._abbr),!a)return vb._locale;if(!w(a)){if(b=L(a))return b;a=[a]}return K(a)},vb.isMoment=function(a){return a instanceof m||null!=a&&c(a,"_isAMomentObject")},vb.isDuration=function(a){return a instanceof n};for(xb=tc.length-1;xb>=0;--xb)B(tc[xb]);vb.normalizeUnits=function(a){return z(a)},vb.invalid=function(a){var b=vb.utc(0/0);return null!=a?o(b._pf,a):b._pf.userInvalidated=!0,b},vb.parseZone=function(){return vb.apply(null,arguments).parseZone()},vb.parseTwoDigitYear=function(a){return C(a)+(C(a)>68?1900:2e3)},vb.isDate=x,o(vb.fn=m.prototype,{clone:function(){return vb(this)},valueOf:function(){return+this._d-6e4*(this._offset||0)},unix:function(){return Math.floor(+this/1e3)},toString:function(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")},toDate:function(){return this._offset?new Date(+this):this._d},toISOString:function(){var a=vb(this).utc();return 0<a.year()&&a.year()<=9999?"function"==typeof Date.prototype.toISOString?this.toDate().toISOString():P(a,"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]"):P(a,"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")},toArray:function(){var a=this;return[a.year(),a.month(),a.date(),a.hours(),a.minutes(),a.seconds(),a.milliseconds()]},isValid:function(){return I(this)},isDSTShifted:function(){return this._a?this.isValid()&&y(this._a,(this._isUTC?vb.utc(this._a):vb(this._a)).toArray())>0:!1},parsingFlags:function(){return o({},this._pf)},invalidAt:function(){return this._pf.overflow},utc:function(a){return this.utcOffset(0,a)},local:function(a){return this._isUTC&&(this.utcOffset(0,a),this._isUTC=!1,a&&this.subtract(this._dateUtcOffset(),"m")),this},format:function(a){var b=P(this,a||vb.defaultFormat);return this.localeData().postformat(b)},add:u(1,"add"),subtract:u(-1,"subtract"),diff:function(a,b,c){var d,e,f=M(a,this),g=6e4*(f.utcOffset()-this.utcOffset());return b=z(b),"year"===b||"month"===b||"quarter"===b?(e=j(this,f),"quarter"===b?e/=3:"year"===b&&(e/=12)):(d=this-f,e="second"===b?d/1e3:"minute"===b?d/6e4:"hour"===b?d/36e5:"day"===b?(d-g)/864e5:"week"===b?(d-g)/6048e5:d),c?e:q(e)},from:function(a,b){return vb.duration({to:this,from:a}).locale(this.locale()).humanize(!b)},fromNow:function(a){return this.from(vb(),a)},calendar:function(a){var b=a||vb(),c=M(b,this).startOf("day"),d=this.diff(c,"days",!0),e=-6>d?"sameElse":-1>d?"lastWeek":0>d?"lastDay":1>d?"sameDay":2>d?"nextDay":7>d?"nextWeek":"sameElse";return this.format(this.localeData().calendar(e,this,vb(b)))},isLeapYear:function(){return G(this.year())},isDST:function(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()},day:function(a){var b=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=a?(a=gb(a,this.localeData()),this.add(a-b,"d")):b},month:qb("Month",!0),startOf:function(a){switch(a=z(a)){case"year":this.month(0);case"quarter":case"month":this.date(1);case"week":case"isoWeek":case"day":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return"week"===a?this.weekday(0):"isoWeek"===a&&this.isoWeekday(1),"quarter"===a&&this.month(3*Math.floor(this.month()/3)),this},endOf:function(b){return b=z(b),b===a||"millisecond"===b?this:this.startOf(b).add(1,"isoWeek"===b?"week":b).subtract(1,"ms")},isAfter:function(a,b){var c;return b=z("undefined"!=typeof b?b:"millisecond"),"millisecond"===b?(a=vb.isMoment(a)?a:vb(a),+this>+a):(c=vb.isMoment(a)?+a:+vb(a),c<+this.clone().startOf(b))},isBefore:function(a,b){var c;return b=z("undefined"!=typeof b?b:"millisecond"),"millisecond"===b?(a=vb.isMoment(a)?a:vb(a),+a>+this):(c=vb.isMoment(a)?+a:+vb(a),+this.clone().endOf(b)<c)},isBetween:function(a,b,c){return this.isAfter(a,c)&&this.isBefore(b,c)},isSame:function(a,b){var c;return b=z(b||"millisecond"),"millisecond"===b?(a=vb.isMoment(a)?a:vb(a),+this===+a):(c=+vb(a),+this.clone().startOf(b)<=c&&c<=+this.clone().endOf(b))},min:f("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548",function(a){return a=vb.apply(null,arguments),this>a?this:a}),max:f("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548",function(a){return a=vb.apply(null,arguments),a>this?this:a}),zone:f("moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779",function(a,b){return null!=a?("string"!=typeof a&&(a=-a),this.utcOffset(a,b),this):-this.utcOffset()}),utcOffset:function(a,b){var c,d=this._offset||0;return null!=a?("string"==typeof a&&(a=S(a)),Math.abs(a)<16&&(a=60*a),!this._isUTC&&b&&(c=this._dateUtcOffset()),this._offset=a,this._isUTC=!0,null!=c&&this.add(c,"m"),d!==a&&(!b||this._changeInProgress?v(this,vb.duration(a-d,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,vb.updateOffset(this,!0),this._changeInProgress=null)),this):this._isUTC?d:this._dateUtcOffset()},isLocal:function(){return!this._isUTC},isUtcOffset:function(){return this._isUTC},isUtc:function(){return this._isUTC&&0===this._offset},zoneAbbr:function(){return this._isUTC?"UTC":""},zoneName:function(){return this._isUTC?"Coordinated Universal Time":""},parseZone:function(){return this._tzm?this.utcOffset(this._tzm):"string"==typeof this._i&&this.utcOffset(S(this._i)),this},hasAlignedHourOffset:function(a){return a=a?vb(a).utcOffset():0,(this.utcOffset()-a)%60===0},daysInMonth:function(){return D(this.year(),this.month())},dayOfYear:function(a){var b=Ab((vb(this).startOf("day")-vb(this).startOf("year"))/864e5)+1;return null==a?b:this.add(a-b,"d")},quarter:function(a){return null==a?Math.ceil((this.month()+1)/3):this.month(3*(a-1)+this.month()%3)},weekYear:function(a){var b=jb(this,this.localeData()._week.dow,this.localeData()._week.doy).year;return null==a?b:this.add(a-b,"y")},isoWeekYear:function(a){var b=jb(this,1,4).year;return null==a?b:this.add(a-b,"y")},week:function(a){var b=this.localeData().week(this);return null==a?b:this.add(7*(a-b),"d")},isoWeek:function(a){var b=jb(this,1,4).week;return null==a?b:this.add(7*(a-b),"d")},weekday:function(a){var b=(this.day()+7-this.localeData()._week.dow)%7;return null==a?b:this.add(a-b,"d")},isoWeekday:function(a){return null==a?this.day()||7:this.day(this.day()%7?a:a-7)},isoWeeksInYear:function(){return E(this.year(),1,4)},weeksInYear:function(){var a=this.localeData()._week;return E(this.year(),a.dow,a.doy)},get:function(a){return a=z(a),this[a]()},set:function(a,b){var c;if("object"==typeof a)for(c in a)this.set(c,a[c]);else a=z(a),"function"==typeof this[a]&&this[a](b);return this},locale:function(b){var c;return b===a?this._locale._abbr:(c=vb.localeData(b),null!=c&&(this._locale=c),this)},lang:f("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(b){return b===a?this.localeData():this.locale(b)}),localeData:function(){return this._locale},_dateUtcOffset:function(){return 15*-Math.round(this._d.getTimezoneOffset()/15)}}),vb.fn.millisecond=vb.fn.milliseconds=qb("Milliseconds",!1),vb.fn.second=vb.fn.seconds=qb("Seconds",!1),vb.fn.minute=vb.fn.minutes=qb("Minutes",!1),vb.fn.hour=vb.fn.hours=qb("Hours",!0),vb.fn.date=qb("Date",!0),vb.fn.dates=f("dates accessor is deprecated. Use date instead.",qb("Date",!0)),vb.fn.year=qb("FullYear",!0),vb.fn.years=f("years accessor is deprecated. Use year instead.",qb("FullYear",!0)),vb.fn.days=vb.fn.day,vb.fn.months=vb.fn.month,vb.fn.weeks=vb.fn.week,vb.fn.isoWeeks=vb.fn.isoWeek,vb.fn.quarters=vb.fn.quarter,vb.fn.toJSON=vb.fn.toISOString,vb.fn.isUTC=vb.fn.isUtc,o(vb.duration.fn=n.prototype,{_bubble:function(){var a,b,c,d=this._milliseconds,e=this._days,f=this._months,g=this._data,h=0;g.milliseconds=d%1e3,a=q(d/1e3),g.seconds=a%60,b=q(a/60),g.minutes=b%60,c=q(b/60),g.hours=c%24,e+=q(c/24),h=q(rb(e)),e-=q(sb(h)),f+=q(e/30),e%=30,h+=q(f/12),f%=12,g.days=e,g.months=f,g.years=h},abs:function(){return this._milliseconds=Math.abs(this._milliseconds),this._days=Math.abs(this._days),this._months=Math.abs(this._months),this._data.milliseconds=Math.abs(this._data.milliseconds),this._data.seconds=Math.abs(this._data.seconds),this._data.minutes=Math.abs(this._data.minutes),this._data.hours=Math.abs(this._data.hours),this._data.months=Math.abs(this._data.months),this._data.years=Math.abs(this._data.years),this},weeks:function(){return q(this.days()/7)},valueOf:function(){return this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*C(this._months/12)
},humanize:function(a){var b=ib(this,!a,this.localeData());return a&&(b=this.localeData().pastFuture(+this,b)),this.localeData().postformat(b)},add:function(a,b){var c=vb.duration(a,b);return this._milliseconds+=c._milliseconds,this._days+=c._days,this._months+=c._months,this._bubble(),this},subtract:function(a,b){var c=vb.duration(a,b);return this._milliseconds-=c._milliseconds,this._days-=c._days,this._months-=c._months,this._bubble(),this},get:function(a){return a=z(a),this[a.toLowerCase()+"s"]()},as:function(a){var b,c;if(a=z(a),"month"===a||"year"===a)return b=this._days+this._milliseconds/864e5,c=this._months+12*rb(b),"month"===a?c:c/12;switch(b=this._days+Math.round(sb(this._months/12)),a){case"week":return b/7+this._milliseconds/6048e5;case"day":return b+this._milliseconds/864e5;case"hour":return 24*b+this._milliseconds/36e5;case"minute":return 24*b*60+this._milliseconds/6e4;case"second":return 24*b*60*60+this._milliseconds/1e3;case"millisecond":return Math.floor(24*b*60*60*1e3)+this._milliseconds;default:throw new Error("Unknown unit "+a)}},lang:vb.fn.lang,locale:vb.fn.locale,toIsoString:f("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",function(){return this.toISOString()}),toISOString:function(){var a=Math.abs(this.years()),b=Math.abs(this.months()),c=Math.abs(this.days()),d=Math.abs(this.hours()),e=Math.abs(this.minutes()),f=Math.abs(this.seconds()+this.milliseconds()/1e3);return this.asSeconds()?(this.asSeconds()<0?"-":"")+"P"+(a?a+"Y":"")+(b?b+"M":"")+(c?c+"D":"")+(d||e||f?"T":"")+(d?d+"H":"")+(e?e+"M":"")+(f?f+"S":""):"P0D"},localeData:function(){return this._locale},toJSON:function(){return this.toISOString()}}),vb.duration.fn.toString=vb.duration.fn.toISOString;for(xb in kc)c(kc,xb)&&tb(xb.toLowerCase());vb.duration.fn.asMilliseconds=function(){return this.as("ms")},vb.duration.fn.asSeconds=function(){return this.as("s")},vb.duration.fn.asMinutes=function(){return this.as("m")},vb.duration.fn.asHours=function(){return this.as("h")},vb.duration.fn.asDays=function(){return this.as("d")},vb.duration.fn.asWeeks=function(){return this.as("weeks")},vb.duration.fn.asMonths=function(){return this.as("M")},vb.duration.fn.asYears=function(){return this.as("y")},vb.locale("en",{ordinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(a){var b=a%10,c=1===C(a%100/10)?"th":1===b?"st":2===b?"nd":3===b?"rd":"th";return a+c}}),function(a){a(vb)}(function(a){return a.defineLocale("af",{months:"Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember".split("_"),monthsShort:"Jan_Feb_Mar_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des".split("_"),weekdays:"Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag".split("_"),weekdaysShort:"Son_Maa_Din_Woe_Don_Vry_Sat".split("_"),weekdaysMin:"So_Ma_Di_Wo_Do_Vr_Sa".split("_"),meridiemParse:/vm|nm/i,isPM:function(a){return/^nm$/i.test(a)},meridiem:function(a,b,c){return 12>a?c?"vm":"VM":c?"nm":"NM"},longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd, D MMMM YYYY LT"},calendar:{sameDay:"[Vandag om] LT",nextDay:"[Môre om] LT",nextWeek:"dddd [om] LT",lastDay:"[Gister om] LT",lastWeek:"[Laas] dddd [om] LT",sameElse:"L"},relativeTime:{future:"oor %s",past:"%s gelede",s:"'n paar sekondes",m:"'n minuut",mm:"%d minute",h:"'n uur",hh:"%d ure",d:"'n dag",dd:"%d dae",M:"'n maand",MM:"%d maande",y:"'n jaar",yy:"%d jaar"},ordinalParse:/\d{1,2}(ste|de)/,ordinal:function(a){return a+(1===a||8===a||a>=20?"ste":"de")},week:{dow:1,doy:4}})}),function(a){a(vb)}(function(a){return a.defineLocale("ar-ma",{months:"يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),monthsShort:"يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),weekdays:"الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),weekdaysShort:"احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),weekdaysMin:"ح_ن_ث_ر_خ_ج_س".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd D MMMM YYYY LT"},calendar:{sameDay:"[اليوم على الساعة] LT",nextDay:"[غدا على الساعة] LT",nextWeek:"dddd [على الساعة] LT",lastDay:"[أمس على الساعة] LT",lastWeek:"dddd [على الساعة] LT",sameElse:"L"},relativeTime:{future:"في %s",past:"منذ %s",s:"ثوان",m:"دقيقة",mm:"%d دقائق",h:"ساعة",hh:"%d ساعات",d:"يوم",dd:"%d أيام",M:"شهر",MM:"%d أشهر",y:"سنة",yy:"%d سنوات"},week:{dow:6,doy:12}})}),function(a){a(vb)}(function(a){var b={1:"١",2:"٢",3:"٣",4:"٤",5:"٥",6:"٦",7:"٧",8:"٨",9:"٩",0:"٠"},c={"١":"1","٢":"2","٣":"3","٤":"4","٥":"5","٦":"6","٧":"7","٨":"8","٩":"9","٠":"0"};return a.defineLocale("ar-sa",{months:"يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),monthsShort:"يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),weekdays:"الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),weekdaysShort:"أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),weekdaysMin:"ح_ن_ث_ر_خ_ج_س".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd D MMMM YYYY LT"},meridiemParse:/ص|م/,isPM:function(a){return"م"===a},meridiem:function(a){return 12>a?"ص":"م"},calendar:{sameDay:"[اليوم على الساعة] LT",nextDay:"[غدا على الساعة] LT",nextWeek:"dddd [على الساعة] LT",lastDay:"[أمس على الساعة] LT",lastWeek:"dddd [على الساعة] LT",sameElse:"L"},relativeTime:{future:"في %s",past:"منذ %s",s:"ثوان",m:"دقيقة",mm:"%d دقائق",h:"ساعة",hh:"%d ساعات",d:"يوم",dd:"%d أيام",M:"شهر",MM:"%d أشهر",y:"سنة",yy:"%d سنوات"},preparse:function(a){return a.replace(/[١٢٣٤٥٦٧٨٩٠]/g,function(a){return c[a]}).replace(/،/g,",")},postformat:function(a){return a.replace(/\d/g,function(a){return b[a]}).replace(/,/g,"،")},week:{dow:6,doy:12}})}),function(a){a(vb)}(function(a){return a.defineLocale("ar-tn",{months:"جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),monthsShort:"جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),weekdays:"الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),weekdaysShort:"أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),weekdaysMin:"ح_ن_ث_ر_خ_ج_س".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd D MMMM YYYY LT"},calendar:{sameDay:"[اليوم على الساعة] LT",nextDay:"[غدا على الساعة] LT",nextWeek:"dddd [على الساعة] LT",lastDay:"[أمس على الساعة] LT",lastWeek:"dddd [على الساعة] LT",sameElse:"L"},relativeTime:{future:"في %s",past:"منذ %s",s:"ثوان",m:"دقيقة",mm:"%d دقائق",h:"ساعة",hh:"%d ساعات",d:"يوم",dd:"%d أيام",M:"شهر",MM:"%d أشهر",y:"سنة",yy:"%d سنوات"},week:{dow:1,doy:4}})}),function(a){a(vb)}(function(a){var b={1:"١",2:"٢",3:"٣",4:"٤",5:"٥",6:"٦",7:"٧",8:"٨",9:"٩",0:"٠"},c={"١":"1","٢":"2","٣":"3","٤":"4","٥":"5","٦":"6","٧":"7","٨":"8","٩":"9","٠":"0"},d=function(a){return 0===a?0:1===a?1:2===a?2:a%100>=3&&10>=a%100?3:a%100>=11?4:5},e={s:["أقل من ثانية","ثانية واحدة",["ثانيتان","ثانيتين"],"%d ثوان","%d ثانية","%d ثانية"],m:["أقل من دقيقة","دقيقة واحدة",["دقيقتان","دقيقتين"],"%d دقائق","%d دقيقة","%d دقيقة"],h:["أقل من ساعة","ساعة واحدة",["ساعتان","ساعتين"],"%d ساعات","%d ساعة","%d ساعة"],d:["أقل من يوم","يوم واحد",["يومان","يومين"],"%d أيام","%d يومًا","%d يوم"],M:["أقل من شهر","شهر واحد",["شهران","شهرين"],"%d أشهر","%d شهرا","%d شهر"],y:["أقل من عام","عام واحد",["عامان","عامين"],"%d أعوام","%d عامًا","%d عام"]},f=function(a){return function(b,c){var f=d(b),g=e[a][d(b)];return 2===f&&(g=g[c?0:1]),g.replace(/%d/i,b)}},g=["كانون الثاني يناير","شباط فبراير","آذار مارس","نيسان أبريل","أيار مايو","حزيران يونيو","تموز يوليو","آب أغسطس","أيلول سبتمبر","تشرين الأول أكتوبر","تشرين الثاني نوفمبر","كانون الأول ديسمبر"];return a.defineLocale("ar",{months:g,monthsShort:g,weekdays:"الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),weekdaysShort:"أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),weekdaysMin:"ح_ن_ث_ر_خ_ج_س".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd D MMMM YYYY LT"},meridiemParse:/ص|م/,isPM:function(a){return"م"===a},meridiem:function(a){return 12>a?"ص":"م"},calendar:{sameDay:"[اليوم عند الساعة] LT",nextDay:"[غدًا عند الساعة] LT",nextWeek:"dddd [عند الساعة] LT",lastDay:"[أمس عند الساعة] LT",lastWeek:"dddd [عند الساعة] LT",sameElse:"L"},relativeTime:{future:"بعد %s",past:"منذ %s",s:f("s"),m:f("m"),mm:f("m"),h:f("h"),hh:f("h"),d:f("d"),dd:f("d"),M:f("M"),MM:f("M"),y:f("y"),yy:f("y")},preparse:function(a){return a.replace(/[١٢٣٤٥٦٧٨٩٠]/g,function(a){return c[a]}).replace(/،/g,",")},postformat:function(a){return a.replace(/\d/g,function(a){return b[a]}).replace(/,/g,"،")},week:{dow:6,doy:12}})}),function(a){a(vb)}(function(a){var b={1:"-inci",5:"-inci",8:"-inci",70:"-inci",80:"-inci",2:"-nci",7:"-nci",20:"-nci",50:"-nci",3:"-üncü",4:"-üncü",100:"-üncü",6:"-ncı",9:"-uncu",10:"-uncu",30:"-uncu",60:"-ıncı",90:"-ıncı"};return a.defineLocale("az",{months:"yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr".split("_"),monthsShort:"yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek".split("_"),weekdays:"Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə".split("_"),weekdaysShort:"Baz_BzE_ÇAx_Çər_CAx_Cüm_Şən".split("_"),weekdaysMin:"Bz_BE_ÇA_Çə_CA_Cü_Şə".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd, D MMMM YYYY LT"},calendar:{sameDay:"[bugün saat] LT",nextDay:"[sabah saat] LT",nextWeek:"[gələn həftə] dddd [saat] LT",lastDay:"[dünən] LT",lastWeek:"[keçən həftə] dddd [saat] LT",sameElse:"L"},relativeTime:{future:"%s sonra",past:"%s əvvəl",s:"birneçə saniyyə",m:"bir dəqiqə",mm:"%d dəqiqə",h:"bir saat",hh:"%d saat",d:"bir gün",dd:"%d gün",M:"bir ay",MM:"%d ay",y:"bir il",yy:"%d il"},meridiemParse:/gecə|səhər|gündüz|axşam/,isPM:function(a){return/^(gündüz|axşam)$/.test(a)},meridiem:function(a){return 4>a?"gecə":12>a?"səhər":17>a?"gündüz":"axşam"},ordinalParse:/\d{1,2}-(ıncı|inci|nci|üncü|ncı|uncu)/,ordinal:function(a){if(0===a)return a+"-ıncı";var c=a%10,d=a%100-c,e=a>=100?100:null;return a+(b[c]||b[d]||b[e])},week:{dow:1,doy:7}})}),function(a){a(vb)}(function(a){function b(a,b){var c=a.split("_");return b%10===1&&b%100!==11?c[0]:b%10>=2&&4>=b%10&&(10>b%100||b%100>=20)?c[1]:c[2]}function c(a,c,d){var e={mm:c?"хвіліна_хвіліны_хвілін":"хвіліну_хвіліны_хвілін",hh:c?"гадзіна_гадзіны_гадзін":"гадзіну_гадзіны_гадзін",dd:"дзень_дні_дзён",MM:"месяц_месяцы_месяцаў",yy:"год_гады_гадоў"};return"m"===d?c?"хвіліна":"хвіліну":"h"===d?c?"гадзіна":"гадзіну":a+" "+b(e[d],+a)}function d(a,b){var c={nominative:"студзень_люты_сакавік_красавік_травень_чэрвень_ліпень_жнівень_верасень_кастрычнік_лістапад_снежань".split("_"),accusative:"студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня".split("_")},d=/D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/.test(b)?"accusative":"nominative";return c[d][a.month()]}function e(a,b){var c={nominative:"нядзеля_панядзелак_аўторак_серада_чацвер_пятніца_субота".split("_"),accusative:"нядзелю_панядзелак_аўторак_сераду_чацвер_пятніцу_суботу".split("_")},d=/\[ ?[Вв] ?(?:мінулую|наступную)? ?\] ?dddd/.test(b)?"accusative":"nominative";return c[d][a.day()]}return a.defineLocale("be",{months:d,monthsShort:"студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж".split("_"),weekdays:e,weekdaysShort:"нд_пн_ат_ср_чц_пт_сб".split("_"),weekdaysMin:"нд_пн_ат_ср_чц_пт_сб".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY г.",LLL:"D MMMM YYYY г., LT",LLLL:"dddd, D MMMM YYYY г., LT"},calendar:{sameDay:"[Сёння ў] LT",nextDay:"[Заўтра ў] LT",lastDay:"[Учора ў] LT",nextWeek:function(){return"[У] dddd [ў] LT"},lastWeek:function(){switch(this.day()){case 0:case 3:case 5:case 6:return"[У мінулую] dddd [ў] LT";case 1:case 2:case 4:return"[У мінулы] dddd [ў] LT"}},sameElse:"L"},relativeTime:{future:"праз %s",past:"%s таму",s:"некалькі секунд",m:c,mm:c,h:c,hh:c,d:"дзень",dd:c,M:"месяц",MM:c,y:"год",yy:c},meridiemParse:/ночы|раніцы|дня|вечара/,isPM:function(a){return/^(дня|вечара)$/.test(a)},meridiem:function(a){return 4>a?"ночы":12>a?"раніцы":17>a?"дня":"вечара"},ordinalParse:/\d{1,2}-(і|ы|га)/,ordinal:function(a,b){switch(b){case"M":case"d":case"DDD":case"w":case"W":return a%10!==2&&a%10!==3||a%100===12||a%100===13?a+"-ы":a+"-і";case"D":return a+"-га";default:return a}},week:{dow:1,doy:7}})}),function(a){a(vb)}(function(a){return a.defineLocale("bg",{months:"януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември".split("_"),monthsShort:"янр_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек".split("_"),weekdays:"неделя_понеделник_вторник_сряда_четвъртък_петък_събота".split("_"),weekdaysShort:"нед_пон_вто_сря_чет_пет_съб".split("_"),weekdaysMin:"нд_пн_вт_ср_чт_пт_сб".split("_"),longDateFormat:{LT:"H:mm",LTS:"LT:ss",L:"D.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd, D MMMM YYYY LT"},calendar:{sameDay:"[Днес в] LT",nextDay:"[Утре в] LT",nextWeek:"dddd [в] LT",lastDay:"[Вчера в] LT",lastWeek:function(){switch(this.day()){case 0:case 3:case 6:return"[В изминалата] dddd [в] LT";case 1:case 2:case 4:case 5:return"[В изминалия] dddd [в] LT"}},sameElse:"L"},relativeTime:{future:"след %s",past:"преди %s",s:"няколко секунди",m:"минута",mm:"%d минути",h:"час",hh:"%d часа",d:"ден",dd:"%d дни",M:"месец",MM:"%d месеца",y:"година",yy:"%d години"},ordinalParse:/\d{1,2}-(ев|ен|ти|ви|ри|ми)/,ordinal:function(a){var b=a%10,c=a%100;return 0===a?a+"-ев":0===c?a+"-ен":c>10&&20>c?a+"-ти":1===b?a+"-ви":2===b?a+"-ри":7===b||8===b?a+"-ми":a+"-ти"},week:{dow:1,doy:7}})}),function(a){a(vb)}(function(a){var b={1:"১",2:"২",3:"৩",4:"৪",5:"৫",6:"৬",7:"৭",8:"৮",9:"৯",0:"০"},c={"১":"1","২":"2","৩":"3","৪":"4","৫":"5","৬":"6","৭":"7","৮":"8","৯":"9","০":"0"};return a.defineLocale("bn",{months:"জানুয়ারী_ফেবুয়ারী_মার্চ_এপ্রিল_মে_জুন_জুলাই_অগাস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর".split("_"),monthsShort:"জানু_ফেব_মার্চ_এপর_মে_জুন_জুল_অগ_সেপ্ট_অক্টো_নভ_ডিসেম্".split("_"),weekdays:"রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পত্তিবার_শুক্রুবার_শনিবার".split("_"),weekdaysShort:"রবি_সোম_মঙ্গল_বুধ_বৃহস্পত্তি_শুক্রু_শনি".split("_"),weekdaysMin:"রব_সম_মঙ্গ_বু_ব্রিহ_শু_শনি".split("_"),longDateFormat:{LT:"A h:mm সময়",LTS:"A h:mm:ss সময়",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, LT",LLLL:"dddd, D MMMM YYYY, LT"},calendar:{sameDay:"[আজ] LT",nextDay:"[আগামীকাল] LT",nextWeek:"dddd, LT",lastDay:"[গতকাল] LT",lastWeek:"[গত] dddd, LT",sameElse:"L"},relativeTime:{future:"%s পরে",past:"%s আগে",s:"কএক সেকেন্ড",m:"এক মিনিট",mm:"%d মিনিট",h:"এক ঘন্টা",hh:"%d ঘন্টা",d:"এক দিন",dd:"%d দিন",M:"এক মাস",MM:"%d মাস",y:"এক বছর",yy:"%d বছর"},preparse:function(a){return a.replace(/[১২৩৪৫৬৭৮৯০]/g,function(a){return c[a]})},postformat:function(a){return a.replace(/\d/g,function(a){return b[a]})},meridiemParse:/রাত|শকাল|দুপুর|বিকেল|রাত/,isPM:function(a){return/^(দুপুর|বিকেল|রাত)$/.test(a)},meridiem:function(a){return 4>a?"রাত":10>a?"শকাল":17>a?"দুপুর":20>a?"বিকেল":"রাত"},week:{dow:0,doy:6}})}),function(a){a(vb)}(function(a){var b={1:"༡",2:"༢",3:"༣",4:"༤",5:"༥",6:"༦",7:"༧",8:"༨",9:"༩",0:"༠"},c={"༡":"1","༢":"2","༣":"3","༤":"4","༥":"5","༦":"6","༧":"7","༨":"8","༩":"9","༠":"0"};return a.defineLocale("bo",{months:"ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"),monthsShort:"ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"),weekdays:"གཟའ་ཉི་མ་_གཟའ་ཟླ་བ་_གཟའ་མིག་དམར་_གཟའ་ལྷག་པ་_གཟའ་ཕུར་བུ_གཟའ་པ་སངས་_གཟའ་སྤེན་པ་".split("_"),weekdaysShort:"ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"),weekdaysMin:"ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"),longDateFormat:{LT:"A h:mm",LTS:"LT:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, LT",LLLL:"dddd, D MMMM YYYY, LT"},calendar:{sameDay:"[དི་རིང] LT",nextDay:"[སང་ཉིན] LT",nextWeek:"[བདུན་ཕྲག་རྗེས་མ], LT",lastDay:"[ཁ་སང] LT",lastWeek:"[བདུན་ཕྲག་མཐའ་མ] dddd, LT",sameElse:"L"},relativeTime:{future:"%s ལ་",past:"%s སྔན་ལ",s:"ལམ་སང",m:"སྐར་མ་གཅིག",mm:"%d སྐར་མ",h:"ཆུ་ཚོད་གཅིག",hh:"%d ཆུ་ཚོད",d:"ཉིན་གཅིག",dd:"%d ཉིན་",M:"ཟླ་བ་གཅིག",MM:"%d ཟླ་བ",y:"ལོ་གཅིག",yy:"%d ལོ"},preparse:function(a){return a.replace(/[༡༢༣༤༥༦༧༨༩༠]/g,function(a){return c[a]})},postformat:function(a){return a.replace(/\d/g,function(a){return b[a]})},meridiemParse:/མཚན་མོ|ཞོགས་ཀས|ཉིན་གུང|དགོང་དག|མཚན་མོ/,isPM:function(a){return/^(ཉིན་གུང|དགོང་དག|མཚན་མོ)$/.test(a)},meridiem:function(a){return 4>a?"མཚན་མོ":10>a?"ཞོགས་ཀས":17>a?"ཉིན་གུང":20>a?"དགོང་དག":"མཚན་མོ"},week:{dow:0,doy:6}})}),function(a){a(vb)}(function(b){function c(a,b,c){var d={mm:"munutenn",MM:"miz",dd:"devezh"};return a+" "+f(d[c],a)}function d(a){switch(e(a)){case 1:case 3:case 4:case 5:case 9:return a+" bloaz";default:return a+" vloaz"}}function e(a){return a>9?e(a%10):a}function f(a,b){return 2===b?g(a):a}function g(b){var c={m:"v",b:"v",d:"z"};return c[b.charAt(0)]===a?b:c[b.charAt(0)]+b.substring(1)}return b.defineLocale("br",{months:"Genver_C'hwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split("_"),monthsShort:"Gen_C'hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split("_"),weekdays:"Sul_Lun_Meurzh_Merc'her_Yaou_Gwener_Sadorn".split("_"),weekdaysShort:"Sul_Lun_Meu_Mer_Yao_Gwe_Sad".split("_"),weekdaysMin:"Su_Lu_Me_Mer_Ya_Gw_Sa".split("_"),longDateFormat:{LT:"h[e]mm A",LTS:"h[e]mm:ss A",L:"DD/MM/YYYY",LL:"D [a viz] MMMM YYYY",LLL:"D [a viz] MMMM YYYY LT",LLLL:"dddd, D [a viz] MMMM YYYY LT"},calendar:{sameDay:"[Hiziv da] LT",nextDay:"[Warc'hoazh da] LT",nextWeek:"dddd [da] LT",lastDay:"[Dec'h da] LT",lastWeek:"dddd [paset da] LT",sameElse:"L"},relativeTime:{future:"a-benn %s",past:"%s 'zo",s:"un nebeud segondennoù",m:"ur vunutenn",mm:c,h:"un eur",hh:"%d eur",d:"un devezh",dd:c,M:"ur miz",MM:c,y:"ur bloaz",yy:d},ordinalParse:/\d{1,2}(añ|vet)/,ordinal:function(a){var b=1===a?"añ":"vet";return a+b},week:{dow:1,doy:4}})}),function(a){a(vb)}(function(a){function b(a,b,c){var d=a+" ";switch(c){case"m":return b?"jedna minuta":"jedne minute";case"mm":return d+=1===a?"minuta":2===a||3===a||4===a?"minute":"minuta";case"h":return b?"jedan sat":"jednog sata";case"hh":return d+=1===a?"sat":2===a||3===a||4===a?"sata":"sati";case"dd":return d+=1===a?"dan":"dana";case"MM":return d+=1===a?"mjesec":2===a||3===a||4===a?"mjeseca":"mjeseci";case"yy":return d+=1===a?"godina":2===a||3===a||4===a?"godine":"godina"}}return a.defineLocale("bs",{months:"januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar".split("_"),monthsShort:"jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.".split("_"),weekdays:"nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),weekdaysShort:"ned._pon._uto._sri._čet._pet._sub.".split("_"),weekdaysMin:"ne_po_ut_sr_če_pe_su".split("_"),longDateFormat:{LT:"H:mm",LTS:"LT:ss",L:"DD. MM. YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY LT",LLLL:"dddd, D. MMMM YYYY LT"},calendar:{sameDay:"[danas u] LT",nextDay:"[sutra u] LT",nextWeek:function(){switch(this.day()){case 0:return"[u] [nedjelju] [u] LT";case 3:return"[u] [srijedu] [u] LT";case 6:return"[u] [subotu] [u] LT";case 1:case 2:case 4:case 5:return"[u] dddd [u] LT"}},lastDay:"[jučer u] LT",lastWeek:function(){switch(this.day()){case 0:case 3:return"[prošlu] dddd [u] LT";case 6:return"[prošle] [subote] [u] LT";case 1:case 2:case 4:case 5:return"[prošli] dddd [u] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"prije %s",s:"par sekundi",m:b,mm:b,h:b,hh:b,d:"dan",dd:b,M:"mjesec",MM:b,y:"godinu",yy:b},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}})}),function(a){a(vb)}(function(a){return a.defineLocale("ca",{months:"gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre".split("_"),monthsShort:"gen._febr._mar._abr._mai._jun._jul._ag._set._oct._nov._des.".split("_"),weekdays:"diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte".split("_"),weekdaysShort:"dg._dl._dt._dc._dj._dv._ds.".split("_"),weekdaysMin:"Dg_Dl_Dt_Dc_Dj_Dv_Ds".split("_"),longDateFormat:{LT:"H:mm",LTS:"LT:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd D MMMM YYYY LT"},calendar:{sameDay:function(){return"[avui a "+(1!==this.hours()?"les":"la")+"] LT"},nextDay:function(){return"[demà a "+(1!==this.hours()?"les":"la")+"] LT"},nextWeek:function(){return"dddd [a "+(1!==this.hours()?"les":"la")+"] LT"},lastDay:function(){return"[ahir a "+(1!==this.hours()?"les":"la")+"] LT"},lastWeek:function(){return"[el] dddd [passat a "+(1!==this.hours()?"les":"la")+"] LT"},sameElse:"L"},relativeTime:{future:"en %s",past:"fa %s",s:"uns segons",m:"un minut",mm:"%d minuts",h:"una hora",hh:"%d hores",d:"un dia",dd:"%d dies",M:"un mes",MM:"%d mesos",y:"un any",yy:"%d anys"},ordinalParse:/\d{1,2}(r|n|t|è|a)/,ordinal:function(a,b){var c=1===a?"r":2===a?"n":3===a?"r":4===a?"t":"è";return("w"===b||"W"===b)&&(c="a"),a+c},week:{dow:1,doy:4}})}),function(a){a(vb)}(function(a){function b(a){return a>1&&5>a&&1!==~~(a/10)}function c(a,c,d,e){var f=a+" ";switch(d){case"s":return c||e?"pár sekund":"pár sekundami";case"m":return c?"minuta":e?"minutu":"minutou";case"mm":return c||e?f+(b(a)?"minuty":"minut"):f+"minutami";break;case"h":return c?"hodina":e?"hodinu":"hodinou";case"hh":return c||e?f+(b(a)?"hodiny":"hodin"):f+"hodinami";break;case"d":return c||e?"den":"dnem";case"dd":return c||e?f+(b(a)?"dny":"dní"):f+"dny";break;case"M":return c||e?"měsíc":"měsícem";case"MM":return c||e?f+(b(a)?"měsíce":"měsíců"):f+"měsíci";break;case"y":return c||e?"rok":"rokem";case"yy":return c||e?f+(b(a)?"roky":"let"):f+"lety"}}var d="leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec".split("_"),e="led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro".split("_");return a.defineLocale("cs",{months:d,monthsShort:e,monthsParse:function(a,b){var c,d=[];for(c=0;12>c;c++)d[c]=new RegExp("^"+a[c]+"$|^"+b[c]+"$","i");return d}(d,e),weekdays:"neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota".split("_"),weekdaysShort:"ne_po_út_st_čt_pá_so".split("_"),weekdaysMin:"ne_po_út_st_čt_pá_so".split("_"),longDateFormat:{LT:"H:mm",LTS:"LT:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY LT",LLLL:"dddd D. MMMM YYYY LT"},calendar:{sameDay:"[dnes v] LT",nextDay:"[zítra v] LT",nextWeek:function(){switch(this.day()){case 0:return"[v neděli v] LT";case 1:case 2:return"[v] dddd [v] LT";case 3:return"[ve středu v] LT";case 4:return"[ve čtvrtek v] LT";case 5:return"[v pátek v] LT";case 6:return"[v sobotu v] LT"}},lastDay:"[včera v] LT",lastWeek:function(){switch(this.day()){case 0:return"[minulou neděli v] LT";case 1:case 2:return"[minulé] dddd [v] LT";case 3:return"[minulou středu v] LT";case 4:case 5:return"[minulý] dddd [v] LT";case 6:return"[minulou sobotu v] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"před %s",s:c,m:c,mm:c,h:c,hh:c,d:c,dd:c,M:c,MM:c,y:c,yy:c},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})}),function(a){a(vb)}(function(a){return a.defineLocale("cv",{months:"кăрлач_нарăс_пуш_ака_май_çĕртме_утă_çурла_авăн_юпа_чӳк_раштав".split("_"),monthsShort:"кăр_нар_пуш_ака_май_çĕр_утă_çур_ав_юпа_чӳк_раш".split("_"),weekdays:"вырсарникун_тунтикун_ытларикун_юнкун_кĕçнерникун_эрнекун_шăматкун".split("_"),weekdaysShort:"выр_тун_ытл_юн_кĕç_эрн_шăм".split("_"),weekdaysMin:"вр_тн_ыт_юн_кç_эр_шм".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD-MM-YYYY",LL:"YYYY [çулхи] MMMM [уйăхĕн] D[-мĕшĕ]",LLL:"YYYY [çулхи] MMMM [уйăхĕн] D[-мĕшĕ], LT",LLLL:"dddd, YYYY [çулхи] MMMM [уйăхĕн] D[-мĕшĕ], LT"},calendar:{sameDay:"[Паян] LT [сехетре]",nextDay:"[Ыран] LT [сехетре]",lastDay:"[Ĕнер] LT [сехетре]",nextWeek:"[Çитес] dddd LT [сехетре]",lastWeek:"[Иртнĕ] dddd LT [сехетре]",sameElse:"L"},relativeTime:{future:function(a){var b=/сехет$/i.exec(a)?"рен":/çул$/i.exec(a)?"тан":"ран";return a+b},past:"%s каялла",s:"пĕр-ик çеккунт",m:"пĕр минут",mm:"%d минут",h:"пĕр сехет",hh:"%d сехет",d:"пĕр кун",dd:"%d кун",M:"пĕр уйăх",MM:"%d уйăх",y:"пĕр çул",yy:"%d çул"},ordinalParse:/\d{1,2}-мĕш/,ordinal:"%d-мĕш",week:{dow:1,doy:7}})}),function(a){a(vb)}(function(a){return a.defineLocale("cy",{months:"Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr".split("_"),monthsShort:"Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag".split("_"),weekdays:"Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn".split("_"),weekdaysShort:"Sul_Llun_Maw_Mer_Iau_Gwe_Sad".split("_"),weekdaysMin:"Su_Ll_Ma_Me_Ia_Gw_Sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd, D MMMM YYYY LT"},calendar:{sameDay:"[Heddiw am] LT",nextDay:"[Yfory am] LT",nextWeek:"dddd [am] LT",lastDay:"[Ddoe am] LT",lastWeek:"dddd [diwethaf am] LT",sameElse:"L"},relativeTime:{future:"mewn %s",past:"%s yn ôl",s:"ychydig eiliadau",m:"munud",mm:"%d munud",h:"awr",hh:"%d awr",d:"diwrnod",dd:"%d diwrnod",M:"mis",MM:"%d mis",y:"blwyddyn",yy:"%d flynedd"},ordinalParse:/\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,ordinal:function(a){var b=a,c="",d=["","af","il","ydd","ydd","ed","ed","ed","fed","fed","fed","eg","fed","eg","eg","fed","eg","eg","fed","eg","fed"];return b>20?c=40===b||50===b||60===b||80===b||100===b?"fed":"ain":b>0&&(c=d[b]),a+c},week:{dow:1,doy:4}})}),function(a){a(vb)}(function(a){return a.defineLocale("da",{months:"januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_"),monthsShort:"jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),weekdays:"søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),weekdaysShort:"søn_man_tir_ons_tor_fre_lør".split("_"),weekdaysMin:"sø_ma_ti_on_to_fr_lø".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD/MM/YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY LT",LLLL:"dddd [d.] D. MMMM YYYY LT"},calendar:{sameDay:"[I dag kl.] LT",nextDay:"[I morgen kl.] LT",nextWeek:"dddd [kl.] LT",lastDay:"[I går kl.] LT",lastWeek:"[sidste] dddd [kl] LT",sameElse:"L"},relativeTime:{future:"om %s",past:"%s siden",s:"få sekunder",m:"et minut",mm:"%d minutter",h:"en time",hh:"%d timer",d:"en dag",dd:"%d dage",M:"en måned",MM:"%d måneder",y:"et år",yy:"%d år"},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})}),function(a){a(vb)}(function(a){function b(a,b,c){var d={m:["eine Minute","einer Minute"],h:["eine Stunde","einer Stunde"],d:["ein Tag","einem Tag"],dd:[a+" Tage",a+" Tagen"],M:["ein Monat","einem Monat"],MM:[a+" Monate",a+" Monaten"],y:["ein Jahr","einem Jahr"],yy:[a+" Jahre",a+" Jahren"]};return b?d[c][0]:d[c][1]}return a.defineLocale("de-at",{months:"Jänner_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jän._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),weekdays:"Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),weekdaysShort:"So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),weekdaysMin:"So_Mo_Di_Mi_Do_Fr_Sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY LT",LLLL:"dddd, D. MMMM YYYY LT"},calendar:{sameDay:"[Heute um] LT [Uhr]",sameElse:"L",nextDay:"[Morgen um] LT [Uhr]",nextWeek:"dddd [um] LT [Uhr]",lastDay:"[Gestern um] LT [Uhr]",lastWeek:"[letzten] dddd [um] LT [Uhr]"},relativeTime:{future:"in %s",past:"vor %s",s:"ein paar Sekunden",m:b,mm:"%d Minuten",h:b,hh:"%d Stunden",d:b,dd:b,M:b,MM:b,y:b,yy:b},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})}),function(a){a(vb)}(function(a){function b(a,b,c){var d={m:["eine Minute","einer Minute"],h:["eine Stunde","einer Stunde"],d:["ein Tag","einem Tag"],dd:[a+" Tage",a+" Tagen"],M:["ein Monat","einem Monat"],MM:[a+" Monate",a+" Monaten"],y:["ein Jahr","einem Jahr"],yy:[a+" Jahre",a+" Jahren"]};return b?d[c][0]:d[c][1]}return a.defineLocale("de",{months:"Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jan._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),weekdays:"Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),weekdaysShort:"So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),weekdaysMin:"So_Mo_Di_Mi_Do_Fr_Sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY LT",LLLL:"dddd, D. MMMM YYYY LT"},calendar:{sameDay:"[Heute um] LT [Uhr]",sameElse:"L",nextDay:"[Morgen um] LT [Uhr]",nextWeek:"dddd [um] LT [Uhr]",lastDay:"[Gestern um] LT [Uhr]",lastWeek:"[letzten] dddd [um] LT [Uhr]"},relativeTime:{future:"in %s",past:"vor %s",s:"ein paar Sekunden",m:b,mm:"%d Minuten",h:b,hh:"%d Stunden",d:b,dd:b,M:b,MM:b,y:b,yy:b},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})}),function(a){a(vb)}(function(a){return a.defineLocale("el",{monthsNominativeEl:"Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος".split("_"),monthsGenitiveEl:"Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου".split("_"),months:function(a,b){return/D/.test(b.substring(0,b.indexOf("MMMM")))?this._monthsGenitiveEl[a.month()]:this._monthsNominativeEl[a.month()]},monthsShort:"Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ".split("_"),weekdays:"Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο".split("_"),weekdaysShort:"Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ".split("_"),weekdaysMin:"Κυ_Δε_Τρ_Τε_Πε_Πα_Σα".split("_"),meridiem:function(a,b,c){return a>11?c?"μμ":"ΜΜ":c?"πμ":"ΠΜ"},isPM:function(a){return"μ"===(a+"").toLowerCase()[0]},meridiemParse:/[ΠΜ]\.?Μ?\.?/i,longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd, D MMMM YYYY LT"},calendarEl:{sameDay:"[Σήμερα {}] LT",nextDay:"[Αύριο {}] LT",nextWeek:"dddd [{}] LT",lastDay:"[Χθες {}] LT",lastWeek:function(){switch(this.day()){case 6:return"[το προηγούμενο] dddd [{}] LT";default:return"[την προηγούμενη] dddd [{}] LT"}},sameElse:"L"},calendar:function(a,b){var c=this._calendarEl[a],d=b&&b.hours();return"function"==typeof c&&(c=c.apply(b)),c.replace("{}",d%12===1?"στη":"στις")},relativeTime:{future:"σε %s",past:"%s πριν",s:"λίγα δευτερόλεπτα",m:"ένα λεπτό",mm:"%d λεπτά",h:"μία ώρα",hh:"%d ώρες",d:"μία μέρα",dd:"%d μέρες",M:"ένας μήνας",MM:"%d μήνες",y:"ένας χρόνος",yy:"%d χρόνια"},ordinalParse:/\d{1,2}η/,ordinal:"%dη",week:{dow:1,doy:4}})}),function(a){a(vb)}(function(a){return a.defineLocale("en-au",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd, D MMMM YYYY LT"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},ordinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(a){var b=a%10,c=1===~~(a%100/10)?"th":1===b?"st":2===b?"nd":3===b?"rd":"th";return a+c},week:{dow:1,doy:4}})}),function(a){a(vb)}(function(a){return a.defineLocale("en-ca",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"YYYY-MM-DD",LL:"D MMMM, YYYY",LLL:"D MMMM, YYYY LT",LLLL:"dddd, D MMMM, YYYY LT"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},ordinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(a){var b=a%10,c=1===~~(a%100/10)?"th":1===b?"st":2===b?"nd":3===b?"rd":"th";
    return a+c}})}),function(a){a(vb)}(function(a){return a.defineLocale("en-gb",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd, D MMMM YYYY LT"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},ordinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(a){var b=a%10,c=1===~~(a%100/10)?"th":1===b?"st":2===b?"nd":3===b?"rd":"th";return a+c},week:{dow:1,doy:4}})}),function(a){a(vb)}(function(a){return a.defineLocale("eo",{months:"januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro".split("_"),monthsShort:"jan_feb_mar_apr_maj_jun_jul_aŭg_sep_okt_nov_dec".split("_"),weekdays:"Dimanĉo_Lundo_Mardo_Merkredo_Ĵaŭdo_Vendredo_Sabato".split("_"),weekdaysShort:"Dim_Lun_Mard_Merk_Ĵaŭ_Ven_Sab".split("_"),weekdaysMin:"Di_Lu_Ma_Me_Ĵa_Ve_Sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"YYYY-MM-DD",LL:"D[-an de] MMMM, YYYY",LLL:"D[-an de] MMMM, YYYY LT",LLLL:"dddd, [la] D[-an de] MMMM, YYYY LT"},meridiemParse:/[ap]\.t\.m/i,isPM:function(a){return"p"===a.charAt(0).toLowerCase()},meridiem:function(a,b,c){return a>11?c?"p.t.m.":"P.T.M.":c?"a.t.m.":"A.T.M."},calendar:{sameDay:"[Hodiaŭ je] LT",nextDay:"[Morgaŭ je] LT",nextWeek:"dddd [je] LT",lastDay:"[Hieraŭ je] LT",lastWeek:"[pasinta] dddd [je] LT",sameElse:"L"},relativeTime:{future:"je %s",past:"antaŭ %s",s:"sekundoj",m:"minuto",mm:"%d minutoj",h:"horo",hh:"%d horoj",d:"tago",dd:"%d tagoj",M:"monato",MM:"%d monatoj",y:"jaro",yy:"%d jaroj"},ordinalParse:/\d{1,2}a/,ordinal:"%da",week:{dow:1,doy:7}})}),function(a){a(vb)}(function(a){var b="ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),c="ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_");return a.defineLocale("es",{months:"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),monthsShort:function(a,d){return/-MMM-/.test(d)?c[a.month()]:b[a.month()]},weekdays:"domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),weekdaysShort:"dom._lun._mar._mié._jue._vie._sáb.".split("_"),weekdaysMin:"Do_Lu_Ma_Mi_Ju_Vi_Sá".split("_"),longDateFormat:{LT:"H:mm",LTS:"LT:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY LT",LLLL:"dddd, D [de] MMMM [de] YYYY LT"},calendar:{sameDay:function(){return"[hoy a la"+(1!==this.hours()?"s":"")+"] LT"},nextDay:function(){return"[mañana a la"+(1!==this.hours()?"s":"")+"] LT"},nextWeek:function(){return"dddd [a la"+(1!==this.hours()?"s":"")+"] LT"},lastDay:function(){return"[ayer a la"+(1!==this.hours()?"s":"")+"] LT"},lastWeek:function(){return"[el] dddd [pasado a la"+(1!==this.hours()?"s":"")+"] LT"},sameElse:"L"},relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un día",dd:"%d días",M:"un mes",MM:"%d meses",y:"un año",yy:"%d años"},ordinalParse:/\d{1,2}º/,ordinal:"%dº",week:{dow:1,doy:4}})}),function(a){a(vb)}(function(a){function b(a,b,c,d){var e={s:["mõne sekundi","mõni sekund","paar sekundit"],m:["ühe minuti","üks minut"],mm:[a+" minuti",a+" minutit"],h:["ühe tunni","tund aega","üks tund"],hh:[a+" tunni",a+" tundi"],d:["ühe päeva","üks päev"],M:["kuu aja","kuu aega","üks kuu"],MM:[a+" kuu",a+" kuud"],y:["ühe aasta","aasta","üks aasta"],yy:[a+" aasta",a+" aastat"]};return b?e[c][2]?e[c][2]:e[c][1]:d?e[c][0]:e[c][1]}return a.defineLocale("et",{months:"jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"),monthsShort:"jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"),weekdays:"pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev".split("_"),weekdaysShort:"P_E_T_K_N_R_L".split("_"),weekdaysMin:"P_E_T_K_N_R_L".split("_"),longDateFormat:{LT:"H:mm",LTS:"LT:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY LT",LLLL:"dddd, D. MMMM YYYY LT"},calendar:{sameDay:"[Täna,] LT",nextDay:"[Homme,] LT",nextWeek:"[Järgmine] dddd LT",lastDay:"[Eile,] LT",lastWeek:"[Eelmine] dddd LT",sameElse:"L"},relativeTime:{future:"%s pärast",past:"%s tagasi",s:b,m:b,mm:b,h:b,hh:b,d:b,dd:"%d päeva",M:b,MM:b,y:b,yy:b},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})}),function(a){a(vb)}(function(a){return a.defineLocale("eu",{months:"urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split("_"),monthsShort:"urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split("_"),weekdays:"igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split("_"),weekdaysShort:"ig._al._ar._az._og._ol._lr.".split("_"),weekdaysMin:"ig_al_ar_az_og_ol_lr".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"YYYY-MM-DD",LL:"YYYY[ko] MMMM[ren] D[a]",LLL:"YYYY[ko] MMMM[ren] D[a] LT",LLLL:"dddd, YYYY[ko] MMMM[ren] D[a] LT",l:"YYYY-M-D",ll:"YYYY[ko] MMM D[a]",lll:"YYYY[ko] MMM D[a] LT",llll:"ddd, YYYY[ko] MMM D[a] LT"},calendar:{sameDay:"[gaur] LT[etan]",nextDay:"[bihar] LT[etan]",nextWeek:"dddd LT[etan]",lastDay:"[atzo] LT[etan]",lastWeek:"[aurreko] dddd LT[etan]",sameElse:"L"},relativeTime:{future:"%s barru",past:"duela %s",s:"segundo batzuk",m:"minutu bat",mm:"%d minutu",h:"ordu bat",hh:"%d ordu",d:"egun bat",dd:"%d egun",M:"hilabete bat",MM:"%d hilabete",y:"urte bat",yy:"%d urte"},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}})}),function(a){a(vb)}(function(a){var b={1:"۱",2:"۲",3:"۳",4:"۴",5:"۵",6:"۶",7:"۷",8:"۸",9:"۹",0:"۰"},c={"۱":"1","۲":"2","۳":"3","۴":"4","۵":"5","۶":"6","۷":"7","۸":"8","۹":"9","۰":"0"};return a.defineLocale("fa",{months:"ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),monthsShort:"ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),weekdays:"یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),weekdaysShort:"یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),weekdaysMin:"ی_د_س_چ_پ_ج_ش".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd, D MMMM YYYY LT"},meridiemParse:/قبل از ظهر|بعد از ظهر/,isPM:function(a){return/بعد از ظهر/.test(a)},meridiem:function(a){return 12>a?"قبل از ظهر":"بعد از ظهر"},calendar:{sameDay:"[امروز ساعت] LT",nextDay:"[فردا ساعت] LT",nextWeek:"dddd [ساعت] LT",lastDay:"[دیروز ساعت] LT",lastWeek:"dddd [پیش] [ساعت] LT",sameElse:"L"},relativeTime:{future:"در %s",past:"%s پیش",s:"چندین ثانیه",m:"یک دقیقه",mm:"%d دقیقه",h:"یک ساعت",hh:"%d ساعت",d:"یک روز",dd:"%d روز",M:"یک ماه",MM:"%d ماه",y:"یک سال",yy:"%d سال"},preparse:function(a){return a.replace(/[۰-۹]/g,function(a){return c[a]}).replace(/،/g,",")},postformat:function(a){return a.replace(/\d/g,function(a){return b[a]}).replace(/,/g,"،")},ordinalParse:/\d{1,2}م/,ordinal:"%dم",week:{dow:6,doy:12}})}),function(a){a(vb)}(function(a){function b(a,b,d,e){var f="";switch(d){case"s":return e?"muutaman sekunnin":"muutama sekunti";case"m":return e?"minuutin":"minuutti";case"mm":f=e?"minuutin":"minuuttia";break;case"h":return e?"tunnin":"tunti";case"hh":f=e?"tunnin":"tuntia";break;case"d":return e?"päivän":"päivä";case"dd":f=e?"päivän":"päivää";break;case"M":return e?"kuukauden":"kuukausi";case"MM":f=e?"kuukauden":"kuukautta";break;case"y":return e?"vuoden":"vuosi";case"yy":f=e?"vuoden":"vuotta"}return f=c(a,e)+" "+f}function c(a,b){return 10>a?b?e[a]:d[a]:a}var d="nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän".split(" "),e=["nolla","yhden","kahden","kolmen","neljän","viiden","kuuden",d[7],d[8],d[9]];return a.defineLocale("fi",{months:"tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"),monthsShort:"tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu".split("_"),weekdays:"sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"),weekdaysShort:"su_ma_ti_ke_to_pe_la".split("_"),weekdaysMin:"su_ma_ti_ke_to_pe_la".split("_"),longDateFormat:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD.MM.YYYY",LL:"Do MMMM[ta] YYYY",LLL:"Do MMMM[ta] YYYY, [klo] LT",LLLL:"dddd, Do MMMM[ta] YYYY, [klo] LT",l:"D.M.YYYY",ll:"Do MMM YYYY",lll:"Do MMM YYYY, [klo] LT",llll:"ddd, Do MMM YYYY, [klo] LT"},calendar:{sameDay:"[tänään] [klo] LT",nextDay:"[huomenna] [klo] LT",nextWeek:"dddd [klo] LT",lastDay:"[eilen] [klo] LT",lastWeek:"[viime] dddd[na] [klo] LT",sameElse:"L"},relativeTime:{future:"%s päästä",past:"%s sitten",s:b,m:b,mm:b,h:b,hh:b,d:b,dd:b,M:b,MM:b,y:b,yy:b},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})}),function(a){a(vb)}(function(a){return a.defineLocale("fo",{months:"januar_februar_mars_apríl_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),weekdays:"sunnudagur_mánadagur_týsdagur_mikudagur_hósdagur_fríggjadagur_leygardagur".split("_"),weekdaysShort:"sun_mán_týs_mik_hós_frí_ley".split("_"),weekdaysMin:"su_má_tý_mi_hó_fr_le".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd D. MMMM, YYYY LT"},calendar:{sameDay:"[Í dag kl.] LT",nextDay:"[Í morgin kl.] LT",nextWeek:"dddd [kl.] LT",lastDay:"[Í gjár kl.] LT",lastWeek:"[síðstu] dddd [kl] LT",sameElse:"L"},relativeTime:{future:"um %s",past:"%s síðani",s:"fá sekund",m:"ein minutt",mm:"%d minuttir",h:"ein tími",hh:"%d tímar",d:"ein dagur",dd:"%d dagar",M:"ein mánaði",MM:"%d mánaðir",y:"eitt ár",yy:"%d ár"},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})}),function(a){a(vb)}(function(a){return a.defineLocale("fr-ca",{months:"janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),monthsShort:"janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),weekdays:"dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),weekdaysShort:"dim._lun._mar._mer._jeu._ven._sam.".split("_"),weekdaysMin:"Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"YYYY-MM-DD",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd D MMMM YYYY LT"},calendar:{sameDay:"[Aujourd'hui à] LT",nextDay:"[Demain à] LT",nextWeek:"dddd [à] LT",lastDay:"[Hier à] LT",lastWeek:"dddd [dernier à] LT",sameElse:"L"},relativeTime:{future:"dans %s",past:"il y a %s",s:"quelques secondes",m:"une minute",mm:"%d minutes",h:"une heure",hh:"%d heures",d:"un jour",dd:"%d jours",M:"un mois",MM:"%d mois",y:"un an",yy:"%d ans"},ordinalParse:/\d{1,2}(er|)/,ordinal:function(a){return a+(1===a?"er":"")}})}),function(a){a(vb)}(function(a){return a.defineLocale("fr",{months:"janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),monthsShort:"janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),weekdays:"dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),weekdaysShort:"dim._lun._mar._mer._jeu._ven._sam.".split("_"),weekdaysMin:"Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd D MMMM YYYY LT"},calendar:{sameDay:"[Aujourd'hui à] LT",nextDay:"[Demain à] LT",nextWeek:"dddd [à] LT",lastDay:"[Hier à] LT",lastWeek:"dddd [dernier à] LT",sameElse:"L"},relativeTime:{future:"dans %s",past:"il y a %s",s:"quelques secondes",m:"une minute",mm:"%d minutes",h:"une heure",hh:"%d heures",d:"un jour",dd:"%d jours",M:"un mois",MM:"%d mois",y:"un an",yy:"%d ans"},ordinalParse:/\d{1,2}(er|)/,ordinal:function(a){return a+(1===a?"er":"")},week:{dow:1,doy:4}})}),function(a){a(vb)}(function(a){var b="jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.".split("_"),c="jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_");return a.defineLocale("fy",{months:"jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber".split("_"),monthsShort:function(a,d){return/-MMM-/.test(d)?c[a.month()]:b[a.month()]},weekdays:"snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon".split("_"),weekdaysShort:"si._mo._ti._wo._to._fr._so.".split("_"),weekdaysMin:"Si_Mo_Ti_Wo_To_Fr_So".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD-MM-YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd D MMMM YYYY LT"},calendar:{sameDay:"[hjoed om] LT",nextDay:"[moarn om] LT",nextWeek:"dddd [om] LT",lastDay:"[juster om] LT",lastWeek:"[ôfrûne] dddd [om] LT",sameElse:"L"},relativeTime:{future:"oer %s",past:"%s lyn",s:"in pear sekonden",m:"ien minút",mm:"%d minuten",h:"ien oere",hh:"%d oeren",d:"ien dei",dd:"%d dagen",M:"ien moanne",MM:"%d moannen",y:"ien jier",yy:"%d jierren"},ordinalParse:/\d{1,2}(ste|de)/,ordinal:function(a){return a+(1===a||8===a||a>=20?"ste":"de")},week:{dow:1,doy:4}})}),function(a){a(vb)}(function(a){return a.defineLocale("gl",{months:"Xaneiro_Febreiro_Marzo_Abril_Maio_Xuño_Xullo_Agosto_Setembro_Outubro_Novembro_Decembro".split("_"),monthsShort:"Xan._Feb._Mar._Abr._Mai._Xuñ._Xul._Ago._Set._Out._Nov._Dec.".split("_"),weekdays:"Domingo_Luns_Martes_Mércores_Xoves_Venres_Sábado".split("_"),weekdaysShort:"Dom._Lun._Mar._Mér._Xov._Ven._Sáb.".split("_"),weekdaysMin:"Do_Lu_Ma_Mé_Xo_Ve_Sá".split("_"),longDateFormat:{LT:"H:mm",LTS:"LT:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd D MMMM YYYY LT"},calendar:{sameDay:function(){return"[hoxe "+(1!==this.hours()?"ás":"á")+"] LT"},nextDay:function(){return"[mañá "+(1!==this.hours()?"ás":"á")+"] LT"},nextWeek:function(){return"dddd ["+(1!==this.hours()?"ás":"a")+"] LT"},lastDay:function(){return"[onte "+(1!==this.hours()?"á":"a")+"] LT"},lastWeek:function(){return"[o] dddd [pasado "+(1!==this.hours()?"ás":"a")+"] LT"},sameElse:"L"},relativeTime:{future:function(a){return"uns segundos"===a?"nuns segundos":"en "+a},past:"hai %s",s:"uns segundos",m:"un minuto",mm:"%d minutos",h:"unha hora",hh:"%d horas",d:"un día",dd:"%d días",M:"un mes",MM:"%d meses",y:"un ano",yy:"%d anos"},ordinalParse:/\d{1,2}º/,ordinal:"%dº",week:{dow:1,doy:7}})}),function(a){a(vb)}(function(a){return a.defineLocale("he",{months:"ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר".split("_"),monthsShort:"ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳".split("_"),weekdays:"ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת".split("_"),weekdaysShort:"א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳".split("_"),weekdaysMin:"א_ב_ג_ד_ה_ו_ש".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD/MM/YYYY",LL:"D [ב]MMMM YYYY",LLL:"D [ב]MMMM YYYY LT",LLLL:"dddd, D [ב]MMMM YYYY LT",l:"D/M/YYYY",ll:"D MMM YYYY",lll:"D MMM YYYY LT",llll:"ddd, D MMM YYYY LT"},calendar:{sameDay:"[היום ב־]LT",nextDay:"[מחר ב־]LT",nextWeek:"dddd [בשעה] LT",lastDay:"[אתמול ב־]LT",lastWeek:"[ביום] dddd [האחרון בשעה] LT",sameElse:"L"},relativeTime:{future:"בעוד %s",past:"לפני %s",s:"מספר שניות",m:"דקה",mm:"%d דקות",h:"שעה",hh:function(a){return 2===a?"שעתיים":a+" שעות"},d:"יום",dd:function(a){return 2===a?"יומיים":a+" ימים"},M:"חודש",MM:function(a){return 2===a?"חודשיים":a+" חודשים"},y:"שנה",yy:function(a){return 2===a?"שנתיים":a%10===0&&10!==a?a+" שנה":a+" שנים"}}})}),function(a){a(vb)}(function(a){var b={1:"१",2:"२",3:"३",4:"४",5:"५",6:"६",7:"७",8:"८",9:"९",0:"०"},c={"१":"1","२":"2","३":"3","४":"4","५":"5","६":"6","७":"7","८":"8","९":"9","०":"0"};return a.defineLocale("hi",{months:"जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर".split("_"),monthsShort:"जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.".split("_"),weekdays:"रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),weekdaysShort:"रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि".split("_"),weekdaysMin:"र_सो_मं_बु_गु_शु_श".split("_"),longDateFormat:{LT:"A h:mm बजे",LTS:"A h:mm:ss बजे",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, LT",LLLL:"dddd, D MMMM YYYY, LT"},calendar:{sameDay:"[आज] LT",nextDay:"[कल] LT",nextWeek:"dddd, LT",lastDay:"[कल] LT",lastWeek:"[पिछले] dddd, LT",sameElse:"L"},relativeTime:{future:"%s में",past:"%s पहले",s:"कुछ ही क्षण",m:"एक मिनट",mm:"%d मिनट",h:"एक घंटा",hh:"%d घंटे",d:"एक दिन",dd:"%d दिन",M:"एक महीने",MM:"%d महीने",y:"एक वर्ष",yy:"%d वर्ष"},preparse:function(a){return a.replace(/[१२३४५६७८९०]/g,function(a){return c[a]})},postformat:function(a){return a.replace(/\d/g,function(a){return b[a]})},meridiemParse:/रात|सुबह|दोपहर|शाम/,meridiemHour:function(a,b){return 12===a&&(a=0),"रात"===b?4>a?a:a+12:"सुबह"===b?a:"दोपहर"===b?a>=10?a:a+12:"शाम"===b?a+12:void 0},meridiem:function(a){return 4>a?"रात":10>a?"सुबह":17>a?"दोपहर":20>a?"शाम":"रात"},week:{dow:0,doy:6}})}),function(a){a(vb)}(function(a){function b(a,b,c){var d=a+" ";switch(c){case"m":return b?"jedna minuta":"jedne minute";case"mm":return d+=1===a?"minuta":2===a||3===a||4===a?"minute":"minuta";case"h":return b?"jedan sat":"jednog sata";case"hh":return d+=1===a?"sat":2===a||3===a||4===a?"sata":"sati";case"dd":return d+=1===a?"dan":"dana";case"MM":return d+=1===a?"mjesec":2===a||3===a||4===a?"mjeseca":"mjeseci";case"yy":return d+=1===a?"godina":2===a||3===a||4===a?"godine":"godina"}}return a.defineLocale("hr",{months:"sječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_"),monthsShort:"sje._vel._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"),weekdays:"nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),weekdaysShort:"ned._pon._uto._sri._čet._pet._sub.".split("_"),weekdaysMin:"ne_po_ut_sr_če_pe_su".split("_"),longDateFormat:{LT:"H:mm",LTS:"LT:ss",L:"DD. MM. YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY LT",LLLL:"dddd, D. MMMM YYYY LT"},calendar:{sameDay:"[danas u] LT",nextDay:"[sutra u] LT",nextWeek:function(){switch(this.day()){case 0:return"[u] [nedjelju] [u] LT";case 3:return"[u] [srijedu] [u] LT";case 6:return"[u] [subotu] [u] LT";case 1:case 2:case 4:case 5:return"[u] dddd [u] LT"}},lastDay:"[jučer u] LT",lastWeek:function(){switch(this.day()){case 0:case 3:return"[prošlu] dddd [u] LT";case 6:return"[prošle] [subote] [u] LT";case 1:case 2:case 4:case 5:return"[prošli] dddd [u] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"prije %s",s:"par sekundi",m:b,mm:b,h:b,hh:b,d:"dan",dd:b,M:"mjesec",MM:b,y:"godinu",yy:b},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}})}),function(a){a(vb)}(function(a){function b(a,b,c,d){var e=a;switch(c){case"s":return d||b?"néhány másodperc":"néhány másodperce";case"m":return"egy"+(d||b?" perc":" perce");case"mm":return e+(d||b?" perc":" perce");case"h":return"egy"+(d||b?" óra":" órája");case"hh":return e+(d||b?" óra":" órája");case"d":return"egy"+(d||b?" nap":" napja");case"dd":return e+(d||b?" nap":" napja");case"M":return"egy"+(d||b?" hónap":" hónapja");case"MM":return e+(d||b?" hónap":" hónapja");case"y":return"egy"+(d||b?" év":" éve");case"yy":return e+(d||b?" év":" éve")}return""}function c(a){return(a?"":"[múlt] ")+"["+d[this.day()]+"] LT[-kor]"}var d="vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton".split(" ");return a.defineLocale("hu",{months:"január_február_március_április_május_június_július_augusztus_szeptember_október_november_december".split("_"),monthsShort:"jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec".split("_"),weekdays:"vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat".split("_"),weekdaysShort:"vas_hét_kedd_sze_csüt_pén_szo".split("_"),weekdaysMin:"v_h_k_sze_cs_p_szo".split("_"),longDateFormat:{LT:"H:mm",LTS:"LT:ss",L:"YYYY.MM.DD.",LL:"YYYY. MMMM D.",LLL:"YYYY. MMMM D., LT",LLLL:"YYYY. MMMM D., dddd LT"},meridiemParse:/de|du/i,isPM:function(a){return"u"===a.charAt(1).toLowerCase()},meridiem:function(a,b,c){return 12>a?c===!0?"de":"DE":c===!0?"du":"DU"},calendar:{sameDay:"[ma] LT[-kor]",nextDay:"[holnap] LT[-kor]",nextWeek:function(){return c.call(this,!0)},lastDay:"[tegnap] LT[-kor]",lastWeek:function(){return c.call(this,!1)},sameElse:"L"},relativeTime:{future:"%s múlva",past:"%s",s:b,m:b,mm:b,h:b,hh:b,d:b,dd:b,M:b,MM:b,y:b,yy:b},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}})}),function(a){a(vb)}(function(a){function b(a,b){var c={nominative:"հունվար_փետրվար_մարտ_ապրիլ_մայիս_հունիս_հուլիս_օգոստոս_սեպտեմբեր_հոկտեմբեր_նոյեմբեր_դեկտեմբեր".split("_"),accusative:"հունվարի_փետրվարի_մարտի_ապրիլի_մայիսի_հունիսի_հուլիսի_օգոստոսի_սեպտեմբերի_հոկտեմբերի_նոյեմբերի_դեկտեմբերի".split("_")},d=/D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/.test(b)?"accusative":"nominative";return c[d][a.month()]}function c(a){var b="հնվ_փտր_մրտ_ապր_մյս_հնս_հլս_օգս_սպտ_հկտ_նմբ_դկտ".split("_");return b[a.month()]}function d(a){var b="կիրակի_երկուշաբթի_երեքշաբթի_չորեքշաբթի_հինգշաբթի_ուրբաթ_շաբաթ".split("_");return b[a.day()]}return a.defineLocale("hy-am",{months:b,monthsShort:c,weekdays:d,weekdaysShort:"կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),weekdaysMin:"կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY թ.",LLL:"D MMMM YYYY թ., LT",LLLL:"dddd, D MMMM YYYY թ., LT"},calendar:{sameDay:"[այսօր] LT",nextDay:"[վաղը] LT",lastDay:"[երեկ] LT",nextWeek:function(){return"dddd [օրը ժամը] LT"},lastWeek:function(){return"[անցած] dddd [օրը ժամը] LT"},sameElse:"L"},relativeTime:{future:"%s հետո",past:"%s առաջ",s:"մի քանի վայրկյան",m:"րոպե",mm:"%d րոպե",h:"ժամ",hh:"%d ժամ",d:"օր",dd:"%d օր",M:"ամիս",MM:"%d ամիս",y:"տարի",yy:"%d տարի"},meridiemParse:/գիշերվա|առավոտվա|ցերեկվա|երեկոյան/,isPM:function(a){return/^(ցերեկվա|երեկոյան)$/.test(a)},meridiem:function(a){return 4>a?"գիշերվա":12>a?"առավոտվա":17>a?"ցերեկվա":"երեկոյան"},ordinalParse:/\d{1,2}|\d{1,2}-(ին|րդ)/,ordinal:function(a,b){switch(b){case"DDD":case"w":case"W":case"DDDo":return 1===a?a+"-ին":a+"-րդ";default:return a}},week:{dow:1,doy:7}})}),function(a){a(vb)}(function(a){return a.defineLocale("id",{months:"Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"),monthsShort:"Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nov_Des".split("_"),weekdays:"Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"),weekdaysShort:"Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"),weekdaysMin:"Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"),longDateFormat:{LT:"HH.mm",LTS:"LT.ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [pukul] LT",LLLL:"dddd, D MMMM YYYY [pukul] LT"},meridiemParse:/pagi|siang|sore|malam/,meridiemHour:function(a,b){return 12===a&&(a=0),"pagi"===b?a:"siang"===b?a>=11?a:a+12:"sore"===b||"malam"===b?a+12:void 0},meridiem:function(a){return 11>a?"pagi":15>a?"siang":19>a?"sore":"malam"},calendar:{sameDay:"[Hari ini pukul] LT",nextDay:"[Besok pukul] LT",nextWeek:"dddd [pukul] LT",lastDay:"[Kemarin pukul] LT",lastWeek:"dddd [lalu pukul] LT",sameElse:"L"},relativeTime:{future:"dalam %s",past:"%s yang lalu",s:"beberapa detik",m:"semenit",mm:"%d menit",h:"sejam",hh:"%d jam",d:"sehari",dd:"%d hari",M:"sebulan",MM:"%d bulan",y:"setahun",yy:"%d tahun"},week:{dow:1,doy:7}})}),function(a){a(vb)}(function(a){function b(a){return a%100===11?!0:a%10===1?!1:!0}function c(a,c,d,e){var f=a+" ";switch(d){case"s":return c||e?"nokkrar sekúndur":"nokkrum sekúndum";case"m":return c?"mínúta":"mínútu";case"mm":return b(a)?f+(c||e?"mínútur":"mínútum"):c?f+"mínúta":f+"mínútu";case"hh":return b(a)?f+(c||e?"klukkustundir":"klukkustundum"):f+"klukkustund";case"d":return c?"dagur":e?"dag":"degi";case"dd":return b(a)?c?f+"dagar":f+(e?"daga":"dögum"):c?f+"dagur":f+(e?"dag":"degi");case"M":return c?"mánuður":e?"mánuð":"mánuði";case"MM":return b(a)?c?f+"mánuðir":f+(e?"mánuði":"mánuðum"):c?f+"mánuður":f+(e?"mánuð":"mánuði");case"y":return c||e?"ár":"ári";case"yy":return b(a)?f+(c||e?"ár":"árum"):f+(c||e?"ár":"ári")}}return a.defineLocale("is",{months:"janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember".split("_"),monthsShort:"jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des".split("_"),weekdays:"sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur".split("_"),weekdaysShort:"sun_mán_þri_mið_fim_fös_lau".split("_"),weekdaysMin:"Su_Má_Þr_Mi_Fi_Fö_La".split("_"),longDateFormat:{LT:"H:mm",LTS:"LT:ss",L:"DD/MM/YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] LT",LLLL:"dddd, D. MMMM YYYY [kl.] LT"},calendar:{sameDay:"[í dag kl.] LT",nextDay:"[á morgun kl.] LT",nextWeek:"dddd [kl.] LT",lastDay:"[í gær kl.] LT",lastWeek:"[síðasta] dddd [kl.] LT",sameElse:"L"},relativeTime:{future:"eftir %s",past:"fyrir %s síðan",s:c,m:c,mm:c,h:"klukkustund",hh:c,d:c,dd:c,M:c,MM:c,y:c,yy:c},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})}),function(a){a(vb)}(function(a){return a.defineLocale("it",{months:"gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),monthsShort:"gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),weekdays:"Domenica_Lunedì_Martedì_Mercoledì_Giovedì_Venerdì_Sabato".split("_"),weekdaysShort:"Dom_Lun_Mar_Mer_Gio_Ven_Sab".split("_"),weekdaysMin:"D_L_Ma_Me_G_V_S".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd, D MMMM YYYY LT"},calendar:{sameDay:"[Oggi alle] LT",nextDay:"[Domani alle] LT",nextWeek:"dddd [alle] LT",lastDay:"[Ieri alle] LT",lastWeek:function(){switch(this.day()){case 0:return"[la scorsa] dddd [alle] LT";default:return"[lo scorso] dddd [alle] LT"}},sameElse:"L"},relativeTime:{future:function(a){return(/^[0-9].+$/.test(a)?"tra":"in")+" "+a},past:"%s fa",s:"alcuni secondi",m:"un minuto",mm:"%d minuti",h:"un'ora",hh:"%d ore",d:"un giorno",dd:"%d giorni",M:"un mese",MM:"%d mesi",y:"un anno",yy:"%d anni"},ordinalParse:/\d{1,2}º/,ordinal:"%dº",week:{dow:1,doy:4}})}),function(a){a(vb)}(function(a){return a.defineLocale("ja",{months:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),weekdays:"日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split("_"),weekdaysShort:"日_月_火_水_木_金_土".split("_"),weekdaysMin:"日_月_火_水_木_金_土".split("_"),longDateFormat:{LT:"Ah時m分",LTS:"LTs秒",L:"YYYY/MM/DD",LL:"YYYY年M月D日",LLL:"YYYY年M月D日LT",LLLL:"YYYY年M月D日LT dddd"},meridiemParse:/午前|午後/i,isPM:function(a){return"午後"===a},meridiem:function(a){return 12>a?"午前":"午後"},calendar:{sameDay:"[今日] LT",nextDay:"[明日] LT",nextWeek:"[来週]dddd LT",lastDay:"[昨日] LT",lastWeek:"[前週]dddd LT",sameElse:"L"},relativeTime:{future:"%s後",past:"%s前",s:"数秒",m:"1分",mm:"%d分",h:"1時間",hh:"%d時間",d:"1日",dd:"%d日",M:"1ヶ月",MM:"%dヶ月",y:"1年",yy:"%d年"}})}),function(a){a(vb)}(function(a){function b(a,b){var c={nominative:"იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი".split("_"),accusative:"იანვარს_თებერვალს_მარტს_აპრილის_მაისს_ივნისს_ივლისს_აგვისტს_სექტემბერს_ოქტომბერს_ნოემბერს_დეკემბერს".split("_")},d=/D[oD] *MMMM?/.test(b)?"accusative":"nominative";return c[d][a.month()]}function c(a,b){var c={nominative:"კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი".split("_"),accusative:"კვირას_ორშაბათს_სამშაბათს_ოთხშაბათს_ხუთშაბათს_პარასკევს_შაბათს".split("_")},d=/(წინა|შემდეგ)/.test(b)?"accusative":"nominative";return c[d][a.day()]}return a.defineLocale("ka",{months:b,monthsShort:"იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ".split("_"),weekdays:c,weekdaysShort:"კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ".split("_"),weekdaysMin:"კვ_ორ_სა_ოთ_ხუ_პა_შა".split("_"),longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd, D MMMM YYYY LT"},calendar:{sameDay:"[დღეს] LT[-ზე]",nextDay:"[ხვალ] LT[-ზე]",lastDay:"[გუშინ] LT[-ზე]",nextWeek:"[შემდეგ] dddd LT[-ზე]",lastWeek:"[წინა] dddd LT-ზე",sameElse:"L"},relativeTime:{future:function(a){return/(წამი|წუთი|საათი|წელი)/.test(a)?a.replace(/ი$/,"ში"):a+"ში"},past:function(a){return/(წამი|წუთი|საათი|დღე|თვე)/.test(a)?a.replace(/(ი|ე)$/,"ის წინ"):/წელი/.test(a)?a.replace(/წელი$/,"წლის წინ"):void 0},s:"რამდენიმე წამი",m:"წუთი",mm:"%d წუთი",h:"საათი",hh:"%d საათი",d:"დღე",dd:"%d დღე",M:"თვე",MM:"%d თვე",y:"წელი",yy:"%d წელი"},ordinalParse:/0|1-ლი|მე-\d{1,2}|\d{1,2}-ე/,ordinal:function(a){return 0===a?a:1===a?a+"-ლი":20>a||100>=a&&a%20===0||a%100===0?"მე-"+a:a+"-ე"},week:{dow:1,doy:7}})}),function(a){a(vb)}(function(a){return a.defineLocale("km",{months:"មករា_កុម្ភៈ_មិនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),monthsShort:"មករា_កុម្ភៈ_មិនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),weekdays:"អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),weekdaysShort:"អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),weekdaysMin:"អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd, D MMMM YYYY LT"},calendar:{sameDay:"[ថ្ងៃនៈ ម៉ោង] LT",nextDay:"[ស្អែក ម៉ោង] LT",nextWeek:"dddd [ម៉ោង] LT",lastDay:"[ម្សិលមិញ ម៉ោង] LT",lastWeek:"dddd [សប្តាហ៍មុន] [ម៉ោង] LT",sameElse:"L"},relativeTime:{future:"%sទៀត",past:"%sមុន",s:"ប៉ុន្មានវិនាទី",m:"មួយនាទី",mm:"%d នាទី",h:"មួយម៉ោង",hh:"%d ម៉ោង",d:"មួយថ្ងៃ",dd:"%d ថ្ងៃ",M:"មួយខែ",MM:"%d ខែ",y:"មួយឆ្នាំ",yy:"%d ឆ្នាំ"},week:{dow:1,doy:4}})}),function(a){a(vb)}(function(a){return a.defineLocale("ko",{months:"1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),monthsShort:"1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),weekdays:"일요일_월요일_화요일_수요일_목요일_금요일_토요일".split("_"),weekdaysShort:"일_월_화_수_목_금_토".split("_"),weekdaysMin:"일_월_화_수_목_금_토".split("_"),longDateFormat:{LT:"A h시 m분",LTS:"A h시 m분 s초",L:"YYYY.MM.DD",LL:"YYYY년 MMMM D일",LLL:"YYYY년 MMMM D일 LT",LLLL:"YYYY년 MMMM D일 dddd LT"},calendar:{sameDay:"오늘 LT",nextDay:"내일 LT",nextWeek:"dddd LT",lastDay:"어제 LT",lastWeek:"지난주 dddd LT",sameElse:"L"},relativeTime:{future:"%s 후",past:"%s 전",s:"몇초",ss:"%d초",m:"일분",mm:"%d분",h:"한시간",hh:"%d시간",d:"하루",dd:"%d일",M:"한달",MM:"%d달",y:"일년",yy:"%d년"},ordinalParse:/\d{1,2}일/,ordinal:"%d일",meridiemParse:/오전|오후/,isPM:function(a){return"오후"===a},meridiem:function(a){return 12>a?"오전":"오후"}})}),function(a){a(vb)}(function(a){function b(a,b,c){var d={m:["eng Minutt","enger Minutt"],h:["eng Stonn","enger Stonn"],d:["een Dag","engem Dag"],M:["ee Mount","engem Mount"],y:["ee Joer","engem Joer"]};return b?d[c][0]:d[c][1]}function c(a){var b=a.substr(0,a.indexOf(" "));return e(b)?"a "+a:"an "+a}function d(a){var b=a.substr(0,a.indexOf(" "));return e(b)?"viru "+a:"virun "+a}function e(a){if(a=parseInt(a,10),isNaN(a))return!1;if(0>a)return!0;if(10>a)return a>=4&&7>=a?!0:!1;if(100>a){var b=a%10,c=a/10;return e(0===b?c:b)}if(1e4>a){for(;a>=10;)a/=10;return e(a)}return a/=1e3,e(a)}return a.defineLocale("lb",{months:"Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),weekdays:"Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg".split("_"),weekdaysShort:"So._Mé._Dë._Më._Do._Fr._Sa.".split("_"),weekdaysMin:"So_Mé_Dë_Më_Do_Fr_Sa".split("_"),longDateFormat:{LT:"H:mm [Auer]",LTS:"H:mm:ss [Auer]",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY LT",LLLL:"dddd, D. MMMM YYYY LT"},calendar:{sameDay:"[Haut um] LT",sameElse:"L",nextDay:"[Muer um] LT",nextWeek:"dddd [um] LT",lastDay:"[Gëschter um] LT",lastWeek:function(){switch(this.day()){case 2:case 4:return"[Leschten] dddd [um] LT";default:return"[Leschte] dddd [um] LT"}}},relativeTime:{future:c,past:d,s:"e puer Sekonnen",m:b,mm:"%d Minutten",h:b,hh:"%d Stonnen",d:b,dd:"%d Deeg",M:b,MM:"%d Méint",y:b,yy:"%d Joer"},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})}),function(a){a(vb)}(function(a){function b(a,b,c,d){return b?"kelios sekundės":d?"kelių sekundžių":"kelias sekundes"}function c(a,b,c,d){return b?e(c)[0]:d?e(c)[1]:e(c)[2]
}function d(a){return a%10===0||a>10&&20>a}function e(a){return h[a].split("_")}function f(a,b,f,g){var h=a+" ";return 1===a?h+c(a,b,f[0],g):b?h+(d(a)?e(f)[1]:e(f)[0]):g?h+e(f)[1]:h+(d(a)?e(f)[1]:e(f)[2])}function g(a,b){var c=-1===b.indexOf("dddd HH:mm"),d=i[a.day()];return c?d:d.substring(0,d.length-2)+"į"}var h={m:"minutė_minutės_minutę",mm:"minutės_minučių_minutes",h:"valanda_valandos_valandą",hh:"valandos_valandų_valandas",d:"diena_dienos_dieną",dd:"dienos_dienų_dienas",M:"mėnuo_mėnesio_mėnesį",MM:"mėnesiai_mėnesių_mėnesius",y:"metai_metų_metus",yy:"metai_metų_metus"},i="sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split("_");return a.defineLocale("lt",{months:"sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"),monthsShort:"sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),weekdays:g,weekdaysShort:"Sek_Pir_Ant_Tre_Ket_Pen_Šeš".split("_"),weekdaysMin:"S_P_A_T_K_Pn_Š".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"YYYY-MM-DD",LL:"YYYY [m.] MMMM D [d.]",LLL:"YYYY [m.] MMMM D [d.], LT [val.]",LLLL:"YYYY [m.] MMMM D [d.], dddd, LT [val.]",l:"YYYY-MM-DD",ll:"YYYY [m.] MMMM D [d.]",lll:"YYYY [m.] MMMM D [d.], LT [val.]",llll:"YYYY [m.] MMMM D [d.], ddd, LT [val.]"},calendar:{sameDay:"[Šiandien] LT",nextDay:"[Rytoj] LT",nextWeek:"dddd LT",lastDay:"[Vakar] LT",lastWeek:"[Praėjusį] dddd LT",sameElse:"L"},relativeTime:{future:"po %s",past:"prieš %s",s:b,m:c,mm:f,h:c,hh:f,d:c,dd:f,M:c,MM:f,y:c,yy:f},ordinalParse:/\d{1,2}-oji/,ordinal:function(a){return a+"-oji"},week:{dow:1,doy:4}})}),function(a){a(vb)}(function(a){function b(a,b,c){var d=a.split("_");return c?b%10===1&&11!==b?d[2]:d[3]:b%10===1&&11!==b?d[0]:d[1]}function c(a,c,e){return a+" "+b(d[e],a,c)}var d={mm:"minūti_minūtes_minūte_minūtes",hh:"stundu_stundas_stunda_stundas",dd:"dienu_dienas_diena_dienas",MM:"mēnesi_mēnešus_mēnesis_mēneši",yy:"gadu_gadus_gads_gadi"};return a.defineLocale("lv",{months:"janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris".split("_"),monthsShort:"jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec".split("_"),weekdays:"svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena".split("_"),weekdaysShort:"Sv_P_O_T_C_Pk_S".split("_"),weekdaysMin:"Sv_P_O_T_C_Pk_S".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD.MM.YYYY",LL:"YYYY. [gada] D. MMMM",LLL:"YYYY. [gada] D. MMMM, LT",LLLL:"YYYY. [gada] D. MMMM, dddd, LT"},calendar:{sameDay:"[Šodien pulksten] LT",nextDay:"[Rīt pulksten] LT",nextWeek:"dddd [pulksten] LT",lastDay:"[Vakar pulksten] LT",lastWeek:"[Pagājušā] dddd [pulksten] LT",sameElse:"L"},relativeTime:{future:"%s vēlāk",past:"%s agrāk",s:"dažas sekundes",m:"minūti",mm:c,h:"stundu",hh:c,d:"dienu",dd:c,M:"mēnesi",MM:c,y:"gadu",yy:c},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})}),function(a){a(vb)}(function(a){return a.defineLocale("mk",{months:"јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември".split("_"),monthsShort:"јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек".split("_"),weekdays:"недела_понеделник_вторник_среда_четврток_петок_сабота".split("_"),weekdaysShort:"нед_пон_вто_сре_чет_пет_саб".split("_"),weekdaysMin:"нe_пo_вт_ср_че_пе_сa".split("_"),longDateFormat:{LT:"H:mm",LTS:"LT:ss",L:"D.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd, D MMMM YYYY LT"},calendar:{sameDay:"[Денес во] LT",nextDay:"[Утре во] LT",nextWeek:"dddd [во] LT",lastDay:"[Вчера во] LT",lastWeek:function(){switch(this.day()){case 0:case 3:case 6:return"[Во изминатата] dddd [во] LT";case 1:case 2:case 4:case 5:return"[Во изминатиот] dddd [во] LT"}},sameElse:"L"},relativeTime:{future:"после %s",past:"пред %s",s:"неколку секунди",m:"минута",mm:"%d минути",h:"час",hh:"%d часа",d:"ден",dd:"%d дена",M:"месец",MM:"%d месеци",y:"година",yy:"%d години"},ordinalParse:/\d{1,2}-(ев|ен|ти|ви|ри|ми)/,ordinal:function(a){var b=a%10,c=a%100;return 0===a?a+"-ев":0===c?a+"-ен":c>10&&20>c?a+"-ти":1===b?a+"-ви":2===b?a+"-ри":7===b||8===b?a+"-ми":a+"-ти"},week:{dow:1,doy:7}})}),function(a){a(vb)}(function(a){return a.defineLocale("ml",{months:"ജനുവരി_ഫെബ്രുവരി_മാർച്ച്_ഏപ്രിൽ_മേയ്_ജൂൺ_ജൂലൈ_ഓഗസ്റ്റ്_സെപ്റ്റംബർ_ഒക്ടോബർ_നവംബർ_ഡിസംബർ".split("_"),monthsShort:"ജനു._ഫെബ്രു._മാർ._ഏപ്രി._മേയ്_ജൂൺ_ജൂലൈ._ഓഗ._സെപ്റ്റ._ഒക്ടോ._നവം._ഡിസം.".split("_"),weekdays:"ഞായറാഴ്ച_തിങ്കളാഴ്ച_ചൊവ്വാഴ്ച_ബുധനാഴ്ച_വ്യാഴാഴ്ച_വെള്ളിയാഴ്ച_ശനിയാഴ്ച".split("_"),weekdaysShort:"ഞായർ_തിങ്കൾ_ചൊവ്വ_ബുധൻ_വ്യാഴം_വെള്ളി_ശനി".split("_"),weekdaysMin:"ഞാ_തി_ചൊ_ബു_വ്യാ_വെ_ശ".split("_"),longDateFormat:{LT:"A h:mm -നു",LTS:"A h:mm:ss -നു",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, LT",LLLL:"dddd, D MMMM YYYY, LT"},calendar:{sameDay:"[ഇന്ന്] LT",nextDay:"[നാളെ] LT",nextWeek:"dddd, LT",lastDay:"[ഇന്നലെ] LT",lastWeek:"[കഴിഞ്ഞ] dddd, LT",sameElse:"L"},relativeTime:{future:"%s കഴിഞ്ഞ്",past:"%s മുൻപ്",s:"അൽപ നിമിഷങ്ങൾ",m:"ഒരു മിനിറ്റ്",mm:"%d മിനിറ്റ്",h:"ഒരു മണിക്കൂർ",hh:"%d മണിക്കൂർ",d:"ഒരു ദിവസം",dd:"%d ദിവസം",M:"ഒരു മാസം",MM:"%d മാസം",y:"ഒരു വർഷം",yy:"%d വർഷം"},meridiemParse:/രാത്രി|രാവിലെ|ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി/i,isPM:function(a){return/^(ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി)$/.test(a)},meridiem:function(a){return 4>a?"രാത്രി":12>a?"രാവിലെ":17>a?"ഉച്ച കഴിഞ്ഞ്":20>a?"വൈകുന്നേരം":"രാത്രി"}})}),function(a){a(vb)}(function(a){var b={1:"१",2:"२",3:"३",4:"४",5:"५",6:"६",7:"७",8:"८",9:"९",0:"०"},c={"१":"1","२":"2","३":"3","४":"4","५":"5","६":"6","७":"7","८":"8","९":"9","०":"0"};return a.defineLocale("mr",{months:"जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर".split("_"),monthsShort:"जाने._फेब्रु._मार्च._एप्रि._मे._जून._जुलै._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.".split("_"),weekdays:"रविवार_सोमवार_मंगळवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),weekdaysShort:"रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि".split("_"),weekdaysMin:"र_सो_मं_बु_गु_शु_श".split("_"),longDateFormat:{LT:"A h:mm वाजता",LTS:"A h:mm:ss वाजता",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, LT",LLLL:"dddd, D MMMM YYYY, LT"},calendar:{sameDay:"[आज] LT",nextDay:"[उद्या] LT",nextWeek:"dddd, LT",lastDay:"[काल] LT",lastWeek:"[मागील] dddd, LT",sameElse:"L"},relativeTime:{future:"%s नंतर",past:"%s पूर्वी",s:"सेकंद",m:"एक मिनिट",mm:"%d मिनिटे",h:"एक तास",hh:"%d तास",d:"एक दिवस",dd:"%d दिवस",M:"एक महिना",MM:"%d महिने",y:"एक वर्ष",yy:"%d वर्षे"},preparse:function(a){return a.replace(/[१२३४५६७८९०]/g,function(a){return c[a]})},postformat:function(a){return a.replace(/\d/g,function(a){return b[a]})},meridiemParse:/रात्री|सकाळी|दुपारी|सायंकाळी/,meridiemHour:function(a,b){return 12===a&&(a=0),"रात्री"===b?4>a?a:a+12:"सकाळी"===b?a:"दुपारी"===b?a>=10?a:a+12:"सायंकाळी"===b?a+12:void 0},meridiem:function(a){return 4>a?"रात्री":10>a?"सकाळी":17>a?"दुपारी":20>a?"सायंकाळी":"रात्री"},week:{dow:0,doy:6}})}),function(a){a(vb)}(function(a){return a.defineLocale("ms-my",{months:"Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),monthsShort:"Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),weekdays:"Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),weekdaysShort:"Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),weekdaysMin:"Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),longDateFormat:{LT:"HH.mm",LTS:"LT.ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [pukul] LT",LLLL:"dddd, D MMMM YYYY [pukul] LT"},meridiemParse:/pagi|tengahari|petang|malam/,meridiemHour:function(a,b){return 12===a&&(a=0),"pagi"===b?a:"tengahari"===b?a>=11?a:a+12:"petang"===b||"malam"===b?a+12:void 0},meridiem:function(a){return 11>a?"pagi":15>a?"tengahari":19>a?"petang":"malam"},calendar:{sameDay:"[Hari ini pukul] LT",nextDay:"[Esok pukul] LT",nextWeek:"dddd [pukul] LT",lastDay:"[Kelmarin pukul] LT",lastWeek:"dddd [lepas pukul] LT",sameElse:"L"},relativeTime:{future:"dalam %s",past:"%s yang lepas",s:"beberapa saat",m:"seminit",mm:"%d minit",h:"sejam",hh:"%d jam",d:"sehari",dd:"%d hari",M:"sebulan",MM:"%d bulan",y:"setahun",yy:"%d tahun"},week:{dow:1,doy:7}})}),function(a){a(vb)}(function(a){var b={1:"၁",2:"၂",3:"၃",4:"၄",5:"၅",6:"၆",7:"၇",8:"၈",9:"၉",0:"၀"},c={"၁":"1","၂":"2","၃":"3","၄":"4","၅":"5","၆":"6","၇":"7","၈":"8","၉":"9","၀":"0"};return a.defineLocale("my",{months:"ဇန်နဝါရီ_ဖေဖော်ဝါရီ_မတ်_ဧပြီ_မေ_ဇွန်_ဇူလိုင်_သြဂုတ်_စက်တင်ဘာ_အောက်တိုဘာ_နိုဝင်ဘာ_ဒီဇင်ဘာ".split("_"),monthsShort:"ဇန်_ဖေ_မတ်_ပြီ_မေ_ဇွန်_လိုင်_သြ_စက်_အောက်_နို_ဒီ".split("_"),weekdays:"တနင်္ဂနွေ_တနင်္လာ_အင်္ဂါ_ဗုဒ္ဓဟူး_ကြာသပတေး_သောကြာ_စနေ".split("_"),weekdaysShort:"နွေ_လာ_င်္ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),weekdaysMin:"နွေ_လာ_င်္ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd D MMMM YYYY LT"},calendar:{sameDay:"[ယနေ.] LT [မှာ]",nextDay:"[မနက်ဖြန်] LT [မှာ]",nextWeek:"dddd LT [မှာ]",lastDay:"[မနေ.က] LT [မှာ]",lastWeek:"[ပြီးခဲ့သော] dddd LT [မှာ]",sameElse:"L"},relativeTime:{future:"လာမည့် %s မှာ",past:"လွန်ခဲ့သော %s က",s:"စက္ကန်.အနည်းငယ်",m:"တစ်မိနစ်",mm:"%d မိနစ်",h:"တစ်နာရီ",hh:"%d နာရီ",d:"တစ်ရက်",dd:"%d ရက်",M:"တစ်လ",MM:"%d လ",y:"တစ်နှစ်",yy:"%d နှစ်"},preparse:function(a){return a.replace(/[၁၂၃၄၅၆၇၈၉၀]/g,function(a){return c[a]})},postformat:function(a){return a.replace(/\d/g,function(a){return b[a]})},week:{dow:1,doy:4}})}),function(a){a(vb)}(function(a){return a.defineLocale("nb",{months:"januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),weekdays:"søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),weekdaysShort:"søn_man_tirs_ons_tors_fre_lør".split("_"),weekdaysMin:"sø_ma_ti_on_to_fr_lø".split("_"),longDateFormat:{LT:"H.mm",LTS:"LT.ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] LT",LLLL:"dddd D. MMMM YYYY [kl.] LT"},calendar:{sameDay:"[i dag kl.] LT",nextDay:"[i morgen kl.] LT",nextWeek:"dddd [kl.] LT",lastDay:"[i går kl.] LT",lastWeek:"[forrige] dddd [kl.] LT",sameElse:"L"},relativeTime:{future:"om %s",past:"for %s siden",s:"noen sekunder",m:"ett minutt",mm:"%d minutter",h:"en time",hh:"%d timer",d:"en dag",dd:"%d dager",M:"en måned",MM:"%d måneder",y:"ett år",yy:"%d år"},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})}),function(a){a(vb)}(function(a){var b={1:"१",2:"२",3:"३",4:"४",5:"५",6:"६",7:"७",8:"८",9:"९",0:"०"},c={"१":"1","२":"2","३":"3","४":"4","५":"5","६":"6","७":"7","८":"8","९":"9","०":"0"};return a.defineLocale("ne",{months:"जनवरी_फेब्रुवरी_मार्च_अप्रिल_मई_जुन_जुलाई_अगष्ट_सेप्टेम्बर_अक्टोबर_नोभेम्बर_डिसेम्बर".split("_"),monthsShort:"जन._फेब्रु._मार्च_अप्रि._मई_जुन_जुलाई._अग._सेप्ट._अक्टो._नोभे._डिसे.".split("_"),weekdays:"आइतबार_सोमबार_मङ्गलबार_बुधबार_बिहिबार_शुक्रबार_शनिबार".split("_"),weekdaysShort:"आइत._सोम._मङ्गल._बुध._बिहि._शुक्र._शनि.".split("_"),weekdaysMin:"आइ._सो._मङ्_बु._बि._शु._श.".split("_"),longDateFormat:{LT:"Aको h:mm बजे",LTS:"Aको h:mm:ss बजे",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, LT",LLLL:"dddd, D MMMM YYYY, LT"},preparse:function(a){return a.replace(/[१२३४५६७८९०]/g,function(a){return c[a]})},postformat:function(a){return a.replace(/\d/g,function(a){return b[a]})},meridiemParse:/राती|बिहान|दिउँसो|बेलुका|साँझ|राती/,meridiemHour:function(a,b){return 12===a&&(a=0),"राती"===b?3>a?a:a+12:"बिहान"===b?a:"दिउँसो"===b?a>=10?a:a+12:"बेलुका"===b||"साँझ"===b?a+12:void 0},meridiem:function(a){return 3>a?"राती":10>a?"बिहान":15>a?"दिउँसो":18>a?"बेलुका":20>a?"साँझ":"राती"},calendar:{sameDay:"[आज] LT",nextDay:"[भोली] LT",nextWeek:"[आउँदो] dddd[,] LT",lastDay:"[हिजो] LT",lastWeek:"[गएको] dddd[,] LT",sameElse:"L"},relativeTime:{future:"%sमा",past:"%s अगाडी",s:"केही समय",m:"एक मिनेट",mm:"%d मिनेट",h:"एक घण्टा",hh:"%d घण्टा",d:"एक दिन",dd:"%d दिन",M:"एक महिना",MM:"%d महिना",y:"एक बर्ष",yy:"%d बर्ष"},week:{dow:1,doy:7}})}),function(a){a(vb)}(function(a){var b="jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),c="jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_");return a.defineLocale("nl",{months:"januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),monthsShort:function(a,d){return/-MMM-/.test(d)?c[a.month()]:b[a.month()]},weekdays:"zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),weekdaysShort:"zo._ma._di._wo._do._vr._za.".split("_"),weekdaysMin:"Zo_Ma_Di_Wo_Do_Vr_Za".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD-MM-YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd D MMMM YYYY LT"},calendar:{sameDay:"[vandaag om] LT",nextDay:"[morgen om] LT",nextWeek:"dddd [om] LT",lastDay:"[gisteren om] LT",lastWeek:"[afgelopen] dddd [om] LT",sameElse:"L"},relativeTime:{future:"over %s",past:"%s geleden",s:"een paar seconden",m:"één minuut",mm:"%d minuten",h:"één uur",hh:"%d uur",d:"één dag",dd:"%d dagen",M:"één maand",MM:"%d maanden",y:"één jaar",yy:"%d jaar"},ordinalParse:/\d{1,2}(ste|de)/,ordinal:function(a){return a+(1===a||8===a||a>=20?"ste":"de")},week:{dow:1,doy:4}})}),function(a){a(vb)}(function(a){return a.defineLocale("nn",{months:"januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),weekdays:"sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag".split("_"),weekdaysShort:"sun_mån_tys_ons_tor_fre_lau".split("_"),weekdaysMin:"su_må_ty_on_to_fr_lø".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd D MMMM YYYY LT"},calendar:{sameDay:"[I dag klokka] LT",nextDay:"[I morgon klokka] LT",nextWeek:"dddd [klokka] LT",lastDay:"[I går klokka] LT",lastWeek:"[Føregåande] dddd [klokka] LT",sameElse:"L"},relativeTime:{future:"om %s",past:"for %s sidan",s:"nokre sekund",m:"eit minutt",mm:"%d minutt",h:"ein time",hh:"%d timar",d:"ein dag",dd:"%d dagar",M:"ein månad",MM:"%d månader",y:"eit år",yy:"%d år"},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})}),function(a){a(vb)}(function(a){function b(a){return 5>a%10&&a%10>1&&~~(a/10)%10!==1}function c(a,c,d){var e=a+" ";switch(d){case"m":return c?"minuta":"minutę";case"mm":return e+(b(a)?"minuty":"minut");case"h":return c?"godzina":"godzinę";case"hh":return e+(b(a)?"godziny":"godzin");case"MM":return e+(b(a)?"miesiące":"miesięcy");case"yy":return e+(b(a)?"lata":"lat")}}var d="styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"),e="stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_");return a.defineLocale("pl",{months:function(a,b){return/D MMMM/.test(b)?e[a.month()]:d[a.month()]},monthsShort:"sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),weekdays:"niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"),weekdaysShort:"nie_pon_wt_śr_czw_pt_sb".split("_"),weekdaysMin:"N_Pn_Wt_Śr_Cz_Pt_So".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd, D MMMM YYYY LT"},calendar:{sameDay:"[Dziś o] LT",nextDay:"[Jutro o] LT",nextWeek:"[W] dddd [o] LT",lastDay:"[Wczoraj o] LT",lastWeek:function(){switch(this.day()){case 0:return"[W zeszłą niedzielę o] LT";case 3:return"[W zeszłą środę o] LT";case 6:return"[W zeszłą sobotę o] LT";default:return"[W zeszły] dddd [o] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"%s temu",s:"kilka sekund",m:c,mm:c,h:c,hh:c,d:"1 dzień",dd:"%d dni",M:"miesiąc",MM:c,y:"rok",yy:c},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})}),function(a){a(vb)}(function(a){return a.defineLocale("pt-br",{months:"janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),monthsShort:"jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),weekdays:"domingo_segunda-feira_terça-feira_quarta-feira_quinta-feira_sexta-feira_sábado".split("_"),weekdaysShort:"dom_seg_ter_qua_qui_sex_sáb".split("_"),weekdaysMin:"dom_2ª_3ª_4ª_5ª_6ª_sáb".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY [às] LT",LLLL:"dddd, D [de] MMMM [de] YYYY [às] LT"},calendar:{sameDay:"[Hoje às] LT",nextDay:"[Amanhã às] LT",nextWeek:"dddd [às] LT",lastDay:"[Ontem às] LT",lastWeek:function(){return 0===this.day()||6===this.day()?"[Último] dddd [às] LT":"[Última] dddd [às] LT"},sameElse:"L"},relativeTime:{future:"em %s",past:"%s atrás",s:"segundos",m:"um minuto",mm:"%d minutos",h:"uma hora",hh:"%d horas",d:"um dia",dd:"%d dias",M:"um mês",MM:"%d meses",y:"um ano",yy:"%d anos"},ordinalParse:/\d{1,2}º/,ordinal:"%dº"})}),function(a){a(vb)}(function(a){return a.defineLocale("pt",{months:"janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),monthsShort:"jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),weekdays:"domingo_segunda-feira_terça-feira_quarta-feira_quinta-feira_sexta-feira_sábado".split("_"),weekdaysShort:"dom_seg_ter_qua_qui_sex_sáb".split("_"),weekdaysMin:"dom_2ª_3ª_4ª_5ª_6ª_sáb".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY LT",LLLL:"dddd, D [de] MMMM [de] YYYY LT"},calendar:{sameDay:"[Hoje às] LT",nextDay:"[Amanhã às] LT",nextWeek:"dddd [às] LT",lastDay:"[Ontem às] LT",lastWeek:function(){return 0===this.day()||6===this.day()?"[Último] dddd [às] LT":"[Última] dddd [às] LT"},sameElse:"L"},relativeTime:{future:"em %s",past:"há %s",s:"segundos",m:"um minuto",mm:"%d minutos",h:"uma hora",hh:"%d horas",d:"um dia",dd:"%d dias",M:"um mês",MM:"%d meses",y:"um ano",yy:"%d anos"},ordinalParse:/\d{1,2}º/,ordinal:"%dº",week:{dow:1,doy:4}})}),function(a){a(vb)}(function(a){function b(a,b,c){var d={mm:"minute",hh:"ore",dd:"zile",MM:"luni",yy:"ani"},e=" ";return(a%100>=20||a>=100&&a%100===0)&&(e=" de "),a+e+d[c]}return a.defineLocale("ro",{months:"ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split("_"),monthsShort:"ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.".split("_"),weekdays:"duminică_luni_marți_miercuri_joi_vineri_sâmbătă".split("_"),weekdaysShort:"Dum_Lun_Mar_Mie_Joi_Vin_Sâm".split("_"),weekdaysMin:"Du_Lu_Ma_Mi_Jo_Vi_Sâ".split("_"),longDateFormat:{LT:"H:mm",LTS:"LT:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY H:mm",LLLL:"dddd, D MMMM YYYY H:mm"},calendar:{sameDay:"[azi la] LT",nextDay:"[mâine la] LT",nextWeek:"dddd [la] LT",lastDay:"[ieri la] LT",lastWeek:"[fosta] dddd [la] LT",sameElse:"L"},relativeTime:{future:"peste %s",past:"%s în urmă",s:"câteva secunde",m:"un minut",mm:b,h:"o oră",hh:b,d:"o zi",dd:b,M:"o lună",MM:b,y:"un an",yy:b},week:{dow:1,doy:7}})}),function(a){a(vb)}(function(a){function b(a,b){var c=a.split("_");return b%10===1&&b%100!==11?c[0]:b%10>=2&&4>=b%10&&(10>b%100||b%100>=20)?c[1]:c[2]}function c(a,c,d){var e={mm:c?"минута_минуты_минут":"минуту_минуты_минут",hh:"час_часа_часов",dd:"день_дня_дней",MM:"месяц_месяца_месяцев",yy:"год_года_лет"};return"m"===d?c?"минута":"минуту":a+" "+b(e[d],+a)}function d(a,b){var c={nominative:"январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"),accusative:"января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_")},d=/D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/.test(b)?"accusative":"nominative";return c[d][a.month()]}function e(a,b){var c={nominative:"янв_фев_март_апр_май_июнь_июль_авг_сен_окт_ноя_дек".split("_"),accusative:"янв_фев_мар_апр_мая_июня_июля_авг_сен_окт_ноя_дек".split("_")},d=/D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/.test(b)?"accusative":"nominative";return c[d][a.month()]}function f(a,b){var c={nominative:"воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),accusative:"воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу".split("_")},d=/\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?\] ?dddd/.test(b)?"accusative":"nominative";return c[d][a.day()]}return a.defineLocale("ru",{months:d,monthsShort:e,weekdays:f,weekdaysShort:"вс_пн_вт_ср_чт_пт_сб".split("_"),weekdaysMin:"вс_пн_вт_ср_чт_пт_сб".split("_"),monthsParse:[/^янв/i,/^фев/i,/^мар/i,/^апр/i,/^ма[й|я]/i,/^июн/i,/^июл/i,/^авг/i,/^сен/i,/^окт/i,/^ноя/i,/^дек/i],longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY г.",LLL:"D MMMM YYYY г., LT",LLLL:"dddd, D MMMM YYYY г., LT"},calendar:{sameDay:"[Сегодня в] LT",nextDay:"[Завтра в] LT",lastDay:"[Вчера в] LT",nextWeek:function(){return 2===this.day()?"[Во] dddd [в] LT":"[В] dddd [в] LT"},lastWeek:function(a){if(a.week()===this.week())return 2===this.day()?"[Во] dddd [в] LT":"[В] dddd [в] LT";switch(this.day()){case 0:return"[В прошлое] dddd [в] LT";case 1:case 2:case 4:return"[В прошлый] dddd [в] LT";case 3:case 5:case 6:return"[В прошлую] dddd [в] LT"}},sameElse:"L"},relativeTime:{future:"через %s",past:"%s назад",s:"несколько секунд",m:c,mm:c,h:"час",hh:c,d:"день",dd:c,M:"месяц",MM:c,y:"год",yy:c},meridiemParse:/ночи|утра|дня|вечера/i,isPM:function(a){return/^(дня|вечера)$/.test(a)},meridiem:function(a){return 4>a?"ночи":12>a?"утра":17>a?"дня":"вечера"},ordinalParse:/\d{1,2}-(й|го|я)/,ordinal:function(a,b){switch(b){case"M":case"d":case"DDD":return a+"-й";case"D":return a+"-го";case"w":case"W":return a+"-я";default:return a}},week:{dow:1,doy:7}})}),function(a){a(vb)}(function(a){function b(a){return a>1&&5>a}function c(a,c,d,e){var f=a+" ";switch(d){case"s":return c||e?"pár sekúnd":"pár sekundami";case"m":return c?"minúta":e?"minútu":"minútou";case"mm":return c||e?f+(b(a)?"minúty":"minút"):f+"minútami";break;case"h":return c?"hodina":e?"hodinu":"hodinou";case"hh":return c||e?f+(b(a)?"hodiny":"hodín"):f+"hodinami";break;case"d":return c||e?"deň":"dňom";case"dd":return c||e?f+(b(a)?"dni":"dní"):f+"dňami";break;case"M":return c||e?"mesiac":"mesiacom";case"MM":return c||e?f+(b(a)?"mesiace":"mesiacov"):f+"mesiacmi";break;case"y":return c||e?"rok":"rokom";case"yy":return c||e?f+(b(a)?"roky":"rokov"):f+"rokmi"}}var d="január_február_marec_apríl_máj_jún_júl_august_september_október_november_december".split("_"),e="jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec".split("_");return a.defineLocale("sk",{months:d,monthsShort:e,monthsParse:function(a,b){var c,d=[];for(c=0;12>c;c++)d[c]=new RegExp("^"+a[c]+"$|^"+b[c]+"$","i");return d}(d,e),weekdays:"nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota".split("_"),weekdaysShort:"ne_po_ut_st_št_pi_so".split("_"),weekdaysMin:"ne_po_ut_st_št_pi_so".split("_"),longDateFormat:{LT:"H:mm",LTS:"LT:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY LT",LLLL:"dddd D. MMMM YYYY LT"},calendar:{sameDay:"[dnes o] LT",nextDay:"[zajtra o] LT",nextWeek:function(){switch(this.day()){case 0:return"[v nedeľu o] LT";case 1:case 2:return"[v] dddd [o] LT";case 3:return"[v stredu o] LT";case 4:return"[vo štvrtok o] LT";case 5:return"[v piatok o] LT";case 6:return"[v sobotu o] LT"}},lastDay:"[včera o] LT",lastWeek:function(){switch(this.day()){case 0:return"[minulú nedeľu o] LT";case 1:case 2:return"[minulý] dddd [o] LT";case 3:return"[minulú stredu o] LT";case 4:case 5:return"[minulý] dddd [o] LT";case 6:return"[minulú sobotu o] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"pred %s",s:c,m:c,mm:c,h:c,hh:c,d:c,dd:c,M:c,MM:c,y:c,yy:c},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})}),function(a){a(vb)}(function(a){function b(a,b,c){var d=a+" ";switch(c){case"m":return b?"ena minuta":"eno minuto";case"mm":return d+=1===a?"minuta":2===a?"minuti":3===a||4===a?"minute":"minut";case"h":return b?"ena ura":"eno uro";case"hh":return d+=1===a?"ura":2===a?"uri":3===a||4===a?"ure":"ur";case"dd":return d+=1===a?"dan":"dni";case"MM":return d+=1===a?"mesec":2===a?"meseca":3===a||4===a?"mesece":"mesecev";case"yy":return d+=1===a?"leto":2===a?"leti":3===a||4===a?"leta":"let"}}return a.defineLocale("sl",{months:"januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"),monthsShort:"jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),weekdays:"nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota".split("_"),weekdaysShort:"ned._pon._tor._sre._čet._pet._sob.".split("_"),weekdaysMin:"ne_po_to_sr_če_pe_so".split("_"),longDateFormat:{LT:"H:mm",LTS:"LT:ss",L:"DD. MM. YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY LT",LLLL:"dddd, D. MMMM YYYY LT"},calendar:{sameDay:"[danes ob] LT",nextDay:"[jutri ob] LT",nextWeek:function(){switch(this.day()){case 0:return"[v] [nedeljo] [ob] LT";case 3:return"[v] [sredo] [ob] LT";case 6:return"[v] [soboto] [ob] LT";case 1:case 2:case 4:case 5:return"[v] dddd [ob] LT"}},lastDay:"[včeraj ob] LT",lastWeek:function(){switch(this.day()){case 0:case 3:case 6:return"[prejšnja] dddd [ob] LT";case 1:case 2:case 4:case 5:return"[prejšnji] dddd [ob] LT"}},sameElse:"L"},relativeTime:{future:"čez %s",past:"%s nazaj",s:"nekaj sekund",m:b,mm:b,h:b,hh:b,d:"en dan",dd:b,M:"en mesec",MM:b,y:"eno leto",yy:b},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}})}),function(a){a(vb)}(function(a){return a.defineLocale("sq",{months:"Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor".split("_"),monthsShort:"Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj".split("_"),weekdays:"E Diel_E Hënë_E Martë_E Mërkurë_E Enjte_E Premte_E Shtunë".split("_"),weekdaysShort:"Die_Hën_Mar_Mër_Enj_Pre_Sht".split("_"),weekdaysMin:"D_H_Ma_Më_E_P_Sh".split("_"),meridiemParse:/PD|MD/,isPM:function(a){return"M"===a.charAt(0)},meridiem:function(a){return 12>a?"PD":"MD"},longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd, D MMMM YYYY LT"},calendar:{sameDay:"[Sot në] LT",nextDay:"[Nesër në] LT",nextWeek:"dddd [në] LT",lastDay:"[Dje në] LT",lastWeek:"dddd [e kaluar në] LT",sameElse:"L"},relativeTime:{future:"në %s",past:"%s më parë",s:"disa sekonda",m:"një minutë",mm:"%d minuta",h:"një orë",hh:"%d orë",d:"një ditë",dd:"%d ditë",M:"një muaj",MM:"%d muaj",y:"një vit",yy:"%d vite"},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})}),function(a){a(vb)}(function(a){var b={words:{m:["један минут","једне минуте"],mm:["минут","минуте","минута"],h:["један сат","једног сата"],hh:["сат","сата","сати"],dd:["дан","дана","дана"],MM:["месец","месеца","месеци"],yy:["година","године","година"]},correctGrammaticalCase:function(a,b){return 1===a?b[0]:a>=2&&4>=a?b[1]:b[2]},translate:function(a,c,d){var e=b.words[d];return 1===d.length?c?e[0]:e[1]:a+" "+b.correctGrammaticalCase(a,e)}};return a.defineLocale("sr-cyrl",{months:["јануар","фебруар","март","април","мај","јун","јул","август","септембар","октобар","новембар","децембар"],monthsShort:["јан.","феб.","мар.","апр.","мај","јун","јул","авг.","сеп.","окт.","нов.","дец."],weekdays:["недеља","понедељак","уторак","среда","четвртак","петак","субота"],weekdaysShort:["нед.","пон.","уто.","сре.","чет.","пет.","суб."],weekdaysMin:["не","по","ут","ср","че","пе","су"],longDateFormat:{LT:"H:mm",LTS:"LT:ss",L:"DD. MM. YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY LT",LLLL:"dddd, D. MMMM YYYY LT"},calendar:{sameDay:"[данас у] LT",nextDay:"[сутра у] LT",nextWeek:function(){switch(this.day()){case 0:return"[у] [недељу] [у] LT";case 3:return"[у] [среду] [у] LT";case 6:return"[у] [суботу] [у] LT";case 1:case 2:case 4:case 5:return"[у] dddd [у] LT"}},lastDay:"[јуче у] LT",lastWeek:function(){var a=["[прошле] [недеље] [у] LT","[прошлог] [понедељка] [у] LT","[прошлог] [уторка] [у] LT","[прошле] [среде] [у] LT","[прошлог] [четвртка] [у] LT","[прошлог] [петка] [у] LT","[прошле] [суботе] [у] LT"];return a[this.day()]},sameElse:"L"},relativeTime:{future:"за %s",past:"пре %s",s:"неколико секунди",m:b.translate,mm:b.translate,h:b.translate,hh:b.translate,d:"дан",dd:b.translate,M:"месец",MM:b.translate,y:"годину",yy:b.translate},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}})}),function(a){a(vb)}(function(a){var b={words:{m:["jedan minut","jedne minute"],mm:["minut","minute","minuta"],h:["jedan sat","jednog sata"],hh:["sat","sata","sati"],dd:["dan","dana","dana"],MM:["mesec","meseca","meseci"],yy:["godina","godine","godina"]},correctGrammaticalCase:function(a,b){return 1===a?b[0]:a>=2&&4>=a?b[1]:b[2]},translate:function(a,c,d){var e=b.words[d];return 1===d.length?c?e[0]:e[1]:a+" "+b.correctGrammaticalCase(a,e)}};return a.defineLocale("sr",{months:["januar","februar","mart","april","maj","jun","jul","avgust","septembar","oktobar","novembar","decembar"],monthsShort:["jan.","feb.","mar.","apr.","maj","jun","jul","avg.","sep.","okt.","nov.","dec."],weekdays:["nedelja","ponedeljak","utorak","sreda","četvrtak","petak","subota"],weekdaysShort:["ned.","pon.","uto.","sre.","čet.","pet.","sub."],weekdaysMin:["ne","po","ut","sr","če","pe","su"],longDateFormat:{LT:"H:mm",LTS:"LT:ss",L:"DD. MM. YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY LT",LLLL:"dddd, D. MMMM YYYY LT"},calendar:{sameDay:"[danas u] LT",nextDay:"[sutra u] LT",nextWeek:function(){switch(this.day()){case 0:return"[u] [nedelju] [u] LT";case 3:return"[u] [sredu] [u] LT";case 6:return"[u] [subotu] [u] LT";case 1:case 2:case 4:case 5:return"[u] dddd [u] LT"}},lastDay:"[juče u] LT",lastWeek:function(){var a=["[prošle] [nedelje] [u] LT","[prošlog] [ponedeljka] [u] LT","[prošlog] [utorka] [u] LT","[prošle] [srede] [u] LT","[prošlog] [četvrtka] [u] LT","[prošlog] [petka] [u] LT","[prošle] [subote] [u] LT"];return a[this.day()]},sameElse:"L"},relativeTime:{future:"za %s",past:"pre %s",s:"nekoliko sekundi",m:b.translate,mm:b.translate,h:b.translate,hh:b.translate,d:"dan",dd:b.translate,M:"mesec",MM:b.translate,y:"godinu",yy:b.translate},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}})}),function(a){a(vb)}(function(a){return a.defineLocale("sv",{months:"januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"),monthsShort:"jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),weekdays:"söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag".split("_"),weekdaysShort:"sön_mån_tis_ons_tor_fre_lör".split("_"),weekdaysMin:"sö_må_ti_on_to_fr_lö".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"YYYY-MM-DD",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd D MMMM YYYY LT"},calendar:{sameDay:"[Idag] LT",nextDay:"[Imorgon] LT",lastDay:"[Igår] LT",nextWeek:"dddd LT",lastWeek:"[Förra] dddd[en] LT",sameElse:"L"},relativeTime:{future:"om %s",past:"för %s sedan",s:"några sekunder",m:"en minut",mm:"%d minuter",h:"en timme",hh:"%d timmar",d:"en dag",dd:"%d dagar",M:"en månad",MM:"%d månader",y:"ett år",yy:"%d år"},ordinalParse:/\d{1,2}(e|a)/,ordinal:function(a){var b=a%10,c=1===~~(a%100/10)?"e":1===b?"a":2===b?"a":"e";return a+c},week:{dow:1,doy:4}})}),function(a){a(vb)}(function(a){return a.defineLocale("ta",{months:"ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),monthsShort:"ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),weekdays:"ஞாயிற்றுக்கிழமை_திங்கட்கிழமை_செவ்வாய்கிழமை_புதன்கிழமை_வியாழக்கிழமை_வெள்ளிக்கிழமை_சனிக்கிழமை".split("_"),weekdaysShort:"ஞாயிறு_திங்கள்_செவ்வாய்_புதன்_வியாழன்_வெள்ளி_சனி".split("_"),weekdaysMin:"ஞா_தி_செ_பு_வி_வெ_ச".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, LT",LLLL:"dddd, D MMMM YYYY, LT"},calendar:{sameDay:"[இன்று] LT",nextDay:"[நாளை] LT",nextWeek:"dddd, LT",lastDay:"[நேற்று] LT",lastWeek:"[கடந்த வாரம்] dddd, LT",sameElse:"L"},relativeTime:{future:"%s இல்",past:"%s முன்",s:"ஒரு சில விநாடிகள்",m:"ஒரு நிமிடம்",mm:"%d நிமிடங்கள்",h:"ஒரு மணி நேரம்",hh:"%d மணி நேரம்",d:"ஒரு நாள்",dd:"%d நாட்கள்",M:"ஒரு மாதம்",MM:"%d மாதங்கள்",y:"ஒரு வருடம்",yy:"%d ஆண்டுகள்"},ordinalParse:/\d{1,2}வது/,ordinal:function(a){return a+"வது"},meridiemParse:/யாமம்|வைகறை|காலை|நண்பகல்|எற்பாடு|மாலை/,meridiem:function(a){return 2>a?" யாமம்":6>a?" வைகறை":10>a?" காலை":14>a?" நண்பகல்":18>a?" எற்பாடு":22>a?" மாலை":" யாமம்"},meridiemHour:function(a,b){return 12===a&&(a=0),"யாமம்"===b?2>a?a:a+12:"வைகறை"===b||"காலை"===b?a:"நண்பகல்"===b&&a>=10?a:a+12},week:{dow:0,doy:6}})}),function(a){a(vb)}(function(a){return a.defineLocale("th",{months:"มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม".split("_"),monthsShort:"มกรา_กุมภา_มีนา_เมษา_พฤษภา_มิถุนา_กรกฎา_สิงหา_กันยา_ตุลา_พฤศจิกา_ธันวา".split("_"),weekdays:"อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์".split("_"),weekdaysShort:"อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์".split("_"),weekdaysMin:"อา._จ._อ._พ._พฤ._ศ._ส.".split("_"),longDateFormat:{LT:"H นาฬิกา m นาที",LTS:"LT s วินาที",L:"YYYY/MM/DD",LL:"D MMMM YYYY",LLL:"D MMMM YYYY เวลา LT",LLLL:"วันddddที่ D MMMM YYYY เวลา LT"},meridiemParse:/ก่อนเที่ยง|หลังเที่ยง/,isPM:function(a){return"หลังเที่ยง"===a
},meridiem:function(a){return 12>a?"ก่อนเที่ยง":"หลังเที่ยง"},calendar:{sameDay:"[วันนี้ เวลา] LT",nextDay:"[พรุ่งนี้ เวลา] LT",nextWeek:"dddd[หน้า เวลา] LT",lastDay:"[เมื่อวานนี้ เวลา] LT",lastWeek:"[วัน]dddd[ที่แล้ว เวลา] LT",sameElse:"L"},relativeTime:{future:"อีก %s",past:"%sที่แล้ว",s:"ไม่กี่วินาที",m:"1 นาที",mm:"%d นาที",h:"1 ชั่วโมง",hh:"%d ชั่วโมง",d:"1 วัน",dd:"%d วัน",M:"1 เดือน",MM:"%d เดือน",y:"1 ปี",yy:"%d ปี"}})}),function(a){a(vb)}(function(a){return a.defineLocale("tl-ph",{months:"Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split("_"),monthsShort:"Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"),weekdays:"Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"),weekdaysShort:"Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"),weekdaysMin:"Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"MM/D/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY LT",LLLL:"dddd, MMMM DD, YYYY LT"},calendar:{sameDay:"[Ngayon sa] LT",nextDay:"[Bukas sa] LT",nextWeek:"dddd [sa] LT",lastDay:"[Kahapon sa] LT",lastWeek:"dddd [huling linggo] LT",sameElse:"L"},relativeTime:{future:"sa loob ng %s",past:"%s ang nakalipas",s:"ilang segundo",m:"isang minuto",mm:"%d minuto",h:"isang oras",hh:"%d oras",d:"isang araw",dd:"%d araw",M:"isang buwan",MM:"%d buwan",y:"isang taon",yy:"%d taon"},ordinalParse:/\d{1,2}/,ordinal:function(a){return a},week:{dow:1,doy:4}})}),function(a){a(vb)}(function(a){var b={1:"'inci",5:"'inci",8:"'inci",70:"'inci",80:"'inci",2:"'nci",7:"'nci",20:"'nci",50:"'nci",3:"'üncü",4:"'üncü",100:"'üncü",6:"'ncı",9:"'uncu",10:"'uncu",30:"'uncu",60:"'ıncı",90:"'ıncı"};return a.defineLocale("tr",{months:"Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık".split("_"),monthsShort:"Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara".split("_"),weekdays:"Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi".split("_"),weekdaysShort:"Paz_Pts_Sal_Çar_Per_Cum_Cts".split("_"),weekdaysMin:"Pz_Pt_Sa_Ça_Pe_Cu_Ct".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd, D MMMM YYYY LT"},calendar:{sameDay:"[bugün saat] LT",nextDay:"[yarın saat] LT",nextWeek:"[haftaya] dddd [saat] LT",lastDay:"[dün] LT",lastWeek:"[geçen hafta] dddd [saat] LT",sameElse:"L"},relativeTime:{future:"%s sonra",past:"%s önce",s:"birkaç saniye",m:"bir dakika",mm:"%d dakika",h:"bir saat",hh:"%d saat",d:"bir gün",dd:"%d gün",M:"bir ay",MM:"%d ay",y:"bir yıl",yy:"%d yıl"},ordinalParse:/\d{1,2}'(inci|nci|üncü|ncı|uncu|ıncı)/,ordinal:function(a){if(0===a)return a+"'ıncı";var c=a%10,d=a%100-c,e=a>=100?100:null;return a+(b[c]||b[d]||b[e])},week:{dow:1,doy:7}})}),function(a){a(vb)}(function(a){return a.defineLocale("tzm-latn",{months:"innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),monthsShort:"innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),weekdays:"asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),weekdaysShort:"asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),weekdaysMin:"asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd D MMMM YYYY LT"},calendar:{sameDay:"[asdkh g] LT",nextDay:"[aska g] LT",nextWeek:"dddd [g] LT",lastDay:"[assant g] LT",lastWeek:"dddd [g] LT",sameElse:"L"},relativeTime:{future:"dadkh s yan %s",past:"yan %s",s:"imik",m:"minuḍ",mm:"%d minuḍ",h:"saɛa",hh:"%d tassaɛin",d:"ass",dd:"%d ossan",M:"ayowr",MM:"%d iyyirn",y:"asgas",yy:"%d isgasn"},week:{dow:6,doy:12}})}),function(a){a(vb)}(function(a){return a.defineLocale("tzm",{months:"ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),monthsShort:"ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),weekdays:"ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),weekdaysShort:"ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),weekdaysMin:"ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd D MMMM YYYY LT"},calendar:{sameDay:"[ⴰⵙⴷⵅ ⴴ] LT",nextDay:"[ⴰⵙⴽⴰ ⴴ] LT",nextWeek:"dddd [ⴴ] LT",lastDay:"[ⴰⵚⴰⵏⵜ ⴴ] LT",lastWeek:"dddd [ⴴ] LT",sameElse:"L"},relativeTime:{future:"ⴷⴰⴷⵅ ⵙ ⵢⴰⵏ %s",past:"ⵢⴰⵏ %s",s:"ⵉⵎⵉⴽ",m:"ⵎⵉⵏⵓⴺ",mm:"%d ⵎⵉⵏⵓⴺ",h:"ⵙⴰⵄⴰ",hh:"%d ⵜⴰⵙⵙⴰⵄⵉⵏ",d:"ⴰⵙⵙ",dd:"%d oⵙⵙⴰⵏ",M:"ⴰⵢoⵓⵔ",MM:"%d ⵉⵢⵢⵉⵔⵏ",y:"ⴰⵙⴳⴰⵙ",yy:"%d ⵉⵙⴳⴰⵙⵏ"},week:{dow:6,doy:12}})}),function(a){a(vb)}(function(a){function b(a,b){var c=a.split("_");return b%10===1&&b%100!==11?c[0]:b%10>=2&&4>=b%10&&(10>b%100||b%100>=20)?c[1]:c[2]}function c(a,c,d){var e={mm:"хвилина_хвилини_хвилин",hh:"година_години_годин",dd:"день_дні_днів",MM:"місяць_місяці_місяців",yy:"рік_роки_років"};return"m"===d?c?"хвилина":"хвилину":"h"===d?c?"година":"годину":a+" "+b(e[d],+a)}function d(a,b){var c={nominative:"січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень".split("_"),accusative:"січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня".split("_")},d=/D[oD]? *MMMM?/.test(b)?"accusative":"nominative";return c[d][a.month()]}function e(a,b){var c={nominative:"неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота".split("_"),accusative:"неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу".split("_"),genitive:"неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи".split("_")},d=/(\[[ВвУу]\]) ?dddd/.test(b)?"accusative":/\[?(?:минулої|наступної)? ?\] ?dddd/.test(b)?"genitive":"nominative";return c[d][a.day()]}function f(a){return function(){return a+"о"+(11===this.hours()?"б":"")+"] LT"}}return a.defineLocale("uk",{months:d,monthsShort:"січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд".split("_"),weekdays:e,weekdaysShort:"нд_пн_вт_ср_чт_пт_сб".split("_"),weekdaysMin:"нд_пн_вт_ср_чт_пт_сб".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY р.",LLL:"D MMMM YYYY р., LT",LLLL:"dddd, D MMMM YYYY р., LT"},calendar:{sameDay:f("[Сьогодні "),nextDay:f("[Завтра "),lastDay:f("[Вчора "),nextWeek:f("[У] dddd ["),lastWeek:function(){switch(this.day()){case 0:case 3:case 5:case 6:return f("[Минулої] dddd [").call(this);case 1:case 2:case 4:return f("[Минулого] dddd [").call(this)}},sameElse:"L"},relativeTime:{future:"за %s",past:"%s тому",s:"декілька секунд",m:c,mm:c,h:"годину",hh:c,d:"день",dd:c,M:"місяць",MM:c,y:"рік",yy:c},meridiemParse:/ночі|ранку|дня|вечора/,isPM:function(a){return/^(дня|вечора)$/.test(a)},meridiem:function(a){return 4>a?"ночі":12>a?"ранку":17>a?"дня":"вечора"},ordinalParse:/\d{1,2}-(й|го)/,ordinal:function(a,b){switch(b){case"M":case"d":case"DDD":case"w":case"W":return a+"-й";case"D":return a+"-го";default:return a}},week:{dow:1,doy:7}})}),function(a){a(vb)}(function(a){return a.defineLocale("uz",{months:"январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"),monthsShort:"янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"),weekdays:"Якшанба_Душанба_Сешанба_Чоршанба_Пайшанба_Жума_Шанба".split("_"),weekdaysShort:"Якш_Душ_Сеш_Чор_Пай_Жум_Шан".split("_"),weekdaysMin:"Як_Ду_Се_Чо_Па_Жу_Ша".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"D MMMM YYYY, dddd LT"},calendar:{sameDay:"[Бугун соат] LT [да]",nextDay:"[Эртага] LT [да]",nextWeek:"dddd [куни соат] LT [да]",lastDay:"[Кеча соат] LT [да]",lastWeek:"[Утган] dddd [куни соат] LT [да]",sameElse:"L"},relativeTime:{future:"Якин %s ичида",past:"Бир неча %s олдин",s:"фурсат",m:"бир дакика",mm:"%d дакика",h:"бир соат",hh:"%d соат",d:"бир кун",dd:"%d кун",M:"бир ой",MM:"%d ой",y:"бир йил",yy:"%d йил"},week:{dow:1,doy:7}})}),function(a){a(vb)}(function(a){return a.defineLocale("vi",{months:"tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12".split("_"),monthsShort:"Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split("_"),weekdays:"chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy".split("_"),weekdaysShort:"CN_T2_T3_T4_T5_T6_T7".split("_"),weekdaysMin:"CN_T2_T3_T4_T5_T6_T7".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD/MM/YYYY",LL:"D MMMM [năm] YYYY",LLL:"D MMMM [năm] YYYY LT",LLLL:"dddd, D MMMM [năm] YYYY LT",l:"DD/M/YYYY",ll:"D MMM YYYY",lll:"D MMM YYYY LT",llll:"ddd, D MMM YYYY LT"},calendar:{sameDay:"[Hôm nay lúc] LT",nextDay:"[Ngày mai lúc] LT",nextWeek:"dddd [tuần tới lúc] LT",lastDay:"[Hôm qua lúc] LT",lastWeek:"dddd [tuần rồi lúc] LT",sameElse:"L"},relativeTime:{future:"%s tới",past:"%s trước",s:"vài giây",m:"một phút",mm:"%d phút",h:"một giờ",hh:"%d giờ",d:"một ngày",dd:"%d ngày",M:"một tháng",MM:"%d tháng",y:"một năm",yy:"%d năm"},ordinalParse:/\d{1,2}/,ordinal:function(a){return a},week:{dow:1,doy:4}})}),function(a){a(vb)}(function(a){return a.defineLocale("zh-cn",{months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),weekdaysShort:"周日_周一_周二_周三_周四_周五_周六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),longDateFormat:{LT:"Ah点mm",LTS:"Ah点m分s秒",L:"YYYY-MM-DD",LL:"YYYY年MMMD日",LLL:"YYYY年MMMD日LT",LLLL:"YYYY年MMMD日ddddLT",l:"YYYY-MM-DD",ll:"YYYY年MMMD日",lll:"YYYY年MMMD日LT",llll:"YYYY年MMMD日ddddLT"},meridiemParse:/凌晨|早上|上午|中午|下午|晚上/,meridiemHour:function(a,b){return 12===a&&(a=0),"凌晨"===b||"早上"===b||"上午"===b?a:"下午"===b||"晚上"===b?a+12:a>=11?a:a+12},meridiem:function(a,b){var c=100*a+b;return 600>c?"凌晨":900>c?"早上":1130>c?"上午":1230>c?"中午":1800>c?"下午":"晚上"},calendar:{sameDay:function(){return 0===this.minutes()?"[今天]Ah[点整]":"[今天]LT"},nextDay:function(){return 0===this.minutes()?"[明天]Ah[点整]":"[明天]LT"},lastDay:function(){return 0===this.minutes()?"[昨天]Ah[点整]":"[昨天]LT"},nextWeek:function(){var b,c;return b=a().startOf("week"),c=this.unix()-b.unix()>=604800?"[下]":"[本]",0===this.minutes()?c+"dddAh点整":c+"dddAh点mm"},lastWeek:function(){var b,c;return b=a().startOf("week"),c=this.unix()<b.unix()?"[上]":"[本]",0===this.minutes()?c+"dddAh点整":c+"dddAh点mm"},sameElse:"LL"},ordinalParse:/\d{1,2}(日|月|周)/,ordinal:function(a,b){switch(b){case"d":case"D":case"DDD":return a+"日";case"M":return a+"月";case"w":case"W":return a+"周";default:return a}},relativeTime:{future:"%s内",past:"%s前",s:"几秒",m:"1分钟",mm:"%d分钟",h:"1小时",hh:"%d小时",d:"1天",dd:"%d天",M:"1个月",MM:"%d个月",y:"1年",yy:"%d年"},week:{dow:1,doy:4}})}),function(a){a(vb)}(function(a){return a.defineLocale("zh-tw",{months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),weekdaysShort:"週日_週一_週二_週三_週四_週五_週六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),longDateFormat:{LT:"Ah點mm",LTS:"Ah點m分s秒",L:"YYYY年MMMD日",LL:"YYYY年MMMD日",LLL:"YYYY年MMMD日LT",LLLL:"YYYY年MMMD日ddddLT",l:"YYYY年MMMD日",ll:"YYYY年MMMD日",lll:"YYYY年MMMD日LT",llll:"YYYY年MMMD日ddddLT"},meridiemParse:/早上|上午|中午|下午|晚上/,meridiemHour:function(a,b){return 12===a&&(a=0),"早上"===b||"上午"===b?a:"中午"===b?a>=11?a:a+12:"下午"===b||"晚上"===b?a+12:void 0},meridiem:function(a,b){var c=100*a+b;return 900>c?"早上":1130>c?"上午":1230>c?"中午":1800>c?"下午":"晚上"},calendar:{sameDay:"[今天]LT",nextDay:"[明天]LT",nextWeek:"[下]ddddLT",lastDay:"[昨天]LT",lastWeek:"[上]ddddLT",sameElse:"L"},ordinalParse:/\d{1,2}(日|月|週)/,ordinal:function(a,b){switch(b){case"d":case"D":case"DDD":return a+"日";case"M":return a+"月";case"w":case"W":return a+"週";default:return a}},relativeTime:{future:"%s內",past:"%s前",s:"幾秒",m:"一分鐘",mm:"%d分鐘",h:"一小時",hh:"%d小時",d:"一天",dd:"%d天",M:"一個月",MM:"%d個月",y:"一年",yy:"%d年"}})}),vb.locale("en"),Lb?module.exports=vb:"function"==typeof define&&define.amd?(define(function(a,b,c){return c.config&&c.config()&&c.config().noGlobal===!0&&(zb.moment=wb),vb}),ub(!0)):ub()}).call(this);
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],12:[function(require,module,exports){
//fgnass.github.com/spin.js#v2.0.1
!function(a,b){"object"==typeof exports?module.exports=b():"function"==typeof define&&define.amd?define(b):a.Spinner=b()}(this,function(){"use strict";function a(a,b){var c,d=document.createElement(a||"div");for(c in b)d[c]=b[c];return d}function b(a){for(var b=1,c=arguments.length;c>b;b++)a.appendChild(arguments[b]);return a}function c(a,b,c,d){var e=["opacity",b,~~(100*a),c,d].join("-"),f=.01+c/d*100,g=Math.max(1-(1-a)/b*(100-f),a),h=j.substring(0,j.indexOf("Animation")).toLowerCase(),i=h&&"-"+h+"-"||"";return l[e]||(m.insertRule("@"+i+"keyframes "+e+"{0%{opacity:"+g+"}"+f+"%{opacity:"+a+"}"+(f+.01)+"%{opacity:1}"+(f+b)%100+"%{opacity:"+a+"}100%{opacity:"+g+"}}",m.cssRules.length),l[e]=1),e}function d(a,b){var c,d,e=a.style;for(b=b.charAt(0).toUpperCase()+b.slice(1),d=0;d<k.length;d++)if(c=k[d]+b,void 0!==e[c])return c;return void 0!==e[b]?b:void 0}function e(a,b){for(var c in b)a.style[d(a,c)||c]=b[c];return a}function f(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)void 0===a[d]&&(a[d]=c[d])}return a}function g(a,b){return"string"==typeof a?a:a[b%a.length]}function h(a){this.opts=f(a||{},h.defaults,n)}function i(){function c(b,c){return a("<"+b+' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">',c)}m.addRule(".spin-vml","behavior:url(#default#VML)"),h.prototype.lines=function(a,d){function f(){return e(c("group",{coordsize:k+" "+k,coordorigin:-j+" "+-j}),{width:k,height:k})}function h(a,h,i){b(m,b(e(f(),{rotation:360/d.lines*a+"deg",left:~~h}),b(e(c("roundrect",{arcsize:d.corners}),{width:j,height:d.width,left:d.radius,top:-d.width>>1,filter:i}),c("fill",{color:g(d.color,a),opacity:d.opacity}),c("stroke",{opacity:0}))))}var i,j=d.length+d.width,k=2*j,l=2*-(d.width+d.length)+"px",m=e(f(),{position:"absolute",top:l,left:l});if(d.shadow)for(i=1;i<=d.lines;i++)h(i,-2,"progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");for(i=1;i<=d.lines;i++)h(i);return b(a,m)},h.prototype.opacity=function(a,b,c,d){var e=a.firstChild;d=d.shadow&&d.lines||0,e&&b+d<e.childNodes.length&&(e=e.childNodes[b+d],e=e&&e.firstChild,e=e&&e.firstChild,e&&(e.opacity=c))}}var j,k=["webkit","Moz","ms","O"],l={},m=function(){var c=a("style",{type:"text/css"});return b(document.getElementsByTagName("head")[0],c),c.sheet||c.styleSheet}(),n={lines:12,length:7,width:5,radius:10,rotate:0,corners:1,color:"#000",direction:1,speed:1,trail:100,opacity:.25,fps:20,zIndex:2e9,className:"spinner",top:"50%",left:"50%",position:"absolute"};h.defaults={},f(h.prototype,{spin:function(b){this.stop();{var c=this,d=c.opts,f=c.el=e(a(0,{className:d.className}),{position:d.position,width:0,zIndex:d.zIndex});d.radius+d.length+d.width}if(e(f,{left:d.left,top:d.top}),b&&b.insertBefore(f,b.firstChild||null),f.setAttribute("role","progressbar"),c.lines(f,c.opts),!j){var g,h=0,i=(d.lines-1)*(1-d.direction)/2,k=d.fps,l=k/d.speed,m=(1-d.opacity)/(l*d.trail/100),n=l/d.lines;!function o(){h++;for(var a=0;a<d.lines;a++)g=Math.max(1-(h+(d.lines-a)*n)%l*m,d.opacity),c.opacity(f,a*d.direction+i,g,d);c.timeout=c.el&&setTimeout(o,~~(1e3/k))}()}return c},stop:function(){var a=this.el;return a&&(clearTimeout(this.timeout),a.parentNode&&a.parentNode.removeChild(a),this.el=void 0),this},lines:function(d,f){function h(b,c){return e(a(),{position:"absolute",width:f.length+f.width+"px",height:f.width+"px",background:b,boxShadow:c,transformOrigin:"left",transform:"rotate("+~~(360/f.lines*k+f.rotate)+"deg) translate("+f.radius+"px,0)",borderRadius:(f.corners*f.width>>1)+"px"})}for(var i,k=0,l=(f.lines-1)*(1-f.direction)/2;k<f.lines;k++)i=e(a(),{position:"absolute",top:1+~(f.width/2)+"px",transform:f.hwaccel?"translate3d(0,0,0)":"",opacity:f.opacity,animation:j&&c(f.opacity,f.trail,l+k*f.direction,f.lines)+" "+1/f.speed+"s linear infinite"}),f.shadow&&b(i,e(h("#000","0 0 4px #000"),{top:"2px"})),b(d,b(i,h(g(f.color,k),"0 0 1px rgba(0,0,0,.1)")));return d},opacity:function(a,b,c){b<a.childNodes.length&&(a.childNodes[b].style.opacity=c)}});var o=e(a("group"),{behavior:"url(#default#VML)"});return!d(o,"transform")&&o.adj?i():j=d(o,"animation"),h});

},{}],13:[function(require,module,exports){
'use strict';

var angular = require('angular');
require('angular-ui-route');
require('angular-cookies');
require('angular-sanitize');
require('angular-animate');
require('angular-resource');
require('angular-strap');
require('angular-strap-tpl');

var app = angular.module('elyoosApp', [
    'ui.router',
    'ngSanitize',
    'ngCookies',
    'ngAnimate',
    'ngResource',
    'mgcrea.ngStrap'
]);

app.constant('VERSION', require('../../package.json').version);

require('templates');

require('./auth');
require('./contact');
require('./directives');
require('./filters');
require('./home');
require('./navigation');
require('./settings');
require('./util');

app.config(['$stateProvider', '$urlRouterProvider', '$httpProvider', '$locationProvider', '$modalProvider',
    function ($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider, $modalProvider) {

        $urlRouterProvider.otherwise('/home');

        $stateProvider
            .state('home', {
                url: '/home',
                views: {
                    content: {
                        templateUrl: 'app/modules/home/home.html',
                        controller: 'HomeCtrl'
                    },
                    header: {
                        templateUrl: 'app/modules/navigation/loggedInHeader.html',
                        controller: 'LoggedInHeaderCtrl'
                    }
                }
            })
            .state('public', {
                abstract: true,
                views: {
                    header: {templateUrl: 'app/modules/navigation/publicHeader.html'}
                }
            });

        $locationProvider.html5Mode(true);

        $httpProvider.interceptors.push(['$q', '$location', function ($q, $location) {
            return {
                'responseError': function (response) {
                    if (response.status === 401 || response.status === 403) {
                        $location.path('/login');
                    }
                    return $q.reject(response);
                }
            };
        }]);

        angular.extend($modalProvider.defaults, {
            html: true
        });

    }]).run(['$rootScope', '$state', 'Auth', function ($rootScope, $state, Auth) {
    $rootScope.$state = $state;
    $rootScope.$on('$stateChangeStart', function (event, toState) {
        if (!Auth.authorize(toState.isPublic)) {
            event.preventDefault();
            $state.go('login');
        }
    });
}]);
},{"../../package.json":117,"./auth":15,"./contact":25,"./directives":38,"./filters":55,"./home":59,"./navigation":69,"./settings":94,"./util":114,"angular":4,"angular-animate":2,"angular-cookies":3,"angular-resource":5,"angular-sanitize":6,"angular-strap":9,"angular-strap-tpl":10,"angular-ui-route":7,"templates":1}],14:[function(require,module,exports){
'use strict';

module.exports = ['$http', '$cookieStore', '$q', function ($http, $cookieStore, $q) {

    var currentUser = $cookieStore.get('user') || {username: undefined};

    $cookieStore.remove('user');

    function changeUser(user) {
        angular.extend(currentUser, user);
    }

    this.authorize = function (isPublic) {
        if (isPublic) {
            return true;
        }
        return currentUser.username !== undefined;
    };
    this.login = function (user) {
        var deferred = $q.defer();
        $http.post('/api/login', user).showSuccess(function (loggedinUser) {
            changeUser(loggedinUser);
            deferred.resolve(loggedinUser);
        }).error(deferred.reject);
        return deferred.promise;
    };
    this.logout = function () {
        var deferred = $q.defer();
        $http.post('/api/logout').showSuccess(function () {
            changeUser({
                username: undefined
            });
            deferred.resolve();
        }).error(deferred.reject);
        return deferred.promise;
    };
}];

},{}],15:[function(require,module,exports){
'use strict';

var app = require('angular').module('elyoosApp');

app.controller('LoginCtrl', require('./loginCtrl'));
app.controller('RegisterCtrl', require('./registerCtrl'));

app.factory('Register', require('./register'));

app.service('Auth', require('./auth'));

app.config(['$stateProvider', function ($stateProvider) {

    $stateProvider
        .state('public.login', {
            url: '/login',
            views: {
                'content@': {
                    templateUrl: 'app/modules/auth/login.html',
                    controller: 'LoginCtrl'
                }
            },
            isPublic: true
        })
        .state('register', {
            url: '/register',
            views: {
                'content@': {
                    templateUrl: 'app/modules/auth/register.html',
                    controller: 'RegisterCtrl'
                }
            }
        });
}]);
},{"./auth":14,"./loginCtrl":16,"./register":17,"./registerCtrl":18,"angular":4}],16:[function(require,module,exports){
'use strict';

module.exports = ['$scope', '$location', 'Auth', function ($scope, $location, Auth) {
    $scope.login = function () {
        delete $scope.error;
        Auth.login({
            username: $scope.loginuser.email,
            password: $scope.loginuser.password
        }).then(function () {
            $location.path('/');
        }, function () {
            $scope.error = "Passwort oder Kennwort stimmen nicht.";
        });
    };
}];

},{}],17:[function(require,module,exports){
'use strict';

module.exports = ['$resource', function ($resource) {
    return $resource('api/register');
}];

},{}],18:[function(require,module,exports){
'use strict';

module.exports = ['$scope', 'Register', 'moment', 'CountryCodeConverter',
    function ($scope, Register, moment, CountryCodeConverter) {

        var isDateValid = function (date) {
            return moment(date, 'l', moment.locale(), true).isValid();
        };

        $scope.userDataToChange = {};
        $scope.countryCodes = CountryCodeConverter.countryCodes;
        $scope.selectedCountryCode = '';
        $scope.submitFailed = false;
        $scope.submitFailedToServer = false;
        $scope.successUserDataChange = false;

        $scope.submitProfileData = function () {
            if (!$scope.profileForm.$invalid) {
                $scope.submitFailed = false;

                var submittedUser = {
                    email: $scope.userDataToChange.email,
                    password: $scope.userDataToChange.password,
                    forename: $scope.userDataToChange.forename,
                    surname: $scope.userDataToChange.surname,
                    birthday: moment.utc($scope.userDataToChange.birthday, 'l', moment.locale(), true).valueOf() / 1000,
                    country: CountryCodeConverter.getCountryCode($scope.selectedCountryCode),
                    female: $scope.userDataToChange.female
                };
                if (submittedUser.country) {
                    Register.save(submittedUser, function () {
                        $scope.profileForm.$setPristine();
                        $scope.successUserDataChange = true;
                        $scope.submitFailedToServer = false;
                    }, function () {
                        $scope.submitFailedToServer = true;
                        $scope.successUserDataChange = false;
                    });
                } else {
                    $scope.submitFailed = true;
                }
            } else {
                $scope.submitFailed = true;
            }
        };

        $scope.getDateExample = function () {
            var unixTimestamp = 385974036;
            return moment.unix(unixTimestamp).format('l');
        };

        $scope.$watch('userDataToChange.birthday', function (newBirthday) {
            if (newBirthday && $scope.profileForm && $scope.profileForm.inputBirthday) {
                $scope.profileForm.inputBirthday.$setValidity('date', isDateValid(newBirthday));
            }
        });
    }];

},{}],19:[function(require,module,exports){
'use strict';

var setContactActions = function ($scope) {
    $scope.contact.actions = [
        {
            text: "Nachricht senden",
            click: "sendMessage(contact.id, contact.name)"
        },
        {
            divider: true
        },
        {
            text: "Kontakt löschen",
            click: "deleteContact($scope)"
        },
        {
            text: "Kontakt blockieren",
            click: "blockContact($scope)"
        }
    ];
};


module.exports = {
    directiveCtrl: function () {
        return ['$scope', '$state', 'ContactUserActions',
            function ($scope, $state, ContactUserActions) {

                $scope.$scope = $scope;
                ContactUserActions.setPrivacySettings($scope);

                setContactActions($scope);

                angular.extend($scope, ContactUserActions);

                ContactUserActions.setConnectionState($scope);

                $scope.openUserDetails = function () {
                    $state.go('contact.detail', {
                        userId: $scope.contact.id
                    });
                };
            }];
    }
};

},{}],20:[function(require,module,exports){
'use strict';

var controller = require('./contactPreviewCtrl');

module.exports = {
    directive: [function () {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                enableSelect: '@',
                contact: '=',
                statistic: '=',
                privacySettings: '=',
                numberOfContacts: '='
            },
            templateUrl: 'app/modules/contact/contactPreview/template.html',
            controller: controller.directiveCtrl()
        };
    }],
    name: 'elyContactPreview'
};

},{"./contactPreviewCtrl":19}],21:[function(require,module,exports){
'use strict';

var app = require('angular').module('elyoosApp');
var elyContactPreviewDirective = require('./directive.js');

app.directive(elyContactPreviewDirective.name, elyContactPreviewDirective.directive);

},{"./directive.js":20,"angular":4}],22:[function(require,module,exports){
'use strict';

var moment = require('moment');
var secondsDay = 86400;
var secondsWeek = 604800;
var secondsMonth = 2592000;

var isFirst24Hours = function ($scope, index, now) {
    if (index === 0) {
        return $scope.users.contactingUsers[index].userAdded > now - secondsDay;
    }
    return false;
};

var isTransitionDayWeek = function ($scope, index, now) {
    if (index === 0) {
        return $scope.users.contactingUsers[index].userAdded < now - secondsDay &&
            $scope.users.contactingUsers[index].userAdded > now - secondsWeek;
    }
    return $scope.users.contactingUsers[index].userAdded < now - secondsDay &&
        $scope.users.contactingUsers[index].userAdded > now - secondsWeek &&
        $scope.users.contactingUsers[index - 1].userAdded > now - secondsDay;
};

var isTransitionWeekMonth = function ($scope, index, now) {
    if (index === 0) {
        return $scope.users.contactingUsers[index].userAdded < now - secondsWeek &&
            $scope.users.contactingUsers[index].userAdded > now - secondsMonth;
    }
    return $scope.users.contactingUsers[index].userAdded < now - secondsWeek &&
        $scope.users.contactingUsers[index].userAdded > now - secondsMonth &&
        $scope.users.contactingUsers[index - 1].userAdded > now - secondsWeek;
};

var isTransitionMonthLater = function ($scope, index, now) {
    if (index === 0) {
        return $scope.users.contactingUsers[index].userAdded < now - secondsMonth;
    }
    return $scope.users.contactingUsers[index].userAdded < now - secondsMonth &&
        $scope.users.contactingUsers[index - 1].userAdded > now - secondsMonth;
};

var isTransition = function ($scope, index, now) {
    return isFirst24Hours($scope, index, now) || isTransitionDayWeek($scope, index, now) ||
        isTransitionWeekMonth($scope, index, now) || isTransitionMonthLater($scope, index, now);
};

module.exports = ['$scope', 'Contacting', function ($scope, Contacting) {

    $scope.resetCounter = 1;
    $scope.itemsPerPage = 30;

    $scope.getContacting = function (paginationNumber) {

        var skip = (paginationNumber - 1) * $scope.itemsPerPage;

        $scope.users = Contacting.get({itemsPerPage: $scope.itemsPerPage, skip: skip}, function () {
            if (paginationNumber === 1) {
                $scope.resetCounter = $scope.resetCounter + 1;
            }
        });
    };
    $scope.getContacting(1);

    $scope.showContactingInfo = function (index) {
        var now = Math.floor(moment.utc().valueOf() / 1000);
        return isTransition($scope, index, now);
    };

    $scope.getContactingInfo = function (index) {
        var now = Math.floor(moment.utc().valueOf() / 1000);
        if (isFirst24Hours($scope, index, now)) {
            return 'In den letzten 24 Stunden';
        }
        if (isTransitionDayWeek($scope, index, now)) {
            return 'Vor mehr als 24 Stunden';
        }
        if (isTransitionWeekMonth($scope, index, now)) {
            return 'Vor mehr als eine Woche';
        }
        if (isTransitionMonthLater($scope, index, now)) {
            return 'Vor mehr als 30 Tage';
        }
    };
}];

},{"moment":11}],23:[function(require,module,exports){
'use strict';

module.exports = ['$scope', function ($scope) {

    $scope.dropdownGroupSettings = [
        {
            text: "Nachricht senden",
            href: "#"
        },
        {
            divider: true
        },
        {
            text: "Kontaktgruppe umbenennen",
            href: "#"
        }
    ];
}];

},{}],24:[function(require,module,exports){
'use strict';

module.exports = ['$scope', '$state', '$stateParams', 'ContactDetail', 'moment', 'CountryCodeConverter', 'ContactUserActions',
    function ($scope, $state, $stateParams, ContactDetail, moment, CountryCodeConverter, ContactUserActions) {

        var contactDetails, numberOfExpand = 0, skipContacts = 7, contactsToAdd = 28;
        $scope.$scope = $scope;
        angular.extend($scope, ContactUserActions);

        $scope.userId = $stateParams.userId;
        contactDetails = ContactDetail.get({
            userId: $stateParams.userId,
            skipContacts: 0,
            contactsPerPage: 7,
            mode: 'detailOfUser'
        }, function () {

            $scope.contact = contactDetails.contact;
            $scope.contact.id = $stateParams.userId;
            $scope.statistic = contactDetails.statistic;
            $scope.privacySettings = contactDetails.privacySettings;
            $scope.numberOfContacts = contactDetails.numberOfContacts;
            $scope.numberOfSameContacts = contactDetails.numberOfSameContacts;
            $scope.contacts = contactDetails.contacts;
            if ($scope.contact.country) {
                $scope.contact.country = CountryCodeConverter.getCountry($scope.contact.country);
            }
            if ($scope.contact.birthday) {
                $scope.contact.birthday = 'Geb. ' + moment.unix($scope.contact.birthday).format('l');
            }
            ContactUserActions.setPrivacySettings($scope);
            ContactUserActions.setConnectionState($scope);
        });

        $scope.appendContacts = function () {
            var contactOfUser = ContactDetail.get({
                userId: $stateParams.userId,
                skipContacts: skipContacts,
                contactsPerPage: contactsToAdd,
                mode: 'onlyContacts'
            }, function () {
                if ($scope.contacts) {
                    numberOfExpand = numberOfExpand + 1;
                    $scope.contacts = $scope.contacts.concat(contactOfUser.contacts);
                    if (numberOfExpand === 1) {
                        skipContacts = 35;
                    } else {
                        skipContacts += contactsToAdd;
                    }
                }
            });
        };

        $scope.openUserDetails = function (userId) {
            $state.go('contact.detail', {
                userId: userId
            });
        };
    }];

},{}],25:[function(require,module,exports){
'use strict';

var app = require('angular').module('elyoosApp');

require('./contactPreview');

app.controller('MyContactCtrl', require('./myContactCtrl'));
app.controller('DetailContactCtrl', require('./detailContactCtrl'));
app.controller('ContactingCtrl', require('./contactingCtrl'));
app.controller('DescriptionCounterCtrl', require('./descriptionCounterCtrl'));


app.factory('Contact', require('./services/contact'));
app.factory('ContactDetail', require('./services/contactDetail'));
app.factory('SearchUsers', require('./services/searchUsers'));
app.factory('Contacting', require('./services/contacting'));

app.service('ContactUserActions', require('./services/userActions'));

app.config(['$stateProvider', function ($stateProvider) {

    $stateProvider
        .state('contact', {
            abstract: true,
            url: '/contact',
            views: {
                header: {
                    templateUrl: 'app/modules/navigation/loggedInHeader.html'
                }
            }
        })
        .state('contact.myContacts', {
            url: '/myContacts',
            views: {
                'content@': {
                    templateUrl: 'app/modules/contact/myContact.html',
                    controller: 'MyContactCtrl'
                }
            }
        })
        .state('contact.contacting', {
            url: '/contacting',
            views: {
                'content@': {
                    templateUrl: 'app/modules/contact/contacting.html',
                    controller: 'ContactingCtrl'
                }
            }
        })
        .state('contact.detail', {
            url: '/details/{userId}',
            views: {
                'content@': {
                    templateUrl: 'app/modules/contact/userDetail.html',
                    controller: 'DetailContactCtrl'
                }
            }
        });
}]);
},{"./contactPreview":21,"./contactingCtrl":22,"./descriptionCounterCtrl":23,"./detailContactCtrl":24,"./myContactCtrl":26,"./services/contact":27,"./services/contactDetail":28,"./services/contacting":29,"./services/searchUsers":30,"./services/userActions":31,"angular":4}],26:[function(require,module,exports){
'use strict';

var getRequestForSelectedTypes = function ($scope, Contact, paginationNumber) {
    var types = '', skip, users;
    angular.forEach($scope.users.statistic, function (stat) {
        if (stat.selected) {
            if (types.length === 0) {
                types = types.concat(stat.type);
            } else {
                types = types.concat(',', stat.type);
            }
        }
    });

    if (types.length > 0) {
        skip = (paginationNumber - 1) * $scope.itemsPerPage;

        users = Contact.get({
            itemsPerPage: $scope.itemsPerPage,
            skip: skip,
            types: types
        }, function () {
            $scope.users.contacts = users.contacts;
            $scope.users.contactsForPagination = users.contactsForPagination;
            $scope.isUserSearch = false;
        });
    } else {
        $scope.getContacts(1);
    }
};

module.exports = ['$scope', 'SearchUsers', 'Contact', function ($scope, SearchUsers, Contact) {

    $scope.help = {
        title: 'Hilfe',
        content: 'Du kannst beliebige Personen die bei Elyoos registriert sind als Kontakt ' +
        'hinzufügen. Personen welche Du als Kontakt hinzugefügt hast werden nun bei deinen ' +
        'Kontakten aufgelistet, ohne das der neue Kontakt dies bestätigen muss. Um die Sichtbarkeit ' +
        'deines Profils für die Kontakte zu definieren, werden deine Kontakte einer Privatsphären Gruppe zugeordnet. ' +
        'Mit diesen Einstellungen kannst Du festlegen, wer was von deinem Profil sehen kann.'
    };

    $scope.query = "";
    $scope.itemsPerPage = 30;
    $scope.isUserSearch = false;
    $scope.allContactsSelected = true;

    $scope.selectedAllContacts = function () {
        $scope.getContacts(1);
    };

    $scope.selectedStatisticType = function (stat) {
        $scope.allContactsSelected = false;
        stat.selected = !stat.selected;
        getRequestForSelectedTypes($scope, Contact, 1);
    };

    $scope.paginationChanged = function (paginationNumber) {
        if ($scope.allContactsSelected) {
            $scope.getContacts(paginationNumber);
        } else {
            getRequestForSelectedTypes($scope, Contact, paginationNumber);
        }
    };

    $scope.getContacts = function (paginationNumber) {

        var skip = (paginationNumber - 1) * $scope.itemsPerPage;

        $scope.users = Contact.get({itemsPerPage: $scope.itemsPerPage, skip: skip}, function () {
            $scope.allContactsSelected = true;
            if (paginationNumber === 1) {
                $scope.$broadcast('pagination.next.previous.reset');
            }
            $scope.isUserSearch = false;
        });
    };

    $scope.getUserSuggestion = function (searchValue) {
        if (searchValue && searchValue.trim().length > 0) {
            return SearchUsers.query({
                search: searchValue,
                maxItems: 7,
                isSuggestion: true
            }).$promise;
        }
        $scope.getContacts(1);
    };

    $scope.getUser = function (searchValue) {
        var users;
        if (searchValue && searchValue.trim().length > 0) {
            users = SearchUsers.query({
                search: searchValue,
                maxItems: 20,
                isSuggestion: false
            }, function () {
                $scope.users.contacts = users;
                $scope.isUserSearch = true;
                $scope.allContactsSelected = false;
                angular.forEach($scope.users.statistic, function (stat) {
                    stat.selected = false;
                });
            });
        } else {
            $scope.getContacts(1);
        }
    };
}];

},{}],27:[function(require,module,exports){
'use strict';

module.exports = ['$resource', function ($resource) {

    return $resource('/api/user/contact', null, {
        'delete': {method: 'POST', headers: {'X-HTTP-Method-Override': 'DELETE'}}
    });
}];

},{}],28:[function(require,module,exports){
'use strict';

module.exports = ['$resource', function ($resource) {

    return $resource('/api/user/contact/detail', null, {});
}];

},{}],29:[function(require,module,exports){
'use strict';

module.exports = ['$resource', function ($resource) {

    return $resource('/api/user/contact/contacting', null, {});
}];

},{}],30:[function(require,module,exports){
'use strict';

module.exports = ['$resource', function ($resource) {

    return $resource('/api/user/contact/search');
}];

},{}],31:[function(require,module,exports){
'use strict';

var setConnectionState = function ($scope, moment) {
    if ($scope.contact.connected === 'userToContact') {
        $scope.contact.connectionImage = 'app/img/userToContact.png';
        $scope.tooltipConnectionState.title = "Du hast " + $scope.contact.name + " am "
        + moment.unix($scope.contact.contactAdded).format('lll') + " als Kontakt hinzgef\u00fcgt";
    } else if ($scope.contact.connected === 'contactToUser') {
        $scope.contact.connectionImage = 'app/img/contactToUser.png';
        $scope.tooltipConnectionState.title = "Hat Dich am " + moment.unix($scope.contact.userAdded).format('lll') +
        " als Kontakt hinzgef\u00fcgt";
    } else if ($scope.contact.connected === 'both') {
        $scope.contact.connectionImage = 'app/img/bothContact.png';
        $scope.tooltipConnectionState.title = "Ihr habt Euch beide als Kontakte. Hat Dich am "
        + moment.unix($scope.contact.userAdded).format('lll') + " als Kontakt hinzgef\u00fcgt";
    } else {
        $scope.contact.connected = 'none';
        $scope.contact.connectionImage = '#';
    }
};

var updateConnectionStateWhenModifiyContact = function ($scope, moment) {
    if ($scope.contact.connected === 'contactToUser') {
        $scope.contact.connected = 'both';
    } else {
        $scope.contact.connected = 'userToContact';
    }
    setConnectionState($scope, moment);
};

var updateConnectionStateWhenDeletingContact = function ($scope, moment) {
    if ($scope.contact.connected === 'both') {
        $scope.contact.connected = 'contactToUser';
    } else {
        $scope.contact.connected = 'none';
    }
    setConnectionState($scope, moment);
};

var getPrivacyType = function (statistics, privacyTypes) {
    var setting = null;
    if (statistics && statistics.length > 0) {
        angular.forEach(statistics, function (statistic) {
            if (!setting || setting.count < statistic.count) {
                setting = statistic;
            }
        });
        return setting.type;
    }
    return privacyTypes[0].type;
};

var setPrivacySettings = function ($scope) {
    $scope.tooltipConnectionState = {
        title: "",
        checked: false
    };
    $scope.contact.selectedPrivacySetting = $scope.contact.type;
    $scope.contact.privacySettings = $scope.privacySettings;
};

module.exports = ['$state', '$modal', 'SearchThread', 'Contact', 'moment',
    function ($state, $modal, SearchThread, Contact, moment) {

        this.setPrivacySettings = setPrivacySettings;
        this.setConnectionState = function (scope) {
            setConnectionState(scope, moment);
        };

        this.openModalUpdateType = function ($scope) {
            $scope.send = $scope.updateType;
            $scope.actionDescription = '\u00c4ndern';
            $modal({
                scope: $scope,
                title: '\u00c4nderung der Privatsph\u00e4ren Einstellung f\u00fcr ' + $scope.contact.name,
                template: 'app/modules/contact/services/userActionsModalDescription.html',
                show: true,
                placement: 'center'
            });
        };

        this.updateType = function ($scope, hide) {
            if ($scope.contact.selectedPrivacySetting) {
                var contact = Contact.save({
                    contactIds: [$scope.contact.id],
                    mode: 'changeState',
                    description: $scope.contact.selectedPrivacySetting
                }, function () {
                    $scope.statistic = contact.statistic;
                    $scope.contact.type = $scope.contact.selectedPrivacySetting;
                    hide();
                });
            }
        };

        this.openModalAddNewContact = function ($scope) {
            $scope.send = $scope.addNewContact;
            $scope.actionDescription = 'Hinzuf\u00fcgen';
            $scope.contact.selectedPrivacySetting = getPrivacyType($scope.statistic, $scope.contact.privacySettings);
            $modal({
                scope: $scope,
                title: 'Kontakt hinzuf\u00fcgen',
                template: 'app/modules/contact/services/userActionsModalDescription.html',
                show: true,
                placement: 'center'
            });
        };

        this.addNewContact = function ($scope, hide) {
            var contact;
            if ($scope.contact.selectedPrivacySetting) {
                contact = Contact.save({
                    contactIds: [$scope.contact.id],
                    mode: 'addContact',
                    description: $scope.contact.selectedPrivacySetting
                }, function () {
                    $scope.statistic = contact.statistic;
                    if (angular.isDefined($scope.numberOfContacts)) {
                        $scope.numberOfContacts = contact.numberOfContacts;
                    }
                    $scope.contact.type = $scope.contact.selectedPrivacySetting;
                    updateConnectionStateWhenModifiyContact($scope, moment);
                    setPrivacySettings($scope);
                    hide();
                });
            }
        };

        this.deleteContact = function ($scope) {
            var contact = Contact.delete({
                contactIds: [$scope.contact.id]
            }, function () {
                $scope.statistic = contact.statistic;
                if (angular.isDefined($scope.numberOfContacts)) {
                    $scope.numberOfContacts = contact.numberOfContacts;
                }
                delete $scope.contact.type;
                updateConnectionStateWhenDeletingContact($scope, moment);
            });
        };

        this.blockContact = function ($scope) {
            var contact = Contact.save({
                mode: 'blockContact',
                contactIds: [$scope.contact.id]
            }, function () {
                $scope.statistic = contact.statistic;
                if (angular.isDefined($scope.numberOfContacts)) {
                    $scope.numberOfContacts = contact.numberOfContacts;
                }
                delete $scope.contact.type;
                $scope.contact.blocked = true;
                updateConnectionStateWhenDeletingContact($scope, moment);
            });
        };

        this.unblockContact = function ($scope) {
            var contact = Contact.save({
                mode: 'unblockContact',
                contactIds: [$scope.contact.id]
            }, function () {
                $scope.statistic = contact.statistic;
                if (angular.isDefined($scope.numberOfContacts)) {
                    $scope.numberOfContacts = contact.numberOfContacts;
                }
                delete $scope.contact.type;
                $scope.contact.blocked = false;
            });
        };

        this.sendMessage = function (id, name) {
            var search = SearchThread.get({
                userId: id
            }, function () {
                if (search.hasExistingThread) {
                    $state.go('message.threads.detail', {
                        threadId: search.threadId,
                        isGroupThread: false
                    });
                } else {
                    $state.go('message.threads.create', {
                        userId: id,
                        name: name
                    });
                }
            });
        };
    }];

},{}],32:[function(require,module,exports){
'use strict';

var setShowError = function ($scope) {
    if ($scope.showErrorMaxLength || $scope.showErrorRequired || $scope.showErrorCustom) {
        $scope.showError = true;
    } else {
        $scope.showError = false;
    }
};

var setError = function ($scope, newValue, errorName, errorDescription) {
    if (newValue) {
        $scope[errorName] = true;
        $scope.lastErrorDescription.unshift({title: errorDescription});
        $scope.errorDescription = $scope.lastErrorDescription[0];
    } else {
        $scope.lastErrorDescription.shift();
        if ($scope.lastErrorDescription.length > 0) {
            $scope.errorDescription = $scope.lastErrorDescription[0];
        }

        $scope[errorName] = false;
    }
    setShowError($scope);
};

module.exports = {
    directiveCtrl: function () {
        return ['$scope', function ($scope) {

            $scope.lastErrorDescription = [];
            $scope.showErrorCounter = 0;

            $scope.$watch(function () {
                return $scope.profileForm[$scope.inputName].$error.maxlength;
            }, function (newValue) {
                setError($scope, newValue, 'showErrorMaxLength', 'Darf maximal ' + $scope.maxLength + ' Zeichen haben');
            });

            $scope.$watch(function () {
                return $scope.profileForm[$scope.inputName].$error.required;
            }, function (newValue) {
                setError($scope, newValue, 'showErrorRequired', $scope.label + ' wird ben\u00f6tigt');
            });

            $scope.$watch(function () {
                return $scope.profileForm[$scope.inputName].$error.custom;
            }, function (newValue) {
                setError($scope, newValue, 'showErrorCustom', $scope.customErrorDescription);
            });
        }];
    }
};

},{}],33:[function(require,module,exports){
'use strict';

var controller = require('./controller.js');

module.exports = {
    directive: [function () {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                label: '@',
                inputName: '@',
                inputPlaceholder: '@',
                profileForm: '=',
                submitModel: '=',
                maxLength: '@',
                minLength: '@',
                required: '@',
                customErrorDescription: '@'
            },
            templateUrl: 'app/modules/directives/formTextInput/template.html',
            controller: controller.directiveCtrl()
        };
    }],
    name: 'elyFormTextInput'
};

},{"./controller.js":32}],34:[function(require,module,exports){
'use strict';

var app = require('angular').module('elyoosApp');
var directive = require('./directive.js');

app.directive(directive.name, directive.directive);

},{"./directive.js":33,"angular":4}],35:[function(require,module,exports){
'use strict';

var link = require('./link');

module.exports = {
    directive: [function () {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'app/modules/directives/imageCropper/template.html',
            scope: {
                reset: '=',
                image: '=',
                imageResultData: '=',
                originalSize: '=',
                ratio: '@',
                minHeight: '@',
                minWidth: '@'
            },
            link: link.directiveLink()
        };
    }],
    name: 'elyImageCropper'
};

},{"./link":37}],36:[function(require,module,exports){
arguments[4][34][0].apply(exports,arguments)
},{"./directive.js":35,"angular":4,"c:\\Programmieren\\Elyoos\\client\\app\\modules\\directives\\formTextInput\\index.js":34}],37:[function(require,module,exports){
'use strict';

module.exports = {
    directiveLink: function () {
        return function ($scope, element) {
            var $image = $(element.find('img')[0]),
                cropperSettings = {
                    minWidth: 200,
                    minHeight: 200,
                    dashed: false,
                    zoomable: false,
                    rotatable: false,
                    built: function () {
                        var size = $image.cropper('getImageData');
                        $scope.originalSize(size.naturalWidth, size.naturalHeight);
                    }
                };

            if ($scope.ratio) {
                cropperSettings.aspectRatio = $scope.ratio;
            }
            if ($scope.minWidth) {
                cropperSettings.minWidth = $scope.minWidth;
            }
            if ($scope.minHeight) {
                cropperSettings.minHeight = $scope.minHeight;
            }

            $image.cropper(cropperSettings);

            $scope.$on('image.cropper.get.data', function () {
                $scope.imageResultData($image.cropper('getDataURL', 'image/jpeg'));
            });

            $scope.$on('image.cropper.set.ratio', function (event, ratio) {
                $image.cropper('setAspectRatio', ratio);
            });

            $scope.$watch('image', function (newImage) {
                if (newImage) {
                    $image.cropper('reset', true).cropper('replace', newImage);
                }
            });
        };
    }
};

},{}],38:[function(require,module,exports){


},{}],39:[function(require,module,exports){
'use strict';

var resetPagination = function ($scope, totalItems) {
    $scope.currentPagination = 1;
    $scope.currentPaginationRange = Math.ceil(totalItems / $scope.itemsPerPage);
};

module.exports = {
    directiveCtrl: function () {
        return ['$scope', function ($scope) {
            var lastValidTotalItems;
            $scope.currentPagination = 1;
            $scope.currentPaginationRange = 1;

            $scope.$watch($scope.totalItems, function (newTotalItems) {
                if (newTotalItems && $scope.itemsPerPage) {
                    newTotalItems = parseInt(newTotalItems, 10);
                    if (!lastValidTotalItems || newTotalItems !== lastValidTotalItems) {
                        lastValidTotalItems = newTotalItems;
                        resetPagination($scope, newTotalItems);
                    }
                }
            });

            $scope.$on('pagination.next.previous.reset', function () {
                $scope.currentPagination = 1;
            });

            $scope.clickPrevious = function () {
                if ($scope.currentPagination > 1) {
                    $scope.currentPagination = $scope.currentPagination - 1;
                    $scope.getPaginationSet($scope.currentPagination);
                }
            };

            $scope.clickNext = function () {
                if ($scope.currentPagination < $scope.currentPaginationRange) {
                    $scope.currentPagination = $scope.currentPagination + 1;
                    $scope.getPaginationSet($scope.currentPagination);
                }
            };
        }];
    }
};

},{}],40:[function(require,module,exports){
'use strict';
var controller = require('./controller.js');

module.exports = {
    directive: [function () {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                totalItems: '&',
                itemsPerPage: '@',
                getPaginationSet: '='
            },
            templateUrl: 'app/modules/directives/paginationNextPrevious/template.html',
            controller: controller.directiveCtrl()
        };
    }],
    name: 'elyPaginationNextPrevious'
};

},{"./controller.js":39}],41:[function(require,module,exports){
arguments[4][34][0].apply(exports,arguments)
},{"./directive.js":40,"angular":4,"c:\\Programmieren\\Elyoos\\client\\app\\modules\\directives\\formTextInput\\index.js":34}],42:[function(require,module,exports){
'use strict';

module.exports = {
    directiveCtrl: function () {
        return ['$scope', function ($scope) {
            $scope.sendGetQuery = function ($event) {
                if ($event.keyCode === 13) {
                    $scope.getQuery($scope.query);
                }
            };

            $scope.$on('$typeahead.select', function (value, index) {
                $scope.getQuery(index);
            });
        }];
    }
};

},{}],43:[function(require,module,exports){
'use strict';

var controller = require('./controller.js');

module.exports = {
    directive: [function () {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                description: '@',
                query: '=',
                getQuerySuggestion: '=',
                getQuery: '='
            },
            templateUrl: 'app/modules/directives/searchBox/template.html',
            controller: controller.directiveCtrl()
        };
    }],
    name: 'elySearchBox'
};

},{"./controller.js":42}],44:[function(require,module,exports){
arguments[4][34][0].apply(exports,arguments)
},{"./directive.js":43,"angular":4,"c:\\Programmieren\\Elyoos\\client\\app\\modules\\directives\\formTextInput\\index.js":34}],45:[function(require,module,exports){
'use strict';

var resetMessageNotification = function ($scope) {
    $scope.showError = false;
    $scope.showSuccess = false;
};

module.exports = {
    directiveCtrl: function () {
        return ['$scope', function ($scope) {

            var originalModel, lastModel;

            $scope.categoryFinishedButtonDisabled = true;

            resetMessageNotification($scope);

            $scope.$watchCollection('model', function (newValue) {

                if (newValue.isInit && !originalModel) {
                    originalModel = {};
                    angular.copy($scope.model, originalModel);
                }
                if (originalModel && newValue) {
                    lastModel = newValue;
                    if (angular.equals(originalModel, newValue)) {
                        $scope.categoryFinishedButtonDisabled = true;
                    } else {
                        $scope.categoryFinishedButtonDisabled = false;
                        $scope.showSuccess = false;
                    }
                }
            });

            $scope.sendAllData = function () {
                resetMessageNotification($scope);
                $scope.sendData();
            };

            $scope.$on('ely.send.button.error', function (event, errorDescription) {
                $scope.errorDescription = {title: errorDescription};
                $scope.showError = true;
                $scope.showSuccess = false;
            });

            $scope.$on('ely.send.button.success', function () {
                angular.copy($scope.model, originalModel);
                $scope.categoryFinishedButtonDisabled = true;
                $scope.showError = false;
                $scope.showSuccess = true;
            });

            $scope.$on('ely.send.button.model.changed', function (event, newModel) {
                angular.copy(newModel, originalModel);
                $scope.categoryFinishedButtonDisabled = true;
                $scope.showError = false;
                $scope.showSuccess = false;
            });
        }];
    }
};

},{}],46:[function(require,module,exports){
'use strict';

var controller = require('./controller.js');

module.exports = {
    directive: [function () {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                buttonDescription: '@',
                errorPlacement: '@',
                sendData: '=',
                model: '='
            },
            templateUrl: 'app/modules/directives/sendButton/template.html',
            controller: controller.directiveCtrl()
        };
    }],
    name: 'elySendButton'
};

},{"./controller.js":45}],47:[function(require,module,exports){
arguments[4][34][0].apply(exports,arguments)
},{"./directive.js":46,"angular":4,"c:\\Programmieren\\Elyoos\\client\\app\\modules\\directives\\formTextInput\\index.js":34}],48:[function(require,module,exports){
'use strict';

var link = require('./link');

module.exports = {
    directive: [function () {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'app/modules/directives/spin/template.html',
            link: link.directiveLink()
        };
    }],
    name: 'elySpin'
};

},{"./link":50}],49:[function(require,module,exports){
arguments[4][34][0].apply(exports,arguments)
},{"./directive.js":48,"angular":4,"c:\\Programmieren\\Elyoos\\client\\app\\modules\\directives\\formTextInput\\index.js":34}],50:[function(require,module,exports){
'use strict';

var Spinner = require('spin');

module.exports = {
    directiveLink: function () {
        return function ($scope, element) {
            var opts = {
                lines: 11,
                length: 10,
                width: 4,
                radius: 13,
                corners: 1,
                rotate: 11,
                direction: 1,
                color: '#00796B',
                speed: 1.2,
                trail: 60,
                shadow: false,
                hwaccel: false,
                className: 'spinner',
                zIndex: 2e9,
                top: '50%',
                left: '50%'
            }, spinElement, spinner;

            spinElement = element.find('#spinner-content');
            spinner = new Spinner(opts).spin();
            spinElement.append(spinner.el);
        };
    }
};

},{"spin":12}],51:[function(require,module,exports){
'use strict';

var setStars = function (starValue, $scope) {
    var i;
    for (i = 0; i < 5; i++) {
        if (i <= starValue) {
            $scope['star' + i] = 'app/img/starRating/starFull.png';
        } else if (i - 0.75 <= starValue && i - 0.2 > starValue) {
            $scope['star' + i] = 'app/img/starRating/starHalf.png';
        } else {
            $scope['star' + i] = 'app/img/starRating/starEmpty.png';
        }
    }
};

module.exports = {
    directiveCtrl: function () {
        return ['$scope', function ($scope) {

            $scope.star0 = 'app/img/starRating/starEmpty.png';
            $scope.star1 = 'app/img/starRating/starEmpty.png';
            $scope.star2 = 'app/img/starRating/starEmpty.png';
            $scope.star3 = 'app/img/starRating/starEmpty.png';
            $scope.star4 = 'app/img/starRating/starEmpty.png';

            $scope.isReadonly = $scope.isReadonly === 'true';
            $scope.isSmall = $scope.isSmall === 'true';
            $scope.isXSmall = $scope.isXSmall === 'true';

            $scope.mouseOverStar = function (star) {
                if (!$scope.isReadonly) {
                    setStars(star, $scope);
                }
            };

            $scope.resetToSelected = function () {
                if (!$scope.isReadonly) {
                    setStars($scope.numberOfSelectedStars - 1, $scope);
                }
            };

            $scope.starSelected = function (star) {
                if (!$scope.isReadonly) {
                    $scope.numberOfSelectedStars = star;
                }
            };

            $scope.$watch($scope.numberOfSelectedStarsReadonly, function (newValue) {
                if (newValue && newValue > 0) {
                    setStars(newValue - 1, $scope);
                }
            });

        }];
    }
};

},{}],52:[function(require,module,exports){
'use strict';

var controller = require('./controller.js');

module.exports = {
    directive: [function () {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                isReadonly: '@',
                isSmall: '@',
                isXSmall: '@',
                numberOfSelectedStars: '=',
                numberOfSelectedStarsReadonly: '&'
            },
            templateUrl: 'app/modules/directives/starRating/template.html',
            controller: controller.directiveCtrl()
        };
    }],
    name: 'elyStarRating'
};

},{"./controller.js":51}],53:[function(require,module,exports){
arguments[4][34][0].apply(exports,arguments)
},{"./directive.js":52,"angular":4,"c:\\Programmieren\\Elyoos\\client\\app\\modules\\directives\\formTextInput\\index.js":34}],54:[function(require,module,exports){
'use strict';

module.exports = function () {
    return function (items, start, numberOfItems) {
        var filtered = [], i;
        for (i = 0; i < items.length; i = i + 1) {
            if (i >= start && i < numberOfItems + start) {
                filtered.push(items[i]);
            }
        }
        return filtered;
    };
};

},{}],55:[function(require,module,exports){
'use strict';

var app = require('angular').module('elyoosApp');


app.filter('fromTo', require('./fromToFilter'));
},{"./fromToFilter":54,"angular":4}],56:[function(require,module,exports){
'use strict';

module.exports = ['$scope', 'Modification', function ($scope, Modification) {

    function setMessageText(modification, scope) {
        if (modification.numberOfMessages === 1) {
            scope.messageText = modification.numberOfMessages + ' neue Meldung';
        } else if (modification.numberOfMessages > 1) {
            scope.messageText = modification.numberOfMessages + ' neue Meldungen';
        } else {
            scope.messageText = '';
        }
    }

    var modification = Modification.get({forceShowModification: true}, function () {
        setMessageText(modification, $scope);
    });

    $scope.$on('message.changed', function (event, numberOfMessages) {
        setMessageText({numberOfMessages: numberOfMessages}, $scope);
    });
}];

},{}],57:[function(require,module,exports){
'use strict';

module.exports = {
    directive: [function () {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                description: '@',
                navTo: '@',
                imageUrl: '@',
                eventDescription: '='
            },
            templateUrl: 'app/modules/home/homeNavElement/template.html'
        };
    }],
    name: 'elyHomeNavElement'
};

},{}],58:[function(require,module,exports){
'use strict';

var app = require('angular').module('elyoosApp');
var elyHomeNavDirective = require('./directive.js');

app.directive(elyHomeNavDirective.name, elyHomeNavDirective.directive);

},{"./directive.js":57,"angular":4}],59:[function(require,module,exports){
'use strict';

var app = require('angular').module('elyoosApp');

app.controller('HomeCtrl', require('./homeCtrl'));

require('./homeNavElement');

},{"./homeCtrl":56,"./homeNavElement":58,"angular":4}],60:[function(require,module,exports){
'use strict';

module.exports = ['$scope', '$state', 'Message', 'Conversation',
    function ($scope, $state, Message, Conversation) {

        $scope.settings.getThread = function (paginationNumber) {
            var skip = (paginationNumber - 1) * $scope.settings.itemsPerPage;
            $scope.settings.currentPagination = paginationNumber;
            $scope.settings.thread = Conversation.get({
                itemsPerPage: $scope.settings.itemsPerPage,
                skip: skip,
                threadId: $scope.settings.selectedThreadId,
                isGroupThread: $scope.settings.selectedIsGroupThread
            }, function () {
                $scope.settings.threads = Message.get({itemsPerPage: 30, skip: 0});
            });
        };
        if ($scope.settings.getThreadAtInit) {
            $scope.settings.getThread($scope.settings.currentPagination);
        }

        $scope.settings.openThread = function (threadId, isGroupThread) {
            if ($scope.settings.selectedIsGroupThread === isGroupThread && threadId === $scope.settings.selectedThreadId) {
                $scope.settings.getThread(1);
            } else {
                $state.go('message.threads.detail', {
                    threadId: threadId,
                    isGroupThread: isGroupThread
                });
            }
        };

        $scope.settings.checkHeightOfInput = function ($event) {
            if ($event.target.offsetHeight < 74) {
                $scope.settings.textInputStyle = {height: $event.target.scrollHeight + 2 + 'px'};
                $scope.settings.textInputWrapperStyle = {height: $event.target.scrollHeight + 18 + 'px'};
            }
        };

        $scope.settings.resetTextInputStyle = function () {
            $scope.settings.textInputStyle = {};
            $scope.settings.textInputWrapperStyle = {};
        };
    }];

},{}],61:[function(require,module,exports){
'use strict';

module.exports = ['$scope', '$stateParams', 'Conversation', 'Message', 'dateFormatter',
    function ($scope, $stateParams, Conversation, Message, dateFormatter) {

        $scope.settings = {};
        $scope.settings.itemsPerPage = 30;
        $scope.settings.selectedThreadId = $stateParams.threadId;
        $scope.settings.selectedIsGroupThread = $stateParams.isGroupThread === 'true';
        $scope.settings.currentPagination = 1;
        $scope.settings.getThreadAtInit = true;
        $scope.settings.newMessage = '';

        $scope.$on('message.changed', function () {
            if ($scope.settings.currentPagination === 1) {
                $scope.settings.getThread($scope.settings.currentPagination);
            } else {
                $scope.settings.threads = Message.get({itemsPerPage: 30, skip: 0});
            }
        });

        $scope.getFormattedDate = dateFormatter.formatExact;

        $scope.sendMessage = function () {
            var message;
            if ($scope.settings.newMessage.trim() !== '') {
                if ($scope.settings.selectedIsGroupThread) {
                    message = {
                        addGroupMessage: {
                            threadId: $scope.settings.selectedThreadId,
                            text: $scope.settings.newMessage
                        }
                    };
                } else {
                    message = {
                        addMessage: {
                            threadId: $scope.settings.selectedThreadId,
                            text: $scope.settings.newMessage
                        }
                    };
                }
                Conversation.save(message, function (resp) {
                    $scope.settings.thread.messages.unshift(resp.message);
                    $scope.settings.newMessage = '';
                    $scope.settings.resetTextInputStyle($scope);
                });
            }
        };
    }];

},{}],62:[function(require,module,exports){
'use strict';

module.exports = ['$scope', '$state', '$stateParams', 'Conversation', 'Message',
    function ($scope, $state, $stateParams, Conversation, Message) {

        $scope.settings = {};
        $scope.settings.getThreadAtInit = false;
        $scope.settings.thread = {threadDescription: $stateParams.name};

        $scope.settings.threads = Message.get({itemsPerPage: 30, skip: 0});

        $scope.sendMessage = function () {
            var message;
            if ($scope.settings.newMessage.trim() !== '') {
                message = {
                    newSingleThread: {
                        contactId: $stateParams.userId,
                        text: $scope.settings.newMessage
                    }
                };
                Conversation.save(message, function (resp) {
                    $state.go('message.threads.detail', {
                        threadId: resp.threadId,
                        isGroupThread: false
                    });
                });
            }
        };
    }];

},{}],63:[function(require,module,exports){
'use strict';

var app = require('angular').module('elyoosApp');

app.controller('ThreadsCtrl', require('./threadsCtrl'));
app.controller('ConversationCtrl', require('./conversationCtrl'));
app.controller('CreateConversationCtrl', require('./createConversationCtrl'));
app.controller('ConversationActionsCtrl', require('./conversationActionsCtrl'));

app.factory('Message', require('./services/message'));
app.factory('SearchThread', require('./services/searchThread'));
app.factory('Conversation', require('./services/conversation'));
app.factory('SearchUserToSendMessage', require('./services/searchUserToSendMessage'));

app.config(['$stateProvider', function ($stateProvider) {

    $stateProvider
        .state('message', {
            abstract: true,
            url: '/message',
            views: {
                header: {
                    templateUrl: 'app/modules/navigation/loggedInHeader.html'
                }
            }
        })
        .state('message.threads', {
            url: '/threads',
            views: {
                'content@': {
                    templateUrl: 'app/modules/messages/threads.html',
                    controller: 'ThreadsCtrl'
                }
            }
        })
        .state('message.threads.detail', {
            url: '/conversation/{isGroupThread}/{threadId}',
            views: {
                'content@': {
                    templateUrl: 'app/modules/messages/conversation.html',
                    controller: 'ConversationCtrl'
                }
            }
        })
        .state('message.threads.create', {
            url: '/single/create/{userId}/{name}',
            views: {
                'content@': {
                    templateUrl: 'app/modules/messages/conversation.html',
                    controller: 'CreateConversationCtrl'
                }
            }
        });
}]);
},{"./conversationActionsCtrl":60,"./conversationCtrl":61,"./createConversationCtrl":62,"./services/conversation":64,"./services/message":65,"./services/searchThread":66,"./services/searchUserToSendMessage":67,"./threadsCtrl":68,"angular":4}],64:[function(require,module,exports){
'use strict';

module.exports = ['$resource', function ($resource) {
    return $resource('api/user/messages/conversation');
}];

},{}],65:[function(require,module,exports){
'use strict';

module.exports = ['$resource', function ($resource) {
    return $resource('api/user/messages');
}];

},{}],66:[function(require,module,exports){
'use strict';

module.exports = ['$resource', function ($resource) {
    return $resource('/api/user/messages/singleThread');
}];

},{}],67:[function(require,module,exports){
'use strict';

module.exports = ['$resource', function ($resource) {
    return $resource('api/user/messages/search');
}];

},{}],68:[function(require,module,exports){
'use strict';

module.exports = ['$scope', '$state', 'Message', 'SearchUserToSendMessage', 'dateFormatter',
    function ($scope, $state, Message, SearchUserToSendMessage, dateFormatter) {

        var currentPagination = 1;
        $scope.itemsPerPage = 30;

        $scope.getThreads = function (paginationNumber) {
            currentPagination = paginationNumber;
            var skip = (paginationNumber - 1) * $scope.itemsPerPage;
            $scope.threads = Message.get({itemsPerPage: $scope.itemsPerPage, skip: skip});
        };
        $scope.getThreads(currentPagination);

        $scope.getFormattedDate = dateFormatter.format;

        $scope.openThread = function (threadId, isGroupThread) {
            if (threadId) {
                $state.go('message.threads.detail', {
                    threadId: threadId,
                    isGroupThread: isGroupThread
                });
            }
        };

        $scope.$on('message.changed', function () {
            $scope.getThreads(currentPagination);
        });

        $scope.getSuggestion = function (searchValue) {
            if (searchValue && searchValue.trim().length > 0) {
                return SearchUserToSendMessage.query({
                    search: searchValue,
                    maxItems: 7,
                    isSuggestion: true
                }).$promise;
            }
            delete $scope.search;
        };

        $scope.getThreadsOrContacts = function (searchValue) {
            if (searchValue && searchValue.trim().length > 0) {
                $scope.search = SearchUserToSendMessage.get({
                    search: searchValue,
                    maxItems: 20,
                    isSuggestion: false
                });
            } else {
                delete $scope.search;
            }
        };

        $scope.addNewSingleThread = function (userId, name) {
            if (userId) {
                $state.go('message.threads.create', {
                    userId: userId,
                    name: name
                });
            }
        };
    }];

},{}],69:[function(require,module,exports){
'use strict';

var app = require('angular').module('elyoosApp');

app.controller('LoggedInHeaderCtrl', require('./loggedInHeaderCtrl'));

app.factory('UserInfo', require('./userInfo'));
app.factory('Modification', require('./modification'));

},{"./loggedInHeaderCtrl":70,"./modification":71,"./userInfo":72,"angular":4}],70:[function(require,module,exports){
'use strict';

module.exports = ['$scope', '$window', '$interval', '$rootScope', 'UserInfo', 'Modification', 'profileImage', 'Auth',
    function ($scope, $window, $interval, $rootScope, UserInfo, Modification, profileImage, Auth) {

        var userHeaderInfo, modificationInfo;

        modificationInfo = $interval(function () {
            var modification = Modification.get(null, function () {
                if (modification.hasChanged) {
                    $rootScope.$broadcast('message.changed', modification.numberOfMessages);
                }
            });
        }, 30000);

        profileImage.addProfileImageChangedEvent($rootScope, function () {
            userHeaderInfo = UserInfo.get(null, function () {
                $rootScope.userHeaderInfo = userHeaderInfo;
            });
        });

        $scope.$on('$destroy', function () {
            $interval.cancel(modificationInfo);
            delete $rootScope.userHeaderInfo;
        });

        if ($rootScope.userHeaderInfo === undefined) {
            userHeaderInfo = UserInfo.get(null, function () {
                $rootScope.userHeaderInfo = userHeaderInfo;
            });
        }

        $rootScope.logout = function () {
            Auth.logout().then(function () {
                $window.location.href = '/login';
            }, function () {
                $scope.error = "Fehler beim Abmelden";
            });
        };
    }];

},{}],71:[function(require,module,exports){
'use strict';

module.exports = ['$resource', function ($resource) {
    return $resource('api/modification');
}];

},{}],72:[function(require,module,exports){
'use strict';

module.exports = ['$resource', function ($resource) {
    return $resource('api/user/userInfo');
}];

},{}],73:[function(require,module,exports){
'use strict';

module.exports = ['$scope', 'PromiseModal', 'PageRecommendation',
    function ($scope, PromiseModal, PageRecommendation) {


        $scope.addNewRecommendation = function (page, pageId, label, title) {
            var modalScope = $scope.$new(false);
            modalScope.recommendation = {
                pageId: pageId,
                label: label
            };
            PromiseModal.getModal({
                scope: modalScope,
                title: title,
                template: 'app/modules/recommendation/modalAddRecommendation.html',
                placement: 'center'
            }).show().then(function (resp) {
                if (!page.recommendation) {
                    page.recommendation = {};
                }
                page.recommendation.user = {
                    rating: resp.rating,
                    comment: resp.comment,
                    profileUrl: resp.profileUrl,
                    recommendationId: resp.recommendationId
                };
                page.recommendation.summary.contact = resp.recommendation.contact;
                page.recommendation.summary.all = resp.recommendation.all;
            });
        };

        $scope.removeRecommendation = function (page, pageId, label) {
            PromiseModal.getModal({
                title: 'Bewertung l\u00f6schen',
                content: 'Willst Du die Bewertung wirklich l\u00f6schen?',
                template: 'app/modules/util/dialog/yesNoDialog.html',
                placement: 'center'
            }).show().then(function () {
                PageRecommendation.delete({
                    recommendationId: page.recommendation.user.recommendationId,
                    pageId: pageId,
                    label: label
                }, function (resp) {
                    delete page.recommendation.user;
                    page.recommendation.summary.contact = resp.recommendation.contact;
                    page.recommendation.summary.all = resp.recommendation.all;
                });
            });
        };
    }];

},{}],74:[function(require,module,exports){
'use strict';

module.exports = ['$scope', '$state', 'Languages', 'fileUpload', 'moment',
    function ($scope, $state, Languages, fileUpload, moment) {

        var isDateValid = function (date) {
            return moment(date, 'l', moment.locale(), true).isValid();
        };

        $scope.page.BookPage = function() {
            return {
                createBookPage: {
                    language: Languages.getCode($scope.category.selectedLanguage),
                    title: $scope.category.title,
                    description: $scope.page.description,
                    author: $scope.page.authors,
                    publishDate: moment.utc($scope.page.publicationDate, 'l', moment.locale(), true).valueOf() / 1000
                }
            };
        };

        $scope.$watch('page.publicationDate', function (publicationDate) {
            if (publicationDate && $scope.commonForm && $scope.commonForm.inputPublicationDate) {
                $scope.commonForm.inputPublicationDate.$setValidity('custom', isDateValid(publicationDate));
            }
        });

        $scope.getDateExample = function () {
            var unixTimestamp = 385974036;
            return moment.unix(unixTimestamp).format('l');
        };
    }];

},{}],75:[function(require,module,exports){
'use strict';

module.exports = ['$scope', '$state', 'Languages', 'fileUpload', 'moment', 'PageCategories',
    function ($scope, $state, Languages, fileUpload, moment, PageCategories) {

        var imageDefaultPath = 'app/img/default.jpg';
        $scope.imagePreview = imageDefaultPath;
        $scope.validInputs = false;

        $scope.$on('image.cropper.image.preview', function (event, data, dataToSend) {
            $scope.imagePreview = data;
            $scope.imagePreviewData = dataToSend;
        });

        $scope.$watch('category.selectedCategory', function (newValue) {
            if (newValue) {
                $scope.category.seletedCategoryType = PageCategories.getPageType($scope.category.selectedCategory);
            }
        });

        $scope.createPage = function () {
            var json = $scope.page[$scope.category.seletedCategoryType](), imageToUpload;

            if ($scope.imagePreviewData !== imageDefaultPath) {
                imageToUpload = $scope.imagePreviewData;
            }

            fileUpload.uploadFileAndJson(imageToUpload, json, 'api/user/page/create').
                showSuccess(function (resp) {
                    $state.go('page.detail', {
                        label: $scope.category.seletedCategoryType,
                        pageId: resp.pageId
                    });
                }).
                error(function () {

                });

        };
    }];

},{}],76:[function(require,module,exports){
'use strict';

module.exports = ['$scope', '$state',
    function ($scope, $state) {

        $scope.category = {};
        $scope.page = {};
        $scope.state = {actual: 1, previous: 1};

        $scope.setNextState = function (newState) {
            if (newState !== $scope.state.actual) {
                $scope.state.previous = $scope.state.actual;
                $scope.state.actual = newState;
            }
        };

        $scope.setPreviousState = function () {
            $scope.state.actual = $scope.state.previous;
        };

        $scope.abortCreatePage = function () {
            $state.go('page.overview');
        };

        $scope.suggestionContinue = function () {
            $scope.setNextState(3);
        };
    }];

},{}],77:[function(require,module,exports){
'use strict';

var setCategories = function (pages, PageCategories) {
    angular.forEach(pages, function (page) {
        page.category = PageCategories.categories[page.label];
    });
};

module.exports = ['$scope', 'PageCategories', 'Languages', 'SearchPage',
    function ($scope, PageCategories, Languages, SearchPage) {

        $scope.categories = PageCategories.getCategories();
        $scope.languages = Languages.languages;
        $scope.categoryFinishedButtonDisabled = true;
        $scope.categoryFirstSelect = true;
        $scope.categoryTitleChanged = false;
        $scope.categoryTitlePrviouse = '';

        $scope.$watchCollection('category', function (newCategories) {
            if (newCategories.title && newCategories.selectedLanguage && newCategories.selectedCategory) {
                $scope.categoryFinishedButtonDisabled = false;
            } else {
                $scope.categoryFinishedButtonDisabled = true;
            }
        });

        $scope.categorySelectFinished = function () {
            var title = $scope.category.title;
            $scope.page.pageSuggestions = SearchPage.get({
                search: title,
                filterType: PageCategories.getPageType($scope.category.selectedCategory),
                filterLanguage: Languages.getCode($scope.category.selectedLanguage),
                isSuggestion: false
            }, function () {
                $scope.categoryFirstSelect = false;
                $scope.categoryTitleChanged = false;
                $scope.categoryTitlePrviouse = title;
                if ($scope.page.pageSuggestions.pages.length > 0) {
                    setCategories($scope.page.pageSuggestions.pages, PageCategories);
                    $scope.setNextState(2);
                } else {
                    $scope.setNextState(3);
                }
            });
        };

        $scope.$watch('category.title', function (newValue) {
            if (newValue && newValue.trim() !== '' && !$scope.categoryFirstSelect) {
                if (newValue !== $scope.categoryTitlePrviouse) {
                    $scope.categoryTitleChanged = true;
                    $scope.setNextState(1);
                } else {
                    if($scope.categoryTitleChanged) {
                        $scope.setPreviousState();
                    }
                    $scope.categoryTitleChanged = false;
                }
            } else {
                $scope.categoryTitleChanged = false;
            }
        });
    }];

},{}],78:[function(require,module,exports){
'use strict';

var app = require('angular').module('elyoosApp');

app.controller('PageCreateCtrl', require('./createPage/pageCreateCtrl'));
app.controller('PageCreateSelectCategoryCtrl', require('./createPage/selectCategoryCtrl'));
app.controller('PageCreateCommonSectionCtrl', require('./createPage/commonSectionCtrl'));
app.controller('PageCreateCommonBookCtrl', require('./createPage/commonBookCtrl'));

app.controller('PageOverviewCtrl', require('./pageOverviewCtrl'));
app.controller('PageDetailCtrl', require('./pageDetailCtrl'));
app.controller('AddRemoveRecommendationCtrl', require('./addRemoveRecommendationCtrl'));

app.service('PageRecommendationContact', require('./services/pageRecommendationContact'));
app.service('PageDetail', require('./services/pageDetail'));
app.service('SearchPage', require('./services/searchPage'));
app.service('PageCategories', require('./services/categories'));

app.config(['$stateProvider', function ($stateProvider) {

    $stateProvider
        .state('page', {
            abstract: true,
            url: '/page',
            views: {
                header: {
                    templateUrl: 'app/modules/navigation/loggedInHeader.html'
                }
            }
        })
        .state('page.overview', {
            url: '/overview',
            views: {
                'content@': {
                    templateUrl: 'app/modules/page/pageOverview.html',
                    controller: 'PageOverviewCtrl'
                }
            }
        })
        .state('page.detail', {
            url: '/detail/{label}/{pageId}',
            views: {
                'content@': {
                    templateUrl: 'app/modules/page/pageDetail.html',
                    controller: 'PageDetailCtrl'
                }
            }
        })
        .state('page.create', {
            url: '/create',
            views: {
                'content@': {
                    templateUrl: 'app/modules/page/createPage/pageCreate.html',
                    controller: 'PageCreateCtrl'
                }
            }
        });
}]);
},{"./addRemoveRecommendationCtrl":73,"./createPage/commonBookCtrl":74,"./createPage/commonSectionCtrl":75,"./createPage/pageCreateCtrl":76,"./createPage/selectCategoryCtrl":77,"./pageDetailCtrl":79,"./pageOverviewCtrl":80,"./services/categories":84,"./services/pageDetail":85,"./services/pageRecommendationContact":86,"./services/searchPage":87,"angular":4}],79:[function(require,module,exports){
'use strict';

var categories = {
    BookPage: 'Buch',
    VideoPage: 'Video',
    CoursePage: 'Kurs',
    SchoolPage: 'Schule'
};

module.exports = ['$scope', '$window', '$state', '$stateParams', 'PageDetail',
    function ($scope, $window, $state, $stateParams, PageDetail) {

        $scope.pageDetail = PageDetail.get({pageId: $stateParams.pageId, label: $stateParams.label}, function () {
            var collection;
            $scope.contributorsWithProfile = [];
            $scope.contributors = [];
            if ($stateParams.label === 'BookPage') {
                collection = $scope.pageDetail.page.author;
                $scope.contributorPrefix = 'von';
            } else if ($stateParams.label === 'VideoPage') {
                collection = $scope.pageDetail.page.actor;
                $scope.contributorPrefix = 'mit';
            } else if ($stateParams.label === 'SchoolPage') {
                collection = $scope.pageDetail.page.principal;
                $scope.contributorPrefix = 'wird geleited von';
            } else if ($stateParams.label === 'CoursePage') {
                collection = $scope.pageDetail.page.instructor;
                $scope.contributorPrefix = 'wird geleited von';
            }
            angular.forEach(collection, function (author) {
                if (author.userId) {
                    $scope.contributorsWithProfile.push(author);
                } else {
                    $scope.contributors.push(author);
                }
            });
        });

        $scope.category = categories[$stateParams.label];
        $scope.pageId = $stateParams.pageId;
        $scope.label = $stateParams.label;

        $scope.openUserDetail = function (userId, isLoggedInUser) {
            if (userId) {
                if (isLoggedInUser) {
                    $state.go('settings.profile', {
                        userId: userId
                    });
                } else {
                    $state.go('contact.detail', {
                        userId: userId
                    });
                }
            }
        };

        $scope.openLink = function (link) {
            if (link) {
                $window.open(link, '_blank');
            }
        };
    }];

},{}],80:[function(require,module,exports){
'use strict';

var setCategories = function (pages, PageCategories) {
    angular.forEach(pages, function (page) {
        page.category = PageCategories.categories[page.label];
    });
};

var getSelectedFilters = function ($scope) {
    var typesFilter = '';
    if ($scope.filterDisabled) {
        return;
    }
    angular.forEach($scope.filters, function (filter) {
        if (filter.selected) {
            if (typesFilter.length === 0) {
                typesFilter = typesFilter.concat(filter.filter);
            } else {
                typesFilter = typesFilter.concat(',', filter.filter);
            }
        }
    });
    return typesFilter;
};

module.exports = ['$scope', '$state', 'PageRecommendationContact', 'SearchPage', 'PageCategories',
    function ($scope, $state, PageRecommendationContact, SearchPage, PageCategories) {

        $scope.query = "";
        $scope.itemsPerPage = 30;
        $scope.filterDisabled = true;

        $scope.filters = [{description: 'Buch', filter: 'BookPage'}, {description: 'Video', filter: 'VideoPage'}];

        $scope.getRecommendationContacts = function (skip) {

            skip = (skip - 1) * $scope.itemsPerPage;

            $scope.page = PageRecommendationContact.get({
                maxItems: $scope.itemsPerPage,
                skip: skip,
                filters: getSelectedFilters($scope)
            }, function () {
                delete $scope.lastSearch;
                setCategories($scope.page.pages, PageCategories);
            });
        };
        $scope.getRecommendationContacts(1);

        $scope.createNewPage = function () {
            $state.go('page.create');
        };

        $scope.searchPage = function (searchValue) {
            if (searchValue && searchValue.trim().length > 0) {
                $scope.page = SearchPage.get({
                    search: searchValue,
                    filterType: getSelectedFilters($scope),
                    isSuggestion: false
                }, function () {
                    $scope.lastSearch = searchValue;
                    setCategories($scope.page.pages, PageCategories);
                });
            } else {
                $scope.getRecommendationContacts(1);
            }
        };

        $scope.selectChanged = function () {
            if ($scope.lastSearch) {
                $scope.searchPage($scope.lastSearch);
            } else {
                $scope.getRecommendationContacts(1);
            }
        };

        $scope.selectedFilter = function (filter) {
            $scope.filterDisabled = false;
            filter.selected = !filter.selected;
            $scope.selectChanged();
        };

        $scope.selectedAllPages = function () {
            $scope.filterDisabled = true;
            angular.forEach($scope.filters, function (filter) {
                filter.selected = false;
            });
            $scope.selectChanged();
        };
    }];

},{}],81:[function(require,module,exports){
'use strict';

module.exports = {
    directiveCtrl: function () {
        return ['$scope', '$state', function ($scope, $state) {
            $scope.openDetail = function (pageId, label) {
                $state.go('page.detail', {
                    label: label,
                    pageId: pageId
                });
            };
        }];
    }
};

},{}],82:[function(require,module,exports){
'use strict';

var controller = require('./controller.js');

module.exports = {
    directive: [function () {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                pagePreview: '='
            },
            templateUrl: 'app/modules/page/pagePreview/template.html',
            controller: controller.directiveCtrl()
        };
    }],
    name: 'elyPagePreview'
};

},{"./controller.js":81}],83:[function(require,module,exports){
arguments[4][34][0].apply(exports,arguments)
},{"./directive.js":82,"angular":4,"c:\\Programmieren\\Elyoos\\client\\app\\modules\\directives\\formTextInput\\index.js":34}],84:[function(require,module,exports){
'use strict';

var categories = {
    BookPage: 'Buch',
    VideoPage: 'Video'
};

module.exports = [
    function () {
        this.categories = categories;

        this.getCategories = function () {
            var key, collection = [];
            for (key in categories) {
                if (categories.hasOwnProperty(key)) {
                    collection.push(categories[key]);
                }
            }
            return collection;
        };

        this.getPageType = function (description) {
            var result = false, key;

            for (key in categories) {
                if (categories[key] === description) {
                    result = key;
                }
            }
            return result;
        };
    }];

},{}],85:[function(require,module,exports){
'use strict';

module.exports = ['$resource', function ($resource) {
    return $resource('api/page/detail');
}];

},{}],86:[function(require,module,exports){
'use strict';

module.exports = ['$resource', function ($resource) {
    return $resource('api/page/recommendationContact');
}];

},{}],87:[function(require,module,exports){
'use strict';

module.exports = ['$resource', function ($resource) {
    return $resource('api/page/searchPage');
}];

},{}],88:[function(require,module,exports){
'use strict';

var app = require('angular').module('elyoosApp');

app.controller('RecommendationHomeCtrl', require('./recommendationHomeCtrl'));
app.controller('ModalAddRecommendationCtrl', require('./modalAddRecommendationCtrl'));

app.service('Recommendation', require('./services/recommendation'));
app.service('PageRecommendation', require('./services/pageRecommendation'));

app.config(['$stateProvider', function ($stateProvider) {

    $stateProvider
        .state('recommendation', {
            abstract: true,
            url: '/recommendation',
            views: {
                header: {
                    templateUrl: 'app/modules/navigation/loggedInHeader.html'
                }
            }
        })
        .state('recommendation.home', {
            url: '/home',
            views: {
                'content@': {
                    templateUrl: 'app/modules/recommendation/home.html',
                    controller: 'RecommendationHomeCtrl'
                }
            }
        });
}]);
},{"./modalAddRecommendationCtrl":89,"./recommendationHomeCtrl":90,"./services/pageRecommendation":91,"./services/recommendation":92,"angular":4}],89:[function(require,module,exports){
'use strict';

module.exports = ['$scope', 'PageRecommendation', function ($scope, PageRecommendation) {
    $scope.numberOfSelectedStars = -1;

    $scope.addRecommendation = function () {
        var data = {
            pageId: $scope.recommendation.pageId,
            label: $scope.recommendation.label,
            comment: $scope.recommendationDescription,
            rating: $scope.numberOfSelectedStars
        };

        delete $scope.error;
        PageRecommendation.save(data, function (res) {
            data.profileUrl = res.profileUrl;
            data.recommendationId = res.recommendationId;
            data.recommendation = res.recommendation;
            $scope.confirm(data);
        }, function () {
            $scope.error = 'Bewertung konnte nicht gespeicher werden';
        });
    };
}];

},{}],90:[function(require,module,exports){
'use strict';

module.exports = ['$scope', 'Recommendation', function ($scope, Recommendation) {

}];

},{}],91:[function(require,module,exports){
'use strict';

module.exports = ['$resource', function ($resource) {
    return $resource('api/user/recommendation/page', null, {
        'delete': {method: 'POST', headers: {'X-HTTP-Method-Override': 'DELETE'}}
    });
}];

},{}],92:[function(require,module,exports){
'use strict';

module.exports = ['$resource', function ($resource) {
    return $resource('api/user/recommendation');
}];

},{}],93:[function(require,module,exports){
'use strict';

module.exports = ['$scope', 'Privacy', function ($scope, Privacy) {

    $scope.otherPrivacySettingTypes = [];
    $scope.otherPrivacySettingType = {};
    angular.forEach($scope.privacySettings.normal, function (setting) {
        if (setting.type !== $scope.privacy.type) {
            $scope.otherPrivacySettingTypes.push(setting.type);
        }
    });
    if ($scope.otherPrivacySettingTypes.length > 0) {
        $scope.otherPrivacySettingType = $scope.otherPrivacySettingTypes[0];
    }

    $scope.deletePrivacySetting = function () {

        Privacy.delete({
            privacyDescription: $scope.privacy.type,
            newPrivacyDescription: $scope.otherPrivacySettingType
        }, function () {
            angular.forEach($scope.privacySettings.normal, function (setting, index) {
                if (setting.type === $scope.privacy.type) {
                    $scope.privacySettings.normal.splice(index, 1);
                }
            });
            $scope.setPrivacyTypeNoContact();
        });
    };
}];

},{}],94:[function(require,module,exports){
'use strict';

var app = require('angular').module('elyoosApp');

app.controller('ProfileCtrl', require('./profileCtrl'));
app.controller('PasswordCtrl', require('./passwordCtrl'));
app.controller('PrivacyCtrl', require('./privacyCtrl'));
app.controller('RenamePrivacyCtrl', require('./renamePrivacyCtrl'));
app.controller('DeletePrivacyCtrl', require('./deletePrivacyCtrl'));

app.factory('Profile', require('./services/profile'));
app.factory('Privacy', require('./services/privacy'));
app.factory('Password', require('./services/password'));

app.config(['$stateProvider', function ($stateProvider) {

    $stateProvider
        .state('settings', {
            abstract: true,
            url: '/settings',
            views: {
                header: {
                    templateUrl: 'app/modules/navigation/loggedInHeader.html'
                }
            }
        })
        .state('settings.profile', {
            url: '/profile',
            views: {
                'content@': {
                    templateUrl: 'app/modules/settings/profile.html',
                    controller: 'ProfileCtrl'
                }
            }
        })
        .state('settings.profile.changePassword', {
            url: '/newPassword',
            views: {
                'content@': {
                    templateUrl: 'app/modules/settings/changePassword.html',
                    controller: 'PasswordCtrl'
                }
            }
        })
        .state('settings.privacy', {
            url: '/privacy',
            views: {
                'content@': {
                    templateUrl: 'app/modules/settings/privacy.html',
                    controller: 'PrivacyCtrl'
                }
            }
        });
}]);
},{"./deletePrivacyCtrl":93,"./passwordCtrl":95,"./privacyCtrl":96,"./profileCtrl":97,"./renamePrivacyCtrl":98,"./services/password":99,"./services/privacy":100,"./services/profile":101,"angular":4}],95:[function(require,module,exports){
'use strict';

module.exports = ['$scope', 'Password', function ($scope, Password) {

    $scope.password = {};
    $scope.submitFailed = false;
    $scope.newPasswordNotEqual = false;
    $scope.submitFailedToServer = false;
    $scope.successUserDataChange = false;

    $scope.submitNewPassword = function () {
        function checkMinPasswordLength() {
            return $scope.password.newPassword.trim().length > 7;
        }

        function checkPasswordEqual() {
            return $scope.password.newPassword === $scope.password.newPasswordConfirm;
        }

        $scope.submitFailed = false;
        $scope.newPasswordNotEqual = false;
        $scope.profileForm.inputPassword.$error.minlength = false;

        if (!$scope.profileForm.$invalid) {
            if (checkMinPasswordLength()) {
                if (checkPasswordEqual()) {
                    Password.save({
                        newPassword: $scope.password.newPassword,
                        actualPassword: $scope.password.actualPassword
                    }, function () {
                        $scope.profileForm.$setPristine();
                        $scope.successUserDataChange = true;
                        $scope.submitFailedToServer = false;
                    }, function () {
                        $scope.submitFailedToServer = true;
                        $scope.successUserDataChange = false;
                    });
                } else {
                    $scope.newPasswordNotEqual = true;
                    $scope.password.newPasswordConfirm = '';
                }
            } else {
                $scope.profileForm.inputPassword.$error.minlength = true;
                $scope.password.newPasswordConfirm = '';
            }
        } else {
            $scope.submitFailed = true;
            $scope.password.newPasswordConfirm = '';
        }
    };
}];

},{}],96:[function(require,module,exports){
'use strict';

var sendUpdatePrivacySetting = function (Privacy, $scope, updatePrivacySetting, privacySettings) {

    Privacy.save(updatePrivacySetting, function () {
        if (updatePrivacySetting.changePrivacyNoContactSetting) {
            angular.copy($scope.selectedType, $scope.privacySettings.noContact);
        } else {
            angular.forEach($scope.privacySettings.normal, function (privacy) {
                if (privacy.type === $scope.selectedType.type) {
                    privacy.profileVisible = privacySettings.profileVisible;
                    privacy.profileDataVisible = privacySettings.profileDataVisible;
                    privacy.imageVisible = privacySettings.imageVisible;
                    privacy.contactsVisible = privacySettings.contactsVisible;
                }
            });
        }
        $scope.$broadcast('ely.send.button.success');
    }, function () {

    });
};

module.exports = ['$scope', 'Privacy', function ($scope, Privacy) {

    $scope.allowedToChangePrivacy = false;
    $scope.selectedType = {};
    $scope.addingPrivacy = {};
    $scope.privacySettings = Privacy.get({}, function () {
        $scope.setPrivacyTypeNoContact();
    });
    $scope.privacySettings.noContactSelected = true;

    $scope.setPrivacyType = function (type) {
        $scope.privacySettings.noContactSelected = false;

        angular.forEach($scope.privacySettings.normal, function (privacySetting) {
            if (privacySetting.type === type) {
                angular.copy(privacySetting, $scope.selectedType);
                $scope.$broadcast('ely.send.button.model.changed', $scope.selectedType);
            }
        });
    };

    $scope.setPrivacyTypeNoContact = function () {
        $scope.privacySettings.noContactSelected = true;
        angular.copy($scope.privacySettings.noContact, $scope.selectedType);
        $scope.selectedType.isInit = true;
        $scope.$broadcast('ely.send.button.model.changed', $scope.selectedType);
        $scope.selectedType.type = 'kein Kontakt';
    };


    $scope.updatePrivacyType = function () {
        var updatePrivacySetting, privacySettings;

        privacySettings = {
            privacySettings: {
                profileVisible: $scope.selectedType.profileVisible,
                profileDataVisible: $scope.selectedType.profileDataVisible,
                imageVisible: $scope.selectedType.imageVisible,
                contactsVisible: $scope.selectedType.contactsVisible
            }
        };

        if ($scope.privacySettings.noContactSelected) {
            updatePrivacySetting = {};
            updatePrivacySetting.changePrivacyNoContactSetting = privacySettings;
        } else {
            updatePrivacySetting = {};
            updatePrivacySetting.changePrivacySetting = privacySettings;
            updatePrivacySetting.changePrivacySetting.privacyDescription = $scope.selectedType.type;
        }

        sendUpdatePrivacySetting(Privacy, $scope, updatePrivacySetting, privacySettings.privacySettings);
    };

    $scope.showAddingNewPrivacySetting = function () {
        $scope.showNewPrivacySettingInput = true;
        $scope.addingPrivacy.newPrivacyName = "";
    };

    $scope.abortAddingNewPrivacy = function () {
        $scope.showNewPrivacySettingInput = false;
    };

    $scope.addPrivacySetting = function () {
        if ($scope.addingPrivacy.newPrivacyName.trim() !== '') {
            var newPrivacyData = {
                addNewPrivacy: {
                    privacySettings: {
                        profileVisible: true,
                        profileDataVisible: false,
                        imageVisible: false,
                        contactsVisible: false
                    },
                    privacyDescription: $scope.addingPrivacy.newPrivacyName
                }
            };

            Privacy.save(newPrivacyData, function () {
                $scope.showNewPrivacySettingInput = false;
                $scope.privacySettings.normal.push({
                    profileVisible: true,
                    profileDataVisible: false,
                    imageVisible: false,
                    contactsVisible: false,
                    type: $scope.addingPrivacy.newPrivacyName
                });
                $scope.setPrivacyType($scope.addingPrivacy.newPrivacyName);
                $scope.$broadcast('ely.send.button.success');
            });
        }
    };
}];

},{}],97:[function(require,module,exports){
'use strict';

module.exports = ['$scope', 'Profile', 'profileImage', 'moment', 'CountryCodeConverter',
    function ($scope, Profile, profileImage, moment, CountryCodeConverter) {

        var isDateValid = function (date) {
            return moment(date, 'l', moment.locale(), true).isValid();
        };

        $scope.countryCodes = CountryCodeConverter.countryCodes;
        $scope.selectedCountryCode = '';
        $scope.userDataToChange = {};
        $scope.submitFailed = false;
        $scope.submitFailedToServer = false;
        $scope.successUserDataChange = false;

        $scope.getUserData = function () {
            $scope.userDataToChange = Profile.get({}, function () {
                $scope.userDataToChange.birthday = moment.unix($scope.userDataToChange.birthday).format('l');
                $scope.selectedCountryCode = CountryCodeConverter.getCountry($scope.userDataToChange.country);
                $scope.userDataToChange.isInit = true;
            });
        };
        $scope.getUserData();

        profileImage.addProfileImageChangedEvent($scope, function () {
            var profileData = Profile.get({}, function () {
                $scope.userDataToChange.profileImage = profileData.profileImage;
            });
        });

        $scope.submitProfileData = function () {
            $scope.submitFailed = false;

            if (!$scope.profileForm.$invalid) {
                var submittedUser = {
                    forename: $scope.userDataToChange.forename,
                    surname: $scope.userDataToChange.surname,
                    birthday: moment.utc($scope.userDataToChange.birthday, 'l', moment.locale(), true).valueOf() / 1000,
                    street: $scope.userDataToChange.street,
                    place: $scope.userDataToChange.place,
                    country: CountryCodeConverter.getCountryCode($scope.selectedCountryCode),
                    female: $scope.userDataToChange.female
                };
                if (submittedUser.country) {
                    Profile.save(submittedUser, function () {
                        $scope.profileForm.$setPristine();
                        $scope.successUserDataChange = true;
                        $scope.submitFailedToServer = false;
                        $scope.$broadcast('ely.send.button.success');
                    }, function () {
                        $scope.$broadcast('ely.send.button.error', 'Fehler auf dem Server. Die Werte konnten nicht gespeichert werden');
                        $scope.submitFailedToServer = true;
                        $scope.successUserDataChange = false;
                    });
                } else {
                    $scope.submitFailed = true;
                    $scope.$broadcast('ely.send.button.error', 'Bitte ein Land ausw\u00e4hlen');
                }
            } else {
                $scope.$broadcast('ely.send.button.error', 'Bitte f\u00fclle alle Felder korrekt aus');
                $scope.submitFailed = true;
            }
        };

        $scope.getDateExample = function () {
            var unixTimestamp = 385974036;
            return moment.unix(unixTimestamp).format('l');
        };

        $scope.$watch('selectedCountryCode', function (newCountryCode) {
            if (newCountryCode) {
                $scope.userDataToChange.country = CountryCodeConverter.getCountryCode(newCountryCode);
            }
        });

        $scope.$watch('userDataToChange.birthday', function (newBirthday) {
            if (newBirthday && $scope.profileForm && $scope.profileForm.inputBirthday) {
                $scope.profileForm.inputBirthday.$setValidity('custom', isDateValid(newBirthday));
            }
        });
    }];

},{}],98:[function(require,module,exports){
'use strict';

module.exports = ['$scope', 'Privacy', function ($scope, Privacy) {

    $scope.renameType = $scope.privacy.type;
    $scope.renameExists = true;

    $scope.renamePrivacySetting = function () {
        var renamePrivacySettings = {
            renamePrivacy: {
                privacyDescription: $scope.privacy.type,
                newPrivacyDescription: $scope.renameType
            }
        };

        Privacy.save(renamePrivacySettings, function () {
            if ($scope.selectedType.type === $scope.privacy.type) {
                $scope.selectedType.type = $scope.renameType;
            }
            angular.forEach($scope.privacySettings.normal, function (privacySetting) {
                if (privacySetting.type === $scope.privacy.type) {
                    privacySetting.type = $scope.renameType;
                }
            });
            $scope.privacy.type = $scope.renameType;
            $scope.$hide();
        }, function () {

        });
    };

    $scope.$watch('renameType', function (newRenameType) {
        if (newRenameType) {
            $scope.renameExists = false;
            angular.forEach($scope.privacySettings.normal, function (privacySetting) {
                if (privacySetting.type === newRenameType) {
                    $scope.renameExists = true;
                }
            });
        }
    });
}];

},{}],99:[function(require,module,exports){
'use strict';

module.exports = ['$resource', function ($resource) {
    return $resource('api/user/password');
}];

},{}],100:[function(require,module,exports){
'use strict';

module.exports = ['$resource', function ($resource) {
    return $resource('api/user/settings/privacy', null, {
        'delete': {method: 'POST', headers: {'X-HTTP-Method-Override': 'DELETE'}}
    });
}];

},{}],101:[function(require,module,exports){
'use strict';

module.exports = ['$resource', function ($resource) {
    return $resource('api/user/settings/profile');
}];

},{}],102:[function(require,module,exports){
'use strict';

var countryCodes = [{country: 'Schweiz', code: 'CH'},
    {country: 'Deutschland', code: 'DE'},
    {country: '\u00d6sterreich', code: 'AT'},
    {country: 'Frankreich', code: 'FR'},
    {country: 'Italien', code: 'IT'}];

module.exports = function () {

    this.countryCodes = countryCodes;

    this.getCountryCode = function (country) {
        var result = false;
        angular.forEach(countryCodes, function (countryCode) {
            if (countryCode.country === country) {
                result = countryCode.code;
            }
        });
        return result;
    };

    this.getCountry = function (code) {
        var result = countryCodes[0].country;
        angular.forEach(countryCodes, function (countryCode) {
            if (countryCode.code === code) {
                result = countryCode.country;
            }
        });
        return result;
    };
};

},{}],103:[function(require,module,exports){
'use strict';

var app = require('angular').module('elyoosApp');

app.service('Languages', require('./languages'));
app.service('CountryCodeConverter', require('./countryCodeConverter'));
},{"./countryCodeConverter":102,"./languages":104,"angular":4}],104:[function(require,module,exports){
'use strict';

var languages = [{description: 'Deutsch', code: 'de'},
    {description: 'English', code: 'en'},
    {description: 'Franz\u00f6sisch', code: 'fr'},
    {description: 'Italienisch', code: 'it'},
    {description: 'Spanisch', code: 'es'}];

module.exports = [
    function () {
        this.languages = languages;

        this.getCode = function (description) {
            var result = false;
            angular.forEach(languages, function (language) {
                if (language.description === description) {
                    result = language.code;
                }
            });
            return result;
        };
    }];

},{}],105:[function(require,module,exports){
'use strict';

module.exports = ['moment', function (moment) {

    this.format = function (dateValue) {
        var endYesterday = moment().subtract(1, 'days').endOf('day'),
            startYesterday = moment().subtract(1, 'days').startOf('day');
        dateValue = moment.unix(dateValue);

        if (dateValue.isBetween(startYesterday, endYesterday)) {
            return 'Gestern';
        }

        if (dateValue.isAfter(endYesterday)) {
            return 'Heute';
        }
        return dateValue.format('l');
    };

    this.formatExact = function (dateValue) {
        var endYesterday = moment().subtract(1, 'days').endOf('day');
        dateValue = moment.unix(dateValue);

        if (dateValue.isAfter(endYesterday)) {
            return dateValue.format('H:mm');
        }
        return dateValue.format('H:mm l');
    };

    return this;
}];

},{}],106:[function(require,module,exports){
'use strict';

var app = require('angular').module('elyoosApp');

app.service('dateFormatter', require('./dateFormatter'));
},{"./dateFormatter":105,"angular":4}],107:[function(require,module,exports){
'use strict';

var app = require('angular').module('elyoosApp');

app.service('profileImage', require('./profileImage'));
},{"./profileImage":108,"angular":4}],108:[function(require,module,exports){
'use strict';

module.exports = [function () {
    this.addProfileImageChangedEvent = function (scope, callback) {
        scope.$on('elyoos.profileImage.change', function () {
            callback();
        });
    };
    return this;
}];

},{}],109:[function(require,module,exports){
'use strict';

function dataURItoBlob(dataURI) {
    var binary = window.atob(dataURI.split(',')[1]),
        array = [],
        i;
    for (i = 0; i < binary.length; i = i + 1) {
        array.push(binary.charCodeAt(i));
    }
    return new Blob([new Uint8Array(array)], {type: 'image/jpeg'});
}

module.exports = ['$scope', 'fileUpload', 'FileReader', function ($scope, fileUpload, FileReader) {

    $scope.imageForUploadPreview = null;
    $scope.uploadRunning = false;
    $scope.uploadFile = false;
    $scope.isLandscape = false;

    $scope.imageResultData = function (data) {
        var blob;
        if (data.trim() !== '') {
            delete $scope.uploadError;
            $scope.uploadRunning = true;
            blob = dataURItoBlob(data);
            if ($scope.uploadFile) {
                fileUpload.uploadFileToUrl(blob, '/api/user/settings/uploadProfileImage').
                    showSuccess(function () {
                        $scope.uploadRunning = false;
                        $scope.$emit('elyoos.profileImage.change');
                        $scope.$hide();
                    }).
                    error(function () {
                        $scope.uploadRunning = false;
                    });
            } else {
                $scope.$hide();
                $scope.$emit('image.cropper.image.preview', data, blob);
            }
        } else {
            $scope.uploadError = 'File kann nicht hochgeladen werden';
        }
    };

    $scope.$watch('imageForUpload', function (newImage) {
        if (newImage) {
            FileReader.onloadend = function () {
                $scope.$apply(function () {
                    $scope.imageForUploadPreview = FileReader.result;
                });
            };
            FileReader.readAsDataURL(newImage);
        }
    });

    $scope.startUpload = function () {
        $scope.uploadFile = true;
        $scope.$broadcast('image.cropper.get.data');
    };

    $scope.getPreview = function () {
        $scope.uploadFile = false;
        $scope.$broadcast('image.cropper.get.data');
    };

    $scope.setFormat = function (ratio, isLandsacpe) {
        $scope.$broadcast('image.cropper.set.ratio', ratio);
        $scope.isLandscape = isLandsacpe;
    };

    $scope.checkOriginalSize = function (width, height) {
        if (width < 300 || height < 200) {
            $scope.$apply(function () {
                $scope.uploadError = 'Bild ist zu klein';
            });
        } else {
            $scope.$apply(function () {
                delete $scope.uploadError;
            });
        }
    };
}];

},{}],110:[function(require,module,exports){
'use strict';

module.exports = {
    directive: ['$parse', function ($parse) {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                var model = $parse(attrs.elyFileModel),
                    modelSetter = model.assign;

                element.bind('change', function () {
                    scope.$apply(function () {
                        modelSetter(scope, element[0].files[0]);
                    });
                });
            }
        };
    }],
    name: 'elyFileModel'
};

},{}],111:[function(require,module,exports){
'use strict';

module.exports = function () {
    return new FileReader();
};

},{}],112:[function(require,module,exports){
'use strict';

module.exports = ['$http', function ($http) {
    this.uploadFileToUrl = function (file, uploadUrl) {
        var fd = new FormData();
        fd.append('file', file);
        return $http.post(uploadUrl, fd, {
            transformRequest: angular.identity,
            headers: {'Content-Type': undefined}
        });
    };
    this.uploadFileAndJson = function (file, json, uploadUrl) {
        var fd = new FormData();
        if (file) {
            fd.append('file', file);
        }
        fd.append('model', angular.toJson(json));
        return $http.post(uploadUrl, fd, {
            transformRequest: angular.identity,
            headers: {'Content-Type': undefined}
        });
    };
}];

},{}],113:[function(require,module,exports){
'use strict';

var app = require('angular').module('elyoosApp');
var fileModel = require('./fileModel.js');

app.service('fileUpload', require('./fileUpload'));

app.factory('FileReader', require('./fileReader'));

app.controller('FileCtrl', require('./fileCtrl'));

app.directive(fileModel.name, fileModel.directive);
},{"./fileCtrl":109,"./fileModel.js":110,"./fileReader":111,"./fileUpload":112,"angular":4}],114:[function(require,module,exports){
'use strict';

var app = require('angular').module('elyoosApp');

app.service('moment', require('./moment'));
app.service('PromiseModal', require('./promiseModal'));
},{"./moment":115,"./promiseModal":116,"angular":4}],115:[function(require,module,exports){
'use strict';

var moment = require('moment');

module.exports = function () {
    moment.locale('de');
    return moment;
};

},{"moment":11}],116:[function(require,module,exports){
'use strict';

module.exports = ['$modal', '$q', '$rootScope', function ($modal, $q, $rootScope) {

    this.getModal = function (modalParams) {
        var confirm, deferred, parentShow;
        if (!modalParams.scope) {
            modalParams.scope = $rootScope.$new(false);
        }

        modalParams.scope.confirm = function (res) {
            deferred.resolve(res);
            confirm.hide();
        };
        modalParams.scope.abort = function (res) {
            deferred.reject(res);
            confirm.hide();
        };

        modalParams.show = false;
        modalParams.html = true;
        confirm = $modal(modalParams);
        parentShow = confirm.show;

        confirm.show = function () {
            deferred = $q.defer();
            confirm.$promise.then(parentShow);
            return deferred.promise;
        };

        return confirm;
    };
}];

},{}],117:[function(require,module,exports){
module.exports={
  "name": "elyoos-client-test",
  "version": "1.0.0",
  "description": "elyoos",
  "repository": "",
  "dependencies": {
  },
  "devDependencies": {
    "browserify": "8.1.1",
    "phantomjs": "~1.9.13",
    "mocha": "~1.21.4",
    "karma": "~0.12.31",
    "karma-browserify": "3.0.2",
    "karma-chrome-launcher": "^0.1.4",
    "karma-phantomjs-launcher": "^0.1.4",
    "karma-firefox-launcher": "^0.1.4",
    "karma-mocha": "~0.1.10",
    "karma-chai": "~0.1.0",
    "karma-sinon": "~1.0.4",
    "karma-junit-reporter": "~0.2.2",
    "karma-coverage": "~0.2.6",
    "karma-ng-html2js-preprocessor": "~0.1.2",
    "browserify-istanbul": "0.1.2",
    "protractor": "~1.3.1",
    "selenium": "~2.20.0",
    "chromedriver": "~2.12.0",
    "underscore": "~1.7.0",
    "matchdep": "~0.3.0",
    "grunt": "~0.4.5",
    "grunt-browserify": "~3.1.0",
    "grunt-contrib-uglify": "~0.6.0",
    "grunt-karma": "~0.9.0",
    "grunt-sonar-runner": "~2.4.2",
    "grunt-angular-templates": "~0.5.7",
    "grunt-contrib-cssmin": "~0.10.0",
    "grunt-contrib-clean": "~0.6.0",
    "grunt-contrib-sass": "~0.8.1",
    "grunt-contrib-concat": "~0.5.0"
  },
  "browser": {
    "angular": "./app/lib/angular/angular-index.js",
    "angular-animate": "./app/lib/angular/angular-animate.min.js",
    "angular-ui-route": "./app/lib/angular/angular-ui-router.min.js",
    "angular-cookies": "./app/lib/angular/angular-cookies.min.js",
    "angular-resource": "./app/lib/angular/angular-resource.min.js",
    "angular-sanitize": "./app/lib/angular/angular-sanitize.min.js",
    "angular-strap": "./app/lib/bootstrap/angular-strap.min.js",
    "angular-strap-tpl": "./app/lib/bootstrap/angular-strap.tpl.min.js",
    "moment": "./app/lib/moment/moment.js",
    "spin": "./app/lib/spin/spin.min.js",
    "templates": "./app/dist/templates.js"
  }
}

},{}]},{},[13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116]);
