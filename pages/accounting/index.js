import React, { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationIcon } from "@heroicons/react/outline";

import Layout from "../../src/layout";

const Accounting = () => {
  const [open, setOpen] = useState(false);
  const cancelButtonRef = useRef(null);
  return (
    <>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed z-10 inset-0 overflow-y-auto"
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="font-semibold text-xl ">
                    Belanja Fingerspot ~ Rp. 3.000.000
                  </div>
                  <div className="font-semibold mb-2">
                    Kapitasi ~ Beli Modal
                  </div>
                  <div className="flex gap-3 mb-2">
                    <div className="overflow-x-auto">
                      <table className="table  table-zebra">
                        <tbody>
                          <tr>
                            <th>Tanggal</th>
                            <td>02 Februai 2022</td>
                          </tr>
                          <tr>
                            <th>No SPJ</th>
                            <td>SPJ/AUTO/0001</td>
                            <th>Vdt</th>
                            <th>Acc</th>
                          </tr>
                          <tr>
                            <th>No ST</th>
                            <td>ST/2022/00001</td>
                            <td>
                              <input
                                type="checkbox"
                                checked={true}
                                className="checkbox checkbox-primary"
                              />
                            </td>
                            <td>
                              <input
                                type="checkbox"
                                className="checkbox checkbox-primary"
                              />
                            </td>
                          </tr>
                          <tr>
                            <th>No LPT</th>
                            <td>LPT/2022/0001</td>
                            <td>
                              <input
                                type="checkbox"
                                checked={true}
                                className="checkbox checkbox-primary"
                              />
                            </td>
                            <td>
                              <input
                                type="checkbox"
                                className="checkbox checkbox-primary"
                              />
                            </td>
                          </tr>
                          <tr>
                            <th>No SPJ</th>
                            <td>KWT/2022/0001</td>
                            <td>
                              <input
                                type="checkbox"
                                checked={true}
                                className="checkbox checkbox-primary"
                              />
                            </td>
                            <td>
                              <input
                                type="checkbox"
                                className="checkbox checkbox-primary"
                              />
                            </td>
                          </tr>
                          <tr>
                            <th>No SPPD</th>
                            <td>SPPD/2022/001</td>
                            <td>
                              <input
                                type="checkbox"
                                checked={true}
                                className="checkbox checkbox-primary"
                              />
                            </td>
                            <td>
                              <input
                                type="checkbox"
                                className="checkbox checkbox-primary"
                              />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <ul className="steps steps-vertical">
                      <li className="step step-primary">On The Way</li>
                      <li className="step step-primary">On Check Validator</li>
                      <li className="step step-primary">On Check Accounting</li>
                      <li className="step">Completed Check</li>
                    </ul>
                  </div>
                  <div>Validator Checked By : ~Pratama</div>
                  <div>Accounting Checked By : ~Dalam Proses</div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    className="btn "
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <div className=" overflow-x-auto max-w-full">
        <div className="card shadow-lg bg-base-100">
          <div className="card-body p-2">
            <div className="form-control flex-1">
              <div className="flex gap-3 w-full">
                <input
                  type="text"
                  placeholder="Search"
                  className="input w-1/3 "
                />
                <input type="date" className="bg-base-100  w-1/3 " />
                <div className="w-1/3 justify-center text-center">
                  <div className="alert alert-warning p-3 justify-center">
                    <div className="flex-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="w-6 h-6 mx-2 stroke-current"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                        ></path>
                      </svg>
                      <label>3 Pending</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="overflow-x-auto overflow-y-auto mt-3 max-h-100 min-w-80 rounded-xl">
          <table className="table w-full ">
            <thead>
              <tr>
                <th>#</th>
                <th>Tanggal</th>
                <th>No SPJ</th>
                <th>Status</th>
                <th>Create BY</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover" onClick={() => setOpen(true)}>
                <th>1</th>
                <td>02/Feb/2022</td>
                <td>SPJ/AUTO/0001</td>
                <td>On Check Accounting</td>
                <td>Rizqi Tato</td>
              </tr>
              <tr className="hover" onClick={() => setOpen(true)}>
                <th>2</th>
                <td>02/Feb/2022</td>
                <td>SPJ/AUTO/0002</td>
                <td>On Check Accounting</td>
                <td>Rizqi Tato</td>
              </tr>
              <tr className="hover" onClick={() => setOpen(true)}>
                <th>3</th>
                <td>02/Feb/2022</td>
                <td>SPJ/AUTO/0003</td>
                <td>On Check Accounting</td>
                <td>Rizqi Tato</td>
              </tr>
              <tr className="hover" onClick={() => setOpen(true)}>
                <th>4</th>
                <td>02/Feb/2022</td>
                <td>SPJ/AUTO/0004</td>
                <td>On Check Accounting</td>
                <td>Rizqi Tato</td>
              </tr>
              <tr className="hover" onClick={() => setOpen(true)}>
                <th>5</th>
                <td>02/Feb/2022</td>
                <td>SPJ/AUTO/0005</td>
                <td>On Check Accounting</td>
                <td>Rizqi Tato</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
Accounting.layout = Layout;
export default Accounting;
