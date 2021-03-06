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

const models = require('./index');

/**
 * @class
 * Initializes a new instance of the IaasVMBackupRequest class.
 * @constructor
 * This is an Azure VM (also known as IaaS VM) workload-specific backup
 * request.
 *
 * @member {date} [recoveryPointExpiryTimeInUTC] The backup copy will expire
 * after the time specified. The time is in UTC format.
 *
 */
class IaasVMBackupRequest extends models['BackupRequest'] {
  constructor() {
    super();
  }

  /**
   * Defines the metadata of IaasVMBackupRequest
   *
   * @returns {object} metadata of IaasVMBackupRequest
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'IaasVMBackupRequest',
      type: {
        name: 'Composite',
        className: 'IaasVMBackupRequest',
        modelProperties: {
          objectType: {
            required: true,
            serializedName: 'objectType',
            type: {
              name: 'String'
            }
          },
          recoveryPointExpiryTimeInUTC: {
            required: false,
            serializedName: 'recoveryPointExpiryTimeInUTC',
            type: {
              name: 'DateTime'
            }
          }
        }
      }
    };
  }
}

module.exports = IaasVMBackupRequest;
