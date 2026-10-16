import { describe, expect, it } from 'vitest';
import { inquirySchema, inquiryText } from '@/lib/inquiry-schema';
import { business } from '@/lib/aurex-business';
const valid={name:'Buyer Name',company:'Trading Company',email:'buyer@example.com',commodity:'Gold doré',volume:'10 kg',destination:'Dubai, UAE',message:'Independent assay required',consent:true};
describe('Trade inquiry',()=>{
 it('validates a complete business inquiry',()=>{expect(inquirySchema.safeParse(valid).success).toBe(true);});
 it.each([{email:'invalid'},{consent:false},{destination:''},{volume:''},{message:'a'.repeat(2001)}])('rejects invalid requirements %s',change=>{expect(inquirySchema.safeParse({...valid,...change}).success).toBe(false);});
 it('prepares a correctly encoded WhatsApp message for the supplied number',()=>{const data=inquirySchema.parse({...valid,message:'Gold & diamonds + inspection'});const url=new URL(`${business.whatsapp}?text=${encodeURIComponent(inquiryText(data))}`);expect(url.pathname).toBe('/447830757297');expect(url.searchParams.get('text')).toContain('Gold & diamonds + inspection');expect(url.searchParams.get('text')).toContain('Destination: Dubai, UAE');});
});