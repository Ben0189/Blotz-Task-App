param appName string = 'BlotzTaskApp' 
param location string = resourceGroup().location // Location for all resources
var sqlServerName = toLower('sqlserver-${appName}')
var sqlDbName = toLower('sqlserverdatabase-${appName}')
@secure()
param dbAdminUsername string
@secure()
param dbAdminPassword string

resource sql 'Microsoft.Sql/servers@2023-05-01-preview' = {
  name: sqlServerName
  location: location
  properties: {
    administratorLogin: dbAdminUsername
    administratorLoginPassword: dbAdminPassword
  }

  resource firewall 'firewallRules@2023-05-01-preview' = {
    name: 'AllowAzureResourcesAndServices'
    properties: {
      startIpAddress: '0.0.0.0'
      endIpAddress: '0.0.0.0'
    }
  }

  resource db 'databases@2023-05-01-preview' = {
    name: sqlDbName
    location: location
    sku: {
      name: 'GP_S_Gen5'
      tier: 'GeneralPurpose'
      family: 'Gen5'  
      capacity: 1
    }
    properties: {
      maxSizeBytes: 1073741824
    }
  }
}

output name string = sql.name
output server string = sql.properties.fullyQualifiedDomainName
output database string = sqlDbName
