import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="bg-white">
      <section className="container mx-auto px-4 py-12 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-primary">
              Get Money in Minutes!
            </h1>
            <p className="text-lg text-gray-600">
              Access quick and affordable finance to fuel your hustle or attend
              to urgent needs. Join Nigeria's 1st Credit Membership.
            </p>
            <Button
              size="lg"
              className="text-lg bg-primary hover:bg-primary/90"
            >
              Create your Account
            </Button>
            <p className="text-sm text-gray-600">
              Grow as high as you need from ₦5,000 upwards
            </p>
          </div>
          <div className="">
            <Image
              src="/loan.svg"
              alt="Mobile app interface"
              width={400}
              height={400}
              className="w-full"
              priority
            />
          </div>
        </div>
      </section>
    </main>
  );
}
