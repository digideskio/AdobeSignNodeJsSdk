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
*
*/

(function(factory) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../utils/ApiClient'));

}(function(ApiClient) {
  'use strict';


  /**
   * @module model/widgets/WidgetOriginalDocument
   * @version 1.0.0
   */
  /**
   * Constructs a new <code>WidgetOriginalDocument</code>.
   * @alias module:model/widgets/WidgetOriginalDocument
   * @class
   */
  var WidgetOriginalDocument = function() {
    var _this = this;


    _this.documentId = undefined;

    _this.mimeType = undefined;

    _this.name = undefined;

    _this.numPages = undefined;

   /**
    * Id of the document
    * @function getDocumentId
    * @return  Id of the document { String }
    * @instance
    */
    _this.getDocumentId = function() {
      return _this.documentId;
    };

   /**
    * Id of the document
    * @function setDocumentId
    * @param documentId { String } Id of the document
    * @instance
    */
    _this.setDocumentId = function(documentId) {
      _this.documentId = documentId;
    };

   /**
    * Mime-type of the document
    * @function getMimeType
    * @return  Mime-type of the document { String }
    * @instance
    */
    _this.getMimeType = function() {
      return _this.mimeType;
    };

   /**
    * Mime-type of the document
    * @function setMimeType
    * @param mimeType { String } Mime-type of the document
    * @instance
    */
    _this.setMimeType = function(mimeType) {
      _this.mimeType = mimeType;
    };

   /**
    * Name of the document
    * @function getName
    * @return  Name of the document { String }
    * @instance
    */
    _this.getName = function() {
      return _this.name;
    };

   /**
    * Name of the document
    * @function setName
    * @param name { String } Name of the document
    * @instance
    */
    _this.setName = function(name) {
      _this.name = name;
    };

   /**
    * Number of pages in the document
    * @function getNumPages
    * @return  Number of pages in the document { Integer }
    * @instance
    */
    _this.getNumPages = function() {
      return _this.numPages;
    };

   /**
    * Number of pages in the document
    * @function setNumPages
    * @param numPages { Integer } Number of pages in the document
    * @instance
    */
    _this.setNumPages = function(numPages) {
      _this.numPages = numPages;
    };

  };

  /**
   * @private
   * Constructs a <code>WidgetOriginalDocument</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/widgets/WidgetOriginalDocument} obj Optional instance to populate.
   * @return {module:model/widgets/WidgetOriginalDocument} The populated <code>WidgetOriginalDocument</code> instance.
   */
  WidgetOriginalDocument.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new WidgetOriginalDocument();

      if (data.hasOwnProperty('documentId')) {
        obj.setDocumentId(data.documentId);
      }
      if (data.hasOwnProperty('mimeType')) {
        obj.setMimeType(data.mimeType);
      }
      if (data.hasOwnProperty('name')) {
        obj.setName(data.name);
      }
      if (data.hasOwnProperty('numPages')) {
        obj.setNumPages(data.numPages);
      }
    }
    return obj;
  };


  return WidgetOriginalDocument;
}));


