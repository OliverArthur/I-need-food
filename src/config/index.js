/**
 * Object contain all the site config
 * like apis key, api url, etc...
 */
export default {
  base_uri: 'https://api.foursquare.com/v2/venues',
  client_id: process.env.CLIENT_ID || 'X3IANAMH4QQNICYRP0PX4KAAQMRYXQEIMAOOS244YUC3MAKO',
  client_secret: process.env.CLIENT_SECRET || 'X3TNWYIP2ZK50QKONMJZEQYRCHFVFXAIHK205OLFSEFRTTKE',
  version_date: process.env.VERSION_DATE || 20181110,
  mapKey: process.env.MAP_KEY || 'AIzaSyDJp19x3o9MIWe-Yd3hvFOjLIQcAkm28PA'
}
