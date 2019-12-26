// Copyright 2018-2019, University of Colorado Boulder

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

  const tandem = Tandem.ROOT;

  const simOptions = {
    credits: {
      softwareDevelopment: 'PhET Interactive Simulations'
    }
  };

  SimLauncher.launch( function() {
    const sim = new Sim( bumperTitleString, [ new ChainsScreen( tandem.createTandem( 'chainsScreen' ) ) ], simOptions );
    sim.start();
  } );
} );