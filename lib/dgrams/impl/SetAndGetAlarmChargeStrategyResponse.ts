import EmDatagram from "../EmDatagram.ts";
import { Buffer } from "node:buffer";

export class SetAndGetAlarmChargeStrategyResponse extends EmDatagram {

    public static readonly COMMAND = 0x010e;

    protected packPayload() {
        return Buffer.of();
    }

    protected unpackPayload(buffer): void {
        // console.log("270/SetAndGetAlarmChargeStrategyResponse payload: " + buffer.toString("hex"));
    }

}
