import React, { useState } from 'react';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import { Controlled as ControlledEditor } from 'react-codemirror2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompressAlt, faExpandAlt } from '@fortawesome/free-solid-svg-icons';
import * as CodeMirror from 'react-codemirror2';

interface EditorProps {
  displayName: string;
  language: string;
  value: string;
  onChange(value: string): void;
};

const Editor = (props: EditorProps) => {
  const {
    language,
    displayName,
    value,
    onChange
  } = props;

  const [open, setOpen] = useState(true);

  const handleChange = (editor: CodeMirror.Editor, data: string, value: string) => {
    onChange(value);
  }

  return (
    <div className={`editor-container ${open ? '' : 'collapsed'}`}>
      <div className='editor-title'>
        {displayName}
        <button
        type="button"
        className="expand-collapse-btn"
          onClick={() => setOpen(prev => !prev)}
        >
          <FontAwesomeIcon icon={open ? faCompressAlt : faExpandAlt} />
        </button>
      </div>
      <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        className='code-mirror-wrapper'
        options={{
          lineWrapping: true,
          lint: true,
          mode: language,
          theme: 'material',
          lineNumbers: true
        }}
      />
    </div>
  );
}

export default Editor;
