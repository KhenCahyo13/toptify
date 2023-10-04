import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

const AboutView = () => (
    <div>
        <Navbar />
        <section className="px-8 py-4 md:px-16 lg:px-40">
            <div className="my-2">
                <h1 className="text-lg font-semibold dark:text-white">About Top<span className="text-green-400">tify</span></h1>
                <p className="my-2 text-sm dark:text-white">Inspired by Receiptify, the Top<span className="text-green-400">tify</span> Project was created with the intention of having fun. This project was created by Khen Cahyo, a web developer. This project is likely to continue to be developed.</p>
                <p className="my-2 text-sm dark:text-white">Top<span className="text-green-400">tify</span> guarantees 100% security of your account data. So, don't worry about the security of your account data. Enjoy using Toptify.</p>
            </div>
            <div className="my-6">
                <h1 className="text-lg font-semibold dark:text-white">Top<span className="text-green-400">tify</span> FAQ</h1>
                <p className="my-2 font-medium dark:text-white">Can I use the code from Top<span className="text-green-400">tify</span>?</p>
                <p className="my-2 text-sm dark:text-white">Hmm, yes you can use a code from Top<span className="text-green-400">tify</span>. You can download the code <a href="https://github.com/KhenCahyo13/toptify" className="text-green-400">here</a>. If possible, please include Khen Cahyo name as the source of the code.</p>
            </div>
        </section>
        <Footer />
    </div>
);

export default AboutView;