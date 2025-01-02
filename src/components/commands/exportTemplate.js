export const exportTemplate = {
  run: (editor) => {
    const html = editor.getHtml();
    const css = editor.getCss();
    const templateContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Email Template</title>
          <style>
            /* Make content editable styles */
            [contenteditable] {
              outline: none;
            }
            ${css}
          </style>
        </head>
        <body contenteditable="true">
          ${html}
          
          <script>
            // Make all elements editable
            document.querySelectorAll('*').forEach(element => {
              if (element.tagName !== 'HTML' && element.tagName !== 'HEAD' && element.tagName !== 'BODY') {
                element.setAttribute('contenteditable', 'true');
              }
            });
          </script>
        </body>
      </html>`;

    const blob = new Blob([templateContent], { type: 'text/html' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'template.html';
    document.body.appendChild(link);
    link.click();
    
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  }
}; 