"use client";
import Card from "@/app/components/pricing/card";
import Header from "@/app/components/pricing/header";

const PricingPage = () => {
  const plans = [
    {
      name: "Basic",
      price: "$19",
      features: ["Access to basic features", "Email support", "Single user"],
      buttonText: "Get Started",
      highlighted: false,
    },
    {
      name: "Standard",
      price: "$49",
      features: [
        "All Basic features",
        "Priority email support",
        "Up to 5 users",
        "Advanced analytics",
      ],
      buttonText: "Choose Plan",
      highlighted: true, // Highlight this plan
    },
    {
      name: "Premium",
      price: "$99",
      features: [
        "All Standard features",
        "24/7 Phone support",
        "Unlimited users",
        "Custom integrations",
        "Dedicated account manager",
      ],
      buttonText: "Go Premium",
      highlighted: false,
    },
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-[#FBE4CC] to-[#1B262C] text-[#1B262C] py-12 px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-lg mb-12  ">
            Choose a plan that fits your needs. Upgrade or downgrade at any
            time.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-1 md:grid-cols-3">
          {plans.map((plan, index) => (
            <Card
              key={index}
              name={plan.name}
              price={plan.price}
              features={plan.features}
              buttonText={plan.buttonText}
              highlighted={plan.highlighted}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default PricingPage;
