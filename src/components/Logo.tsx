import Image from "next/image";
import phonyLogo from "../../logo.png";

interface LogoProps {
    className?: string;
}
export default function Logo({ className }: LogoProps) {
    return (
        <div className={`${className}`}>
            <Image src={phonyLogo} alt="" />
        </div>
    );
}
