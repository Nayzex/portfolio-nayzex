export default async function TestPage({ 
  params 
}: { 
  params: Promise<{ locale: string }> 
}) {
  const { locale } = await params;
  
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Test Page</h1>
      <p>Locale: {locale}</p>
      <p>This is a simple test page to verify Next.js routing works.</p>
    </div>
  );
}
