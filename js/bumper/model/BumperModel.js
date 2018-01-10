// Copyright 2018, University of Colorado Boulder

/**
 * @author Jonathan Olson
 */
define( function( require ) {
  'use strict';

  // modules
  var inherit = require( 'PHET_CORE/inherit' );
  var bumper = require( 'BUMPER/bumper' );

  /**
   * @constructor
   */
  function BumperModel() {
    //TODO
  }

  bumper.register( 'BumperModel', BumperModel );

  return inherit( Object, BumperModel, {

    // @public resets the model
    reset: function() {
      //TODO reset things here
    },

    //TODO Called by the animation loop. Optional, so if your model has no animation, please delete this.
    // @public
    step: function( dt ) {
      //TODO Handle model animation here.
    }
  } );
} );