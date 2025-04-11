
import React, { useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowLeft } from 'lucide-react';

const PrivacyPolicy = () => {
  const { language } = useLanguage();
  
  useEffect(() => {
    document.title = language === 'en' ? "Privacy Policy" : "Privacybeleid";
    window.scrollTo(0, 0);
  }, [language]);

  return (
    <div className="min-h-screen bg-[#F5F5E9] text-[#0D503C] antialiased">
      <Navbar />
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <Link to="/" className="inline-flex items-center text-[#0D503C] hover:underline mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          {language === 'en' ? 'Back to Home' : 'Terug naar Home'}
        </Link>
        
        <h1 className="text-3xl font-bold mb-6">
          {language === 'en' ? 'Privacy Policy' : 'Privacybeleid'}
        </h1>
        
        <div className="prose prose-green max-w-none">
          {language === 'en' ? (
            <>
              <p>Last updated: April 11, 2025</p>
              
              <h2>1. Introduction</h2>
              <p>
                This Privacy Policy explains how we collect, use, store, protect, and share your personal information through our website and services. 
                It applies to all users of our website and describes how we handle your data in compliance with the General Data Protection Regulation (GDPR).
              </p>
              
              <h2>2. Information We Collect</h2>
              <p>We may collect the following types of information:</p>
              <ul>
                <li><strong>Personal Information:</strong> Name, email address, phone number, and company name when you contact us through our forms.</li>
                <li><strong>Usage Data:</strong> Information about how you interact with our website, including pages visited, time spent, and actions taken.</li>
                <li><strong>Cookies and Similar Technologies:</strong> We use cookies to enhance your browsing experience and collect information about how you use our website.</li>
              </ul>
              
              <h2>3. How We Use Your Information</h2>
              <p>We use your personal information for the following purposes:</p>
              <ul>
                <li>To provide and maintain our services</li>
                <li>To respond to your inquiries and provide customer support</li>
                <li>To send you information about our services, updates, and promotional offers (with your consent)</li>
                <li>To improve our website and services</li>
                <li>To comply with legal obligations</li>
              </ul>
              
              <h2>4. Cookie Policy</h2>
              <p>Our website uses cookies to enhance your browsing experience. We use the following types of cookies:</p>
              <ul>
                <li><strong>Necessary Cookies:</strong> Essential for the website to function properly.</li>
                <li><strong>Preference Cookies:</strong> Remember your preferences and settings.</li>
                <li><strong>Statistics Cookies:</strong> Collect anonymous information about how visitors use our website.</li>
                <li><strong>Marketing Cookies:</strong> Used to track visitors across websites to display relevant advertisements.</li>
              </ul>
              <p>You can manage your cookie preferences through our Cookie Banner or by changing your browser settings.</p>
              
              <h2>5. Data Sharing and Third Parties</h2>
              <p>We may share your personal information with:</p>
              <ul>
                <li>Service providers who help us operate our website and provide our services</li>
                <li>Legal authorities when required by law</li>
                <li>Third-party analytics services to help us understand how our website is used</li>
              </ul>
              <p>We do not sell your personal information to third parties.</p>
              
              <h2>6. Data Security</h2>
              <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, loss, or damage.</p>
              
              <h2>7. Your Rights</h2>
              <p>Under the GDPR, you have the following rights:</p>
              <ul>
                <li>Right of access to your personal data</li>
                <li>Right to rectification of inaccurate personal data</li>
                <li>Right to erasure ("right to be forgotten")</li>
                <li>Right to restriction of processing</li>
                <li>Right to data portability</li>
                <li>Right to object to processing</li>
                <li>Right not to be subject to automated decision-making</li>
              </ul>
              <p>To exercise any of these rights, please contact us at privacy@example.com.</p>
              
              <h2>8. Data Retention</h2>
              <p>We retain your personal information only for as long as necessary to fulfill the purposes for which it was collected, including legal, accounting, or reporting requirements.</p>
              
              <h2>9. Children's Privacy</h2>
              <p>Our website is not intended for children under 16 years of age. We do not knowingly collect personal information from children under 16.</p>
              
              <h2>10. Changes to This Privacy Policy</h2>
              <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.</p>
              
              <h2>11. Contact Us</h2>
              <p>If you have any questions about this Privacy Policy, please contact us at privacy@example.com.</p>
            </>
          ) : (
            <>
              <p>Laatst bijgewerkt: 11 april 2025</p>
              
              <h2>1. Inleiding</h2>
              <p>
                Dit Privacybeleid legt uit hoe wij uw persoonlijke gegevens verzamelen, gebruiken, opslaan, beschermen en delen via onze website en diensten.
                Het is van toepassing op alle gebruikers van onze website en beschrijft hoe wij met uw gegevens omgaan in overeenstemming met de Algemene Verordening Gegevensbescherming (AVG).
              </p>
              
              <h2>2. Informatie die wij verzamelen</h2>
              <p>Wij kunnen de volgende soorten informatie verzamelen:</p>
              <ul>
                <li><strong>Persoonlijke gegevens:</strong> Naam, e-mailadres, telefoonnummer en bedrijfsnaam wanneer u contact met ons opneemt via onze formulieren.</li>
                <li><strong>Gebruiksgegevens:</strong> Informatie over hoe u met onze website interacteert, inclusief bezochte pagina's, bestede tijd en ondernomen acties.</li>
                <li><strong>Cookies en vergelijkbare technologieën:</strong> We gebruiken cookies om uw browse-ervaring te verbeteren en informatie te verzamelen over hoe u onze website gebruikt.</li>
              </ul>
              
              <h2>3. Hoe wij uw informatie gebruiken</h2>
              <p>Wij gebruiken uw persoonlijke gegevens voor de volgende doeleinden:</p>
              <ul>
                <li>Om onze diensten te leveren en te onderhouden</li>
                <li>Om te reageren op uw vragen en klantenondersteuning te bieden</li>
                <li>Om u informatie te sturen over onze diensten, updates en promotionele aanbiedingen (met uw toestemming)</li>
                <li>Om onze website en diensten te verbeteren</li>
                <li>Om te voldoen aan wettelijke verplichtingen</li>
              </ul>
              
              <h2>4. Cookiebeleid</h2>
              <p>Onze website gebruikt cookies om uw browse-ervaring te verbeteren. We gebruiken de volgende soorten cookies:</p>
              <ul>
                <li><strong>Noodzakelijke cookies:</strong> Essentieel voor het goed functioneren van de website.</li>
                <li><strong>Voorkeurscookies:</strong> Onthouden uw voorkeuren en instellingen.</li>
                <li><strong>Statistische cookies:</strong> Verzamelen anonieme informatie over hoe bezoekers onze website gebruiken.</li>
                <li><strong>Marketingcookies:</strong> Worden gebruikt om bezoekers op verschillende websites te volgen om relevante advertenties weer te geven.</li>
              </ul>
              <p>U kunt uw cookievoorkeuren beheren via onze Cookie Banner of door uw browserinstellingen te wijzigen.</p>
              
              <h2>5. Gegevensdeling en derden</h2>
              <p>Wij kunnen uw persoonlijke gegevens delen met:</p>
              <ul>
                <li>Dienstverleners die ons helpen bij het exploiteren van onze website en het leveren van onze diensten</li>
                <li>Wettelijke autoriteiten wanneer dit wettelijk verplicht is</li>
                <li>Externe analysediensten om ons te helpen begrijpen hoe onze website wordt gebruikt</li>
              </ul>
              <p>Wij verkopen uw persoonlijke gegevens niet aan derden.</p>
              
              <h2>6. Gegevensbeveiliging</h2>
              <p>Wij implementeren passende technische en organisatorische maatregelen om uw persoonlijke gegevens te beschermen tegen ongeautoriseerde toegang, verlies of schade.</p>
              
              <h2>7. Uw rechten</h2>
              <p>Onder de AVG heeft u de volgende rechten:</p>
              <ul>
                <li>Recht op inzage in uw persoonlijke gegevens</li>
                <li>Recht op rectificatie van onjuiste persoonlijke gegevens</li>
                <li>Recht op wissing ("recht om vergeten te worden")</li>
                <li>Recht op beperking van verwerking</li>
                <li>Recht op gegevensoverdraagbaarheid</li>
                <li>Recht om bezwaar te maken tegen verwerking</li>
                <li>Recht om niet onderworpen te worden aan geautomatiseerde besluitvorming</li>
              </ul>
              <p>Om een van deze rechten uit te oefenen, kunt u contact met ons opnemen via privacy@voorbeeld.nl.</p>
              
              <h2>8. Gegevensbewaring</h2>
              <p>Wij bewaren uw persoonlijke gegevens alleen zo lang als nodig is om de doeleinden waarvoor deze zijn verzameld te vervullen, inclusief wettelijke, boekhoudkundige of rapportagevereisten.</p>
              
              <h2>9. Privacy van kinderen</h2>
              <p>Onze website is niet bedoeld voor kinderen jonger dan 16 jaar. Wij verzamelen niet bewust persoonlijke gegevens van kinderen jonger dan 16 jaar.</p>
              
              <h2>10. Wijzigingen in dit privacybeleid</h2>
              <p>Wij kunnen dit Privacybeleid van tijd tot tijd bijwerken. Wij zullen u op de hoogte stellen van eventuele wijzigingen door het nieuwe Privacybeleid op deze pagina te plaatsen en de datum van "Laatst bijgewerkt" bij te werken.</p>
              
              <h2>11. Contact met ons opnemen</h2>
              <p>Als u vragen heeft over dit Privacybeleid, kunt u contact met ons opnemen via privacy@voorbeeld.nl.</p>
            </>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
