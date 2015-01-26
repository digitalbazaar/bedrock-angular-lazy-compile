/*!
 * Lazy Compile module.
 *
 * Copyright (c) 2012-2015 Digital Bazaar, Inc. All rights reserved.
 *
 * @author Dave Longley
 */
define([
  'angular',
  './lazy-compile-directive'
], function(angular, lazyCompileDirective) {

'use strict';

var module = angular.module('bedrock.lazyCompile', []);

module.directive(lazyCompileDirective);

return module.name;

});
