import Layout from "../components/Layout";
import Link from "next/link";

const custom404 = () => (
    <Layout>
        <div className="text-center">
            <h1>404</h1>
            <p>This page does not exists.</p>
            <p>
                <Link  href="/">
                    <a>Please return to Home</a>
                </Link>
            </p>
        </div>
    </Layout>
)

export default custom404;