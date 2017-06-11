/* eslint import/no-extraneous-dependencies: ['error', {'devDependencies': true}] */
const expect = require('chai').expect;

const jsonPayload = {
  crs: {
    type: 'link',
    properties: {
      href: 'http://spatialreference.org/ref/epsg/4326/ogcwkt/',
      type: 'ogcwkt',
    },
  },
  words: 'index.home.raft',
  bounds: {
    southwest: {
      lng: -0.203607,
      lat: 51.521238,
    },
    northeast: {
      lng: -0.203564,
      lat: 51.521265,
    },
  },
  geometry: {
    lng: -0.203586,
    lat: 51.521251,
  },
  language: 'en',
  map: 'http://w3w.co/index.home.raft',
  status: {
    status: 200,
    reason: 'OK',
  },
  thanks: 'Thanks from all of us at index.home.raft for using a what3words API',
};
const geoJsonPayload = {
  crs: {
    type: 'link',
    properties: {
      href: 'http://spatialreference.org/ref/epsg/4326/ogcwkt/',
      type: 'ogcwkt',
    },
  },
  bbox: [-0.203607, 51.521238, -0.203564, 51.521265],
  geometry: {
    coordinates: [-0.203586, 51.521251],
    type: 'Point',
  },
  type: 'Feature',
  properties: {
    words: 'index.home.raft',
    language: 'en',
    map: 'http://w3w.co/index.home.raft',
    status: {
      status: 200,
      reason: 'OK',
    },
    thanks: 'Thanks from all of us at index.home.raft for using a what3words API',
  },
};

module.exports = {
  validateJSONPayload: (data) => {
    expect(data).to.deep.equal(jsonPayload);
  },
  validateGeoJSONPayload: (data) => {
    expect(data).to.deep.equal(geoJsonPayload);
  },
};
