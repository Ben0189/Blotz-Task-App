@description('Specifies the Azure location where the key vault should be created.')
param location string = resourceGroup().location

@description('Specifies whether the key vault is a standard vault or a premium vault.')
@allowed([
  'standard'
  'premium'
])
param skuName string = 'standard'

var name = toLower('kv-blotztask-prod') // Replace with environment variable or parameter
var validatedName = length(name) > 24 ?  substring(name, 0, min(24, length(name))) : name

resource kv 'Microsoft.KeyVault/vaults@2023-07-01' = {
  name: validatedName
  location: location
  properties: {
    sku: {
      family: 'A'
      name: skuName
    }
    tenantId: subscription().tenantId
    softDeleteRetentionInDays: 90
    enabledForTemplateDeployment: true
    enableSoftDelete: true
    enableRbacAuthorization: true
    networkAcls: {
      bypass: 'AzureServices'
      defaultAction: 'Allow'
    }
  }
}

output name string = kv.name
