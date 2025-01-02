export const socialBlocks = (editor) => {
  const blockManager = editor.BlockManager;

  // Add Social Icons Block
  blockManager.add('social-icons', {
    label: 'Social Icons',
    category: 'Social',
    content: `
      <div class="social-icons" style="text-align: center; padding: 10px;">
        <a href="#" style="text-decoration: none; margin: 0 10px;">
          <i class="fab fa-facebook" style="font-size: 24px; color: #3b5998;"></i>
        </a>
        <a href="#" style="text-decoration: none; margin: 0 10px;">
          <i class="fab fa-twitter" style="font-size: 24px; color: #1da1f2;"></i>
        </a>
        <a href="#" style="text-decoration: none; margin: 0 10px;">
          <i class="fab fa-instagram" style="font-size: 24px; color: #e1306c;"></i>
        </a>
        <a href="#" style="text-decoration: none; margin: 0 10px;">
          <i class="fab fa-linkedin" style="font-size: 24px; color: #0077b5;"></i>
        </a>
      </div>
    `,
    attributes: { class: 'fa' }
  });

  // Add Social Share Block
  blockManager.add('social-share', {
    label: 'Social Share',
    category: 'Social',
    content: `
      <div class="social-share" style="text-align: center; padding: 15px; background: #f5f5f5;">
        <p style="margin-bottom: 10px;">Share this content:</p>
        <div style="display: flex; justify-content: center; gap: 15px;">
          <button style="padding: 8px 15px; background: #3b5998; color: white; border: none; border-radius: 4px;">
            <i class="fab fa-facebook-f"></i> Share
          </button>
          <button style="padding: 8px 15px; background: #1da1f2; color: white; border: none; border-radius: 4px;">
            <i class="fab fa-twitter"></i> Tweet
          </button>
          <button style="padding: 8px 15px; background: #0077b5; color: white; border: none; border-radius: 4px;">
            <i class="fab fa-linkedin-in"></i> Share
          </button>
        </div>
      </div>
    `,
    attributes: { class: 'fa' }
  });

  // Add Social Follow Block
  blockManager.add('social-follow', {
    label: 'Social Follow',
    category: 'Social',
    content: `
      <div class="social-follow" style="text-align: center; padding: 20px;">
        <h3 style="margin-bottom: 15px;">Follow Us</h3>
        <div style="display: flex; justify-content: center; gap: 20px;">
          <a href="#" style="text-decoration: none; display: flex; flex-direction: column; align-items: center;">
            <i class="fab fa-facebook" style="font-size: 30px; color: #3b5998; margin-bottom: 5px;"></i>
            <span style="color: #666;">Facebook</span>
          </a>
          <a href="#" style="text-decoration: none; display: flex; flex-direction: column; align-items: center;">
            <i class="fab fa-instagram" style="font-size: 30px; color: #e1306c; margin-bottom: 5px;"></i>
            <span style="color: #666;">Instagram</span>
          </a>
          <a href="#" style="text-decoration: none; display: flex; flex-direction: column; align-items: center;">
            <i class="fab fa-youtube" style="font-size: 30px; color: #ff0000; margin-bottom: 5px;"></i>
            <span style="color: #666;">YouTube</span>
          </a>
        </div>
      </div>
    `,
    attributes: { class: 'fa' }
  });
}; 