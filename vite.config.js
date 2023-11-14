import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';

import { readFileSync } from 'fs';
import { read, utils } from 'xlsx';

// https://vitejs.dev/config/
export default defineConfig({
  assetsInclude: ['**/*.xlsx'],
  plugins: [
    react(),
    eslint(),
    {
      name: 'vite-sheet',
      transform(code, id) {
        if (!id.match(/\?sheetjs$/)) return;
        var wb = read(readFileSync(id.replace(/\?sheetjs$/, '')));
        var data = utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]);
        return `export default JSON.parse('${JSON.stringify(data)}')`;
      },
    },
  ],
});
