import BaseContainer from "../../../layout/container";
import TitleSection from "../../../layout/title/section";
import { AccordionCustomIcon } from "../../../ui/accordion";

const FAQSection = () => {
  return (
    <div id="faq">
      <BaseContainer>
        <TitleSection title="FAQ" description="Questions fréquemment posées" />
        <AccordionCustomIcon
          title="Comment suivre la livraison de ma commande ?"
          description="Vous avez passé commande sur notre site Internet et vous souhaitez
            connaître votre date de livraison. En règle générale, une commande
            est livrée dans un délai de 5 jours ouvrés à partir de la date de
            paiement de la commande. Si ce délai est dépassé, vous pouvez
            interroger notre service client en utilisant au 
            +243 898 359 903"
        />
        <AccordionCustomIcon
          title="Qu’est ce qu’une plaque bilembo ?"
          description="Une plaque bilembo est une plaque en céramique doté d'un Quick Response sous forme d’une matrice composée de quatre carrés de tailles différentes placés aux quatre coins et d’une multitude de plus petits points disposés en leur intérieu. Chaque code Quick Response proposé par bilembo permet d’accéder directement à une page Internet unique sans devoir entrer d’adresse URL."
        />
        <AccordionCustomIcon
          title="Comment lire un code QR à l’aide de mon Smartphone ou ma tablette ?"
          description="Vous pouvez lire un code QR bilembo grâce à une application de photo pour les Iphone et les Les androïdes récents et pour d'autres grâce à une application téléchargée gratuitement à partir de votre Smartphone. Nous recommandons l'un des lecteurs suivants :I-nigma, Neoreader, MobileTag. Ces applications sont disponibles pour tous types de smartphones : iPhone, Android, Windows Phone, Blackberry."
        />
        <AccordionCustomIcon
          title="Des bugs d'affichage apparaissent sur le site ?"
          description="Votre navigateur est peut-être obsolète : si vous utilisez une version d'Internet Explorer antérieure à IE8, nous recommandons vivement d'utiliser un navigateur récent respectant les derniers standards du web. Cela vous garantira une bonne expérience de navigation, et également une bonne sécurité. Vous pouvez télécharger Chrome, Firefox ou une version à jour d'Internet Explorer."
        />
      </BaseContainer>
    </div>
  );
};

export default FAQSection;
