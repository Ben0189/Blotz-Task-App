@description('Name of the application')
param appName string = 'BlotzTaskApp' 

@description('Location for all resources')
param location string = resourceGroup().location

module appServicePlan 'modules/appService.bicep' = {
  name: 'BlotzTask-Webapp-module'//TODO: Add a unique suffix
  params: {
    webAppName: appName
  }
}

module kv 'modules/keyVault.bicep' = {
  name: 'BlotzTaskApp-keyvault-module' //TODO: Add a unique suffix
  params: {
    location: location
  }
}

resource keyVault 'Microsoft.KeyVault/vaults@2023-07-01' existing = {
  name: kv.outputs.name
}

module sql 'modules/sqlserver.bicep' = {
  name: 'BlotzTaskApp-sql-module'//TODO: Add a unique suffix
  params: {
    appName: appName
    location: location
    dbAdminUsername: keyVault.getSecret('db-admin-username')
    dbAdminPassword: keyVault.getSecret('db-admin-password')
  }
}

module appInsight 'modules/appInsight.bicep' = {
  name: 'BlotzTaskApp-appInsight-module'//TODO: Add a unique suffix
  params: {
    appName: appName
    location: location
  }
}

//TODO: Deploy managed identity when ready
