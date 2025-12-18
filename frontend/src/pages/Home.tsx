export default function Home() {
    return (
        <div className="min-h-screen">
            {/* Header Section */}
            <header className="bg-[rgba(68,68,68,0.7)] text-white flex justify-between items-center
                                px-8 py-4 rounded-[30px] shadow-xl w-[90%] max-w-4xl mx-auto mt-4
                                backdrop-blur-md
                                sticky top-6 z-50">
                <div className="font-semibold text-lg cursor-pointer">
                    CryptoDesk
                </div>
                <nav className="flex gap-6 text-sm">
                    <p className="hover:text-[#B0B0B0] cursor-pointer">Pricing</p>
                    <p className="hover:text-[#B0B0B0] cursor-pointer">Portfolio</p>
                    <p className="hover:text-[#B0B0B0] cursor-pointer">Scanner</p>
                    <p className="hover:text-[#B0B0B0] cursor-pointer">Tools</p>
                    <p className="hover:text-[#B0B0B0] cursor-pointer">Tax</p>
                </nav>
            </header>

            {/* Hero Section */}
            <div className="h-180 flex items-center justify-between px-30">
                <div>
                    <h1 className="text-[#212529] text-[75px] ">
                        Your all in one<br></br>Crypto <span className="text-[blue]">Workspace</span>.
                    </h1>
                </div>
                <video width="500" height="400" autoPlay muted loop>
                    <source src="/assets/Cartoon_Crypto_Box_Animation_Request.mp4" type="video/mp4"></source>
                </video>
            </div>


            {/* Sub Heading Section */}
            <section className="py-20 text-center relative overflow-hidden bg-[#121212]">
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/20 to-transparent pointer-events-none"></div>
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#CCDAD1]">CryptoDesk gives you portfolio tracking,<br></br>security insights, and tools — without<br></br>complexity.</h2>
                <button className="px-10 py-5 bg-white text-black rounded-full font-bold text-xl hover:scale-105 transition-transform shadow-[0_0_50px_rgba(255,255,255,0.4)] cursor-pointer">
                    Get Started Free
                </button>
            </section>


            {/* secure Section */}
            <div className="h-130 flex justify-between px-45 bg-[#CCDAD1] items-center">
                <div>
                    <h2 className="text-[#212529] text-[25px]">
                        • SIWE secured ✓ <br></br><br></br>
                        • Tracking $1.3B+ in assets ✓ <br></br><br></br>
                        • 100+ wallets analyzed ✓
                    </h2>
                </div>
                <div>
                    <h2 className="text-[#212529] text-[50px] text-center font-bold">
                        Built with <span className="text-[red]">security</span>-first<br></br>architecture.
                    </h2>
                </div>
            </div>

            {/* Description Section */}
            <div className="h-130 flex justify-center">
                <div>
                    <h2 className="text-[#212529] text-[50px] ">
                        Features
                    </h2>
                </div>
            </div>

            {/* Explore Plans Section */}
            <section className="py-20 text-center relative overflow-hidden bg-[#121212]">
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/20 to-transparent pointer-events-none"></div>
                <h2 className="text-5xl md:text-7xl font-bold mb-8 text-[#CCDAD1]">Ready to Evolve?</h2>
                <button className="px-10 py-5 bg-white text-black rounded-full font-bold text-xl hover:scale-105 transition-transform shadow-[0_0_50px_rgba(255,255,255,0.4)] cursor-pointer">
                    Explore Plans
                </button>
            </section>


            {/* Footer Section */}
            <footer className="bg-white py-12 px-8 border-t border-gray-200">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <h2 className="text-2xl font-bold text-[#212529] mb-2">CryptoDesk</h2>
                        <p className="text-gray-600">Your Complete Web3 Toolkit</p>
                    </div>

                    {/* Links Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 justify-items-center">
                        {/* Product Column */}
                        <div>
                            <h3 className="font-semibold text-[#212529] mb-4">Product</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-gray-600 hover:text-[#212529] transition-colors">Portfolio</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-[#212529] transition-colors">Security</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-[#212529] transition-colors">Tools</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-[#212529] transition-colors">Tax</a></li>
                            </ul>
                        </div>

                        {/* Company Column */}
                        <div>
                            <h3 className="font-semibold text-[#212529] mb-4">Company</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-gray-600 hover:text-[#212529] transition-colors">About</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-[#212529] transition-colors">Blog</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-[#212529] transition-colors">Contact</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-[#212529] transition-colors">FAQ</a></li>
                            </ul>
                        </div>

                        {/* Legal Column */}
                        <div>
                            <h3 className="font-semibold text-[#212529] mb-4">Legal</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-gray-600 hover:text-[#212529] transition-colors">Privacy</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-[#212529] transition-colors">Terms</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-[#212529] transition-colors">Disclaimer</a></li>
                            </ul>
                        </div>

                        {/* Social Column */}
                        <div>
                            <h3 className="font-semibold text-[#212529] mb-4">Social</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-gray-600 hover:text-[#212529] transition-colors">Twitter</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-[#212529] transition-colors">GitHub</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-[#212529] transition-colors">Discord</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="text-center pt-8 border-t border-gray-200">
                        <p className="text-gray-600">© 2025 CryptoDesk. Built with ❤️ by ztranger.</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}