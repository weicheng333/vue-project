// 导入静态资源工具函数

const Pictures = import.meta.glob('@/assets/pictures/**/*', { import: 'default' }) as Record<string, () => Promise<string>>

function ImportPicture(src: string): Promise<string>
function ImportPicture(src: string, FromSrc: string): Promise<string>
function ImportPicture(src: string, FromSrc?: string): Promise<string> {
  const NotPath = Promise.resolve('')
  if (FromSrc && FromSrc.startsWith('http')) {
    src = new URL(src, FromSrc).pathname
  }

  const IMGPromise = Pictures?.[src]

  return (!src.startsWith('.') && IMGPromise) ? IMGPromise() : NotPath
}

export default ImportPicture
