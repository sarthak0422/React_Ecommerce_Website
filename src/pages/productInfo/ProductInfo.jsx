import { useContext, useEffect, useState } from "react";
import Layout from "../../coponents/layout/Layout";
import myContext from "../../context/myContext";
import { useParams } from "react-router";
import { fireDB } from "../../firebase/FirebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import Loader from "../../coponents/loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../../redux/cartSlice"; // Ensure deleteFromCart is imported
import toast from "react-hot-toast";

const ProductInfo = () => {
    const { loading, setLoading } = useContext(myContext);
    const [product, setProduct] = useState(null);
    const { id } = useParams();
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cartReducer.cart);

    const getProductData = async () => {
        setLoading(true);
        try {
            const productTemp = await getDoc(doc(fireDB, "products", id));
            setProduct({ ...productTemp.data(), id: productTemp.id });
        } catch (error) {
            console.log("Failed to fetch product data:", error);
            toast.error("Unable to fetch product details. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const addCart = (item) => {
        dispatch(addToCart(item));
        toast.success("Added to cart");
    };

    const deleteCart = (item) => {
        dispatch(deleteFromCart(item));
        toast.success("Removed from cart");
    };

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cartItems));
    }, [cartItems]);

    useEffect(() => {
        getProductData();
    }, [id]);

    return (
        <Layout>
            <section className="py-5 lg:py-16 font-poppins dark:bg-gray-800">
                {loading ? (
                    <div className="flex justify-center items-center">
                        <Loader />
                    </div>
                ) : (
                    <div className="max-w-6xl px-4 mx-auto">
                        <div className="flex flex-wrap mb-24 -mx-4">
                            <div className="w-full px-4 mb-8 md:w-1/2 md:mb-0">
                                <img
                                    className="w-full lg:h-[39em] rounded-lg"
                                    src={product?.productImageUrl}
                                    alt={product?.title || "Product"}
                                />
                            </div>
                            <div className="w-full px-4 md:w-1/2">
                                <div className="lg:pl-20">
                                    <h2 className="max-w-xl mb-6 text-xl font-semibold leading-loose tracking-wide text-gray-700 md:text-2xl dark:text-gray-300">
                                        {product?.title}
                                    </h2>
                                    <p className="inline-block text-2xl font-semibold text-gray-700 dark:text-gray-400">
                                        ₹ {product?.price}
                                    </p>
                                    <h2 className="mb-2 text-lg font-bold text-gray-700 dark:text-gray-400">
                                        Description:
                                    </h2>
                                    <p>{product?.description}</p>
                                    <div className="flex gap-4 m-6">
                                        {cartItems.some((p) => p.id === product?.id) ? (
                                            <button
                                                onClick={() => deleteCart(product)}
                                                className="w-full px-4 py-3 text-center text-white bg-red-500 border border--600 hover:bg-red-600 hover:text-gray-100 rounded-xl"
                                            >
                                                Remove from Cart
                                            </button>
                                        ) : (
                                            <button
                                                onClick={() => addCart(product)}
                                                className="w-full px-3 py-3 text-center text-[#89ABE3FF] bg-[#FCF6F5FF] border border-[#89ABE3FF] hover:bg-[#89ABE3FF] hover:text-[#FCF6F5FF] rounded-xl"
                                            >
                                                Add to Cart
                                            </button>
                                        )}
                                    </div>
                                    {/* <div className="flex gap-4 m-6">
                                        <button
                                            className="w-full px-4 py-3 text-center text-[#89ABE3FF] bg-[#FCF6F5FF] border border-[#89ABE3FF] hover:bg-[#89ABE3FF] hover:text-[#FCF6F5FF] rounded-xl"
                                        >
                                            Buy now
                                        </button>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </section>
        </Layout>
    );
};

export default ProductInfo;
