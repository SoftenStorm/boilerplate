// Auto[Generating:V1]--->
// PLEASE DO NOT MODIFY BECAUSE YOUR CHANGES MAY BE LOST.

// Auto[Import]--->
import {Project as $Project, DeclarationHelper} from '../helpers/DeclarationHelper';
import {CodeHelper} from '../helpers/CodeHelper';
import {EventHelper} from '../helpers/EventHelper';
import {HTMLHelper} from '../helpers/HTMLHelper';
import {AnimationHelper} from '../helpers/AnimationHelper';
import {TestHelper} from '../helpers/TestHelper';
import {SourceType, HierarchicalDataTable, HierarchicalDataRow} from '../helpers/DataManipulationHelper';
import {loc as $loc} from '../helpers/LocalizationHelper';
import $Base, {IBaseProps, IBaseState, DefaultBaseProps, DefaultBaseState, Button as $Button} from './Base';
import React from 'react';
import {createRoot} from 'react-dom/client';

// Assign to an another one to override the base class.
// 
const _React = React;
let Base: any = $Base;

// <---Auto[Import]

// Import additional modules here:
//

// Auto[Declare]--->

declare let window: any;
declare let DataManipulationHelper: any;
declare let pug: any;

let Button = $Button;
let Project = $Project;
let loc = $loc;

/*enum SourceType {
  Relational,
  PrioritizedWorker,
  Document,
  VolatileMemory,
  RESTful,
  Dictionary,
  Collection
}*/
// <---Auto[Declare]

// Declare private static variables here:
//

// Auto[Interface]--->
/*interface HierarchicalDataTable {
  source: SourceType;
  group: string;
  rows: HierarchicalDataRow[];
}
interface HierarchicalDataRow {
  keys: {[Identifier: string]: any};
  columns: {[Identifier: string]: any};
  relations: {[Identifier: string]: HierarchicalDataTable};
}*/
interface IAutoBaseProps extends IBaseProps {
  forward: {classes: String, styles: any};
}
interface IAutoBaseState extends IBaseState {
}
// <---Auto[Interface]

// Declare or extend interfaces here:
//
interface IProps extends IAutoBaseProps {
  
}
interface IState extends IAutoBaseState { 
}

let DefaultProps = Object.assign({}, DefaultBaseProps, {
  
});
let DefaultState = Object.assign({}, DefaultBaseState, {
  
});

// Auto[ClassBegin]--->
class FlowLayout_394e246c extends Base {
  state: IState = null;
  protected static defaultProps: IProps = DefaultProps;
  private references = {};
  
  constructor(props) {
    super(props);
    this.state = CodeHelper.clone(DefaultState);
    
    this.initialize();
  }
  
  register() {
    TestHelper.identify();
    function ready(a){"loading"!=document.readyState?a(new Event('ready')):document.addEventListener?document.addEventListener("DOMContentLoaded",a):(document.onreadystatechange=function(e){"complete"==document.readyState&&a(e)})};
        
  }
  // <---Auto[ClassBegin]
// Declare class variables and functions here:
  //
  protected initialize(): void {
    // This is an example of creating a static collection and use in data binding:
    // 
    /* this.state.data = this.state.data || this.props.data || window.data || {};
    const staticCollection: HierarchicalDataTable = {
      source: SourceType.Collection,
      group: 'collection',
      rows: [{
        keys: {...}
        columns: {...}
        relations: {...}
      },
      ...]
    };
    this.state.data['collection'] = staticCollection; */
    //
    // Don't forget to create the mockup's schemata in Explore / Data.
    // 
  }

  protected componentDidMount(): void {
    this.register();
  }

  protected componentWillUnmount(): void {
  }

  protected componentWillReceiveProps(nextProps: any): void {
    // This is an example of creating a dynamic collection and use in data binding:
    // 
    /* this.state.data = this.state.data || this.props.data || window.data || {};
    const dynamicCollection: HierarchicalDataTable = {
      source: SourceType.Collection,
      group: 'collection',
      rows: nextProps.items.map((item) => {
        return {
          keys: {...}
          columns: {...}
          relations: {...}
        };
      })
    };
    this.state.data['collection'] = dynamicCollection; */
    //
    // Don't forget to create the mockup's schemata in Explore / Data.
    // 
  }

  // Providing data array base on dot notation:
  // 
  protected getDataFromNotation(notation: string, inArray: boolean=false, always: boolean=false): any {
    // Redirect the target by overriding the notation value, for example:
    // 
    // notation = `collection[${notation.split(',')[1]}].collection`;
    //

    return super.getDataFromNotation(notation, inArray, always);
  }

  private setCookie(name, value, days) {
    var expires = "";
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
  }

  private getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }

  // Auto[Merging]--->
  protected onButtonClick_bbb5bbc7(event: Event) {
// Handle the event of onButtonClick (Button 1) here:
    // 
    // const target = EventHelper.getCurrentElement(event); /* current invoking element */
    // const element1 = HTMLHelper.getElementById('ID');    /* accessing an element */
    // const control1 = this.references.ID; /* accessing a component */
    // 
    this.setCookie('consent', 'best', 365);
    this.forceUpdate();
  }

  protected onButtonClick_d5430960(event: Event) {
// Handle the event of onButtonClick (Button 2) here:
    // 
    // const target = EventHelper.getCurrentElement(event); /* current invoking element */
    // const element1 = HTMLHelper.getElementById('ID');    /* accessing an element */
    // const control1 = this.references.ID; /* accessing a component */
    // 
    this.setCookie('consent', 'limit', 365);
    this.forceUpdate();
  }
  // <---Auto[Merging]
  
  // Auto[ClassEnd]--->
  protected render(): any {
    TestHelper.identify();
    return pug `
      div(style=Object.assign({'display': ((!this.getCookie("consent")) ? undefined : "none") || 'flex', 'flexWrap': 'wrap', 'fontFamily': 'Inter', 'paddingLeft': '0px', 'paddingRight': '0px', 'zIndex': '99999'}, this.props.forward && this.props.forward.styles || {}))
        .translucent(style={'paddingBottom': '8px', 'paddingLeft': '10px', 'paddingRight': '10px', 'paddingTop': '8px', 'width': '100%'})
          div(style={'float': 'right', 'paddingLeft': '5px', 'paddingRight': '0px'})
            Button.btn.btn-primary.btn-sm(style={'marginBottom': '3px', 'paddingBottom': '3px', 'paddingTop': '3px', 'width': '100%'}, type="button", onClick=this.onButtonClick_bbb5bbc7.bind(this))
              div(style={'fontSize': '12.5px'})
                | Use Best Experience
            Button.btn.btn-secondary.btn-sm(style={'paddingBottom': '3px', 'paddingTop': '3px', 'width': '100%'}, type="button", onClick=this.onButtonClick_d5430960.bind(this))
              div(style={'fontSize': '12.5px'})
                | Limiting Experience
          div(style={'MsOverflowX': 'hidden', 'MsOverflowY': 'auto', 'color': 'rgba(85, 85, 85, 1)', 'fontSize': '12.5px', 'fontWeight': '500', 'lineHeight': '1em', 'maxHeight': '57px', 'overflowX': 'hidden', 'overflowY': 'auto', 'paddingBottom': '3px', 'paddingRight': '15px', 'paddingTop': '3px'})
            div(style={'display': 'inline'})
              | By accessing the web application, you are agreeing to be bound by terms of service, all applicable laws and regulations, and be responsible for compliance with any applicable local laws.
            div(style={'marginTop': '5px', 'paddingLeft': '0px', 'paddingRight': '0px', 'width': '100%'})
              a(style={'MozTextDecorationLine': 'none', 'WebkitTextDecorationLine': 'none', 'display': 'inline-block', 'fontSize': '12px', 'fontWeight': '700', 'textDecorationLine': 'none', 'width': 'auto'}, href="https://www.softenstorm.com/stackblend-policy-and-terms", target="_blank")
                div
                  | More information
          div(style={'clear': 'both', 'paddingLeft': '0px', 'paddingRight': '0px', 'width': '100%'})
        .col-12(style={'display': 'none'}, dangerouslySetInnerHTML={__html: "<style type=\"text/css\">\n.translucent {\n  background-color: rgba(255, 255, 255, 0.85);\n}\n@supports (-webkit-backdrop-filter: blur(5px)) or (backdrop-filter: blur(5px)) {\n  .translucent {\n    background-color: rgba(255, 255, 255, 0.75);\n    backdrop-filter: blur(10px);\n    -webkit-backdrop-filter: blur(10px);\n    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);\n  }\n}\n::-webkit-scrollbar {\n  -webkit-appearance: none;\n  width: 7px;\n  height: 7px;\n}\n::-webkit-scrollbar-thumb {\n  border-radius: 4px;\n  background-color: rgba(0, 0, 0, 0.5);\n  -webkit-box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);\n}\n</style>"})
    `
  }
}
DeclarationHelper.declare('Site', 'Controls.FlowLayout_394e246c', FlowLayout_394e246c);
// <---Auto[ClassEnd]

// Export variables here:
//
export {IProps, IState, DefaultProps, DefaultState};

// <--- Auto[Generating:V1]
// PLEASE DO NOT MODIFY BECAUSE YOUR CHANGES MAY BE LOST.