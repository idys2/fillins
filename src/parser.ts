import pdf from "pdf-parse";

export interface ClaimData {
    operatingCode: string;
    fee: string;
    patientPortion: string;
}

export async function extractClaimData(pdfData: ArrayBuffer): Promise<ClaimData[]> {
    const data = await pdf(pdfData);
    const text = data.text;

    console.log("Extracted PDF Text:", text);

    //const claims: ClaimData[] = [];

    return [];
}