import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANT: Replace this with the name of your GitHub repository.
  // For example, if your repository URL is https://github.com/user/my-app,
  // then the base should be '/my-app/'.
  base: '/<YOUR_REPOSITORY_NAME>/',
});
