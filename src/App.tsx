import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Cart from './components/Cart';
import type { CartItem, Product } from './types';
import Home from './pages/Home';
import OurStory from "./pages/OurStory";
import MissionPhilosophy from "./pages/MissionPhilosophy";
import Contact from "./pages/Contact";
import HerbalBlendsTeas from "./pages/HerbalBlendsTeas";
import OilsEssentialCarrier from "./pages/OilsEssentialCarrier";
import MassageAromatherapyKits from "./pages/MassageAromatherapyKits";
import DIYKits from "./pages/DIYKits";
import DigitalProductsEbooksPDFs from "./pages/DigitalProductsEbooksPDFs";
import EuropeanFolkHerbalism from "./pages/EuropeanFolkHerbalism";
import ChineseMedicineTCM from "./pages/ChineseMedicineTCM";
import IndigenousAmerican from "./pages/IndigenousAmerican";
import MiddleEasternHerbalism from "./pages/MiddleEasternHerbalism";
import OriginsAndCulturalLineage from "./pages/OriginsAndCulturalLineage";
import IndigenousMedicinalEvolution from "./pages/IndigenousMedicinalEvolution";
import ZuluHealing from "./pages/ZuluHealing";
import XhosaHealing from "./pages/XhosaHealing";
import TswanaSothoHealing from "./pages/TswanaSothoHealing";
import YorubaHealing from "./pages/YorubaHealing";
import AshantiAkanHealing from "./pages/AshantiAkanHealing";
import BerberHealing from "./pages/BerberHealing";
import NubianHealing from "./pages/NubianHealing";
import EgyptianHealing from "./pages/EgyptianHealing";
import CentralEastAfricanHealing from "./pages/CentralEastAfricanHealing";
import ImplementsCeremonialCleansingDivinationHerbsSmudgeTraditions from "./pages/ImplementsCeremonialCleansingDivinationHerbsSmudgeTraditions";
import IntegrationOfSpiritualitySongAndMedicine from "./pages/IntegrationOfSpiritualitySongAndMedicine";
import PrinciplesOfHomeopathy from "./pages/PrinciplesOfHomeopathy";
import PotencyDilutionScales from "./pages/PotencyDilutionScales";
import CommonHomeopathicRemedies from "./pages/CommonHomeopathicRemedies";
import AfricanAdaptedHomeopathicApproaches from "./pages/AfricanAdaptedHomeopathicApproaches";
import TheThreeDoshasVataPittaKapha from "./pages/TheThreeDoshasVataPittaKapha";
import AyurvedicHerbsSpices from "./pages/AyurvedicHerbsSpices";
import HerbalFormulationsByDosha from "./pages/HerbalFormulationsByDosha";
import AyurvedicOilsBodyTreatments from "./pages/AyurvedicOilsBodyTreatments";
import AyurvedicMassageAbhyangaMarmaTherapy from "./pages/AyurvedicMassageAbhyangaMarmaTherapy";
import Seeds from "./pages/Seeds";
import Roots from "./pages/Roots";
import Bark from "./pages/Bark";
import Leaves from "./pages/Leaves";
import Flowers from "./pages/Flowers";
import Fruit from "./pages/Fruit";
import ResinSap from "./pages/ResinSap";
import SweetAlmondOil from "./pages/SweetAlmondOil";
import JojobaOil from "./pages/JojobaOil";
import CoconutOil from "./pages/CoconutOil";
import GrapeseedOil from "./pages/GrapeseedOil";
import ArganOil from "./pages/ArganOil";
import CastorOil from "./pages/CastorOil";
import AvocadoOil from "./pages/AvocadoOil";
import RosehipSeedOil from "./pages/RosehipSeedOil";
import HempSeedOil from "./pages/HempSeedOil";
import BlackSeedOil from "./pages/BlackSeedOil";
import TamanuOil from "./pages/TamanuOil";
import Lavender from "./pages/Lavender";
import ChamomileRomanGerman from "./pages/ChamomileRomanGerman";
import Rose from "./pages/Rose";
import Jasmine from "./pages/Jasmine";
import YlangYlang from "./pages/YlangYlang";
import Geranium from "./pages/Geranium";
import Eucalyptus from "./pages/Eucalyptus";
import Peppermint from "./pages/Peppermint";
import TeaTree from "./pages/TeaTree";
import Rosemary from "./pages/Rosemary";
import Patchouli from "./pages/Patchouli";
import Frankincense from "./pages/Frankincense";
import Myrrh from "./pages/Myrrh";
import Sandalwood from "./pages/Sandalwood";
import Lemon from "./pages/Lemon";
import OrangeSweet from "./pages/OrangeSweet";
import Bergamot from "./pages/Bergamot";
import PrinciplesOfAromatherapy from "./pages/PrinciplesOfAromatherapy";
import EssentialOilBlendingGuide from "./pages/EssentialOilBlendingGuide";
import DiffusionInhalationMethods from "./pages/DiffusionInhalationMethods";
import EmotionalEnergeticHealing from "./pages/EmotionalEnergeticHealing";
import ChakraMoodBlends from "./pages/ChakraMoodBlends";
import SafetyDilutionContraindications from "./pages/SafetyDilutionContraindications";
import IntroductionToTherapeuticMassage from "./pages/IntroductionToTherapeuticMassage";
import SwedishMassage from "./pages/SwedishMassage";
import DeepTissue from "./pages/DeepTissue";
import LymphaticDrainage from "./pages/LymphaticDrainage";
import AromatherapyMassage from "./pages/AromatherapyMassage";
import AyurvedicMassageAbhyanga from "./pages/AyurvedicMassageAbhyanga";
import MassageOilRecipes from "./pages/MassageOilRecipes";
import CarrierEssentialOilSynergies from "./pages/CarrierEssentialOilSynergies";
import BodyMindHealingRelaxation from "./pages/BodyMindHealingRelaxation";
import SleepAid from "./pages/SleepAid";
import EnergyVitality from "./pages/EnergyVitality";
import WeightManagement from "./pages/WeightManagement";
import DigestiveGutHealth from "./pages/DigestiveGutHealth";
import DetoxLiverHealth from "./pages/DetoxLiverHealth";
import ImmunityBoost from "./pages/ImmunityBoost";
import DarkMarkRemoval from "./pages/DarkMarkRemoval";
import AntiAging from "./pages/AntiAging";
import HydrationNourishment from "./pages/HydrationNourishment";
import AntiInflammatorySoothing from "./pages/AntiInflammatorySoothing";
import BrighteningAntiAging from "./pages/BrighteningAntiAging";
import CleansingAstringentToning from "./pages/CleansingAstringentToning";
import CalmingSoothingAromatherapy from "./pages/CalmingSoothingAromatherapy";
import AntibacterialAcneSupport from "./pages/AntibacterialAcneSupport";
import HairGrowthScalpHealth from "./pages/HairGrowthScalpHealth";
import PainReliefAntiInflammatory from "./pages/PainReliefAntiInflammatory";
import AntimicrobialAntiviral from "./pages/AntimicrobialAntiviral";
import HormonalMenstrualHealth from "./pages/HormonalMenstrualHealth";
import CirculationCardiovascular from "./pages/CirculationCardiovascular";
import AphrodisiacLibidoSupport from "./pages/AphrodisiacLibidoSupport";
import ArousalPerformance from "./pages/ArousalPerformance";
import StressReliefAnxiety from "./pages/StressReliefAnxiety";
import FocusMemory from "./pages/FocusMemory";
import EmotionalBalance from "./pages/EmotionalBalance";
import SpiritualGroundingCleansing from "./pages/SpiritualGroundingCleansing";
import AfricanRemedies from "./pages/AfricanRemedies";
import GlobalRemedies from "./pages/GlobalRemedies";
import TeasTonics from "./pages/TeasTonics";
import TincturesExtracts from "./pages/TincturesExtracts";
import BalmsSalves from "./pages/BalmsSalves";
import SkinHairRecipes from "./pages/SkinHairRecipes";
import MassageOilsBodyBlends from "./pages/MassageOilsBodyBlends";
import AromatherapyBlends from "./pages/AromatherapyBlends";
import SafetyDosage from "./pages/SafetyDosage";
import MixingChartsOilsBlends from "./pages/MixingChartsOilsBlends";
import DIYApothecaryTutorials from "./pages/DIYApothecaryTutorials";
import AromatherapyMassageCertificationGuides from "./pages/AromatherapyMassageCertificationGuides";
import HomeopathicBasics from "./pages/HomeopathicBasics";
import AyurvedicPrinciples from "./pages/AyurvedicPrinciples";
import HerbalNutrition from "./pages/HerbalNutrition";
import GutHealthProbiotics from "./pages/GutHealthProbiotics";
import DetoxCleansing from "./pages/DetoxCleansing";
import HerbalWeightManagement from "./pages/HerbalWeightManagement";
import RelaxationSleep from "./pages/RelaxationSleep";
import MoodAnxiety from "./pages/MoodAnxiety";
import SpiritualCleansing from "./pages/SpiritualCleansing";
import EnergyChakraBalancing from "./pages/EnergyChakraBalancing";
import ForumUserContributions from "./pages/ForumUserContributions";
import VideosTutorials from "./pages/VideosTutorials";
import EventsWorkshops from "./pages/EventsWorkshops";

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (product: Product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (id: string, quantity: number) => {
    setCartItems(prevItems =>
      prevItems.map(item => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Router>
      <div className="min-h-screen bg-cream-50">
        <Header
          cartCount={cartCount}
          onCartClick={() => setIsCartOpen(true)}
        />
        <main>
          <Routes>
            <Route path="/" element={<Home onAddToCart={handleAddToCart} />} />
            <Route path="/about/our-story" element={<OurStory />} />
            <Route path="/about/mission-&-philosophy" element={<MissionPhilosophy />} />
            <Route path="/about/contact" element={<Contact />} />
            <Route path="/shop-(marketplace)/herbal-blends-&-teas" element={<HerbalBlendsTeas />} />
            <Route path="/shop-(marketplace)/oils-(essential-&-carrier)" element={<OilsEssentialCarrier />} />
            <Route path="/shop-(marketplace)/massage-&-aromatherapy-kits" element={<MassageAromatherapyKits />} />
            <Route path="/shop-(marketplace)/diy-kits" element={<DIYKits />} />
            <Route path="/shop-(marketplace)/digital-products-(e-books,-pdfs)" element={<DigitalProductsEbooksPDFs />} />
            <Route path="/region-and-traditions/global-apothecary/european-folk-herbalism" element={<EuropeanFolkHerbalism />} />
            <Route path="/region-and-traditions/global-apothecary/chinese-medicine-(tcm)" element={<ChineseMedicineTCM />} />
            <Route path="/region-and-traditions/global-apothecary/indigenous-american" element={<IndigenousAmerican />} />
            <Route path="/region-and-traditions/global-apothecary/middle-eastern-herbalism" element={<MiddleEasternHerbalism />} />
            <Route path="/region-and-traditions/african-herbal-apothecary/history-of-african-herbalism/origins-and-cultural-lineage" element={<OriginsAndCulturalLineage />} />
            <Route path="/region-and-traditions/african-herbal-apothecary/history-of-african-herbalism/indigenous-medicinal-evolution" element={<IndigenousMedicinalEvolution />} />
            <Route path="/region-and-traditions/african-herbal-apothecary/african-healing-traditions-by-region/zulu-healing" element={<ZuluHealing />} />
            <Route path="/region-and-traditions/african-herbal-apothecary/african-healing-traditions-by-region/xhosa-healing" element={<XhosaHealing />} />
            <Route path="/region-and-traditions/african-herbal-apothecary/african-healing-traditions-by-region/tswana-&-sotho-healing" element={<TswanaSothoHealing />} />
            <Route path="/region-and-traditions/african-herbal-apothecary/african-healing-traditions-by-region/yoruba-healing" element={<YorubaHealing />} />
            <Route path="/region-and-traditions/african-herbal-apothecary/african-healing-traditions-by-region/ashanti-&-akan-healing" element={<AshantiAkanHealing />} />
            <Route path="/region-and-traditions/african-herbal-apothecary/african-healing-traditions-by-region/berber-healing" element={<BerberHealing />} />
            <Route path="/region-and-traditions/african-herbal-apothecary/african-healing-traditions-by-region/nubian-healing" element={<NubianHealing />} />
            <Route path="/region-and-traditions/african-herbal-apothecary/african-healing-traditions-by-region/egyptian-healing" element={<EgyptianHealing />} />
            <Route path="/region-and-traditions/african-herbal-apothecary/african-healing-traditions-by-region/central-&-east-african-healing" element={<CentralEastAfricanHealing />} />
            <Route path="/region-and-traditions/african-herbal-apothecary/african-healing-tools-&-rituals/implements,-ceremonial-cleansing,-divination-herbs,-smudge-traditions" element={<ImplementsCeremonialCleansingDivinationHerbsSmudgeTraditions />} />
            <Route path="/region-and-traditions/african-herbal-apothecary/african-healing-tools-&-rituals/integration-of-spirituality,-song,-and-medicine" element={<IntegrationOfSpiritualitySongAndMedicine />} />
            <Route path="/global-homeopathy-&-ayurveda/homeopathy/principles-of-homeopathy" element={<PrinciplesOfHomeopathy />} />
            <Route path="/global-homeopathy-&-ayurveda/homeopathy/potency-&-dilution-scales" element={<PotencyDilutionScales />} />
            <Route path="/global-homeopathy-&-ayurveda/homeopathy/common-homeopathic-remedies" element={<CommonHomeopathicRemedies />} />
            <Route path="/global-homeopathy-&-ayurveda/homeopathy/african-adapted-homeopathic-approaches" element={<AfricanAdaptedHomeopathicApproaches />} />
            <Route path="/global-homeopathy-&-ayurveda/ayurveda/the-three-doshas:-vata,-pitta,-kapha" element={<TheThreeDoshasVataPittaKapha />} />
            <Route path="/global-homeopathy-&-ayurveda/ayurveda/ayurvedic-herbs-&-spices" element={<AyurvedicHerbsSpices />} />
            <Route path="/global-homeopathy-&-ayurveda/ayurveda/herbal-formulations-by-dosha" element={<HerbalFormulationsByDosha />} />
            <Route path="/global-homeopathy-&-ayurveda/ayurveda/ayurvedic-oils-&-body-treatments" element={<AyurvedicOilsBodyTreatments />} />
            <Route path="/global-homeopathy-&-ayurveda/ayurveda/ayurvedic-massage-(abhyanga-&-marma-therapy)" element={<AyurvedicMassageAbhyangaMarmaTherapy />} />
            <Route path="/natural-ingredients-&-oils/plant-parts/seeds" element={<Seeds />} />
            <Route path="/natural-ingredients-&-oils/plant-parts/roots" element={<Roots />} />
            <Route path="/natural-ingredients-&-oils/plant-parts/bark" element={<Bark />} />
            <Route path="/natural-ingredients-&-oils/plant-parts/leaves" element={<Leaves />} />
            <Route path="/natural-ingredients-&-oils/plant-parts/flowers" element={<Flowers />} />
            <Route path="/natural-ingredients-&-oils/plant-parts/fruit" element={<Fruit />} />
            <Route path="/natural-ingredients-&-oils/plant-parts/resin-&-sap" element={<ResinSap />} />
            <Route path="/natural-ingredients-&-oils/carrier-oils/sweet-almond-oil" element={<SweetAlmondOil />} />
            <Route path="/natural-ingredients-&-oils/carrier-oils/jojoba-oil" element={<JojobaOil />} />
            <Route path="/natural-ingredients-&-oils/carrier-oils/coconut-oil" element={<CoconutOil />} />
            <Route path="/natural-ingredients-&-oils/carrier-oils/grapeseed-oil" element={<GrapeseedOil />} />
            <Route path="/natural-ingredients-&-oils/carrier-oils/argan-oil" element={<ArganOil />} />
            <Route path="/natural-ingredients-&-oils/carrier-oils/castor-oil" element={<CastorOil />} />
            <Route path="/natural-ingredients-&-oils/carrier-oils/avocado-oil" element={<AvocadoOil />} />
            <Route path="/natural-ingredients-&-oils/carrier-oils/rosehip-seed-oil" element={<RosehipSeedOil />} />
            <Route path="/natural-ingredients-&-oils/carrier-oils/hemp-seed-oil" element={<HempSeedOil />} />
            <Route path="/natural-ingredients-&-oils/carrier-oils/black-seed-oil" element={<BlackSeedOil />} />
            <Route path="/natural-ingredients-&-oils/carrier-oils/tamanu-oil" element={<TamanuOil />} />
            <Route path="/natural-ingredients-&-oils/essential-oils/lavender" element={<Lavender />} />
            <Route path="/natural-ingredients-&-oils/essential-oils/chamomile-(roman/german)" element={<ChamomileRomanGerman />} />
            <Route path="/natural-ingredients-&-oils/essential-oils/rose" element={<Rose />} />
            <Route path="/natural-ingredients-&-oils/essential-oils/jasmine" element={<Jasmine />} />
            <Route path="/natural-ingredients-&-oils/essential-oils/ylang-ylang" element={<YlangYlang />} />
            <Route path="/natural-ingredients-&-oils/essential-oils/geranium" element={<Geranium />} />
            <Route path="/natural-ingredients-&-oils/essential-oils/eucalyptus" element={<Eucalyptus />} />
            <Route path="/natural-ingredients-&-oils/essential-oils/peppermint" element={<Peppermint />} />
            <Route path="/natural-ingredients-&-oils/essential-oils/tea-tree" element={<TeaTree />} />
            <Route path="/natural-ingredients-&-oils/essential-oils/rosemary" element={<Rosemary />} />
            <Route path="/natural-ingredients-&-oils/essential-oils/patchouli" element={<Patchouli />} />
            <Route path="/natural-ingredients-&-oils/essential-oils/frankincense" element={<Frankincense />} />
            <Route path="/natural-ingredients-&-oils/essential-oils/myrrh" element={<Myrrh />} />
            <Route path="/natural-ingredients-&-oils/essential-oils/sandalwood" element={<Sandalwood />} />
            <Route path="/natural-ingredients-&-oils/essential-oils/lemon" element={<Lemon />} />
            <Route path="/natural-ingredients-&-oils/essential-oils/orange-(sweet)" element={<OrangeSweet />} />
            <Route path="/natural-ingredients-&-oils/essential-oils/bergamot" element={<Bergamot />} />
            <Route path="/aromatherapy-&-massage-therapy/aromatherapy/principles-of-aromatherapy" element={<PrinciplesOfAromatherapy />} />
            <Route path="/aromatherapy-&-massage-therapy/aromatherapy/essential-oil-blending-guide" element={<EssentialOilBlendingGuide />} />
            <Route path="/aromatherapy-&-massage-therapy/aromatherapy/diffusion-&-inhalation-methods" element={<DiffusionInhalationMethods />} />
            <Route path="/aromatherapy-&-massage-therapy/aromatherapy/emotional-&-energetic-healing" element={<EmotionalEnergeticHealing />} />
            <Route path="/aromatherapy-&-massage-therapy/aromatherapy/chakra-&-mood-blends" element={<ChakraMoodBlends />} />
            <Route path="/aromatherapy-&-massage-therapy/aromatherapy/safety,-dilution-&-contraindications" element={<SafetyDilutionContraindications />} />
            <Route path="/aromatherapy-&-massage-therapy/massage-therapy/introduction-to-therapeutic-massage" element={<IntroductionToTherapeuticMassage />} />
            <Route path="/aromatherapy-&-massage-therapy/massage-therapy/massage-techniques/swedish-massage" element={<SwedishMassage />} />
            <Route path="/aromatherapy-&-massage-therapy/massage-therapy/massage-techniques/deep-tissue" element={<DeepTissue />} />
            <Route path="/aromatherapy-&-massage-therapy/massage-therapy/massage-techniques/lymphatic-drainage" element={<LymphaticDrainage />} />
            <Route path="/aromatherapy-&-massage-therapy/massage-therapy/massage-techniques/aromatherapy-massage" element={<AromatherapyMassage />} />
            <Route path="/aromatherapy-&-massage-therapy/massage-therapy/massage-techniques/ayurvedic-massage-(abhyanga)" element={<AyurvedicMassageAbhyanga />} />
            <Route path="/aromatherapy-&-massage-therapy/massage-therapy/massage-oil-recipes" element={<MassageOilRecipes />} />
            <Route path="/aromatherapy-&-massage-therapy/massage-therapy/carrier-&-essential-oil-synergies" element={<CarrierEssentialOilSynergies />} />
            <Route path="/aromatherapy-&-massage-therapy/massage-therapy/body-mind-healing-&-relaxation" element={<BodyMindHealingRelaxation />} />
            <Route path="/benefits/physical/sleep-aid" element={<SleepAid />} />
            <Route path="/benefits/physical/energy-&-vitality" element={<EnergyVitality />} />
            <Route path="/benefits/physical/weight-management" element={<WeightManagement />} />
            <Route path="/benefits/physical/digestive-&-gut-health" element={<DigestiveGutHealth />} />
            <Route path="/benefits/physical/detox-&-liver-health" element={<DetoxLiverHealth />} />
            <Route path="/benefits/physical/immunity-boost" element={<ImmunityBoost />} />
            <Route path="/benefits/physical/skin-health/dark-mark-removal" element={<DarkMarkRemoval />} />
            <Route path="/benefits/physical/skin-health/anti-aging" element={<AntiAging />} />
            <Route path="/benefits/physical/skin-health/hydration-&-nourishment" element={<HydrationNourishment />} />
            <Route path="/benefits/physical/skin-health/anti-inflammatory-&-soothing" element={<AntiInflammatorySoothing />} />
            <Route path="/benefits/physical/skin-health/brightening-&-anti-aging" element={<BrighteningAntiAging />} />
            <Route path="/benefits/physical/skin-health/cleansing,-astringent-&-toning" element={<CleansingAstringentToning />} />
            <Route path="/benefits/physical/skin-health/calming,-soothing-&-aromatherapy" element={<CalmingSoothingAromatherapy />} />
            <Route path="/benefits/physical/skin-health/antibacterial-&-acne-support" element={<AntibacterialAcneSupport />} />
            <Route path="/benefits/physical/hair-growth-&-scalp-health" element={<HairGrowthScalpHealth />} />
            <Route path="/benefits/physical/pain-relief-&-anti-inflammatory" element={<PainReliefAntiInflammatory />} />
            <Route path="/benefits/physical/antimicrobial-&-antiviral" element={<AntimicrobialAntiviral />} />
            <Route path="/benefits/physical/hormonal-&-menstrual-health" element={<HormonalMenstrualHealth />} />
            <Route path="/benefits/physical/circulation-&-cardiovascular" element={<CirculationCardiovascular />} />
            <Route path="/benefits/physical/aphrodisiac-/-libido-support" element={<AphrodisiacLibidoSupport />} />
            <Route path="/benefits/physical/arousal-&-performance" element={<ArousalPerformance />} />
            <Route path="/benefits/emotional-&-mental-health/stress-relief-&-anxiety" element={<StressReliefAnxiety />} />
            <Route path="/benefits/emotional-&-mental-health/focus-&-memory" element={<FocusMemory />} />
            <Route path="/benefits/emotional-&-mental-health/emotional-balance" element={<EmotionalBalance />} />
            <Route path="/benefits/emotional-&-mental-health/spiritual-grounding-&-cleansing" element={<SpiritualGroundingCleansing />} />
            <Route path="/diy-&-recipes/homeopathy-&-apothecary/african-remedies" element={<AfricanRemedies />} />
            <Route path="/diy-&-recipes/homeopathy-&-apothecary/global-remedies" element={<GlobalRemedies />} />
            <Route path="/diy-&-recipes/teas-&-tonics" element={<TeasTonics />} />
            <Route path="/diy-&-recipes/tinctures-&-extracts" element={<TincturesExtracts />} />
            <Route path="/diy-&-recipes/balms-&-salves" element={<BalmsSalves />} />
            <Route path="/diy-&-recipes/skin-&-hair-recipes" element={<SkinHairRecipes />} />
            <Route path="/diy-&-recipes/massage-oils-&-body-blends" element={<MassageOilsBodyBlends />} />
            <Route path="/diy-&-recipes/aromatherapy-blends" element={<AromatherapyBlends />} />
            <Route path="/education-hub/safety-&-dosage" element={<SafetyDosage />} />
            <Route path="/education-hub/mixing-charts-(oils-&-blends)" element={<MixingChartsOilsBlends />} />
            <Route path="/education-hub/diy-apothecary-tutorials" element={<DIYApothecaryTutorials />} />
            <Route path="/education-hub/aromatherapy-&-massage-certification-guides" element={<AromatherapyMassageCertificationGuides />} />
            <Route path="/education-hub/homeopathic-basics" element={<HomeopathicBasics />} />
            <Route path="/education-hub/ayurvedic-principles" element={<AyurvedicPrinciples />} />
            <Route path="/nutrition-&-wellness/herbal-nutrition" element={<HerbalNutrition />} />
            <Route path="/nutrition-&-wellness/gut-health-&-probiotics" element={<GutHealthProbiotics />} />
            <Route path="/nutrition-&-wellness/detox-&-cleansing" element={<DetoxCleansing />} />
            <Route path="/nutrition-&-wellness/herbal-weight-management" element={<HerbalWeightManagement />} />
            <Route path="/mind-&-spirit/relaxation-&-sleep" element={<RelaxationSleep />} />
            <Route path="/mind-&-spirit/mood-&-anxiety" element={<MoodAnxiety />} />
            <Route path="/mind-&-spirit/focus-&-memory" element={<FocusMemory />} />
            <Route path="/mind-&-spirit/spiritual-cleansing" element={<SpiritualCleansing />} />
            <Route path="/mind-&-spirit/energy-&-chakra-balancing" element={<EnergyChakraBalancing />} />
            <Route path="/community-&-learning/forum-/-user-contributions" element={<ForumUserContributions />} />
            <Route path="/community-&-learning/videos-&-tutorials" element={<VideosTutorials />} />
            <Route path="/community-&-learning/events-&-workshops" element={<EventsWorkshops />} />
          </Routes>
        </main>
        <Footer />
        <Cart
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          items={cartItems}
          onUpdateQuantity={handleUpdateQuantity}
          onRemove={handleRemoveItem}
        />
      </div>
    </Router>
  );
}

export default App;
