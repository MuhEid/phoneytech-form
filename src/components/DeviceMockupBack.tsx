import { DeviceMockupProps } from "./DeviceMockup";
import Image from "next/image";
import Back from "../../back.png";

export default function DeviceMockupBack({ className }: DeviceMockupProps) {
    return (
        <div className="">
            <Image src={Back} alt="back" />
        </div>
    );
}
