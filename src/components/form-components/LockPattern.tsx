import Image from "next/image";
import patterLock from "../../../public/images/pattern-lock.png";

const PatternLock: React.FC = () => {
    return (
        <div className="">
            <p className="text-center my-2">sperr muster</p>
            <Image src={patterLock} alt="Pattern Lock" className="object-contain" />
        </div>
    );
};

export default PatternLock;
