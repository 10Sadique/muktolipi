// Based on https://github.com/component/textarea-caret-position

export interface CaretCoordinates {
  top: number;
  left: number;
  height: number;
}

const properties = [
  'direction',
  'boxSizing',
  'width',
  'height',
  'overflowX',
  'overflowY',
  'borderTopWidth',
  'borderRightWidth',
  'borderBottomWidth',
  'borderLeftWidth',
  'borderStyle',
  'paddingTop',
  'paddingRight',
  'paddingBottom',
  'paddingLeft',
  'fontStyle',
  'variant',
  'fontWeight',
  'stretch',
  'fontSize',
  'fontSizeAdjust',
  'lineHeight',
  'fontFamily',
  'textAlign',
  'textTransform',
  'textIndent',
  'textDecoration',
  'letterSpacing',
  'wordSpacing',
  'tabSize',
  'MozTabSize',
] as const;

export function getCaretCoordinates(
  element: HTMLTextAreaElement,
  position: number
): CaretCoordinates {
  // Mirror div
  const div = document.createElement('div');
  div.id = 'input-textarea-caret-position-mirror-div';
  document.body.appendChild(div);

  const style = div.style;
  const computed = window.getComputedStyle(element);

  // Default styles
  style.whiteSpace = 'pre-wrap';
  style.wordWrap = 'break-word';
  style.position = 'absolute';
  style.visibility = 'hidden';

  // Copy font/box styles
  properties.forEach((prop) => {
    // @ts-ignore
    style[prop] = computed[prop];
  });

  // Firefox-specific fixes
  if (computed.getPropertyValue('-moz-appearance') !== 'none') {
    style.width = `${parseInt(computed.width) - 2}px`;
  } else {
    style.width = computed.width;
  }

  div.textContent = element.value.substring(0, position);

  const span = document.createElement('span');
  span.textContent = element.value.substring(position) || '.';
  div.appendChild(span);

  const coordinates: CaretCoordinates = {
    top: span.offsetTop + parseInt(computed.borderTopWidth),
    left: span.offsetLeft + parseInt(computed.borderLeftWidth),
    height: parseInt(computed.lineHeight),
  };

  document.body.removeChild(div);

  return coordinates;
}
