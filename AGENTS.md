<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep shared AUREX navigation, footer and language state in the root shell; every requested public page owns its content and metadata so deep links remain independent.
- Keep trade inquiries browser-only with schema validation and explicit WhatsApp handoff; only WhatsApp sends the message, so never imply website submission or delivery.
- Keep industry resource data and business contact actions centralized; authoritative external publications are linked, not misrepresented as live AUREX pricing.
- Use progressive IntersectionObserver motion with visible no-JavaScript content and reduced-motion support; animation must never prevent access to content.
- Use semantic global style tokens and shared presentation components for the corporate design so brand values can change consistently.
- Prebundle the shared Button's Radix Slot dependency in Vite so initial preview navigation cannot trigger late optimization and mixed React module identities.
