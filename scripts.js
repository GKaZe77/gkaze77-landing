document.addEventListener('DOMContentLoaded', () => {
  const settingsBtn = document.getElementById('settings-btn');
  const settingsModal = document.getElementById('settings-modal');
  const closeBtn = document.getElementById('close-settings');

  settingsBtn.addEventListener('click', (e) => {
    e.preventDefault();
    settingsModal.style.display = 'block';
  });

  closeBtn.addEventListener('click', () => {
    settingsModal.style.display = 'none';
  });

  window.addEventListener('click', (e) => {
    if (e.target == settingsModal) {
      settingsModal.style.display = 'none';
    }
  });
});
