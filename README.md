# bedrock-angular-lazy-compile

An [AngularJS][] module that provides a directive that can be used to
delay the compilation of other directives until some specified event occurs.
The main purpose of the directive is to improve your application's start up
time or time to render.

## Quick Examples

```html
<my-directive br-lazy-compile="model.compileWhenTruthy"></my-directive>
```

```html
<div br-lazy-compile="model.compileWhenTruthy">
  <p>Some text</p>
  <my-wrapped-directive></my-wrapped-directive>
</div>
```

```html
<script type="text/ng-template" id="demo.html">
  <!-- use br-lazy-id to optimize large content -->
  <my-directive
    br-lazy-compile="model.compileWhenTruthy" br-lazy-id="demo.html">
    <div>
      <p>Some text</p>
      <div>Pretend there are a bunch more elements here...</div>
    </div>
  </my-directive>
</script>
```

## Setup

```
bower install bedrock-angular-lazy-compile
```

If you're using [bedrock-angular][], installation of the module followed by
a restart of your [bedrock][] server is sufficient to make the directive
available to your application.

To manually add **bedrock-angular-lazy-compile** as a dependency:

```js
angular.module('myapp', ['bedrock.lazyCompile']);
```

## How It Works

A `br-lazy-compile` directive can be used to modify or wrap any HTML elements
that may contain directives in order to delay their compilation.

When a `br-lazy-compile` directive is compiled, it saves a reference to the
contents of the directive and then removes it from the DOM. At link time, a
one-time binding is established that watches the expression associated with the
`br-lazy-compile` property on the HTML for the directive. Once that expression
evaluates to something truthy, the directive will be compiled, which will
insert the contents back into the DOM, remove any `br-lazy-*` properties,
recompile the element, and link it with the appropriate scope.

An optional `br-lazy-id` property may be used to optimize the amount of memory
used to store uncompiled contents. If your application uses a
`br-lazy-compile` directive to modify or wrap the same (**verbatim**) HTML in
more than one place (likely with the use of templates), you can avoid double
storing the HTML contents by providing a unique ID for that particular HTML via
`br-lazy-id`.


[bedrock]: https://github.com/digitalbazaar/bedrock
[bedrock-angular]: https://github.com/digitalbazaar/bedrock-angular
[bower]: http://bower.io/
[AngularJS]: https://github.com/angular/angular.js
