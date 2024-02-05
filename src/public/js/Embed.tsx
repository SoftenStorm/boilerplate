import {DataManipulationHelper} from './helpers/DataManipulationHelper';
import {TestHelper} from './helpers/TestHelper';
import {AnimationHelper} from './helpers/AnimationHelper';
import {EventHelper} from './helpers/EventHelper';
import {HTMLHelper} from './helpers/HTMLHelper';

declare let window: any;

(() => {
  window.DataManipulationHelper = DataManipulationHelper;
  window.TestHelper = TestHelper;
  window.AnimationHelper = AnimationHelper;
  window.EventHelper = EventHelper;
  window.HTMLHelper = HTMLHelper;
})();