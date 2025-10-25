interface PlaceholderPageProps {
  title: string;
}

export default function PlaceholderPage({ title }: PlaceholderPageProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="mt-4">This is a placeholder page for {title}. Content will be added here later.</p>
    </div>
  );
}
