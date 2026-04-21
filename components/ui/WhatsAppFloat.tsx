import { buildWhatsAppUrl, WHATSAPP_DEFAULT_MESSAGE } from '@/lib/data'
import TrackedLink from '@/components/ui/TrackedLink'

export default function WhatsAppFloat() {
  const url = buildWhatsAppUrl(WHATSAPP_DEFAULT_MESSAGE)

  return (
    <TrackedLink
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      eventName="whatsapp_click"
      eventParams={{ button_location: 'float_button' }}
      aria-label="Falar pelo WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 hover:bg-[#1ebe5b] transition-all duration-200 active:scale-95"
    >
      <WhatsAppIcon />
    </TrackedLink>
  )
}

function WhatsAppIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.556 4.121 1.527 5.853L0 24l6.335-1.652A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.894a9.878 9.878 0 01-5.032-1.374l-.36-.214-3.732.975.998-3.648-.235-.374A9.867 9.867 0 012.106 12C2.106 6.57 6.57 2.106 12 2.106S21.894 6.57 21.894 12 17.43 21.894 12 21.894z"/>
    </svg>
  )
}
