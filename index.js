/*!
 * Lazy Compile module.
 *
 * Copyright (c) 2012-2017 Digital Bazaar, Inc. All rights reserved.
 *
 * @author Dave Longley
 */
import angular from 'angular';
import LazyCompileDirective from './lazy-compile-directive.js';

var module = angular.module('bedrock.lazyCompile', []);

module.directive('brLazyCompile', LazyCompileDirective);
