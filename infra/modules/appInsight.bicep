// param appName string = 'BlotzTaskApp-' // move to parent Name of the application
// param location string = resourceGroup().location // Location for all resources
// var appInsightName = toLower('AppInsight-${appName}')
// var workspaceName = toLower('Workspace-${appName}')

// resource workspace 'Microsoft.OperationalInsights/workspaces@2023-09-01' = {
//   name: workspaceName
//   location: location
//   properties: {
//     sku: {
//       name: 'PerGB2018'
//     }
//     retentionInDays: 30
//     workspaceCapping: {}
//   }
// }

// resource appInsight 'Microsoft.Insights/components@2020-02-02' = {
//   name: appInsightName
//   location: location
//   kind: 'web'
//   properties: {
//     Application_Type: 'web'
//     IngestionMode: 'LogAnalytics'
//     WorkspaceResourceId: workspace.id
//   }
// }
