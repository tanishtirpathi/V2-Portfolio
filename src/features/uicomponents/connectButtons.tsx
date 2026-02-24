import { PiNotepadLight } from "react-icons/pi";
import { FiMessageSquare } from "react-icons/fi";
import { RainbowButton } from "@/components/ui/rainbow-button";


export default function ConnectButtons() {
    return (
        <div className="flex px-2 py-4 items-center gap-6 ">
            <RainbowButton variant="outline">
                <a href="https://docs.google.com/document/d/e/2PACX-1vSvmlZaSpYs7Z7JWNe2o1VddGUWKsqNUGaQmWqGMDRT-lMaMF5QwWDXeVDqat9EQFwf5Ec_BDmSXWTE/pub" target="_blank" rel="noopener noreferrer"
                    className=" font-main font-semibold flex items-center gap-2"
                >Resume/CV <PiNotepadLight />
                </a></RainbowButton>
             <RainbowButton>
                <a href="https://x.com/tanishtirpathi" target="_blank" rel="noopener noreferrer"
                    className=" font-main font-semibold flex items-center gap-2"
                >Connect <FiMessageSquare />
                </a></RainbowButton>
        </div>
    )
}