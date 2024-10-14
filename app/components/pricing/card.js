import { FaCheck } from "react-icons/fa";

const PricingCard = ({ name, price, features, buttonText, highlighted }) => {
  return (
    <div
      className={`flex flex-col rounded-lg shadow-lg p-6 transition-transform duration-300 transform ${
        highlighted
          ? "border-4 border-darkCharcoal bg-lightPeach"
          : "bg-white hover:bg-gray-100" // Slight hover effect
      }`}
    >
      <h3 className="text-2xl font-semibold mb-4 text-darkCharcoal">{name}</h3>
      <p className="text-5xl font-bold mb-4 text-darkCharcoal">
        {price}
        <span className="text-xl font-medium">/month</span>
      </p>
      <ul className="mb-6 space-y-2 text-left">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-center text-darkCharcoal">
            <FaCheck className="text-green-500 mr-2" aria-hidden="true" />
            <span className="text-darkCharcoal">{feature}</span>{" "}
            {/* Ensure feature text is dark */}
          </li>
        ))}
      </ul>
      <button
        className={`mt-auto py-2 px-4 rounded-lg font-semibold transition-colors duration-300 ${
          highlighted
            ? "bg-darkCharcoal text-lightPeach hover:bg-lightPeach hover:text-darkCharcoal border border-darkCharcoal"
            : "bg-darkCharcoal text-lightPeach hover:bg-lightPeach hover:text-darkCharcoal border border-darkCharcoal"
        }`}
        aria-label={`Choose the ${name} plan`}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default PricingCard;
