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
 * Initializes a new instance of the JobMaxRecurrence class.
 * @constructor
 * @member {string} [frequency] Gets or sets the frequency of recurrence
 * (second, minute, hour, day, week, month). Possible values include: 'Minute',
 * 'Hour', 'Day', 'Week', 'Month'
 *
 * @member {number} [interval] Gets or sets the interval between retries.
 *
 */
class JobMaxRecurrence {
  constructor() {
  }

  /**
   * Defines the metadata of JobMaxRecurrence
   *
   * @returns {object} metadata of JobMaxRecurrence
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'JobMaxRecurrence',
      type: {
        name: 'Composite',
        className: 'JobMaxRecurrence',
        modelProperties: {
          frequency: {
            required: false,
            serializedName: 'frequency',
            type: {
              name: 'Enum',
              allowedValues: [ 'Minute', 'Hour', 'Day', 'Week', 'Month' ]
            }
          },
          interval: {
            required: false,
            serializedName: 'interval',
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = JobMaxRecurrence;
