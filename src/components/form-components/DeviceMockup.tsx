import Image from "next/image";
import Device from "../../../public/images/device.png";

export interface DeviceMockupProps {
    className?: string;
}

export default function DeviceMockup({ className }: DeviceMockupProps) {
    return (
        <div className={`${className}`}>
            <Image src={Device} alt="front" className="object-cover" />
        </div>
    );
}
