import { useEffect } from 'react';
import { useRouterState } from '@tanstack/react-router';
import { ArrowUp, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { business } from '@/lib/aurex-business';

export function SiteMotion(){
 const path=useRouterState({select:s=>s.location.pathname});
 useEffect(()=>{
  const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const targets=document.querySelectorAll('.section-heading,.info-grid article,.commodity-card,.brand-story,.office-grid article,.resource-card,.editorial-split,.inquiry-layout');
  if(reduced)return;
  const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target);}});},{threshold:.08});
  targets.forEach((target,i)=>{target.classList.add('reveal');target.setAttribute('data-stagger',String(i%3));observer.observe(target);});
  return()=>{observer.disconnect();targets.forEach(target=>target.classList.remove('reveal'));};
 },[path]);
 useEffect(()=>{
  let queued=false;
  const update=()=>{const height=document.documentElement.scrollHeight-window.innerHeight;document.documentElement.style.setProperty('--scroll-progress',String(height>0?window.scrollY/height:0));document.documentElement.classList.toggle('page-scrolled',window.scrollY>400);queued=false;};
  const scroll=()=>{if(!queued){queued=true;requestAnimationFrame(update);}};
  update();window.addEventListener('scroll',scroll,{passive:true});return()=>window.removeEventListener('scroll',scroll);
 },[path]);
 return <><div className="reading-progress" aria-hidden="true"/><div className="contact-dock"><Button asChild className="whatsapp-dock" aria-label="Contact AUREX on WhatsApp" title="Contact the trade desk"><a href={business.whatsapp} target="_blank" rel="noopener noreferrer"><MessageCircle/><span>Speak to AUREX</span></a></Button><Button variant="outline" size="icon" className="back-top" aria-label="Back to top" title="Back to top" onClick={()=>window.scrollTo({top:0,behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'})}><ArrowUp/></Button></div></>;
}