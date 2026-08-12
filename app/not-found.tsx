import SiteHeader from "@/app/components/site-header";
import SiteFooter from "@/app/components/site-footer";
import NotFoundContent from "@/app/components/not-found-content";
import ChatAssistant from "@/app/components/chat-assistant";

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="pt-20">
        <NotFoundContent />
      </main>
      <SiteFooter />
      <ChatAssistant />
    </>
  );
}
