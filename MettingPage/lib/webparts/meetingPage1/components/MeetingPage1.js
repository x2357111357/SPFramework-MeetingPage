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
import styles from './MeetingPage1.module.scss';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { DatePicker } from 'office-ui-fabric-react/lib/DatePicker';
import { Dropdown } from 'office-ui-fabric-react/lib/Dropdown';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { Label } from 'office-ui-fabric-react/lib/Label';
import { PrimaryButton } from 'office-ui-fabric-react';
var MeetingPage1 = /** @class */ (function (_super) {
    __extends(MeetingPage1, _super);
    function MeetingPage1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MeetingPage1.prototype.render = function () {
        return (React.createElement("div", { className: styles.meetingPage1 },
            React.createElement("div", { className: styles.container },
                React.createElement("div", { className: styles.table, dir: "ltr" },
                    React.createElement("div", { className: styles.row },
                        React.createElement("div", { className: styles.doubleColumn },
                            React.createElement(TextField, { label: "Meeting Title", required: true })),
                        React.createElement("div", { className: styles.doubleColumn },
                            React.createElement(TextField, { label: "Meeting Organizers", required: true }))),
                    React.createElement("div", { className: styles.row },
                        React.createElement("div", { className: styles.doubleColumn },
                            React.createElement(TextField, { label: "Location", required: true }))),
                    React.createElement("div", { className: styles.row },
                        React.createElement("div", { className: styles.doubleColumn },
                            React.createElement(DatePicker, { label: "Start Time", isRequired: true })),
                        React.createElement("div", { className: styles.doubleColumn },
                            React.createElement(DatePicker, { label: "End Time", isRequired: true }))),
                    React.createElement("div", { className: styles.row },
                        React.createElement("div", { className: styles.doubleColumn },
                            React.createElement(Dropdown, { label: "Categary", placeholder: "Choosing from taxonomy", options: [
                                    { key: 'A', text: 'Option a' },
                                    { key: 'B', text: 'Option b' },
                                    { key: 'C', text: 'Option c' },
                                    { key: 'D', text: 'Option d' },
                                    { key: 'E', text: 'Option e' }
                                ], required: true })),
                        React.createElement("div", { className: styles.doubleColumn },
                            React.createElement(Dropdown, { label: "Attendees(Group or user", placeholder: "Add", options: [
                                    { key: 'A', text: 'Option a' },
                                    { key: 'B', text: 'Option b' },
                                    { key: 'C', text: 'Option c' },
                                    { key: 'D', text: 'Option d' },
                                    { key: 'E', text: 'Option e' }
                                ], required: true }))),
                    React.createElement("div", { className: styles.row },
                        React.createElement(Label, { className: styles.lable, required: true }, "Descriptioin"),
                        React.createElement("div", { className: styles.editor },
                            React.createElement(Editor, { toolbarClassName: "toolbarClassName", wrapperClassName: "wrapperClassName", editorClassName: "editorClassName" }))),
                    React.createElement("div", { className: styles.row },
                        React.createElement("div", { className: styles.doubleColumn },
                            React.createElement(TextField, { label: "Pre-reads", required: true, placeholder: "onClick text-box upload file", onClick: this.test }))),
                    React.createElement("div", { className: styles.row },
                        React.createElement("div", { className: styles.doubleColumn })),
                    React.createElement("div", { className: styles.row, dir: "rtl" },
                        React.createElement(PrimaryButton
                        // className={styles.button}
                        , { "data-automation-id": "test", text: "Next", onClick: this._alertClicked, allowDisabledFocus: true }),
                        React.createElement(PrimaryButton, { className: styles.button, "data-automation-id": "test", text: "Cancel", onClick: this._alertClicked, allowDisabledFocus: true }))))));
    };
    MeetingPage1.prototype.test = function () {
        alert("Development .............");
    };
    MeetingPage1.prototype._alertClicked = function () {
        alert("click next button");
    };
    return MeetingPage1;
}(React.Component));
export default MeetingPage1;
//# sourceMappingURL=MeetingPage1.js.map