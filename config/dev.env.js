'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_KEY: '"v3srs6i1veetv3b2dolta9shrmttl72vnfzm220z"',
  GOOGLE_MAP_API_KEY: '"AIzaSyDXBj5FeJ0McdlEbsJNGSeBE5sJlDVhtc4"'
})
