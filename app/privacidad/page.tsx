import type { Metadata } from "next";
import { LegalPage, LegalSection } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Política de privacidad | noren",
  description: "Conoce cómo noren trata los datos personales compartidos a través de su sitio web.",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Política de privacidad"
      intro="En noren respetamos la privacidad de las personas que nos contactan. Esta política explica qué información recibimos, para qué la utilizamos y cómo puedes ejercer control sobre ella."
    >
      <LegalSection title="Información que podemos recibir">
        <p>
          Si decides escribirnos por WhatsApp, podemos recibir los datos que compartas voluntariamente, como tu nombre, número de teléfono, empresa, necesidad del proyecto y cualquier información incluida en tu mensaje.
        </p>
      </LegalSection>
      <LegalSection title="Finalidad del tratamiento">
        <p>
          Usamos esta información únicamente para responder tu consulta, entender tu proyecto, preparar una propuesta cuando corresponda y mantener la comunicación relacionada con el servicio solicitado.
        </p>
      </LegalSection>
      <LegalSection title="Compartición y conservación">
        <p>
          No vendemos tus datos personales. Solo los compartiremos cuando sea necesario para atender tu solicitud, cuando exista una obligación legal o con proveedores tecnológicos indispensables para la comunicación y operación del servicio.
        </p>
        <p>
          Conservamos la información durante el tiempo razonablemente necesario para atender la consulta, gestionar una relación comercial o cumplir obligaciones aplicables.
        </p>
      </LegalSection>
      <LegalSection title="Servicios de terceros">
        <p>
          Al seleccionar un enlace de WhatsApp, serás dirigido a una plataforma de terceros. El tratamiento de datos realizado por esa plataforma se rige por sus propias políticas y condiciones.
        </p>
      </LegalSection>
      <LegalSection title="Tus derechos y contacto">
        <p>
          Puedes solicitar acceso, corrección, actualización o eliminación de los datos que nos hayas compartido, así como retirar tu consentimiento cuando corresponda. Para hacerlo, escríbenos por WhatsApp al +506 8505 5556 e indica que tu consulta es sobre privacidad.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
