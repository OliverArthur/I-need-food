import config from '@/config'

/**
 * @class Services
 *
 */
class Services {
  /**
   * @static getUserGeolocation
   * @description get the current user geolocation
   *
   * @returns { Array }
   * @memberof Services
   */
  static async getUserGeolocation () {
    try {
      const position = await new Promise(resolve => navigator.geolocation.getCurrentPosition(location => {
        resolve([location.coords.latitude, location.coords.longitude])
      }, null, { enableHighAccuracy: true }))
      let [lat, lng] = position
      const payload = { lat, lng, success: true }
      return payload
    } catch (err) {
      console.error(err.message)
    }
  }

  /**
   * @static getAllVenues
   * @description service to give all the venues according the geolocation
   *
   * @memberof Services
   * @returns { object }
   */
  static async getAllVenues (location) {
    try {
      const url = `${config.base_uri}/explore?ll=${location.lat},${location.lng}&categoryId=4d4b7105d754a06374d81259&client_id=${config.client_id}&client_secret=${config.client_secret}&v=${config.version_date}`
      const response = await fetch(url)
      const body = await response.json()
      return body
    } catch (err) {
      console.error(err.message)
    }
  }
  /**
   *
   *
   * @static getVenuePhoto
   * @param {*} id
   * @memberof Services
   * @returns { object }
   */
  static async getVenue (id) {
    try {
      const url = `${config.base_uri}/${id}?client_id=${config.client_id}&client_secret=${config.client_secret}&v=${config.version_date}`
      const response = await fetch(url)
      const body = await response.json()
      return body
    } catch (err) {
      console.err(err.message)
    }
  }
}

export default Services
