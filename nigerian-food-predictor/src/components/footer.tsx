export function Footer() {
    return (
        <div className="bg-gradient-to-r from-green-800 to-[#013c05] text-white py-10 p-20">
            <div className="max-w-[1440px] mx-auto px-10 mt-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {/* Contact Section */}
                    <div className="space-y-4">
                        <h4 className="text-sm font-semibold">Contact</h4>
                        <p className="text-sm">Info@Yourplatform.Com</p>
                        <p className="text-sm">+234 800 123 4567</p>
                        <p className="text-sm">+234 800 987 4567</p>
                        <p className="text-sm">FAQ</p>
                    </div>

                    {/* Address Section */}
                    <div className="space-y-4">
                        <h4 className="text-sm font-semibold">Address</h4>
                        <p className="text-sm">
                            Main Campus Km 52, Lekki-Epe Expressway (Near Eleko Beach Junction), 
                            Ibeju-Lekki, Lagos, P.O. BOX 73688, Victoria Island, Lagos.
                        </p>
                    </div>

                    {/* Logo Section */}
                    <div className="flex flex-col justify-center items-center lg:items-end space-y-4">
                        <img src="" alt="E-learn" />
                        
                    </div>
                </div>

                {/* Footer Bottom Section */}
                <div className="mt-8 pt-6 flex flex-col lg:flex-row justify-between items-center text-sm">
                    <p>©2022 School Management. Copyright And All Rights Reserved.</p>
                    <div className=" space-x-6 mt-4 lg:mt-0">
                        <a href="#" className="hover:text-gray-400">Privacy</a>
                        <a href="#" className="hover:text-gray-400">Security</a>
                        <a href="#" className="hover:text-gray-400">Terms</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
