import * as React from 'react';
import styles from './MeetingPage1.module.scss';
import { IMeetingPage1Props } from './IMeetingPage1Props';
import { TextField, MaskedTextField } from 'office-ui-fabric-react/lib/TextField';
import { escape } from '@microsoft/sp-lodash-subset';
import { DatePicker, DayOfWeek, IDatePickerStrings } from 'office-ui-fabric-react/lib/DatePicker';
import { Dropdown, IDropdown } from 'office-ui-fabric-react/lib/Dropdown';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EditorState } from 'draft-js';
import { Label } from 'office-ui-fabric-react/lib/Label';
import { css, classNamesFunction, DefaultButton, IButtonProps, IStyle, PrimaryButton } from 'office-ui-fabric-react';
export default class MeetingPage1 extends React.Component<IMeetingPage1Props, {}> {
  public render(): React.ReactElement<IMeetingPage1Props> {
    return (
      <div className={styles.meetingPage1}>
        <div className={styles.container}>
          {/* 表格 */}
          <div className={styles.table} dir="ltr">
            {/*第一行 */}
            <div className={styles.row}>
              {/*第一列 */}
              <div className={styles.doubleColumn}>
                <TextField label="Meeting Title" required />
              </div>
              {/*第二列 */}
              <div className={styles.doubleColumn}>
                <TextField label="Meeting Organizers" required />
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.doubleColumn}>
                <TextField label="Location" required />
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.doubleColumn}>
                <DatePicker label="Start Time" isRequired={true} />
              </div>
              <div className={styles.doubleColumn}>
                <DatePicker label="End Time" isRequired={true} />
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.doubleColumn}>
                <Dropdown
                  label="Categary"
                  placeholder="Choosing from taxonomy"
                  options={[
                    { key: 'A', text: 'Option a' },
                    { key: 'B', text: 'Option b' },
                    { key: 'C', text: 'Option c' },
                    { key: 'D', text: 'Option d' },
                    { key: 'E', text: 'Option e' }
                  ]}
                  required={true}
                />
              </div>
              <div className={styles.doubleColumn}>
                <Dropdown
                  label="Attendees(Group or user"
                  placeholder="Add"
                  options={[
                    { key: 'A', text: 'Option a' },
                    { key: 'B', text: 'Option b' },
                    { key: 'C', text: 'Option c' },
                    { key: 'D', text: 'Option d' },
                    { key: 'E', text: 'Option e' }
                  ]}
                  required={true}
                />
              </div>
            </div>
            <div className={styles.row}>
              <Label className={styles.lable} required={true}>{}Descriptioin</Label>
              <div className={styles.editor}>
                <Editor
                  toolbarClassName="toolbarClassName"
                  wrapperClassName="wrapperClassName"
                  editorClassName="editorClassName"
                />
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.doubleColumn}>
                <TextField label="Pre-reads" required placeholder="onClick text-box upload file" onClick={this.test} />
              </div>
            </div>
            <div className={styles.row}><div className={styles.doubleColumn}></div></div>
            <div className={styles.row} dir="rtl">
                
                <PrimaryButton
                  // className={styles.button}
                  data-automation-id="test"
                  text="Next"
                  onClick={this._alertClicked}
                  allowDisabledFocus={true}
                />
                <PrimaryButton
                  className={styles.button}
                  data-automation-id="test"
                  text="Cancel"
                  onClick={this._alertClicked}
                  allowDisabledFocus={true}
                />
            </div>
          </div>
        </div>
      </div>
    );
  }

  public test(): void {
    alert("Development .............");
  }

  public _alertClicked(): void {
    alert("click next button");
  }
}
