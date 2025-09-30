export default async function DebugPage({ 
  params 
}: { 
  params: Promise<{ locale: string }> 
}) {
  const { locale } = await params;
  
  return (
    <div style={{ padding: '2rem', backgroundColor: 'white', color: 'black' }}>
      <h1>Debug Page</h1>
      <p><strong>Locale received:</strong> "{locale}"</p>
      <p><strong>Locale type:</strong> {typeof locale}</p>
      <p><strong>Params stringified:</strong> {JSON.stringify(await params)}</p>
      <p>This page bypasses next-intl to test basic Next.js routing.</p>
    </div>
  );
}
