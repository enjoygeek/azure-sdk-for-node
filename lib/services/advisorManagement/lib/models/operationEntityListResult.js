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
 * Initializes a new instance of the OperationEntityListResult class.
 * @constructor
 * The list of Advisor operations.
 *
 * @member {string} [nextLink] The link used to get the next page of
 * operations.
 *
 */
class OperationEntityListResult extends Array {
  constructor() {
    super();
  }

  /**
   * Defines the metadata of OperationEntityListResult
   *
   * @returns {object} metadata of OperationEntityListResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'OperationEntityListResult',
      type: {
        name: 'Composite',
        className: 'OperationEntityListResult',
        modelProperties: {
          nextLink: {
            required: false,
            serializedName: 'nextLink',
            type: {
              name: 'String'
            }
          },
          value: {
            required: false,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'OperationEntityElementType',
                  type: {
                    name: 'Composite',
                    className: 'OperationEntity'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = OperationEntityListResult;