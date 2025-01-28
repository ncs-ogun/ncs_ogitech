import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Users, Zap, Coffee, BookOpen, Briefcase } from "lucide-react";

export default function CareersPage() {
  const benefits = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Health Insurance",
      description: "Comprehensive health coverage for you and your family",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Collaborative Environment",
      description: "Work with talented individuals and grow together",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Fast-paced Growth",
      description: "Rapid career progression opportunities",
    },
    {
      icon: <Coffee className="w-6 h-6" />,
      title: "Work-Life Balance",
      description: "Flexible working hours and remote work options",
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Learning & Development",
      description: "Continuous learning with sponsored courses and workshops",
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Competitive Salary",
      description: "Above-market compensation packages",
    },
  ];

  const openPositions = [
    {
      title: "Senior Software Engineer",
      department: "Engineering",
      location: "Lagos, Nigeria",
      type: "Full-time",
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "Remote",
      type: "Full-time",
    },
    {
      title: "Customer Success Specialist",
      department: "Customer Support",
      location: "Abuja, Nigeria",
      type: "Full-time",
    },
    {
      title: "Data Analyst",
      department: "Analytics",
      location: "Lagos, Nigeria",
      type: "Full-time",
    },
    {
      title: "UX/UI Designer",
      department: "Design",
      location: "Remote",
      type: "Contract",
    },
    {
      title: "Financial Advisor",
      department: "Finance",
      location: "Port Harcourt, Nigeria",
      type: "Part-time",
    },
  ];

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-primary text-white py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Join Our Mission to Revolutionize Finance
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8">
              At Ogitech Loans, we're building the future of financial services.
              Join our team and make a real impact on people's lives.
            </p>
            <Button variant="secondary" size="lg">
              View Open Positions
            </Button>
          </div>
        </div>
        <div className="absolute right-0 top-0 w-1/2 h-full">
          <Image
            src="/placeholder.svg?height=600&width=800"
            alt="Team collaboration"
            fill
            className="object-cover opacity-20"
          />
        </div>
      </section>

      {/* Our Culture Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
            Our Culture
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-600 mb-6">
                At Ogitech Loans, we foster a culture of innovation,
                collaboration, and continuous learning. We believe in empowering
                our employees to take ownership of their work and make a real
                difference in the lives of our customers.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our diverse team brings together talent from various
                backgrounds, united by a common goal: to make financial services
                accessible to all Nigerians.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-gray-600">
                    Inclusive and diverse workplace
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-gray-600">
                    Focus on personal and professional growth
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-gray-600">
                    Commitment to work-life balance
                  </span>
                </li>
              </ul>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <Image
                src="/team.jpeg"
                alt="Ogitech Loans team culture"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-blue-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
            Why Work With Us
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="mb-4 text-primary">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
            Open Positions
          </h2>
          <div className="grid gap-6">
            {openPositions.map((position, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{position.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">{position.department}</Badge>
                    <Badge variant="outline">{position.location}</Badge>
                    <Badge>{position.type}</Badge>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Apply Now</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Don't See a Perfect Fit?
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals to join our team. If
            you're passionate about fintech and want to make a difference, we'd
            love to hear from you.
          </p>
          <Button variant="secondary" size="lg">
            Send Us Your Resume
          </Button>
        </div>
      </section>
    </main>
  );
}
