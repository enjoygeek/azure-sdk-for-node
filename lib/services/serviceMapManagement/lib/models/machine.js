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
 * Initializes a new instance of the Machine class.
 * @constructor
 * A machine resource represents a discovered computer system. It can be
 * *monitored*, i.e., a Dependency Agent is running on it, or *discovered*,
 * i.e., its existence was inferred by observing the data stream from monitored
 * machines. As machines change, prior versions of the machine resource are
 * preserved and available for access. A machine is live during an interval of
 * time, if either its Dependency Agent has reported data during (parts) of
 * that interval, or a Dependency agent running on other machines has reported
 * activity associated with the machine.
 *
 * @member {date} [timestamp] UTC date and time when this resource was updated
 * in the system.
 *
 * @member {string} [monitoringState] Specifies whether the machine is actively
 * monitored or discovered. Possible values include: 'monitored', 'discovered'
 *
 * @member {string} [virtualizationState] Specifies whether the machine is
 * virtualized. Possible values include: 'unknown', 'physical', 'virtual',
 * 'hypervisor'
 *
 * @member {string} [displayName] Name to use for display purposes
 *
 * @member {string} [computerName] Name of the machine, e.g., server
 *
 * @member {string} [fullyQualifiedDomainName] Fully-qualified name of the
 * machine, e.g., server.company.com
 *
 * @member {date} [bootTime] UTC date and time when the machine last booted
 *
 * @member {object} [timezone] Timezone of the machine.
 *
 * @member {string} [timezone.fullName] Timezone full name.
 *
 * @member {object} [agent] Dependency Agent configuration.
 *
 * @member {string} [agent.agentId] Health Service Agent unique identifier.
 *
 * @member {string} [agent.dependencyAgentId] Dependency Agent unique
 * identifier.
 *
 * @member {string} [agent.dependencyAgentVersion] Dependency Agent version
 * number.
 *
 * @member {string} [agent.dependencyAgentRevision] Dependency Agent revision
 * number.
 *
 * @member {string} [agent.rebootStatus] Specifies whether the machine has been
 * rebooted since the Dependency Agent installation. Possible values include:
 * 'unknown', 'rebooted', 'notRebooted'
 *
 * @member {number} [agent.clockGranularity] Machine clock granularity in
 * milliseconds.
 *
 * @member {object} [resources] Machine resources (memory, cpu, etc.).
 *
 * @member {number} [resources.physicalMemory] Physical memory in megabytes
 * (MB).
 *
 * @member {number} [resources.cpus] Number of CPUs.
 *
 * @member {number} [resources.cpuSpeed] CPU speed in megahertz (Mhz).
 *
 * @member {string} [resources.cpuSpeedAccuracy] Describes the accuracy of the
 * cpuSpeed field. Possible values include: 'actual', 'estimated'
 *
 * @member {object} [networking] Network configuration (ips, gateways, dns,
 * etc.)
 *
 * @member {array} [networking.ipv4Interfaces] IPv4 interfaces.
 *
 * @member {array} [networking.ipv6Interfaces] IPv6 interfaces.
 *
 * @member {array} [networking.defaultIpv4Gateways] Default IPv4 gateways.
 *
 * @member {array} [networking.macAddresses] MAC addresses of all active
 * network interfaces.
 *
 * @member {array} [networking.dnsNames] DNS names associated with the machine.
 *
 * @member {object} [operatingSystem] Operating system information.
 *
 * @member {string} [operatingSystem.family] Windows, Linux, etc. Possible
 * values include: 'unknown', 'windows', 'linux', 'solaris', 'aix'
 *
 * @member {string} [operatingSystem.fullName] Operating system full name.
 *
 * @member {string} [operatingSystem.bitness] Operating system bitness (32-bit
 * or 64-bit). Possible values include: '32bit', '64bit'
 *
 * @member {object} [virtualMachine] Virtualization-related configuration.
 * Present only when `virtualizationState` is `virtual`.
 *
 * @member {string} [virtualMachine.virtualMachineType] Specifies the
 * virtualization technology used by the machine (hyperv, vmware, etc.).
 * Possible values include: 'unknown', 'hyperv', 'ldom', 'lpar', 'vmware',
 * 'virtualPc', 'xen'
 *
 * @member {string} [virtualMachine.nativeMachineId] The unique identifier of
 * the virtual machine as reported by the underlying virtualization sytem.
 *
 * @member {string} [virtualMachine.virtualMachineName] The Name of the virtual
 * machine.
 *
 * @member {string} [virtualMachine.nativeHostMachineId] The unique identifier
 * of the host of this virtual machine as reported by the underlying
 * virtualization system.
 *
 * @member {object} [hypervisor] Hypervisor-related configuration. Present only
 * when 'virtualizationState' is `hypervisor`.
 *
 * @member {string} [hypervisor.hypervisorType] Specifies the virtualization
 * technology used by the hypervisor (hyperv, vmware, etc.). Possible values
 * include: 'unknown', 'hyperv'
 *
 * @member {string} [hypervisor.nativeHostMachineId] The unique identifier of
 * the hypervisor machine as reported by the underlying virtualization system.
 *
 */
class Machine extends models['CoreResource'] {
  constructor() {
    super();
  }

  /**
   * Defines the metadata of Machine
   *
   * @returns {object} metadata of Machine
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'machine',
      type: {
        name: 'Composite',
        className: 'Machine',
        modelProperties: {
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            readOnly: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            readOnly: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          etag: {
            required: false,
            serializedName: 'etag',
            type: {
              name: 'String'
            }
          },
          kind: {
            required: true,
            serializedName: 'kind',
            type: {
              name: 'String'
            }
          },
          timestamp: {
            required: false,
            serializedName: 'properties.timestamp',
            type: {
              name: 'DateTime'
            }
          },
          monitoringState: {
            required: false,
            serializedName: 'properties.monitoringState',
            type: {
              name: 'Enum',
              allowedValues: [ 'monitored', 'discovered' ]
            }
          },
          virtualizationState: {
            required: false,
            serializedName: 'properties.virtualizationState',
            type: {
              name: 'Enum',
              allowedValues: [ 'unknown', 'physical', 'virtual', 'hypervisor' ]
            }
          },
          displayName: {
            required: false,
            serializedName: 'properties.displayName',
            type: {
              name: 'String'
            }
          },
          computerName: {
            required: false,
            serializedName: 'properties.computerName',
            type: {
              name: 'String'
            }
          },
          fullyQualifiedDomainName: {
            required: false,
            serializedName: 'properties.fullyQualifiedDomainName',
            type: {
              name: 'String'
            }
          },
          bootTime: {
            required: false,
            serializedName: 'properties.bootTime',
            type: {
              name: 'DateTime'
            }
          },
          timezone: {
            required: false,
            serializedName: 'properties.timezone',
            type: {
              name: 'Composite',
              className: 'Timezone'
            }
          },
          agent: {
            required: false,
            serializedName: 'properties.agent',
            type: {
              name: 'Composite',
              className: 'AgentConfiguration'
            }
          },
          resources: {
            required: false,
            serializedName: 'properties.resources',
            type: {
              name: 'Composite',
              className: 'MachineResourcesConfiguration'
            }
          },
          networking: {
            required: false,
            serializedName: 'properties.networking',
            type: {
              name: 'Composite',
              className: 'NetworkConfiguration'
            }
          },
          operatingSystem: {
            required: false,
            serializedName: 'properties.operatingSystem',
            type: {
              name: 'Composite',
              className: 'OperatingSystemConfiguration'
            }
          },
          virtualMachine: {
            required: false,
            serializedName: 'properties.virtualMachine',
            type: {
              name: 'Composite',
              className: 'VirtualMachineConfiguration'
            }
          },
          hypervisor: {
            required: false,
            serializedName: 'properties.hypervisor',
            type: {
              name: 'Composite',
              className: 'HypervisorConfiguration'
            }
          }
        }
      }
    };
  }
}

module.exports = Machine;
