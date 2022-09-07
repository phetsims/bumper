// Copyright 2020-2022, University of Colorado Boulder

/**
 * Auto-generated from modulify, DO NOT manually modify.
 */
/* eslint-disable */
import getStringModule from '../../chipper/js/getStringModule.js';
import TReadOnlyProperty from '../../axon/js/TReadOnlyProperty.js';
import bumper from './bumper.js';

type StringsType = {
  'bumper': {
    'title': string;
    'titleStringProperty': TReadOnlyProperty<string>;
  }
};

const bumperStrings = getStringModule( 'BUMPER' ) as StringsType;

bumper.register( 'bumperStrings', bumperStrings );

export default bumperStrings;
