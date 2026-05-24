import logo from "@/assets/logo.png"
import Image from 'next/image';

const Header = () => {
    return (
        <div>
            <Image src={logo} alt='Logo' width={300} height={200}></Image>
            <h2>Header</h2>
        </div>
    );
};

export default Header;