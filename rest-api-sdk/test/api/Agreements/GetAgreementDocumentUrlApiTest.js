/*
 *  Copyright 2016 Adobe Systems Incorporated. All rights reserved.
 *  This file is licensed to you under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License. You may obtain a copy
 *  of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software distributed under
 *  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 *  OF ANY KIND, either express or implied. See the License for the specific language
 *  governing permissions and limitations under the License.
 */

(function (factory) {
        // CommonJS-like environments that support module.exports, like Node.
        module.exports = factory(require('../../utils/TestData'), require('../../utils/AgreementUtils'), require('../../../src/utils/validator/SdkErrorCodes'), require('../../utils/ApiUtils'), require('../../../src/utils/StringUtil'), require('chai'));
    
}(function (TestData, AgreementUtils, SdkErrorCodes, ApiUtils, StringUtil, chai) {
    'use strict';

    /**
     * Mocha unit tests for for Get Agreement Document Url API.
     */
    describe('GetAgreementDocumentUrlApiTest', function () {

        var assert = chai.assert;
        var agreementsApi = null;
        var agreementId = null;
        var documentId = null;
        this.timeout(TestData.TIME_OUT);

        before(function (done) {
            ApiUtils.configureProperty();
            agreementsApi = AgreementUtils.getAgreementsApi();
            AgreementUtils.getResourceId(ApiUtils.getAgreementName())
                          .then(function (agreementIdResponse) {
                              agreementId = agreementIdResponse;
                              return AgreementUtils.getFirstDocumentId(agreementId);
                          })
                          .then(function (documentIdResponse) {
                              documentId = documentIdResponse;
                              done();
                          })
                          .catch(function (apiError) {
                              done(apiError);
                          });

        });

        /**
         * Test for fetching url of given document through the getDocumentUrl .
         * Case covered is successful execution of the api call.
         *
         * @throws ApiError
         */
        it('testDocumentUrl', function (done) {

            agreementsApi.getDocumentUrl(ApiUtils.getValidHeaderParams(),
                                         agreementId,
                                         documentId,
                                         AgreementUtils.getOptsForDocumentUrl(TestData.VERSION_ID,
                                                                              TestData.PARTICIPANT_EMAIL))
                         .then(function (documentUrl) {
                             assert.isNotNull(documentUrl);
                             assert.isNotNull(documentUrl.getUrl());
                             done();
                         })
                         .catch(function (apiError) {
                             done(apiError);
                         });

        });

        /**
         * Test for fetching url of given document through the getDocumentUrl. Negative scenarios covered:
         * NO_ACCESS_TOKEN_HEADER: null access token.
         *
         * @throws ApiError
         */
        it('testNullAccessToken', function (done) {
            var opts = {};
            agreementsApi.getDocumentUrl(ApiUtils.getNullAccessTokenHeaderParams(),
                                         agreementId,
                                         documentId,
                                         AgreementUtils.getOptsForDocumentUrl(TestData.VERSION_ID,
                                                                              TestData.PARTICIPANT_EMAIL))
                         .then(function (documentUrl) {
                             assert.isNotNull(documentUrl);
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.NO_ACCESS_TOKEN_HEADER) ? done() : done(apiError);
                         });

        });

        /**
         * Test for fetching url of given document through the getDocumentUrl. Negative scenarios covered:
         * INVALID_ACCESS_TOKEN: empty access token.
         *
         * @throws ApiError
         */
        it('testEmptyAccessToken', function (done) {
            var opts = {};
            agreementsApi.getDocumentUrl(ApiUtils.getEmptyAccessTokenHeaderParams(),
                                         agreementId,
                                         documentId,
                                         AgreementUtils.getOptsForDocumentUrl(TestData.VERSION_ID,
                                                                              TestData.PARTICIPANT_EMAIL))
                         .then(function (documentUrl) {
                             assert.isNotNull(documentUrl);
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.INVALID_ACCESS_TOKEN) ? done() : done(apiError);
                         });

        });

        /**
         * Test for fetching url of given document through the getDocumentUrl. Negative scenarios covered:
         * INVALID_X_API_USER_HEADER: empty xApiUser.
         *
         * @throws ApiError
         */
        it('testInvalidXApiHeader', function (done) {
            var opts = {};
            agreementsApi.getDocumentUrl(ApiUtils.getEmptyXApiUserHeaderParams(),
                                         agreementId,
                                         documentId,
                                         AgreementUtils.getOptsForDocumentUrl(TestData.VERSION_ID,
                                                                              TestData.PARTICIPANT_EMAIL))
                         .then(function (documentUrl) {
                             assert.isNotNull(documentUrl);
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.INVALID_X_API_USER_HEADER) ? done() : done(apiError);
                         });

        });

        /**
         * Test for fetching url of given document through the getDocumentUrl. Negative scenarios covered:
         * INVALID_AGREEMENT_ID: null agreementId.
         *
         * @throws ApiError
         */
        it('testNullAgreementId', function (done) {
            var opts = {};
            agreementsApi.getDocumentUrl(ApiUtils.getValidHeaderParams(),
                                         TestData.NULL_PARAM,
                                         documentId,
                                         AgreementUtils.getOptsForDocumentUrl(TestData.VERSION_ID,
                                                                              TestData.PARTICIPANT_EMAIL))
                         .then(function (documentUrl) {
                             assert.isNotNull(documentUrl);
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.INVALID_AGREEMENT_ID) ? done() : done(apiError);
                         });

        });

        /**
         * Test for fetching url of given document through the getDocumentUrl. Negative scenarios covered:
         * INVALID_AGREEMENT_ID: null agreementId.
         *
         * @throws ApiError
         */
        it('testEmptyAgreementId', function (done) {
            agreementsApi.getDocumentUrl(ApiUtils.getValidHeaderParams(),
                                         TestData.EMPTY_PARAM,
                                         documentId,
                                         AgreementUtils.getOptsForDocumentUrl(TestData.VERSION_ID,
                                                                              TestData.PARTICIPANT_EMAIL))
                         .then(function (documentUrl) {
                             assert.isNotNull(documentUrl);
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.INVALID_AGREEMENT_ID) ? done() : done(apiError);
                         });

        });


        /**
         * Test for fetching url of given document through the getDocumentUrl. Negative scenarios covered:
         * INVALID_AGREEMENT_ID: null agreementId.
         *
         * @throws ApiError
         */
        it('testNullDocumentId', function (done) {
            var opts = {};
            agreementsApi.getDocumentUrl(ApiUtils.getValidHeaderParams(),
                                         agreementId,
                                         TestData.NULL_PARAM,
                                         AgreementUtils.getOptsForDocumentUrl(TestData.VERSION_ID,
                                                                              TestData.PARTICIPANT_EMAIL))
                         .then(function (documentUrl) {
                             assert.isNotNull(documentUrl);
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.INVALID_DOCUMENT_ID) ? done() : done(apiError);
                         });

        });

        /**
         * Test for fetching url of given document through the getDocumentUrl. Negative scenarios covered:
         * INVALID_AGREEMENT_ID: null agreementId.
         *
         * @throws ApiError
         */
        it('testEmptyDocumentId', function (done) {
            agreementsApi.getDocumentUrl(ApiUtils.getValidHeaderParams(),
                                         agreementId,
                                         TestData.EMPTY_PARAM,
                                         AgreementUtils.getOptsForDocumentUrl(TestData.VERSION_ID,
                                                                              TestData.PARTICIPANT_EMAIL))
                         .then(function (documentUrl) {
                             assert.isNotNull(documentUrl);
                             done();
                         })
                         .catch(function (apiError) {
                             return StringUtil.assertEqual(apiError,
                                                           SdkErrorCodes.INVALID_DOCUMENT_ID) ? done() : done(apiError);
                         });

        });

        /**
         * Test for fetching url of given document through the getDocumentUrl. Negative scenarios covered:
         * INVALID_VERSION_ID: empty versionId.
         *
         * @throws ApiError
         */
        it('testInvalidVersionId', function (done) {
            agreementsApi.getDocumentUrl(ApiUtils.getValidHeaderParams(),
                                         agreementId,
                                         documentId,
                                         AgreementUtils.getOptsForDocumentUrl(TestData.EMPTY_PARAM,
                                                                              TestData.PARTICIPANT_EMAIL))
                         .then(function (documentUrl) {
                             assert.isNotNull(documentUrl);
                             done();
                         })
                         .catch(function (apiError) {
                             return StringUtil.assertEqual(apiError,
                                                           SdkErrorCodes.INVALID_VERSION_ID) ? done() : done(apiError);
                         });

        });

        /**
         * Test for fetching url of given document through the getDocumentUrl. Negative scenarios covered:
         * INVALID_PARTICIPANT: empty participantId.
         *
         * @throws ApiError
         */
        it('testInvalidParticipantEmail', function (done) {
            agreementsApi.getDocumentUrl(ApiUtils.getValidHeaderParams(),
                                         agreementId,
                                         documentId,
                                         AgreementUtils.getOptsForDocumentUrl(TestData.VERSION_ID,
                                                                              TestData.EMPTY_PARAM))
                         .then(function (documentUrl) {
                             assert.isNotNull(documentUrl);
                             done();
                         })
                         .catch(function (apiError) {
                             return StringUtil.assertEqual(apiError,
                                                           SdkErrorCodes.INVALID_PARTICIPANT) ? done() : done(apiError);
                         });

        });

    });

}));
