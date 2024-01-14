import Link from "next/link";
import { useState } from "react";

export const getStaticProps = async ({params}) => {


  const page = params?.page || 1;
  const res = await fetch('https://gorest.co.in/public/v2/posts')
  const data = await res.json();

  return {
    props: { Blogs: data, currentPage: page, totalPages: Math.ceil(data.length/9) },
  }

}
const Blogs = ({ Blogs,currentPage,totalPages }) => {
  const [page,setPage] = useState(currentPage);

  const handlePrevPage = ()=>{
    if(page>1){
      setPage(page-1);
    }
  }
  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  return (
    <section className="mx-auto lg:max-w-[1200px] w-full py-5">
      <h1 className="font-bold text-xl ">Blog List</h1>
      <div className='lg:block hidden text-center py-5 my-5'>
        <input type="text" placeholder="Search" className="rounded-full w-[300px]" />
      </div>
      <div className='grid lg:grid-cols-3 grid-cols-1 gap-20'>
        {Blogs.map(blog => (
          <div key={blog.id}>
            <div className='shadow-lg'>
              <img className='h-44 w-full object-cover' alt="" src={blog.thumbnailUrl} srcset="" />
              <div className="caption flex flex-col p-3">
                <h1 className="text-xl font-bold my-3 ">{blog.title}</h1>
                <p className='text.black'>{blog.body}</p>
                <Link href="/details">
                <button type="button" class="focus:outline-none my-3 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Read</button>
                </Link>
              </div>
            </div>
          </div>
        ))};
      </div>

      <div className="pagination mt-4 flex justify-center">
        <button onClick={handlePrevPage} className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700" disabled={page === 1}>
          <svg className="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
          </svg>
        </button>
        <span className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">{`Page ${page} of ${totalPages}`}</span>
        <button className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700" onClick={handleNextPage} disabled={page === totalPages}>
          <svg className="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
          </svg>
        </button>
      </div>
    </section>
  )  
}


export default Blogs
