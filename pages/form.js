import { useFormik } from 'formik';
import { useAuthHeader } from 'react-auth-kit';


const Form = () => {

    // const authHeader = useAuthHeader();
    // console.log('Auth header ', authHeader());
    const formik = useFormik({
      initialValues: {
        title: '',
        content: '',
        image: '',
      },
      onSubmit: async (values, action) => {
        action.setSubmitting(true);
        try {
          await instance
            .post(
              'blog',
              {
                title: values.title,
                content: values.content,
                image: values.image,
              },
              {
                headers: {
                  Authorization: authHeader(),
                },
              }
            )
            .then(() => {
              action.resetForm();
              window.location.href = '/blog';
            });
        } catch (error) {
          console.log(error);
        } finally {
          action.setSubmitting(false);
        }
      },
    });
    return (
        <>
            <form className="mx-auto py-20 w-full min-h-[80vh] lg:max-w-[1000px]">
                <div className="mb-5">
                    <label
                        htmlFor="title"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Title
                    </label>
                    <input
                        onChange=""
                        name="title"
                        value=""
                        type="text"
                        id="title"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Title"
                        required
                    />
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="content"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Content
                    </label>
                    <input
                        type="text"
                        id="content"
                        onChange=""
                        name="content"
                        value=""
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Content"
                        required
                    />
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="image"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        URL Image
                    </label>
                    <input
                        type="url"
                        id="image"
                        onChange=""
                        name="image"
                        value=""
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="URL Image"
                        required
                    />
                </div>

                <button
                    type=""
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    ""
                </button>
            </form>
        </>
 
 
 );
};
export default Form
