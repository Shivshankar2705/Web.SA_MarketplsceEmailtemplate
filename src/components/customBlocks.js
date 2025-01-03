export const basicBlocks = (editor) => {
  editor.BlockManager.add('paragraph', {
    label: 'Paragraph',
    category: 'Basic',
    content: '<p class="paragraph">Insert your text here</p>',
    attributes: {
      class: 'fa fa-paragraph'
    }
  });

  editor.BlockManager.add('unordered-list', {
    label: 'Unordered List',
    category: 'Basic',
    content: `
      <ul class="unordered-list">
        <li>First item</li>
        <li>Second item</li>
        <li>Third item</li>
      </ul>
    `,
    attributes: {
      class: 'fa fa-list-ul'
    }
  });
};
