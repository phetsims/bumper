// Copyright 2018, University of Colorado Boulder

/**
 * @author Jonathan Olson
 */
define( function( require ) {
  'use strict';

  // modules
  var inherit = require( 'PHET_CORE/inherit' );
  var Property = require( 'AXON/Property' );
  var Screen = require( 'JOIST/Screen' );
  var bumper = require( 'BUMPER/bumper' );
  var BumperModel = require( 'BUMPER/bumper/model/BumperModel' );
  var BumperScreenView = require( 'BUMPER/bumper/view/BumperScreenView' );

  /**
   * @constructor
   */
  function BumperScreen() {

    var options = {
      backgroundColorProperty: new Property( 'white' )
    };

    Screen.call( this,
      function() { return new BumperModel(); },
      function( model ) { return new BumperScreenView( model ); },
      options
    );
  }

  bumper.register( 'BumperScreen', BumperScreen );

  return inherit( Screen, BumperScreen );
} );