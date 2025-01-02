import grapesjs from 'grapesjs';

export default grapesjs.plugins.add('gjs-fontawesome-plugin', (editor, opts = {}) => {
    const options = {
      blockCategory: 'Font Awesome', // Block category in the Block Manager
      fontAwesomeCss: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css', // Font Awesome CDN
      defaultIconClass: 'fa fa-star', // Default Font Awesome class for components
      ...opts, // Allow users to override default options
    };
  
    // Add Font Awesome CSS to the canvas when the editor is ready
    editor.on('load', () => {
      const frameHead = editor.Canvas.getDocument().head;
      if (frameHead) {
        frameHead.insertAdjacentHTML(
          'beforeend',
          `<link rel="stylesheet" href="${options.fontAwesomeCss}" />`
        );
      }
    });
  
    // Add a custom block to the Block Manager
    editor.BlockManager.add('fa-icon-block', {
      label: 'Font Awesome Icon',
      category: options.blockCategory,
      content: `
        <div style="text-align: center; font-size: 24px; color: #333;">
          <i class="${options.defaultIconClass}"></i>
        </div>
      `,
    });
    
  
    // Add a new component type for Font Awesome icons
    editor.Components.addType('fa-icon', {
      model: {
        defaults: {
          tagName: 'i',
          classes: [options.defaultIconClass],
          traits: [
            {
              type: 'select',
              label: 'Icon',
              name: 'icon-class',
              options: [
                { value: 'fa fa-star', name: 'Star' },
                { value: 'fa fa-heart', name: 'Heart' },
                { value: 'fa fa-envelope', name: 'Envelope' },
                { value: 'fa fa-check', name: 'Check' },
                { value: 'fa fa-user', name: 'User' },
                { value: 'fa fa-home', name: 'Home' },
              ],
              onChange: ({ component, value }) => {
                const classes = component.getClasses();
                const filteredClasses = classes.filter(cls => !cls.startsWith('fa'));
                component.setClass(filteredClasses);
                component.addClass(value);
              },
            },
          ],
        },
      },
      view: {
        onRender() {
          const iconClass = this.model.getTrait('icon-class').value;
          this.el.className = iconClass || options.defaultIconClass;
        },
      },
    });
  
    // Add a custom block for the new Font Awesome component type
    editor.BlockManager.add('fa-icon-component', {
      label: 'Custom Icon Picker',
      category: options.blockCategory,
      content: { type: 'fa-icon' },
    });
  });
  