import React from "react";
import Link from "next/link";
import SiteShell, { Header, Footer } from "../components/SiteShell";

export const metadata = {
  title: "Shipping Policy - Bhuvih HR Solutions",
};

export default function ShippingPolicyPage() {
  return (
    <SiteShell>
      <main className="flex-1 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-8">
            <Link href="/" className="inline-flex items-center text-orange-600 hover:text-orange-700 font-semibold mb-4 transition-colors duration-300">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Home
            </Link>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Shipping &amp; Delivery Policy</h1>
            <div className="w-24 h-1.5 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 mx-auto rounded-full"></div>
          </div>

          {/* Content */}
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-12 mb-8">
            <div className="prose prose-lg max-w-none">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Scope &amp; Applicability</h2>
                  <p className="text-gray-700 leading-relaxed">This Shipping &amp; Delivery Policy governs delivery of any physical materials, training kits, printed certificates, or other tangible goods that Bhuvih HR Solutions Pvt Ltd may supply in connection with our services, training programs, or products. For digital services, course access, or downloadable materials, delivery is electronic unless otherwise specified.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Delivery Times &amp; Methods</h2>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li>Physical deliveries are dispatched within 3–7 business days from order confirmation, unless a different timeframe is specified.</li>
                    <li>Delivery timelines are estimates and may vary due to courier availability, location, customs (for international shipments), or force majeure events.</li>
                    <li>We use trusted third-party courier partners. Tracking information will be provided where available.</li>
                    <li>For digital goods and training access, credentials or download links are sent to the registered email address within 24 hours of purchase or enrolment, unless stated otherwise.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Shipping Costs</h2>
                  <p className="text-gray-700 mb-3">Applicable shipping charges (if any) are clearly displayed at checkout. International shipments may incur customs, import duties, or taxes which are the responsibility of the recipient unless explicitly stated otherwise.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Incorrect / Damaged Deliveries</h2>
                  <p className="text-gray-700">Inspect physical deliveries upon receipt. Report missing, damaged, or incorrect items to us at <strong>bhuvihhr@zohomail.in</strong> within 48 hours with photos and the courier's tracking details. We will coordinate with the courier to arrange a replacement, refund, or repair as appropriate.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Lost or Delayed Shipments</h2>
                  <p className="text-gray-700">If a tracked shipment shows unexpected delays or is marked delivered but not received, contact us within 7 days and we will investigate with the carrier. For lost shipments we may provide a replacement or refund depending on the circumstances and available proof from the carrier.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Liability</h2>
                  <p className="text-gray-700">Bhuvih HR Solutions is not liable for delays caused by third-party couriers, force majeure, customs clearances, or incorrect recipient information supplied at checkout. Our liability for physical goods is limited to the purchase price of the item(s) and any expressly agreed shipping charges.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact</h2>
                  <p className="text-gray-700">For shipping queries, please contact: <strong>bhuvihhr@zohomail.in</strong> or call +91 9866875709. Include your order number and any relevant tracking details to help us respond quickly.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Back to Home Button */}
          <div className="text-center">
            <Link href="/" className="inline-flex items-center bg-gradient-to-r from-orange-600 to-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Home
            </Link>
          </div>
        </div>
      </main>
    </SiteShell>
  );
}
