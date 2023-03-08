import { useRouter } from 'next/router';

export default function Product() {
  const { query } = useRouter();

  return (
    <div>
      <h1>Product Page</h1>
      <p>
        Product: {JSON.stringify(query)}
      </p>
    </div>
  );
}