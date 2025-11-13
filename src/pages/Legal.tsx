'use client';

import { motion } from 'motion/react';
import { FileText, Shield, AlertCircle } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';

export default function Legal() {
  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-[#0A0A0A] min-h-screen">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-[#0EA5FF]/20 border border-[#00E5FF] rounded-full text-sm text-[#00E5FF] mb-4">
            Legal Information
          </span>
          <h1 className="text-4xl md:text-6xl text-[#E6F6FF] mb-4">Terms & Policies</h1>
          <p className="text-lg text-[#BFC6CC] max-w-2xl mx-auto">
            Please review our terms, conditions, and policies
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Tabs defaultValue="terms" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-[#16181C] border border-[#0EA5FF]/20 mb-8">
              <TabsTrigger
                value="terms"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#0EA5FF] data-[state=active]:to-[#00E5FF] data-[state=active]:text-[#0A0A0A]"
              >
                <FileText className="w-4 h-4 mr-2" />
                Terms & Conditions
              </TabsTrigger>
              <TabsTrigger
                value="privacy"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#0EA5FF] data-[state=active]:to-[#00E5FF] data-[state=active]:text-[#0A0A0A]"
              >
                <Shield className="w-4 h-4 mr-2" />
                Privacy Policy
              </TabsTrigger>
              <TabsTrigger
                value="warranty"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#0EA5FF] data-[state=active]:to-[#00E5FF] data-[state=active]:text-[#0A0A0A]"
              >
                <AlertCircle className="w-4 h-4 mr-2" />
                Warranty
              </TabsTrigger>
            </TabsList>

            {/* Terms & Conditions */}
            <TabsContent value="terms" className="space-y-6">
              <div className="bg-[#16181C] rounded-2xl p-8 border border-[#0EA5FF]/20">
                <h2 className="text-2xl text-[#E6F6FF] mb-6">Terms & Conditions</h2>
                <div className="space-y-4 text-[#BFC6CC]">
                  <div>
                    <h3 className="text-lg text-[#E6F6FF] mb-2">1. Introduction</h3>
                    <p>
                      These terms and conditions govern your use of ZAATARI EV Motors' website and services.
                      By accessing our website or purchasing our products, you accept these terms in full.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg text-[#E6F6FF] mb-2">2. Vehicle Sales</h3>
                    <p>
                      All vehicle sales are subject to availability. Prices displayed on our website are
                      in UAE Dirhams (AED) and include VAT unless otherwise stated. We reserve the right
                      to modify prices without prior notice. Final pricing will be confirmed at the time
                      of purchase.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg text-[#E6F6FF] mb-2">3. Reservations & Deposits</h3>
                    <p>
                      Vehicle reservations require a refundable deposit of AED 5,000. Deposits are refundable
                      within 14 days if the sale is not completed, subject to the vehicle being available
                      and in original condition. Custom orders may have different cancellation terms.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg text-[#E6F6FF] mb-2">4. Financing</h3>
                    <p>
                      Financing is subject to credit approval by our partnered financial institutions.
                      Interest rates and terms are determined by the lender. ZAATARI EV Motors acts as
                      an intermediary and does not guarantee financing approval.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg text-[#E6F6FF] mb-2">5. Trade-Ins</h3>
                    <p>
                      Trade-in values are estimates based on vehicle condition and market rates.
                      Final trade-in value is determined upon physical inspection. Trade-in offers
                      are valid for 7 days from the date of quotation.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg text-[#E6F6FF] mb-2">6. Delivery</h3>
                    <p>
                      Delivery timelines are estimates and may vary based on availability and
                      customization requirements. We will notify you of any significant delays.
                      Title and risk pass to the buyer upon delivery.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg text-[#E6F6FF] mb-2">7. Limitation of Liability</h3>
                    <p>
                      ZAATARI EV Motors shall not be liable for any indirect, incidental, or
                      consequential damages arising from the use of our vehicles or services,
                      except as required by UAE law.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Privacy Policy */}
            <TabsContent value="privacy" className="space-y-6">
              <div className="bg-[#16181C] rounded-2xl p-8 border border-[#0EA5FF]/20">
                <h2 className="text-2xl text-[#E6F6FF] mb-6">Privacy Policy</h2>
                <div className="space-y-4 text-[#BFC6CC]">
                  <div>
                    <h3 className="text-lg text-[#E6F6FF] mb-2">1. Information We Collect</h3>
                    <p>
                      We collect personal information including name, contact details, Emirates ID,
                      driving license information, and financial data for financing purposes. We also
                      collect usage data when you visit our website.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg text-[#E6F6FF] mb-2">2. How We Use Your Information</h3>
                    <p>
                      Your information is used to process vehicle sales, arrange financing, provide
                      customer service, send updates about your purchase, and improve our services.
                      We may also use it for marketing purposes with your consent.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg text-[#E6F6FF] mb-2">3. Information Sharing</h3>
                    <p>
                      We share your information with financial institutions for financing, government
                      authorities for registration, and service providers who assist in our operations.
                      We do not sell your personal information to third parties.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg text-[#E6F6FF] mb-2">4. Data Security</h3>
                    <p>
                      We implement industry-standard security measures to protect your personal
                      information. However, no method of transmission over the internet is 100% secure.
                      We cannot guarantee absolute security of your data.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg text-[#E6F6FF] mb-2">5. Your Rights</h3>
                    <p>
                      You have the right to access, correct, or delete your personal information.
                      You may also opt-out of marketing communications at any time. Contact us at
                      privacy@zaatariev.ae to exercise these rights.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg text-[#E6F6FF] mb-2">6. Cookies</h3>
                    <p>
                      Our website uses cookies to improve user experience and analyze website traffic.
                      You can control cookie settings through your browser preferences.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg text-[#E6F6FF] mb-2">7. Changes to Privacy Policy</h3>
                    <p>
                      We may update this privacy policy from time to time. We will notify you of any
                      material changes by posting the new policy on our website. Continued use of our
                      services constitutes acceptance of the updated policy.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Warranty */}
            <TabsContent value="warranty" className="space-y-6">
              <div className="bg-[#16181C] rounded-2xl p-8 border border-[#0EA5FF]/20">
                <h2 className="text-2xl text-[#E6F6FF] mb-6">Warranty Information</h2>
                <div className="space-y-4 text-[#BFC6CC]">
                  <div>
                    <h3 className="text-lg text-[#E6F6FF] mb-2">1. Comprehensive Warranty</h3>
                    <p>
                      All BYD Leopard vehicles come with an 8-year or 150,000 km comprehensive warranty
                      (whichever comes first), covering the battery, electric motor, and major components.
                      This warranty is transferable to subsequent owners.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg text-[#E6F6FF] mb-2">2. Battery Warranty</h3>
                    <p>
                      The battery is warranted to retain at least 80% of its original capacity for
                      8 years or 150,000 km. If battery capacity falls below this threshold under
                      normal use, we will replace or repair the battery at no cost.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg text-[#E6F6FF] mb-2">3. What's Covered</h3>
                    <p>
                      The warranty covers defects in materials and workmanship, including electric
                      motor, battery pack, power electronics, drivetrain, suspension, steering,
                      brakes, and electrical systems. All repairs use genuine BYD parts.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg text-[#E6F6FF] mb-2">4. What's Not Covered</h3>
                    <p>
                      Normal wear and tear, consumables (tires, brake pads, wiper blades), damage
                      from accidents or misuse, modifications not approved by ZAATARI EV Motors,
                      and failure to follow maintenance schedules are not covered.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg text-[#E6F6FF] mb-2">5. Maintenance Requirements</h3>
                    <p>
                      To maintain warranty coverage, you must follow the recommended maintenance
                      schedule and have all services performed at authorized ZAATARI service centers.
                      Keep all service records as proof of maintenance.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg text-[#E6F6FF] mb-2">6. Extended Warranty</h3>
                    <p>
                      Extended warranty packages are available for purchase, extending coverage up to
                      10 years or 200,000 km. Contact our service team for pricing and terms.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg text-[#E6F6FF] mb-2">7. Claim Process</h3>
                    <p>
                      To make a warranty claim, contact any authorized ZAATARI service center.
                      Bring your vehicle with service records for inspection. Approved claims are
                      processed within 24-48 hours, with most repairs completed within 3-5 business days.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 bg-gradient-to-br from-[#0EA5FF]/10 to-[#00E5FF]/5 rounded-2xl p-8 border border-[#0EA5FF]/30 text-center"
        >
          <h3 className="text-xl text-[#E6F6FF] mb-4">Questions About Our Policies?</h3>
          <p className="text-[#BFC6CC] mb-6">
            Contact our legal team at legal@zaatariev.ae or call +971 50 123 4567
          </p>
          <p className="text-sm text-[#BFC6CC]">
            Last updated: November 12, 2025
          </p>
        </motion.div>
      </div>
    </div>
  );
}
