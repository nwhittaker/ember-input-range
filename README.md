# <input-range>

`<input-range>` is an Ember component for HTML range inputs that express a low and high value.
It has no dependencies.

![](https://github.com/trek/ember-input-range/blob/master/example.png)

## Use
`<input-range>` can be used by invoking the component via handlebars:

```handlebars
{{input-range}}
```

Input range is implemented by combining two `<input type="range" />` HTML elements, so
normal browser accessibility behaviors apply.

### Properties

* `disabled`: (boolean; optional). `false`

  Determines whether the `input` elements are disabled or not.
  Behaves according to the [HTML disabled elements spec](https://www.w3.org/TR/html5/disabled-elements.html)

* `values`: (string; required). `"50,205"`

  A string in format of `"<low value>,<high value>"`. `low value` becomes the value of
  the 'lower' slider, `high value`, the value of the 'higher' value.

* `low`: (string, integer; required). `"50"`

  A string or integer, becomes the value of  the 'higher' slider

* `high`: (string, integer; required). `"205"`

  A string or integer, becomes the value of the 'higher' slider

* `min`: (integer; optional). `0`

  The lowest possible value of the 'low' value.

* `max`: (integer; optional). `100`

  The lowest possible value of the 'low' value.

* `step`: (integer; optional). `1`

  Works with the min and max properties to limit the increments at which
  a numeric value can be set. It can be the string any or a positive floating
  point number.

* `color`: (string in any HTML color format, optional). `'transparent'`

  Sets the color the 'track' between the thumb for the `low value` and `high value`.
  Can be any valid HTML color format: `"rgb(12, 200, 5)"`, `"hsl(175, 20%, 40%)"`, `"green"`, etc

### Events

* `oninput(values, event)`

  Called whenever the thumb representing `high value` or `low value` is moved. Will be called with

  * `values`: the new values represented as string in the format `"<low value>,<high value>"` (e.g. `"50,205"`).
  * `event`: the HTML Event object


* `onlowinput(value, event)`

  Called whenever the thumb representing `low value` is moved. Will be called with

  * `value`: the new `low` value represented as string (e.g. `"50"`).
  * `event`: the HTML Event object


* `onhighinput(value, event)`

  Called whenever the thumb representing `high value` is moved. Will be called with

  * `value`: the new `high` value represented as string (e.g. `"120"`).
  * `event`: the HTML Event object


* `onchange(values, event)`

  Called when interaction with thumb representing `high value` or `low value` is complete. Will be called with:

  * `values`: the new values represented as string in the format `"<low value>,<high value>"` (e.g. `"50,205"`).
  * `event`: the HTML Event object


* `onlowchange(value, event)`

  Called when interaction with thumb representing `low value` is complete. Will be called with:

  * `value`: the new `high` value represented as string (e.g. `"120"`).
  * `event`: the HTML Event object


* `onhighchange(value, event)`

  Called when interaction with thumb representing `high value` is complete. Will be called with:

  * `value`: the new `high` value represented as string (e.g. `"120"`).
  * `event`: the HTML Event object



## Development
### Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

###  Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).
