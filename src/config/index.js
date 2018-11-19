/**
 * Object contain all the site config
 * like apis key, api url, etc...
 */
export default {
  node_env: process.env.NODE_ENV,
  base_uri: 'https://api.foursquare.com/v2/venues',
  client_id: process.env.VUE_APP_CLIENT_ID,
  client_secret: process.env.VUE_APP_CLIENT_SECRET,
  version_date: process.env.VUE_APP_VERSION_DATE,
  mapKey: process.env.VUE_APP_MAP_KEY
}
