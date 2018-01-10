// Copyright 2018, University of Colorado Boulder

/**
 * Main entry point for the sim.
 *
 * @author Jonathan Olson
 */
define( function( require ) {
  'use strict';

  // modules
  var Sim = require( 'JOIST/Sim' );
  var SimLauncher = require( 'JOIST/SimLauncher' );
  var BumperScreen = require( 'BUMPER/bumper/BumperScreen' );

  // strings
  var bumperTitleString = require( 'string!BUMPER/bumper.title' );

  var simOptions = {
    credits: {
      //TODO fill in proper credits, all of these fields are optional, see joist.AboutDialog
      leadDesign: '',
      softwareDevelopment: '',
      team: '',
      qualityAssurance: '',
      graphicArts: '',
      thanks: ''
    }
  };

  SimLauncher.launch( function() {
    var sim = new Sim( bumperTitleString, [ new BumperScreen() ], simOptions );
    sim.start();
  } );
} );