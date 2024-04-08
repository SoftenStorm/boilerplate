// Auto[Generating:V1]--->
// PLEASE DO NOT MODIFY BECAUSE YOUR CHANGES MAY BE LOST.

import {Project, DeclarationHelper} from './helpers/DeclarationHelper';
import {HTMLHelper} from './helpers/HTMLHelper';
import {EventHelper} from './helpers/EventHelper';

import React from 'react';
import {createRoot} from 'react-dom/client';

const _React = React;
declare let window: any;
declare let DataManipulationHelper: any;

let expandingPlaceholders = Array.from(document.querySelectorAll('[internal-fsb-init-class]'));
for (let expandingPlaceholder of expandingPlaceholders) {
  let forward = JSON.parse((expandingPlaceholder.getAttribute('internal-fsb-init-forward') || '{}').replace(/'/g, '"'));
  createRoot(expandingPlaceholder).render(React.createElement(DeclarationHelper.get(expandingPlaceholder.getAttribute('internal-fsb-init-class')), {forward: forward, data: window.data || null}, null));
  if (expandingPlaceholder.firstElementChild) {
    expandingPlaceholder.parentNode.insertBefore(expandingPlaceholder.firstElementChild, expandingPlaceholder);
    expandingPlaceholder.parentNode.removeChild(expandingPlaceholder);
  }  
}

window.internalFsbSubmit = (guid: string, notation: string, event, callback: any) => {
  DataManipulationHelper.request(guid, notation, event, callback);
}

window.internalFsbOpen = (initClass: string, data: any) => {
  let container = document.createElement('div');
  createRoot(container).render(React.createElement(DeclarationHelper.get(initClass), {data: data || window.data}, null));
  document.getElementsByClassName('internal-fsb-begin')[0].appendChild(container.firstElementChild);
}

// <--- Auto[Generating:V1]
// PLEASE DO NOT MODIFY BECAUSE YOUR CHANGES MAY BE LOST.