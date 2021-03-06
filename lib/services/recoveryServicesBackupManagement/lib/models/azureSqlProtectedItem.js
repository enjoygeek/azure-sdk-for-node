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
 * Initializes a new instance of the AzureSqlProtectedItem class.
 * @constructor
 * This is an Azure SQL workload-specific backup item.
 *
 * @member {string} [protectedItemDataId] The internal ID of a backup item. The
 * internal ID is used by the Azure SQL Backup engine to contact Recovery
 * Services.
 *
 * @member {string} [protectionState] The backup state of the backup item.
 * Possible values include: 'Invalid', 'IRPending', 'Protected',
 * 'ProtectionError', 'ProtectionStopped', 'ProtectionPaused'
 *
 * @member {object} [extendedInfo] Additional information for this backup item.
 *
 * @member {date} [extendedInfo.oldestRecoveryPoint] The oldest backup copy
 * available for this item in the service.
 *
 * @member {number} [extendedInfo.recoveryPointCount] The number of available
 * backup copies for this backup item.
 *
 * @member {string} [extendedInfo.policyState] The state of the backup policy
 * associated with this backup item.
 *
 */
class AzureSqlProtectedItem extends models['ProtectedItem'] {
  constructor() {
    super();
  }

  /**
   * Defines the metadata of AzureSqlProtectedItem
   *
   * @returns {object} metadata of AzureSqlProtectedItem
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Microsoft.Sql/servers/databases',
      type: {
        name: 'Composite',
        className: 'AzureSqlProtectedItem',
        modelProperties: {
          backupManagementType: {
            required: false,
            serializedName: 'backupManagementType',
            type: {
              name: 'Enum',
              allowedValues: [ 'Invalid', 'AzureIaasVM', 'MAB', 'DPM', 'AzureBackupServer', 'AzureSql' ]
            }
          },
          workloadType: {
            required: false,
            serializedName: 'workloadType',
            type: {
              name: 'Enum',
              allowedValues: [ 'Invalid', 'VM', 'FileFolder', 'AzureSqlDb', 'SQLDB', 'Exchange', 'Sharepoint', 'DPMUnknown' ]
            }
          },
          sourceResourceId: {
            required: false,
            serializedName: 'sourceResourceId',
            type: {
              name: 'String'
            }
          },
          policyId: {
            required: false,
            serializedName: 'policyId',
            type: {
              name: 'String'
            }
          },
          lastRecoveryPoint: {
            required: false,
            serializedName: 'lastRecoveryPoint',
            type: {
              name: 'DateTime'
            }
          },
          protectedItemType: {
            required: true,
            serializedName: 'protectedItemType',
            type: {
              name: 'String'
            }
          },
          protectedItemDataId: {
            required: false,
            serializedName: 'protectedItemDataId',
            type: {
              name: 'String'
            }
          },
          protectionState: {
            required: false,
            serializedName: 'protectionState',
            type: {
              name: 'Enum',
              allowedValues: [ 'Invalid', 'IRPending', 'Protected', 'ProtectionError', 'ProtectionStopped', 'ProtectionPaused' ]
            }
          },
          extendedInfo: {
            required: false,
            serializedName: 'extendedInfo',
            type: {
              name: 'Composite',
              className: 'AzureSqlProtectedItemExtendedInfo'
            }
          }
        }
      }
    };
  }
}

module.exports = AzureSqlProtectedItem;
