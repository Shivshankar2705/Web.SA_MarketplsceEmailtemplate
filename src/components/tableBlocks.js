export const tableBlocks = (editor) => {
  editor.BlockManager.add('2-column-table', {
    label: '2 Column Table',
    category: 'Tables',
    media: '<i class="fa fa-table fa-4x"></i>',
    content: `
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px;">Column 1</td>
          <td style="border: 1px solid #ddd; padding: 8px;">Column 2</td>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px;">Data 1</td>
          <td style="border: 1px solid #ddd; padding: 8px;">Data 2</td>
        </tr>
      </table>
    `,
  });

  editor.BlockManager.add('3-column-table', {
    label: '3 Column Table',
    category: 'Tables',
    media: '<i class="fa fa-table fa-4x"></i>',
    content: `
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px;">Column 1</td>
          <td style="border: 1px solid #ddd; padding: 8px;">Column 2</td>
          <td style="border: 1px solid #ddd; padding: 8px;">Column 3</td>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px;">Data 1</td>
          <td style="border: 1px solid #ddd; padding: 8px;">Data 2</td>
          <td style="border: 1px solid #ddd; padding: 8px;">Data 3</td>
        </tr>
      </table>
    `,
  });

  editor.BlockManager.add('styled-table', {
    label: 'Styled Table',
    category: 'Tables',
    media: '<i class="fa fa-table fa-4x"></i>',
    content: `
      <table style="width: 100%; border-collapse: collapse; margin: 25px 0; font-size: 0.9em; font-family: sans-serif; box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);">
        <thead>
          <tr style="background-color: #009879; color: #ffffff; text-align: left;">
            <th style="padding: 12px 15px;">Header 1</th>
            <th style="padding: 12px 15px;">Header 2</th>
            <th style="padding: 12px 15px;">Header 3</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom: 1px solid #dddddd;">
            <td style="padding: 12px 15px;">Value 1</td>
            <td style="padding: 12px 15px;">Value 2</td>
            <td style="padding: 12px 15px;">Value 3</td>
          </tr>
        </tbody>
      </table>
    `,
  });
};
