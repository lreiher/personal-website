import { CustomMDX } from 'app/components/mdx'
import { readMDXFile } from 'app/blog/utils'

export const metadata = {
  title: 'Projects',
  description: 'Projects',
}

export default function Page() {

  let mdx_file = 'app/projects/projects.mdx'
  let { metadata, content } = readMDXFile(mdx_file)

  return (
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
      />
      <article className="prose">
        <CustomMDX source={content} />
      </article>
    </section>
  )
}
