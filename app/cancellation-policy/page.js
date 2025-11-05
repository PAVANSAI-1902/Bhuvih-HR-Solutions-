import React from "react";
import Link from "next/link";
import SiteShell from "../components/SiteShell";

export const metadata = {
  title: "Cancellation & Refund Policy - Bhuvih HR Solutions",
};

export default function CancellationPolicyPage() {
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
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Cancellation &amp; Refund Policy</h1>
            <div className="w-24 h-1.5 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 mx-auto rounded-full"></div>
          </div>

          {/* Content */}
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-12 mb-8">
            <div className="prose prose-lg max-w-none">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Applicability</h2>
                  <p className="text-gray-700 leading-relaxed">This Cancellation &amp; Refund Policy applies to purchases of services, training program registrations, events, and any bundled offerings provided by Bhuvih HR Solutions Pvt Ltd. Specific course or service pages may include additional cancellation terms which take precedence if stated.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Cancellation by Customer</h2>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li>For training programs or events: cancellations requested more than 14 days before the start date are eligible for a full refund minus any non-refundable registration fees.</li>
                    <li>Cancellations between 7–14 days before the start date are eligible for a 50% refund.</li>
                    <li>Cancellations within 7 days of the start date are non-refundable, but registrations may be transferable or creditable toward a future session at our discretion.</li>
                    <li>For bespoke services or consulting engagements, any paid retainers or deposits are subject to the terms in the client agreement and are typically non-refundable after work has commenced.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Cancellation by Bhuvih HR</h2>
                  <p className="text-gray-700">If we cancel a course, event, or service for any reason, we will offer either a full refund, a credit toward another program, or an alternative date. We are not responsible for incidental costs (travel, accommodation) unless otherwise agreed in writing.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Refund Process</h2>
                  <p className="text-gray-700">Refunds are processed within 10–14 business days after the cancellation is approved. Refunds will be issued to the same payment method used for the purchase unless otherwise agreed.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Rescheduling &amp; Transfer</h2>
                  <p className="text-gray-700">Where possible, we allow rescheduling or transfer of registrations to future dates subject to availability and any price difference. Contact us at <strong>bhuvihhr@zohomail.in</strong> to request a transfer or reschedule.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Request</h2>
                  <p className="text-gray-700">To request a cancellation or refund, email <strong>bhuvihhr@zohomail.in</strong> with your order/registration number and reason. Include any supporting documents where relevant.</p>
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
