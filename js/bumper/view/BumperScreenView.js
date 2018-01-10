// Copyright 2018, University of Colorado Boulder

/**
 * @author Jonathan Olson
 */
define( function( require ) {
  'use strict';

  // modules
  var inherit = require( 'PHET_CORE/inherit' );
  var ResetAllButton = require( 'SCENERY_PHET/buttons/ResetAllButton' );
  var ScreenView = require( 'JOIST/ScreenView' );
  var bumper = require( 'BUMPER/bumper' );

  /**
   * @param {BumperModel} bumperModel
   * @constructor
   */
  function BumperScreenView( bumperModel ) {

    ScreenView.call( this );

    // Reset All button
    var resetAllButton = new ResetAllButton( {
      listener: function() {
        bumperModel.reset();
      },
      right:  this.layoutBounds.maxX - 10,
      bottom: this.layoutBounds.maxY - 10
    } );
    this.addChild( resetAllButton );
  }

  bumper.register( 'BumperScreenView', BumperScreenView );

  return inherit( ScreenView, BumperScreenView, {

    //TODO Called by the animation loop. Optional, so if your view has no animation, please delete this.
    // @public
    step: function( dt ) {
      //TODO Handle view animation here.
    }
  } );
} );