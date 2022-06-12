
export interface CssProperty {
  inherited: boolean,
  links: {
    [source: string]: string[]
  }
}

export interface CssPropertyMap {
  [name: string]: CssProperty
}

/**
 * Sourced from https://www.w3.org/TR/CSS/#properties
 */

export const cssProperties: CssPropertyMap = {
  'align-content': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-align-3/#propdef-align-content', 'https://drafts.csswg.org/css-flexbox-1/#propdef-align-content' ]
    }
  },

  'align-items:': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-align-3/#propdef-align-items', 'https://drafts.csswg.org/css-flexbox-1/#propdef-align-items' ]
    }
  },

  'align-self:': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-align-3/#propdef-align-self', 'https://drafts.csswg.org/css-flexbox-1/#propdef-align-self' ]
    }
  },

  'all:': {
    inherited: false, // This property has unique inheritance behavior and should be handled as a special case by applications.
    links: {
      w3c: [ 'https://drafts.csswg.org/css-cascade-4/#propdef-all' ]
    }
  },

  'animation:': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-animations-1/#propdef-animation' ]
    }
  },

  'animation-delay:': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-animations-1/#propdef-animation-delay' ]
    }
  },

  'animation-direction:': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-animations-1/#propdef-animation-direction' ]
    }
  },

  'animation-duration:': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-animations-1/#propdef-animation-duration' ]
    }
  },

  'animation-fill-mode:': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-animations-1/#propdef-animation-fill-mode' ]
    }
  },

  'animation-iteration-count:': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-animations-1/#propdef-animation-iteration-count' ]
    }
  },

  'animation-name:': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-animations-1/#propdef-animation-name' ]
    }
  },

  'animation-play-state:': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-animations-1/#propdef-animation-play-state' ]
    }
  },

  'animation-timing-function:': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-animations-1/#propdef-animation-timing-function' ]
    }
  },

  'azimuth:': {
    inherited: true,
    links: {
      w3c: [ 'https://www.w3.org/TR/CSS2/aural.html#propdef-azimuth' ]
    }
  },

  'background:': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-backgrounds-3/#propdef-background' ]
    }
  },

  'background-attachment': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-backgrounds-3/#propdef-background-attachment' ]
    }
  },

  'background-blend-mode': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.fxtf.org/compositing-1/#propdef-background-blend-mode' ]
    }
  },

  'background-clip': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-backgrounds-3/#propdef-background-clip' ]
    }
  },

  'background-color': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-backgrounds-3/#propdef-background-color' ]
    }
  },

  'background-image': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-backgrounds-3/#propdef-background-image' ]
    }
  },

  'background-origin': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-backgrounds-3/#propdef-background-origin' ]
    }
  },

  'background-position': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-backgrounds-3/#propdef-background-position' ]
    }
  },

  'background-repeat': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-backgrounds-3/#propdef-background-repeat' ]
    }
  },

  'background-size': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-backgrounds-3/#propdef-background-size' ]
    }
  },

  'border': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-backgrounds-3/#propdef-border' ]
    }
  },

  'border-bottom': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-backgrounds-3/#propdef-border-bottom' ]
    }
  },

  'border-bottom-color': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-backgrounds-3/#propdef-border-bottom-color' ]
    }
  },

  'border-bottom-left-radius': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-backgrounds-3/#propdef-border-bottom-left-radius' ]
    }
  },

  'border-bottom-right-radius': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-backgrounds-3/#propdef-border-bottom-right-radius' ]
    }
  },

  'border-bottom-style': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-backgrounds-3/#propdef-border-bottom-style' ]
    }
  },

  'border-bottom-width': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-backgrounds-3/#propdef-border-bottom-width' ]
    }
  },

  'border-collapse': {
    inherited: true,
    links: {
      w3c: [ 'https://drafts.csswg.org/css2/#propdef-border-collapse' ]
    }
  },

  'border-color': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-backgrounds-3/#propdef-border-color' ]
    }
  },

  'border-image': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-backgrounds-3/#propdef-border-image' ]
    }
  },

  'border-image-outset': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-backgrounds-3/#propdef-border-image-outset' ]
    }
  },

  'border-image-repeat': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-backgrounds-3/#propdef-border-image-repeat' ]
    }
  },

  'border-image-slice': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-backgrounds-3/#propdef-border-image-slice' ]
    }
  },

  'border-image-source': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-backgrounds-3/#propdef-border-image-source' ]
    }
  },

  'border-image-width': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-backgrounds-3/#propdef-border-image-width' ]
    }
  },

  'border-left': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-backgrounds-3/#propdef-border-left' ]
    }
  },

  'border-left-color': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-backgrounds-3/#propdef-border-left-color' ]
    }
  },

  'border-left-style': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-backgrounds-3/#propdef-border-left-style' ]
    }
  },

  'border-left-width': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-backgrounds-3/#propdef-border-left-width' ]
    }
  },

  'border-radius': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-backgrounds-3/#propdef-border-radius' ]
    }
  },

  'border-right': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-backgrounds-3/#propdef-border-right' ]
    }
  },

  'border-right-color': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-backgrounds-3/#propdef-border-right-color' ]
    }
  },

  'border-right-style': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-backgrounds-3/#propdef-border-right-style' ]
    }
  },

  'border-right-width': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-backgrounds-3/#propdef-border-right-width' ]
    }
  },

  'border-spacing': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css2/#propdef-border-spacing' ]
    }
  },

  'border-style': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-backgrounds-3/#propdef-border-style' ]
    }
  },

  'border-top': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-backgrounds-3/#propdef-border-top' ]
    }
  },

  'border-top-color': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-backgrounds-3/#propdef-border-top-color' ]
    }
  },

  'border-top-left-radius': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-backgrounds-3/#propdef-border-top-left-radius' ]
    }
  },

  'border-top-right-radius': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-backgrounds-3/#propdef-border-top-right-radius' ]
    }
  },

  'border-top-style': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-backgrounds-3/#propdef-border-top-style' ]
    }
  },

  'border-top-width': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-backgrounds-3/#propdef-border-top-width' ]
    }
  },

  'border-width': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-backgrounds-3/#propdef-border-width' ]
    }
  },

  'bottom': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css2/#propdef-bottom' ]
    }
  },

  'box-decoration-break': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-break-3/#propdef-box-decoration-break' ]
    }
  },

  'box-shadow': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-backgrounds-3/#propdef-box-shadow' ]
    }
  },

  'box-sizing': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-ui-3/#propdef-box-sizing' ]
    }
  },

  'break-after': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-break-3/#propdef-break-after' ]
    }
  },

  'break-before': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-break-3/#propdef-break-before' ]
    }
  },

  'break-inside': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-break-3/#propdef-break-inside' ]
    }
  },

  'caption-side': {
    inherited: true,
    links: {
      w3c: [ 'https://drafts.csswg.org/css2/#propdef-caption-side' ]
    }
  },

  'caret-color': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-ui-3/#propdef-caret-color' ]
    }
  },

  'clear': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css2/#propdef-clear' ]
    }
  },

  'clip': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.fxtf.org/css-masking-1/#propdef-clip' ]
    }
  },

  'clip-path': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.fxtf.org/css-masking-1/#propdef-clip-path' ]
    }
  },

  'clip-rule': {
    inherited: true,
    links: {
      w3c: [ 'https://drafts.fxtf.org/css-masking-1/#propdef-clip-rule' ]
    }
  },

  'color': {
    inherited: true,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-color-3/#color0', 'https://drafts.csswg.org/css-color-3/#color01' ]
    }
  },

  'color-interpolation-filters': {
    inherited: true,
    links: {
      w3c: [ 'https://drafts.fxtf.org/filter-effects-1/#propdef-color-interpolation-filters' ]
    }
  },

  'column-count': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-multicol-1/#propdef-column-count' ]
    }
  },

  'column-fill': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-multicol-1/#propdef-column-fill' ]
    }
  },

  'column-gap': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-align-3/#propdef-column-gap' ]
    }
  },

  'column-rule': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-multicol-1/#propdef-column-rule' ]
    }
  },

  'column-rule-color': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-multicol-1/#propdef-column-rule-color' ]
    }
  },

  'column-rule-style': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-multicol-1/#propdef-column-rule-style' ]
    }
  },

  'column-rule-width': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-multicol-1/#propdef-column-rule-width' ]
    }
  },

  'columns': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-multicol-1/#propdef-columns' ]
    }
  },

  'column-span': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-multicol-1/#propdef-column-span' ]
    }
  },

  'column-width': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-multicol-1/#propdef-column-width' ]
    }
  },

  'contain': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-contain-1/#propdef-contain' ]
    }
  },

  'content': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css2/#propdef-content' ]
    }
  },

  'counter-increment': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css2/#propdef-counter-increment' ]
    }
  },

  'counter-reset': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css2/#propdef-counter-reset' ]
    }
  },

  'cue': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-speech-1/#propdef-cue', 'https://www.w3.org/TR/CSS2/aural.html#propdef-cue' ]
    }
  },

  'cue-after': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-speech-1/#propdef-cue-after', 'https://www.w3.org/TR/CSS2/aural.html#propdef-cue-after' ]
    }
  },

  'cue-before': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-speech-1/#propdef-cue-before', 'https://www.w3.org/TR/CSS2/aural.html#propdef-cue-before' ]
    }
  },

  'cursor': {
    inherited: true,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-ui-3/#propdef-cursor' ]
    }
  },

  'direction': {
    inherited: true,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-writing-modes-4/#propdef-direction' ]
    }
  },

  'display': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-display-3/#propdef-display' ]
    }
  },

  'elevation': {
    inherited: true,
    links: {
      w3c: [ 'https://www.w3.org/TR/CSS2/aural.html#propdef-elevation' ]
    }
  },

  /**
   *h
   */
  'empty-cells': {
    inherited: true,
    links: {
      w3c: [ 'ttps://drafts.csswg.org/css2/#propdef-empty-cells' ]
    }
  },

  'filter': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.fxtf.org/filter-effects-1/#propdef-filter' ]
    }
  },

  'flex': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-flexbox-1/#propdef-flex' ]
    }
  },

  'flex-basis': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-flexbox-1/#propdef-flex-basis' ]
    }
  },

  'flex-direction': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-flexbox-1/#propdef-flex-direction' ]
    }
  },

  'flex-flow': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-flexbox-1/#propdef-flex-flow' ]
    }
  },

  'flex-grow': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-flexbox-1/#propdef-flex-grow' ]
    }
  },

  'flex-shrink': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-flexbox-1/#propdef-flex-shrink' ]
    }
  },

  'flex-wrap': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-flexbox-1/#propdef-flex-wrap' ]
    }
  },

  'float': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css2/#propdef-float' ]
    }
  },

  'flood-color': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.fxtf.org/filter-effects-1/#propdef-flood-color' ]
    }
  },

  'flood-opacity': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.fxtf.org/filter-effects-1/#propdef-flood-opacity' ]
    }
  },

  'font': {
    inherited: true,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-fonts-3/#propdef-font' ]
    }
  },

  'font-family': {
    inherited: true,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-fonts-3/#propdef-font-family' ]
    }
  },

  'font-feature-settings': {
    inherited: true,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-fonts-3/#propdef-font-feature-settings' ]
    }
  },

  'font-kerning': {
    inherited: true,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-fonts-3/#propdef-font-kerning' ]
    }
  },

  /**
   *h
   */
  'font-size': {
    inherited: true,
    links: {
      w3c: [ 'ttps://drafts.csswg.org/css-fonts-3/#propdef-font-size' ]
    }
  },

  'font-size-adjust': {
    inherited: true,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-fonts-3/#propdef-font-size-adjust' ]
    }
  },

  'font-stretch': {
    inherited: true,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-fonts-3/#propdef-font-stretch' ]
    }
  },

  'font-style': {
    inherited: true,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-fonts-3/#propdef-font-style' ]
    }
  },

  'font-synthesis': {
    inherited: true,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-fonts-3/#propdef-font-synthesis' ]
    }
  },

  'font-variant': {
    inherited: true,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-fonts-3/#propdef-font-variant' ]
    }
  },

  'font-variant-caps': {
    inherited: true,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-fonts-3/#propdef-font-variant-caps' ]
    }
  },

  'font-variant-east-asian': {
    inherited: true,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-fonts-3/#propdef-font-variant-east-asian' ]
    }
  },

  'font-variant-ligatures': {
    inherited: true,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-fonts-3/#propdef-font-variant-ligatures' ]
    }
  },

  'font-variant-numeric': {
    inherited: true,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-fonts-3/#propdef-font-variant-numeric' ]
    }
  },

  'font-variant-position': {
    inherited: true,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-fonts-3/#propdef-font-variant-position' ]
    }
  },

  'font-weight': {
    inherited: true,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-fonts-3/#propdef-font-weight' ]
    }
  },

  'gap': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-align-3/#propdef-gap' ]
    }
  },

  'grid': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-grid-1/#propdef-grid' ]
    }
  },

  'grid-area': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-grid-1/#propdef-grid-area' ]
    }
  },

  'grid-auto-columns': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-grid-1/#propdef-grid-auto-columns' ]
    }
  },

  'grid-auto-flow': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-grid-1/#propdef-grid-auto-flow' ]
    }
  },

  'grid-auto-rows': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-grid-1/#propdef-grid-auto-rows' ]
    }
  },

  'grid-column': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-grid-1/#propdef-grid-column' ]
    }
  },

  'grid-column-end': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-grid-1/#propdef-grid-column-end' ]
    }
  },

  'grid-column-gap': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-align-3/#propdef-grid-column-gap' ]
    }
  },

  'grid-column-start': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-grid-1/#propdef-grid-column-start' ]
    }
  },

  'grid-gap': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-align-3/#propdef-grid-gap' ]
    }
  },

  'grid-row': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-grid-1/#propdef-grid-row' ]
    }
  },

  'grid-row-end': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-grid-1/#propdef-grid-row-end' ]
    }
  },

  'grid-row-gap': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-align-3/#propdef-grid-row-gap' ]
    }
  },

  'grid-row-start': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-grid-1/#propdef-grid-row-start' ]
    }
  },

  'grid-template': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-grid-1/#propdef-grid-template' ]
    }
  },

  'grid-template-areas': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-grid-1/#propdef-grid-template-areas' ]
    }
  },

  'grid-template-columns': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-grid-1/#propdef-grid-template-columns' ]
    }
  },

  'grid-template-rows': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-grid-1/#propdef-grid-template-rows' ]
    }
  },

  'hanging-punctuation': {
    inherited: true,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-text-3/#propdef-hanging-punctuation' ]
    }
  },

  'height': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css2/#propdef-height' ]
    }
  },

  'hyphens': {
    inherited: true,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-text-3/#propdef-hyphens' ]
    }
  },

  'image-orientation': {
    inherited: true,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-images-3/#propdef-image-orientation' ]
    }
  },

  'image-rendering': {
    inherited: true,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-images-3/#propdef-image-rendering' ]
    }
  },

  'isolation': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.fxtf.org/compositing-1/#propdef-isolation' ]
    }
  },

  'justify-content': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-align-3/#propdef-justify-content', 'https://drafts.csswg.org/css-flexbox-1/#propdef-justify-content' ]
    }
  },

  'justify-items': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-align-3/#propdef-justify-items' ]
    }
  },

  'justify-self': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-align-3/#propdef-justify-self' ]
    }
  },

  'left': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css2/#propdef-left' ]
    }
  },

  'letter-spacing': {
    inherited: true,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-text-3/#propdef-letter-spacing' ]
    }
  },

  'lighting-color': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.fxtf.org/filter-effects-1/#propdef-lighting-color' ]
    }
  },

  'line-break': {
    inherited: true,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-text-3/#propdef-line-break' ]
    }
  },

  'line-height': {
    inherited: true,
    links: {
      w3c: [ 'https://drafts.csswg.org/css2/#propdef-line-height' ]
    }
  },

  'list-style': {
    inherited: true,
    links: {
      w3c: [ 'https://drafts.csswg.org/css2/#propdef-list-style' ]
    }
  },

  'list-style-image': {
    inherited: true,
    links: {
      w3c: [ 'https://drafts.csswg.org/css2/#propdef-list-style-image' ]
    }
  },

  'list-style-position': {
    inherited: true,
    links: {
      w3c: [ 'https://drafts.csswg.org/css2/#propdef-list-style-position' ]
    }
  },

  'list-style-type': {
    inherited: true,
    links: {
      w3c: [ 'https://drafts.csswg.org/css2/#propdef-list-style-type' ]
    }
  },

  'margin': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css2/#propdef-margin' ]
    }
  },

  'margin-bottom': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css2/#propdef-margin-bottom' ]
    }
  },

  'margin-left': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css2/#propdef-margin-left' ]
    }
  },

  'margin-right': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css2/#propdef-margin-right' ]
    }
  },

  'margin-top': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css2/#propdef-margin-top' ]
    }
  },

  'mask': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.fxtf.org/css-masking-1/#propdef-mask' ]
    }
  },

  'mask-border': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.fxtf.org/css-masking-1/#propdef-mask-border' ]
    }
  },

  'mask-border-mode': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.fxtf.org/css-masking-1/#propdef-mask-border-mode' ]
    }
  },

  'mask-border-outset': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.fxtf.org/css-masking-1/#propdef-mask-border-outset' ]
    }
  },

  'mask-border-repeat': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.fxtf.org/css-masking-1/#propdef-mask-border-repeat' ]
    }
  },

  'mask-border-slice': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.fxtf.org/css-masking-1/#propdef-mask-border-slice' ]
    }
  },

  'mask-border-source': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.fxtf.org/css-masking-1/#propdef-mask-border-source' ]
    }
  },

  'mask-border-width': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.fxtf.org/css-masking-1/#propdef-mask-border-width' ]
    }
  },

  'mask-clip': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.fxtf.org/css-masking-1/#propdef-mask-clip' ]
    }
  },

  'mask-composite': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.fxtf.org/css-masking-1/#propdef-mask-composite' ]
    }
  },

  'mask-image': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.fxtf.org/css-masking-1/#propdef-mask-image' ]
    }
  },

  'mask-mode': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.fxtf.org/css-masking-1/#propdef-mask-mode' ]
    }
  },

  'mask-origin': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.fxtf.org/css-masking-1/#propdef-mask-origin' ]
    }
  },

  'mask-position': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.fxtf.org/css-masking-1/#propdef-mask-position' ]
    }
  },

  'mask-repeat': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.fxtf.org/css-masking-1/#propdef-mask-repeat' ]
    }
  },

  'mask-size': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.fxtf.org/css-masking-1/#propdef-mask-size' ]
    }
  },

  'mask-type': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.fxtf.org/css-masking-1/#propdef-mask-type' ]
    }
  },

  'max-height': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css2/#propdef-max-height' ]
    }
  },

  'max-width': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css2/#propdef-max-width' ]
    }
  },

  'min-height': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css2/#propdef-min-height' ]
    }
  },

  'min-width': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css2/#propdef-min-width' ]
    }
  },

  'mix-blend-mode': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.fxtf.org/compositing-1/#propdef-mix-blend-mode' ]
    }
  },

  'object-fit': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-images-3/#propdef-object-fit' ]
    }
  },

  'object-position': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-images-3/#propdef-object-position' ]
    }
  },

  'opacity': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-color-3/#opacity' ]
    }
  },

  'order': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-display-3/#propdef-order', 'https://www.w3.org/TR/css-flexbox-1/#propdef-order' ]
    }
  },

  'orphans': {
    inherited: true,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-break-3/#propdef-orphans' ]
    }
  },

  'outline': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-ui-3/#propdef-outline' ]
    }
  },

  'outline-color': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-ui-3/#propdef-outline-color' ]
    }
  },

  'outline-offset': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-ui-3/#propdef-outline-offset' ]
    }
  },

  'outline-style': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-ui-3/#propdef-outline-style' ]
    }
  },

  'outline-width': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-ui-3/#propdef-outline-width' ]
    }
  },

  'overflow': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css2/#propdef-overflow' ]
    }
  },

  'overflow-wrap': {
    inherited: true,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-text-3/#propdef-overflow-wrap' ]
    }
  },

  'padding': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css2/#propdef-padding' ]
    }
  },

  'padding-bottom': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css2/#propdef-padding-bottom' ]
    }
  },

  'padding-left': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css2/#propdef-padding-left' ]
    }
  },

  'padding-right': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css2/#propdef-padding-right' ]
    }
  },

  'padding-top': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css2/#propdef-padding-top' ]
    }
  },

  'page-break-after': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css2/#propdef-page-break-after' ]
    }
  },

  'page-break-before': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css2/#propdef-page-break-before' ]
    }
  },

  'page-break-inside': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css2/#propdef-page-break-inside' ]
    }
  },

  'pause': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-speech-1/#propdef-pause', 'https://www.w3.org/TR/CSS2/aural.html#propdef-pause' ]
    }
  },

  'pause-after': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-speech-1/#propdef-pause-after', 'https://www.w3.org/TR/CSS2/aural.html#propdef-pause-after' ]
    }
  },

  'pause-before': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-speech-1/#propdef-pause-before', 'https://www.w3.org/TR/CSS2/aural.html#propdef-pause-before' ]
    }
  },

  'pitch': {
    inherited: true,
    links: {
      w3c: [ 'https://www.w3.org/TR/CSS2/aural.html#propdef-pitch' ]
    }
  },

  'pitch-range': {
    inherited: true,
    links: {
      w3c: [ 'https://www.w3.org/TR/CSS2/aural.html#propdef-pitch-range' ]
    }
  },

  'place-content': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-align-3/#propdef-place-content' ]
    }
  },

  'place-items': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-align-3/#propdef-place-items' ]
    }
  },

  'place-self': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-align-3/#propdef-place-self' ]
    }
  },

  'play-during': {
    inherited: false,
    links: {
      w3c: [ 'https://www.w3.org/TR/CSS2/aural.html#propdef-play-during' ]
    }
  },

  'position': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css2/#propdef-position' ]
    }
  },

  'quotes': {
    inherited: true,
    links: {
      w3c: [ 'https://drafts.csswg.org/css2/#propdef-quotes' ]
    }
  },

  'resize': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-ui-3/#propdef-resize' ]
    }
  },

  'rest': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-speech-1/#propdef-rest' ]
    }
  },

  'rest-after': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-speech-1/#propdef-rest-after' ]
    }
  },

  'rest-before': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-speech-1/#propdef-rest-before' ]
    }
  },

  'richness': {
    inherited: true,
    links: {
      w3c: [ 'https://www.w3.org/TR/CSS2/aural.html#propdef-richness' ]
    }
  },

  'right': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css2/#propdef-right' ]
    }
  },

  'row-gap': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-align-3/#propdef-row-gap' ]
    }
  },

  'scroll-margin': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-scroll-snap-1/#propdef-scroll-margin' ]
    }
  },

  'scroll-margin-block': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-scroll-snap-1/#propdef-scroll-margin-block' ]
    }
  },

  'scroll-margin-block-end': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-scroll-snap-1/#propdef-scroll-margin-block-end' ]
    }
  },

  'scroll-margin-block-start': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-scroll-snap-1/#propdef-scroll-margin-block-start' ]
    }
  },

  'scroll-margin-bottom': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-scroll-snap-1/#propdef-scroll-margin-bottom' ]
    }
  },

  'scroll-margin-inline': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-scroll-snap-1/#propdef-scroll-margin-inline' ]
    }
  },

  'scroll-margin-inline-end': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-scroll-snap-1/#propdef-scroll-margin-inline-end' ]
    }
  },

  'scroll-margin-inline-start': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-scroll-snap-1/#propdef-scroll-margin-inline-start' ]
    }
  },

  'scroll-margin-left': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-scroll-snap-1/#propdef-scroll-margin-left' ]
    }
  },

  'scroll-margin-right': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-scroll-snap-1/#propdef-scroll-margin-right' ]
    }
  },

  'scroll-margin-top': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-scroll-snap-1/#propdef-scroll-margin-top' ]
    }
  },

  'scroll-padding': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-scroll-snap-1/#propdef-scroll-padding' ]
    }
  },

  'scroll-padding-block': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-scroll-snap-1/#propdef-scroll-padding-block' ]
    }
  },

  'scroll-padding-block-end': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-scroll-snap-1/#propdef-scroll-padding-block-end' ]
    }
  },

  'scroll-padding-block-start': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-scroll-snap-1/#propdef-scroll-padding-block-start' ]
    }
  },

  'scroll-padding-bottom': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-scroll-snap-1/#propdef-scroll-padding-bottom' ]
    }
  },

  'scroll-padding-inline': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-scroll-snap-1/#propdef-scroll-padding-inline' ]
    }
  },

  'scroll-padding-inline-end': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-scroll-snap-1/#propdef-scroll-padding-inline-end' ]
    }
  },

  'scroll-padding-inline-start': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-scroll-snap-1/#propdef-scroll-padding-inline-start' ]
    }
  },

  'scroll-padding-left': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-scroll-snap-1/#propdef-scroll-padding-left' ]
    }
  },

  'scroll-padding-right': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-scroll-snap-1/#propdef-scroll-padding-right' ]
    }
  },

  'scroll-padding-top': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-scroll-snap-1/#propdef-scroll-padding-top' ]
    }
  },

  'scroll-snap-align': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-scroll-snap-1/#propdef-scroll-snap-align' ]
    }
  },

  'scroll-snap-stop': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-scroll-snap-1/#propdef-scroll-snap-stop' ]
    }
  },

  'scroll-snap-type': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-scroll-snap-1/#propdef-scroll-snap-type' ]
    }
  },

  'shape-image-threshold': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-shapes-1/#propdef-shape-image-threshold' ]
    }
  },

  'shape-margin': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-shapes-1/#propdef-shape-margin' ]
    }
  },

  'shape-outside': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-shapes-1/#propdef-shape-outside' ]
    }
  },

  'speak': {
    inherited: true,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-speech-1/#propdef-speak', 'https://www.w3.org/TR/CSS2/aural.html#propdef-speak' ]
    }
  },

  'speak-as': {
    inherited: true,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-speech-1/#propdef-speak-as' ]
    }
  },

  'speak-header': {
    inherited: true,
    links: {
      w3c: [ 'https://www.w3.org/TR/CSS2/aural.html#propdef-speak-header' ]
    }
  },

  'speak-numeral': {
    inherited: true,
    links: {
      w3c: [ 'https://www.w3.org/TR/CSS2/aural.html#propdef-speak-numeral' ]
    }
  },

  'speak-punctuation': {
    inherited: true,
    links: {
      w3c: [ 'https://www.w3.org/TR/CSS2/aural.html#propdef-speak-punctuation' ]
    }
  },

  'speech-rate': {
    inherited: true,
    links: {
      w3c: [ 'https://www.w3.org/TR/CSS2/aural.html#propdef-speech-rate' ]
    }
  },

  'stress': {
    inherited: true,
    links: {
      w3c: [ 'https://www.w3.org/TR/CSS2/aural.html#propdef-stress' ]
    }
  },

  'table-layout': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css2/#propdef-table-layout' ]
    }
  },

  'tab-size': {
    inherited: true,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-text-3/#propdef-tab-size' ]
    }
  },

  'text-align': {
    inherited: true,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-text-3/#propdef-text-align' ]
    }
  },

  'text-align-all': {
    inherited: true,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-text-3/#propdef-text-align-all' ]
    }
  },

  'text-align-last': {
    inherited: true,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-text-3/#propdef-text-align-last' ]
    }
  },

  'text-combine-upright': {
    inherited: true,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-writing-modes-4/#propdef-text-combine-upright' ]
    }
  },

  'text-decoration': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-text-decor-3/#propdef-text-decoration' ]
    }
  },

  'text-decoration-color': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-text-decor-3/#propdef-text-decoration-color' ]
    }
  },

  'text-decoration-line': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-text-decor-3/#propdef-text-decoration-line' ]
    }
  },

  'text-decoration-style': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-text-decor-3/#propdef-text-decoration-style' ]
    }
  },

  'text-emphasis': {
    inherited: true,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-text-decor-3/#propdef-text-emphasis' ]
    }
  },

  'text-emphasis-color': {
    inherited: true,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-text-decor-3/#propdef-text-emphasis-color' ]
    }
  },

  'text-emphasis-position': {
    inherited: true,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-text-decor-3/#propdef-text-emphasis-position' ]
    }
  },

  'text-emphasis-style': {
    inherited: true,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-text-decor-3/#propdef-text-emphasis-style' ]
    }
  },

  'text-indent': {
    inherited: true,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-text-3/#propdef-text-indent' ]
    }
  },

  'text-justify': {
    inherited: true,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-text-3/#propdef-text-justify' ]
    }
  },

  'text-orientation': {
    inherited: true,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-writing-modes-4/#propdef-text-orientation' ]
    }
  },

  'text-overflow': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-ui-3/#propdef-text-overflow' ]
    }
  },

  'text-shadow': {
    inherited: true,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-text-decor-3/#propdef-text-shadow' ]
    }
  },

  'text-transform': {
    inherited: true,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-text-3/#propdef-text-transform' ]
    }
  },

  'text-underline-position': {
    inherited: true,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-text-decor-3/#propdef-text-underline-position' ]
    }
  },

  'top': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css2/#propdef-top' ]
    }
  },

  'transform': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-transforms-1/#propdef-transform' ]
    }
  },

  'transform-box': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-transforms-1/#propdef-transform-box' ]
    }
  },

  'transform-origin': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-transforms-1/#propdef-transform-origin' ]
    }
  },

  'transition': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-transitions-1/#propdef-transition' ]
    }
  },

  'transition-delay': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-transitions-1/#propdef-transition-delay' ]
    }
  },

  'transition-duration': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-transitions-1/#propdef-transition-duration' ]
    }
  },

  'transition-property': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-transitions-1/#propdef-transition-property' ]
    }
  },

  'transition-timing-function': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-transitions-1/#propdef-transition-timing-function' ]
    }
  },

  'unicode-bidi': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-writing-modes-4/#propdef-unicode-bidi' ]
    }
  },

  'vertical-align': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css2/#propdef-vertical-align' ]
    }
  },

  'visibility': {
    inherited: true,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-display-3/#propdef-visibility' ]
    }
  },

  'voice-balance': {
    inherited: true,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-speech-1/#propdef-voice-balance' ]
    }
  },

  'voice-duration': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-speech-1/#propdef-voice-duration' ]
    }
  },

  'voice-family': {
    inherited: true,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-speech-1/#propdef-voice-family', 'https://www.w3.org/TR/CSS2/aural.html#propdef-voice-family' ]
    }
  },

  'voice-pitch': {
    inherited: true,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-speech-1/#propdef-voice-pitch' ]
    }
  },

  'voice-range': {
    inherited: true,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-speech-1/#propdef-voice-range' ]
    }
  },

  'voice-rate': {
    inherited: true,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-speech-1/#propdef-voice-rate' ]
    }
  },

  'voice-stress': {
    inherited: true,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-speech-1/#propdef-voice-stress' ]
    }
  },

  'voice-volume': {
    inherited: true,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-speech-1/#propdef-voice-volume' ]
    }
  },

  'volume': {
    inherited: true,
    links: {
      w3c: [ 'https://www.w3.org/TR/CSS2/aural.html#propdef-volume' ]
    }
  },

  'white-space': {
    inherited: true,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-text-3/#propdef-white-space' ]
    }
  },

  'widows': {
    inherited: true,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-break-3/#propdef-widows' ]
    }
  },

  'width': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css2/#propdef-width' ]
    }
  },

  'will-change': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-will-change-1/#propdef-will-change' ]
    }
  },

  'word-break': {
    inherited: true,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-text-3/#propdef-word-break' ]
    }
  },

  'word-spacing': {
    inherited: true,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-text-3/#propdef-word-spacing' ]
    }
  },

  'word-wrap': {
    inherited: true,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-text-3/#propdef-word-wrap' ]
    }
  },

  'writing-mode': {
    inherited: true,
    links: {
      w3c: [ 'https://drafts.csswg.org/css-writing-modes-4/#propdef-writing-mode' ]
    }
  },

  'z-index': {
    inherited: false,
    links: {
      w3c: [ 'https://drafts.csswg.org/css2/#propdef-z-index' ]
    }
  }
}

export function isKnownCssPropertyName(name:string) {
  return !! cssProperties[name]
}

export function cssPropertyWillInherit(name: string) {
  if (name.indexOf('--') === 0) return true // custom properties
  return cssProperties[name]?.inherited ?? false
}
