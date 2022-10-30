// @ts-check

/**
 * @typedef Route
 * @property {RegExp} url
 * @property {'GET' |'POST' } method
 * @property {()=>Promise<APIResponse>} callback
 */

/** @type {Route []} */
const routes = [
  {
    url: /^\/posts$/,
    method: 'GET',
    callback: async () => ({
      statusCode: 200,
      body: {},
    }),
  },
  {
    url: /^\/posts$/,
    method: 'POST',
    callback: async () => ({
      statusCode: 200,
      body: {},
    }),
  },
]

module.exports = {
  routes,
}
