import { z } from 'zod';
export const inquirySchema=z.object({
 name:z.string().trim().min(2,'Enter your full name.').max(100),
 company:z.string().trim().min(2,'Enter your company name.').max(150),
 email:z.string().trim().email('Enter a valid business email.').max(254),
 commodity:z.enum(['Gold doré','Refined bullion','Rough diamonds','Polished diamonds']),
 volume:z.string().trim().min(1,'Enter an estimated volume.').max(100),
 destination:z.string().trim().min(2,'Enter a delivery destination.').max(150),
 message:z.string().trim().max(2000),
 consent:z.literal(true,{errorMap:()=>({message:'Please accept the inquiry terms.'})}),
});
export type InquiryData=z.infer<typeof inquirySchema>;
export function inquiryText(data:InquiryData){return `AUREX GLOBAL MINERALS\nInstitutional trade inquiry\n\nName: ${data.name}\nCompany: ${data.company}\nBusiness email: ${data.email}\nCommodity: ${data.commodity}\nEstimated volume: ${data.volume}\nDestination: ${data.destination}\nRequirements: ${data.message||'To be discussed'}\n\nI acknowledge that transactions are subject to counterparty review and a signed agreement.`;}