# css-property-meta

While working on tooling that involves introspecting large amounts of HTML and CSS I needed a way to determine if a property would inherit. I compile this reference by reading through the W3C drafts for each property. In `properties.ts` a dictionary of CSS properties can be found with some associated meta data. Here's an example of the `color` property:

```javascript
'color': {
  inherited: true,
  links: {
    w3c: [ 'https://drafts.csswg.org/css-color-3/#color0', 'https://drafts.csswg.org/css-color-3/#color01' ]
  }
}
```

This is not published on npm, so for the time being I'd recommend simply copy/pasting the file into your project directly.

This may eventually be expanded to include:
* Information on shorthand properties
* Links to MDN articles
* A "related properties" field to allow indexing property types commonly used together.
