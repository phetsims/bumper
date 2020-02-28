// Copyright 2018-2020, University of Colorado Boulder

/**
 * Main entry point for the sim.
 *
 * @author Jonathan Olson
 */

import ChainsScreen from '../../chains/js/chains/ChainsScreen.js';
import Sim from '../../joist/js/Sim.js';
import SimLauncher from '../../joist/js/SimLauncher.js';
import Tandem from '../../tandem/js/Tandem.js';
import bumperStrings from './bumper-strings.js';

const bumperTitleString = bumperStrings.bumper.title;

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