import { CustomMDX } from 'app/components/mdx'
import { readMDXFile } from 'app/blog/utils'

export const metadata = {
  title: 'CV',
  description: 'Curriculum Vitae',
}

export default function Page() {

  let mdx_file = 'app/cv/cv.mdx'
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
