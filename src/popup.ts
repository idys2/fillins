document.getElementById("upload")?.addEventListener("click", () => {
    const fileInput = document.getElementById("eob") as HTMLInputElement;
    const file = fileInput && fileInput.files ? fileInput.files[0] : null;

    if (file) {
        const reader = new FileReader();
        reader.onload = async () => {
            const pdfData = new Uint8Array(reader.result as ArrayBuffer);
            // Send parsed PDF data tto background script for processing
            chrome.runtime.sendMessage({ action: "parsePDF", pdfData });
        };
        reader.readAsArrayBuffer(file);
    }
});