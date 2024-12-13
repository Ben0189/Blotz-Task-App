param appName string
param location string
var appInsightName = toLower('AppInsight-${appName}')

//TODO : A new app insight resource is created from azure portal please update the bicep script here
resource appInsight 'Microsoft.Insights/components@2020-02-02' = {
  name: appInsightName
  location: location
  kind: 'web'
  properties: {
    Application_Type: 'web'
  }
}

output connectionString string = appInsight.properties.ConnectionString
