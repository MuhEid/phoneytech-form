import Image from "next/image";
import Front from "../../front.png";

export interface DeviceMockupProps {
    className?: string;
}

export default function DeviceMockup({ className }: DeviceMockupProps) {
    return (
        <div className="">
            <Image src={Front} alt="front" />
        </div>
    );
}
