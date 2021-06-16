[object Promise]

/**
 * Main entry point for the sim.
 *
 * @author Jonathan Olson
 */

import ChainsScreen from '../../chains/js/chains/ChainsScreen.js';
import Sim from '../../joist/js/Sim.js';
import simLauncher from '../../joist/js/simLauncher.js';
import Tandem from '../../tandem/js/Tandem.js';
import bumperStrings from './bumperStrings.js';

const bumperTitleString = bumperStrings.bumper.title;

const tandem = Tandem.ROOT;

const simOptions = {
  credits: {
    softwareDevelopment: 'PhET Interactive Simulations'
  }
};

simLauncher.launch( () => {
  const sim = new Sim( bumperTitleString, [ new ChainsScreen( tandem.createTandem( 'chainsScreen' ) ) ], simOptions );
  sim.start();
} );