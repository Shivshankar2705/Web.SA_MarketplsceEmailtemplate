import React, { useEffect, useState } from 'react';
import grapesjs from 'grapesjs';
import 'grapesjs/dist/css/grapes.min.css';
import gjsNewsletter from 'grapesjs-preset-newsletter';
import "../styles/editor.css";
import { tableBlocks } from './tableBlocks';
import grapesjsFontAwesomePlugin from './grapesjs-fontawesome-plugin';
import { exportTemplate } from './commands/exportTemplate';
import { socialBlocks } from './socialBlocks';

const Editor = () => {
  const [editor, setEditor] = useState(null);

  useEffect(() => {
    const editor = grapesjs.init({
      container: '#email-editor',
      plugins: [gjsNewsletter, tableBlocks, socialBlocks],
      pluginsOpts: {
        gjsNewsletter: {}
      },
      height: '100vh',
      fromElement: true,
      storageManager: false,
      canvas: {
        styles: [
          'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css',
        ],
      },
      codeViewer: {
        readOnly: false,
      },
      contenteditable: "true",
      panels: {
        defaults: [
          {
            id: 'actions',
            el: '.panel__actions',
            buttons: [
              {
                id: 'export-template',
                className: 'btn-export-template',
                label: 'Export Template',
                command: 'export-template'
              }
            ]
          }
        ]
      }
    });

    // editor.Commands.add('export-template', exportTemplate);
    setEditor(editor);

    return () => {
      editor.destroy();
    };
  }, []);

  // Function to handle sending email (you'll need to implement your email service)
  const handleSendEmail = () => {
    if (!editor) return;

    const html = editor.getHtml();
    const css = editor.getCss();
    
    // Example of data to send to your backend
    const emailContent = `
          <!DOCTYPE html>
          <html>
            <head>
              <style>${css}</style>
            </head>
            <body>
              ${html}
            </body>
          </html>
        `;

    console.log("===========", emailContent);

    // Example API call
    // fetch('/api/send-email', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(emailData),
    // })
    // .then(response => response.json())
    // .then(data => {
    //   alert('Email content ready to send!');
    // })
    // .catch(error => {
    //   console.error('Error:', error);
    //   alert('Failed to prepare email content');
    // });
  };

  const handleExport = () => {
    if (editor) {
      editor.runCommand('export-template');
    }
  };
  return (
    <div className="editor-container">
      <div className="panel__actions">
        <button onClick={handleSendEmail} className="send-email-btn">
          Send Email
        </button>
        <button onClick={handleExport} className="export-btn">
          Export Template
        </button>
      </div>
      <div id="email-editor"></div>
    </div>
  );
};

export default Editor;
