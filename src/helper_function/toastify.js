import {  toast } from 'react-toastify';


export const notify = (type, toastMessege) => {
  if (type === "success") {
    toast.success(toastMessege, {
      position: "top-left",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover:  false,
      draggable: false,
      progress: undefined,
   
    });
  } else {
    toast.error(toastMessege, {
      position: "top-left",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
   
    });
  }
}