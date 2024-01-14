import React,{useState,Fragment} from "react";
import { Dialog, Transition } from '@headlessui/react'

const Details = () => {
  const [isOpenModal1, setIsOpenModal1] = useState(false);
  const [isOpenModal2, setIsOpenModal2] = useState(true);

  function openModal1() {
    setIsOpenModal1(true);
  }
  
  function closeModal1() {
    setIsOpenModal1(false);
  }
  
  function openModal2() {
    setIsOpenModal2(true);
  }
  
  function closeModal2() {
    setIsOpenModal2(false);
  }
  

  return (
    <div>
      <section className="px-20 my-10 min-h-[100vh]">
        <img src="" className="w-full h-60 object-cover" alt="" srcset="" />

        <div className="w-full lg:min-w-[1000px] mx-auto">
          <div className="flex justify-between my-10">
            <div>
              <h3 className="text-black text-3xl font-bold">Lorem</h3>
              <h4 className="text-black text-1xl font-bold">written by ming</h4>
            </div>
            <div className="flex gap-2 items-center">
              <button onClick={openModal1} className="bg-blue-700 py-1 rounded text-white w-fit px-10">
                Update
              </button>
              <button onClick={openModal2} className="bg-red-700 py-1 rounded text-white w-fit px-10">
                Delete
              </button>
           
            </div>
          </div>
          <div className="content">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              deserunt perferendis beatae corporis. Facilis reprehenderit
              consectetur aperiam tempora voluptas inventore quasi, quis iure.
              Tempore optio tenetur impedit eaque, veniam amet.
            </p>
          </div>
        </div>

        {/* Modal Update*/}
       <Transition show={isOpenModal1} as={Fragment}>
        <Dialog as="div" open={isOpenModal1} className="relative z-10" onClose={() => setIsOpenModal1(false)} >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-blue-900"
                  >
                    Update Post
                  </Dialog.Title>
                  <div className="mt-2">
                <p className="text-sm text-gray-500 font-extrabold">
                  Apakah anda yakin ingin mengupdate post ini?
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <button
                  type="button"
                  onClick=""
                  className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                >
                  Ya
                </button>
                <button
                  type="button"
                  onClick={closeModal1}
                  className="inline-flex justify-center rounded-md border border-transparent bg-red-500 text-white px-4 py-2 text-sm font-medium  focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                >
                  Tidak
                </button>
              </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>


      {/* Modal Delete */}
      <Transition show={isOpenModal2} as={Fragment}>
        <Dialog as="div" open={isOpenModal2} className="relative z-10" onClose={() => setIsOpenModal2(false)} >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-red-900"
                  >
                    Delete Post
                  </Dialog.Title>
                  <div className="mt-2">
                <p className="text-sm text-gray-500">
                  Apakah anda yakin ingin menghapus post ini?
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <button
                  type="button"
                  onClick=""
                  className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                >
                  Ya
                </button>
                <button
                  type="button"
                  onClick={closeModal2}
                  className="inline-flex justify-center rounded-md border border-transparent bg-red-500 text-white px-4 py-2 text-sm font-medium  focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                >
                  Tidak
                </button>
              </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      </section>
    </div>
  );
};

export default Details;
