import { createThirdwebClient } from "thirdweb";
import { upload } from "thirdweb/storage";
import fs from "fs"
import path from "path"
import { File } from "buffer";

async function main() {
    const client = createThirdwebClient({
        clientId: "",
        config: {
            storage: {
                fetch: {
                    // set the timeout for NFTs upload to 10 minutes
                    requestTimeoutMs: 60 * 1000 * 10,
                },
            },
        },
    });
    const filePath = path.join(__dirname, "4k_Thetestdata.mp4");
    const fileBuffer = fs.readFileSync(filePath); // Read file as buffer
    const file = new File([fileBuffer], "4k_Thetestdata.mp4", { type: "video/mp4" });

    const filePath2 = path.join(__dirname, "4k_Thetestdata copy.mp4");
    const fileBuffer2 = fs.readFileSync(filePath2); // Read file as buffer
    const file2 = new File([fileBuffer2], "4k_Thetestdata copy.mp4", { type: "video/mp4" });

    const filePath3 = path.join(__dirname, "4k_Thetestdata copy 2.mp4");
    const fileBuffer3 = fs.readFileSync(filePath3); // Read file as buffer
    const file3 = new File([fileBuffer3], "4k_Thetestdata copy 2.mp4", { type: "video/mp4" });
    console.time("Uploading file...");
    try {
        
        const uris = await upload({
            client,
            files: [file, file2, file3] // Create a Blob],

        });
       
        console.log("Uploaded file URIs:", uris);
    } catch (e) {
        console.log(e)
    }
    console.timeEnd("Uploading file...");

}

main()