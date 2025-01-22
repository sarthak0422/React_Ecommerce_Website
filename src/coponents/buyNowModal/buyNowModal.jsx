// import {
//     Button,
//     Dialog,
//     DialogBody,
// } from "@material-tailwind/react";
// import { useState } from "react";

// const BuyNowModal = ({ addressInfo, setAddressInfo, buyNowFunction }) => {
//     const [open, setOpen] = useState(false);

//     const handleOpen = () => setOpen(!open);
//     return (
//         <>
//             <Button
//                 type="button"
//                 onClick={handleOpen}
//                 className="w-full px-4 py-3 text-center text-gray-100 bg-[#89ABE3FF] border border-transparent dark:border-gray-700 hover:border-[#FCF6F5FF]  hover:text-[#FCF6F5FF]  hover:bg-[#6074AB] rounded-xl"
//             >
//                 Buy now
//             </Button>
//             <Dialog open={open} handler={handleOpen} className=" bg-[#FCF6F5FF]">
//                 <DialogBody className="">
//                     <div className="mb-3">
//                         <input
//                             type="text"
//                             name="name"
//                             value={addressInfo.name}
//                             onChange={(e)=>{
//                                 setAddressInfo({ ...addressInfo, name: e.target.value });
//                             }}
//                             placeholder='Enter your name'
//                             className='bg-[#FCF6F5FF] border border-[#89ABE3FF] px-2 py-2 w-full rounded-md outline-none text-[#89ABE3FF] placeholder-[#89ABE3FF]'
//                         />              
//                     </div>
//                     <div className="mb-3">
//                         <input
//                             type="text"
//                             name="address"
//                             value={addressInfo.address}
//                             onChange={(e) => {
//                                 setAddressInfo({...addressInfo, address: e.target.value});
//                             }}
//                             placeholder='Enter your address'
//                             className='bg-[#FCF6F5FF] border border-[#89ABE3FF] px-2 py-2 w-full rounded-md outline-none text-[#89ABE3FF] placeholder-[#89ABE3FF]'
//                         />
//                     </div>

//                     <div className="mb-3">
//                         <input
//                             type="number"
//                             name="pincode"
//                             value={addressInfo.pincode}
//                             onChange={(e)=>{
//                                 setAddressInfo({...addressInfo, pincode: e.target.value});
//                             }}
//                             placeholder='Enter your pincode'
//                             className='bg-[#FCF6F5FF] border border-[#89ABE3FF] px-2 py-2 w-full rounded-md outline-none text-[#89ABE3FF] placeholder-[#89ABE3FF]'
//                         />
//                     </div>

//                     <div className="mb-3">
//                         <input
//                             type="text"
//                             name="mobileNumber"
//                             value={addressInfo.mobileNumber}
//                             onChange={(e)=>{
//                                 setAddressInfo({...addressInfo, mobileNumber: e.target.value});
//                             }}
//                             placeholder='Enter your mobileNumber'
//                             className='bg-[#FCF6F5FF] border border-[#89ABE3FF] px-2 py-2 w-full rounded-md outline-none text-[#89ABE3FF] placeholder-[#89ABE3FF]'
//                         />
//                     </div>

//                     <div className="">
//                     <Button
//                 type="button"
//                 onClick={()=> {
//                     handleOpen();
//                     buyNowFunction();

//                 }}
//                 className="w-full px-4 py-3 text-center text-gray-100 bg-[#89ABE3FF] border border-transparent dark:border-gray-700 hover:border-[#FCF6F5FF]  hover:text-[#FCF6F5FF]  hover:bg-[#6074AB] rounded-xl"
//             >
//                 Buy now
//             </Button>
//                     </div>

//                 </DialogBody>
//             </Dialog>
//         </>
//     );
// }

// export default BuyNowModal;

import {
    Button,
    Dialog,
    DialogBody,
} from "@material-tailwind/react";
import { useState } from "react";

const BuyNowModal = ({ addressInfo, setAddressInfo, buyNowFunction }) => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(!open);

    return (
        <>
            <Button
                type="button"
                onClick={handleOpen}
                className="w-full px-4 py-3 text-center text-gray-100 bg-[#89ABE3FF] border border-transparent dark:border-gray-700 hover:border-[#FCF6F5FF]  hover:text-[#FCF6F5FF]  hover:bg-[#6074AB] rounded-xl"
            >
                Buy now
            </Button>
            <Dialog open={open} handler={handleOpen} className="bg-[#FCF6F5FF]">
                <DialogBody>
                    <div className="mb-3">
                        <input
                            type="text"
                            name="name"
                            value={addressInfo.name}
                            onChange={(e) => {
                                setAddressInfo({ ...addressInfo, name: e.target.value });
                            }}
                            placeholder="Enter your name"
                            className="bg-[#FCF6F5FF] border border-[#89ABE3FF] px-2 py-2 w-full rounded-md outline-none text-[#89ABE3FF] placeholder-[#89ABE3FF]"
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="text"
                            name="address"
                            value={addressInfo.address}
                            onChange={(e) => {
                                setAddressInfo({ ...addressInfo, address: e.target.value });
                            }}
                            placeholder="Enter your address"
                            className="bg-[#FCF6F5FF] border border-[#89ABE3FF] px-2 py-2 w-full rounded-md outline-none text-[#89ABE3FF] placeholder-[#89ABE3FF]"
                        />
                    </div>

                    <div className="mb-3">
                        <input
                            type="number"
                            name="pincode"
                            value={addressInfo.pincode}
                            onChange={(e) => {
                                setAddressInfo({ ...addressInfo, pincode: e.target.value });
                            }}
                            placeholder="Enter your pincode"
                            className="bg-[#FCF6F5FF] border border-[#89ABE3FF] px-2 py-2 w-full rounded-md outline-none text-[#89ABE3FF] placeholder-[#89ABE3FF]"
                        />
                    </div>

                    <div className="mb-3">
                        <input
                            type="text"
                            name="mobileNumber"
                            value={addressInfo.mobileNumber}
                            onChange={(e) => {
                                setAddressInfo({ ...addressInfo, mobileNumber: e.target.value });
                            }}
                            placeholder="Enter your mobile number"
                            className="bg-[#FCF6F5FF] border border-[#89ABE3FF] px-2 py-2 w-full rounded-md outline-none text-[#89ABE3FF] placeholder-[#89ABE3FF]"
                        />
                    </div>

                    <div>
                        <Button
                            type="button"
                            onClick={() => {
                                buyNowFunction();
                                handleOpen(); // Close the modal after the operation
                            }}
                            className="w-full px-4 py-3 text-center text-gray-100 bg-[#89ABE3FF] border border-transparent dark:border-gray-700 hover:border-[#FCF6F5FF] hover:text-[#FCF6F5FF] hover:bg-[#6074AB] rounded-xl"
                        >
                            Confirm Purchase
                        </Button>
                    </div>
                </DialogBody>
            </Dialog>
        </>
    );
};

export default BuyNowModal;
