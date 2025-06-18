/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_VERSION: string
  readonly VITE_API_URL: string
  readonly VITE_ENVIORMENT: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
