import Link from "next/link";
export default function Pricing() {
  return (
    <div>
      <h2>This is the pricing page</h2>

      <Link href="/stripe">Checkout to stripe page</Link>
    </div>
  );
}
