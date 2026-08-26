/**
 * JsonLd — Server Component that injects a JSON-LD <script> into the page.
 * Usage: <JsonLd data={mySchema} />
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: controlled server-side JSON-LD, never user input
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
