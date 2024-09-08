import { useRouter } from "next/router";

const ProductDetailPage = () => {
    const router = useRouter();
    return <div>
        halaman shop: {router.query.productName}
    </div>
}

export default ProductDetailPage;