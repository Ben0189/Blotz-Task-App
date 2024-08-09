param appName string = 'BlotzTaskApp-' // move to parent Name of the application
param location string = resourceGroup().location // Location for all resources
var appInsightName = toLower('AppInsight-${appName}')

resource ai 'Microsoft.Insights/components@2020-02-02' = {
  name: appInsightName
  location: location
  kind: 'web'
  properties: {
    Application_Type: 'web'
    IngestionMode: 'LogAnalytics'
  }
}
