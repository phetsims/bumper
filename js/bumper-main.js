// Copyright 2018, University of Colorado Boulder

/**
 * Main entry point for the sim.
 *
 * @author Jonathan Olson
 */
define( require => {
  'use strict';

  // modules
  const ChainsScreen = require( 'CHAINS/chains/ChainsScreen' );
  const Sim = require( 'JOIST/Sim' );
  const SimLauncher = require( 'JOIST/SimLauncher' );
  const Tandem = require( 'TANDEM/Tandem' );

  // strings
  const bumperTitleString = require( 'string!BUMPER/bumper.title' );

  var tandem = Tandem.rootTandem;

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
    var sim = new Sim( bumperTitleString, [ new ChainsScreen( tandem.createTandem( 'chainsScreen' ) ) ], simOptions );
    sim.start();
  } );
} );