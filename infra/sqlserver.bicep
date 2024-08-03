param sqlServerName string
param sqlDbName string
param location string = resourceGroup().location
@secure()
param dbAdminUsername string
@secure()
param dbAdminPassword string
param skuSpec object
param tags object


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
    tags: tags
    sku: {
      name: skuSpec.name
    }
    properties: {
      maxSizeBytes: 1073741824
    }
  }
}

output name string = sql.name
output server string = sql.properties.fullyQualifiedDomainName
output database string = sqlDbName
