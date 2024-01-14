import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Jumbotron from '../components/Jumbotron'


const Home = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Next Blog</title>
      </Head>

    <section className='lg:max-w-[1300px] mx-auto  py-10'>
      <Jumbotron/>
      <div className="grid grid-cols-1 lg:grid-cols-4  gap-10 ">
      {posts.map((post, index) => (
                <Link href={'/blog/' + post.slug} passHref key={index}>
                    <div className="max-w-sm bg-white border border-gray-200 shadow rounded-lg">
                        <div className={styles.thumbnail}>
                            <Image src={post.frontmatter.thumbnailUrl} alt="thumbnail" className='rounded-t-lg' width={0}
                                height={0} style={{ width: '100%', height: 'auto' }} sizes="100vw" objectFit="cover" />
                        </div>
                        <div className='px-3'>
                            <div className='mb-5'>
                                <h2 className="mb-2 text-xl font-bold tracking-tight text-gray-900 ">{post.frontmatter.title}</h2>
                                <p className={styles.description}>{post.frontmatter.description}</p>
                                <p className={styles.date}>{post.frontmatter.date}</p>
                            </div>
                            <div className='text-end'>
                                <Link href={'/blog/' + post.slug} passHref key={index}>
                                    <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Read</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
      </div>
    </section>
    </>
  )
}


export const getStaticProps = async () => {
  const fs = require('fs')
  const path = require('path')
  const matter = require('gray-matter')

  const files = fs.readdirSync(path.join('posts'))

  const posts = files.map((filename) => {
      const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8')
      const { data } = matter(markdownWithMeta)

      return {
          frontmatter: data,
          slug: filename.split('.')[0],
      }
  })

  return {
      props: { posts },
  }
}


export default Home
