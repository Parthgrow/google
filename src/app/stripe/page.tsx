import Link from "next/link";
export default function Stripe() {
  return (
    <div>
      <h2>This is the stripe page</h2>
      <Link href="/thankyou">Checkout Page</Link>
    </div>
  );
}
