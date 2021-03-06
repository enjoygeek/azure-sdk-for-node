/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the CorsSettings class.
 * @constructor
 * Cross-Origin Resource Sharing (CORS) settings for the app.
 *
 * @member {array} [allowedOrigins] Gets or sets the list of origins that
 * should be allowed to make cross-origin
 * calls (for example: http://example.com:12345). Use "*" to allow all.
 *
 */
class CorsSettings {
  constructor() {
  }

  /**
   * Defines the metadata of CorsSettings
   *
   * @returns {object} metadata of CorsSettings
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'CorsSettings',
      type: {
        name: 'Composite',
        className: 'CorsSettings',
        modelProperties: {
          allowedOrigins: {
            required: false,
            serializedName: 'allowedOrigins',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = CorsSettings;
