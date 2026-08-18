import type { Metadata } from "next";
import { LegalPage, LegalSection } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Términos de uso | noren",
  description: "Términos de uso del sitio web de noren.",
};

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Términos de uso"
      intro="Estos términos regulan el acceso y uso de este sitio web. Al navegarlo o contactarnos a través de sus enlaces, aceptas utilizarlos de forma lícita y respetuosa."
    >
      <LegalSection title="Propósito del sitio">
        <p>
          Este sitio presenta los servicios, el proceso de trabajo y ejemplos de proyectos de noren. La información tiene carácter general y no constituye una oferta vinculante ni asesoramiento profesional específico.
        </p>
      </LegalSection>
      <LegalSection title="Cotizaciones y contratación">
        <p>
          Cada proyecto se evalúa de forma individual. Cualquier alcance, precio, plazo, entregable, soporte o condición aplicable será definido en una propuesta y, cuando corresponda, en un acuerdo escrito independiente.
        </p>
      </LegalSection>
      <LegalSection title="Propiedad intelectual">
        <p>
          El contenido de este sitio, incluidos textos, diseños, elementos visuales, marcas y código, pertenece a noren o a sus respectivos titulares. No puede reproducirse, modificarse o distribuirse sin autorización previa, salvo los usos permitidos por la ley.
        </p>
      </LegalSection>
      <LegalSection title="Enlaces externos">
        <p>
          El sitio puede incluir enlaces a proyectos o plataformas de terceros. noren no controla sus contenidos, disponibilidad ni políticas, por lo que el acceso a ellos es responsabilidad de la persona usuaria.
        </p>
      </LegalSection>
      <LegalSection title="Cambios y contacto">
        <p>
          Podemos actualizar estos términos para reflejar cambios en el sitio o en nuestra forma de operar. Si tienes preguntas, contáctanos por WhatsApp al +506 8505 5556.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
