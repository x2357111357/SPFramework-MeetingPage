var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { PropertyPaneTextField } from '@microsoft/sp-property-pane';
import * as strings from 'MeetingPage1WebPartStrings';
import MeetingPage1 from './components/MeetingPage1';
var MeetingPage1WebPart = /** @class */ (function (_super) {
    __extends(MeetingPage1WebPart, _super);
    function MeetingPage1WebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MeetingPage1WebPart.prototype.render = function () {
        var element = React.createElement(MeetingPage1, {
            description: this.properties.description
        });
        ReactDom.render(element, this.domElement);
    };
    MeetingPage1WebPart.prototype.onDispose = function () {
        ReactDom.unmountComponentAtNode(this.domElement);
    };
    Object.defineProperty(MeetingPage1WebPart.prototype, "dataVersion", {
        get: function () {
            return Version.parse('1.0');
        },
        enumerable: true,
        configurable: true
    });
    MeetingPage1WebPart.prototype.getPropertyPaneConfiguration = function () {
        return {
            pages: [
                {
                    header: {
                        description: strings.PropertyPaneDescription
                    },
                    groups: [
                        {
                            groupName: strings.BasicGroupName,
                            groupFields: [
                                PropertyPaneTextField('description', {
                                    label: strings.DescriptionFieldLabel
                                })
                            ]
                        }
                    ]
                }
            ]
        };
    };
    return MeetingPage1WebPart;
}(BaseClientSideWebPart));
export default MeetingPage1WebPart;
//# sourceMappingURL=MeetingPage1WebPart.js.map