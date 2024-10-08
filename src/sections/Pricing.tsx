const pricingTiers = [
  {
    title: "Free",
    monthlyPrice: 0,
    buttonText: "Get started for free",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "2GB storage",
      "Integrations",
      "Basic support",
    ],
  },
  {
    title: "Pro",
    monthlyPrice: 9,
    buttonText: "Sign up now",
    popular: true,
    inverse: true,
    features: [
      "Up to 50 project members",
      "Unlimited tasks and projects",
      "50GB storage",
      "Integrations",
      "Priority support",
      "Advanced support",
      "Export support",
    ],
  },
  {
    title: "Business",
    monthlyPrice: 19,
    buttonText: "Sign up now",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "200GB storage",
      "Integrations",
      "Dedicated account manager",
      "Custom fields",
      "Advanced analytics",
      "Export capabilities",
      "API access",
      "Advanced security features",
    ],
  },
];

export const Pricing = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <h2 className="section-title">Pricing</h2>
        <p className="section-description mt-5">Free forever. Upgrade for unlimited tasks, better security, and exclusive features.

        </p>
        <div>
          {pricingTiers.map(({ title, monthlyPrice, buttonText, popular, inverse, features }) => (
          <div>
            <h3>{title}</h3>
            <div>
              <span>${monthlyPrice}</span>
              <span>/month</span>
            </div>
            <button>{buttonText}</button>
          </div>
          ))}
        </div>
      </div>
    </section>
  );
};
