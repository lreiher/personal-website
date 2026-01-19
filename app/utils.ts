import fs from 'fs'
import path from 'path'

type Metadata = {
  title: string
  publishedAt: string
  summary: string
  image?: string
}

function parseFrontmatter(fileContent: string) {

  let metadata: Partial<Metadata> = {}
  let frontmatterRegex = /---\s*([\s\S]*?)\s*---/
  let match = frontmatterRegex.exec(fileContent)
  if (match) {
    let frontMatterBlock = match[1]
    let frontMatterLines = frontMatterBlock.trim().split('\n')
    frontMatterLines.forEach((line) => {
      let [key, ...valueArr] = line.split(': ')
      let value = valueArr.join(': ').trim()
      value = value.replace(/^['"](.*)['"]$/, '$1') // Remove quotes
      metadata[key.trim() as keyof Metadata] = value
    })
  }
  let content = fileContent.replace(frontmatterRegex, '').trim()

  return { metadata: metadata as Metadata, content }
}

export function readMDXFile(filePath) {
  let rawContent = fs.readFileSync(filePath, 'utf-8')
  return parseFrontmatter(rawContent)
}
