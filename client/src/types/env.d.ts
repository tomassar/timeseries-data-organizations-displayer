interface ImportMetaEnv {
    readonly VITE_BASE_URL: string;
    readonly VITE_SATELLITE_BASE_URL: string;
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }