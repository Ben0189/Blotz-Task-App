@description('Name of the application')
param appName string = 'BlotzTaskApp' 

@description('Location for all resources')
param location string = resourceGroup().location

@description('Administrator username for SQL Server')
param sqlAdminUsername string

@secure()
@description('Administrator password for SQL Server')
param sqlAdminPassword string

module appServicePlan 'modules/appService.bicep' = {
  name: 'BlotzTask-Webapp-module'//TODO: Add a unique suffix
  params: {
    webAppName: appName
  }
}

module sql 'modules/sqlserver.bicep' = {
  name: 'BlotzTaskApp-sql-module'//TODO: Add a unique suffix
  params: {
    appName: appName
    location: location
    dbAdminUsername: sqlAdminUsername
    dbAdminPassword: sqlAdminPassword
  }
}

module keyVault 'modules/keyVault.bicep' = {
  name: 'BlotzTaskApp-keyvault-module' //TODO: Add a unique suffix
  params: {
    location: location
  }
}

//TODO: Deploy app insight when ready
// module appInsight 'modules/appInsight.bicep' = {
//   name: 'BlotzTaskApp-appInsight-module'//TODO: Add a unique suffix
//   params: {
//     appName: appName
//   }
// }

