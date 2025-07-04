
// Authentication token - change this to your own secure token
const EDIT_TOKEN = 'edit_mode_secure_token_2024_design_portfolio_xyz123';

export function isEditModeEnabled(): boolean {
  const urlParams = new URLSearchParams(window.location.search);
  const token = urlParams.get('edit');
  return token === EDIT_TOKEN;
}

export function getEditModeUrl(): string {
  const currentUrl = new URL(window.location.href);
  currentUrl.searchParams.set('edit', EDIT_TOKEN);
  return currentUrl.toString();
}

export function removeEditModeFromUrl(): void {
  const url = new URL(window.location.href);
  url.searchParams.delete('edit');
  window.history.replaceState({}, '', url.toString());
}
