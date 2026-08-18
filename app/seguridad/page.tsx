import type { Metadata } from "next";
import { LegalPage, LegalSection } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Seguridad | noren",
  description: "Información sobre el enfoque de seguridad de noren para este sitio web.",
};

export default function SecurityPage() {
  return (
    <LegalPage
      eyebrow="Confianza"
      title="Seguridad"
      intro="La seguridad es parte del trabajo de noren. Aplicamos medidas razonables para proteger este sitio y la información que se comparte durante una consulta."
    >
      <LegalSection title="Nuestro enfoque">
        <p>
          Buscamos reducir la exposición de información y limitar el acceso a los datos de una consulta a las personas que necesitan atenderla. Revisamos las herramientas utilizadas según las necesidades de cada proyecto.
        </p>
      </LegalSection>
      <LegalSection title="Comunicación">
        <p>
          Las consultas iniciales se gestionan mediante WhatsApp. No envíes por este sitio o por mensajería información especialmente sensible, contraseñas, datos de pago o credenciales, salvo que exista un canal acordado específicamente para ello.
        </p>
      </LegalSection>
      <LegalSection title="Responsabilidad compartida">
        <p>
          Ningún medio digital puede garantizar seguridad absoluta. Te recomendamos mantener tus dispositivos actualizados, verificar el destinatario antes de compartir información y comunicarte por los canales oficiales publicados en este sitio.
        </p>
      </LegalSection>
      <LegalSection title="Reporte de vulnerabilidades">
        <p>
          Si detectas un posible problema de seguridad relacionado con este sitio, repórtalo de forma responsable por WhatsApp al +506 8505 5556. Incluye una descripción clara del hallazgo y evita acceder, modificar o divulgar información de terceros.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
