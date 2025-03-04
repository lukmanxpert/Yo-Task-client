import {
    Dialog,
    Transition,
    TransitionChild,
    DialogPanel,
    DialogTitle,
  } from '@headlessui/react'
  import { Fragment } from 'react'
  import PropTypes from 'prop-types'
  const TaskDelete = ({ closeModal, isOpen ,taskDelete,}) => {
    return (
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as='div' className='relative z-10' onClose={closeModal}>
          <TransitionChild
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-[#00000050]' />
          </TransitionChild>
  
          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-4 text-center'>
              <TransitionChild
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <DialogPanel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                  <DialogTitle
                    as='h3'
                    className='text-lg font-medium leading-6 text-gray-900'
                  >
                    Are you sure?
                  </DialogTitle>
                  <div className='mt-2'>
                    <p className='text-sm text-gray-500'>
                      You cannot undo once it&apos;s done!
                    </p>
                  </div>
                  <hr className='mt-8 ' />
                  <div className='flex mt-2 justify-around'>
                    <button
                      type='button'
                      onClick={taskDelete}
                      className='inline-flex justify-center rounded-md border border-transparent bg-black px-4 py-2 text-sm font-medium text-white '
                    >
                      Yes
                    </button>
                    <button
                      type='button'
                      className='inline-flex justify-center rounded-md border border-transparent bg-[red] px-4 py-2 text-sm font-medium text-white '
                      onClick={closeModal}
                    >
                      No
                    </button>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    )
  }
  
  TaskDelete.propTypes = {
    id: PropTypes.string,
    modalHandler: PropTypes.func,
    closeModal: PropTypes.func,
    diletOrder :PropTypes.func,
    isOpen: PropTypes.bool,
  }
  
export default TaskDelete;