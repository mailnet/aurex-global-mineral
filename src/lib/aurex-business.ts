export const business = {
  phone: '+44 7830 757297',
  phoneLink: 'tel:+447830757297',
  whatsapp: 'https://wa.me/447830757297',
  hours: 'Available 24 hours · Every day',
};
export const resources = [
  {category:'Market research',title:'Gold market intelligence',body:'Explore price data, demand trends and research from the World Gold Council. Review the publication date and methodology before using any market figure.',source:'World Gold Council',url:'https://www.gold.org/goldhub',tag:'Gold & macroeconomics'},
  {category:'Responsible sourcing',title:'The responsible gold framework',body:'Understand LBMA responsible sourcing guidance, including supply-chain risk assessment, ongoing monitoring and independent assurance. Guidance is not evidence of a supplier’s accreditation.',source:'LBMA',url:'https://www.lbma.org.uk/responsible-sourcing/guidance-documents',tag:'Due diligence'},
  {category:'Diamond verification',title:'Check a diamond grading report',body:'Compare the report number, measurements and grading details against GIA’s report records. A report check does not replace physical inspection or prove ownership.',source:'GIA',url:'https://www.gia.edu/report-check-landing',tag:'Grading & identity'},
  {category:'Responsible sourcing',title:'Rough diamonds across borders',body:'Review the Kimberley Process requirements for rough diamond shipments. Confirm participant status, certificates and local import/export rules for the actual route.',source:'Kimberley Process',url:'https://www.kimberleyprocess.com/information-for-business',tag:'Cross-border trade'},
  {category:'Custody & logistics',title:'Secure valuables logistics',body:'Study the operational scope of specialist secure transport, vaulting and customs services. Verify each appointed provider, insurance contract and custody obligation independently.',source:'Brink’s',url:'https://us.brinks.com/secure-valuables-logistics',tag:'Transport & custody'},
  {category:'Custody & logistics',title:'International precious cargo handling',body:'Explore specialist logistics and secure storage considerations for precious cargo. Provider capabilities and local availability must be confirmed for each transaction.',source:'Malca-Amit',url:'https://www.malca-amit.com/',tag:'Global operations'},
] as const;
export function downloadText(filename:string,text:string){
  const url=URL.createObjectURL(new Blob([text],{type:'text/plain;charset=utf-8'}));
  const link=document.createElement('a');link.href=url;link.download=filename;link.click();URL.revokeObjectURL(url);
}