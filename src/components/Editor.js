import React, { useEffect, useState } from 'react';
import grapesjs from 'grapesjs';
import 'grapesjs/dist/css/grapes.min.css';
import gjsNewsletter from 'grapesjs-preset-newsletter';

const Editor = () => {
  const [editor, setEditor] = useState(null);

  useEffect(() => {
    const editor = grapesjs.init({
      container: '#gjs',
      plugins: [gjsNewsletter],
      pluginsOpts: {
        gjsNewsletter: {}
      },
      height: '100vh',
      fromElement: true,
      storageManager: false,
      panels: {
        defaults: [
          {
            id: 'actions',
            el: '.panel__actions',
            buttons: [
              {
                id: 'get-content',
                className: 'btn-get-content',
                label: 'Get Content',
                command: 'get-content'
              }
            ]
          }
        ]
      }
    });

    // Add custom command to get content
    editor.Commands.add('get-content', {
      run: (editor) => {
        const html = editor.getHtml();
        const css = editor.getCss();
        
        // You can handle the content here
        console.log('HTML:', html);
        console.log('CSS:', css);
        
        // Example: Create a formatted output
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

        // Example: Copy to clipboard
        navigator.clipboard.writeText(emailContent)
          .then(() => alert('Content copied to clipboard!'))
          .catch(err => console.error('Failed to copy:', err));
      }
    });

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
    const emailData = {
      html,
      css,
      subject: 'Newsletter'
    };

    console.log("===========", emailData);

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

  return (
    <div className="editor-container">
      <div className="panel__actions">
        <button onClick={handleSendEmail} className="send-email-btn">
          Send Email
        </button>
      </div>
      <div id="gjs"></div>
    </div>
  );
};

export default Editor;
